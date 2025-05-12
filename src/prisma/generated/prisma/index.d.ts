
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model CarMedia
 * 
 */
export type CarMedia = $Result.DefaultSelection<Prisma.$CarMediaPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model SelledCar
 * 
 */
export type SelledCar = $Result.DefaultSelection<Prisma.$SelledCarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female',
  private: 'private'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const FuelType: {
  Petrol: 'Petrol',
  Diesel: 'Diesel',
  Hybrid: 'Hybrid',
  Electric: 'Electric'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const Transmission: {
  Automatic: 'Automatic',
  Manual: 'Manual'
};

export type Transmission = (typeof Transmission)[keyof typeof Transmission]


export const BodyType: {
  Sedan: 'Sedan',
  SUV: 'SUV',
  Coupe: 'Coupe',
  Hatchback: 'Hatchback',
  Convertible: 'Convertible',
  Truck: 'Truck',
  Van: 'Van'
};

export type BodyType = (typeof BodyType)[keyof typeof BodyType]


export const MediaType: {
  image: 'image',
  video: 'video',
  pdf: 'pdf'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const ListingStatus: {
  Available: 'Available',
  Pending: 'Pending',
  Sold: 'Sold',
  Reserved: 'Reserved',
  Expired: 'Expired',
  Withdrawn: 'Withdrawn'
};

export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type Transmission = $Enums.Transmission

export const Transmission: typeof $Enums.Transmission

export type BodyType = $Enums.BodyType

export const BodyType: typeof $Enums.BodyType

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type ListingStatus = $Enums.ListingStatus

export const ListingStatus: typeof $Enums.ListingStatus

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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carMedia`: Exposes CRUD operations for the **CarMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarMedias
    * const carMedias = await prisma.carMedia.findMany()
    * ```
    */
  get carMedia(): Prisma.CarMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.selledCar`: Exposes CRUD operations for the **SelledCar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SelledCars
    * const selledCars = await prisma.selledCar.findMany()
    * ```
    */
  get selledCar(): Prisma.SelledCarDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Profile: 'Profile',
    Car: 'Car',
    CarMedia: 'CarMedia',
    ChatRoom: 'ChatRoom',
    Listing: 'Listing',
    SelledCar: 'SelledCar'
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
      modelProps: "user" | "profile" | "car" | "carMedia" | "chatRoom" | "listing" | "selledCar"
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      CarMedia: {
        payload: Prisma.$CarMediaPayload<ExtArgs>
        fields: Prisma.CarMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>
          }
          findFirst: {
            args: Prisma.CarMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>
          }
          findMany: {
            args: Prisma.CarMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>[]
          }
          create: {
            args: Prisma.CarMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>
          }
          createMany: {
            args: Prisma.CarMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>[]
          }
          delete: {
            args: Prisma.CarMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>
          }
          update: {
            args: Prisma.CarMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>
          }
          deleteMany: {
            args: Prisma.CarMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>[]
          }
          upsert: {
            args: Prisma.CarMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarMediaPayload>
          }
          aggregate: {
            args: Prisma.CarMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarMedia>
          }
          groupBy: {
            args: Prisma.CarMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarMediaCountArgs<ExtArgs>
            result: $Utils.Optional<CarMediaCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      SelledCar: {
        payload: Prisma.$SelledCarPayload<ExtArgs>
        fields: Prisma.SelledCarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelledCarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelledCarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>
          }
          findFirst: {
            args: Prisma.SelledCarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelledCarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>
          }
          findMany: {
            args: Prisma.SelledCarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>[]
          }
          create: {
            args: Prisma.SelledCarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>
          }
          createMany: {
            args: Prisma.SelledCarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SelledCarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>[]
          }
          delete: {
            args: Prisma.SelledCarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>
          }
          update: {
            args: Prisma.SelledCarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>
          }
          deleteMany: {
            args: Prisma.SelledCarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SelledCarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SelledCarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>[]
          }
          upsert: {
            args: Prisma.SelledCarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelledCarPayload>
          }
          aggregate: {
            args: Prisma.SelledCarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelledCar>
          }
          groupBy: {
            args: Prisma.SelledCarGroupByArgs<ExtArgs>
            result: $Utils.Optional<SelledCarGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelledCarCountArgs<ExtArgs>
            result: $Utils.Optional<SelledCarCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    car?: CarOmit
    carMedia?: CarMediaOmit
    chatRoom?: ChatRoomOmit
    listing?: ListingOmit
    selledCar?: SelledCarOmit
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
    cars: number
    selledCars: number
    chatRoomsAsCreator: number
    chatRoomsAsGuest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | UserCountOutputTypeCountCarsArgs
    selledCars?: boolean | UserCountOutputTypeCountSelledCarsArgs
    chatRoomsAsCreator?: boolean | UserCountOutputTypeCountChatRoomsAsCreatorArgs
    chatRoomsAsGuest?: boolean | UserCountOutputTypeCountChatRoomsAsGuestArgs
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
  export type UserCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSelledCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelledCarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsAsGuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    media: number
    listing: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | CarCountOutputTypeCountMediaArgs
    listing?: boolean | CarCountOutputTypeCountListingArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarMediaWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    fullName?: boolean
    email?: boolean
    password?: boolean
    cars?: boolean | User$carsArgs<ExtArgs>
    selledCars?: boolean | User$selledCarsArgs<ExtArgs>
    chatRoomsAsCreator?: boolean | User$chatRoomsAsCreatorArgs<ExtArgs>
    chatRoomsAsGuest?: boolean | User$chatRoomsAsGuestArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | User$carsArgs<ExtArgs>
    selledCars?: boolean | User$selledCarsArgs<ExtArgs>
    chatRoomsAsCreator?: boolean | User$chatRoomsAsCreatorArgs<ExtArgs>
    chatRoomsAsGuest?: boolean | User$chatRoomsAsGuestArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
      selledCars: Prisma.$SelledCarPayload<ExtArgs>[]
      chatRoomsAsCreator: Prisma.$ChatRoomPayload<ExtArgs>[]
      chatRoomsAsGuest: Prisma.$ChatRoomPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      password: string
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
    cars<T extends User$carsArgs<ExtArgs> = {}>(args?: Subset<T, User$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    selledCars<T extends User$selledCarsArgs<ExtArgs> = {}>(args?: Subset<T, User$selledCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoomsAsCreator<T extends User$chatRoomsAsCreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsAsCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoomsAsGuest<T extends User$chatRoomsAsGuestArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsAsGuestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.cars
   */
  export type User$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * User.selledCars
   */
  export type User$selledCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    where?: SelledCarWhereInput
    orderBy?: SelledCarOrderByWithRelationInput | SelledCarOrderByWithRelationInput[]
    cursor?: SelledCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelledCarScalarFieldEnum | SelledCarScalarFieldEnum[]
  }

  /**
   * User.chatRoomsAsCreator
   */
  export type User$chatRoomsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.chatRoomsAsGuest
   */
  export type User$chatRoomsAsGuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    age: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    phone: string | null
    bio: string | null
    age: number | null
    address: string | null
    gender: $Enums.Gender | null
    profile_image: string | null
    verified: boolean | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    phone: string | null
    bio: string | null
    age: number | null
    address: string | null
    gender: $Enums.Gender | null
    profile_image: string | null
    verified: boolean | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    bio: number
    age: number
    address: number
    gender: number
    profile_image: number
    verified: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
    age?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    bio?: true
    age?: true
    address?: true
    gender?: true
    profile_image?: true
    verified?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    bio?: true
    age?: true
    address?: true
    gender?: true
    profile_image?: true
    verified?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    bio?: true
    age?: true
    address?: true
    gender?: true
    profile_image?: true
    verified?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    userId: number
    phone: string | null
    bio: string | null
    age: number | null
    address: string | null
    gender: $Enums.Gender | null
    profile_image: string | null
    verified: boolean | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    bio?: boolean
    age?: boolean
    address?: boolean
    gender?: boolean
    profile_image?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    bio?: boolean
    age?: boolean
    address?: boolean
    gender?: boolean
    profile_image?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    bio?: boolean
    age?: boolean
    address?: boolean
    gender?: boolean
    profile_image?: boolean
    verified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    bio?: boolean
    age?: boolean
    address?: boolean
    gender?: boolean
    profile_image?: boolean
    verified?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "bio" | "age" | "address" | "gender" | "profile_image" | "verified", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      phone: string | null
      bio: string | null
      age: number | null
      address: string | null
      gender: $Enums.Gender | null
      profile_image: string | null
      verified: boolean | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly userId: FieldRef<"Profile", 'Int'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly gender: FieldRef<"Profile", 'Gender'>
    readonly profile_image: FieldRef<"Profile", 'String'>
    readonly verified: FieldRef<"Profile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    owner_id: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    owner_id: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    owner_id: number | null
    make: string | null
    model: string | null
    year: string | null
    fuel_type: $Enums.FuelType | null
    transmission: $Enums.Transmission | null
    body_type: $Enums.BodyType | null
    engine: string | null
    horsepower: string | null
    mileage: string | null
    state: string | null
    isPriceFix: string | null
    price: string | null
    location: string | null
    description: string | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    owner_id: number | null
    make: string | null
    model: string | null
    year: string | null
    fuel_type: $Enums.FuelType | null
    transmission: $Enums.Transmission | null
    body_type: $Enums.BodyType | null
    engine: string | null
    horsepower: string | null
    mileage: string | null
    state: string | null
    isPriceFix: string | null
    price: string | null
    location: string | null
    description: string | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    owner_id: number
    make: number
    model: number
    year: number
    fuel_type: number
    transmission: number
    body_type: number
    engine: number
    horsepower: number
    mileage: number
    state: number
    isPriceFix: number
    price: number
    location: number
    description: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    owner_id?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    owner_id?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    owner_id?: true
    make?: true
    model?: true
    year?: true
    fuel_type?: true
    transmission?: true
    body_type?: true
    engine?: true
    horsepower?: true
    mileage?: true
    state?: true
    isPriceFix?: true
    price?: true
    location?: true
    description?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    owner_id?: true
    make?: true
    model?: true
    year?: true
    fuel_type?: true
    transmission?: true
    body_type?: true
    engine?: true
    horsepower?: true
    mileage?: true
    state?: true
    isPriceFix?: true
    price?: true
    location?: true
    description?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    owner_id?: true
    make?: true
    model?: true
    year?: true
    fuel_type?: true
    transmission?: true
    body_type?: true
    engine?: true
    horsepower?: true
    mileage?: true
    state?: true
    isPriceFix?: true
    price?: true
    location?: true
    description?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    owner_id: number
    make: string | null
    model: string | null
    year: string | null
    fuel_type: $Enums.FuelType | null
    transmission: $Enums.Transmission | null
    body_type: $Enums.BodyType | null
    engine: string | null
    horsepower: string | null
    mileage: string | null
    state: string | null
    isPriceFix: string | null
    price: string | null
    location: string | null
    description: string | null
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    engine?: boolean
    horsepower?: boolean
    mileage?: boolean
    state?: boolean
    isPriceFix?: boolean
    price?: boolean
    location?: boolean
    description?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | Car$mediaArgs<ExtArgs>
    listing?: boolean | Car$listingArgs<ExtArgs>
    selledCar?: boolean | Car$selledCarArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    engine?: boolean
    horsepower?: boolean
    mileage?: boolean
    state?: boolean
    isPriceFix?: boolean
    price?: boolean
    location?: boolean
    description?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    engine?: boolean
    horsepower?: boolean
    mileage?: boolean
    state?: boolean
    isPriceFix?: boolean
    price?: boolean
    location?: boolean
    description?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    owner_id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel_type?: boolean
    transmission?: boolean
    body_type?: boolean
    engine?: boolean
    horsepower?: boolean
    mileage?: boolean
    state?: boolean
    isPriceFix?: boolean
    price?: boolean
    location?: boolean
    description?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "make" | "model" | "year" | "fuel_type" | "transmission" | "body_type" | "engine" | "horsepower" | "mileage" | "state" | "isPriceFix" | "price" | "location" | "description", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    media?: boolean | Car$mediaArgs<ExtArgs>
    listing?: boolean | Car$listingArgs<ExtArgs>
    selledCar?: boolean | Car$selledCarArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      media: Prisma.$CarMediaPayload<ExtArgs>[]
      listing: Prisma.$ListingPayload<ExtArgs>[]
      selledCar: Prisma.$SelledCarPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      owner_id: number
      make: string | null
      model: string | null
      year: string | null
      fuel_type: $Enums.FuelType | null
      transmission: $Enums.Transmission | null
      body_type: $Enums.BodyType | null
      engine: string | null
      horsepower: string | null
      mileage: string | null
      state: string | null
      isPriceFix: string | null
      price: string | null
      location: string | null
      description: string | null
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Car$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Car$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listing<T extends Car$listingArgs<ExtArgs> = {}>(args?: Subset<T, Car$listingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    selledCar<T extends Car$selledCarArgs<ExtArgs> = {}>(args?: Subset<T, Car$selledCarArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly owner_id: FieldRef<"Car", 'Int'>
    readonly make: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'String'>
    readonly fuel_type: FieldRef<"Car", 'FuelType'>
    readonly transmission: FieldRef<"Car", 'Transmission'>
    readonly body_type: FieldRef<"Car", 'BodyType'>
    readonly engine: FieldRef<"Car", 'String'>
    readonly horsepower: FieldRef<"Car", 'String'>
    readonly mileage: FieldRef<"Car", 'String'>
    readonly state: FieldRef<"Car", 'String'>
    readonly isPriceFix: FieldRef<"Car", 'String'>
    readonly price: FieldRef<"Car", 'String'>
    readonly location: FieldRef<"Car", 'String'>
    readonly description: FieldRef<"Car", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.media
   */
  export type Car$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    where?: CarMediaWhereInput
    orderBy?: CarMediaOrderByWithRelationInput | CarMediaOrderByWithRelationInput[]
    cursor?: CarMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarMediaScalarFieldEnum | CarMediaScalarFieldEnum[]
  }

  /**
   * Car.listing
   */
  export type Car$listingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    cursor?: ListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Car.selledCar
   */
  export type Car$selledCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    where?: SelledCarWhereInput
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model CarMedia
   */

  export type AggregateCarMedia = {
    _count: CarMediaCountAggregateOutputType | null
    _avg: CarMediaAvgAggregateOutputType | null
    _sum: CarMediaSumAggregateOutputType | null
    _min: CarMediaMinAggregateOutputType | null
    _max: CarMediaMaxAggregateOutputType | null
  }

  export type CarMediaAvgAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type CarMediaSumAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type CarMediaMinAggregateOutputType = {
    id: number | null
    carId: number | null
    link: string | null
    type: $Enums.MediaType | null
  }

  export type CarMediaMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    link: string | null
    type: $Enums.MediaType | null
  }

  export type CarMediaCountAggregateOutputType = {
    id: number
    carId: number
    link: number
    type: number
    _all: number
  }


  export type CarMediaAvgAggregateInputType = {
    id?: true
    carId?: true
  }

  export type CarMediaSumAggregateInputType = {
    id?: true
    carId?: true
  }

  export type CarMediaMinAggregateInputType = {
    id?: true
    carId?: true
    link?: true
    type?: true
  }

  export type CarMediaMaxAggregateInputType = {
    id?: true
    carId?: true
    link?: true
    type?: true
  }

  export type CarMediaCountAggregateInputType = {
    id?: true
    carId?: true
    link?: true
    type?: true
    _all?: true
  }

  export type CarMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarMedia to aggregate.
     */
    where?: CarMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMedias to fetch.
     */
    orderBy?: CarMediaOrderByWithRelationInput | CarMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarMedias
    **/
    _count?: true | CarMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMediaMaxAggregateInputType
  }

  export type GetCarMediaAggregateType<T extends CarMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateCarMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarMedia[P]>
      : GetScalarType<T[P], AggregateCarMedia[P]>
  }




  export type CarMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarMediaWhereInput
    orderBy?: CarMediaOrderByWithAggregationInput | CarMediaOrderByWithAggregationInput[]
    by: CarMediaScalarFieldEnum[] | CarMediaScalarFieldEnum
    having?: CarMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarMediaCountAggregateInputType | true
    _avg?: CarMediaAvgAggregateInputType
    _sum?: CarMediaSumAggregateInputType
    _min?: CarMediaMinAggregateInputType
    _max?: CarMediaMaxAggregateInputType
  }

  export type CarMediaGroupByOutputType = {
    id: number
    carId: number
    link: string
    type: $Enums.MediaType
    _count: CarMediaCountAggregateOutputType | null
    _avg: CarMediaAvgAggregateOutputType | null
    _sum: CarMediaSumAggregateOutputType | null
    _min: CarMediaMinAggregateOutputType | null
    _max: CarMediaMaxAggregateOutputType | null
  }

  type GetCarMediaGroupByPayload<T extends CarMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarMediaGroupByOutputType[P]>
            : GetScalarType<T[P], CarMediaGroupByOutputType[P]>
        }
      >
    >


  export type CarMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    link?: boolean
    type?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMedia"]>

  export type CarMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    link?: boolean
    type?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMedia"]>

  export type CarMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    link?: boolean
    type?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carMedia"]>

  export type CarMediaSelectScalar = {
    id?: boolean
    carId?: boolean
    link?: boolean
    type?: boolean
  }

  export type CarMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "link" | "type", ExtArgs["result"]["carMedia"]>
  export type CarMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type CarMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type CarMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $CarMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarMedia"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      link: string
      type: $Enums.MediaType
    }, ExtArgs["result"]["carMedia"]>
    composites: {}
  }

  type CarMediaGetPayload<S extends boolean | null | undefined | CarMediaDefaultArgs> = $Result.GetResult<Prisma.$CarMediaPayload, S>

  type CarMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarMediaCountAggregateInputType | true
    }

  export interface CarMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarMedia'], meta: { name: 'CarMedia' } }
    /**
     * Find zero or one CarMedia that matches the filter.
     * @param {CarMediaFindUniqueArgs} args - Arguments to find a CarMedia
     * @example
     * // Get one CarMedia
     * const carMedia = await prisma.carMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarMediaFindUniqueArgs>(args: SelectSubset<T, CarMediaFindUniqueArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarMediaFindUniqueOrThrowArgs} args - Arguments to find a CarMedia
     * @example
     * // Get one CarMedia
     * const carMedia = await prisma.carMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, CarMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaFindFirstArgs} args - Arguments to find a CarMedia
     * @example
     * // Get one CarMedia
     * const carMedia = await prisma.carMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarMediaFindFirstArgs>(args?: SelectSubset<T, CarMediaFindFirstArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaFindFirstOrThrowArgs} args - Arguments to find a CarMedia
     * @example
     * // Get one CarMedia
     * const carMedia = await prisma.carMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, CarMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarMedias
     * const carMedias = await prisma.carMedia.findMany()
     * 
     * // Get first 10 CarMedias
     * const carMedias = await prisma.carMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carMediaWithIdOnly = await prisma.carMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarMediaFindManyArgs>(args?: SelectSubset<T, CarMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarMedia.
     * @param {CarMediaCreateArgs} args - Arguments to create a CarMedia.
     * @example
     * // Create one CarMedia
     * const CarMedia = await prisma.carMedia.create({
     *   data: {
     *     // ... data to create a CarMedia
     *   }
     * })
     * 
     */
    create<T extends CarMediaCreateArgs>(args: SelectSubset<T, CarMediaCreateArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarMedias.
     * @param {CarMediaCreateManyArgs} args - Arguments to create many CarMedias.
     * @example
     * // Create many CarMedias
     * const carMedia = await prisma.carMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarMediaCreateManyArgs>(args?: SelectSubset<T, CarMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarMedias and returns the data saved in the database.
     * @param {CarMediaCreateManyAndReturnArgs} args - Arguments to create many CarMedias.
     * @example
     * // Create many CarMedias
     * const carMedia = await prisma.carMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarMedias and only return the `id`
     * const carMediaWithIdOnly = await prisma.carMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, CarMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarMedia.
     * @param {CarMediaDeleteArgs} args - Arguments to delete one CarMedia.
     * @example
     * // Delete one CarMedia
     * const CarMedia = await prisma.carMedia.delete({
     *   where: {
     *     // ... filter to delete one CarMedia
     *   }
     * })
     * 
     */
    delete<T extends CarMediaDeleteArgs>(args: SelectSubset<T, CarMediaDeleteArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarMedia.
     * @param {CarMediaUpdateArgs} args - Arguments to update one CarMedia.
     * @example
     * // Update one CarMedia
     * const carMedia = await prisma.carMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarMediaUpdateArgs>(args: SelectSubset<T, CarMediaUpdateArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarMedias.
     * @param {CarMediaDeleteManyArgs} args - Arguments to filter CarMedias to delete.
     * @example
     * // Delete a few CarMedias
     * const { count } = await prisma.carMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarMediaDeleteManyArgs>(args?: SelectSubset<T, CarMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarMedias
     * const carMedia = await prisma.carMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarMediaUpdateManyArgs>(args: SelectSubset<T, CarMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarMedias and returns the data updated in the database.
     * @param {CarMediaUpdateManyAndReturnArgs} args - Arguments to update many CarMedias.
     * @example
     * // Update many CarMedias
     * const carMedia = await prisma.carMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarMedias and only return the `id`
     * const carMediaWithIdOnly = await prisma.carMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, CarMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarMedia.
     * @param {CarMediaUpsertArgs} args - Arguments to update or create a CarMedia.
     * @example
     * // Update or create a CarMedia
     * const carMedia = await prisma.carMedia.upsert({
     *   create: {
     *     // ... data to create a CarMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarMedia we want to update
     *   }
     * })
     */
    upsert<T extends CarMediaUpsertArgs>(args: SelectSubset<T, CarMediaUpsertArgs<ExtArgs>>): Prisma__CarMediaClient<$Result.GetResult<Prisma.$CarMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaCountArgs} args - Arguments to filter CarMedias to count.
     * @example
     * // Count the number of CarMedias
     * const count = await prisma.carMedia.count({
     *   where: {
     *     // ... the filter for the CarMedias we want to count
     *   }
     * })
    **/
    count<T extends CarMediaCountArgs>(
      args?: Subset<T, CarMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarMediaAggregateArgs>(args: Subset<T, CarMediaAggregateArgs>): Prisma.PrismaPromise<GetCarMediaAggregateType<T>>

    /**
     * Group by CarMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMediaGroupByArgs} args - Group by arguments.
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
      T extends CarMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarMediaGroupByArgs['orderBy'] }
        : { orderBy?: CarMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarMedia model
   */
  readonly fields: CarMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CarMedia model
   */
  interface CarMediaFieldRefs {
    readonly id: FieldRef<"CarMedia", 'Int'>
    readonly carId: FieldRef<"CarMedia", 'Int'>
    readonly link: FieldRef<"CarMedia", 'String'>
    readonly type: FieldRef<"CarMedia", 'MediaType'>
  }
    

  // Custom InputTypes
  /**
   * CarMedia findUnique
   */
  export type CarMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * Filter, which CarMedia to fetch.
     */
    where: CarMediaWhereUniqueInput
  }

  /**
   * CarMedia findUniqueOrThrow
   */
  export type CarMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * Filter, which CarMedia to fetch.
     */
    where: CarMediaWhereUniqueInput
  }

  /**
   * CarMedia findFirst
   */
  export type CarMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * Filter, which CarMedia to fetch.
     */
    where?: CarMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMedias to fetch.
     */
    orderBy?: CarMediaOrderByWithRelationInput | CarMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarMedias.
     */
    cursor?: CarMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarMedias.
     */
    distinct?: CarMediaScalarFieldEnum | CarMediaScalarFieldEnum[]
  }

  /**
   * CarMedia findFirstOrThrow
   */
  export type CarMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * Filter, which CarMedia to fetch.
     */
    where?: CarMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMedias to fetch.
     */
    orderBy?: CarMediaOrderByWithRelationInput | CarMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarMedias.
     */
    cursor?: CarMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarMedias.
     */
    distinct?: CarMediaScalarFieldEnum | CarMediaScalarFieldEnum[]
  }

  /**
   * CarMedia findMany
   */
  export type CarMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * Filter, which CarMedias to fetch.
     */
    where?: CarMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarMedias to fetch.
     */
    orderBy?: CarMediaOrderByWithRelationInput | CarMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarMedias.
     */
    cursor?: CarMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarMedias.
     */
    skip?: number
    distinct?: CarMediaScalarFieldEnum | CarMediaScalarFieldEnum[]
  }

  /**
   * CarMedia create
   */
  export type CarMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a CarMedia.
     */
    data: XOR<CarMediaCreateInput, CarMediaUncheckedCreateInput>
  }

  /**
   * CarMedia createMany
   */
  export type CarMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarMedias.
     */
    data: CarMediaCreateManyInput | CarMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarMedia createManyAndReturn
   */
  export type CarMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * The data used to create many CarMedias.
     */
    data: CarMediaCreateManyInput | CarMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarMedia update
   */
  export type CarMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a CarMedia.
     */
    data: XOR<CarMediaUpdateInput, CarMediaUncheckedUpdateInput>
    /**
     * Choose, which CarMedia to update.
     */
    where: CarMediaWhereUniqueInput
  }

  /**
   * CarMedia updateMany
   */
  export type CarMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarMedias.
     */
    data: XOR<CarMediaUpdateManyMutationInput, CarMediaUncheckedUpdateManyInput>
    /**
     * Filter which CarMedias to update
     */
    where?: CarMediaWhereInput
    /**
     * Limit how many CarMedias to update.
     */
    limit?: number
  }

  /**
   * CarMedia updateManyAndReturn
   */
  export type CarMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * The data used to update CarMedias.
     */
    data: XOR<CarMediaUpdateManyMutationInput, CarMediaUncheckedUpdateManyInput>
    /**
     * Filter which CarMedias to update
     */
    where?: CarMediaWhereInput
    /**
     * Limit how many CarMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarMedia upsert
   */
  export type CarMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the CarMedia to update in case it exists.
     */
    where: CarMediaWhereUniqueInput
    /**
     * In case the CarMedia found by the `where` argument doesn't exist, create a new CarMedia with this data.
     */
    create: XOR<CarMediaCreateInput, CarMediaUncheckedCreateInput>
    /**
     * In case the CarMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarMediaUpdateInput, CarMediaUncheckedUpdateInput>
  }

  /**
   * CarMedia delete
   */
  export type CarMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
    /**
     * Filter which CarMedia to delete.
     */
    where: CarMediaWhereUniqueInput
  }

  /**
   * CarMedia deleteMany
   */
  export type CarMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarMedias to delete
     */
    where?: CarMediaWhereInput
    /**
     * Limit how many CarMedias to delete.
     */
    limit?: number
  }

  /**
   * CarMedia without action
   */
  export type CarMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarMedia
     */
    select?: CarMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarMedia
     */
    omit?: CarMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMediaInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
    guestId: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
    guestId: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: number | null
    creatorId: number | null
    guestId: number | null
    createAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: number | null
    creatorId: number | null
    guestId: number | null
    createAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    creatorId: number
    guestId: number
    createAt: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    id?: true
    creatorId?: true
    guestId?: true
  }

  export type ChatRoomSumAggregateInputType = {
    id?: true
    creatorId?: true
    guestId?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    creatorId?: true
    guestId?: true
    createAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    creatorId?: true
    guestId?: true
    createAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    creatorId?: true
    guestId?: true
    createAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: number
    creatorId: number
    guestId: number
    createAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    guestId?: boolean
    createAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    guestId?: boolean
    createAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    guestId?: boolean
    createAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    creatorId?: boolean
    guestId?: boolean
    createAt?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "guestId" | "createAt", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      guest: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creatorId: number
      guestId: number
      createAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
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
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'Int'>
    readonly creatorId: FieldRef<"ChatRoom", 'Int'>
    readonly guestId: FieldRef<"ChatRoom", 'Int'>
    readonly createAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type ListingSumAggregateOutputType = {
    id: number | null
    carId: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: number | null
    carId: number | null
    status: $Enums.ListingStatus | null
    call_allowed: boolean | null
    message_allowed: boolean | null
    create_at: Date | null
  }

  export type ListingMaxAggregateOutputType = {
    id: number | null
    carId: number | null
    status: $Enums.ListingStatus | null
    call_allowed: boolean | null
    message_allowed: boolean | null
    create_at: Date | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    carId: number
    status: number
    call_allowed: number
    message_allowed: number
    create_at: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    id?: true
    carId?: true
  }

  export type ListingSumAggregateInputType = {
    id?: true
    carId?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    carId?: true
    status?: true
    call_allowed?: true
    message_allowed?: true
    create_at?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    carId?: true
    status?: true
    call_allowed?: true
    message_allowed?: true
    create_at?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    carId?: true
    status?: true
    call_allowed?: true
    message_allowed?: true
    create_at?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: number
    carId: number
    status: $Enums.ListingStatus
    call_allowed: boolean
    message_allowed: boolean
    create_at: Date
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    status?: boolean
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    status?: boolean
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    status?: boolean
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    carId?: boolean
    status?: boolean
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "status" | "call_allowed" | "message_allowed" | "create_at", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carId: number
      status: $Enums.ListingStatus
      call_allowed: boolean
      message_allowed: boolean
      create_at: Date
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
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
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'Int'>
    readonly carId: FieldRef<"Listing", 'Int'>
    readonly status: FieldRef<"Listing", 'ListingStatus'>
    readonly call_allowed: FieldRef<"Listing", 'Boolean'>
    readonly message_allowed: FieldRef<"Listing", 'Boolean'>
    readonly create_at: FieldRef<"Listing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model SelledCar
   */

  export type AggregateSelledCar = {
    _count: SelledCarCountAggregateOutputType | null
    _avg: SelledCarAvgAggregateOutputType | null
    _sum: SelledCarSumAggregateOutputType | null
    _min: SelledCarMinAggregateOutputType | null
    _max: SelledCarMaxAggregateOutputType | null
  }

  export type SelledCarAvgAggregateOutputType = {
    id: number | null
    car_id: number | null
    price: number | null
    buyer_id: number | null
  }

  export type SelledCarSumAggregateOutputType = {
    id: number | null
    car_id: number | null
    price: number | null
    buyer_id: number | null
  }

  export type SelledCarMinAggregateOutputType = {
    id: number | null
    car_id: number | null
    price: number | null
    buyer_id: number | null
    sell_at: Date | null
  }

  export type SelledCarMaxAggregateOutputType = {
    id: number | null
    car_id: number | null
    price: number | null
    buyer_id: number | null
    sell_at: Date | null
  }

  export type SelledCarCountAggregateOutputType = {
    id: number
    car_id: number
    price: number
    buyer_id: number
    sell_at: number
    _all: number
  }


  export type SelledCarAvgAggregateInputType = {
    id?: true
    car_id?: true
    price?: true
    buyer_id?: true
  }

  export type SelledCarSumAggregateInputType = {
    id?: true
    car_id?: true
    price?: true
    buyer_id?: true
  }

  export type SelledCarMinAggregateInputType = {
    id?: true
    car_id?: true
    price?: true
    buyer_id?: true
    sell_at?: true
  }

  export type SelledCarMaxAggregateInputType = {
    id?: true
    car_id?: true
    price?: true
    buyer_id?: true
    sell_at?: true
  }

  export type SelledCarCountAggregateInputType = {
    id?: true
    car_id?: true
    price?: true
    buyer_id?: true
    sell_at?: true
    _all?: true
  }

  export type SelledCarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelledCar to aggregate.
     */
    where?: SelledCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelledCars to fetch.
     */
    orderBy?: SelledCarOrderByWithRelationInput | SelledCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelledCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelledCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelledCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SelledCars
    **/
    _count?: true | SelledCarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SelledCarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SelledCarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelledCarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelledCarMaxAggregateInputType
  }

  export type GetSelledCarAggregateType<T extends SelledCarAggregateArgs> = {
        [P in keyof T & keyof AggregateSelledCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelledCar[P]>
      : GetScalarType<T[P], AggregateSelledCar[P]>
  }




  export type SelledCarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelledCarWhereInput
    orderBy?: SelledCarOrderByWithAggregationInput | SelledCarOrderByWithAggregationInput[]
    by: SelledCarScalarFieldEnum[] | SelledCarScalarFieldEnum
    having?: SelledCarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelledCarCountAggregateInputType | true
    _avg?: SelledCarAvgAggregateInputType
    _sum?: SelledCarSumAggregateInputType
    _min?: SelledCarMinAggregateInputType
    _max?: SelledCarMaxAggregateInputType
  }

  export type SelledCarGroupByOutputType = {
    id: number
    car_id: number
    price: number
    buyer_id: number
    sell_at: Date
    _count: SelledCarCountAggregateOutputType | null
    _avg: SelledCarAvgAggregateOutputType | null
    _sum: SelledCarSumAggregateOutputType | null
    _min: SelledCarMinAggregateOutputType | null
    _max: SelledCarMaxAggregateOutputType | null
  }

  type GetSelledCarGroupByPayload<T extends SelledCarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelledCarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelledCarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelledCarGroupByOutputType[P]>
            : GetScalarType<T[P], SelledCarGroupByOutputType[P]>
        }
      >
    >


  export type SelledCarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    car_id?: boolean
    price?: boolean
    buyer_id?: boolean
    sell_at?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selledCar"]>

  export type SelledCarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    car_id?: boolean
    price?: boolean
    buyer_id?: boolean
    sell_at?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selledCar"]>

  export type SelledCarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    car_id?: boolean
    price?: boolean
    buyer_id?: boolean
    sell_at?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selledCar"]>

  export type SelledCarSelectScalar = {
    id?: boolean
    car_id?: boolean
    price?: boolean
    buyer_id?: boolean
    sell_at?: boolean
  }

  export type SelledCarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "car_id" | "price" | "buyer_id" | "sell_at", ExtArgs["result"]["selledCar"]>
  export type SelledCarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SelledCarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SelledCarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SelledCarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SelledCar"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      car_id: number
      price: number
      buyer_id: number
      sell_at: Date
    }, ExtArgs["result"]["selledCar"]>
    composites: {}
  }

  type SelledCarGetPayload<S extends boolean | null | undefined | SelledCarDefaultArgs> = $Result.GetResult<Prisma.$SelledCarPayload, S>

  type SelledCarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SelledCarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SelledCarCountAggregateInputType | true
    }

  export interface SelledCarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SelledCar'], meta: { name: 'SelledCar' } }
    /**
     * Find zero or one SelledCar that matches the filter.
     * @param {SelledCarFindUniqueArgs} args - Arguments to find a SelledCar
     * @example
     * // Get one SelledCar
     * const selledCar = await prisma.selledCar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SelledCarFindUniqueArgs>(args: SelectSubset<T, SelledCarFindUniqueArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SelledCar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SelledCarFindUniqueOrThrowArgs} args - Arguments to find a SelledCar
     * @example
     * // Get one SelledCar
     * const selledCar = await prisma.selledCar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SelledCarFindUniqueOrThrowArgs>(args: SelectSubset<T, SelledCarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelledCar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarFindFirstArgs} args - Arguments to find a SelledCar
     * @example
     * // Get one SelledCar
     * const selledCar = await prisma.selledCar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SelledCarFindFirstArgs>(args?: SelectSubset<T, SelledCarFindFirstArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SelledCar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarFindFirstOrThrowArgs} args - Arguments to find a SelledCar
     * @example
     * // Get one SelledCar
     * const selledCar = await prisma.selledCar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SelledCarFindFirstOrThrowArgs>(args?: SelectSubset<T, SelledCarFindFirstOrThrowArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SelledCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SelledCars
     * const selledCars = await prisma.selledCar.findMany()
     * 
     * // Get first 10 SelledCars
     * const selledCars = await prisma.selledCar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selledCarWithIdOnly = await prisma.selledCar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SelledCarFindManyArgs>(args?: SelectSubset<T, SelledCarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SelledCar.
     * @param {SelledCarCreateArgs} args - Arguments to create a SelledCar.
     * @example
     * // Create one SelledCar
     * const SelledCar = await prisma.selledCar.create({
     *   data: {
     *     // ... data to create a SelledCar
     *   }
     * })
     * 
     */
    create<T extends SelledCarCreateArgs>(args: SelectSubset<T, SelledCarCreateArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SelledCars.
     * @param {SelledCarCreateManyArgs} args - Arguments to create many SelledCars.
     * @example
     * // Create many SelledCars
     * const selledCar = await prisma.selledCar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SelledCarCreateManyArgs>(args?: SelectSubset<T, SelledCarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SelledCars and returns the data saved in the database.
     * @param {SelledCarCreateManyAndReturnArgs} args - Arguments to create many SelledCars.
     * @example
     * // Create many SelledCars
     * const selledCar = await prisma.selledCar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SelledCars and only return the `id`
     * const selledCarWithIdOnly = await prisma.selledCar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SelledCarCreateManyAndReturnArgs>(args?: SelectSubset<T, SelledCarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SelledCar.
     * @param {SelledCarDeleteArgs} args - Arguments to delete one SelledCar.
     * @example
     * // Delete one SelledCar
     * const SelledCar = await prisma.selledCar.delete({
     *   where: {
     *     // ... filter to delete one SelledCar
     *   }
     * })
     * 
     */
    delete<T extends SelledCarDeleteArgs>(args: SelectSubset<T, SelledCarDeleteArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SelledCar.
     * @param {SelledCarUpdateArgs} args - Arguments to update one SelledCar.
     * @example
     * // Update one SelledCar
     * const selledCar = await prisma.selledCar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SelledCarUpdateArgs>(args: SelectSubset<T, SelledCarUpdateArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SelledCars.
     * @param {SelledCarDeleteManyArgs} args - Arguments to filter SelledCars to delete.
     * @example
     * // Delete a few SelledCars
     * const { count } = await prisma.selledCar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SelledCarDeleteManyArgs>(args?: SelectSubset<T, SelledCarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelledCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SelledCars
     * const selledCar = await prisma.selledCar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SelledCarUpdateManyArgs>(args: SelectSubset<T, SelledCarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelledCars and returns the data updated in the database.
     * @param {SelledCarUpdateManyAndReturnArgs} args - Arguments to update many SelledCars.
     * @example
     * // Update many SelledCars
     * const selledCar = await prisma.selledCar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SelledCars and only return the `id`
     * const selledCarWithIdOnly = await prisma.selledCar.updateManyAndReturn({
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
    updateManyAndReturn<T extends SelledCarUpdateManyAndReturnArgs>(args: SelectSubset<T, SelledCarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SelledCar.
     * @param {SelledCarUpsertArgs} args - Arguments to update or create a SelledCar.
     * @example
     * // Update or create a SelledCar
     * const selledCar = await prisma.selledCar.upsert({
     *   create: {
     *     // ... data to create a SelledCar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SelledCar we want to update
     *   }
     * })
     */
    upsert<T extends SelledCarUpsertArgs>(args: SelectSubset<T, SelledCarUpsertArgs<ExtArgs>>): Prisma__SelledCarClient<$Result.GetResult<Prisma.$SelledCarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SelledCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarCountArgs} args - Arguments to filter SelledCars to count.
     * @example
     * // Count the number of SelledCars
     * const count = await prisma.selledCar.count({
     *   where: {
     *     // ... the filter for the SelledCars we want to count
     *   }
     * })
    **/
    count<T extends SelledCarCountArgs>(
      args?: Subset<T, SelledCarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelledCarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SelledCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SelledCarAggregateArgs>(args: Subset<T, SelledCarAggregateArgs>): Prisma.PrismaPromise<GetSelledCarAggregateType<T>>

    /**
     * Group by SelledCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelledCarGroupByArgs} args - Group by arguments.
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
      T extends SelledCarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelledCarGroupByArgs['orderBy'] }
        : { orderBy?: SelledCarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SelledCarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelledCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SelledCar model
   */
  readonly fields: SelledCarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SelledCar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelledCarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SelledCar model
   */
  interface SelledCarFieldRefs {
    readonly id: FieldRef<"SelledCar", 'Int'>
    readonly car_id: FieldRef<"SelledCar", 'Int'>
    readonly price: FieldRef<"SelledCar", 'Float'>
    readonly buyer_id: FieldRef<"SelledCar", 'Int'>
    readonly sell_at: FieldRef<"SelledCar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SelledCar findUnique
   */
  export type SelledCarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * Filter, which SelledCar to fetch.
     */
    where: SelledCarWhereUniqueInput
  }

  /**
   * SelledCar findUniqueOrThrow
   */
  export type SelledCarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * Filter, which SelledCar to fetch.
     */
    where: SelledCarWhereUniqueInput
  }

  /**
   * SelledCar findFirst
   */
  export type SelledCarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * Filter, which SelledCar to fetch.
     */
    where?: SelledCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelledCars to fetch.
     */
    orderBy?: SelledCarOrderByWithRelationInput | SelledCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelledCars.
     */
    cursor?: SelledCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelledCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelledCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelledCars.
     */
    distinct?: SelledCarScalarFieldEnum | SelledCarScalarFieldEnum[]
  }

  /**
   * SelledCar findFirstOrThrow
   */
  export type SelledCarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * Filter, which SelledCar to fetch.
     */
    where?: SelledCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelledCars to fetch.
     */
    orderBy?: SelledCarOrderByWithRelationInput | SelledCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelledCars.
     */
    cursor?: SelledCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelledCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelledCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelledCars.
     */
    distinct?: SelledCarScalarFieldEnum | SelledCarScalarFieldEnum[]
  }

  /**
   * SelledCar findMany
   */
  export type SelledCarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * Filter, which SelledCars to fetch.
     */
    where?: SelledCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelledCars to fetch.
     */
    orderBy?: SelledCarOrderByWithRelationInput | SelledCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SelledCars.
     */
    cursor?: SelledCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelledCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelledCars.
     */
    skip?: number
    distinct?: SelledCarScalarFieldEnum | SelledCarScalarFieldEnum[]
  }

  /**
   * SelledCar create
   */
  export type SelledCarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * The data needed to create a SelledCar.
     */
    data: XOR<SelledCarCreateInput, SelledCarUncheckedCreateInput>
  }

  /**
   * SelledCar createMany
   */
  export type SelledCarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SelledCars.
     */
    data: SelledCarCreateManyInput | SelledCarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SelledCar createManyAndReturn
   */
  export type SelledCarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * The data used to create many SelledCars.
     */
    data: SelledCarCreateManyInput | SelledCarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SelledCar update
   */
  export type SelledCarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * The data needed to update a SelledCar.
     */
    data: XOR<SelledCarUpdateInput, SelledCarUncheckedUpdateInput>
    /**
     * Choose, which SelledCar to update.
     */
    where: SelledCarWhereUniqueInput
  }

  /**
   * SelledCar updateMany
   */
  export type SelledCarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SelledCars.
     */
    data: XOR<SelledCarUpdateManyMutationInput, SelledCarUncheckedUpdateManyInput>
    /**
     * Filter which SelledCars to update
     */
    where?: SelledCarWhereInput
    /**
     * Limit how many SelledCars to update.
     */
    limit?: number
  }

  /**
   * SelledCar updateManyAndReturn
   */
  export type SelledCarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * The data used to update SelledCars.
     */
    data: XOR<SelledCarUpdateManyMutationInput, SelledCarUncheckedUpdateManyInput>
    /**
     * Filter which SelledCars to update
     */
    where?: SelledCarWhereInput
    /**
     * Limit how many SelledCars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SelledCar upsert
   */
  export type SelledCarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * The filter to search for the SelledCar to update in case it exists.
     */
    where: SelledCarWhereUniqueInput
    /**
     * In case the SelledCar found by the `where` argument doesn't exist, create a new SelledCar with this data.
     */
    create: XOR<SelledCarCreateInput, SelledCarUncheckedCreateInput>
    /**
     * In case the SelledCar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelledCarUpdateInput, SelledCarUncheckedUpdateInput>
  }

  /**
   * SelledCar delete
   */
  export type SelledCarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
    /**
     * Filter which SelledCar to delete.
     */
    where: SelledCarWhereUniqueInput
  }

  /**
   * SelledCar deleteMany
   */
  export type SelledCarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelledCars to delete
     */
    where?: SelledCarWhereInput
    /**
     * Limit how many SelledCars to delete.
     */
    limit?: number
  }

  /**
   * SelledCar without action
   */
  export type SelledCarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelledCar
     */
    select?: SelledCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SelledCar
     */
    omit?: SelledCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelledCarInclude<ExtArgs> | null
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
    fullName: 'fullName',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    bio: 'bio',
    age: 'age',
    address: 'address',
    gender: 'gender',
    profile_image: 'profile_image',
    verified: 'verified'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    make: 'make',
    model: 'model',
    year: 'year',
    fuel_type: 'fuel_type',
    transmission: 'transmission',
    body_type: 'body_type',
    engine: 'engine',
    horsepower: 'horsepower',
    mileage: 'mileage',
    state: 'state',
    isPriceFix: 'isPriceFix',
    price: 'price',
    location: 'location',
    description: 'description'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const CarMediaScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    link: 'link',
    type: 'type'
  };

  export type CarMediaScalarFieldEnum = (typeof CarMediaScalarFieldEnum)[keyof typeof CarMediaScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    guestId: 'guestId',
    createAt: 'createAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    status: 'status',
    call_allowed: 'call_allowed',
    message_allowed: 'message_allowed',
    create_at: 'create_at'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const SelledCarScalarFieldEnum: {
    id: 'id',
    car_id: 'car_id',
    price: 'price',
    buyer_id: 'buyer_id',
    sell_at: 'sell_at'
  };

  export type SelledCarScalarFieldEnum = (typeof SelledCarScalarFieldEnum)[keyof typeof SelledCarScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType[]'>
    


  /**
   * Reference to a field of type 'Transmission'
   */
  export type EnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission'>
    


  /**
   * Reference to a field of type 'Transmission[]'
   */
  export type ListEnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission[]'>
    


  /**
   * Reference to a field of type 'BodyType'
   */
  export type EnumBodyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyType'>
    


  /**
   * Reference to a field of type 'BodyType[]'
   */
  export type ListEnumBodyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyType[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ListingStatus'
   */
  export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>
    


  /**
   * Reference to a field of type 'ListingStatus[]'
   */
  export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>
    


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
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cars?: CarListRelationFilter
    selledCars?: SelledCarListRelationFilter
    chatRoomsAsCreator?: ChatRoomListRelationFilter
    chatRoomsAsGuest?: ChatRoomListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cars?: CarOrderByRelationAggregateInput
    selledCars?: SelledCarOrderByRelationAggregateInput
    chatRoomsAsCreator?: ChatRoomOrderByRelationAggregateInput
    chatRoomsAsGuest?: ChatRoomOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cars?: CarListRelationFilter
    selledCars?: SelledCarListRelationFilter
    chatRoomsAsCreator?: ChatRoomListRelationFilter
    chatRoomsAsGuest?: ChatRoomListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    userId?: IntFilter<"Profile"> | number
    phone?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    age?: IntNullableFilter<"Profile"> | number | null
    address?: StringNullableFilter<"Profile"> | string | null
    gender?: EnumGenderNullableFilter<"Profile"> | $Enums.Gender | null
    profile_image?: StringNullableFilter<"Profile"> | string | null
    verified?: BoolNullableFilter<"Profile"> | boolean | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    profile_image?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    phone?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    age?: IntNullableFilter<"Profile"> | number | null
    address?: StringNullableFilter<"Profile"> | string | null
    gender?: EnumGenderNullableFilter<"Profile"> | $Enums.Gender | null
    profile_image?: StringNullableFilter<"Profile"> | string | null
    verified?: BoolNullableFilter<"Profile"> | boolean | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    profile_image?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    userId?: IntWithAggregatesFilter<"Profile"> | number
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    age?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    address?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Profile"> | $Enums.Gender | null
    profile_image?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"Profile"> | boolean | null
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    owner_id?: IntFilter<"Car"> | number
    make?: StringNullableFilter<"Car"> | string | null
    model?: StringNullableFilter<"Car"> | string | null
    year?: StringNullableFilter<"Car"> | string | null
    fuel_type?: EnumFuelTypeNullableFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableFilter<"Car"> | $Enums.Transmission | null
    body_type?: EnumBodyTypeNullableFilter<"Car"> | $Enums.BodyType | null
    engine?: StringNullableFilter<"Car"> | string | null
    horsepower?: StringNullableFilter<"Car"> | string | null
    mileage?: StringNullableFilter<"Car"> | string | null
    state?: StringNullableFilter<"Car"> | string | null
    isPriceFix?: StringNullableFilter<"Car"> | string | null
    price?: StringNullableFilter<"Car"> | string | null
    location?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: CarMediaListRelationFilter
    listing?: ListingListRelationFilter
    selledCar?: XOR<SelledCarNullableScalarRelationFilter, SelledCarWhereInput> | null
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    make?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    fuel_type?: SortOrderInput | SortOrder
    transmission?: SortOrderInput | SortOrder
    body_type?: SortOrderInput | SortOrder
    engine?: SortOrderInput | SortOrder
    horsepower?: SortOrderInput | SortOrder
    mileage?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    isPriceFix?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    media?: CarMediaOrderByRelationAggregateInput
    listing?: ListingOrderByRelationAggregateInput
    selledCar?: SelledCarOrderByWithRelationInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    owner_id?: IntFilter<"Car"> | number
    make?: StringNullableFilter<"Car"> | string | null
    model?: StringNullableFilter<"Car"> | string | null
    year?: StringNullableFilter<"Car"> | string | null
    fuel_type?: EnumFuelTypeNullableFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableFilter<"Car"> | $Enums.Transmission | null
    body_type?: EnumBodyTypeNullableFilter<"Car"> | $Enums.BodyType | null
    engine?: StringNullableFilter<"Car"> | string | null
    horsepower?: StringNullableFilter<"Car"> | string | null
    mileage?: StringNullableFilter<"Car"> | string | null
    state?: StringNullableFilter<"Car"> | string | null
    isPriceFix?: StringNullableFilter<"Car"> | string | null
    price?: StringNullableFilter<"Car"> | string | null
    location?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    media?: CarMediaListRelationFilter
    listing?: ListingListRelationFilter
    selledCar?: XOR<SelledCarNullableScalarRelationFilter, SelledCarWhereInput> | null
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    make?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    fuel_type?: SortOrderInput | SortOrder
    transmission?: SortOrderInput | SortOrder
    body_type?: SortOrderInput | SortOrder
    engine?: SortOrderInput | SortOrder
    horsepower?: SortOrderInput | SortOrder
    mileage?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    isPriceFix?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    owner_id?: IntWithAggregatesFilter<"Car"> | number
    make?: StringNullableWithAggregatesFilter<"Car"> | string | null
    model?: StringNullableWithAggregatesFilter<"Car"> | string | null
    year?: StringNullableWithAggregatesFilter<"Car"> | string | null
    fuel_type?: EnumFuelTypeNullableWithAggregatesFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableWithAggregatesFilter<"Car"> | $Enums.Transmission | null
    body_type?: EnumBodyTypeNullableWithAggregatesFilter<"Car"> | $Enums.BodyType | null
    engine?: StringNullableWithAggregatesFilter<"Car"> | string | null
    horsepower?: StringNullableWithAggregatesFilter<"Car"> | string | null
    mileage?: StringNullableWithAggregatesFilter<"Car"> | string | null
    state?: StringNullableWithAggregatesFilter<"Car"> | string | null
    isPriceFix?: StringNullableWithAggregatesFilter<"Car"> | string | null
    price?: StringNullableWithAggregatesFilter<"Car"> | string | null
    location?: StringNullableWithAggregatesFilter<"Car"> | string | null
    description?: StringNullableWithAggregatesFilter<"Car"> | string | null
  }

  export type CarMediaWhereInput = {
    AND?: CarMediaWhereInput | CarMediaWhereInput[]
    OR?: CarMediaWhereInput[]
    NOT?: CarMediaWhereInput | CarMediaWhereInput[]
    id?: IntFilter<"CarMedia"> | number
    carId?: IntFilter<"CarMedia"> | number
    link?: StringFilter<"CarMedia"> | string
    type?: EnumMediaTypeFilter<"CarMedia"> | $Enums.MediaType
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type CarMediaOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    link?: SortOrder
    type?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type CarMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarMediaWhereInput | CarMediaWhereInput[]
    OR?: CarMediaWhereInput[]
    NOT?: CarMediaWhereInput | CarMediaWhereInput[]
    carId?: IntFilter<"CarMedia"> | number
    link?: StringFilter<"CarMedia"> | string
    type?: EnumMediaTypeFilter<"CarMedia"> | $Enums.MediaType
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type CarMediaOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    link?: SortOrder
    type?: SortOrder
    _count?: CarMediaCountOrderByAggregateInput
    _avg?: CarMediaAvgOrderByAggregateInput
    _max?: CarMediaMaxOrderByAggregateInput
    _min?: CarMediaMinOrderByAggregateInput
    _sum?: CarMediaSumOrderByAggregateInput
  }

  export type CarMediaScalarWhereWithAggregatesInput = {
    AND?: CarMediaScalarWhereWithAggregatesInput | CarMediaScalarWhereWithAggregatesInput[]
    OR?: CarMediaScalarWhereWithAggregatesInput[]
    NOT?: CarMediaScalarWhereWithAggregatesInput | CarMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarMedia"> | number
    carId?: IntWithAggregatesFilter<"CarMedia"> | number
    link?: StringWithAggregatesFilter<"CarMedia"> | string
    type?: EnumMediaTypeWithAggregatesFilter<"CarMedia"> | $Enums.MediaType
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    creatorId?: IntFilter<"ChatRoom"> | number
    guestId?: IntFilter<"ChatRoom"> | number
    createAt?: DateTimeFilter<"ChatRoom"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    guest?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
    createAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    guest?: UserOrderByWithRelationInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    creatorId?: IntFilter<"ChatRoom"> | number
    guestId?: IntFilter<"ChatRoom"> | number
    createAt?: DateTimeFilter<"ChatRoom"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    guest?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
    createAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatRoom"> | number
    creatorId?: IntWithAggregatesFilter<"ChatRoom"> | number
    guestId?: IntWithAggregatesFilter<"ChatRoom"> | number
    createAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: IntFilter<"Listing"> | number
    carId?: IntFilter<"Listing"> | number
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    call_allowed?: BoolFilter<"Listing"> | boolean
    message_allowed?: BoolFilter<"Listing"> | boolean
    create_at?: DateTimeFilter<"Listing"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    call_allowed?: SortOrder
    message_allowed?: SortOrder
    create_at?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    carId?: IntFilter<"Listing"> | number
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    call_allowed?: BoolFilter<"Listing"> | boolean
    message_allowed?: BoolFilter<"Listing"> | boolean
    create_at?: DateTimeFilter<"Listing"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    call_allowed?: SortOrder
    message_allowed?: SortOrder
    create_at?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Listing"> | number
    carId?: IntWithAggregatesFilter<"Listing"> | number
    status?: EnumListingStatusWithAggregatesFilter<"Listing"> | $Enums.ListingStatus
    call_allowed?: BoolWithAggregatesFilter<"Listing"> | boolean
    message_allowed?: BoolWithAggregatesFilter<"Listing"> | boolean
    create_at?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
  }

  export type SelledCarWhereInput = {
    AND?: SelledCarWhereInput | SelledCarWhereInput[]
    OR?: SelledCarWhereInput[]
    NOT?: SelledCarWhereInput | SelledCarWhereInput[]
    id?: IntFilter<"SelledCar"> | number
    car_id?: IntFilter<"SelledCar"> | number
    price?: FloatFilter<"SelledCar"> | number
    buyer_id?: IntFilter<"SelledCar"> | number
    sell_at?: DateTimeFilter<"SelledCar"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SelledCarOrderByWithRelationInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
    sell_at?: SortOrder
    car?: CarOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
  }

  export type SelledCarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    car_id?: number
    AND?: SelledCarWhereInput | SelledCarWhereInput[]
    OR?: SelledCarWhereInput[]
    NOT?: SelledCarWhereInput | SelledCarWhereInput[]
    price?: FloatFilter<"SelledCar"> | number
    buyer_id?: IntFilter<"SelledCar"> | number
    sell_at?: DateTimeFilter<"SelledCar"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "car_id">

  export type SelledCarOrderByWithAggregationInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
    sell_at?: SortOrder
    _count?: SelledCarCountOrderByAggregateInput
    _avg?: SelledCarAvgOrderByAggregateInput
    _max?: SelledCarMaxOrderByAggregateInput
    _min?: SelledCarMinOrderByAggregateInput
    _sum?: SelledCarSumOrderByAggregateInput
  }

  export type SelledCarScalarWhereWithAggregatesInput = {
    AND?: SelledCarScalarWhereWithAggregatesInput | SelledCarScalarWhereWithAggregatesInput[]
    OR?: SelledCarScalarWhereWithAggregatesInput[]
    NOT?: SelledCarScalarWhereWithAggregatesInput | SelledCarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SelledCar"> | number
    car_id?: IntWithAggregatesFilter<"SelledCar"> | number
    price?: FloatWithAggregatesFilter<"SelledCar"> | number
    buyer_id?: IntWithAggregatesFilter<"SelledCar"> | number
    sell_at?: DateTimeWithAggregatesFilter<"SelledCar"> | Date | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    password: string
    cars?: CarCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomCreateNestedManyWithoutGuestInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    password: string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarUncheckedCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomUncheckedCreateNestedManyWithoutGuestInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUpdateManyWithoutGuestNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUncheckedUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUncheckedUpdateManyWithoutGuestNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    phone?: string | null
    bio?: string | null
    age?: number | null
    address?: string | null
    gender?: $Enums.Gender | null
    profile_image?: string | null
    verified?: boolean | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    userId: number
    phone?: string | null
    bio?: string | null
    age?: number | null
    address?: string | null
    gender?: $Enums.Gender | null
    profile_image?: string | null
    verified?: boolean | null
  }

  export type ProfileUpdateInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfileCreateManyInput = {
    id?: number
    userId: number
    phone?: string | null
    bio?: string | null
    age?: number | null
    address?: string | null
    gender?: $Enums.Gender | null
    profile_image?: string | null
    verified?: boolean | null
  }

  export type ProfileUpdateManyMutationInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CarCreateInput = {
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    owner: UserCreateNestedOneWithoutCarsInput
    media?: CarMediaCreateNestedManyWithoutCarInput
    listing?: ListingCreateNestedManyWithoutCarInput
    selledCar?: SelledCarCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    owner_id: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    media?: CarMediaUncheckedCreateNestedManyWithoutCarInput
    listing?: ListingUncheckedCreateNestedManyWithoutCarInput
    selledCar?: SelledCarUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarUpdateInput = {
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    media?: CarMediaUpdateManyWithoutCarNestedInput
    listing?: ListingUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUpdateOneWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: CarMediaUncheckedUpdateManyWithoutCarNestedInput
    listing?: ListingUncheckedUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUncheckedUpdateOneWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    owner_id: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
  }

  export type CarUpdateManyMutationInput = {
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarMediaCreateInput = {
    link: string
    type: $Enums.MediaType
    car: CarCreateNestedOneWithoutMediaInput
  }

  export type CarMediaUncheckedCreateInput = {
    id?: number
    carId: number
    link: string
    type: $Enums.MediaType
  }

  export type CarMediaUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    car?: CarUpdateOneRequiredWithoutMediaNestedInput
  }

  export type CarMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
  }

  export type CarMediaCreateManyInput = {
    id?: number
    carId: number
    link: string
    type: $Enums.MediaType
  }

  export type CarMediaUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
  }

  export type CarMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
  }

  export type ChatRoomCreateInput = {
    createAt?: Date | string
    creator: UserCreateNestedOneWithoutChatRoomsAsCreatorInput
    guest: UserCreateNestedOneWithoutChatRoomsAsGuestInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: number
    creatorId: number
    guestId: number
    createAt?: Date | string
  }

  export type ChatRoomUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutChatRoomsAsCreatorNestedInput
    guest?: UserUpdateOneRequiredWithoutChatRoomsAsGuestNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateManyInput = {
    id?: number
    creatorId: number
    guestId: number
    createAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateInput = {
    status?: $Enums.ListingStatus
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: Date | string
    car: CarCreateNestedOneWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: number
    carId: number
    status?: $Enums.ListingStatus
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: Date | string
  }

  export type ListingUpdateInput = {
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingCreateManyInput = {
    id?: number
    carId: number
    status?: $Enums.ListingStatus
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: Date | string
  }

  export type ListingUpdateManyMutationInput = {
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelledCarCreateInput = {
    price: number
    sell_at?: Date | string
    car: CarCreateNestedOneWithoutSelledCarInput
    buyer: UserCreateNestedOneWithoutSelledCarsInput
  }

  export type SelledCarUncheckedCreateInput = {
    id?: number
    car_id: number
    price: number
    buyer_id: number
    sell_at?: Date | string
  }

  export type SelledCarUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSelledCarNestedInput
    buyer?: UserUpdateOneRequiredWithoutSelledCarsNestedInput
  }

  export type SelledCarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelledCarCreateManyInput = {
    id?: number
    car_id: number
    price: number
    buyer_id: number
    sell_at?: Date | string
  }

  export type SelledCarUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelledCarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type SelledCarListRelationFilter = {
    every?: SelledCarWhereInput
    some?: SelledCarWhereInput
    none?: SelledCarWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SelledCarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    profile_image?: SortOrder
    verified?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    profile_image?: SortOrder
    verified?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    address?: SortOrder
    gender?: SortOrder
    profile_image?: SortOrder
    verified?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    age?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumFuelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableFilter<$PrismaModel> | $Enums.FuelType | null
  }

  export type EnumTransmissionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableFilter<$PrismaModel> | $Enums.Transmission | null
  }

  export type EnumBodyTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBodyTypeNullableFilter<$PrismaModel> | $Enums.BodyType | null
  }

  export type CarMediaListRelationFilter = {
    every?: CarMediaWhereInput
    some?: CarMediaWhereInput
    none?: CarMediaWhereInput
  }

  export type ListingListRelationFilter = {
    every?: ListingWhereInput
    some?: ListingWhereInput
    none?: ListingWhereInput
  }

  export type SelledCarNullableScalarRelationFilter = {
    is?: SelledCarWhereInput | null
    isNot?: SelledCarWhereInput | null
  }

  export type CarMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    engine?: SortOrder
    horsepower?: SortOrder
    mileage?: SortOrder
    state?: SortOrder
    isPriceFix?: SortOrder
    price?: SortOrder
    location?: SortOrder
    description?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    engine?: SortOrder
    horsepower?: SortOrder
    mileage?: SortOrder
    state?: SortOrder
    isPriceFix?: SortOrder
    price?: SortOrder
    location?: SortOrder
    description?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel_type?: SortOrder
    transmission?: SortOrder
    body_type?: SortOrder
    engine?: SortOrder
    horsepower?: SortOrder
    mileage?: SortOrder
    state?: SortOrder
    isPriceFix?: SortOrder
    price?: SortOrder
    location?: SortOrder
    description?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
  }

  export type EnumFuelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
  }

  export type EnumTransmissionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Transmission | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransmissionNullableFilter<$PrismaModel>
    _max?: NestedEnumTransmissionNullableFilter<$PrismaModel>
  }

  export type EnumBodyTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBodyTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BodyType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBodyTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBodyTypeNullableFilter<$PrismaModel>
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type CarMediaCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    link?: SortOrder
    type?: SortOrder
  }

  export type CarMediaAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type CarMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    link?: SortOrder
    type?: SortOrder
  }

  export type CarMediaMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    link?: SortOrder
    type?: SortOrder
  }

  export type CarMediaSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
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

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
    createAt?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
    createAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
    createAt?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    guestId?: SortOrder
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

  export type EnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    call_allowed?: SortOrder
    message_allowed?: SortOrder
    create_at?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    call_allowed?: SortOrder
    message_allowed?: SortOrder
    create_at?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    status?: SortOrder
    call_allowed?: SortOrder
    message_allowed?: SortOrder
    create_at?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
  }

  export type EnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SelledCarCountOrderByAggregateInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
    sell_at?: SortOrder
  }

  export type SelledCarAvgOrderByAggregateInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
  }

  export type SelledCarMaxOrderByAggregateInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
    sell_at?: SortOrder
  }

  export type SelledCarMinOrderByAggregateInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
    sell_at?: SortOrder
  }

  export type SelledCarSumOrderByAggregateInput = {
    id?: SortOrder
    car_id?: SortOrder
    price?: SortOrder
    buyer_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CarCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type SelledCarCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SelledCarCreateWithoutBuyerInput, SelledCarUncheckedCreateWithoutBuyerInput> | SelledCarCreateWithoutBuyerInput[] | SelledCarUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SelledCarCreateOrConnectWithoutBuyerInput | SelledCarCreateOrConnectWithoutBuyerInput[]
    createMany?: SelledCarCreateManyBuyerInputEnvelope
    connect?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutGuestInput = {
    create?: XOR<ChatRoomCreateWithoutGuestInput, ChatRoomUncheckedCreateWithoutGuestInput> | ChatRoomCreateWithoutGuestInput[] | ChatRoomUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutGuestInput | ChatRoomCreateOrConnectWithoutGuestInput[]
    createMany?: ChatRoomCreateManyGuestInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type CarUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type SelledCarUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SelledCarCreateWithoutBuyerInput, SelledCarUncheckedCreateWithoutBuyerInput> | SelledCarCreateWithoutBuyerInput[] | SelledCarUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SelledCarCreateOrConnectWithoutBuyerInput | SelledCarCreateOrConnectWithoutBuyerInput[]
    createMany?: SelledCarCreateManyBuyerInputEnvelope
    connect?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<ChatRoomCreateWithoutGuestInput, ChatRoomUncheckedCreateWithoutGuestInput> | ChatRoomCreateWithoutGuestInput[] | ChatRoomUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutGuestInput | ChatRoomCreateOrConnectWithoutGuestInput[]
    createMany?: ChatRoomCreateManyGuestInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CarUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutOwnerInput | CarUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutOwnerInput | CarUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CarUpdateManyWithWhereWithoutOwnerInput | CarUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type SelledCarUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SelledCarCreateWithoutBuyerInput, SelledCarUncheckedCreateWithoutBuyerInput> | SelledCarCreateWithoutBuyerInput[] | SelledCarUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SelledCarCreateOrConnectWithoutBuyerInput | SelledCarCreateOrConnectWithoutBuyerInput[]
    upsert?: SelledCarUpsertWithWhereUniqueWithoutBuyerInput | SelledCarUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SelledCarCreateManyBuyerInputEnvelope
    set?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    disconnect?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    delete?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    connect?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    update?: SelledCarUpdateWithWhereUniqueWithoutBuyerInput | SelledCarUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SelledCarUpdateManyWithWhereWithoutBuyerInput | SelledCarUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SelledCarScalarWhereInput | SelledCarScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCreatorInput | ChatRoomUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCreatorInput | ChatRoomUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCreatorInput | ChatRoomUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ChatRoomCreateWithoutGuestInput, ChatRoomUncheckedCreateWithoutGuestInput> | ChatRoomCreateWithoutGuestInput[] | ChatRoomUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutGuestInput | ChatRoomCreateOrConnectWithoutGuestInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutGuestInput | ChatRoomUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ChatRoomCreateManyGuestInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutGuestInput | ChatRoomUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutGuestInput | ChatRoomUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput> | CarCreateWithoutOwnerInput[] | CarUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CarCreateOrConnectWithoutOwnerInput | CarCreateOrConnectWithoutOwnerInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutOwnerInput | CarUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CarCreateManyOwnerInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutOwnerInput | CarUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CarUpdateManyWithWhereWithoutOwnerInput | CarUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type SelledCarUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SelledCarCreateWithoutBuyerInput, SelledCarUncheckedCreateWithoutBuyerInput> | SelledCarCreateWithoutBuyerInput[] | SelledCarUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SelledCarCreateOrConnectWithoutBuyerInput | SelledCarCreateOrConnectWithoutBuyerInput[]
    upsert?: SelledCarUpsertWithWhereUniqueWithoutBuyerInput | SelledCarUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SelledCarCreateManyBuyerInputEnvelope
    set?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    disconnect?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    delete?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    connect?: SelledCarWhereUniqueInput | SelledCarWhereUniqueInput[]
    update?: SelledCarUpdateWithWhereUniqueWithoutBuyerInput | SelledCarUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SelledCarUpdateManyWithWhereWithoutBuyerInput | SelledCarUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SelledCarScalarWhereInput | SelledCarScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCreatorInput | ChatRoomUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCreatorInput | ChatRoomUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCreatorInput | ChatRoomUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ChatRoomCreateWithoutGuestInput, ChatRoomUncheckedCreateWithoutGuestInput> | ChatRoomCreateWithoutGuestInput[] | ChatRoomUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutGuestInput | ChatRoomCreateOrConnectWithoutGuestInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutGuestInput | ChatRoomUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ChatRoomCreateManyGuestInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutGuestInput | ChatRoomUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutGuestInput | ChatRoomUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutCarsInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    connect?: UserWhereUniqueInput
  }

  export type CarMediaCreateNestedManyWithoutCarInput = {
    create?: XOR<CarMediaCreateWithoutCarInput, CarMediaUncheckedCreateWithoutCarInput> | CarMediaCreateWithoutCarInput[] | CarMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarMediaCreateOrConnectWithoutCarInput | CarMediaCreateOrConnectWithoutCarInput[]
    createMany?: CarMediaCreateManyCarInputEnvelope
    connect?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
  }

  export type ListingCreateNestedManyWithoutCarInput = {
    create?: XOR<ListingCreateWithoutCarInput, ListingUncheckedCreateWithoutCarInput> | ListingCreateWithoutCarInput[] | ListingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCarInput | ListingCreateOrConnectWithoutCarInput[]
    createMany?: ListingCreateManyCarInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type SelledCarCreateNestedOneWithoutCarInput = {
    create?: XOR<SelledCarCreateWithoutCarInput, SelledCarUncheckedCreateWithoutCarInput>
    connectOrCreate?: SelledCarCreateOrConnectWithoutCarInput
    connect?: SelledCarWhereUniqueInput
  }

  export type CarMediaUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<CarMediaCreateWithoutCarInput, CarMediaUncheckedCreateWithoutCarInput> | CarMediaCreateWithoutCarInput[] | CarMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarMediaCreateOrConnectWithoutCarInput | CarMediaCreateOrConnectWithoutCarInput[]
    createMany?: CarMediaCreateManyCarInputEnvelope
    connect?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
  }

  export type ListingUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ListingCreateWithoutCarInput, ListingUncheckedCreateWithoutCarInput> | ListingCreateWithoutCarInput[] | ListingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCarInput | ListingCreateOrConnectWithoutCarInput[]
    createMany?: ListingCreateManyCarInputEnvelope
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
  }

  export type SelledCarUncheckedCreateNestedOneWithoutCarInput = {
    create?: XOR<SelledCarCreateWithoutCarInput, SelledCarUncheckedCreateWithoutCarInput>
    connectOrCreate?: SelledCarCreateOrConnectWithoutCarInput
    connect?: SelledCarWhereUniqueInput
  }

  export type NullableEnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType | null
  }

  export type NullableEnumTransmissionFieldUpdateOperationsInput = {
    set?: $Enums.Transmission | null
  }

  export type NullableEnumBodyTypeFieldUpdateOperationsInput = {
    set?: $Enums.BodyType | null
  }

  export type UserUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarsInput
    upsert?: UserUpsertWithoutCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarsInput, UserUpdateWithoutCarsInput>, UserUncheckedUpdateWithoutCarsInput>
  }

  export type CarMediaUpdateManyWithoutCarNestedInput = {
    create?: XOR<CarMediaCreateWithoutCarInput, CarMediaUncheckedCreateWithoutCarInput> | CarMediaCreateWithoutCarInput[] | CarMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarMediaCreateOrConnectWithoutCarInput | CarMediaCreateOrConnectWithoutCarInput[]
    upsert?: CarMediaUpsertWithWhereUniqueWithoutCarInput | CarMediaUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: CarMediaCreateManyCarInputEnvelope
    set?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    disconnect?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    delete?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    connect?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    update?: CarMediaUpdateWithWhereUniqueWithoutCarInput | CarMediaUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: CarMediaUpdateManyWithWhereWithoutCarInput | CarMediaUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: CarMediaScalarWhereInput | CarMediaScalarWhereInput[]
  }

  export type ListingUpdateManyWithoutCarNestedInput = {
    create?: XOR<ListingCreateWithoutCarInput, ListingUncheckedCreateWithoutCarInput> | ListingCreateWithoutCarInput[] | ListingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCarInput | ListingCreateOrConnectWithoutCarInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCarInput | ListingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ListingCreateManyCarInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCarInput | ListingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCarInput | ListingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type SelledCarUpdateOneWithoutCarNestedInput = {
    create?: XOR<SelledCarCreateWithoutCarInput, SelledCarUncheckedCreateWithoutCarInput>
    connectOrCreate?: SelledCarCreateOrConnectWithoutCarInput
    upsert?: SelledCarUpsertWithoutCarInput
    disconnect?: SelledCarWhereInput | boolean
    delete?: SelledCarWhereInput | boolean
    connect?: SelledCarWhereUniqueInput
    update?: XOR<XOR<SelledCarUpdateToOneWithWhereWithoutCarInput, SelledCarUpdateWithoutCarInput>, SelledCarUncheckedUpdateWithoutCarInput>
  }

  export type CarMediaUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<CarMediaCreateWithoutCarInput, CarMediaUncheckedCreateWithoutCarInput> | CarMediaCreateWithoutCarInput[] | CarMediaUncheckedCreateWithoutCarInput[]
    connectOrCreate?: CarMediaCreateOrConnectWithoutCarInput | CarMediaCreateOrConnectWithoutCarInput[]
    upsert?: CarMediaUpsertWithWhereUniqueWithoutCarInput | CarMediaUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: CarMediaCreateManyCarInputEnvelope
    set?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    disconnect?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    delete?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    connect?: CarMediaWhereUniqueInput | CarMediaWhereUniqueInput[]
    update?: CarMediaUpdateWithWhereUniqueWithoutCarInput | CarMediaUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: CarMediaUpdateManyWithWhereWithoutCarInput | CarMediaUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: CarMediaScalarWhereInput | CarMediaScalarWhereInput[]
  }

  export type ListingUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ListingCreateWithoutCarInput, ListingUncheckedCreateWithoutCarInput> | ListingCreateWithoutCarInput[] | ListingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ListingCreateOrConnectWithoutCarInput | ListingCreateOrConnectWithoutCarInput[]
    upsert?: ListingUpsertWithWhereUniqueWithoutCarInput | ListingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ListingCreateManyCarInputEnvelope
    set?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    disconnect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    delete?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    connect?: ListingWhereUniqueInput | ListingWhereUniqueInput[]
    update?: ListingUpdateWithWhereUniqueWithoutCarInput | ListingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ListingUpdateManyWithWhereWithoutCarInput | ListingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ListingScalarWhereInput | ListingScalarWhereInput[]
  }

  export type SelledCarUncheckedUpdateOneWithoutCarNestedInput = {
    create?: XOR<SelledCarCreateWithoutCarInput, SelledCarUncheckedCreateWithoutCarInput>
    connectOrCreate?: SelledCarCreateOrConnectWithoutCarInput
    upsert?: SelledCarUpsertWithoutCarInput
    disconnect?: SelledCarWhereInput | boolean
    delete?: SelledCarWhereInput | boolean
    connect?: SelledCarWhereUniqueInput
    update?: XOR<XOR<SelledCarUpdateToOneWithWhereWithoutCarInput, SelledCarUpdateWithoutCarInput>, SelledCarUncheckedUpdateWithoutCarInput>
  }

  export type CarCreateNestedOneWithoutMediaInput = {
    create?: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CarCreateOrConnectWithoutMediaInput
    connect?: CarWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type CarUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
    connectOrCreate?: CarCreateOrConnectWithoutMediaInput
    upsert?: CarUpsertWithoutMediaInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutMediaInput, CarUpdateWithoutMediaInput>, CarUncheckedUpdateWithoutMediaInput>
  }

  export type UserCreateNestedOneWithoutChatRoomsAsCreatorInput = {
    create?: XOR<UserCreateWithoutChatRoomsAsCreatorInput, UserUncheckedCreateWithoutChatRoomsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsAsCreatorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatRoomsAsGuestInput = {
    create?: XOR<UserCreateWithoutChatRoomsAsGuestInput, UserUncheckedCreateWithoutChatRoomsAsGuestInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsAsGuestInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutChatRoomsAsCreatorNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsAsCreatorInput, UserUncheckedCreateWithoutChatRoomsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsAsCreatorInput
    upsert?: UserUpsertWithoutChatRoomsAsCreatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomsAsCreatorInput, UserUpdateWithoutChatRoomsAsCreatorInput>, UserUncheckedUpdateWithoutChatRoomsAsCreatorInput>
  }

  export type UserUpdateOneRequiredWithoutChatRoomsAsGuestNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsAsGuestInput, UserUncheckedCreateWithoutChatRoomsAsGuestInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsAsGuestInput
    upsert?: UserUpsertWithoutChatRoomsAsGuestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomsAsGuestInput, UserUpdateWithoutChatRoomsAsGuestInput>, UserUncheckedUpdateWithoutChatRoomsAsGuestInput>
  }

  export type CarCreateNestedOneWithoutListingInput = {
    create?: XOR<CarCreateWithoutListingInput, CarUncheckedCreateWithoutListingInput>
    connectOrCreate?: CarCreateOrConnectWithoutListingInput
    connect?: CarWhereUniqueInput
  }

  export type EnumListingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ListingStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CarUpdateOneRequiredWithoutListingNestedInput = {
    create?: XOR<CarCreateWithoutListingInput, CarUncheckedCreateWithoutListingInput>
    connectOrCreate?: CarCreateOrConnectWithoutListingInput
    upsert?: CarUpsertWithoutListingInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutListingInput, CarUpdateWithoutListingInput>, CarUncheckedUpdateWithoutListingInput>
  }

  export type CarCreateNestedOneWithoutSelledCarInput = {
    create?: XOR<CarCreateWithoutSelledCarInput, CarUncheckedCreateWithoutSelledCarInput>
    connectOrCreate?: CarCreateOrConnectWithoutSelledCarInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSelledCarsInput = {
    create?: XOR<UserCreateWithoutSelledCarsInput, UserUncheckedCreateWithoutSelledCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelledCarsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarUpdateOneRequiredWithoutSelledCarNestedInput = {
    create?: XOR<CarCreateWithoutSelledCarInput, CarUncheckedCreateWithoutSelledCarInput>
    connectOrCreate?: CarCreateOrConnectWithoutSelledCarInput
    upsert?: CarUpsertWithoutSelledCarInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutSelledCarInput, CarUpdateWithoutSelledCarInput>, CarUncheckedUpdateWithoutSelledCarInput>
  }

  export type UserUpdateOneRequiredWithoutSelledCarsNestedInput = {
    create?: XOR<UserCreateWithoutSelledCarsInput, UserUncheckedCreateWithoutSelledCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelledCarsInput
    upsert?: UserUpsertWithoutSelledCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSelledCarsInput, UserUpdateWithoutSelledCarsInput>, UserUncheckedUpdateWithoutSelledCarsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumFuelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableFilter<$PrismaModel> | $Enums.FuelType | null
  }

  export type NestedEnumTransmissionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableFilter<$PrismaModel> | $Enums.Transmission | null
  }

  export type NestedEnumBodyTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBodyTypeNullableFilter<$PrismaModel> | $Enums.BodyType | null
  }

  export type NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFuelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransmissionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTransmissionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Transmission | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTransmissionNullableFilter<$PrismaModel>
    _max?: NestedEnumTransmissionNullableFilter<$PrismaModel>
  }

  export type NestedEnumBodyTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBodyTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BodyType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBodyTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBodyTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
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

  export type NestedEnumListingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusFilter<$PrismaModel> | $Enums.ListingStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumListingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingStatus | EnumListingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingStatus[] | ListEnumListingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumListingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ListingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingStatusFilter<$PrismaModel>
    _max?: NestedEnumListingStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CarCreateWithoutOwnerInput = {
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    media?: CarMediaCreateNestedManyWithoutCarInput
    listing?: ListingCreateNestedManyWithoutCarInput
    selledCar?: SelledCarCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateWithoutOwnerInput = {
    id?: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    media?: CarMediaUncheckedCreateNestedManyWithoutCarInput
    listing?: ListingUncheckedCreateNestedManyWithoutCarInput
    selledCar?: SelledCarUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarCreateOrConnectWithoutOwnerInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput>
  }

  export type CarCreateManyOwnerInputEnvelope = {
    data: CarCreateManyOwnerInput | CarCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SelledCarCreateWithoutBuyerInput = {
    price: number
    sell_at?: Date | string
    car: CarCreateNestedOneWithoutSelledCarInput
  }

  export type SelledCarUncheckedCreateWithoutBuyerInput = {
    id?: number
    car_id: number
    price: number
    sell_at?: Date | string
  }

  export type SelledCarCreateOrConnectWithoutBuyerInput = {
    where: SelledCarWhereUniqueInput
    create: XOR<SelledCarCreateWithoutBuyerInput, SelledCarUncheckedCreateWithoutBuyerInput>
  }

  export type SelledCarCreateManyBuyerInputEnvelope = {
    data: SelledCarCreateManyBuyerInput | SelledCarCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutCreatorInput = {
    createAt?: Date | string
    guest: UserCreateNestedOneWithoutChatRoomsAsGuestInput
  }

  export type ChatRoomUncheckedCreateWithoutCreatorInput = {
    id?: number
    guestId: number
    createAt?: Date | string
  }

  export type ChatRoomCreateOrConnectWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput>
  }

  export type ChatRoomCreateManyCreatorInputEnvelope = {
    data: ChatRoomCreateManyCreatorInput | ChatRoomCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutGuestInput = {
    createAt?: Date | string
    creator: UserCreateNestedOneWithoutChatRoomsAsCreatorInput
  }

  export type ChatRoomUncheckedCreateWithoutGuestInput = {
    id?: number
    creatorId: number
    createAt?: Date | string
  }

  export type ChatRoomCreateOrConnectWithoutGuestInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutGuestInput, ChatRoomUncheckedCreateWithoutGuestInput>
  }

  export type ChatRoomCreateManyGuestInputEnvelope = {
    data: ChatRoomCreateManyGuestInput | ChatRoomCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    phone?: string | null
    bio?: string | null
    age?: number | null
    address?: string | null
    gender?: $Enums.Gender | null
    profile_image?: string | null
    verified?: boolean | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    phone?: string | null
    bio?: string | null
    age?: number | null
    address?: string | null
    gender?: $Enums.Gender | null
    profile_image?: string | null
    verified?: boolean | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type CarUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutOwnerInput, CarUncheckedUpdateWithoutOwnerInput>
    create: XOR<CarCreateWithoutOwnerInput, CarUncheckedCreateWithoutOwnerInput>
  }

  export type CarUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutOwnerInput, CarUncheckedUpdateWithoutOwnerInput>
  }

  export type CarUpdateManyWithWhereWithoutOwnerInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: IntFilter<"Car"> | number
    owner_id?: IntFilter<"Car"> | number
    make?: StringNullableFilter<"Car"> | string | null
    model?: StringNullableFilter<"Car"> | string | null
    year?: StringNullableFilter<"Car"> | string | null
    fuel_type?: EnumFuelTypeNullableFilter<"Car"> | $Enums.FuelType | null
    transmission?: EnumTransmissionNullableFilter<"Car"> | $Enums.Transmission | null
    body_type?: EnumBodyTypeNullableFilter<"Car"> | $Enums.BodyType | null
    engine?: StringNullableFilter<"Car"> | string | null
    horsepower?: StringNullableFilter<"Car"> | string | null
    mileage?: StringNullableFilter<"Car"> | string | null
    state?: StringNullableFilter<"Car"> | string | null
    isPriceFix?: StringNullableFilter<"Car"> | string | null
    price?: StringNullableFilter<"Car"> | string | null
    location?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
  }

  export type SelledCarUpsertWithWhereUniqueWithoutBuyerInput = {
    where: SelledCarWhereUniqueInput
    update: XOR<SelledCarUpdateWithoutBuyerInput, SelledCarUncheckedUpdateWithoutBuyerInput>
    create: XOR<SelledCarCreateWithoutBuyerInput, SelledCarUncheckedCreateWithoutBuyerInput>
  }

  export type SelledCarUpdateWithWhereUniqueWithoutBuyerInput = {
    where: SelledCarWhereUniqueInput
    data: XOR<SelledCarUpdateWithoutBuyerInput, SelledCarUncheckedUpdateWithoutBuyerInput>
  }

  export type SelledCarUpdateManyWithWhereWithoutBuyerInput = {
    where: SelledCarScalarWhereInput
    data: XOR<SelledCarUpdateManyMutationInput, SelledCarUncheckedUpdateManyWithoutBuyerInput>
  }

  export type SelledCarScalarWhereInput = {
    AND?: SelledCarScalarWhereInput | SelledCarScalarWhereInput[]
    OR?: SelledCarScalarWhereInput[]
    NOT?: SelledCarScalarWhereInput | SelledCarScalarWhereInput[]
    id?: IntFilter<"SelledCar"> | number
    car_id?: IntFilter<"SelledCar"> | number
    price?: FloatFilter<"SelledCar"> | number
    buyer_id?: IntFilter<"SelledCar"> | number
    sell_at?: DateTimeFilter<"SelledCar"> | Date | string
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutCreatorInput, ChatRoomUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutCreatorInput, ChatRoomUncheckedUpdateWithoutCreatorInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutCreatorInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    creatorId?: IntFilter<"ChatRoom"> | number
    guestId?: IntFilter<"ChatRoom"> | number
    createAt?: DateTimeFilter<"ChatRoom"> | Date | string
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutGuestInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutGuestInput, ChatRoomUncheckedUpdateWithoutGuestInput>
    create: XOR<ChatRoomCreateWithoutGuestInput, ChatRoomUncheckedCreateWithoutGuestInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutGuestInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutGuestInput, ChatRoomUncheckedUpdateWithoutGuestInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutGuestInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutGuestInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserCreateWithoutProfileInput = {
    fullName: string
    email: string
    password: string
    cars?: CarCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomCreateNestedManyWithoutGuestInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    fullName: string
    email: string
    password: string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarUncheckedCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomUncheckedCreateNestedManyWithoutGuestInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUpdateManyWithoutGuestNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUncheckedUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type UserCreateWithoutCarsInput = {
    fullName: string
    email: string
    password: string
    selledCars?: SelledCarCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomCreateNestedManyWithoutGuestInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCarsInput = {
    id?: number
    fullName: string
    email: string
    password: string
    selledCars?: SelledCarUncheckedCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomUncheckedCreateNestedManyWithoutGuestInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
  }

  export type CarMediaCreateWithoutCarInput = {
    link: string
    type: $Enums.MediaType
  }

  export type CarMediaUncheckedCreateWithoutCarInput = {
    id?: number
    link: string
    type: $Enums.MediaType
  }

  export type CarMediaCreateOrConnectWithoutCarInput = {
    where: CarMediaWhereUniqueInput
    create: XOR<CarMediaCreateWithoutCarInput, CarMediaUncheckedCreateWithoutCarInput>
  }

  export type CarMediaCreateManyCarInputEnvelope = {
    data: CarMediaCreateManyCarInput | CarMediaCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type ListingCreateWithoutCarInput = {
    status?: $Enums.ListingStatus
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: Date | string
  }

  export type ListingUncheckedCreateWithoutCarInput = {
    id?: number
    status?: $Enums.ListingStatus
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: Date | string
  }

  export type ListingCreateOrConnectWithoutCarInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutCarInput, ListingUncheckedCreateWithoutCarInput>
  }

  export type ListingCreateManyCarInputEnvelope = {
    data: ListingCreateManyCarInput | ListingCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type SelledCarCreateWithoutCarInput = {
    price: number
    sell_at?: Date | string
    buyer: UserCreateNestedOneWithoutSelledCarsInput
  }

  export type SelledCarUncheckedCreateWithoutCarInput = {
    id?: number
    price: number
    buyer_id: number
    sell_at?: Date | string
  }

  export type SelledCarCreateOrConnectWithoutCarInput = {
    where: SelledCarWhereUniqueInput
    create: XOR<SelledCarCreateWithoutCarInput, SelledCarUncheckedCreateWithoutCarInput>
  }

  export type UserUpsertWithoutCarsInput = {
    update: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
    create: XOR<UserCreateWithoutCarsInput, UserUncheckedCreateWithoutCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarsInput, UserUncheckedUpdateWithoutCarsInput>
  }

  export type UserUpdateWithoutCarsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    selledCars?: SelledCarUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUpdateManyWithoutGuestNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    selledCars?: SelledCarUncheckedUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUncheckedUpdateManyWithoutGuestNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CarMediaUpsertWithWhereUniqueWithoutCarInput = {
    where: CarMediaWhereUniqueInput
    update: XOR<CarMediaUpdateWithoutCarInput, CarMediaUncheckedUpdateWithoutCarInput>
    create: XOR<CarMediaCreateWithoutCarInput, CarMediaUncheckedCreateWithoutCarInput>
  }

  export type CarMediaUpdateWithWhereUniqueWithoutCarInput = {
    where: CarMediaWhereUniqueInput
    data: XOR<CarMediaUpdateWithoutCarInput, CarMediaUncheckedUpdateWithoutCarInput>
  }

  export type CarMediaUpdateManyWithWhereWithoutCarInput = {
    where: CarMediaScalarWhereInput
    data: XOR<CarMediaUpdateManyMutationInput, CarMediaUncheckedUpdateManyWithoutCarInput>
  }

  export type CarMediaScalarWhereInput = {
    AND?: CarMediaScalarWhereInput | CarMediaScalarWhereInput[]
    OR?: CarMediaScalarWhereInput[]
    NOT?: CarMediaScalarWhereInput | CarMediaScalarWhereInput[]
    id?: IntFilter<"CarMedia"> | number
    carId?: IntFilter<"CarMedia"> | number
    link?: StringFilter<"CarMedia"> | string
    type?: EnumMediaTypeFilter<"CarMedia"> | $Enums.MediaType
  }

  export type ListingUpsertWithWhereUniqueWithoutCarInput = {
    where: ListingWhereUniqueInput
    update: XOR<ListingUpdateWithoutCarInput, ListingUncheckedUpdateWithoutCarInput>
    create: XOR<ListingCreateWithoutCarInput, ListingUncheckedCreateWithoutCarInput>
  }

  export type ListingUpdateWithWhereUniqueWithoutCarInput = {
    where: ListingWhereUniqueInput
    data: XOR<ListingUpdateWithoutCarInput, ListingUncheckedUpdateWithoutCarInput>
  }

  export type ListingUpdateManyWithWhereWithoutCarInput = {
    where: ListingScalarWhereInput
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyWithoutCarInput>
  }

  export type ListingScalarWhereInput = {
    AND?: ListingScalarWhereInput | ListingScalarWhereInput[]
    OR?: ListingScalarWhereInput[]
    NOT?: ListingScalarWhereInput | ListingScalarWhereInput[]
    id?: IntFilter<"Listing"> | number
    carId?: IntFilter<"Listing"> | number
    status?: EnumListingStatusFilter<"Listing"> | $Enums.ListingStatus
    call_allowed?: BoolFilter<"Listing"> | boolean
    message_allowed?: BoolFilter<"Listing"> | boolean
    create_at?: DateTimeFilter<"Listing"> | Date | string
  }

  export type SelledCarUpsertWithoutCarInput = {
    update: XOR<SelledCarUpdateWithoutCarInput, SelledCarUncheckedUpdateWithoutCarInput>
    create: XOR<SelledCarCreateWithoutCarInput, SelledCarUncheckedCreateWithoutCarInput>
    where?: SelledCarWhereInput
  }

  export type SelledCarUpdateToOneWithWhereWithoutCarInput = {
    where?: SelledCarWhereInput
    data: XOR<SelledCarUpdateWithoutCarInput, SelledCarUncheckedUpdateWithoutCarInput>
  }

  export type SelledCarUpdateWithoutCarInput = {
    price?: FloatFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutSelledCarsNestedInput
  }

  export type SelledCarUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateWithoutMediaInput = {
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    owner: UserCreateNestedOneWithoutCarsInput
    listing?: ListingCreateNestedManyWithoutCarInput
    selledCar?: SelledCarCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateWithoutMediaInput = {
    id?: number
    owner_id: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    listing?: ListingUncheckedCreateNestedManyWithoutCarInput
    selledCar?: SelledCarUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarCreateOrConnectWithoutMediaInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
  }

  export type CarUpsertWithoutMediaInput = {
    update: XOR<CarUpdateWithoutMediaInput, CarUncheckedUpdateWithoutMediaInput>
    create: XOR<CarCreateWithoutMediaInput, CarUncheckedCreateWithoutMediaInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutMediaInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutMediaInput, CarUncheckedUpdateWithoutMediaInput>
  }

  export type CarUpdateWithoutMediaInput = {
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    listing?: ListingUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUpdateOneWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    listing?: ListingUncheckedUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUncheckedUpdateOneWithoutCarNestedInput
  }

  export type UserCreateWithoutChatRoomsAsCreatorInput = {
    fullName: string
    email: string
    password: string
    cars?: CarCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarCreateNestedManyWithoutBuyerInput
    chatRoomsAsGuest?: ChatRoomCreateNestedManyWithoutGuestInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsAsCreatorInput = {
    id?: number
    fullName: string
    email: string
    password: string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarUncheckedCreateNestedManyWithoutBuyerInput
    chatRoomsAsGuest?: ChatRoomUncheckedCreateNestedManyWithoutGuestInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsAsCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsAsCreatorInput, UserUncheckedCreateWithoutChatRoomsAsCreatorInput>
  }

  export type UserCreateWithoutChatRoomsAsGuestInput = {
    fullName: string
    email: string
    password: string
    cars?: CarCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomCreateNestedManyWithoutCreatorInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsAsGuestInput = {
    id?: number
    fullName: string
    email: string
    password: string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
    selledCars?: SelledCarUncheckedCreateNestedManyWithoutBuyerInput
    chatRoomsAsCreator?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsAsGuestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsAsGuestInput, UserUncheckedCreateWithoutChatRoomsAsGuestInput>
  }

  export type UserUpsertWithoutChatRoomsAsCreatorInput = {
    update: XOR<UserUpdateWithoutChatRoomsAsCreatorInput, UserUncheckedUpdateWithoutChatRoomsAsCreatorInput>
    create: XOR<UserCreateWithoutChatRoomsAsCreatorInput, UserUncheckedCreateWithoutChatRoomsAsCreatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomsAsCreatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomsAsCreatorInput, UserUncheckedUpdateWithoutChatRoomsAsCreatorInput>
  }

  export type UserUpdateWithoutChatRoomsAsCreatorInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUpdateManyWithoutBuyerNestedInput
    chatRoomsAsGuest?: ChatRoomUpdateManyWithoutGuestNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsAsCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUncheckedUpdateManyWithoutBuyerNestedInput
    chatRoomsAsGuest?: ChatRoomUncheckedUpdateManyWithoutGuestNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutChatRoomsAsGuestInput = {
    update: XOR<UserUpdateWithoutChatRoomsAsGuestInput, UserUncheckedUpdateWithoutChatRoomsAsGuestInput>
    create: XOR<UserCreateWithoutChatRoomsAsGuestInput, UserUncheckedCreateWithoutChatRoomsAsGuestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomsAsGuestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomsAsGuestInput, UserUncheckedUpdateWithoutChatRoomsAsGuestInput>
  }

  export type UserUpdateWithoutChatRoomsAsGuestInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUpdateManyWithoutCreatorNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsAsGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
    selledCars?: SelledCarUncheckedUpdateManyWithoutBuyerNestedInput
    chatRoomsAsCreator?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CarCreateWithoutListingInput = {
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    owner: UserCreateNestedOneWithoutCarsInput
    media?: CarMediaCreateNestedManyWithoutCarInput
    selledCar?: SelledCarCreateNestedOneWithoutCarInput
  }

  export type CarUncheckedCreateWithoutListingInput = {
    id?: number
    owner_id: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    media?: CarMediaUncheckedCreateNestedManyWithoutCarInput
    selledCar?: SelledCarUncheckedCreateNestedOneWithoutCarInput
  }

  export type CarCreateOrConnectWithoutListingInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutListingInput, CarUncheckedCreateWithoutListingInput>
  }

  export type CarUpsertWithoutListingInput = {
    update: XOR<CarUpdateWithoutListingInput, CarUncheckedUpdateWithoutListingInput>
    create: XOR<CarCreateWithoutListingInput, CarUncheckedCreateWithoutListingInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutListingInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutListingInput, CarUncheckedUpdateWithoutListingInput>
  }

  export type CarUpdateWithoutListingInput = {
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    media?: CarMediaUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUpdateOneWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutListingInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: CarMediaUncheckedUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUncheckedUpdateOneWithoutCarNestedInput
  }

  export type CarCreateWithoutSelledCarInput = {
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    owner: UserCreateNestedOneWithoutCarsInput
    media?: CarMediaCreateNestedManyWithoutCarInput
    listing?: ListingCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutSelledCarInput = {
    id?: number
    owner_id: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
    media?: CarMediaUncheckedCreateNestedManyWithoutCarInput
    listing?: ListingUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutSelledCarInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSelledCarInput, CarUncheckedCreateWithoutSelledCarInput>
  }

  export type UserCreateWithoutSelledCarsInput = {
    fullName: string
    email: string
    password: string
    cars?: CarCreateNestedManyWithoutOwnerInput
    chatRoomsAsCreator?: ChatRoomCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomCreateNestedManyWithoutGuestInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSelledCarsInput = {
    id?: number
    fullName: string
    email: string
    password: string
    cars?: CarUncheckedCreateNestedManyWithoutOwnerInput
    chatRoomsAsCreator?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    chatRoomsAsGuest?: ChatRoomUncheckedCreateNestedManyWithoutGuestInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSelledCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSelledCarsInput, UserUncheckedCreateWithoutSelledCarsInput>
  }

  export type CarUpsertWithoutSelledCarInput = {
    update: XOR<CarUpdateWithoutSelledCarInput, CarUncheckedUpdateWithoutSelledCarInput>
    create: XOR<CarCreateWithoutSelledCarInput, CarUncheckedCreateWithoutSelledCarInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutSelledCarInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutSelledCarInput, CarUncheckedUpdateWithoutSelledCarInput>
  }

  export type CarUpdateWithoutSelledCarInput = {
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutCarsNestedInput
    media?: CarMediaUpdateManyWithoutCarNestedInput
    listing?: ListingUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutSelledCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: CarMediaUncheckedUpdateManyWithoutCarNestedInput
    listing?: ListingUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutSelledCarsInput = {
    update: XOR<UserUpdateWithoutSelledCarsInput, UserUncheckedUpdateWithoutSelledCarsInput>
    create: XOR<UserCreateWithoutSelledCarsInput, UserUncheckedCreateWithoutSelledCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSelledCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSelledCarsInput, UserUncheckedUpdateWithoutSelledCarsInput>
  }

  export type UserUpdateWithoutSelledCarsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUpdateManyWithoutOwnerNestedInput
    chatRoomsAsCreator?: ChatRoomUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUpdateManyWithoutGuestNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSelledCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cars?: CarUncheckedUpdateManyWithoutOwnerNestedInput
    chatRoomsAsCreator?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    chatRoomsAsGuest?: ChatRoomUncheckedUpdateManyWithoutGuestNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CarCreateManyOwnerInput = {
    id?: number
    make?: string | null
    model?: string | null
    year?: string | null
    fuel_type?: $Enums.FuelType | null
    transmission?: $Enums.Transmission | null
    body_type?: $Enums.BodyType | null
    engine?: string | null
    horsepower?: string | null
    mileage?: string | null
    state?: string | null
    isPriceFix?: string | null
    price?: string | null
    location?: string | null
    description?: string | null
  }

  export type SelledCarCreateManyBuyerInput = {
    id?: number
    car_id: number
    price: number
    sell_at?: Date | string
  }

  export type ChatRoomCreateManyCreatorInput = {
    id?: number
    guestId: number
    createAt?: Date | string
  }

  export type ChatRoomCreateManyGuestInput = {
    id?: number
    creatorId: number
    createAt?: Date | string
  }

  export type CarUpdateWithoutOwnerInput = {
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: CarMediaUpdateManyWithoutCarNestedInput
    listing?: ListingUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUpdateOneWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: CarMediaUncheckedUpdateManyWithoutCarNestedInput
    listing?: ListingUncheckedUpdateManyWithoutCarNestedInput
    selledCar?: SelledCarUncheckedUpdateOneWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_type?: NullableEnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | null
    transmission?: NullableEnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | null
    body_type?: NullableEnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | null
    engine?: NullableStringFieldUpdateOperationsInput | string | null
    horsepower?: NullableStringFieldUpdateOperationsInput | string | null
    mileage?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    isPriceFix?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SelledCarUpdateWithoutBuyerInput = {
    price?: FloatFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSelledCarNestedInput
  }

  export type SelledCarUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SelledCarUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sell_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUpdateWithoutCreatorInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: UserUpdateOneRequiredWithoutChatRoomsAsGuestNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUpdateWithoutGuestInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutChatRoomsAsCreatorNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyWithoutGuestInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarMediaCreateManyCarInput = {
    id?: number
    link: string
    type: $Enums.MediaType
  }

  export type ListingCreateManyCarInput = {
    id?: number
    status?: $Enums.ListingStatus
    call_allowed?: boolean
    message_allowed?: boolean
    create_at?: Date | string
  }

  export type CarMediaUpdateWithoutCarInput = {
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
  }

  export type CarMediaUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
  }

  export type CarMediaUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
  }

  export type ListingUpdateWithoutCarInput = {
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListingUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumListingStatusFieldUpdateOperationsInput | $Enums.ListingStatus
    call_allowed?: BoolFieldUpdateOperationsInput | boolean
    message_allowed?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
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