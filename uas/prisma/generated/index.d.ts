
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model categories
 * 
 */
export type categories = {
  id: string
  name: string
  created: Date
  updated: Date
}

/**
 * Model products
 * 
 */
export type products = {
  id: string
  categoryId: string
  supplierId: string
  name: string
  stocks: number
  price: number
  created: Date
  updated: Date
}

/**
 * Model suppliers
 * 
 */
export type suppliers = {
  id: string
  name: string
  created: Date
  updated: Date
}

/**
 * Model transactions
 * 
 */
export type transactions = {
  id: string
  productId: string
  quantities: number
  payment_status: PAYMENT_STATUS
  created: Date
  updated: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PAYMENT_STATUS: {
  SUCCESS: 'SUCCESS',
  UNPAID: 'UNPAID'
};

export type PAYMENT_STATUS = (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<GlobalReject>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<GlobalReject>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.suppliersDelegate<GlobalReject>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    categories: 'categories',
    products: 'products',
    suppliers: 'suppliers',
    transactions: 'transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */


  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect = {
    products?: boolean
  }

  export type CategoriesCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoriesCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoriesCountOutputType
    : S extends undefined
    ? never
    : S extends CategoriesCountOutputTypeArgs
    ?'include' extends U
    ? CategoriesCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CategoriesCountOutputType ? CategoriesCountOutputType[P] : never
  } 
    : CategoriesCountOutputType
  : CategoriesCountOutputType




  // Custom InputTypes

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     * 
    **/
    select?: CategoriesCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductsCountOutputType
   */


  export type ProductsCountOutputType = {
    transactions: number
  }

  export type ProductsCountOutputTypeSelect = {
    transactions?: boolean
  }

  export type ProductsCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductsCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductsCountOutputType
    : S extends undefined
    ? never
    : S extends ProductsCountOutputTypeArgs
    ?'include' extends U
    ? ProductsCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductsCountOutputType ? ProductsCountOutputType[P] : never
  } 
    : ProductsCountOutputType
  : ProductsCountOutputType




  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     * 
    **/
    select?: ProductsCountOutputTypeSelect | null
  }



  /**
   * Count Type SuppliersCountOutputType
   */


  export type SuppliersCountOutputType = {
    products: number
  }

  export type SuppliersCountOutputTypeSelect = {
    products?: boolean
  }

  export type SuppliersCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SuppliersCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SuppliersCountOutputType
    : S extends undefined
    ? never
    : S extends SuppliersCountOutputTypeArgs
    ?'include' extends U
    ? SuppliersCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SuppliersCountOutputType ? SuppliersCountOutputType[P] : never
  } 
    : SuppliersCountOutputType
  : SuppliersCountOutputType




  // Custom InputTypes

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     * 
    **/
    select?: SuppliersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model categories
   */


  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created: Date | null
    updated: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created: Date | null
    updated: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    created: number
    updated: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type CategoriesAggregateArgs = {
    /**
     * Filter which categories to aggregate.
     * 
    **/
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs = {
    where?: categoriesWhereInput
    orderBy?: Enumerable<categoriesOrderByWithAggregationInput>
    by: Array<CategoriesScalarFieldEnum>
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }


  export type CategoriesGroupByOutputType = {
    id: string
    name: string
    created: Date
    updated: Date
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect = {
    id?: boolean
    name?: boolean
    created?: boolean
    updated?: boolean
    products?: boolean | productsFindManyArgs
    _count?: boolean | CategoriesCountOutputTypeArgs
  }

  export type categoriesInclude = {
    products?: boolean | productsFindManyArgs
    _count?: boolean | CategoriesCountOutputTypeArgs
  }

  export type categoriesGetPayload<
    S extends boolean | null | undefined | categoriesArgs,
    U = keyof S
      > = S extends true
        ? categories
    : S extends undefined
    ? never
    : S extends categoriesArgs | categoriesFindManyArgs
    ?'include' extends U
    ? categories  & {
    [P in TrueKeys<S['include']>]:
        P extends 'products' ? Array < productsGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoriesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'products' ? Array < productsGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoriesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof categories ? categories[P] : never
  } 
    : categories
  : categories


  type categoriesCountArgs = Merge<
    Omit<categoriesFindManyArgs, 'select' | 'include'> & {
      select?: CategoriesCountAggregateInputType | true
    }
  >

  export interface categoriesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categories'> extends True ? CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>> : CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categories'> extends True ? CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>> : CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriesFindManyArgs>(
      args?: SelectSubset<T, categoriesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<categories>>, PrismaPromise<Array<categoriesGetPayload<T>>>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends categoriesCreateArgs>(
      args: SelectSubset<T, categoriesCreateArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriesCreateManyArgs>(
      args?: SelectSubset<T, categoriesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends categoriesDeleteArgs>(
      args: SelectSubset<T, categoriesDeleteArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriesUpdateArgs>(
      args: SelectSubset<T, categoriesUpdateArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriesDeleteManyArgs>(
      args?: SelectSubset<T, categoriesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriesUpdateManyArgs>(
      args: SelectSubset<T, categoriesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends categoriesUpsertArgs>(
      args: SelectSubset<T, categoriesUpsertArgs>
    ): CheckSelect<T, Prisma__categoriesClient<categories>, Prisma__categoriesClient<categoriesGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends productsFindManyArgs = {}>(args?: Subset<T, productsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Throw an Error if a categories can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where: categoriesWhereUniqueInput
  }


  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Throw an Error if a categories can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     * 
    **/
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     * 
    **/
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * categories findMany
   */
  export type categoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Filter, which categories to fetch.
     * 
    **/
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     * 
    **/
    orderBy?: Enumerable<categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     * 
    **/
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoriesScalarFieldEnum>
  }


  /**
   * categories create
   */
  export type categoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * The data needed to create a categories.
     * 
    **/
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }


  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs = {
    /**
     * The data used to create many categories.
     * 
    **/
    data: Enumerable<categoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categories update
   */
  export type categoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * The data needed to update a categories.
     * 
    **/
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     * 
    **/
    where: categoriesWhereUniqueInput
  }


  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs = {
    /**
     * The data used to update categories.
     * 
    **/
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     * 
    **/
    where?: categoriesWhereInput
  }


  /**
   * categories upsert
   */
  export type categoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * The filter to search for the categories to update in case it exists.
     * 
    **/
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     * 
    **/
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }


  /**
   * categories delete
   */
  export type categoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
    /**
     * Filter which categories to delete.
     * 
    **/
    where: categoriesWhereUniqueInput
  }


  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs = {
    /**
     * Filter which categories to delete
     * 
    **/
    where?: categoriesWhereInput
  }


  /**
   * categories without action
   */
  export type categoriesArgs = {
    /**
     * Select specific fields to fetch from the categories
     * 
    **/
    select?: categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: categoriesInclude | null
  }



  /**
   * Model products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    stocks: number | null
    price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    stocks: number | null
    price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    supplierId: string | null
    name: string | null
    stocks: number | null
    price: number | null
    created: Date | null
    updated: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    supplierId: string | null
    name: string | null
    stocks: number | null
    price: number | null
    created: Date | null
    updated: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    categoryId: number
    supplierId: number
    name: number
    stocks: number
    price: number
    created: number
    updated: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    stocks?: true
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    stocks?: true
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    categoryId?: true
    supplierId?: true
    name?: true
    stocks?: true
    price?: true
    created?: true
    updated?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    categoryId?: true
    supplierId?: true
    name?: true
    stocks?: true
    price?: true
    created?: true
    updated?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    categoryId?: true
    supplierId?: true
    name?: true
    stocks?: true
    price?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which products to aggregate.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs = {
    where?: productsWhereInput
    orderBy?: Enumerable<productsOrderByWithAggregationInput>
    by: Array<ProductsScalarFieldEnum>
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: string
    categoryId: string
    supplierId: string
    name: string
    stocks: number
    price: number
    created: Date
    updated: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect = {
    id?: boolean
    categoryId?: boolean
    supplierId?: boolean
    name?: boolean
    stocks?: boolean
    price?: boolean
    created?: boolean
    updated?: boolean
    supplier?: boolean | suppliersArgs
    category?: boolean | categoriesArgs
    transactions?: boolean | transactionsFindManyArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }

  export type productsInclude = {
    supplier?: boolean | suppliersArgs
    category?: boolean | categoriesArgs
    transactions?: boolean | transactionsFindManyArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }

  export type productsGetPayload<
    S extends boolean | null | undefined | productsArgs,
    U = keyof S
      > = S extends true
        ? products
    : S extends undefined
    ? never
    : S extends productsArgs | productsFindManyArgs
    ?'include' extends U
    ? products  & {
    [P in TrueKeys<S['include']>]:
        P extends 'supplier' ? suppliersGetPayload<S['include'][P]> :
        P extends 'category' ? categoriesGetPayload<S['include'][P]> :
        P extends 'transactions' ? Array < transactionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'supplier' ? suppliersGetPayload<S['select'][P]> :
        P extends 'category' ? categoriesGetPayload<S['select'][P]> :
        P extends 'transactions' ? Array < transactionsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof products ? products[P] : never
  } 
    : products
  : products


  type productsCountArgs = Merge<
    Omit<productsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }
  >

  export interface productsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'products'> extends True ? CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>> : CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'products'> extends True ? CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>> : CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs>(
      args?: SelectSubset<T, productsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs>(
      args: SelectSubset<T, productsCreateArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs>(
      args?: SelectSubset<T, productsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs>(
      args: SelectSubset<T, productsDeleteArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs>(
      args: SelectSubset<T, productsUpdateArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs>(
      args?: SelectSubset<T, productsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs>(
      args: SelectSubset<T, productsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs>(
      args: SelectSubset<T, productsUpsertArgs>
    ): CheckSelect<T, Prisma__productsClient<products>, Prisma__productsClient<productsGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    supplier<T extends suppliersArgs = {}>(args?: Subset<T, suppliersArgs>): CheckSelect<T, Prisma__suppliersClient<suppliers | null >, Prisma__suppliersClient<suppliersGetPayload<T> | null >>;

    category<T extends categoriesArgs = {}>(args?: Subset<T, categoriesArgs>): CheckSelect<T, Prisma__categoriesClient<categories | null >, Prisma__categoriesClient<categoriesGetPayload<T> | null >>;

    transactions<T extends transactionsFindManyArgs = {}>(args?: Subset<T, transactionsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<transactions>>, PrismaPromise<Array<transactionsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Throw an Error if a products can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which products to fetch.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products findFirst
   */
  export type productsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Throw an Error if a products can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Filter, which products to fetch.
     * 
    **/
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     * 
    **/
    orderBy?: Enumerable<productsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     * 
    **/
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * products create
   */
  export type productsCreateArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The data needed to create a products.
     * 
    **/
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs = {
    /**
     * The data used to create many products.
     * 
    **/
    data: Enumerable<productsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * products update
   */
  export type productsUpdateArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The data needed to update a products.
     * 
    **/
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs = {
    /**
     * The data used to update products.
     * 
    **/
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     * 
    **/
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * The filter to search for the products to update in case it exists.
     * 
    **/
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     * 
    **/
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
    /**
     * Filter which products to delete.
     * 
    **/
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs = {
    /**
     * Filter which products to delete
     * 
    **/
    where?: productsWhereInput
  }


  /**
   * products without action
   */
  export type productsArgs = {
    /**
     * Select specific fields to fetch from the products
     * 
    **/
    select?: productsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: productsInclude | null
  }



  /**
   * Model suppliers
   */


  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: string | null
    name: string | null
    created: Date | null
    updated: Date | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created: Date | null
    updated: Date | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    name: number
    created: number
    updated: number
    _all: number
  }


  export type SuppliersMinAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    name?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type SuppliersAggregateArgs = {
    /**
     * Filter which suppliers to aggregate.
     * 
    **/
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     * 
    **/
    orderBy?: Enumerable<suppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type SuppliersGroupByArgs = {
    where?: suppliersWhereInput
    orderBy?: Enumerable<suppliersOrderByWithAggregationInput>
    by: Array<SuppliersScalarFieldEnum>
    having?: suppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }


  export type SuppliersGroupByOutputType = {
    id: string
    name: string
    created: Date
    updated: Date
    _count: SuppliersCountAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends SuppliersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type suppliersSelect = {
    id?: boolean
    name?: boolean
    created?: boolean
    updated?: boolean
    products?: boolean | productsFindManyArgs
    _count?: boolean | SuppliersCountOutputTypeArgs
  }

  export type suppliersInclude = {
    products?: boolean | productsFindManyArgs
    _count?: boolean | SuppliersCountOutputTypeArgs
  }

  export type suppliersGetPayload<
    S extends boolean | null | undefined | suppliersArgs,
    U = keyof S
      > = S extends true
        ? suppliers
    : S extends undefined
    ? never
    : S extends suppliersArgs | suppliersFindManyArgs
    ?'include' extends U
    ? suppliers  & {
    [P in TrueKeys<S['include']>]:
        P extends 'products' ? Array < productsGetPayload<S['include'][P]>>  :
        P extends '_count' ? SuppliersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'products' ? Array < productsGetPayload<S['select'][P]>>  :
        P extends '_count' ? SuppliersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof suppliers ? suppliers[P] : never
  } 
    : suppliers
  : suppliers


  type suppliersCountArgs = Merge<
    Omit<suppliersFindManyArgs, 'select' | 'include'> & {
      select?: SuppliersCountAggregateInputType | true
    }
  >

  export interface suppliersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {suppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends suppliersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, suppliersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'suppliers'> extends True ? CheckSelect<T, Prisma__suppliersClient<suppliers>, Prisma__suppliersClient<suppliersGetPayload<T>>> : CheckSelect<T, Prisma__suppliersClient<suppliers | null >, Prisma__suppliersClient<suppliersGetPayload<T> | null >>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends suppliersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, suppliersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'suppliers'> extends True ? CheckSelect<T, Prisma__suppliersClient<suppliers>, Prisma__suppliersClient<suppliersGetPayload<T>>> : CheckSelect<T, Prisma__suppliersClient<suppliers | null >, Prisma__suppliersClient<suppliersGetPayload<T> | null >>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends suppliersFindManyArgs>(
      args?: SelectSubset<T, suppliersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<suppliers>>, PrismaPromise<Array<suppliersGetPayload<T>>>>

    /**
     * Create a Suppliers.
     * @param {suppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
    **/
    create<T extends suppliersCreateArgs>(
      args: SelectSubset<T, suppliersCreateArgs>
    ): CheckSelect<T, Prisma__suppliersClient<suppliers>, Prisma__suppliersClient<suppliersGetPayload<T>>>

    /**
     * Create many Suppliers.
     *     @param {suppliersCreateManyArgs} args - Arguments to create many Suppliers.
     *     @example
     *     // Create many Suppliers
     *     const suppliers = await prisma.suppliers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends suppliersCreateManyArgs>(
      args?: SelectSubset<T, suppliersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Suppliers.
     * @param {suppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
    **/
    delete<T extends suppliersDeleteArgs>(
      args: SelectSubset<T, suppliersDeleteArgs>
    ): CheckSelect<T, Prisma__suppliersClient<suppliers>, Prisma__suppliersClient<suppliersGetPayload<T>>>

    /**
     * Update one Suppliers.
     * @param {suppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends suppliersUpdateArgs>(
      args: SelectSubset<T, suppliersUpdateArgs>
    ): CheckSelect<T, Prisma__suppliersClient<suppliers>, Prisma__suppliersClient<suppliersGetPayload<T>>>

    /**
     * Delete zero or more Suppliers.
     * @param {suppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends suppliersDeleteManyArgs>(
      args?: SelectSubset<T, suppliersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends suppliersUpdateManyArgs>(
      args: SelectSubset<T, suppliersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Suppliers.
     * @param {suppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
    **/
    upsert<T extends suppliersUpsertArgs>(
      args: SelectSubset<T, suppliersUpsertArgs>
    ): CheckSelect<T, Prisma__suppliersClient<suppliers>, Prisma__suppliersClient<suppliersGetPayload<T>>>

    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends suppliersCountArgs>(
      args?: Subset<T, suppliersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersGroupByArgs} args - Group by arguments.
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
      T extends SuppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuppliersGroupByArgs['orderBy'] }
        : { orderBy?: SuppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SuppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__suppliersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends productsFindManyArgs = {}>(args?: Subset<T, productsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<products>>, PrismaPromise<Array<productsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * suppliers findUnique
   */
  export type suppliersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * Throw an Error if a suppliers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which suppliers to fetch.
     * 
    **/
    where: suppliersWhereUniqueInput
  }


  /**
   * suppliers findFirst
   */
  export type suppliersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * Throw an Error if a suppliers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which suppliers to fetch.
     * 
    **/
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     * 
    **/
    orderBy?: Enumerable<suppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     * 
    **/
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     * 
    **/
    distinct?: Enumerable<SuppliersScalarFieldEnum>
  }


  /**
   * suppliers findMany
   */
  export type suppliersFindManyArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * Filter, which suppliers to fetch.
     * 
    **/
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     * 
    **/
    orderBy?: Enumerable<suppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     * 
    **/
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SuppliersScalarFieldEnum>
  }


  /**
   * suppliers create
   */
  export type suppliersCreateArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * The data needed to create a suppliers.
     * 
    **/
    data: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
  }


  /**
   * suppliers createMany
   */
  export type suppliersCreateManyArgs = {
    /**
     * The data used to create many suppliers.
     * 
    **/
    data: Enumerable<suppliersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * suppliers update
   */
  export type suppliersUpdateArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * The data needed to update a suppliers.
     * 
    **/
    data: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
    /**
     * Choose, which suppliers to update.
     * 
    **/
    where: suppliersWhereUniqueInput
  }


  /**
   * suppliers updateMany
   */
  export type suppliersUpdateManyArgs = {
    /**
     * The data used to update suppliers.
     * 
    **/
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     * 
    **/
    where?: suppliersWhereInput
  }


  /**
   * suppliers upsert
   */
  export type suppliersUpsertArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * The filter to search for the suppliers to update in case it exists.
     * 
    **/
    where: suppliersWhereUniqueInput
    /**
     * In case the suppliers found by the `where` argument doesn't exist, create a new suppliers with this data.
     * 
    **/
    create: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
    /**
     * In case the suppliers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
  }


  /**
   * suppliers delete
   */
  export type suppliersDeleteArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
    /**
     * Filter which suppliers to delete.
     * 
    **/
    where: suppliersWhereUniqueInput
  }


  /**
   * suppliers deleteMany
   */
  export type suppliersDeleteManyArgs = {
    /**
     * Filter which suppliers to delete
     * 
    **/
    where?: suppliersWhereInput
  }


  /**
   * suppliers without action
   */
  export type suppliersArgs = {
    /**
     * Select specific fields to fetch from the suppliers
     * 
    **/
    select?: suppliersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: suppliersInclude | null
  }



  /**
   * Model transactions
   */


  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    quantities: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    quantities: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    productId: string | null
    quantities: number | null
    payment_status: PAYMENT_STATUS | null
    created: Date | null
    updated: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    quantities: number | null
    payment_status: PAYMENT_STATUS | null
    created: Date | null
    updated: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    productId: number
    quantities: number
    payment_status: number
    created: number
    updated: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    quantities?: true
  }

  export type TransactionsSumAggregateInputType = {
    quantities?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    productId?: true
    quantities?: true
    payment_status?: true
    created?: true
    updated?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    productId?: true
    quantities?: true
    payment_status?: true
    created?: true
    updated?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    productId?: true
    quantities?: true
    payment_status?: true
    created?: true
    updated?: true
    _all?: true
  }

  export type TransactionsAggregateArgs = {
    /**
     * Filter which transactions to aggregate.
     * 
    **/
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     * 
    **/
    orderBy?: Enumerable<transactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs = {
    where?: transactionsWhereInput
    orderBy?: Enumerable<transactionsOrderByWithAggregationInput>
    by: Array<TransactionsScalarFieldEnum>
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }


  export type TransactionsGroupByOutputType = {
    id: string
    productId: string
    quantities: number
    payment_status: PAYMENT_STATUS
    created: Date
    updated: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect = {
    id?: boolean
    productId?: boolean
    quantities?: boolean
    payment_status?: boolean
    created?: boolean
    updated?: boolean
    product?: boolean | productsArgs
  }

  export type transactionsInclude = {
    product?: boolean | productsArgs
  }

  export type transactionsGetPayload<
    S extends boolean | null | undefined | transactionsArgs,
    U = keyof S
      > = S extends true
        ? transactions
    : S extends undefined
    ? never
    : S extends transactionsArgs | transactionsFindManyArgs
    ?'include' extends U
    ? transactions  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? productsGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? productsGetPayload<S['select'][P]> :  P extends keyof transactions ? transactions[P] : never
  } 
    : transactions
  : transactions


  type transactionsCountArgs = Merge<
    Omit<transactionsFindManyArgs, 'select' | 'include'> & {
      select?: TransactionsCountAggregateInputType | true
    }
  >

  export interface transactionsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transactionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, transactionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'transactions'> extends True ? CheckSelect<T, Prisma__transactionsClient<transactions>, Prisma__transactionsClient<transactionsGetPayload<T>>> : CheckSelect<T, Prisma__transactionsClient<transactions | null >, Prisma__transactionsClient<transactionsGetPayload<T> | null >>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transactionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, transactionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'transactions'> extends True ? CheckSelect<T, Prisma__transactionsClient<transactions>, Prisma__transactionsClient<transactionsGetPayload<T>>> : CheckSelect<T, Prisma__transactionsClient<transactions | null >, Prisma__transactionsClient<transactionsGetPayload<T> | null >>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transactionsFindManyArgs>(
      args?: SelectSubset<T, transactionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<transactions>>, PrismaPromise<Array<transactionsGetPayload<T>>>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
    **/
    create<T extends transactionsCreateArgs>(
      args: SelectSubset<T, transactionsCreateArgs>
    ): CheckSelect<T, Prisma__transactionsClient<transactions>, Prisma__transactionsClient<transactionsGetPayload<T>>>

    /**
     * Create many Transactions.
     *     @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transactions = await prisma.transactions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transactionsCreateManyArgs>(
      args?: SelectSubset<T, transactionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
    **/
    delete<T extends transactionsDeleteArgs>(
      args: SelectSubset<T, transactionsDeleteArgs>
    ): CheckSelect<T, Prisma__transactionsClient<transactions>, Prisma__transactionsClient<transactionsGetPayload<T>>>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transactionsUpdateArgs>(
      args: SelectSubset<T, transactionsUpdateArgs>
    ): CheckSelect<T, Prisma__transactionsClient<transactions>, Prisma__transactionsClient<transactionsGetPayload<T>>>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transactionsDeleteManyArgs>(
      args?: SelectSubset<T, transactionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transactionsUpdateManyArgs>(
      args: SelectSubset<T, transactionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
    **/
    upsert<T extends transactionsUpsertArgs>(
      args: SelectSubset<T, transactionsUpsertArgs>
    ): CheckSelect<T, Prisma__transactionsClient<transactions>, Prisma__transactionsClient<transactionsGetPayload<T>>>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__transactionsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends productsArgs = {}>(args?: Subset<T, productsArgs>): CheckSelect<T, Prisma__productsClient<products | null >, Prisma__productsClient<productsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * Throw an Error if a transactions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which transactions to fetch.
     * 
    **/
    where: transactionsWhereUniqueInput
  }


  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * Throw an Error if a transactions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which transactions to fetch.
     * 
    **/
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     * 
    **/
    orderBy?: Enumerable<transactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     * 
    **/
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     * 
    **/
    distinct?: Enumerable<TransactionsScalarFieldEnum>
  }


  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * Filter, which transactions to fetch.
     * 
    **/
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     * 
    **/
    orderBy?: Enumerable<transactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     * 
    **/
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TransactionsScalarFieldEnum>
  }


  /**
   * transactions create
   */
  export type transactionsCreateArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * The data needed to create a transactions.
     * 
    **/
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }


  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs = {
    /**
     * The data used to create many transactions.
     * 
    **/
    data: Enumerable<transactionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * transactions update
   */
  export type transactionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * The data needed to update a transactions.
     * 
    **/
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     * 
    **/
    where: transactionsWhereUniqueInput
  }


  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs = {
    /**
     * The data used to update transactions.
     * 
    **/
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     * 
    **/
    where?: transactionsWhereInput
  }


  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * The filter to search for the transactions to update in case it exists.
     * 
    **/
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     * 
    **/
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }


  /**
   * transactions delete
   */
  export type transactionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
    /**
     * Filter which transactions to delete.
     * 
    **/
    where: transactionsWhereUniqueInput
  }


  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs = {
    /**
     * Filter which transactions to delete
     * 
    **/
    where?: transactionsWhereInput
  }


  /**
   * transactions without action
   */
  export type transactionsArgs = {
    /**
     * Select specific fields to fetch from the transactions
     * 
    **/
    select?: transactionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: transactionsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created: 'created',
    updated: 'updated'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    supplierId: 'supplierId',
    name: 'name',
    stocks: 'stocks',
    price: 'price',
    created: 'created',
    updated: 'updated'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created: 'created',
    updated: 'updated'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    quantities: 'quantities',
    payment_status: 'payment_status',
    created: 'created',
    updated: 'updated'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: Enumerable<categoriesWhereInput>
    OR?: Enumerable<categoriesWhereInput>
    NOT?: Enumerable<categoriesWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = {
    id?: string
  }

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    created?: DateTimeWithAggregatesFilter | Date | string
    updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type productsWhereInput = {
    AND?: Enumerable<productsWhereInput>
    OR?: Enumerable<productsWhereInput>
    NOT?: Enumerable<productsWhereInput>
    id?: StringFilter | string
    categoryId?: StringFilter | string
    supplierId?: StringFilter | string
    name?: StringFilter | string
    stocks?: IntFilter | number
    price?: IntFilter | number
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    supplier?: XOR<SuppliersRelationFilter, suppliersWhereInput>
    category?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    stocks?: SortOrder
    price?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    supplier?: suppliersOrderByWithRelationInput
    category?: categoriesOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = {
    id?: string
  }

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    stocks?: SortOrder
    price?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productsScalarWhereWithAggregatesInput>
    OR?: Enumerable<productsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    categoryId?: StringWithAggregatesFilter | string
    supplierId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    stocks?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
    updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type suppliersWhereInput = {
    AND?: Enumerable<suppliersWhereInput>
    OR?: Enumerable<suppliersWhereInput>
    NOT?: Enumerable<suppliersWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    products?: ProductsListRelationFilter
  }

  export type suppliersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type suppliersWhereUniqueInput = {
    id?: string
  }

  export type suppliersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: suppliersCountOrderByAggregateInput
    _max?: suppliersMaxOrderByAggregateInput
    _min?: suppliersMinOrderByAggregateInput
  }

  export type suppliersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<suppliersScalarWhereWithAggregatesInput>
    OR?: Enumerable<suppliersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<suppliersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    created?: DateTimeWithAggregatesFilter | Date | string
    updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type transactionsWhereInput = {
    AND?: Enumerable<transactionsWhereInput>
    OR?: Enumerable<transactionsWhereInput>
    NOT?: Enumerable<transactionsWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    quantities?: IntFilter | number
    payment_status?: EnumPAYMENT_STATUSFilter | PAYMENT_STATUS
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantities?: SortOrder
    payment_status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    product?: productsOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = {
    id?: string
  }

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantities?: SortOrder
    payment_status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<transactionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<transactionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<transactionsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
    quantities?: IntWithAggregatesFilter | number
    payment_status?: EnumPAYMENT_STATUSWithAggregatesFilter | PAYMENT_STATUS
    created?: DateTimeWithAggregatesFilter | Date | string
    updated?: DateTimeWithAggregatesFilter | Date | string
  }

  export type categoriesCreateInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
    products?: productsCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateManyWithoutCategoryInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutCategoryInput
  }

  export type categoriesCreateManyInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    id?: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    supplier: suppliersCreateNestedOneWithoutProductsInput
    category: categoriesCreateNestedOneWithoutProductsInput
    transactions?: transactionsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: string
    categoryId: string
    supplierId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: suppliersUpdateOneRequiredWithoutProductsInput
    category?: categoriesUpdateOneRequiredWithoutProductsInput
    transactions?: transactionsUpdateManyWithoutProductInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutProductInput
  }

  export type productsCreateManyInput = {
    id?: string
    categoryId: string
    supplierId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suppliersCreateInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
    products?: productsCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUncheckedCreateInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type suppliersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateManyWithoutSupplierInput
  }

  export type suppliersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutSupplierInput
  }

  export type suppliersCreateManyInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type suppliersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suppliersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateInput = {
    id?: string
    quantities?: number
    payment_status?: PAYMENT_STATUS
    created?: Date | string
    updated?: Date | string
    product: productsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id?: string
    productId: string
    quantities?: number
    payment_status?: PAYMENT_STATUS
    created?: Date | string
    updated?: Date | string
  }

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productsUpdateOneRequiredWithoutTransactionsInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInput = {
    id?: string
    productId: string
    quantities?: number
    payment_status?: PAYMENT_STATUS
    created?: Date | string
    updated?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type SuppliersRelationFilter = {
    is?: suppliersWhereInput
    isNot?: suppliersWhereInput
  }

  export type CategoriesRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    stocks?: SortOrder
    price?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    stocks?: SortOrder
    price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    stocks?: SortOrder
    price?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    name?: SortOrder
    stocks?: SortOrder
    price?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    stocks?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type suppliersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type suppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type suppliersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type EnumPAYMENT_STATUSFilter = {
    equals?: PAYMENT_STATUS
    in?: Enumerable<PAYMENT_STATUS>
    notIn?: Enumerable<PAYMENT_STATUS>
    not?: NestedEnumPAYMENT_STATUSFilter | PAYMENT_STATUS
  }

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantities?: SortOrder
    payment_status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    quantities?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantities?: SortOrder
    payment_status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantities?: SortOrder
    payment_status?: SortOrder
    created?: SortOrder
    updated?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    quantities?: SortOrder
  }

  export type EnumPAYMENT_STATUSWithAggregatesFilter = {
    equals?: PAYMENT_STATUS
    in?: Enumerable<PAYMENT_STATUS>
    notIn?: Enumerable<PAYMENT_STATUS>
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter | PAYMENT_STATUS
    _count?: NestedIntFilter
    _min?: NestedEnumPAYMENT_STATUSFilter
    _max?: NestedEnumPAYMENT_STATUSFilter
  }

  export type productsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoryInput>, Enumerable<productsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoryInput>
    createMany?: productsCreateManyCategoryInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoryInput>, Enumerable<productsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoryInput>
    createMany?: productsCreateManyCategoryInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productsUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoryInput>, Enumerable<productsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: productsCreateManyCategoryInputEnvelope
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    connect?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutCategoryInput = {
    create?: XOR<Enumerable<productsCreateWithoutCategoryInput>, Enumerable<productsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: productsCreateManyCategoryInputEnvelope
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    connect?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type suppliersCreateNestedOneWithoutProductsInput = {
    create?: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutProductsInput
    connect?: suppliersWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<transactionsCreateWithoutProductInput>, Enumerable<transactionsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<transactionsCreateOrConnectWithoutProductInput>
    createMany?: transactionsCreateManyProductInputEnvelope
    connect?: Enumerable<transactionsWhereUniqueInput>
  }

  export type transactionsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<transactionsCreateWithoutProductInput>, Enumerable<transactionsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<transactionsCreateOrConnectWithoutProductInput>
    createMany?: transactionsCreateManyProductInputEnvelope
    connect?: Enumerable<transactionsWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type suppliersUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutProductsInput
    upsert?: suppliersUpsertWithoutProductsInput
    connect?: suppliersWhereUniqueInput
    update?: XOR<suppliersUpdateWithoutProductsInput, suppliersUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateOneRequiredWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type transactionsUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<transactionsCreateWithoutProductInput>, Enumerable<transactionsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<transactionsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<transactionsUpsertWithWhereUniqueWithoutProductInput>
    createMany?: transactionsCreateManyProductInputEnvelope
    set?: Enumerable<transactionsWhereUniqueInput>
    disconnect?: Enumerable<transactionsWhereUniqueInput>
    delete?: Enumerable<transactionsWhereUniqueInput>
    connect?: Enumerable<transactionsWhereUniqueInput>
    update?: Enumerable<transactionsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<transactionsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<transactionsScalarWhereInput>
  }

  export type transactionsUncheckedUpdateManyWithoutProductInput = {
    create?: XOR<Enumerable<transactionsCreateWithoutProductInput>, Enumerable<transactionsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<transactionsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<transactionsUpsertWithWhereUniqueWithoutProductInput>
    createMany?: transactionsCreateManyProductInputEnvelope
    set?: Enumerable<transactionsWhereUniqueInput>
    disconnect?: Enumerable<transactionsWhereUniqueInput>
    delete?: Enumerable<transactionsWhereUniqueInput>
    connect?: Enumerable<transactionsWhereUniqueInput>
    update?: Enumerable<transactionsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<transactionsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<transactionsScalarWhereInput>
  }

  export type productsCreateNestedManyWithoutSupplierInput = {
    create?: XOR<Enumerable<productsCreateWithoutSupplierInput>, Enumerable<productsUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutSupplierInput>
    createMany?: productsCreateManySupplierInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type productsUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<Enumerable<productsCreateWithoutSupplierInput>, Enumerable<productsUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutSupplierInput>
    createMany?: productsCreateManySupplierInputEnvelope
    connect?: Enumerable<productsWhereUniqueInput>
  }

  export type productsUpdateManyWithoutSupplierInput = {
    create?: XOR<Enumerable<productsCreateWithoutSupplierInput>, Enumerable<productsUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutSupplierInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutSupplierInput>
    createMany?: productsCreateManySupplierInputEnvelope
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    connect?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutSupplierInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutSupplierInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type productsUncheckedUpdateManyWithoutSupplierInput = {
    create?: XOR<Enumerable<productsCreateWithoutSupplierInput>, Enumerable<productsUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<productsCreateOrConnectWithoutSupplierInput>
    upsert?: Enumerable<productsUpsertWithWhereUniqueWithoutSupplierInput>
    createMany?: productsCreateManySupplierInputEnvelope
    set?: Enumerable<productsWhereUniqueInput>
    disconnect?: Enumerable<productsWhereUniqueInput>
    delete?: Enumerable<productsWhereUniqueInput>
    connect?: Enumerable<productsWhereUniqueInput>
    update?: Enumerable<productsUpdateWithWhereUniqueWithoutSupplierInput>
    updateMany?: Enumerable<productsUpdateManyWithWhereWithoutSupplierInput>
    deleteMany?: Enumerable<productsScalarWhereInput>
  }

  export type productsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutTransactionsInput
    connect?: productsWhereUniqueInput
  }

  export type EnumPAYMENT_STATUSFieldUpdateOperationsInput = {
    set?: PAYMENT_STATUS
  }

  export type productsUpdateOneRequiredWithoutTransactionsInput = {
    create?: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutTransactionsInput
    upsert?: productsUpsertWithoutTransactionsInput
    connect?: productsWhereUniqueInput
    update?: XOR<productsUpdateWithoutTransactionsInput, productsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumPAYMENT_STATUSFilter = {
    equals?: PAYMENT_STATUS
    in?: Enumerable<PAYMENT_STATUS>
    notIn?: Enumerable<PAYMENT_STATUS>
    not?: NestedEnumPAYMENT_STATUSFilter | PAYMENT_STATUS
  }

  export type NestedEnumPAYMENT_STATUSWithAggregatesFilter = {
    equals?: PAYMENT_STATUS
    in?: Enumerable<PAYMENT_STATUS>
    notIn?: Enumerable<PAYMENT_STATUS>
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter | PAYMENT_STATUS
    _count?: NestedIntFilter
    _min?: NestedEnumPAYMENT_STATUSFilter
    _max?: NestedEnumPAYMENT_STATUSFilter
  }

  export type productsCreateWithoutCategoryInput = {
    id?: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    supplier: suppliersCreateNestedOneWithoutProductsInput
    transactions?: transactionsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutCategoryInput = {
    id?: string
    supplierId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutCategoryInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput>
  }

  export type productsCreateManyCategoryInputEnvelope = {
    data: Enumerable<productsCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoryInput, productsUncheckedUpdateWithoutCategoryInput>
    create: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoryInput, productsUncheckedUpdateWithoutCategoryInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoryInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type productsScalarWhereInput = {
    AND?: Enumerable<productsScalarWhereInput>
    OR?: Enumerable<productsScalarWhereInput>
    NOT?: Enumerable<productsScalarWhereInput>
    id?: StringFilter | string
    categoryId?: StringFilter | string
    supplierId?: StringFilter | string
    name?: StringFilter | string
    stocks?: IntFilter | number
    price?: IntFilter | number
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type suppliersCreateWithoutProductsInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type suppliersUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type suppliersCreateOrConnectWithoutProductsInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
  }

  export type categoriesCreateWithoutProductsInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    created?: Date | string
    updated?: Date | string
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type transactionsCreateWithoutProductInput = {
    id?: string
    quantities?: number
    payment_status?: PAYMENT_STATUS
    created?: Date | string
    updated?: Date | string
  }

  export type transactionsUncheckedCreateWithoutProductInput = {
    id?: string
    quantities?: number
    payment_status?: PAYMENT_STATUS
    created?: Date | string
    updated?: Date | string
  }

  export type transactionsCreateOrConnectWithoutProductInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutProductInput, transactionsUncheckedCreateWithoutProductInput>
  }

  export type transactionsCreateManyProductInputEnvelope = {
    data: Enumerable<transactionsCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type suppliersUpsertWithoutProductsInput = {
    update: XOR<suppliersUpdateWithoutProductsInput, suppliersUncheckedUpdateWithoutProductsInput>
    create: XOR<suppliersCreateWithoutProductsInput, suppliersUncheckedCreateWithoutProductsInput>
  }

  export type suppliersUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suppliersUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUpsertWithWhereUniqueWithoutProductInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutProductInput, transactionsUncheckedUpdateWithoutProductInput>
    create: XOR<transactionsCreateWithoutProductInput, transactionsUncheckedCreateWithoutProductInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutProductInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutProductInput, transactionsUncheckedUpdateWithoutProductInput>
  }

  export type transactionsUpdateManyWithWhereWithoutProductInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: Enumerable<transactionsScalarWhereInput>
    OR?: Enumerable<transactionsScalarWhereInput>
    NOT?: Enumerable<transactionsScalarWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    quantities?: IntFilter | number
    payment_status?: EnumPAYMENT_STATUSFilter | PAYMENT_STATUS
    created?: DateTimeFilter | Date | string
    updated?: DateTimeFilter | Date | string
  }

  export type productsCreateWithoutSupplierInput = {
    id?: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    category: categoriesCreateNestedOneWithoutProductsInput
    transactions?: transactionsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutSupplierInput = {
    id?: string
    categoryId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutSupplierInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput>
  }

  export type productsCreateManySupplierInputEnvelope = {
    data: Enumerable<productsCreateManySupplierInput>
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutSupplierInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutSupplierInput, productsUncheckedUpdateWithoutSupplierInput>
    create: XOR<productsCreateWithoutSupplierInput, productsUncheckedCreateWithoutSupplierInput>
  }

  export type productsUpdateWithWhereUniqueWithoutSupplierInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutSupplierInput, productsUncheckedUpdateWithoutSupplierInput>
  }

  export type productsUpdateManyWithWhereWithoutSupplierInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type productsCreateWithoutTransactionsInput = {
    id?: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
    supplier: suppliersCreateNestedOneWithoutProductsInput
    category: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutTransactionsInput = {
    id?: string
    categoryId: string
    supplierId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
  }

  export type productsCreateOrConnectWithoutTransactionsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
  }

  export type productsUpsertWithoutTransactionsInput = {
    update: XOR<productsUpdateWithoutTransactionsInput, productsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<productsCreateWithoutTransactionsInput, productsUncheckedCreateWithoutTransactionsInput>
  }

  export type productsUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: suppliersUpdateOneRequiredWithoutProductsInput
    category?: categoriesUpdateOneRequiredWithoutProductsInput
  }

  export type productsUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManyCategoryInput = {
    id?: string
    supplierId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
  }

  export type productsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: suppliersUpdateOneRequiredWithoutProductsInput
    transactions?: transactionsUpdateManyWithoutProductInput
  }

  export type productsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutProductInput
  }

  export type productsUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyProductInput = {
    id?: string
    quantities?: number
    payment_status?: PAYMENT_STATUS
    created?: Date | string
    updated?: Date | string
  }

  export type transactionsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantities?: IntFieldUpdateOperationsInput | number
    payment_status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | PAYMENT_STATUS
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManySupplierInput = {
    id?: string
    categoryId: string
    name: string
    stocks?: number
    price?: number
    created?: Date | string
    updated?: Date | string
  }

  export type productsUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutProductsInput
    transactions?: transactionsUpdateManyWithoutProductInput
  }

  export type productsUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stocks?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutProductInput
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
  export const dmmf: runtime.DMMF.Document;
}