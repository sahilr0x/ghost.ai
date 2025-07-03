"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseServer = CloseServer;
exports.InitializeWebSocketServer = InitializeWebSocketServer;
const ws_1 = require("ws");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function handleClientConnection(ws, clients) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("New client connected");
        clients.add(ws);
        const folderPath = path_1.default.resolve(__dirname, "../recordings");
        if (!fs_1.default.existsSync(folderPath)) {
            fs_1.default.mkdirSync(folderPath, { recursive: true });
        }
        const filename = `recording-${Date.now()}.webm`;
        const filePath = path_1.default.join(folderPath, filename);
        console.log("Saving file to:", filePath);
        const writeStream = fs_1.default.createWriteStream(filePath);
        ws.on("message", (data) => {
            if (Buffer.isBuffer(data)) {
                console.log(`Received chunk of size: ${data.length} bytes`);
                writeStream.write(data);
            }
            else {
                console.warn("Received non-blob data, ignoring");
            }
        });
        ws.on("close", () => {
            console.log("Client disconnected, closing file");
            writeStream.end();
            clients.delete(ws);
        });
        ws.on("error", (error) => {
            console.error("WebSocket error:", error);
            writeStream.end();
            clients.delete(ws);
        });
    });
}
function createWebSocketServer(port) {
    const wss = new ws_1.WebSocketServer({ port });
    const clients = new Set();
    wss.on("connection", (ws) => {
        handleClientConnection(ws, clients);
        console.log(`Total clients connected: ${clients.size}`);
    });
    wss.on("error", (error) => {
        console.error("WebSocket server error:", error);
    });
    return { wss, clients };
}
function CloseServer(serverState) {
    serverState.wss.close(() => {
        console.log("Server closed");
    });
}
function InitializeWebSocketServer(port) {
    const serverState = createWebSocketServer(port);
    return {
        close: () => CloseServer(serverState),
        getClients: () => serverState.clients,
        getServer: () => serverState.wss,
    };
}
