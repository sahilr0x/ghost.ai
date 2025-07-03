import WebSocket, { WebSocketServer } from "ws";
import fs from "fs";
import path from "path";

interface ServerState {
  wss: WebSocketServer;
  clients: Set<WebSocket>;
}

async function handleClientConnection(
  ws: WebSocket,
  clients: Set<WebSocket>
): Promise<void> {
  console.log("New client connected");
  clients.add(ws);

  const folderPath = path.resolve(__dirname, "../recordings");
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filename = `recording-${Date.now()}.webm`;
  const filePath = path.join(folderPath, filename);
  console.log("Saving file to:", filePath);
  const writeStream = fs.createWriteStream(filePath);

  ws.on("message", (data: Buffer) => {
    if (Buffer.isBuffer(data)) {
      console.log(`Received chunk of size: ${data.length} bytes`);
      writeStream.write(data);
    } else {
      console.warn("Received non-blob data, ignoring");
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected, closing file");
    writeStream.end();
    clients.delete(ws);
  });

  ws.on("error", (error: Error) => {
    console.error("WebSocket error:", error);
    writeStream.end();
    clients.delete(ws);
  });
}

function createWebSocketServer(port: number): ServerState {
  const wss = new WebSocketServer({ port });
  const clients = new Set<WebSocket>();

  wss.on("connection", (ws: WebSocket) => {
    handleClientConnection(ws, clients);
    console.log(`Total clients connected: ${clients.size}`);
  });

  wss.on("error", (error: Error) => {
    console.error("WebSocket server error:", error);
  });

  return { wss, clients };
}

export function CloseServer(serverState: ServerState): void {
  serverState.wss.close(() => {
    console.log("Server closed");
  });
}

export function InitializeWebSocketServer(port: number) {
  const serverState = createWebSocketServer(port);

  return {
    close: () => CloseServer(serverState),
    getClients: () => serverState.clients,
    getServer: () => serverState.wss,
  };
}
