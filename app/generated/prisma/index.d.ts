
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model communication
 * 
 */
export type communication = $Result.DefaultSelection<Prisma.$communicationPayload>
/**
 * Model donation
 * 
 */
export type donation = $Result.DefaultSelection<Prisma.$donationPayload>
/**
 * Model orphan
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type orphan = $Result.DefaultSelection<Prisma.$orphanPayload>
/**
 * Model sponsorship
 * 
 */
export type sponsorship = $Result.DefaultSelection<Prisma.$sponsorshipPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communication`: Exposes CRUD operations for the **communication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communications
    * const communications = await prisma.communication.findMany()
    * ```
    */
  get communication(): Prisma.communicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.donationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orphan`: Exposes CRUD operations for the **orphan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orphans
    * const orphans = await prisma.orphan.findMany()
    * ```
    */
  get orphan(): Prisma.orphanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sponsorship`: Exposes CRUD operations for the **sponsorship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sponsorships
    * const sponsorships = await prisma.sponsorship.findMany()
    * ```
    */
  get sponsorship(): Prisma.sponsorshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    admin: 'admin',
    communication: 'communication',
    donation: 'donation',
    orphan: 'orphan',
    sponsorship: 'sponsorship',
    user: 'user'
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
      modelProps: "admin" | "communication" | "donation" | "orphan" | "sponsorship" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      communication: {
        payload: Prisma.$communicationPayload<ExtArgs>
        fields: Prisma.communicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>
          }
          findFirst: {
            args: Prisma.communicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>
          }
          findMany: {
            args: Prisma.communicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>[]
          }
          create: {
            args: Prisma.communicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>
          }
          createMany: {
            args: Prisma.communicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.communicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>
          }
          update: {
            args: Prisma.communicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>
          }
          deleteMany: {
            args: Prisma.communicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.communicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communicationPayload>
          }
          aggregate: {
            args: Prisma.CommunicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunication>
          }
          groupBy: {
            args: Prisma.communicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.communicationCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationCountAggregateOutputType> | number
          }
        }
      }
      donation: {
        payload: Prisma.$donationPayload<ExtArgs>
        fields: Prisma.donationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.donationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.donationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          findFirst: {
            args: Prisma.donationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.donationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          findMany: {
            args: Prisma.donationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>[]
          }
          create: {
            args: Prisma.donationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          createMany: {
            args: Prisma.donationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.donationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          update: {
            args: Prisma.donationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          deleteMany: {
            args: Prisma.donationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.donationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.donationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.donationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.donationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      orphan: {
        payload: Prisma.$orphanPayload<ExtArgs>
        fields: Prisma.orphanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orphanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orphanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>
          }
          findFirst: {
            args: Prisma.orphanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orphanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>
          }
          findMany: {
            args: Prisma.orphanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>[]
          }
          create: {
            args: Prisma.orphanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>
          }
          createMany: {
            args: Prisma.orphanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orphanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>
          }
          update: {
            args: Prisma.orphanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>
          }
          deleteMany: {
            args: Prisma.orphanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orphanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orphanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orphanPayload>
          }
          aggregate: {
            args: Prisma.OrphanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrphan>
          }
          groupBy: {
            args: Prisma.orphanGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrphanGroupByOutputType>[]
          }
          count: {
            args: Prisma.orphanCountArgs<ExtArgs>
            result: $Utils.Optional<OrphanCountAggregateOutputType> | number
          }
        }
      }
      sponsorship: {
        payload: Prisma.$sponsorshipPayload<ExtArgs>
        fields: Prisma.sponsorshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sponsorshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sponsorshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>
          }
          findFirst: {
            args: Prisma.sponsorshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sponsorshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>
          }
          findMany: {
            args: Prisma.sponsorshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>[]
          }
          create: {
            args: Prisma.sponsorshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>
          }
          createMany: {
            args: Prisma.sponsorshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sponsorshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>
          }
          update: {
            args: Prisma.sponsorshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>
          }
          deleteMany: {
            args: Prisma.sponsorshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sponsorshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sponsorshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sponsorshipPayload>
          }
          aggregate: {
            args: Prisma.SponsorshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsorship>
          }
          groupBy: {
            args: Prisma.sponsorshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.sponsorshipCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorshipCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
    admin?: adminOmit
    communication?: communicationOmit
    donation?: donationOmit
    orphan?: orphanOmit
    sponsorship?: sponsorshipOmit
    user?: userOmit
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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    communication: number
    orphan: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication?: boolean | AdminCountOutputTypeCountCommunicationArgs
    orphan?: boolean | AdminCountOutputTypeCountOrphanArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCommunicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communicationWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountOrphanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orphanWhereInput
  }


  /**
   * Count Type OrphanCountOutputType
   */

  export type OrphanCountOutputType = {
    donation: number
    sponsorship: number
  }

  export type OrphanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | OrphanCountOutputTypeCountDonationArgs
    sponsorship?: boolean | OrphanCountOutputTypeCountSponsorshipArgs
  }

  // Custom InputTypes
  /**
   * OrphanCountOutputType without action
   */
  export type OrphanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrphanCountOutputType
     */
    select?: OrphanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrphanCountOutputType without action
   */
  export type OrphanCountOutputTypeCountDonationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationWhereInput
  }

  /**
   * OrphanCountOutputType without action
   */
  export type OrphanCountOutputTypeCountSponsorshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sponsorshipWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    communication: number
    donation: number
    sponsorship: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication?: boolean | UserCountOutputTypeCountCommunicationArgs
    donation?: boolean | UserCountOutputTypeCountDonationArgs
    sponsorship?: boolean | UserCountOutputTypeCountSponsorshipArgs
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
  export type UserCountOutputTypeCountCommunicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSponsorshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sponsorshipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    A_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    A_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    A_id: number | null
    Aname: string | null
    pichure: Uint8Array | null
    Bdate: Date | null
    gender: string | null
    email: string | null
    password: string | null
    ph_num: string | null
    Address: string | null
    S_num: string | null
  }

  export type AdminMaxAggregateOutputType = {
    A_id: number | null
    Aname: string | null
    pichure: Uint8Array | null
    Bdate: Date | null
    gender: string | null
    email: string | null
    password: string | null
    ph_num: string | null
    Address: string | null
    S_num: string | null
  }

  export type AdminCountAggregateOutputType = {
    A_id: number
    Aname: number
    pichure: number
    Bdate: number
    gender: number
    email: number
    password: number
    ph_num: number
    Address: number
    S_num: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    A_id?: true
  }

  export type AdminSumAggregateInputType = {
    A_id?: true
  }

  export type AdminMinAggregateInputType = {
    A_id?: true
    Aname?: true
    pichure?: true
    Bdate?: true
    gender?: true
    email?: true
    password?: true
    ph_num?: true
    Address?: true
    S_num?: true
  }

  export type AdminMaxAggregateInputType = {
    A_id?: true
    Aname?: true
    pichure?: true
    Bdate?: true
    gender?: true
    email?: true
    password?: true
    ph_num?: true
    Address?: true
    S_num?: true
  }

  export type AdminCountAggregateInputType = {
    A_id?: true
    Aname?: true
    pichure?: true
    Bdate?: true
    gender?: true
    email?: true
    password?: true
    ph_num?: true
    Address?: true
    S_num?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    A_id: number
    Aname: string
    pichure: Uint8Array | null
    Bdate: Date | null
    gender: string | null
    email: string
    password: string
    ph_num: string
    Address: string | null
    S_num: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    A_id?: boolean
    Aname?: boolean
    pichure?: boolean
    Bdate?: boolean
    gender?: boolean
    email?: boolean
    password?: boolean
    ph_num?: boolean
    Address?: boolean
    S_num?: boolean
    communication?: boolean | admin$communicationArgs<ExtArgs>
    orphan?: boolean | admin$orphanArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    A_id?: boolean
    Aname?: boolean
    pichure?: boolean
    Bdate?: boolean
    gender?: boolean
    email?: boolean
    password?: boolean
    ph_num?: boolean
    Address?: boolean
    S_num?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"A_id" | "Aname" | "pichure" | "Bdate" | "gender" | "email" | "password" | "ph_num" | "Address" | "S_num", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication?: boolean | admin$communicationArgs<ExtArgs>
    orphan?: boolean | admin$orphanArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      communication: Prisma.$communicationPayload<ExtArgs>[]
      orphan: Prisma.$orphanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      A_id: number
      Aname: string
      pichure: Uint8Array | null
      Bdate: Date | null
      gender: string | null
      email: string
      password: string
      ph_num: string
      Address: string | null
      S_num: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `A_id`
     * const adminWithA_idOnly = await prisma.admin.findMany({ select: { A_id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communication<T extends admin$communicationArgs<ExtArgs> = {}>(args?: Subset<T, admin$communicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orphan<T extends admin$orphanArgs<ExtArgs> = {}>(args?: Subset<T, admin$orphanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly A_id: FieldRef<"admin", 'Int'>
    readonly Aname: FieldRef<"admin", 'String'>
    readonly pichure: FieldRef<"admin", 'Bytes'>
    readonly Bdate: FieldRef<"admin", 'DateTime'>
    readonly gender: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly ph_num: FieldRef<"admin", 'String'>
    readonly Address: FieldRef<"admin", 'String'>
    readonly S_num: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin.communication
   */
  export type admin$communicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    where?: communicationWhereInput
    orderBy?: communicationOrderByWithRelationInput | communicationOrderByWithRelationInput[]
    cursor?: communicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * admin.orphan
   */
  export type admin$orphanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    where?: orphanWhereInput
    orderBy?: orphanOrderByWithRelationInput | orphanOrderByWithRelationInput[]
    cursor?: orphanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrphanScalarFieldEnum | OrphanScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model communication
   */

  export type AggregateCommunication = {
    _count: CommunicationCountAggregateOutputType | null
    _avg: CommunicationAvgAggregateOutputType | null
    _sum: CommunicationSumAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  export type CommunicationAvgAggregateOutputType = {
    Msg_id: number | null
    IsRead: number | null
    Admain_id: number | null
    User_id: number | null
  }

  export type CommunicationSumAggregateOutputType = {
    Msg_id: number | null
    IsRead: number | null
    Admain_id: number | null
    User_id: number | null
  }

  export type CommunicationMinAggregateOutputType = {
    Msg_id: number | null
    content: string | null
    date: string | null
    IsRead: number | null
    Admain_id: number | null
    User_id: number | null
  }

  export type CommunicationMaxAggregateOutputType = {
    Msg_id: number | null
    content: string | null
    date: string | null
    IsRead: number | null
    Admain_id: number | null
    User_id: number | null
  }

  export type CommunicationCountAggregateOutputType = {
    Msg_id: number
    content: number
    date: number
    IsRead: number
    Admain_id: number
    User_id: number
    _all: number
  }


  export type CommunicationAvgAggregateInputType = {
    Msg_id?: true
    IsRead?: true
    Admain_id?: true
    User_id?: true
  }

  export type CommunicationSumAggregateInputType = {
    Msg_id?: true
    IsRead?: true
    Admain_id?: true
    User_id?: true
  }

  export type CommunicationMinAggregateInputType = {
    Msg_id?: true
    content?: true
    date?: true
    IsRead?: true
    Admain_id?: true
    User_id?: true
  }

  export type CommunicationMaxAggregateInputType = {
    Msg_id?: true
    content?: true
    date?: true
    IsRead?: true
    Admain_id?: true
    User_id?: true
  }

  export type CommunicationCountAggregateInputType = {
    Msg_id?: true
    content?: true
    date?: true
    IsRead?: true
    Admain_id?: true
    User_id?: true
    _all?: true
  }

  export type CommunicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communication to aggregate.
     */
    where?: communicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communications to fetch.
     */
    orderBy?: communicationOrderByWithRelationInput | communicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communications
    **/
    _count?: true | CommunicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationMaxAggregateInputType
  }

  export type GetCommunicationAggregateType<T extends CommunicationAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunication[P]>
      : GetScalarType<T[P], AggregateCommunication[P]>
  }




  export type communicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communicationWhereInput
    orderBy?: communicationOrderByWithAggregationInput | communicationOrderByWithAggregationInput[]
    by: CommunicationScalarFieldEnum[] | CommunicationScalarFieldEnum
    having?: communicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationCountAggregateInputType | true
    _avg?: CommunicationAvgAggregateInputType
    _sum?: CommunicationSumAggregateInputType
    _min?: CommunicationMinAggregateInputType
    _max?: CommunicationMaxAggregateInputType
  }

  export type CommunicationGroupByOutputType = {
    Msg_id: number
    content: string
    date: string
    IsRead: number
    Admain_id: number
    User_id: number
    _count: CommunicationCountAggregateOutputType | null
    _avg: CommunicationAvgAggregateOutputType | null
    _sum: CommunicationSumAggregateOutputType | null
    _min: CommunicationMinAggregateOutputType | null
    _max: CommunicationMaxAggregateOutputType | null
  }

  type GetCommunicationGroupByPayload<T extends communicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationGroupByOutputType[P]>
        }
      >
    >


  export type communicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Msg_id?: boolean
    content?: boolean
    date?: boolean
    IsRead?: boolean
    Admain_id?: boolean
    User_id?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communication"]>



  export type communicationSelectScalar = {
    Msg_id?: boolean
    content?: boolean
    date?: boolean
    IsRead?: boolean
    Admain_id?: boolean
    User_id?: boolean
  }

  export type communicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Msg_id" | "content" | "date" | "IsRead" | "Admain_id" | "User_id", ExtArgs["result"]["communication"]>
  export type communicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $communicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communication"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Msg_id: number
      content: string
      date: string
      IsRead: number
      Admain_id: number
      User_id: number
    }, ExtArgs["result"]["communication"]>
    composites: {}
  }

  type communicationGetPayload<S extends boolean | null | undefined | communicationDefaultArgs> = $Result.GetResult<Prisma.$communicationPayload, S>

  type communicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<communicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationCountAggregateInputType | true
    }

  export interface communicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communication'], meta: { name: 'communication' } }
    /**
     * Find zero or one Communication that matches the filter.
     * @param {communicationFindUniqueArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends communicationFindUniqueArgs>(args: SelectSubset<T, communicationFindUniqueArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Communication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {communicationFindUniqueOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communicationFindUniqueOrThrowArgs>(args: SelectSubset<T, communicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communicationFindFirstArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends communicationFindFirstArgs>(args?: SelectSubset<T, communicationFindFirstArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Communication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communicationFindFirstOrThrowArgs} args - Arguments to find a Communication
     * @example
     * // Get one Communication
     * const communication = await prisma.communication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends communicationFindFirstOrThrowArgs>(args?: SelectSubset<T, communicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communications
     * const communications = await prisma.communication.findMany()
     * 
     * // Get first 10 Communications
     * const communications = await prisma.communication.findMany({ take: 10 })
     * 
     * // Only select the `Msg_id`
     * const communicationWithMsg_idOnly = await prisma.communication.findMany({ select: { Msg_id: true } })
     * 
     */
    findMany<T extends communicationFindManyArgs>(args?: SelectSubset<T, communicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Communication.
     * @param {communicationCreateArgs} args - Arguments to create a Communication.
     * @example
     * // Create one Communication
     * const Communication = await prisma.communication.create({
     *   data: {
     *     // ... data to create a Communication
     *   }
     * })
     * 
     */
    create<T extends communicationCreateArgs>(args: SelectSubset<T, communicationCreateArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communications.
     * @param {communicationCreateManyArgs} args - Arguments to create many Communications.
     * @example
     * // Create many Communications
     * const communication = await prisma.communication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends communicationCreateManyArgs>(args?: SelectSubset<T, communicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Communication.
     * @param {communicationDeleteArgs} args - Arguments to delete one Communication.
     * @example
     * // Delete one Communication
     * const Communication = await prisma.communication.delete({
     *   where: {
     *     // ... filter to delete one Communication
     *   }
     * })
     * 
     */
    delete<T extends communicationDeleteArgs>(args: SelectSubset<T, communicationDeleteArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Communication.
     * @param {communicationUpdateArgs} args - Arguments to update one Communication.
     * @example
     * // Update one Communication
     * const communication = await prisma.communication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends communicationUpdateArgs>(args: SelectSubset<T, communicationUpdateArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communications.
     * @param {communicationDeleteManyArgs} args - Arguments to filter Communications to delete.
     * @example
     * // Delete a few Communications
     * const { count } = await prisma.communication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends communicationDeleteManyArgs>(args?: SelectSubset<T, communicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communications
     * const communication = await prisma.communication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends communicationUpdateManyArgs>(args: SelectSubset<T, communicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Communication.
     * @param {communicationUpsertArgs} args - Arguments to update or create a Communication.
     * @example
     * // Update or create a Communication
     * const communication = await prisma.communication.upsert({
     *   create: {
     *     // ... data to create a Communication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communication we want to update
     *   }
     * })
     */
    upsert<T extends communicationUpsertArgs>(args: SelectSubset<T, communicationUpsertArgs<ExtArgs>>): Prisma__communicationClient<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communicationCountArgs} args - Arguments to filter Communications to count.
     * @example
     * // Count the number of Communications
     * const count = await prisma.communication.count({
     *   where: {
     *     // ... the filter for the Communications we want to count
     *   }
     * })
    **/
    count<T extends communicationCountArgs>(
      args?: Subset<T, communicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationAggregateArgs>(args: Subset<T, CommunicationAggregateArgs>): Prisma.PrismaPromise<GetCommunicationAggregateType<T>>

    /**
     * Group by Communication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communicationGroupByArgs} args - Group by arguments.
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
      T extends communicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communicationGroupByArgs['orderBy'] }
        : { orderBy?: communicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, communicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communication model
   */
  readonly fields: communicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the communication model
   */
  interface communicationFieldRefs {
    readonly Msg_id: FieldRef<"communication", 'Int'>
    readonly content: FieldRef<"communication", 'String'>
    readonly date: FieldRef<"communication", 'String'>
    readonly IsRead: FieldRef<"communication", 'Int'>
    readonly Admain_id: FieldRef<"communication", 'Int'>
    readonly User_id: FieldRef<"communication", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * communication findUnique
   */
  export type communicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * Filter, which communication to fetch.
     */
    where: communicationWhereUniqueInput
  }

  /**
   * communication findUniqueOrThrow
   */
  export type communicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * Filter, which communication to fetch.
     */
    where: communicationWhereUniqueInput
  }

  /**
   * communication findFirst
   */
  export type communicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * Filter, which communication to fetch.
     */
    where?: communicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communications to fetch.
     */
    orderBy?: communicationOrderByWithRelationInput | communicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communications.
     */
    cursor?: communicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * communication findFirstOrThrow
   */
  export type communicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * Filter, which communication to fetch.
     */
    where?: communicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communications to fetch.
     */
    orderBy?: communicationOrderByWithRelationInput | communicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communications.
     */
    cursor?: communicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communications.
     */
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * communication findMany
   */
  export type communicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * Filter, which communications to fetch.
     */
    where?: communicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communications to fetch.
     */
    orderBy?: communicationOrderByWithRelationInput | communicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communications.
     */
    cursor?: communicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communications.
     */
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * communication create
   */
  export type communicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * The data needed to create a communication.
     */
    data: XOR<communicationCreateInput, communicationUncheckedCreateInput>
  }

  /**
   * communication createMany
   */
  export type communicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many communications.
     */
    data: communicationCreateManyInput | communicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communication update
   */
  export type communicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * The data needed to update a communication.
     */
    data: XOR<communicationUpdateInput, communicationUncheckedUpdateInput>
    /**
     * Choose, which communication to update.
     */
    where: communicationWhereUniqueInput
  }

  /**
   * communication updateMany
   */
  export type communicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communications.
     */
    data: XOR<communicationUpdateManyMutationInput, communicationUncheckedUpdateManyInput>
    /**
     * Filter which communications to update
     */
    where?: communicationWhereInput
    /**
     * Limit how many communications to update.
     */
    limit?: number
  }

  /**
   * communication upsert
   */
  export type communicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * The filter to search for the communication to update in case it exists.
     */
    where: communicationWhereUniqueInput
    /**
     * In case the communication found by the `where` argument doesn't exist, create a new communication with this data.
     */
    create: XOR<communicationCreateInput, communicationUncheckedCreateInput>
    /**
     * In case the communication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<communicationUpdateInput, communicationUncheckedUpdateInput>
  }

  /**
   * communication delete
   */
  export type communicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    /**
     * Filter which communication to delete.
     */
    where: communicationWhereUniqueInput
  }

  /**
   * communication deleteMany
   */
  export type communicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communications to delete
     */
    where?: communicationWhereInput
    /**
     * Limit how many communications to delete.
     */
    limit?: number
  }

  /**
   * communication without action
   */
  export type communicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
  }


  /**
   * Model donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    D_id: number | null
    amount: number | null
    Userrr_id: number | null
    orphan_id: number | null
  }

  export type DonationSumAggregateOutputType = {
    D_id: number | null
    amount: number | null
    Userrr_id: number | null
    orphan_id: number | null
  }

  export type DonationMinAggregateOutputType = {
    D_id: number | null
    date: Date | null
    Bank: string | null
    amount: number | null
    type: string | null
    Userrr_id: number | null
    orphan_id: number | null
  }

  export type DonationMaxAggregateOutputType = {
    D_id: number | null
    date: Date | null
    Bank: string | null
    amount: number | null
    type: string | null
    Userrr_id: number | null
    orphan_id: number | null
  }

  export type DonationCountAggregateOutputType = {
    D_id: number
    date: number
    Bank: number
    amount: number
    type: number
    Userrr_id: number
    orphan_id: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    D_id?: true
    amount?: true
    Userrr_id?: true
    orphan_id?: true
  }

  export type DonationSumAggregateInputType = {
    D_id?: true
    amount?: true
    Userrr_id?: true
    orphan_id?: true
  }

  export type DonationMinAggregateInputType = {
    D_id?: true
    date?: true
    Bank?: true
    amount?: true
    type?: true
    Userrr_id?: true
    orphan_id?: true
  }

  export type DonationMaxAggregateInputType = {
    D_id?: true
    date?: true
    Bank?: true
    amount?: true
    type?: true
    Userrr_id?: true
    orphan_id?: true
  }

  export type DonationCountAggregateInputType = {
    D_id?: true
    date?: true
    Bank?: true
    amount?: true
    type?: true
    Userrr_id?: true
    orphan_id?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donation to aggregate.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type donationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationWhereInput
    orderBy?: donationOrderByWithAggregationInput | donationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: donationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    D_id: number
    date: Date | null
    Bank: string
    amount: number
    type: string
    Userrr_id: number
    orphan_id: number
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends donationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type donationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    D_id?: boolean
    date?: boolean
    Bank?: boolean
    amount?: boolean
    type?: boolean
    Userrr_id?: boolean
    orphan_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    orphan?: boolean | orphanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>



  export type donationSelectScalar = {
    D_id?: boolean
    date?: boolean
    Bank?: boolean
    amount?: boolean
    type?: boolean
    Userrr_id?: boolean
    orphan_id?: boolean
  }

  export type donationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"D_id" | "date" | "Bank" | "amount" | "type" | "Userrr_id" | "orphan_id", ExtArgs["result"]["donation"]>
  export type donationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    orphan?: boolean | orphanDefaultArgs<ExtArgs>
  }

  export type $donationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "donation"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      orphan: Prisma.$orphanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      D_id: number
      date: Date | null
      Bank: string
      amount: number
      type: string
      Userrr_id: number
      orphan_id: number
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type donationGetPayload<S extends boolean | null | undefined | donationDefaultArgs> = $Result.GetResult<Prisma.$donationPayload, S>

  type donationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<donationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface donationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['donation'], meta: { name: 'donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {donationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends donationFindUniqueArgs>(args: SelectSubset<T, donationFindUniqueArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {donationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends donationFindUniqueOrThrowArgs>(args: SelectSubset<T, donationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends donationFindFirstArgs>(args?: SelectSubset<T, donationFindFirstArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends donationFindFirstOrThrowArgs>(args?: SelectSubset<T, donationFindFirstOrThrowArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `D_id`
     * const donationWithD_idOnly = await prisma.donation.findMany({ select: { D_id: true } })
     * 
     */
    findMany<T extends donationFindManyArgs>(args?: SelectSubset<T, donationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {donationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends donationCreateArgs>(args: SelectSubset<T, donationCreateArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {donationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends donationCreateManyArgs>(args?: SelectSubset<T, donationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Donation.
     * @param {donationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends donationDeleteArgs>(args: SelectSubset<T, donationDeleteArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {donationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends donationUpdateArgs>(args: SelectSubset<T, donationUpdateArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {donationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends donationDeleteManyArgs>(args?: SelectSubset<T, donationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends donationUpdateManyArgs>(args: SelectSubset<T, donationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Donation.
     * @param {donationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends donationUpsertArgs>(args: SelectSubset<T, donationUpsertArgs<ExtArgs>>): Prisma__donationClient<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends donationCountArgs>(
      args?: Subset<T, donationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationGroupByArgs} args - Group by arguments.
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
      T extends donationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donationGroupByArgs['orderBy'] }
        : { orderBy?: donationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, donationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the donation model
   */
  readonly fields: donationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orphan<T extends orphanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orphanDefaultArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the donation model
   */
  interface donationFieldRefs {
    readonly D_id: FieldRef<"donation", 'Int'>
    readonly date: FieldRef<"donation", 'DateTime'>
    readonly Bank: FieldRef<"donation", 'String'>
    readonly amount: FieldRef<"donation", 'Int'>
    readonly type: FieldRef<"donation", 'String'>
    readonly Userrr_id: FieldRef<"donation", 'Int'>
    readonly orphan_id: FieldRef<"donation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * donation findUnique
   */
  export type donationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation findUniqueOrThrow
   */
  export type donationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation findFirst
   */
  export type donationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donations.
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * donation findFirstOrThrow
   */
  export type donationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donation to fetch.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donations.
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * donation findMany
   */
  export type donationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where?: donationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing donations.
     */
    cursor?: donationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * donation create
   */
  export type donationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * The data needed to create a donation.
     */
    data: XOR<donationCreateInput, donationUncheckedCreateInput>
  }

  /**
   * donation createMany
   */
  export type donationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many donations.
     */
    data: donationCreateManyInput | donationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * donation update
   */
  export type donationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * The data needed to update a donation.
     */
    data: XOR<donationUpdateInput, donationUncheckedUpdateInput>
    /**
     * Choose, which donation to update.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation updateMany
   */
  export type donationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update donations.
     */
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyInput>
    /**
     * Filter which donations to update
     */
    where?: donationWhereInput
    /**
     * Limit how many donations to update.
     */
    limit?: number
  }

  /**
   * donation upsert
   */
  export type donationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * The filter to search for the donation to update in case it exists.
     */
    where: donationWhereUniqueInput
    /**
     * In case the donation found by the `where` argument doesn't exist, create a new donation with this data.
     */
    create: XOR<donationCreateInput, donationUncheckedCreateInput>
    /**
     * In case the donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donationUpdateInput, donationUncheckedUpdateInput>
  }

  /**
   * donation delete
   */
  export type donationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    /**
     * Filter which donation to delete.
     */
    where: donationWhereUniqueInput
  }

  /**
   * donation deleteMany
   */
  export type donationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donations to delete
     */
    where?: donationWhereInput
    /**
     * Limit how many donations to delete.
     */
    limit?: number
  }

  /**
   * donation without action
   */
  export type donationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
  }


  /**
   * Model orphan
   */

  export type AggregateOrphan = {
    _count: OrphanCountAggregateOutputType | null
    _avg: OrphanAvgAggregateOutputType | null
    _sum: OrphanSumAggregateOutputType | null
    _min: OrphanMinAggregateOutputType | null
    _max: OrphanMaxAggregateOutputType | null
  }

  export type OrphanAvgAggregateOutputType = {
    Orphan_id: number | null
    age: number | null
    A_id: number | null
  }

  export type OrphanSumAggregateOutputType = {
    Orphan_id: number | null
    age: number | null
    A_id: number | null
  }

  export type OrphanMinAggregateOutputType = {
    Orphan_id: number | null
    Oname: string | null
    pichure: Uint8Array | null
    gender: string | null
    Bdate: Date | null
    age: number | null
    about: string | null
    class: string | null
    school: string | null
    city: string | null
    H_state: string | null
    skills: string | null
    ph_num: string | null
    F_M_status: string | null
    A_id: number | null
  }

  export type OrphanMaxAggregateOutputType = {
    Orphan_id: number | null
    Oname: string | null
    pichure: Uint8Array | null
    gender: string | null
    Bdate: Date | null
    age: number | null
    about: string | null
    class: string | null
    school: string | null
    city: string | null
    H_state: string | null
    skills: string | null
    ph_num: string | null
    F_M_status: string | null
    A_id: number | null
  }

  export type OrphanCountAggregateOutputType = {
    Orphan_id: number
    Oname: number
    pichure: number
    gender: number
    Bdate: number
    age: number
    about: number
    class: number
    school: number
    city: number
    H_state: number
    skills: number
    ph_num: number
    F_M_status: number
    A_id: number
    _all: number
  }


  export type OrphanAvgAggregateInputType = {
    Orphan_id?: true
    age?: true
    A_id?: true
  }

  export type OrphanSumAggregateInputType = {
    Orphan_id?: true
    age?: true
    A_id?: true
  }

  export type OrphanMinAggregateInputType = {
    Orphan_id?: true
    Oname?: true
    pichure?: true
    gender?: true
    Bdate?: true
    age?: true
    about?: true
    class?: true
    school?: true
    city?: true
    H_state?: true
    skills?: true
    ph_num?: true
    F_M_status?: true
    A_id?: true
  }

  export type OrphanMaxAggregateInputType = {
    Orphan_id?: true
    Oname?: true
    pichure?: true
    gender?: true
    Bdate?: true
    age?: true
    about?: true
    class?: true
    school?: true
    city?: true
    H_state?: true
    skills?: true
    ph_num?: true
    F_M_status?: true
    A_id?: true
  }

  export type OrphanCountAggregateInputType = {
    Orphan_id?: true
    Oname?: true
    pichure?: true
    gender?: true
    Bdate?: true
    age?: true
    about?: true
    class?: true
    school?: true
    city?: true
    H_state?: true
    skills?: true
    ph_num?: true
    F_M_status?: true
    A_id?: true
    _all?: true
  }

  export type OrphanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orphan to aggregate.
     */
    where?: orphanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphans to fetch.
     */
    orderBy?: orphanOrderByWithRelationInput | orphanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orphanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orphans
    **/
    _count?: true | OrphanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrphanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrphanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrphanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrphanMaxAggregateInputType
  }

  export type GetOrphanAggregateType<T extends OrphanAggregateArgs> = {
        [P in keyof T & keyof AggregateOrphan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrphan[P]>
      : GetScalarType<T[P], AggregateOrphan[P]>
  }




  export type orphanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orphanWhereInput
    orderBy?: orphanOrderByWithAggregationInput | orphanOrderByWithAggregationInput[]
    by: OrphanScalarFieldEnum[] | OrphanScalarFieldEnum
    having?: orphanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrphanCountAggregateInputType | true
    _avg?: OrphanAvgAggregateInputType
    _sum?: OrphanSumAggregateInputType
    _min?: OrphanMinAggregateInputType
    _max?: OrphanMaxAggregateInputType
  }

  export type OrphanGroupByOutputType = {
    Orphan_id: number
    Oname: string
    pichure: Uint8Array | null
    gender: string | null
    Bdate: Date | null
    age: number | null
    about: string | null
    class: string | null
    school: string | null
    city: string | null
    H_state: string | null
    skills: string | null
    ph_num: string
    F_M_status: string | null
    A_id: number
    _count: OrphanCountAggregateOutputType | null
    _avg: OrphanAvgAggregateOutputType | null
    _sum: OrphanSumAggregateOutputType | null
    _min: OrphanMinAggregateOutputType | null
    _max: OrphanMaxAggregateOutputType | null
  }

  type GetOrphanGroupByPayload<T extends orphanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrphanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrphanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrphanGroupByOutputType[P]>
            : GetScalarType<T[P], OrphanGroupByOutputType[P]>
        }
      >
    >


  export type orphanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Orphan_id?: boolean
    Oname?: boolean
    pichure?: boolean
    gender?: boolean
    Bdate?: boolean
    age?: boolean
    about?: boolean
    class?: boolean
    school?: boolean
    city?: boolean
    H_state?: boolean
    skills?: boolean
    ph_num?: boolean
    F_M_status?: boolean
    A_id?: boolean
    donation?: boolean | orphan$donationArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    sponsorship?: boolean | orphan$sponsorshipArgs<ExtArgs>
    _count?: boolean | OrphanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orphan"]>



  export type orphanSelectScalar = {
    Orphan_id?: boolean
    Oname?: boolean
    pichure?: boolean
    gender?: boolean
    Bdate?: boolean
    age?: boolean
    about?: boolean
    class?: boolean
    school?: boolean
    city?: boolean
    H_state?: boolean
    skills?: boolean
    ph_num?: boolean
    F_M_status?: boolean
    A_id?: boolean
  }

  export type orphanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Orphan_id" | "Oname" | "pichure" | "gender" | "Bdate" | "age" | "about" | "class" | "school" | "city" | "H_state" | "skills" | "ph_num" | "F_M_status" | "A_id", ExtArgs["result"]["orphan"]>
  export type orphanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | orphan$donationArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    sponsorship?: boolean | orphan$sponsorshipArgs<ExtArgs>
    _count?: boolean | OrphanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $orphanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orphan"
    objects: {
      donation: Prisma.$donationPayload<ExtArgs>[]
      admin: Prisma.$adminPayload<ExtArgs>
      sponsorship: Prisma.$sponsorshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Orphan_id: number
      Oname: string
      pichure: Uint8Array | null
      gender: string | null
      Bdate: Date | null
      age: number | null
      about: string | null
      class: string | null
      school: string | null
      city: string | null
      H_state: string | null
      skills: string | null
      ph_num: string
      F_M_status: string | null
      A_id: number
    }, ExtArgs["result"]["orphan"]>
    composites: {}
  }

  type orphanGetPayload<S extends boolean | null | undefined | orphanDefaultArgs> = $Result.GetResult<Prisma.$orphanPayload, S>

  type orphanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orphanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrphanCountAggregateInputType | true
    }

  export interface orphanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orphan'], meta: { name: 'orphan' } }
    /**
     * Find zero or one Orphan that matches the filter.
     * @param {orphanFindUniqueArgs} args - Arguments to find a Orphan
     * @example
     * // Get one Orphan
     * const orphan = await prisma.orphan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orphanFindUniqueArgs>(args: SelectSubset<T, orphanFindUniqueArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orphan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orphanFindUniqueOrThrowArgs} args - Arguments to find a Orphan
     * @example
     * // Get one Orphan
     * const orphan = await prisma.orphan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orphanFindUniqueOrThrowArgs>(args: SelectSubset<T, orphanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orphan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanFindFirstArgs} args - Arguments to find a Orphan
     * @example
     * // Get one Orphan
     * const orphan = await prisma.orphan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orphanFindFirstArgs>(args?: SelectSubset<T, orphanFindFirstArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orphan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanFindFirstOrThrowArgs} args - Arguments to find a Orphan
     * @example
     * // Get one Orphan
     * const orphan = await prisma.orphan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orphanFindFirstOrThrowArgs>(args?: SelectSubset<T, orphanFindFirstOrThrowArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orphans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orphans
     * const orphans = await prisma.orphan.findMany()
     * 
     * // Get first 10 Orphans
     * const orphans = await prisma.orphan.findMany({ take: 10 })
     * 
     * // Only select the `Orphan_id`
     * const orphanWithOrphan_idOnly = await prisma.orphan.findMany({ select: { Orphan_id: true } })
     * 
     */
    findMany<T extends orphanFindManyArgs>(args?: SelectSubset<T, orphanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orphan.
     * @param {orphanCreateArgs} args - Arguments to create a Orphan.
     * @example
     * // Create one Orphan
     * const Orphan = await prisma.orphan.create({
     *   data: {
     *     // ... data to create a Orphan
     *   }
     * })
     * 
     */
    create<T extends orphanCreateArgs>(args: SelectSubset<T, orphanCreateArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orphans.
     * @param {orphanCreateManyArgs} args - Arguments to create many Orphans.
     * @example
     * // Create many Orphans
     * const orphan = await prisma.orphan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orphanCreateManyArgs>(args?: SelectSubset<T, orphanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orphan.
     * @param {orphanDeleteArgs} args - Arguments to delete one Orphan.
     * @example
     * // Delete one Orphan
     * const Orphan = await prisma.orphan.delete({
     *   where: {
     *     // ... filter to delete one Orphan
     *   }
     * })
     * 
     */
    delete<T extends orphanDeleteArgs>(args: SelectSubset<T, orphanDeleteArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orphan.
     * @param {orphanUpdateArgs} args - Arguments to update one Orphan.
     * @example
     * // Update one Orphan
     * const orphan = await prisma.orphan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orphanUpdateArgs>(args: SelectSubset<T, orphanUpdateArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orphans.
     * @param {orphanDeleteManyArgs} args - Arguments to filter Orphans to delete.
     * @example
     * // Delete a few Orphans
     * const { count } = await prisma.orphan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orphanDeleteManyArgs>(args?: SelectSubset<T, orphanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orphans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orphans
     * const orphan = await prisma.orphan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orphanUpdateManyArgs>(args: SelectSubset<T, orphanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orphan.
     * @param {orphanUpsertArgs} args - Arguments to update or create a Orphan.
     * @example
     * // Update or create a Orphan
     * const orphan = await prisma.orphan.upsert({
     *   create: {
     *     // ... data to create a Orphan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orphan we want to update
     *   }
     * })
     */
    upsert<T extends orphanUpsertArgs>(args: SelectSubset<T, orphanUpsertArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orphans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanCountArgs} args - Arguments to filter Orphans to count.
     * @example
     * // Count the number of Orphans
     * const count = await prisma.orphan.count({
     *   where: {
     *     // ... the filter for the Orphans we want to count
     *   }
     * })
    **/
    count<T extends orphanCountArgs>(
      args?: Subset<T, orphanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrphanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orphan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrphanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrphanAggregateArgs>(args: Subset<T, OrphanAggregateArgs>): Prisma.PrismaPromise<GetOrphanAggregateType<T>>

    /**
     * Group by Orphan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orphanGroupByArgs} args - Group by arguments.
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
      T extends orphanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orphanGroupByArgs['orderBy'] }
        : { orderBy?: orphanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orphanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrphanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orphan model
   */
  readonly fields: orphanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orphan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orphanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donation<T extends orphan$donationArgs<ExtArgs> = {}>(args?: Subset<T, orphan$donationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sponsorship<T extends orphan$sponsorshipArgs<ExtArgs> = {}>(args?: Subset<T, orphan$sponsorshipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orphan model
   */
  interface orphanFieldRefs {
    readonly Orphan_id: FieldRef<"orphan", 'Int'>
    readonly Oname: FieldRef<"orphan", 'String'>
    readonly pichure: FieldRef<"orphan", 'Bytes'>
    readonly gender: FieldRef<"orphan", 'String'>
    readonly Bdate: FieldRef<"orphan", 'DateTime'>
    readonly age: FieldRef<"orphan", 'Int'>
    readonly about: FieldRef<"orphan", 'String'>
    readonly class: FieldRef<"orphan", 'String'>
    readonly school: FieldRef<"orphan", 'String'>
    readonly city: FieldRef<"orphan", 'String'>
    readonly H_state: FieldRef<"orphan", 'String'>
    readonly skills: FieldRef<"orphan", 'String'>
    readonly ph_num: FieldRef<"orphan", 'String'>
    readonly F_M_status: FieldRef<"orphan", 'String'>
    readonly A_id: FieldRef<"orphan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orphan findUnique
   */
  export type orphanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * Filter, which orphan to fetch.
     */
    where: orphanWhereUniqueInput
  }

  /**
   * orphan findUniqueOrThrow
   */
  export type orphanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * Filter, which orphan to fetch.
     */
    where: orphanWhereUniqueInput
  }

  /**
   * orphan findFirst
   */
  export type orphanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * Filter, which orphan to fetch.
     */
    where?: orphanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphans to fetch.
     */
    orderBy?: orphanOrderByWithRelationInput | orphanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orphans.
     */
    cursor?: orphanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orphans.
     */
    distinct?: OrphanScalarFieldEnum | OrphanScalarFieldEnum[]
  }

  /**
   * orphan findFirstOrThrow
   */
  export type orphanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * Filter, which orphan to fetch.
     */
    where?: orphanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphans to fetch.
     */
    orderBy?: orphanOrderByWithRelationInput | orphanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orphans.
     */
    cursor?: orphanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orphans.
     */
    distinct?: OrphanScalarFieldEnum | OrphanScalarFieldEnum[]
  }

  /**
   * orphan findMany
   */
  export type orphanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * Filter, which orphans to fetch.
     */
    where?: orphanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orphans to fetch.
     */
    orderBy?: orphanOrderByWithRelationInput | orphanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orphans.
     */
    cursor?: orphanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orphans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orphans.
     */
    skip?: number
    distinct?: OrphanScalarFieldEnum | OrphanScalarFieldEnum[]
  }

  /**
   * orphan create
   */
  export type orphanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * The data needed to create a orphan.
     */
    data: XOR<orphanCreateInput, orphanUncheckedCreateInput>
  }

  /**
   * orphan createMany
   */
  export type orphanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orphans.
     */
    data: orphanCreateManyInput | orphanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orphan update
   */
  export type orphanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * The data needed to update a orphan.
     */
    data: XOR<orphanUpdateInput, orphanUncheckedUpdateInput>
    /**
     * Choose, which orphan to update.
     */
    where: orphanWhereUniqueInput
  }

  /**
   * orphan updateMany
   */
  export type orphanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orphans.
     */
    data: XOR<orphanUpdateManyMutationInput, orphanUncheckedUpdateManyInput>
    /**
     * Filter which orphans to update
     */
    where?: orphanWhereInput
    /**
     * Limit how many orphans to update.
     */
    limit?: number
  }

  /**
   * orphan upsert
   */
  export type orphanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * The filter to search for the orphan to update in case it exists.
     */
    where: orphanWhereUniqueInput
    /**
     * In case the orphan found by the `where` argument doesn't exist, create a new orphan with this data.
     */
    create: XOR<orphanCreateInput, orphanUncheckedCreateInput>
    /**
     * In case the orphan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orphanUpdateInput, orphanUncheckedUpdateInput>
  }

  /**
   * orphan delete
   */
  export type orphanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
    /**
     * Filter which orphan to delete.
     */
    where: orphanWhereUniqueInput
  }

  /**
   * orphan deleteMany
   */
  export type orphanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orphans to delete
     */
    where?: orphanWhereInput
    /**
     * Limit how many orphans to delete.
     */
    limit?: number
  }

  /**
   * orphan.donation
   */
  export type orphan$donationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    where?: donationWhereInput
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    cursor?: donationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * orphan.sponsorship
   */
  export type orphan$sponsorshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    where?: sponsorshipWhereInput
    orderBy?: sponsorshipOrderByWithRelationInput | sponsorshipOrderByWithRelationInput[]
    cursor?: sponsorshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * orphan without action
   */
  export type orphanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orphan
     */
    select?: orphanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orphan
     */
    omit?: orphanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orphanInclude<ExtArgs> | null
  }


  /**
   * Model sponsorship
   */

  export type AggregateSponsorship = {
    _count: SponsorshipCountAggregateOutputType | null
    _avg: SponsorshipAvgAggregateOutputType | null
    _sum: SponsorshipSumAggregateOutputType | null
    _min: SponsorshipMinAggregateOutputType | null
    _max: SponsorshipMaxAggregateOutputType | null
  }

  export type SponsorshipAvgAggregateOutputType = {
    is_active: number | null
    amount: number | null
    U_id: number | null
    Orphan_id: number | null
  }

  export type SponsorshipSumAggregateOutputType = {
    is_active: number | null
    amount: number | null
    U_id: number | null
    Orphan_id: number | null
  }

  export type SponsorshipMinAggregateOutputType = {
    is_active: number | null
    date: Date | null
    Bank: string | null
    amount: number | null
    p_type: string | null
    sub_type: string | null
    U_id: number | null
    Orphan_id: number | null
  }

  export type SponsorshipMaxAggregateOutputType = {
    is_active: number | null
    date: Date | null
    Bank: string | null
    amount: number | null
    p_type: string | null
    sub_type: string | null
    U_id: number | null
    Orphan_id: number | null
  }

  export type SponsorshipCountAggregateOutputType = {
    is_active: number
    date: number
    Bank: number
    amount: number
    p_type: number
    sub_type: number
    U_id: number
    Orphan_id: number
    _all: number
  }


  export type SponsorshipAvgAggregateInputType = {
    is_active?: true
    amount?: true
    U_id?: true
    Orphan_id?: true
  }

  export type SponsorshipSumAggregateInputType = {
    is_active?: true
    amount?: true
    U_id?: true
    Orphan_id?: true
  }

  export type SponsorshipMinAggregateInputType = {
    is_active?: true
    date?: true
    Bank?: true
    amount?: true
    p_type?: true
    sub_type?: true
    U_id?: true
    Orphan_id?: true
  }

  export type SponsorshipMaxAggregateInputType = {
    is_active?: true
    date?: true
    Bank?: true
    amount?: true
    p_type?: true
    sub_type?: true
    U_id?: true
    Orphan_id?: true
  }

  export type SponsorshipCountAggregateInputType = {
    is_active?: true
    date?: true
    Bank?: true
    amount?: true
    p_type?: true
    sub_type?: true
    U_id?: true
    Orphan_id?: true
    _all?: true
  }

  export type SponsorshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sponsorship to aggregate.
     */
    where?: sponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sponsorships to fetch.
     */
    orderBy?: sponsorshipOrderByWithRelationInput | sponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sponsorships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sponsorships
    **/
    _count?: true | SponsorshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SponsorshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SponsorshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorshipMaxAggregateInputType
  }

  export type GetSponsorshipAggregateType<T extends SponsorshipAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsorship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsorship[P]>
      : GetScalarType<T[P], AggregateSponsorship[P]>
  }




  export type sponsorshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sponsorshipWhereInput
    orderBy?: sponsorshipOrderByWithAggregationInput | sponsorshipOrderByWithAggregationInput[]
    by: SponsorshipScalarFieldEnum[] | SponsorshipScalarFieldEnum
    having?: sponsorshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorshipCountAggregateInputType | true
    _avg?: SponsorshipAvgAggregateInputType
    _sum?: SponsorshipSumAggregateInputType
    _min?: SponsorshipMinAggregateInputType
    _max?: SponsorshipMaxAggregateInputType
  }

  export type SponsorshipGroupByOutputType = {
    is_active: number
    date: Date | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    U_id: number
    Orphan_id: number
    _count: SponsorshipCountAggregateOutputType | null
    _avg: SponsorshipAvgAggregateOutputType | null
    _sum: SponsorshipSumAggregateOutputType | null
    _min: SponsorshipMinAggregateOutputType | null
    _max: SponsorshipMaxAggregateOutputType | null
  }

  type GetSponsorshipGroupByPayload<T extends sponsorshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorshipGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorshipGroupByOutputType[P]>
        }
      >
    >


  export type sponsorshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    is_active?: boolean
    date?: boolean
    Bank?: boolean
    amount?: boolean
    p_type?: boolean
    sub_type?: boolean
    U_id?: boolean
    Orphan_id?: boolean
    orphan?: boolean | orphanDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsorship"]>



  export type sponsorshipSelectScalar = {
    is_active?: boolean
    date?: boolean
    Bank?: boolean
    amount?: boolean
    p_type?: boolean
    sub_type?: boolean
    U_id?: boolean
    Orphan_id?: boolean
  }

  export type sponsorshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"is_active" | "date" | "Bank" | "amount" | "p_type" | "sub_type" | "U_id" | "Orphan_id", ExtArgs["result"]["sponsorship"]>
  export type sponsorshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orphan?: boolean | orphanDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $sponsorshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sponsorship"
    objects: {
      orphan: Prisma.$orphanPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      is_active: number
      date: Date | null
      Bank: string
      amount: number
      p_type: string
      sub_type: string
      U_id: number
      Orphan_id: number
    }, ExtArgs["result"]["sponsorship"]>
    composites: {}
  }

  type sponsorshipGetPayload<S extends boolean | null | undefined | sponsorshipDefaultArgs> = $Result.GetResult<Prisma.$sponsorshipPayload, S>

  type sponsorshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sponsorshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SponsorshipCountAggregateInputType | true
    }

  export interface sponsorshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sponsorship'], meta: { name: 'sponsorship' } }
    /**
     * Find zero or one Sponsorship that matches the filter.
     * @param {sponsorshipFindUniqueArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sponsorshipFindUniqueArgs>(args: SelectSubset<T, sponsorshipFindUniqueArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sponsorship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sponsorshipFindUniqueOrThrowArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sponsorshipFindUniqueOrThrowArgs>(args: SelectSubset<T, sponsorshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsorship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sponsorshipFindFirstArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sponsorshipFindFirstArgs>(args?: SelectSubset<T, sponsorshipFindFirstArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsorship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sponsorshipFindFirstOrThrowArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sponsorshipFindFirstOrThrowArgs>(args?: SelectSubset<T, sponsorshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sponsorships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sponsorshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sponsorships
     * const sponsorships = await prisma.sponsorship.findMany()
     * 
     * // Get first 10 Sponsorships
     * const sponsorships = await prisma.sponsorship.findMany({ take: 10 })
     * 
     * // Only select the `is_active`
     * const sponsorshipWithIs_activeOnly = await prisma.sponsorship.findMany({ select: { is_active: true } })
     * 
     */
    findMany<T extends sponsorshipFindManyArgs>(args?: SelectSubset<T, sponsorshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sponsorship.
     * @param {sponsorshipCreateArgs} args - Arguments to create a Sponsorship.
     * @example
     * // Create one Sponsorship
     * const Sponsorship = await prisma.sponsorship.create({
     *   data: {
     *     // ... data to create a Sponsorship
     *   }
     * })
     * 
     */
    create<T extends sponsorshipCreateArgs>(args: SelectSubset<T, sponsorshipCreateArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sponsorships.
     * @param {sponsorshipCreateManyArgs} args - Arguments to create many Sponsorships.
     * @example
     * // Create many Sponsorships
     * const sponsorship = await prisma.sponsorship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sponsorshipCreateManyArgs>(args?: SelectSubset<T, sponsorshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sponsorship.
     * @param {sponsorshipDeleteArgs} args - Arguments to delete one Sponsorship.
     * @example
     * // Delete one Sponsorship
     * const Sponsorship = await prisma.sponsorship.delete({
     *   where: {
     *     // ... filter to delete one Sponsorship
     *   }
     * })
     * 
     */
    delete<T extends sponsorshipDeleteArgs>(args: SelectSubset<T, sponsorshipDeleteArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sponsorship.
     * @param {sponsorshipUpdateArgs} args - Arguments to update one Sponsorship.
     * @example
     * // Update one Sponsorship
     * const sponsorship = await prisma.sponsorship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sponsorshipUpdateArgs>(args: SelectSubset<T, sponsorshipUpdateArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sponsorships.
     * @param {sponsorshipDeleteManyArgs} args - Arguments to filter Sponsorships to delete.
     * @example
     * // Delete a few Sponsorships
     * const { count } = await prisma.sponsorship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sponsorshipDeleteManyArgs>(args?: SelectSubset<T, sponsorshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsorships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sponsorshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sponsorships
     * const sponsorship = await prisma.sponsorship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sponsorshipUpdateManyArgs>(args: SelectSubset<T, sponsorshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sponsorship.
     * @param {sponsorshipUpsertArgs} args - Arguments to update or create a Sponsorship.
     * @example
     * // Update or create a Sponsorship
     * const sponsorship = await prisma.sponsorship.upsert({
     *   create: {
     *     // ... data to create a Sponsorship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sponsorship we want to update
     *   }
     * })
     */
    upsert<T extends sponsorshipUpsertArgs>(args: SelectSubset<T, sponsorshipUpsertArgs<ExtArgs>>): Prisma__sponsorshipClient<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sponsorships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sponsorshipCountArgs} args - Arguments to filter Sponsorships to count.
     * @example
     * // Count the number of Sponsorships
     * const count = await prisma.sponsorship.count({
     *   where: {
     *     // ... the filter for the Sponsorships we want to count
     *   }
     * })
    **/
    count<T extends sponsorshipCountArgs>(
      args?: Subset<T, sponsorshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sponsorship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SponsorshipAggregateArgs>(args: Subset<T, SponsorshipAggregateArgs>): Prisma.PrismaPromise<GetSponsorshipAggregateType<T>>

    /**
     * Group by Sponsorship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sponsorshipGroupByArgs} args - Group by arguments.
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
      T extends sponsorshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sponsorshipGroupByArgs['orderBy'] }
        : { orderBy?: sponsorshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sponsorshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sponsorship model
   */
  readonly fields: sponsorshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sponsorship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sponsorshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orphan<T extends orphanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orphanDefaultArgs<ExtArgs>>): Prisma__orphanClient<$Result.GetResult<Prisma.$orphanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sponsorship model
   */
  interface sponsorshipFieldRefs {
    readonly is_active: FieldRef<"sponsorship", 'Int'>
    readonly date: FieldRef<"sponsorship", 'DateTime'>
    readonly Bank: FieldRef<"sponsorship", 'String'>
    readonly amount: FieldRef<"sponsorship", 'Int'>
    readonly p_type: FieldRef<"sponsorship", 'String'>
    readonly sub_type: FieldRef<"sponsorship", 'String'>
    readonly U_id: FieldRef<"sponsorship", 'Int'>
    readonly Orphan_id: FieldRef<"sponsorship", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sponsorship findUnique
   */
  export type sponsorshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which sponsorship to fetch.
     */
    where: sponsorshipWhereUniqueInput
  }

  /**
   * sponsorship findUniqueOrThrow
   */
  export type sponsorshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which sponsorship to fetch.
     */
    where: sponsorshipWhereUniqueInput
  }

  /**
   * sponsorship findFirst
   */
  export type sponsorshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which sponsorship to fetch.
     */
    where?: sponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sponsorships to fetch.
     */
    orderBy?: sponsorshipOrderByWithRelationInput | sponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sponsorships.
     */
    cursor?: sponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sponsorships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sponsorships.
     */
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * sponsorship findFirstOrThrow
   */
  export type sponsorshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which sponsorship to fetch.
     */
    where?: sponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sponsorships to fetch.
     */
    orderBy?: sponsorshipOrderByWithRelationInput | sponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sponsorships.
     */
    cursor?: sponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sponsorships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sponsorships.
     */
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * sponsorship findMany
   */
  export type sponsorshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which sponsorships to fetch.
     */
    where?: sponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sponsorships to fetch.
     */
    orderBy?: sponsorshipOrderByWithRelationInput | sponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sponsorships.
     */
    cursor?: sponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sponsorships.
     */
    skip?: number
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * sponsorship create
   */
  export type sponsorshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * The data needed to create a sponsorship.
     */
    data: XOR<sponsorshipCreateInput, sponsorshipUncheckedCreateInput>
  }

  /**
   * sponsorship createMany
   */
  export type sponsorshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sponsorships.
     */
    data: sponsorshipCreateManyInput | sponsorshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sponsorship update
   */
  export type sponsorshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * The data needed to update a sponsorship.
     */
    data: XOR<sponsorshipUpdateInput, sponsorshipUncheckedUpdateInput>
    /**
     * Choose, which sponsorship to update.
     */
    where: sponsorshipWhereUniqueInput
  }

  /**
   * sponsorship updateMany
   */
  export type sponsorshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sponsorships.
     */
    data: XOR<sponsorshipUpdateManyMutationInput, sponsorshipUncheckedUpdateManyInput>
    /**
     * Filter which sponsorships to update
     */
    where?: sponsorshipWhereInput
    /**
     * Limit how many sponsorships to update.
     */
    limit?: number
  }

  /**
   * sponsorship upsert
   */
  export type sponsorshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * The filter to search for the sponsorship to update in case it exists.
     */
    where: sponsorshipWhereUniqueInput
    /**
     * In case the sponsorship found by the `where` argument doesn't exist, create a new sponsorship with this data.
     */
    create: XOR<sponsorshipCreateInput, sponsorshipUncheckedCreateInput>
    /**
     * In case the sponsorship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sponsorshipUpdateInput, sponsorshipUncheckedUpdateInput>
  }

  /**
   * sponsorship delete
   */
  export type sponsorshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    /**
     * Filter which sponsorship to delete.
     */
    where: sponsorshipWhereUniqueInput
  }

  /**
   * sponsorship deleteMany
   */
  export type sponsorshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sponsorships to delete
     */
    where?: sponsorshipWhereInput
    /**
     * Limit how many sponsorships to delete.
     */
    limit?: number
  }

  /**
   * sponsorship without action
   */
  export type sponsorshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    U_id: number | null
  }

  export type UserSumAggregateOutputType = {
    U_id: number | null
  }

  export type UserMinAggregateOutputType = {
    U_id: number | null
    Uname: string | null
    pichure: Uint8Array | null
    email: string | null
    password: string | null
    ph_num: string | null
    gender: string | null
    Bdate: Date | null
    Address: string | null
  }

  export type UserMaxAggregateOutputType = {
    U_id: number | null
    Uname: string | null
    pichure: Uint8Array | null
    email: string | null
    password: string | null
    ph_num: string | null
    gender: string | null
    Bdate: Date | null
    Address: string | null
  }

  export type UserCountAggregateOutputType = {
    U_id: number
    Uname: number
    pichure: number
    email: number
    password: number
    ph_num: number
    gender: number
    Bdate: number
    Address: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    U_id?: true
  }

  export type UserSumAggregateInputType = {
    U_id?: true
  }

  export type UserMinAggregateInputType = {
    U_id?: true
    Uname?: true
    pichure?: true
    email?: true
    password?: true
    ph_num?: true
    gender?: true
    Bdate?: true
    Address?: true
  }

  export type UserMaxAggregateInputType = {
    U_id?: true
    Uname?: true
    pichure?: true
    email?: true
    password?: true
    ph_num?: true
    gender?: true
    Bdate?: true
    Address?: true
  }

  export type UserCountAggregateInputType = {
    U_id?: true
    Uname?: true
    pichure?: true
    email?: true
    password?: true
    ph_num?: true
    gender?: true
    Bdate?: true
    Address?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    U_id: number
    Uname: string
    pichure: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender: string | null
    Bdate: Date | null
    Address: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    U_id?: boolean
    Uname?: boolean
    pichure?: boolean
    email?: boolean
    password?: boolean
    ph_num?: boolean
    gender?: boolean
    Bdate?: boolean
    Address?: boolean
    communication?: boolean | user$communicationArgs<ExtArgs>
    donation?: boolean | user$donationArgs<ExtArgs>
    sponsorship?: boolean | user$sponsorshipArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    U_id?: boolean
    Uname?: boolean
    pichure?: boolean
    email?: boolean
    password?: boolean
    ph_num?: boolean
    gender?: boolean
    Bdate?: boolean
    Address?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"U_id" | "Uname" | "pichure" | "email" | "password" | "ph_num" | "gender" | "Bdate" | "Address", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication?: boolean | user$communicationArgs<ExtArgs>
    donation?: boolean | user$donationArgs<ExtArgs>
    sponsorship?: boolean | user$sponsorshipArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      communication: Prisma.$communicationPayload<ExtArgs>[]
      donation: Prisma.$donationPayload<ExtArgs>[]
      sponsorship: Prisma.$sponsorshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      U_id: number
      Uname: string
      pichure: Uint8Array | null
      email: string
      password: string
      ph_num: string
      gender: string | null
      Bdate: Date | null
      Address: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `U_id`
     * const userWithU_idOnly = await prisma.user.findMany({ select: { U_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communication<T extends user$communicationArgs<ExtArgs> = {}>(args?: Subset<T, user$communicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donation<T extends user$donationArgs<ExtArgs> = {}>(args?: Subset<T, user$donationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sponsorship<T extends user$sponsorshipArgs<ExtArgs> = {}>(args?: Subset<T, user$sponsorshipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sponsorshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly U_id: FieldRef<"user", 'Int'>
    readonly Uname: FieldRef<"user", 'String'>
    readonly pichure: FieldRef<"user", 'Bytes'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly ph_num: FieldRef<"user", 'String'>
    readonly gender: FieldRef<"user", 'String'>
    readonly Bdate: FieldRef<"user", 'DateTime'>
    readonly Address: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.communication
   */
  export type user$communicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communication
     */
    select?: communicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the communication
     */
    omit?: communicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: communicationInclude<ExtArgs> | null
    where?: communicationWhereInput
    orderBy?: communicationOrderByWithRelationInput | communicationOrderByWithRelationInput[]
    cursor?: communicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationScalarFieldEnum | CommunicationScalarFieldEnum[]
  }

  /**
   * user.donation
   */
  export type user$donationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donation
     */
    select?: donationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donation
     */
    omit?: donationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationInclude<ExtArgs> | null
    where?: donationWhereInput
    orderBy?: donationOrderByWithRelationInput | donationOrderByWithRelationInput[]
    cursor?: donationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * user.sponsorship
   */
  export type user$sponsorshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sponsorship
     */
    select?: sponsorshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sponsorship
     */
    omit?: sponsorshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sponsorshipInclude<ExtArgs> | null
    where?: sponsorshipWhereInput
    orderBy?: sponsorshipOrderByWithRelationInput | sponsorshipOrderByWithRelationInput[]
    cursor?: sponsorshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    A_id: 'A_id',
    Aname: 'Aname',
    pichure: 'pichure',
    Bdate: 'Bdate',
    gender: 'gender',
    email: 'email',
    password: 'password',
    ph_num: 'ph_num',
    Address: 'Address',
    S_num: 'S_num'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CommunicationScalarFieldEnum: {
    Msg_id: 'Msg_id',
    content: 'content',
    date: 'date',
    IsRead: 'IsRead',
    Admain_id: 'Admain_id',
    User_id: 'User_id'
  };

  export type CommunicationScalarFieldEnum = (typeof CommunicationScalarFieldEnum)[keyof typeof CommunicationScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    D_id: 'D_id',
    date: 'date',
    Bank: 'Bank',
    amount: 'amount',
    type: 'type',
    Userrr_id: 'Userrr_id',
    orphan_id: 'orphan_id'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const OrphanScalarFieldEnum: {
    Orphan_id: 'Orphan_id',
    Oname: 'Oname',
    pichure: 'pichure',
    gender: 'gender',
    Bdate: 'Bdate',
    age: 'age',
    about: 'about',
    class: 'class',
    school: 'school',
    city: 'city',
    H_state: 'H_state',
    skills: 'skills',
    ph_num: 'ph_num',
    F_M_status: 'F_M_status',
    A_id: 'A_id'
  };

  export type OrphanScalarFieldEnum = (typeof OrphanScalarFieldEnum)[keyof typeof OrphanScalarFieldEnum]


  export const SponsorshipScalarFieldEnum: {
    is_active: 'is_active',
    date: 'date',
    Bank: 'Bank',
    amount: 'amount',
    p_type: 'p_type',
    sub_type: 'sub_type',
    U_id: 'U_id',
    Orphan_id: 'Orphan_id'
  };

  export type SponsorshipScalarFieldEnum = (typeof SponsorshipScalarFieldEnum)[keyof typeof SponsorshipScalarFieldEnum]


  export const UserScalarFieldEnum: {
    U_id: 'U_id',
    Uname: 'Uname',
    pichure: 'pichure',
    email: 'email',
    password: 'password',
    ph_num: 'ph_num',
    gender: 'gender',
    Bdate: 'Bdate',
    Address: 'Address'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    Aname: 'Aname',
    gender: 'gender',
    email: 'email',
    password: 'password',
    ph_num: 'ph_num',
    Address: 'Address',
    S_num: 'S_num'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const communicationOrderByRelevanceFieldEnum: {
    content: 'content',
    date: 'date'
  };

  export type communicationOrderByRelevanceFieldEnum = (typeof communicationOrderByRelevanceFieldEnum)[keyof typeof communicationOrderByRelevanceFieldEnum]


  export const donationOrderByRelevanceFieldEnum: {
    Bank: 'Bank',
    type: 'type'
  };

  export type donationOrderByRelevanceFieldEnum = (typeof donationOrderByRelevanceFieldEnum)[keyof typeof donationOrderByRelevanceFieldEnum]


  export const orphanOrderByRelevanceFieldEnum: {
    Oname: 'Oname',
    gender: 'gender',
    about: 'about',
    class: 'class',
    school: 'school',
    city: 'city',
    H_state: 'H_state',
    skills: 'skills',
    ph_num: 'ph_num',
    F_M_status: 'F_M_status'
  };

  export type orphanOrderByRelevanceFieldEnum = (typeof orphanOrderByRelevanceFieldEnum)[keyof typeof orphanOrderByRelevanceFieldEnum]


  export const sponsorshipOrderByRelevanceFieldEnum: {
    Bank: 'Bank',
    p_type: 'p_type',
    sub_type: 'sub_type'
  };

  export type sponsorshipOrderByRelevanceFieldEnum = (typeof sponsorshipOrderByRelevanceFieldEnum)[keyof typeof sponsorshipOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    Uname: 'Uname',
    email: 'email',
    password: 'password',
    ph_num: 'ph_num',
    gender: 'gender',
    Address: 'Address'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    A_id?: IntFilter<"admin"> | number
    Aname?: StringFilter<"admin"> | string
    pichure?: BytesNullableFilter<"admin"> | Uint8Array | null
    Bdate?: DateTimeNullableFilter<"admin"> | Date | string | null
    gender?: StringNullableFilter<"admin"> | string | null
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    ph_num?: StringFilter<"admin"> | string
    Address?: StringNullableFilter<"admin"> | string | null
    S_num?: StringFilter<"admin"> | string
    communication?: CommunicationListRelationFilter
    orphan?: OrphanListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    A_id?: SortOrder
    Aname?: SortOrder
    pichure?: SortOrderInput | SortOrder
    Bdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    Address?: SortOrderInput | SortOrder
    S_num?: SortOrder
    communication?: communicationOrderByRelationAggregateInput
    orphan?: orphanOrderByRelationAggregateInput
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    A_id?: number
    email?: string
    ph_num?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    Aname?: StringFilter<"admin"> | string
    pichure?: BytesNullableFilter<"admin"> | Uint8Array | null
    Bdate?: DateTimeNullableFilter<"admin"> | Date | string | null
    gender?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    Address?: StringNullableFilter<"admin"> | string | null
    S_num?: StringFilter<"admin"> | string
    communication?: CommunicationListRelationFilter
    orphan?: OrphanListRelationFilter
  }, "A_id" | "email" | "ph_num">

  export type adminOrderByWithAggregationInput = {
    A_id?: SortOrder
    Aname?: SortOrder
    pichure?: SortOrderInput | SortOrder
    Bdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    Address?: SortOrderInput | SortOrder
    S_num?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    A_id?: IntWithAggregatesFilter<"admin"> | number
    Aname?: StringWithAggregatesFilter<"admin"> | string
    pichure?: BytesNullableWithAggregatesFilter<"admin"> | Uint8Array | null
    Bdate?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"admin"> | string | null
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    ph_num?: StringWithAggregatesFilter<"admin"> | string
    Address?: StringNullableWithAggregatesFilter<"admin"> | string | null
    S_num?: StringWithAggregatesFilter<"admin"> | string
  }

  export type communicationWhereInput = {
    AND?: communicationWhereInput | communicationWhereInput[]
    OR?: communicationWhereInput[]
    NOT?: communicationWhereInput | communicationWhereInput[]
    Msg_id?: IntFilter<"communication"> | number
    content?: StringFilter<"communication"> | string
    date?: StringFilter<"communication"> | string
    IsRead?: IntFilter<"communication"> | number
    Admain_id?: IntFilter<"communication"> | number
    User_id?: IntFilter<"communication"> | number
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type communicationOrderByWithRelationInput = {
    Msg_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
    admin?: adminOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: communicationOrderByRelevanceInput
  }

  export type communicationWhereUniqueInput = Prisma.AtLeast<{
    Msg_id?: number
    AND?: communicationWhereInput | communicationWhereInput[]
    OR?: communicationWhereInput[]
    NOT?: communicationWhereInput | communicationWhereInput[]
    content?: StringFilter<"communication"> | string
    date?: StringFilter<"communication"> | string
    IsRead?: IntFilter<"communication"> | number
    Admain_id?: IntFilter<"communication"> | number
    User_id?: IntFilter<"communication"> | number
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "Msg_id">

  export type communicationOrderByWithAggregationInput = {
    Msg_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
    _count?: communicationCountOrderByAggregateInput
    _avg?: communicationAvgOrderByAggregateInput
    _max?: communicationMaxOrderByAggregateInput
    _min?: communicationMinOrderByAggregateInput
    _sum?: communicationSumOrderByAggregateInput
  }

  export type communicationScalarWhereWithAggregatesInput = {
    AND?: communicationScalarWhereWithAggregatesInput | communicationScalarWhereWithAggregatesInput[]
    OR?: communicationScalarWhereWithAggregatesInput[]
    NOT?: communicationScalarWhereWithAggregatesInput | communicationScalarWhereWithAggregatesInput[]
    Msg_id?: IntWithAggregatesFilter<"communication"> | number
    content?: StringWithAggregatesFilter<"communication"> | string
    date?: StringWithAggregatesFilter<"communication"> | string
    IsRead?: IntWithAggregatesFilter<"communication"> | number
    Admain_id?: IntWithAggregatesFilter<"communication"> | number
    User_id?: IntWithAggregatesFilter<"communication"> | number
  }

  export type donationWhereInput = {
    AND?: donationWhereInput | donationWhereInput[]
    OR?: donationWhereInput[]
    NOT?: donationWhereInput | donationWhereInput[]
    D_id?: IntFilter<"donation"> | number
    date?: DateTimeNullableFilter<"donation"> | Date | string | null
    Bank?: StringFilter<"donation"> | string
    amount?: IntFilter<"donation"> | number
    type?: StringFilter<"donation"> | string
    Userrr_id?: IntFilter<"donation"> | number
    orphan_id?: IntFilter<"donation"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    orphan?: XOR<OrphanScalarRelationFilter, orphanWhereInput>
  }

  export type donationOrderByWithRelationInput = {
    D_id?: SortOrder
    date?: SortOrderInput | SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
    user?: userOrderByWithRelationInput
    orphan?: orphanOrderByWithRelationInput
    _relevance?: donationOrderByRelevanceInput
  }

  export type donationWhereUniqueInput = Prisma.AtLeast<{
    D_id?: number
    AND?: donationWhereInput | donationWhereInput[]
    OR?: donationWhereInput[]
    NOT?: donationWhereInput | donationWhereInput[]
    date?: DateTimeNullableFilter<"donation"> | Date | string | null
    Bank?: StringFilter<"donation"> | string
    amount?: IntFilter<"donation"> | number
    type?: StringFilter<"donation"> | string
    Userrr_id?: IntFilter<"donation"> | number
    orphan_id?: IntFilter<"donation"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    orphan?: XOR<OrphanScalarRelationFilter, orphanWhereInput>
  }, "D_id">

  export type donationOrderByWithAggregationInput = {
    D_id?: SortOrder
    date?: SortOrderInput | SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
    _count?: donationCountOrderByAggregateInput
    _avg?: donationAvgOrderByAggregateInput
    _max?: donationMaxOrderByAggregateInput
    _min?: donationMinOrderByAggregateInput
    _sum?: donationSumOrderByAggregateInput
  }

  export type donationScalarWhereWithAggregatesInput = {
    AND?: donationScalarWhereWithAggregatesInput | donationScalarWhereWithAggregatesInput[]
    OR?: donationScalarWhereWithAggregatesInput[]
    NOT?: donationScalarWhereWithAggregatesInput | donationScalarWhereWithAggregatesInput[]
    D_id?: IntWithAggregatesFilter<"donation"> | number
    date?: DateTimeNullableWithAggregatesFilter<"donation"> | Date | string | null
    Bank?: StringWithAggregatesFilter<"donation"> | string
    amount?: IntWithAggregatesFilter<"donation"> | number
    type?: StringWithAggregatesFilter<"donation"> | string
    Userrr_id?: IntWithAggregatesFilter<"donation"> | number
    orphan_id?: IntWithAggregatesFilter<"donation"> | number
  }

  export type orphanWhereInput = {
    AND?: orphanWhereInput | orphanWhereInput[]
    OR?: orphanWhereInput[]
    NOT?: orphanWhereInput | orphanWhereInput[]
    Orphan_id?: IntFilter<"orphan"> | number
    Oname?: StringFilter<"orphan"> | string
    pichure?: BytesNullableFilter<"orphan"> | Uint8Array | null
    gender?: StringNullableFilter<"orphan"> | string | null
    Bdate?: DateTimeNullableFilter<"orphan"> | Date | string | null
    age?: IntNullableFilter<"orphan"> | number | null
    about?: StringNullableFilter<"orphan"> | string | null
    class?: StringNullableFilter<"orphan"> | string | null
    school?: StringNullableFilter<"orphan"> | string | null
    city?: StringNullableFilter<"orphan"> | string | null
    H_state?: StringNullableFilter<"orphan"> | string | null
    skills?: StringNullableFilter<"orphan"> | string | null
    ph_num?: StringFilter<"orphan"> | string
    F_M_status?: StringNullableFilter<"orphan"> | string | null
    A_id?: IntFilter<"orphan"> | number
    donation?: DonationListRelationFilter
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    sponsorship?: SponsorshipListRelationFilter
  }

  export type orphanOrderByWithRelationInput = {
    Orphan_id?: SortOrder
    Oname?: SortOrder
    pichure?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    Bdate?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    H_state?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    ph_num?: SortOrder
    F_M_status?: SortOrderInput | SortOrder
    A_id?: SortOrder
    donation?: donationOrderByRelationAggregateInput
    admin?: adminOrderByWithRelationInput
    sponsorship?: sponsorshipOrderByRelationAggregateInput
    _relevance?: orphanOrderByRelevanceInput
  }

  export type orphanWhereUniqueInput = Prisma.AtLeast<{
    Orphan_id?: number
    ph_num?: string
    AND?: orphanWhereInput | orphanWhereInput[]
    OR?: orphanWhereInput[]
    NOT?: orphanWhereInput | orphanWhereInput[]
    Oname?: StringFilter<"orphan"> | string
    pichure?: BytesNullableFilter<"orphan"> | Uint8Array | null
    gender?: StringNullableFilter<"orphan"> | string | null
    Bdate?: DateTimeNullableFilter<"orphan"> | Date | string | null
    age?: IntNullableFilter<"orphan"> | number | null
    about?: StringNullableFilter<"orphan"> | string | null
    class?: StringNullableFilter<"orphan"> | string | null
    school?: StringNullableFilter<"orphan"> | string | null
    city?: StringNullableFilter<"orphan"> | string | null
    H_state?: StringNullableFilter<"orphan"> | string | null
    skills?: StringNullableFilter<"orphan"> | string | null
    F_M_status?: StringNullableFilter<"orphan"> | string | null
    A_id?: IntFilter<"orphan"> | number
    donation?: DonationListRelationFilter
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    sponsorship?: SponsorshipListRelationFilter
  }, "Orphan_id" | "ph_num">

  export type orphanOrderByWithAggregationInput = {
    Orphan_id?: SortOrder
    Oname?: SortOrder
    pichure?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    Bdate?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    school?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    H_state?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    ph_num?: SortOrder
    F_M_status?: SortOrderInput | SortOrder
    A_id?: SortOrder
    _count?: orphanCountOrderByAggregateInput
    _avg?: orphanAvgOrderByAggregateInput
    _max?: orphanMaxOrderByAggregateInput
    _min?: orphanMinOrderByAggregateInput
    _sum?: orphanSumOrderByAggregateInput
  }

  export type orphanScalarWhereWithAggregatesInput = {
    AND?: orphanScalarWhereWithAggregatesInput | orphanScalarWhereWithAggregatesInput[]
    OR?: orphanScalarWhereWithAggregatesInput[]
    NOT?: orphanScalarWhereWithAggregatesInput | orphanScalarWhereWithAggregatesInput[]
    Orphan_id?: IntWithAggregatesFilter<"orphan"> | number
    Oname?: StringWithAggregatesFilter<"orphan"> | string
    pichure?: BytesNullableWithAggregatesFilter<"orphan"> | Uint8Array | null
    gender?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    Bdate?: DateTimeNullableWithAggregatesFilter<"orphan"> | Date | string | null
    age?: IntNullableWithAggregatesFilter<"orphan"> | number | null
    about?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    class?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    school?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    city?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    H_state?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    skills?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    ph_num?: StringWithAggregatesFilter<"orphan"> | string
    F_M_status?: StringNullableWithAggregatesFilter<"orphan"> | string | null
    A_id?: IntWithAggregatesFilter<"orphan"> | number
  }

  export type sponsorshipWhereInput = {
    AND?: sponsorshipWhereInput | sponsorshipWhereInput[]
    OR?: sponsorshipWhereInput[]
    NOT?: sponsorshipWhereInput | sponsorshipWhereInput[]
    is_active?: IntFilter<"sponsorship"> | number
    date?: DateTimeNullableFilter<"sponsorship"> | Date | string | null
    Bank?: StringFilter<"sponsorship"> | string
    amount?: IntFilter<"sponsorship"> | number
    p_type?: StringFilter<"sponsorship"> | string
    sub_type?: StringFilter<"sponsorship"> | string
    U_id?: IntFilter<"sponsorship"> | number
    Orphan_id?: IntFilter<"sponsorship"> | number
    orphan?: XOR<OrphanScalarRelationFilter, orphanWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type sponsorshipOrderByWithRelationInput = {
    is_active?: SortOrder
    date?: SortOrderInput | SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    p_type?: SortOrder
    sub_type?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
    orphan?: orphanOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: sponsorshipOrderByRelevanceInput
  }

  export type sponsorshipWhereUniqueInput = Prisma.AtLeast<{
    U_id_Orphan_id?: sponsorshipU_idOrphan_idCompoundUniqueInput
    AND?: sponsorshipWhereInput | sponsorshipWhereInput[]
    OR?: sponsorshipWhereInput[]
    NOT?: sponsorshipWhereInput | sponsorshipWhereInput[]
    is_active?: IntFilter<"sponsorship"> | number
    date?: DateTimeNullableFilter<"sponsorship"> | Date | string | null
    Bank?: StringFilter<"sponsorship"> | string
    amount?: IntFilter<"sponsorship"> | number
    p_type?: StringFilter<"sponsorship"> | string
    sub_type?: StringFilter<"sponsorship"> | string
    U_id?: IntFilter<"sponsorship"> | number
    Orphan_id?: IntFilter<"sponsorship"> | number
    orphan?: XOR<OrphanScalarRelationFilter, orphanWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "U_id_Orphan_id">

  export type sponsorshipOrderByWithAggregationInput = {
    is_active?: SortOrder
    date?: SortOrderInput | SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    p_type?: SortOrder
    sub_type?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
    _count?: sponsorshipCountOrderByAggregateInput
    _avg?: sponsorshipAvgOrderByAggregateInput
    _max?: sponsorshipMaxOrderByAggregateInput
    _min?: sponsorshipMinOrderByAggregateInput
    _sum?: sponsorshipSumOrderByAggregateInput
  }

  export type sponsorshipScalarWhereWithAggregatesInput = {
    AND?: sponsorshipScalarWhereWithAggregatesInput | sponsorshipScalarWhereWithAggregatesInput[]
    OR?: sponsorshipScalarWhereWithAggregatesInput[]
    NOT?: sponsorshipScalarWhereWithAggregatesInput | sponsorshipScalarWhereWithAggregatesInput[]
    is_active?: IntWithAggregatesFilter<"sponsorship"> | number
    date?: DateTimeNullableWithAggregatesFilter<"sponsorship"> | Date | string | null
    Bank?: StringWithAggregatesFilter<"sponsorship"> | string
    amount?: IntWithAggregatesFilter<"sponsorship"> | number
    p_type?: StringWithAggregatesFilter<"sponsorship"> | string
    sub_type?: StringWithAggregatesFilter<"sponsorship"> | string
    U_id?: IntWithAggregatesFilter<"sponsorship"> | number
    Orphan_id?: IntWithAggregatesFilter<"sponsorship"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    U_id?: IntFilter<"user"> | number
    Uname?: StringFilter<"user"> | string
    pichure?: BytesNullableFilter<"user"> | Uint8Array | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    ph_num?: StringFilter<"user"> | string
    gender?: StringNullableFilter<"user"> | string | null
    Bdate?: DateTimeNullableFilter<"user"> | Date | string | null
    Address?: StringNullableFilter<"user"> | string | null
    communication?: CommunicationListRelationFilter
    donation?: DonationListRelationFilter
    sponsorship?: SponsorshipListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    U_id?: SortOrder
    Uname?: SortOrder
    pichure?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    gender?: SortOrderInput | SortOrder
    Bdate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    communication?: communicationOrderByRelationAggregateInput
    donation?: donationOrderByRelationAggregateInput
    sponsorship?: sponsorshipOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    U_id?: number
    email?: string
    ph_num?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    Uname?: StringFilter<"user"> | string
    pichure?: BytesNullableFilter<"user"> | Uint8Array | null
    password?: StringFilter<"user"> | string
    gender?: StringNullableFilter<"user"> | string | null
    Bdate?: DateTimeNullableFilter<"user"> | Date | string | null
    Address?: StringNullableFilter<"user"> | string | null
    communication?: CommunicationListRelationFilter
    donation?: DonationListRelationFilter
    sponsorship?: SponsorshipListRelationFilter
  }, "U_id" | "email" | "ph_num">

  export type userOrderByWithAggregationInput = {
    U_id?: SortOrder
    Uname?: SortOrder
    pichure?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    gender?: SortOrderInput | SortOrder
    Bdate?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    U_id?: IntWithAggregatesFilter<"user"> | number
    Uname?: StringWithAggregatesFilter<"user"> | string
    pichure?: BytesNullableWithAggregatesFilter<"user"> | Uint8Array | null
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    ph_num?: StringWithAggregatesFilter<"user"> | string
    gender?: StringNullableWithAggregatesFilter<"user"> | string | null
    Bdate?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    Address?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type adminCreateInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
    communication?: communicationCreateNestedManyWithoutAdminInput
    orphan?: orphanCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
    communication?: communicationUncheckedCreateNestedManyWithoutAdminInput
    orphan?: orphanUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
    communication?: communicationUpdateManyWithoutAdminNestedInput
    orphan?: orphanUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
    communication?: communicationUncheckedUpdateManyWithoutAdminNestedInput
    orphan?: orphanUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
  }

  export type adminUpdateManyMutationInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateManyInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
  }

  export type communicationCreateInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    admin: adminCreateNestedOneWithoutCommunicationInput
    user: userCreateNestedOneWithoutCommunicationInput
  }

  export type communicationUncheckedCreateInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    Admain_id: number
    User_id: number
  }

  export type communicationUpdateInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    admin?: adminUpdateOneRequiredWithoutCommunicationNestedInput
    user?: userUpdateOneRequiredWithoutCommunicationNestedInput
  }

  export type communicationUncheckedUpdateInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    Admain_id?: IntFieldUpdateOperationsInput | number
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type communicationCreateManyInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    Admain_id: number
    User_id: number
  }

  export type communicationUpdateManyMutationInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
  }

  export type communicationUncheckedUpdateManyInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    Admain_id?: IntFieldUpdateOperationsInput | number
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type donationCreateInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    user: userCreateNestedOneWithoutDonationInput
    orphan: orphanCreateNestedOneWithoutDonationInput
  }

  export type donationUncheckedCreateInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    Userrr_id: number
    orphan_id: number
  }

  export type donationUpdateInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutDonationNestedInput
    orphan?: orphanUpdateOneRequiredWithoutDonationNestedInput
  }

  export type donationUncheckedUpdateInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    Userrr_id?: IntFieldUpdateOperationsInput | number
    orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type donationCreateManyInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    Userrr_id: number
    orphan_id: number
  }

  export type donationUpdateManyMutationInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type donationUncheckedUpdateManyInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    Userrr_id?: IntFieldUpdateOperationsInput | number
    orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type orphanCreateInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    donation?: donationCreateNestedManyWithoutOrphanInput
    admin?: adminCreateNestedOneWithoutOrphanInput
    sponsorship?: sponsorshipCreateNestedManyWithoutOrphanInput
  }

  export type orphanUncheckedCreateInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    A_id?: number
    donation?: donationUncheckedCreateNestedManyWithoutOrphanInput
    sponsorship?: sponsorshipUncheckedCreateNestedManyWithoutOrphanInput
  }

  export type orphanUpdateInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    donation?: donationUpdateManyWithoutOrphanNestedInput
    admin?: adminUpdateOneRequiredWithoutOrphanNestedInput
    sponsorship?: sponsorshipUpdateManyWithoutOrphanNestedInput
  }

  export type orphanUncheckedUpdateInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    A_id?: IntFieldUpdateOperationsInput | number
    donation?: donationUncheckedUpdateManyWithoutOrphanNestedInput
    sponsorship?: sponsorshipUncheckedUpdateManyWithoutOrphanNestedInput
  }

  export type orphanCreateManyInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    A_id?: number
  }

  export type orphanUpdateManyMutationInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type orphanUncheckedUpdateManyInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    A_id?: IntFieldUpdateOperationsInput | number
  }

  export type sponsorshipCreateInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    orphan: orphanCreateNestedOneWithoutSponsorshipInput
    user: userCreateNestedOneWithoutSponsorshipInput
  }

  export type sponsorshipUncheckedCreateInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    U_id: number
    Orphan_id: number
  }

  export type sponsorshipUpdateInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    orphan?: orphanUpdateOneRequiredWithoutSponsorshipNestedInput
    user?: userUpdateOneRequiredWithoutSponsorshipNestedInput
  }

  export type sponsorshipUncheckedUpdateInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    U_id?: IntFieldUpdateOperationsInput | number
    Orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type sponsorshipCreateManyInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    U_id: number
    Orphan_id: number
  }

  export type sponsorshipUpdateManyMutationInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
  }

  export type sponsorshipUncheckedUpdateManyInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    U_id?: IntFieldUpdateOperationsInput | number
    Orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    communication?: communicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
    sponsorship?: sponsorshipCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    communication?: communicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    sponsorship?: sponsorshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    communication?: communicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
    sponsorship?: sponsorshipUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    communication?: communicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    sponsorship?: sponsorshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
  }

  export type userUpdateManyMutationInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CommunicationListRelationFilter = {
    every?: communicationWhereInput
    some?: communicationWhereInput
    none?: communicationWhereInput
  }

  export type OrphanListRelationFilter = {
    every?: orphanWhereInput
    some?: orphanWhereInput
    none?: orphanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type communicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orphanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    A_id?: SortOrder
    Aname?: SortOrder
    pichure?: SortOrder
    Bdate?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    Address?: SortOrder
    S_num?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    A_id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    A_id?: SortOrder
    Aname?: SortOrder
    pichure?: SortOrder
    Bdate?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    Address?: SortOrder
    S_num?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    A_id?: SortOrder
    Aname?: SortOrder
    pichure?: SortOrder
    Bdate?: SortOrder
    gender?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    Address?: SortOrder
    S_num?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    A_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type communicationOrderByRelevanceInput = {
    fields: communicationOrderByRelevanceFieldEnum | communicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type communicationCountOrderByAggregateInput = {
    Msg_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
  }

  export type communicationAvgOrderByAggregateInput = {
    Msg_id?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
  }

  export type communicationMaxOrderByAggregateInput = {
    Msg_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
  }

  export type communicationMinOrderByAggregateInput = {
    Msg_id?: SortOrder
    content?: SortOrder
    date?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
  }

  export type communicationSumOrderByAggregateInput = {
    Msg_id?: SortOrder
    IsRead?: SortOrder
    Admain_id?: SortOrder
    User_id?: SortOrder
  }

  export type OrphanScalarRelationFilter = {
    is?: orphanWhereInput
    isNot?: orphanWhereInput
  }

  export type donationOrderByRelevanceInput = {
    fields: donationOrderByRelevanceFieldEnum | donationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type donationCountOrderByAggregateInput = {
    D_id?: SortOrder
    date?: SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
  }

  export type donationAvgOrderByAggregateInput = {
    D_id?: SortOrder
    amount?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
  }

  export type donationMaxOrderByAggregateInput = {
    D_id?: SortOrder
    date?: SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
  }

  export type donationMinOrderByAggregateInput = {
    D_id?: SortOrder
    date?: SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
  }

  export type donationSumOrderByAggregateInput = {
    D_id?: SortOrder
    amount?: SortOrder
    Userrr_id?: SortOrder
    orphan_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DonationListRelationFilter = {
    every?: donationWhereInput
    some?: donationWhereInput
    none?: donationWhereInput
  }

  export type SponsorshipListRelationFilter = {
    every?: sponsorshipWhereInput
    some?: sponsorshipWhereInput
    none?: sponsorshipWhereInput
  }

  export type donationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sponsorshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orphanOrderByRelevanceInput = {
    fields: orphanOrderByRelevanceFieldEnum | orphanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type orphanCountOrderByAggregateInput = {
    Orphan_id?: SortOrder
    Oname?: SortOrder
    pichure?: SortOrder
    gender?: SortOrder
    Bdate?: SortOrder
    age?: SortOrder
    about?: SortOrder
    class?: SortOrder
    school?: SortOrder
    city?: SortOrder
    H_state?: SortOrder
    skills?: SortOrder
    ph_num?: SortOrder
    F_M_status?: SortOrder
    A_id?: SortOrder
  }

  export type orphanAvgOrderByAggregateInput = {
    Orphan_id?: SortOrder
    age?: SortOrder
    A_id?: SortOrder
  }

  export type orphanMaxOrderByAggregateInput = {
    Orphan_id?: SortOrder
    Oname?: SortOrder
    pichure?: SortOrder
    gender?: SortOrder
    Bdate?: SortOrder
    age?: SortOrder
    about?: SortOrder
    class?: SortOrder
    school?: SortOrder
    city?: SortOrder
    H_state?: SortOrder
    skills?: SortOrder
    ph_num?: SortOrder
    F_M_status?: SortOrder
    A_id?: SortOrder
  }

  export type orphanMinOrderByAggregateInput = {
    Orphan_id?: SortOrder
    Oname?: SortOrder
    pichure?: SortOrder
    gender?: SortOrder
    Bdate?: SortOrder
    age?: SortOrder
    about?: SortOrder
    class?: SortOrder
    school?: SortOrder
    city?: SortOrder
    H_state?: SortOrder
    skills?: SortOrder
    ph_num?: SortOrder
    F_M_status?: SortOrder
    A_id?: SortOrder
  }

  export type orphanSumOrderByAggregateInput = {
    Orphan_id?: SortOrder
    age?: SortOrder
    A_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type sponsorshipOrderByRelevanceInput = {
    fields: sponsorshipOrderByRelevanceFieldEnum | sponsorshipOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sponsorshipU_idOrphan_idCompoundUniqueInput = {
    U_id: number
    Orphan_id: number
  }

  export type sponsorshipCountOrderByAggregateInput = {
    is_active?: SortOrder
    date?: SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    p_type?: SortOrder
    sub_type?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
  }

  export type sponsorshipAvgOrderByAggregateInput = {
    is_active?: SortOrder
    amount?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
  }

  export type sponsorshipMaxOrderByAggregateInput = {
    is_active?: SortOrder
    date?: SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    p_type?: SortOrder
    sub_type?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
  }

  export type sponsorshipMinOrderByAggregateInput = {
    is_active?: SortOrder
    date?: SortOrder
    Bank?: SortOrder
    amount?: SortOrder
    p_type?: SortOrder
    sub_type?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
  }

  export type sponsorshipSumOrderByAggregateInput = {
    is_active?: SortOrder
    amount?: SortOrder
    U_id?: SortOrder
    Orphan_id?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    U_id?: SortOrder
    Uname?: SortOrder
    pichure?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    gender?: SortOrder
    Bdate?: SortOrder
    Address?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    U_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    U_id?: SortOrder
    Uname?: SortOrder
    pichure?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    gender?: SortOrder
    Bdate?: SortOrder
    Address?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    U_id?: SortOrder
    Uname?: SortOrder
    pichure?: SortOrder
    email?: SortOrder
    password?: SortOrder
    ph_num?: SortOrder
    gender?: SortOrder
    Bdate?: SortOrder
    Address?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    U_id?: SortOrder
  }

  export type communicationCreateNestedManyWithoutAdminInput = {
    create?: XOR<communicationCreateWithoutAdminInput, communicationUncheckedCreateWithoutAdminInput> | communicationCreateWithoutAdminInput[] | communicationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutAdminInput | communicationCreateOrConnectWithoutAdminInput[]
    createMany?: communicationCreateManyAdminInputEnvelope
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
  }

  export type orphanCreateNestedManyWithoutAdminInput = {
    create?: XOR<orphanCreateWithoutAdminInput, orphanUncheckedCreateWithoutAdminInput> | orphanCreateWithoutAdminInput[] | orphanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: orphanCreateOrConnectWithoutAdminInput | orphanCreateOrConnectWithoutAdminInput[]
    createMany?: orphanCreateManyAdminInputEnvelope
    connect?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
  }

  export type communicationUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<communicationCreateWithoutAdminInput, communicationUncheckedCreateWithoutAdminInput> | communicationCreateWithoutAdminInput[] | communicationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutAdminInput | communicationCreateOrConnectWithoutAdminInput[]
    createMany?: communicationCreateManyAdminInputEnvelope
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
  }

  export type orphanUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<orphanCreateWithoutAdminInput, orphanUncheckedCreateWithoutAdminInput> | orphanCreateWithoutAdminInput[] | orphanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: orphanCreateOrConnectWithoutAdminInput | orphanCreateOrConnectWithoutAdminInput[]
    createMany?: orphanCreateManyAdminInputEnvelope
    connect?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type communicationUpdateManyWithoutAdminNestedInput = {
    create?: XOR<communicationCreateWithoutAdminInput, communicationUncheckedCreateWithoutAdminInput> | communicationCreateWithoutAdminInput[] | communicationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutAdminInput | communicationCreateOrConnectWithoutAdminInput[]
    upsert?: communicationUpsertWithWhereUniqueWithoutAdminInput | communicationUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: communicationCreateManyAdminInputEnvelope
    set?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    disconnect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    delete?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    update?: communicationUpdateWithWhereUniqueWithoutAdminInput | communicationUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: communicationUpdateManyWithWhereWithoutAdminInput | communicationUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: communicationScalarWhereInput | communicationScalarWhereInput[]
  }

  export type orphanUpdateManyWithoutAdminNestedInput = {
    create?: XOR<orphanCreateWithoutAdminInput, orphanUncheckedCreateWithoutAdminInput> | orphanCreateWithoutAdminInput[] | orphanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: orphanCreateOrConnectWithoutAdminInput | orphanCreateOrConnectWithoutAdminInput[]
    upsert?: orphanUpsertWithWhereUniqueWithoutAdminInput | orphanUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: orphanCreateManyAdminInputEnvelope
    set?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    disconnect?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    delete?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    connect?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    update?: orphanUpdateWithWhereUniqueWithoutAdminInput | orphanUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: orphanUpdateManyWithWhereWithoutAdminInput | orphanUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: orphanScalarWhereInput | orphanScalarWhereInput[]
  }

  export type communicationUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<communicationCreateWithoutAdminInput, communicationUncheckedCreateWithoutAdminInput> | communicationCreateWithoutAdminInput[] | communicationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutAdminInput | communicationCreateOrConnectWithoutAdminInput[]
    upsert?: communicationUpsertWithWhereUniqueWithoutAdminInput | communicationUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: communicationCreateManyAdminInputEnvelope
    set?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    disconnect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    delete?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    update?: communicationUpdateWithWhereUniqueWithoutAdminInput | communicationUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: communicationUpdateManyWithWhereWithoutAdminInput | communicationUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: communicationScalarWhereInput | communicationScalarWhereInput[]
  }

  export type orphanUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<orphanCreateWithoutAdminInput, orphanUncheckedCreateWithoutAdminInput> | orphanCreateWithoutAdminInput[] | orphanUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: orphanCreateOrConnectWithoutAdminInput | orphanCreateOrConnectWithoutAdminInput[]
    upsert?: orphanUpsertWithWhereUniqueWithoutAdminInput | orphanUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: orphanCreateManyAdminInputEnvelope
    set?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    disconnect?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    delete?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    connect?: orphanWhereUniqueInput | orphanWhereUniqueInput[]
    update?: orphanUpdateWithWhereUniqueWithoutAdminInput | orphanUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: orphanUpdateManyWithWhereWithoutAdminInput | orphanUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: orphanScalarWhereInput | orphanScalarWhereInput[]
  }

  export type adminCreateNestedOneWithoutCommunicationInput = {
    create?: XOR<adminCreateWithoutCommunicationInput, adminUncheckedCreateWithoutCommunicationInput>
    connectOrCreate?: adminCreateOrConnectWithoutCommunicationInput
    connect?: adminWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCommunicationInput = {
    create?: XOR<userCreateWithoutCommunicationInput, userUncheckedCreateWithoutCommunicationInput>
    connectOrCreate?: userCreateOrConnectWithoutCommunicationInput
    connect?: userWhereUniqueInput
  }

  export type adminUpdateOneRequiredWithoutCommunicationNestedInput = {
    create?: XOR<adminCreateWithoutCommunicationInput, adminUncheckedCreateWithoutCommunicationInput>
    connectOrCreate?: adminCreateOrConnectWithoutCommunicationInput
    upsert?: adminUpsertWithoutCommunicationInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutCommunicationInput, adminUpdateWithoutCommunicationInput>, adminUncheckedUpdateWithoutCommunicationInput>
  }

  export type userUpdateOneRequiredWithoutCommunicationNestedInput = {
    create?: XOR<userCreateWithoutCommunicationInput, userUncheckedCreateWithoutCommunicationInput>
    connectOrCreate?: userCreateOrConnectWithoutCommunicationInput
    upsert?: userUpsertWithoutCommunicationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCommunicationInput, userUpdateWithoutCommunicationInput>, userUncheckedUpdateWithoutCommunicationInput>
  }

  export type userCreateNestedOneWithoutDonationInput = {
    create?: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
    connectOrCreate?: userCreateOrConnectWithoutDonationInput
    connect?: userWhereUniqueInput
  }

  export type orphanCreateNestedOneWithoutDonationInput = {
    create?: XOR<orphanCreateWithoutDonationInput, orphanUncheckedCreateWithoutDonationInput>
    connectOrCreate?: orphanCreateOrConnectWithoutDonationInput
    connect?: orphanWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutDonationNestedInput = {
    create?: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
    connectOrCreate?: userCreateOrConnectWithoutDonationInput
    upsert?: userUpsertWithoutDonationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDonationInput, userUpdateWithoutDonationInput>, userUncheckedUpdateWithoutDonationInput>
  }

  export type orphanUpdateOneRequiredWithoutDonationNestedInput = {
    create?: XOR<orphanCreateWithoutDonationInput, orphanUncheckedCreateWithoutDonationInput>
    connectOrCreate?: orphanCreateOrConnectWithoutDonationInput
    upsert?: orphanUpsertWithoutDonationInput
    connect?: orphanWhereUniqueInput
    update?: XOR<XOR<orphanUpdateToOneWithWhereWithoutDonationInput, orphanUpdateWithoutDonationInput>, orphanUncheckedUpdateWithoutDonationInput>
  }

  export type donationCreateNestedManyWithoutOrphanInput = {
    create?: XOR<donationCreateWithoutOrphanInput, donationUncheckedCreateWithoutOrphanInput> | donationCreateWithoutOrphanInput[] | donationUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: donationCreateOrConnectWithoutOrphanInput | donationCreateOrConnectWithoutOrphanInput[]
    createMany?: donationCreateManyOrphanInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type adminCreateNestedOneWithoutOrphanInput = {
    create?: XOR<adminCreateWithoutOrphanInput, adminUncheckedCreateWithoutOrphanInput>
    connectOrCreate?: adminCreateOrConnectWithoutOrphanInput
    connect?: adminWhereUniqueInput
  }

  export type sponsorshipCreateNestedManyWithoutOrphanInput = {
    create?: XOR<sponsorshipCreateWithoutOrphanInput, sponsorshipUncheckedCreateWithoutOrphanInput> | sponsorshipCreateWithoutOrphanInput[] | sponsorshipUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutOrphanInput | sponsorshipCreateOrConnectWithoutOrphanInput[]
    createMany?: sponsorshipCreateManyOrphanInputEnvelope
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
  }

  export type donationUncheckedCreateNestedManyWithoutOrphanInput = {
    create?: XOR<donationCreateWithoutOrphanInput, donationUncheckedCreateWithoutOrphanInput> | donationCreateWithoutOrphanInput[] | donationUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: donationCreateOrConnectWithoutOrphanInput | donationCreateOrConnectWithoutOrphanInput[]
    createMany?: donationCreateManyOrphanInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type sponsorshipUncheckedCreateNestedManyWithoutOrphanInput = {
    create?: XOR<sponsorshipCreateWithoutOrphanInput, sponsorshipUncheckedCreateWithoutOrphanInput> | sponsorshipCreateWithoutOrphanInput[] | sponsorshipUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutOrphanInput | sponsorshipCreateOrConnectWithoutOrphanInput[]
    createMany?: sponsorshipCreateManyOrphanInputEnvelope
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type donationUpdateManyWithoutOrphanNestedInput = {
    create?: XOR<donationCreateWithoutOrphanInput, donationUncheckedCreateWithoutOrphanInput> | donationCreateWithoutOrphanInput[] | donationUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: donationCreateOrConnectWithoutOrphanInput | donationCreateOrConnectWithoutOrphanInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutOrphanInput | donationUpsertWithWhereUniqueWithoutOrphanInput[]
    createMany?: donationCreateManyOrphanInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutOrphanInput | donationUpdateWithWhereUniqueWithoutOrphanInput[]
    updateMany?: donationUpdateManyWithWhereWithoutOrphanInput | donationUpdateManyWithWhereWithoutOrphanInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type adminUpdateOneRequiredWithoutOrphanNestedInput = {
    create?: XOR<adminCreateWithoutOrphanInput, adminUncheckedCreateWithoutOrphanInput>
    connectOrCreate?: adminCreateOrConnectWithoutOrphanInput
    upsert?: adminUpsertWithoutOrphanInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutOrphanInput, adminUpdateWithoutOrphanInput>, adminUncheckedUpdateWithoutOrphanInput>
  }

  export type sponsorshipUpdateManyWithoutOrphanNestedInput = {
    create?: XOR<sponsorshipCreateWithoutOrphanInput, sponsorshipUncheckedCreateWithoutOrphanInput> | sponsorshipCreateWithoutOrphanInput[] | sponsorshipUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutOrphanInput | sponsorshipCreateOrConnectWithoutOrphanInput[]
    upsert?: sponsorshipUpsertWithWhereUniqueWithoutOrphanInput | sponsorshipUpsertWithWhereUniqueWithoutOrphanInput[]
    createMany?: sponsorshipCreateManyOrphanInputEnvelope
    set?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    disconnect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    delete?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    update?: sponsorshipUpdateWithWhereUniqueWithoutOrphanInput | sponsorshipUpdateWithWhereUniqueWithoutOrphanInput[]
    updateMany?: sponsorshipUpdateManyWithWhereWithoutOrphanInput | sponsorshipUpdateManyWithWhereWithoutOrphanInput[]
    deleteMany?: sponsorshipScalarWhereInput | sponsorshipScalarWhereInput[]
  }

  export type donationUncheckedUpdateManyWithoutOrphanNestedInput = {
    create?: XOR<donationCreateWithoutOrphanInput, donationUncheckedCreateWithoutOrphanInput> | donationCreateWithoutOrphanInput[] | donationUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: donationCreateOrConnectWithoutOrphanInput | donationCreateOrConnectWithoutOrphanInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutOrphanInput | donationUpsertWithWhereUniqueWithoutOrphanInput[]
    createMany?: donationCreateManyOrphanInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutOrphanInput | donationUpdateWithWhereUniqueWithoutOrphanInput[]
    updateMany?: donationUpdateManyWithWhereWithoutOrphanInput | donationUpdateManyWithWhereWithoutOrphanInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type sponsorshipUncheckedUpdateManyWithoutOrphanNestedInput = {
    create?: XOR<sponsorshipCreateWithoutOrphanInput, sponsorshipUncheckedCreateWithoutOrphanInput> | sponsorshipCreateWithoutOrphanInput[] | sponsorshipUncheckedCreateWithoutOrphanInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutOrphanInput | sponsorshipCreateOrConnectWithoutOrphanInput[]
    upsert?: sponsorshipUpsertWithWhereUniqueWithoutOrphanInput | sponsorshipUpsertWithWhereUniqueWithoutOrphanInput[]
    createMany?: sponsorshipCreateManyOrphanInputEnvelope
    set?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    disconnect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    delete?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    update?: sponsorshipUpdateWithWhereUniqueWithoutOrphanInput | sponsorshipUpdateWithWhereUniqueWithoutOrphanInput[]
    updateMany?: sponsorshipUpdateManyWithWhereWithoutOrphanInput | sponsorshipUpdateManyWithWhereWithoutOrphanInput[]
    deleteMany?: sponsorshipScalarWhereInput | sponsorshipScalarWhereInput[]
  }

  export type orphanCreateNestedOneWithoutSponsorshipInput = {
    create?: XOR<orphanCreateWithoutSponsorshipInput, orphanUncheckedCreateWithoutSponsorshipInput>
    connectOrCreate?: orphanCreateOrConnectWithoutSponsorshipInput
    connect?: orphanWhereUniqueInput
  }

  export type userCreateNestedOneWithoutSponsorshipInput = {
    create?: XOR<userCreateWithoutSponsorshipInput, userUncheckedCreateWithoutSponsorshipInput>
    connectOrCreate?: userCreateOrConnectWithoutSponsorshipInput
    connect?: userWhereUniqueInput
  }

  export type orphanUpdateOneRequiredWithoutSponsorshipNestedInput = {
    create?: XOR<orphanCreateWithoutSponsorshipInput, orphanUncheckedCreateWithoutSponsorshipInput>
    connectOrCreate?: orphanCreateOrConnectWithoutSponsorshipInput
    upsert?: orphanUpsertWithoutSponsorshipInput
    connect?: orphanWhereUniqueInput
    update?: XOR<XOR<orphanUpdateToOneWithWhereWithoutSponsorshipInput, orphanUpdateWithoutSponsorshipInput>, orphanUncheckedUpdateWithoutSponsorshipInput>
  }

  export type userUpdateOneRequiredWithoutSponsorshipNestedInput = {
    create?: XOR<userCreateWithoutSponsorshipInput, userUncheckedCreateWithoutSponsorshipInput>
    connectOrCreate?: userCreateOrConnectWithoutSponsorshipInput
    upsert?: userUpsertWithoutSponsorshipInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSponsorshipInput, userUpdateWithoutSponsorshipInput>, userUncheckedUpdateWithoutSponsorshipInput>
  }

  export type communicationCreateNestedManyWithoutUserInput = {
    create?: XOR<communicationCreateWithoutUserInput, communicationUncheckedCreateWithoutUserInput> | communicationCreateWithoutUserInput[] | communicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutUserInput | communicationCreateOrConnectWithoutUserInput[]
    createMany?: communicationCreateManyUserInputEnvelope
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
  }

  export type donationCreateNestedManyWithoutUserInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type sponsorshipCreateNestedManyWithoutUserInput = {
    create?: XOR<sponsorshipCreateWithoutUserInput, sponsorshipUncheckedCreateWithoutUserInput> | sponsorshipCreateWithoutUserInput[] | sponsorshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutUserInput | sponsorshipCreateOrConnectWithoutUserInput[]
    createMany?: sponsorshipCreateManyUserInputEnvelope
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
  }

  export type communicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<communicationCreateWithoutUserInput, communicationUncheckedCreateWithoutUserInput> | communicationCreateWithoutUserInput[] | communicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutUserInput | communicationCreateOrConnectWithoutUserInput[]
    createMany?: communicationCreateManyUserInputEnvelope
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
  }

  export type donationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
  }

  export type sponsorshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sponsorshipCreateWithoutUserInput, sponsorshipUncheckedCreateWithoutUserInput> | sponsorshipCreateWithoutUserInput[] | sponsorshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutUserInput | sponsorshipCreateOrConnectWithoutUserInput[]
    createMany?: sponsorshipCreateManyUserInputEnvelope
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
  }

  export type communicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<communicationCreateWithoutUserInput, communicationUncheckedCreateWithoutUserInput> | communicationCreateWithoutUserInput[] | communicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutUserInput | communicationCreateOrConnectWithoutUserInput[]
    upsert?: communicationUpsertWithWhereUniqueWithoutUserInput | communicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: communicationCreateManyUserInputEnvelope
    set?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    disconnect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    delete?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    update?: communicationUpdateWithWhereUniqueWithoutUserInput | communicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: communicationUpdateManyWithWhereWithoutUserInput | communicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: communicationScalarWhereInput | communicationScalarWhereInput[]
  }

  export type donationUpdateManyWithoutUserNestedInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutUserInput | donationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutUserInput | donationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: donationUpdateManyWithWhereWithoutUserInput | donationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type sponsorshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<sponsorshipCreateWithoutUserInput, sponsorshipUncheckedCreateWithoutUserInput> | sponsorshipCreateWithoutUserInput[] | sponsorshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutUserInput | sponsorshipCreateOrConnectWithoutUserInput[]
    upsert?: sponsorshipUpsertWithWhereUniqueWithoutUserInput | sponsorshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sponsorshipCreateManyUserInputEnvelope
    set?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    disconnect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    delete?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    update?: sponsorshipUpdateWithWhereUniqueWithoutUserInput | sponsorshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sponsorshipUpdateManyWithWhereWithoutUserInput | sponsorshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sponsorshipScalarWhereInput | sponsorshipScalarWhereInput[]
  }

  export type communicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<communicationCreateWithoutUserInput, communicationUncheckedCreateWithoutUserInput> | communicationCreateWithoutUserInput[] | communicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: communicationCreateOrConnectWithoutUserInput | communicationCreateOrConnectWithoutUserInput[]
    upsert?: communicationUpsertWithWhereUniqueWithoutUserInput | communicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: communicationCreateManyUserInputEnvelope
    set?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    disconnect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    delete?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    connect?: communicationWhereUniqueInput | communicationWhereUniqueInput[]
    update?: communicationUpdateWithWhereUniqueWithoutUserInput | communicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: communicationUpdateManyWithWhereWithoutUserInput | communicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: communicationScalarWhereInput | communicationScalarWhereInput[]
  }

  export type donationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput> | donationCreateWithoutUserInput[] | donationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: donationCreateOrConnectWithoutUserInput | donationCreateOrConnectWithoutUserInput[]
    upsert?: donationUpsertWithWhereUniqueWithoutUserInput | donationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: donationCreateManyUserInputEnvelope
    set?: donationWhereUniqueInput | donationWhereUniqueInput[]
    disconnect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    delete?: donationWhereUniqueInput | donationWhereUniqueInput[]
    connect?: donationWhereUniqueInput | donationWhereUniqueInput[]
    update?: donationUpdateWithWhereUniqueWithoutUserInput | donationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: donationUpdateManyWithWhereWithoutUserInput | donationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: donationScalarWhereInput | donationScalarWhereInput[]
  }

  export type sponsorshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sponsorshipCreateWithoutUserInput, sponsorshipUncheckedCreateWithoutUserInput> | sponsorshipCreateWithoutUserInput[] | sponsorshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sponsorshipCreateOrConnectWithoutUserInput | sponsorshipCreateOrConnectWithoutUserInput[]
    upsert?: sponsorshipUpsertWithWhereUniqueWithoutUserInput | sponsorshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sponsorshipCreateManyUserInputEnvelope
    set?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    disconnect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    delete?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    connect?: sponsorshipWhereUniqueInput | sponsorshipWhereUniqueInput[]
    update?: sponsorshipUpdateWithWhereUniqueWithoutUserInput | sponsorshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sponsorshipUpdateManyWithWhereWithoutUserInput | sponsorshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sponsorshipScalarWhereInput | sponsorshipScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type communicationCreateWithoutAdminInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    user: userCreateNestedOneWithoutCommunicationInput
  }

  export type communicationUncheckedCreateWithoutAdminInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    User_id: number
  }

  export type communicationCreateOrConnectWithoutAdminInput = {
    where: communicationWhereUniqueInput
    create: XOR<communicationCreateWithoutAdminInput, communicationUncheckedCreateWithoutAdminInput>
  }

  export type communicationCreateManyAdminInputEnvelope = {
    data: communicationCreateManyAdminInput | communicationCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type orphanCreateWithoutAdminInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    donation?: donationCreateNestedManyWithoutOrphanInput
    sponsorship?: sponsorshipCreateNestedManyWithoutOrphanInput
  }

  export type orphanUncheckedCreateWithoutAdminInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    donation?: donationUncheckedCreateNestedManyWithoutOrphanInput
    sponsorship?: sponsorshipUncheckedCreateNestedManyWithoutOrphanInput
  }

  export type orphanCreateOrConnectWithoutAdminInput = {
    where: orphanWhereUniqueInput
    create: XOR<orphanCreateWithoutAdminInput, orphanUncheckedCreateWithoutAdminInput>
  }

  export type orphanCreateManyAdminInputEnvelope = {
    data: orphanCreateManyAdminInput | orphanCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type communicationUpsertWithWhereUniqueWithoutAdminInput = {
    where: communicationWhereUniqueInput
    update: XOR<communicationUpdateWithoutAdminInput, communicationUncheckedUpdateWithoutAdminInput>
    create: XOR<communicationCreateWithoutAdminInput, communicationUncheckedCreateWithoutAdminInput>
  }

  export type communicationUpdateWithWhereUniqueWithoutAdminInput = {
    where: communicationWhereUniqueInput
    data: XOR<communicationUpdateWithoutAdminInput, communicationUncheckedUpdateWithoutAdminInput>
  }

  export type communicationUpdateManyWithWhereWithoutAdminInput = {
    where: communicationScalarWhereInput
    data: XOR<communicationUpdateManyMutationInput, communicationUncheckedUpdateManyWithoutAdminInput>
  }

  export type communicationScalarWhereInput = {
    AND?: communicationScalarWhereInput | communicationScalarWhereInput[]
    OR?: communicationScalarWhereInput[]
    NOT?: communicationScalarWhereInput | communicationScalarWhereInput[]
    Msg_id?: IntFilter<"communication"> | number
    content?: StringFilter<"communication"> | string
    date?: StringFilter<"communication"> | string
    IsRead?: IntFilter<"communication"> | number
    Admain_id?: IntFilter<"communication"> | number
    User_id?: IntFilter<"communication"> | number
  }

  export type orphanUpsertWithWhereUniqueWithoutAdminInput = {
    where: orphanWhereUniqueInput
    update: XOR<orphanUpdateWithoutAdminInput, orphanUncheckedUpdateWithoutAdminInput>
    create: XOR<orphanCreateWithoutAdminInput, orphanUncheckedCreateWithoutAdminInput>
  }

  export type orphanUpdateWithWhereUniqueWithoutAdminInput = {
    where: orphanWhereUniqueInput
    data: XOR<orphanUpdateWithoutAdminInput, orphanUncheckedUpdateWithoutAdminInput>
  }

  export type orphanUpdateManyWithWhereWithoutAdminInput = {
    where: orphanScalarWhereInput
    data: XOR<orphanUpdateManyMutationInput, orphanUncheckedUpdateManyWithoutAdminInput>
  }

  export type orphanScalarWhereInput = {
    AND?: orphanScalarWhereInput | orphanScalarWhereInput[]
    OR?: orphanScalarWhereInput[]
    NOT?: orphanScalarWhereInput | orphanScalarWhereInput[]
    Orphan_id?: IntFilter<"orphan"> | number
    Oname?: StringFilter<"orphan"> | string
    pichure?: BytesNullableFilter<"orphan"> | Uint8Array | null
    gender?: StringNullableFilter<"orphan"> | string | null
    Bdate?: DateTimeNullableFilter<"orphan"> | Date | string | null
    age?: IntNullableFilter<"orphan"> | number | null
    about?: StringNullableFilter<"orphan"> | string | null
    class?: StringNullableFilter<"orphan"> | string | null
    school?: StringNullableFilter<"orphan"> | string | null
    city?: StringNullableFilter<"orphan"> | string | null
    H_state?: StringNullableFilter<"orphan"> | string | null
    skills?: StringNullableFilter<"orphan"> | string | null
    ph_num?: StringFilter<"orphan"> | string
    F_M_status?: StringNullableFilter<"orphan"> | string | null
    A_id?: IntFilter<"orphan"> | number
  }

  export type adminCreateWithoutCommunicationInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
    orphan?: orphanCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutCommunicationInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
    orphan?: orphanUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutCommunicationInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutCommunicationInput, adminUncheckedCreateWithoutCommunicationInput>
  }

  export type userCreateWithoutCommunicationInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    donation?: donationCreateNestedManyWithoutUserInput
    sponsorship?: sponsorshipCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCommunicationInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
    sponsorship?: sponsorshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCommunicationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommunicationInput, userUncheckedCreateWithoutCommunicationInput>
  }

  export type adminUpsertWithoutCommunicationInput = {
    update: XOR<adminUpdateWithoutCommunicationInput, adminUncheckedUpdateWithoutCommunicationInput>
    create: XOR<adminCreateWithoutCommunicationInput, adminUncheckedCreateWithoutCommunicationInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutCommunicationInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutCommunicationInput, adminUncheckedUpdateWithoutCommunicationInput>
  }

  export type adminUpdateWithoutCommunicationInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
    orphan?: orphanUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutCommunicationInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
    orphan?: orphanUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type userUpsertWithoutCommunicationInput = {
    update: XOR<userUpdateWithoutCommunicationInput, userUncheckedUpdateWithoutCommunicationInput>
    create: XOR<userCreateWithoutCommunicationInput, userUncheckedCreateWithoutCommunicationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCommunicationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCommunicationInput, userUncheckedUpdateWithoutCommunicationInput>
  }

  export type userUpdateWithoutCommunicationInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    donation?: donationUpdateManyWithoutUserNestedInput
    sponsorship?: sponsorshipUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCommunicationInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
    sponsorship?: sponsorshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutDonationInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    communication?: communicationCreateNestedManyWithoutUserInput
    sponsorship?: sponsorshipCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDonationInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    communication?: communicationUncheckedCreateNestedManyWithoutUserInput
    sponsorship?: sponsorshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDonationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
  }

  export type orphanCreateWithoutDonationInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    admin?: adminCreateNestedOneWithoutOrphanInput
    sponsorship?: sponsorshipCreateNestedManyWithoutOrphanInput
  }

  export type orphanUncheckedCreateWithoutDonationInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    A_id?: number
    sponsorship?: sponsorshipUncheckedCreateNestedManyWithoutOrphanInput
  }

  export type orphanCreateOrConnectWithoutDonationInput = {
    where: orphanWhereUniqueInput
    create: XOR<orphanCreateWithoutDonationInput, orphanUncheckedCreateWithoutDonationInput>
  }

  export type userUpsertWithoutDonationInput = {
    update: XOR<userUpdateWithoutDonationInput, userUncheckedUpdateWithoutDonationInput>
    create: XOR<userCreateWithoutDonationInput, userUncheckedCreateWithoutDonationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDonationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDonationInput, userUncheckedUpdateWithoutDonationInput>
  }

  export type userUpdateWithoutDonationInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    communication?: communicationUpdateManyWithoutUserNestedInput
    sponsorship?: sponsorshipUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDonationInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    communication?: communicationUncheckedUpdateManyWithoutUserNestedInput
    sponsorship?: sponsorshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type orphanUpsertWithoutDonationInput = {
    update: XOR<orphanUpdateWithoutDonationInput, orphanUncheckedUpdateWithoutDonationInput>
    create: XOR<orphanCreateWithoutDonationInput, orphanUncheckedCreateWithoutDonationInput>
    where?: orphanWhereInput
  }

  export type orphanUpdateToOneWithWhereWithoutDonationInput = {
    where?: orphanWhereInput
    data: XOR<orphanUpdateWithoutDonationInput, orphanUncheckedUpdateWithoutDonationInput>
  }

  export type orphanUpdateWithoutDonationInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: adminUpdateOneRequiredWithoutOrphanNestedInput
    sponsorship?: sponsorshipUpdateManyWithoutOrphanNestedInput
  }

  export type orphanUncheckedUpdateWithoutDonationInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    A_id?: IntFieldUpdateOperationsInput | number
    sponsorship?: sponsorshipUncheckedUpdateManyWithoutOrphanNestedInput
  }

  export type donationCreateWithoutOrphanInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    user: userCreateNestedOneWithoutDonationInput
  }

  export type donationUncheckedCreateWithoutOrphanInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    Userrr_id: number
  }

  export type donationCreateOrConnectWithoutOrphanInput = {
    where: donationWhereUniqueInput
    create: XOR<donationCreateWithoutOrphanInput, donationUncheckedCreateWithoutOrphanInput>
  }

  export type donationCreateManyOrphanInputEnvelope = {
    data: donationCreateManyOrphanInput | donationCreateManyOrphanInput[]
    skipDuplicates?: boolean
  }

  export type adminCreateWithoutOrphanInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
    communication?: communicationCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutOrphanInput = {
    A_id?: number
    Aname: string
    pichure?: Uint8Array | null
    Bdate?: Date | string | null
    gender?: string | null
    email: string
    password: string
    ph_num: string
    Address?: string | null
    S_num: string
    communication?: communicationUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutOrphanInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutOrphanInput, adminUncheckedCreateWithoutOrphanInput>
  }

  export type sponsorshipCreateWithoutOrphanInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    user: userCreateNestedOneWithoutSponsorshipInput
  }

  export type sponsorshipUncheckedCreateWithoutOrphanInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    U_id: number
  }

  export type sponsorshipCreateOrConnectWithoutOrphanInput = {
    where: sponsorshipWhereUniqueInput
    create: XOR<sponsorshipCreateWithoutOrphanInput, sponsorshipUncheckedCreateWithoutOrphanInput>
  }

  export type sponsorshipCreateManyOrphanInputEnvelope = {
    data: sponsorshipCreateManyOrphanInput | sponsorshipCreateManyOrphanInput[]
    skipDuplicates?: boolean
  }

  export type donationUpsertWithWhereUniqueWithoutOrphanInput = {
    where: donationWhereUniqueInput
    update: XOR<donationUpdateWithoutOrphanInput, donationUncheckedUpdateWithoutOrphanInput>
    create: XOR<donationCreateWithoutOrphanInput, donationUncheckedCreateWithoutOrphanInput>
  }

  export type donationUpdateWithWhereUniqueWithoutOrphanInput = {
    where: donationWhereUniqueInput
    data: XOR<donationUpdateWithoutOrphanInput, donationUncheckedUpdateWithoutOrphanInput>
  }

  export type donationUpdateManyWithWhereWithoutOrphanInput = {
    where: donationScalarWhereInput
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyWithoutOrphanInput>
  }

  export type donationScalarWhereInput = {
    AND?: donationScalarWhereInput | donationScalarWhereInput[]
    OR?: donationScalarWhereInput[]
    NOT?: donationScalarWhereInput | donationScalarWhereInput[]
    D_id?: IntFilter<"donation"> | number
    date?: DateTimeNullableFilter<"donation"> | Date | string | null
    Bank?: StringFilter<"donation"> | string
    amount?: IntFilter<"donation"> | number
    type?: StringFilter<"donation"> | string
    Userrr_id?: IntFilter<"donation"> | number
    orphan_id?: IntFilter<"donation"> | number
  }

  export type adminUpsertWithoutOrphanInput = {
    update: XOR<adminUpdateWithoutOrphanInput, adminUncheckedUpdateWithoutOrphanInput>
    create: XOR<adminCreateWithoutOrphanInput, adminUncheckedCreateWithoutOrphanInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutOrphanInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutOrphanInput, adminUncheckedUpdateWithoutOrphanInput>
  }

  export type adminUpdateWithoutOrphanInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
    communication?: communicationUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutOrphanInput = {
    A_id?: IntFieldUpdateOperationsInput | number
    Aname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    S_num?: StringFieldUpdateOperationsInput | string
    communication?: communicationUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type sponsorshipUpsertWithWhereUniqueWithoutOrphanInput = {
    where: sponsorshipWhereUniqueInput
    update: XOR<sponsorshipUpdateWithoutOrphanInput, sponsorshipUncheckedUpdateWithoutOrphanInput>
    create: XOR<sponsorshipCreateWithoutOrphanInput, sponsorshipUncheckedCreateWithoutOrphanInput>
  }

  export type sponsorshipUpdateWithWhereUniqueWithoutOrphanInput = {
    where: sponsorshipWhereUniqueInput
    data: XOR<sponsorshipUpdateWithoutOrphanInput, sponsorshipUncheckedUpdateWithoutOrphanInput>
  }

  export type sponsorshipUpdateManyWithWhereWithoutOrphanInput = {
    where: sponsorshipScalarWhereInput
    data: XOR<sponsorshipUpdateManyMutationInput, sponsorshipUncheckedUpdateManyWithoutOrphanInput>
  }

  export type sponsorshipScalarWhereInput = {
    AND?: sponsorshipScalarWhereInput | sponsorshipScalarWhereInput[]
    OR?: sponsorshipScalarWhereInput[]
    NOT?: sponsorshipScalarWhereInput | sponsorshipScalarWhereInput[]
    is_active?: IntFilter<"sponsorship"> | number
    date?: DateTimeNullableFilter<"sponsorship"> | Date | string | null
    Bank?: StringFilter<"sponsorship"> | string
    amount?: IntFilter<"sponsorship"> | number
    p_type?: StringFilter<"sponsorship"> | string
    sub_type?: StringFilter<"sponsorship"> | string
    U_id?: IntFilter<"sponsorship"> | number
    Orphan_id?: IntFilter<"sponsorship"> | number
  }

  export type orphanCreateWithoutSponsorshipInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    donation?: donationCreateNestedManyWithoutOrphanInput
    admin?: adminCreateNestedOneWithoutOrphanInput
  }

  export type orphanUncheckedCreateWithoutSponsorshipInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
    A_id?: number
    donation?: donationUncheckedCreateNestedManyWithoutOrphanInput
  }

  export type orphanCreateOrConnectWithoutSponsorshipInput = {
    where: orphanWhereUniqueInput
    create: XOR<orphanCreateWithoutSponsorshipInput, orphanUncheckedCreateWithoutSponsorshipInput>
  }

  export type userCreateWithoutSponsorshipInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    communication?: communicationCreateNestedManyWithoutUserInput
    donation?: donationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSponsorshipInput = {
    U_id?: number
    Uname: string
    pichure?: Uint8Array | null
    email: string
    password: string
    ph_num: string
    gender?: string | null
    Bdate?: Date | string | null
    Address?: string | null
    communication?: communicationUncheckedCreateNestedManyWithoutUserInput
    donation?: donationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSponsorshipInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSponsorshipInput, userUncheckedCreateWithoutSponsorshipInput>
  }

  export type orphanUpsertWithoutSponsorshipInput = {
    update: XOR<orphanUpdateWithoutSponsorshipInput, orphanUncheckedUpdateWithoutSponsorshipInput>
    create: XOR<orphanCreateWithoutSponsorshipInput, orphanUncheckedCreateWithoutSponsorshipInput>
    where?: orphanWhereInput
  }

  export type orphanUpdateToOneWithWhereWithoutSponsorshipInput = {
    where?: orphanWhereInput
    data: XOR<orphanUpdateWithoutSponsorshipInput, orphanUncheckedUpdateWithoutSponsorshipInput>
  }

  export type orphanUpdateWithoutSponsorshipInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    donation?: donationUpdateManyWithoutOrphanNestedInput
    admin?: adminUpdateOneRequiredWithoutOrphanNestedInput
  }

  export type orphanUncheckedUpdateWithoutSponsorshipInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    A_id?: IntFieldUpdateOperationsInput | number
    donation?: donationUncheckedUpdateManyWithoutOrphanNestedInput
  }

  export type userUpsertWithoutSponsorshipInput = {
    update: XOR<userUpdateWithoutSponsorshipInput, userUncheckedUpdateWithoutSponsorshipInput>
    create: XOR<userCreateWithoutSponsorshipInput, userUncheckedCreateWithoutSponsorshipInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSponsorshipInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSponsorshipInput, userUncheckedUpdateWithoutSponsorshipInput>
  }

  export type userUpdateWithoutSponsorshipInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    communication?: communicationUpdateManyWithoutUserNestedInput
    donation?: donationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSponsorshipInput = {
    U_id?: IntFieldUpdateOperationsInput | number
    Uname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ph_num?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    communication?: communicationUncheckedUpdateManyWithoutUserNestedInput
    donation?: donationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type communicationCreateWithoutUserInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    admin: adminCreateNestedOneWithoutCommunicationInput
  }

  export type communicationUncheckedCreateWithoutUserInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    Admain_id: number
  }

  export type communicationCreateOrConnectWithoutUserInput = {
    where: communicationWhereUniqueInput
    create: XOR<communicationCreateWithoutUserInput, communicationUncheckedCreateWithoutUserInput>
  }

  export type communicationCreateManyUserInputEnvelope = {
    data: communicationCreateManyUserInput | communicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type donationCreateWithoutUserInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    orphan: orphanCreateNestedOneWithoutDonationInput
  }

  export type donationUncheckedCreateWithoutUserInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    orphan_id: number
  }

  export type donationCreateOrConnectWithoutUserInput = {
    where: donationWhereUniqueInput
    create: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput>
  }

  export type donationCreateManyUserInputEnvelope = {
    data: donationCreateManyUserInput | donationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sponsorshipCreateWithoutUserInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    orphan: orphanCreateNestedOneWithoutSponsorshipInput
  }

  export type sponsorshipUncheckedCreateWithoutUserInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    Orphan_id: number
  }

  export type sponsorshipCreateOrConnectWithoutUserInput = {
    where: sponsorshipWhereUniqueInput
    create: XOR<sponsorshipCreateWithoutUserInput, sponsorshipUncheckedCreateWithoutUserInput>
  }

  export type sponsorshipCreateManyUserInputEnvelope = {
    data: sponsorshipCreateManyUserInput | sponsorshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type communicationUpsertWithWhereUniqueWithoutUserInput = {
    where: communicationWhereUniqueInput
    update: XOR<communicationUpdateWithoutUserInput, communicationUncheckedUpdateWithoutUserInput>
    create: XOR<communicationCreateWithoutUserInput, communicationUncheckedCreateWithoutUserInput>
  }

  export type communicationUpdateWithWhereUniqueWithoutUserInput = {
    where: communicationWhereUniqueInput
    data: XOR<communicationUpdateWithoutUserInput, communicationUncheckedUpdateWithoutUserInput>
  }

  export type communicationUpdateManyWithWhereWithoutUserInput = {
    where: communicationScalarWhereInput
    data: XOR<communicationUpdateManyMutationInput, communicationUncheckedUpdateManyWithoutUserInput>
  }

  export type donationUpsertWithWhereUniqueWithoutUserInput = {
    where: donationWhereUniqueInput
    update: XOR<donationUpdateWithoutUserInput, donationUncheckedUpdateWithoutUserInput>
    create: XOR<donationCreateWithoutUserInput, donationUncheckedCreateWithoutUserInput>
  }

  export type donationUpdateWithWhereUniqueWithoutUserInput = {
    where: donationWhereUniqueInput
    data: XOR<donationUpdateWithoutUserInput, donationUncheckedUpdateWithoutUserInput>
  }

  export type donationUpdateManyWithWhereWithoutUserInput = {
    where: donationScalarWhereInput
    data: XOR<donationUpdateManyMutationInput, donationUncheckedUpdateManyWithoutUserInput>
  }

  export type sponsorshipUpsertWithWhereUniqueWithoutUserInput = {
    where: sponsorshipWhereUniqueInput
    update: XOR<sponsorshipUpdateWithoutUserInput, sponsorshipUncheckedUpdateWithoutUserInput>
    create: XOR<sponsorshipCreateWithoutUserInput, sponsorshipUncheckedCreateWithoutUserInput>
  }

  export type sponsorshipUpdateWithWhereUniqueWithoutUserInput = {
    where: sponsorshipWhereUniqueInput
    data: XOR<sponsorshipUpdateWithoutUserInput, sponsorshipUncheckedUpdateWithoutUserInput>
  }

  export type sponsorshipUpdateManyWithWhereWithoutUserInput = {
    where: sponsorshipScalarWhereInput
    data: XOR<sponsorshipUpdateManyMutationInput, sponsorshipUncheckedUpdateManyWithoutUserInput>
  }

  export type communicationCreateManyAdminInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    User_id: number
  }

  export type orphanCreateManyAdminInput = {
    Orphan_id: number
    Oname: string
    pichure?: Uint8Array | null
    gender?: string | null
    Bdate?: Date | string | null
    age?: number | null
    about?: string | null
    class?: string | null
    school?: string | null
    city?: string | null
    H_state?: string | null
    skills?: string | null
    ph_num: string
    F_M_status?: string | null
  }

  export type communicationUpdateWithoutAdminInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutCommunicationNestedInput
  }

  export type communicationUncheckedUpdateWithoutAdminInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type communicationUncheckedUpdateManyWithoutAdminInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    User_id?: IntFieldUpdateOperationsInput | number
  }

  export type orphanUpdateWithoutAdminInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    donation?: donationUpdateManyWithoutOrphanNestedInput
    sponsorship?: sponsorshipUpdateManyWithoutOrphanNestedInput
  }

  export type orphanUncheckedUpdateWithoutAdminInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
    donation?: donationUncheckedUpdateManyWithoutOrphanNestedInput
    sponsorship?: sponsorshipUncheckedUpdateManyWithoutOrphanNestedInput
  }

  export type orphanUncheckedUpdateManyWithoutAdminInput = {
    Orphan_id?: IntFieldUpdateOperationsInput | number
    Oname?: StringFieldUpdateOperationsInput | string
    pichure?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Bdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    school?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    H_state?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    ph_num?: StringFieldUpdateOperationsInput | string
    F_M_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type donationCreateManyOrphanInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    Userrr_id: number
  }

  export type sponsorshipCreateManyOrphanInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    U_id: number
  }

  export type donationUpdateWithoutOrphanInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutDonationNestedInput
  }

  export type donationUncheckedUpdateWithoutOrphanInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    Userrr_id?: IntFieldUpdateOperationsInput | number
  }

  export type donationUncheckedUpdateManyWithoutOrphanInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    Userrr_id?: IntFieldUpdateOperationsInput | number
  }

  export type sponsorshipUpdateWithoutOrphanInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutSponsorshipNestedInput
  }

  export type sponsorshipUncheckedUpdateWithoutOrphanInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    U_id?: IntFieldUpdateOperationsInput | number
  }

  export type sponsorshipUncheckedUpdateManyWithoutOrphanInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    U_id?: IntFieldUpdateOperationsInput | number
  }

  export type communicationCreateManyUserInput = {
    Msg_id: number
    content: string
    date: string
    IsRead?: number
    Admain_id: number
  }

  export type donationCreateManyUserInput = {
    D_id: number
    date?: Date | string | null
    Bank: string
    amount: number
    type: string
    orphan_id: number
  }

  export type sponsorshipCreateManyUserInput = {
    is_active?: number
    date?: Date | string | null
    Bank: string
    amount: number
    p_type: string
    sub_type: string
    Orphan_id: number
  }

  export type communicationUpdateWithoutUserInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    admin?: adminUpdateOneRequiredWithoutCommunicationNestedInput
  }

  export type communicationUncheckedUpdateWithoutUserInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    Admain_id?: IntFieldUpdateOperationsInput | number
  }

  export type communicationUncheckedUpdateManyWithoutUserInput = {
    Msg_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    IsRead?: IntFieldUpdateOperationsInput | number
    Admain_id?: IntFieldUpdateOperationsInput | number
  }

  export type donationUpdateWithoutUserInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    orphan?: orphanUpdateOneRequiredWithoutDonationNestedInput
  }

  export type donationUncheckedUpdateWithoutUserInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type donationUncheckedUpdateManyWithoutUserInput = {
    D_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type sponsorshipUpdateWithoutUserInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    orphan?: orphanUpdateOneRequiredWithoutSponsorshipNestedInput
  }

  export type sponsorshipUncheckedUpdateWithoutUserInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    Orphan_id?: IntFieldUpdateOperationsInput | number
  }

  export type sponsorshipUncheckedUpdateManyWithoutUserInput = {
    is_active?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Bank?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    p_type?: StringFieldUpdateOperationsInput | string
    sub_type?: StringFieldUpdateOperationsInput | string
    Orphan_id?: IntFieldUpdateOperationsInput | number
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