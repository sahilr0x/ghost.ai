
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model MeetingParticipant
 * 
 */
export type MeetingParticipant = $Result.DefaultSelection<Prisma.$MeetingParticipantPayload>
/**
 * Model Summary
 * 
 */
export type Summary = $Result.DefaultSelection<Prisma.$SummaryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const STATUS: {
  UPCOMING: 'UPCOMING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type STATUS = (typeof STATUS)[keyof typeof STATUS]

}

export type STATUS = $Enums.STATUS

export const STATUS: typeof $Enums.STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingParticipant`: Exposes CRUD operations for the **MeetingParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingParticipants
    * const meetingParticipants = await prisma.meetingParticipant.findMany()
    * ```
    */
  get meetingParticipant(): Prisma.MeetingParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summary`: Exposes CRUD operations for the **Summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summaries
    * const summaries = await prisma.summary.findMany()
    * ```
    */
  get summary(): Prisma.SummaryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Meeting: 'Meeting',
    MeetingParticipant: 'MeetingParticipant',
    Summary: 'Summary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "meeting" | "meetingParticipant" | "summary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      MeetingParticipant: {
        payload: Prisma.$MeetingParticipantPayload<ExtArgs>
        fields: Prisma.MeetingParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          findFirst: {
            args: Prisma.MeetingParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          findMany: {
            args: Prisma.MeetingParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          create: {
            args: Prisma.MeetingParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          createMany: {
            args: Prisma.MeetingParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          delete: {
            args: Prisma.MeetingParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          update: {
            args: Prisma.MeetingParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          deleteMany: {
            args: Prisma.MeetingParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          upsert: {
            args: Prisma.MeetingParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          aggregate: {
            args: Prisma.MeetingParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingParticipant>
          }
          groupBy: {
            args: Prisma.MeetingParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingParticipantCountAggregateOutputType> | number
          }
        }
      }
      Summary: {
        payload: Prisma.$SummaryPayload<ExtArgs>
        fields: Prisma.SummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findFirst: {
            args: Prisma.SummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findMany: {
            args: Prisma.SummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          create: {
            args: Prisma.SummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          createMany: {
            args: Prisma.SummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          delete: {
            args: Prisma.SummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          update: {
            args: Prisma.SummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          deleteMany: {
            args: Prisma.SummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          upsert: {
            args: Prisma.SummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          aggregate: {
            args: Prisma.SummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummary>
          }
          groupBy: {
            args: Prisma.SummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    meeting?: MeetingOmit
    meetingParticipant?: MeetingParticipantOmit
    summary?: SummaryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    MeetingParticipant: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingParticipant?: boolean | UserCountOutputTypeCountMeetingParticipantArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    participants: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | MeetingCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    MeetingParticipant?: boolean | User$MeetingParticipantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MeetingParticipant?: boolean | User$MeetingParticipantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      MeetingParticipant: Prisma.$MeetingParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MeetingParticipant<T extends User$MeetingParticipantArgs<ExtArgs> = {}>(args?: Subset<T, User$MeetingParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.MeetingParticipant
   */
  export type User$MeetingParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    cursor?: MeetingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    title: string | null
    status: $Enums.STATUS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    status: $Enums.STATUS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    title: string
    status: $Enums.STATUS
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participants?: boolean | Meeting$participantsArgs<ExtArgs>
    summary?: boolean | Meeting$summaryArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Meeting$participantsArgs<ExtArgs>
    summary?: boolean | Meeting$summaryArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      participants: Prisma.$MeetingParticipantPayload<ExtArgs>[]
      summary: Prisma.$SummaryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      status: $Enums.STATUS
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Meeting$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summary<T extends Meeting$summaryArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$summaryArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly status: FieldRef<"Meeting", 'STATUS'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.participants
   */
  export type Meeting$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    cursor?: MeetingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * Meeting.summary
   */
  export type Meeting$summaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model MeetingParticipant
   */

  export type AggregateMeetingParticipant = {
    _count: MeetingParticipantCountAggregateOutputType | null
    _avg: MeetingParticipantAvgAggregateOutputType | null
    _sum: MeetingParticipantSumAggregateOutputType | null
    _min: MeetingParticipantMinAggregateOutputType | null
    _max: MeetingParticipantMaxAggregateOutputType | null
  }

  export type MeetingParticipantAvgAggregateOutputType = {
    participantCount: number | null
  }

  export type MeetingParticipantSumAggregateOutputType = {
    participantCount: number | null
  }

  export type MeetingParticipantMinAggregateOutputType = {
    id: string | null
    meetingId: string | null
    participantId: string | null
    participantCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingParticipantMaxAggregateOutputType = {
    id: string | null
    meetingId: string | null
    participantId: string | null
    participantCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingParticipantCountAggregateOutputType = {
    id: number
    meetingId: number
    participantId: number
    participantCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingParticipantAvgAggregateInputType = {
    participantCount?: true
  }

  export type MeetingParticipantSumAggregateInputType = {
    participantCount?: true
  }

  export type MeetingParticipantMinAggregateInputType = {
    id?: true
    meetingId?: true
    participantId?: true
    participantCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingParticipantMaxAggregateInputType = {
    id?: true
    meetingId?: true
    participantId?: true
    participantCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingParticipantCountAggregateInputType = {
    id?: true
    meetingId?: true
    participantId?: true
    participantCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingParticipant to aggregate.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingParticipants
    **/
    _count?: true | MeetingParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingParticipantMaxAggregateInputType
  }

  export type GetMeetingParticipantAggregateType<T extends MeetingParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingParticipant[P]>
      : GetScalarType<T[P], AggregateMeetingParticipant[P]>
  }




  export type MeetingParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithAggregationInput | MeetingParticipantOrderByWithAggregationInput[]
    by: MeetingParticipantScalarFieldEnum[] | MeetingParticipantScalarFieldEnum
    having?: MeetingParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingParticipantCountAggregateInputType | true
    _avg?: MeetingParticipantAvgAggregateInputType
    _sum?: MeetingParticipantSumAggregateInputType
    _min?: MeetingParticipantMinAggregateInputType
    _max?: MeetingParticipantMaxAggregateInputType
  }

  export type MeetingParticipantGroupByOutputType = {
    id: string
    meetingId: string
    participantId: string
    participantCount: number
    createdAt: Date
    updatedAt: Date
    _count: MeetingParticipantCountAggregateOutputType | null
    _avg: MeetingParticipantAvgAggregateOutputType | null
    _sum: MeetingParticipantSumAggregateOutputType | null
    _min: MeetingParticipantMinAggregateOutputType | null
    _max: MeetingParticipantMaxAggregateOutputType | null
  }

  type GetMeetingParticipantGroupByPayload<T extends MeetingParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingParticipantGroupByOutputType[P]>
        }
      >
    >


  export type MeetingParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    participantId?: boolean
    participantCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    participant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    participantId?: boolean
    participantCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    participant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    participantId?: boolean
    participantCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    participant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectScalar = {
    id?: boolean
    meetingId?: boolean
    participantId?: boolean
    participantCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meetingId" | "participantId" | "participantCount" | "createdAt" | "updatedAt", ExtArgs["result"]["meetingParticipant"]>
  export type MeetingParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    participant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    participant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    participant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingParticipant"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      participant: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meetingId: string
      participantId: string
      participantCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meetingParticipant"]>
    composites: {}
  }

  type MeetingParticipantGetPayload<S extends boolean | null | undefined | MeetingParticipantDefaultArgs> = $Result.GetResult<Prisma.$MeetingParticipantPayload, S>

  type MeetingParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingParticipantCountAggregateInputType | true
    }

  export interface MeetingParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingParticipant'], meta: { name: 'MeetingParticipant' } }
    /**
     * Find zero or one MeetingParticipant that matches the filter.
     * @param {MeetingParticipantFindUniqueArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingParticipantFindUniqueArgs>(args: SelectSubset<T, MeetingParticipantFindUniqueArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingParticipantFindUniqueOrThrowArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindFirstArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingParticipantFindFirstArgs>(args?: SelectSubset<T, MeetingParticipantFindFirstArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindFirstOrThrowArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingParticipants
     * const meetingParticipants = await prisma.meetingParticipant.findMany()
     * 
     * // Get first 10 MeetingParticipants
     * const meetingParticipants = await prisma.meetingParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingParticipantFindManyArgs>(args?: SelectSubset<T, MeetingParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingParticipant.
     * @param {MeetingParticipantCreateArgs} args - Arguments to create a MeetingParticipant.
     * @example
     * // Create one MeetingParticipant
     * const MeetingParticipant = await prisma.meetingParticipant.create({
     *   data: {
     *     // ... data to create a MeetingParticipant
     *   }
     * })
     * 
     */
    create<T extends MeetingParticipantCreateArgs>(args: SelectSubset<T, MeetingParticipantCreateArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingParticipants.
     * @param {MeetingParticipantCreateManyArgs} args - Arguments to create many MeetingParticipants.
     * @example
     * // Create many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingParticipantCreateManyArgs>(args?: SelectSubset<T, MeetingParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingParticipants and returns the data saved in the database.
     * @param {MeetingParticipantCreateManyAndReturnArgs} args - Arguments to create many MeetingParticipants.
     * @example
     * // Create many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingParticipants and only return the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingParticipant.
     * @param {MeetingParticipantDeleteArgs} args - Arguments to delete one MeetingParticipant.
     * @example
     * // Delete one MeetingParticipant
     * const MeetingParticipant = await prisma.meetingParticipant.delete({
     *   where: {
     *     // ... filter to delete one MeetingParticipant
     *   }
     * })
     * 
     */
    delete<T extends MeetingParticipantDeleteArgs>(args: SelectSubset<T, MeetingParticipantDeleteArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingParticipant.
     * @param {MeetingParticipantUpdateArgs} args - Arguments to update one MeetingParticipant.
     * @example
     * // Update one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingParticipantUpdateArgs>(args: SelectSubset<T, MeetingParticipantUpdateArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingParticipants.
     * @param {MeetingParticipantDeleteManyArgs} args - Arguments to filter MeetingParticipants to delete.
     * @example
     * // Delete a few MeetingParticipants
     * const { count } = await prisma.meetingParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingParticipantDeleteManyArgs>(args?: SelectSubset<T, MeetingParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingParticipantUpdateManyArgs>(args: SelectSubset<T, MeetingParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingParticipants and returns the data updated in the database.
     * @param {MeetingParticipantUpdateManyAndReturnArgs} args - Arguments to update many MeetingParticipants.
     * @example
     * // Update many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingParticipants and only return the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingParticipant.
     * @param {MeetingParticipantUpsertArgs} args - Arguments to update or create a MeetingParticipant.
     * @example
     * // Update or create a MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.upsert({
     *   create: {
     *     // ... data to create a MeetingParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingParticipant we want to update
     *   }
     * })
     */
    upsert<T extends MeetingParticipantUpsertArgs>(args: SelectSubset<T, MeetingParticipantUpsertArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantCountArgs} args - Arguments to filter MeetingParticipants to count.
     * @example
     * // Count the number of MeetingParticipants
     * const count = await prisma.meetingParticipant.count({
     *   where: {
     *     // ... the filter for the MeetingParticipants we want to count
     *   }
     * })
    **/
    count<T extends MeetingParticipantCountArgs>(
      args?: Subset<T, MeetingParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingParticipantAggregateArgs>(args: Subset<T, MeetingParticipantAggregateArgs>): Prisma.PrismaPromise<GetMeetingParticipantAggregateType<T>>

    /**
     * Group by MeetingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingParticipantGroupByArgs['orderBy'] }
        : { orderBy?: MeetingParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingParticipant model
   */
  readonly fields: MeetingParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingParticipant model
   */
  interface MeetingParticipantFieldRefs {
    readonly id: FieldRef<"MeetingParticipant", 'String'>
    readonly meetingId: FieldRef<"MeetingParticipant", 'String'>
    readonly participantId: FieldRef<"MeetingParticipant", 'String'>
    readonly participantCount: FieldRef<"MeetingParticipant", 'Int'>
    readonly createdAt: FieldRef<"MeetingParticipant", 'DateTime'>
    readonly updatedAt: FieldRef<"MeetingParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeetingParticipant findUnique
   */
  export type MeetingParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant findUniqueOrThrow
   */
  export type MeetingParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant findFirst
   */
  export type MeetingParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingParticipants.
     */
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant findFirstOrThrow
   */
  export type MeetingParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingParticipants.
     */
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant findMany
   */
  export type MeetingParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipants to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant create
   */
  export type MeetingParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingParticipant.
     */
    data: XOR<MeetingParticipantCreateInput, MeetingParticipantUncheckedCreateInput>
  }

  /**
   * MeetingParticipant createMany
   */
  export type MeetingParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingParticipants.
     */
    data: MeetingParticipantCreateManyInput | MeetingParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingParticipant createManyAndReturn
   */
  export type MeetingParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingParticipants.
     */
    data: MeetingParticipantCreateManyInput | MeetingParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingParticipant update
   */
  export type MeetingParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingParticipant.
     */
    data: XOR<MeetingParticipantUpdateInput, MeetingParticipantUncheckedUpdateInput>
    /**
     * Choose, which MeetingParticipant to update.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant updateMany
   */
  export type MeetingParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingParticipants.
     */
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MeetingParticipants to update
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to update.
     */
    limit?: number
  }

  /**
   * MeetingParticipant updateManyAndReturn
   */
  export type MeetingParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * The data used to update MeetingParticipants.
     */
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MeetingParticipants to update
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingParticipant upsert
   */
  export type MeetingParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingParticipant to update in case it exists.
     */
    where: MeetingParticipantWhereUniqueInput
    /**
     * In case the MeetingParticipant found by the `where` argument doesn't exist, create a new MeetingParticipant with this data.
     */
    create: XOR<MeetingParticipantCreateInput, MeetingParticipantUncheckedCreateInput>
    /**
     * In case the MeetingParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingParticipantUpdateInput, MeetingParticipantUncheckedUpdateInput>
  }

  /**
   * MeetingParticipant delete
   */
  export type MeetingParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter which MeetingParticipant to delete.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant deleteMany
   */
  export type MeetingParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingParticipants to delete
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to delete.
     */
    limit?: number
  }

  /**
   * MeetingParticipant without action
   */
  export type MeetingParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Summary
   */

  export type AggregateSummary = {
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  export type SummaryMinAggregateOutputType = {
    id: string | null
    meetingId: string | null
    videoUrl: string | null
    transcript: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type SummaryMaxAggregateOutputType = {
    id: string | null
    meetingId: string | null
    videoUrl: string | null
    transcript: string | null
    summary: string | null
    createdAt: Date | null
  }

  export type SummaryCountAggregateOutputType = {
    id: number
    meetingId: number
    videoUrl: number
    transcript: number
    summary: number
    createdAt: number
    _all: number
  }


  export type SummaryMinAggregateInputType = {
    id?: true
    meetingId?: true
    videoUrl?: true
    transcript?: true
    summary?: true
    createdAt?: true
  }

  export type SummaryMaxAggregateInputType = {
    id?: true
    meetingId?: true
    videoUrl?: true
    transcript?: true
    summary?: true
    createdAt?: true
  }

  export type SummaryCountAggregateInputType = {
    id?: true
    meetingId?: true
    videoUrl?: true
    transcript?: true
    summary?: true
    createdAt?: true
    _all?: true
  }

  export type SummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summary to aggregate.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Summaries
    **/
    _count?: true | SummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryMaxAggregateInputType
  }

  export type GetSummaryAggregateType<T extends SummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummary[P]>
      : GetScalarType<T[P], AggregateSummary[P]>
  }




  export type SummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithAggregationInput | SummaryOrderByWithAggregationInput[]
    by: SummaryScalarFieldEnum[] | SummaryScalarFieldEnum
    having?: SummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryCountAggregateInputType | true
    _min?: SummaryMinAggregateInputType
    _max?: SummaryMaxAggregateInputType
  }

  export type SummaryGroupByOutputType = {
    id: string
    meetingId: string
    videoUrl: string
    transcript: string
    summary: string
    createdAt: Date
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  type GetSummaryGroupByPayload<T extends SummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryGroupByOutputType[P]>
        }
      >
    >


  export type SummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    videoUrl?: boolean
    transcript?: boolean
    summary?: boolean
    createdAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    videoUrl?: boolean
    transcript?: boolean
    summary?: boolean
    createdAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    videoUrl?: boolean
    transcript?: boolean
    summary?: boolean
    createdAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectScalar = {
    id?: boolean
    meetingId?: boolean
    videoUrl?: boolean
    transcript?: boolean
    summary?: boolean
    createdAt?: boolean
  }

  export type SummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meetingId" | "videoUrl" | "transcript" | "summary" | "createdAt", ExtArgs["result"]["summary"]>
  export type SummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }
  export type SummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }
  export type SummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }

  export type $SummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Summary"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meetingId: string
      videoUrl: string
      transcript: string
      summary: string
      createdAt: Date
    }, ExtArgs["result"]["summary"]>
    composites: {}
  }

  type SummaryGetPayload<S extends boolean | null | undefined | SummaryDefaultArgs> = $Result.GetResult<Prisma.$SummaryPayload, S>

  type SummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SummaryCountAggregateInputType | true
    }

  export interface SummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Summary'], meta: { name: 'Summary' } }
    /**
     * Find zero or one Summary that matches the filter.
     * @param {SummaryFindUniqueArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryFindUniqueArgs>(args: SelectSubset<T, SummaryFindUniqueArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Summary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SummaryFindUniqueOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryFindFirstArgs>(args?: SelectSubset<T, SummaryFindFirstArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summaries
     * const summaries = await prisma.summary.findMany()
     * 
     * // Get first 10 Summaries
     * const summaries = await prisma.summary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryWithIdOnly = await prisma.summary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryFindManyArgs>(args?: SelectSubset<T, SummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Summary.
     * @param {SummaryCreateArgs} args - Arguments to create a Summary.
     * @example
     * // Create one Summary
     * const Summary = await prisma.summary.create({
     *   data: {
     *     // ... data to create a Summary
     *   }
     * })
     * 
     */
    create<T extends SummaryCreateArgs>(args: SelectSubset<T, SummaryCreateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Summaries.
     * @param {SummaryCreateManyArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryCreateManyArgs>(args?: SelectSubset<T, SummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Summaries and returns the data saved in the database.
     * @param {SummaryCreateManyAndReturnArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Summaries and only return the `id`
     * const summaryWithIdOnly = await prisma.summary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Summary.
     * @param {SummaryDeleteArgs} args - Arguments to delete one Summary.
     * @example
     * // Delete one Summary
     * const Summary = await prisma.summary.delete({
     *   where: {
     *     // ... filter to delete one Summary
     *   }
     * })
     * 
     */
    delete<T extends SummaryDeleteArgs>(args: SelectSubset<T, SummaryDeleteArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Summary.
     * @param {SummaryUpdateArgs} args - Arguments to update one Summary.
     * @example
     * // Update one Summary
     * const summary = await prisma.summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryUpdateArgs>(args: SelectSubset<T, SummaryUpdateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Summaries.
     * @param {SummaryDeleteManyArgs} args - Arguments to filter Summaries to delete.
     * @example
     * // Delete a few Summaries
     * const { count } = await prisma.summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryDeleteManyArgs>(args?: SelectSubset<T, SummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryUpdateManyArgs>(args: SelectSubset<T, SummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries and returns the data updated in the database.
     * @param {SummaryUpdateManyAndReturnArgs} args - Arguments to update many Summaries.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Summaries and only return the `id`
     * const summaryWithIdOnly = await prisma.summary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Summary.
     * @param {SummaryUpsertArgs} args - Arguments to update or create a Summary.
     * @example
     * // Update or create a Summary
     * const summary = await prisma.summary.upsert({
     *   create: {
     *     // ... data to create a Summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summary we want to update
     *   }
     * })
     */
    upsert<T extends SummaryUpsertArgs>(args: SelectSubset<T, SummaryUpsertArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCountArgs} args - Arguments to filter Summaries to count.
     * @example
     * // Count the number of Summaries
     * const count = await prisma.summary.count({
     *   where: {
     *     // ... the filter for the Summaries we want to count
     *   }
     * })
    **/
    count<T extends SummaryCountArgs>(
      args?: Subset<T, SummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryAggregateArgs>(args: Subset<T, SummaryAggregateArgs>): Prisma.PrismaPromise<GetSummaryAggregateType<T>>

    /**
     * Group by Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryGroupByArgs['orderBy'] }
        : { orderBy?: SummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Summary model
   */
  readonly fields: SummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Summary model
   */
  interface SummaryFieldRefs {
    readonly id: FieldRef<"Summary", 'String'>
    readonly meetingId: FieldRef<"Summary", 'String'>
    readonly videoUrl: FieldRef<"Summary", 'String'>
    readonly transcript: FieldRef<"Summary", 'String'>
    readonly summary: FieldRef<"Summary", 'String'>
    readonly createdAt: FieldRef<"Summary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Summary findUnique
   */
  export type SummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findUniqueOrThrow
   */
  export type SummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findFirst
   */
  export type SummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findFirstOrThrow
   */
  export type SummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findMany
   */
  export type SummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summaries to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary create
   */
  export type SummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Summary.
     */
    data: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
  }

  /**
   * Summary createMany
   */
  export type SummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Summary createManyAndReturn
   */
  export type SummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Summary update
   */
  export type SummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Summary.
     */
    data: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
    /**
     * Choose, which Summary to update.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary updateMany
   */
  export type SummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to update.
     */
    limit?: number
  }

  /**
   * Summary updateManyAndReturn
   */
  export type SummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Summary upsert
   */
  export type SummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Summary to update in case it exists.
     */
    where: SummaryWhereUniqueInput
    /**
     * In case the Summary found by the `where` argument doesn't exist, create a new Summary with this data.
     */
    create: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
    /**
     * In case the Summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
  }

  /**
   * Summary delete
   */
  export type SummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter which Summary to delete.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary deleteMany
   */
  export type SummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summaries to delete
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to delete.
     */
    limit?: number
  }

  /**
   * Summary without action
   */
  export type SummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const MeetingParticipantScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    participantId: 'participantId',
    participantCount: 'participantCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingParticipantScalarFieldEnum = (typeof MeetingParticipantScalarFieldEnum)[keyof typeof MeetingParticipantScalarFieldEnum]


  export const SummaryScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    videoUrl: 'videoUrl',
    transcript: 'transcript',
    summary: 'summary',
    createdAt: 'createdAt'
  };

  export type SummaryScalarFieldEnum = (typeof SummaryScalarFieldEnum)[keyof typeof SummaryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'STATUS'
   */
  export type EnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS'>
    


  /**
   * Reference to a field of type 'STATUS[]'
   */
  export type ListEnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    MeetingParticipant?: MeetingParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    MeetingParticipant?: MeetingParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    MeetingParticipant?: MeetingParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    status?: EnumSTATUSFilter<"Meeting"> | $Enums.STATUS
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    participants?: MeetingParticipantListRelationFilter
    summary?: XOR<SummaryNullableScalarRelationFilter, SummaryWhereInput> | null
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participants?: MeetingParticipantOrderByRelationAggregateInput
    summary?: SummaryOrderByWithRelationInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    title?: StringFilter<"Meeting"> | string
    status?: EnumSTATUSFilter<"Meeting"> | $Enums.STATUS
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    participants?: MeetingParticipantListRelationFilter
    summary?: XOR<SummaryNullableScalarRelationFilter, SummaryWhereInput> | null
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    title?: StringWithAggregatesFilter<"Meeting"> | string
    status?: EnumSTATUSWithAggregatesFilter<"Meeting"> | $Enums.STATUS
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type MeetingParticipantWhereInput = {
    AND?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    OR?: MeetingParticipantWhereInput[]
    NOT?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    id?: StringFilter<"MeetingParticipant"> | string
    meetingId?: StringFilter<"MeetingParticipant"> | string
    participantId?: StringFilter<"MeetingParticipant"> | string
    participantCount?: IntFilter<"MeetingParticipant"> | number
    createdAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    participant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeetingParticipantOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    participantId?: SortOrder
    participantCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    participant?: UserOrderByWithRelationInput
  }

  export type MeetingParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    OR?: MeetingParticipantWhereInput[]
    NOT?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    meetingId?: StringFilter<"MeetingParticipant"> | string
    participantId?: StringFilter<"MeetingParticipant"> | string
    participantCount?: IntFilter<"MeetingParticipant"> | number
    createdAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    participant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MeetingParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    participantId?: SortOrder
    participantCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingParticipantCountOrderByAggregateInput
    _avg?: MeetingParticipantAvgOrderByAggregateInput
    _max?: MeetingParticipantMaxOrderByAggregateInput
    _min?: MeetingParticipantMinOrderByAggregateInput
    _sum?: MeetingParticipantSumOrderByAggregateInput
  }

  export type MeetingParticipantScalarWhereWithAggregatesInput = {
    AND?: MeetingParticipantScalarWhereWithAggregatesInput | MeetingParticipantScalarWhereWithAggregatesInput[]
    OR?: MeetingParticipantScalarWhereWithAggregatesInput[]
    NOT?: MeetingParticipantScalarWhereWithAggregatesInput | MeetingParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeetingParticipant"> | string
    meetingId?: StringWithAggregatesFilter<"MeetingParticipant"> | string
    participantId?: StringWithAggregatesFilter<"MeetingParticipant"> | string
    participantCount?: IntWithAggregatesFilter<"MeetingParticipant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MeetingParticipant"> | Date | string
  }

  export type SummaryWhereInput = {
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    id?: StringFilter<"Summary"> | string
    meetingId?: StringFilter<"Summary"> | string
    videoUrl?: StringFilter<"Summary"> | string
    transcript?: StringFilter<"Summary"> | string
    summary?: StringFilter<"Summary"> | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
  }

  export type SummaryOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    videoUrl?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
  }

  export type SummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meetingId?: string
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    videoUrl?: StringFilter<"Summary"> | string
    transcript?: StringFilter<"Summary"> | string
    summary?: StringFilter<"Summary"> | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
  }, "id" | "meetingId">

  export type SummaryOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    videoUrl?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    _count?: SummaryCountOrderByAggregateInput
    _max?: SummaryMaxOrderByAggregateInput
    _min?: SummaryMinOrderByAggregateInput
  }

  export type SummaryScalarWhereWithAggregatesInput = {
    AND?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    OR?: SummaryScalarWhereWithAggregatesInput[]
    NOT?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Summary"> | string
    meetingId?: StringWithAggregatesFilter<"Summary"> | string
    videoUrl?: StringWithAggregatesFilter<"Summary"> | string
    transcript?: StringWithAggregatesFilter<"Summary"> | string
    summary?: StringWithAggregatesFilter<"Summary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Summary"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MeetingParticipant?: MeetingParticipantCreateNestedManyWithoutParticipantInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MeetingParticipant?: MeetingParticipantUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingParticipant?: MeetingParticipantUpdateManyWithoutParticipantNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingParticipant?: MeetingParticipantUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
    summary?: SummaryCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
    summary?: SummaryUncheckedCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
    summary?: SummaryUpdateOneWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
    summary?: SummaryUncheckedUpdateOneWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantCreateInput = {
    id?: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutParticipantsInput
    participant: UserCreateNestedOneWithoutMeetingParticipantInput
  }

  export type MeetingParticipantUncheckedCreateInput = {
    id?: string
    meetingId: string
    participantId: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: UserUpdateOneRequiredWithoutMeetingParticipantNestedInput
  }

  export type MeetingParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantCreateManyInput = {
    id?: string
    meetingId: string
    participantId: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCreateInput = {
    id?: string
    videoUrl: string
    transcript: string
    summary: string
    createdAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutSummaryInput
  }

  export type SummaryUncheckedCreateInput = {
    id?: string
    meetingId: string
    videoUrl: string
    transcript: string
    summary: string
    createdAt?: Date | string
  }

  export type SummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    transcript?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    transcript?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCreateManyInput = {
    id?: string
    meetingId: string
    videoUrl: string
    transcript: string
    summary: string
    createdAt?: Date | string
  }

  export type SummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    transcript?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    transcript?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MeetingParticipantListRelationFilter = {
    every?: MeetingParticipantWhereInput
    some?: MeetingParticipantWhereInput
    none?: MeetingParticipantWhereInput
  }

  export type MeetingParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type SummaryNullableScalarRelationFilter = {
    is?: SummaryWhereInput | null
    isNot?: SummaryWhereInput | null
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MeetingParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    participantId?: SortOrder
    participantCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingParticipantAvgOrderByAggregateInput = {
    participantCount?: SortOrder
  }

  export type MeetingParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    participantId?: SortOrder
    participantCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    participantId?: SortOrder
    participantCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingParticipantSumOrderByAggregateInput = {
    participantCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SummaryCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    videoUrl?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    videoUrl?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type SummaryMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    videoUrl?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
  }

  export type MeetingParticipantCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MeetingParticipantCreateWithoutParticipantInput, MeetingParticipantUncheckedCreateWithoutParticipantInput> | MeetingParticipantCreateWithoutParticipantInput[] | MeetingParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutParticipantInput | MeetingParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: MeetingParticipantCreateManyParticipantInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type MeetingParticipantUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<MeetingParticipantCreateWithoutParticipantInput, MeetingParticipantUncheckedCreateWithoutParticipantInput> | MeetingParticipantCreateWithoutParticipantInput[] | MeetingParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutParticipantInput | MeetingParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: MeetingParticipantCreateManyParticipantInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MeetingParticipantUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutParticipantInput, MeetingParticipantUncheckedCreateWithoutParticipantInput> | MeetingParticipantCreateWithoutParticipantInput[] | MeetingParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutParticipantInput | MeetingParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutParticipantInput | MeetingParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MeetingParticipantCreateManyParticipantInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutParticipantInput | MeetingParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutParticipantInput | MeetingParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutParticipantInput, MeetingParticipantUncheckedCreateWithoutParticipantInput> | MeetingParticipantCreateWithoutParticipantInput[] | MeetingParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutParticipantInput | MeetingParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutParticipantInput | MeetingParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: MeetingParticipantCreateManyParticipantInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutParticipantInput | MeetingParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutParticipantInput | MeetingParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type MeetingParticipantCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type SummaryCreateNestedOneWithoutMeetingInput = {
    create?: XOR<SummaryCreateWithoutMeetingInput, SummaryUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutMeetingInput
    connect?: SummaryWhereUniqueInput
  }

  export type MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedOneWithoutMeetingInput = {
    create?: XOR<SummaryCreateWithoutMeetingInput, SummaryUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutMeetingInput
    connect?: SummaryWhereUniqueInput
  }

  export type EnumSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.STATUS
  }

  export type MeetingParticipantUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutMeetingInput | MeetingParticipantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type SummaryUpdateOneWithoutMeetingNestedInput = {
    create?: XOR<SummaryCreateWithoutMeetingInput, SummaryUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutMeetingInput
    upsert?: SummaryUpsertWithoutMeetingInput
    disconnect?: SummaryWhereInput | boolean
    delete?: SummaryWhereInput | boolean
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutMeetingInput, SummaryUpdateWithoutMeetingInput>, SummaryUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutMeetingInput | MeetingParticipantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateOneWithoutMeetingNestedInput = {
    create?: XOR<SummaryCreateWithoutMeetingInput, SummaryUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutMeetingInput
    upsert?: SummaryUpsertWithoutMeetingInput
    disconnect?: SummaryWhereInput | boolean
    delete?: SummaryWhereInput | boolean
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutMeetingInput, SummaryUpdateWithoutMeetingInput>, SummaryUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutParticipantsInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeetingParticipantInput = {
    create?: XOR<UserCreateWithoutMeetingParticipantInput, UserUncheckedCreateWithoutMeetingParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingParticipantInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MeetingUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutParticipantsInput
    upsert?: MeetingUpsertWithoutParticipantsInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutParticipantsInput, MeetingUpdateWithoutParticipantsInput>, MeetingUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutMeetingParticipantNestedInput = {
    create?: XOR<UserCreateWithoutMeetingParticipantInput, UserUncheckedCreateWithoutMeetingParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingParticipantInput
    upsert?: UserUpsertWithoutMeetingParticipantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingParticipantInput, UserUpdateWithoutMeetingParticipantInput>, UserUncheckedUpdateWithoutMeetingParticipantInput>
  }

  export type MeetingCreateNestedOneWithoutSummaryInput = {
    create?: XOR<MeetingCreateWithoutSummaryInput, MeetingUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutSummaryInput
    connect?: MeetingWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<MeetingCreateWithoutSummaryInput, MeetingUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutSummaryInput
    upsert?: MeetingUpsertWithoutSummaryInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutSummaryInput, MeetingUpdateWithoutSummaryInput>, MeetingUncheckedUpdateWithoutSummaryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type NestedEnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MeetingParticipantCreateWithoutParticipantInput = {
    id?: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutParticipantsInput
  }

  export type MeetingParticipantUncheckedCreateWithoutParticipantInput = {
    id?: string
    meetingId: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantCreateOrConnectWithoutParticipantInput = {
    where: MeetingParticipantWhereUniqueInput
    create: XOR<MeetingParticipantCreateWithoutParticipantInput, MeetingParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type MeetingParticipantCreateManyParticipantInputEnvelope = {
    data: MeetingParticipantCreateManyParticipantInput | MeetingParticipantCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type MeetingParticipantUpsertWithWhereUniqueWithoutParticipantInput = {
    where: MeetingParticipantWhereUniqueInput
    update: XOR<MeetingParticipantUpdateWithoutParticipantInput, MeetingParticipantUncheckedUpdateWithoutParticipantInput>
    create: XOR<MeetingParticipantCreateWithoutParticipantInput, MeetingParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type MeetingParticipantUpdateWithWhereUniqueWithoutParticipantInput = {
    where: MeetingParticipantWhereUniqueInput
    data: XOR<MeetingParticipantUpdateWithoutParticipantInput, MeetingParticipantUncheckedUpdateWithoutParticipantInput>
  }

  export type MeetingParticipantUpdateManyWithWhereWithoutParticipantInput = {
    where: MeetingParticipantScalarWhereInput
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyWithoutParticipantInput>
  }

  export type MeetingParticipantScalarWhereInput = {
    AND?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
    OR?: MeetingParticipantScalarWhereInput[]
    NOT?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
    id?: StringFilter<"MeetingParticipant"> | string
    meetingId?: StringFilter<"MeetingParticipant"> | string
    participantId?: StringFilter<"MeetingParticipant"> | string
    participantCount?: IntFilter<"MeetingParticipant"> | number
    createdAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
  }

  export type MeetingParticipantCreateWithoutMeetingInput = {
    id?: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participant: UserCreateNestedOneWithoutMeetingParticipantInput
  }

  export type MeetingParticipantUncheckedCreateWithoutMeetingInput = {
    id?: string
    participantId: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantCreateOrConnectWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    create: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantCreateManyMeetingInputEnvelope = {
    data: MeetingParticipantCreateManyMeetingInput | MeetingParticipantCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCreateWithoutMeetingInput = {
    id?: string
    videoUrl: string
    transcript: string
    summary: string
    createdAt?: Date | string
  }

  export type SummaryUncheckedCreateWithoutMeetingInput = {
    id?: string
    videoUrl: string
    transcript: string
    summary: string
    createdAt?: Date | string
  }

  export type SummaryCreateOrConnectWithoutMeetingInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutMeetingInput, SummaryUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    update: XOR<MeetingParticipantUpdateWithoutMeetingInput, MeetingParticipantUncheckedUpdateWithoutMeetingInput>
    create: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    data: XOR<MeetingParticipantUpdateWithoutMeetingInput, MeetingParticipantUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingParticipantUpdateManyWithWhereWithoutMeetingInput = {
    where: MeetingParticipantScalarWhereInput
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyWithoutMeetingInput>
  }

  export type SummaryUpsertWithoutMeetingInput = {
    update: XOR<SummaryUpdateWithoutMeetingInput, SummaryUncheckedUpdateWithoutMeetingInput>
    create: XOR<SummaryCreateWithoutMeetingInput, SummaryUncheckedCreateWithoutMeetingInput>
    where?: SummaryWhereInput
  }

  export type SummaryUpdateToOneWithWhereWithoutMeetingInput = {
    where?: SummaryWhereInput
    data: XOR<SummaryUpdateWithoutMeetingInput, SummaryUncheckedUpdateWithoutMeetingInput>
  }

  export type SummaryUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    transcript?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    transcript?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateWithoutParticipantsInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    summary?: SummaryCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    summary?: SummaryUncheckedCreateNestedOneWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutParticipantsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutMeetingParticipantInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMeetingParticipantInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMeetingParticipantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingParticipantInput, UserUncheckedCreateWithoutMeetingParticipantInput>
  }

  export type MeetingUpsertWithoutParticipantsInput = {
    update: XOR<MeetingUpdateWithoutParticipantsInput, MeetingUncheckedUpdateWithoutParticipantsInput>
    create: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutParticipantsInput, MeetingUncheckedUpdateWithoutParticipantsInput>
  }

  export type MeetingUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUpdateOneWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUncheckedUpdateOneWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutMeetingParticipantInput = {
    update: XOR<UserUpdateWithoutMeetingParticipantInput, UserUncheckedUpdateWithoutMeetingParticipantInput>
    create: XOR<UserCreateWithoutMeetingParticipantInput, UserUncheckedCreateWithoutMeetingParticipantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingParticipantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingParticipantInput, UserUncheckedUpdateWithoutMeetingParticipantInput>
  }

  export type UserUpdateWithoutMeetingParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMeetingParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateWithoutSummaryInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutSummaryInput = {
    id?: string
    title: string
    status: $Enums.STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutSummaryInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutSummaryInput, MeetingUncheckedCreateWithoutSummaryInput>
  }

  export type MeetingUpsertWithoutSummaryInput = {
    update: XOR<MeetingUpdateWithoutSummaryInput, MeetingUncheckedUpdateWithoutSummaryInput>
    create: XOR<MeetingCreateWithoutSummaryInput, MeetingUncheckedCreateWithoutSummaryInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutSummaryInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutSummaryInput, MeetingUncheckedUpdateWithoutSummaryInput>
  }

  export type MeetingUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingParticipantCreateManyParticipantInput = {
    id?: string
    meetingId: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type MeetingParticipantUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantCreateManyMeetingInput = {
    id?: string
    participantId: string
    participantCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: UserUpdateOneRequiredWithoutMeetingParticipantNestedInput
  }

  export type MeetingParticipantUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    participantCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}