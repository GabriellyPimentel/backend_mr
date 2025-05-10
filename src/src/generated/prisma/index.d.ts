
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model MaeSolo
 * 
 */
export type MaeSolo = $Result.DefaultSelection<Prisma.$MaeSoloPayload>
/**
 * Model Filho
 * 
 */
export type Filho = $Result.DefaultSelection<Prisma.$FilhoPayload>
/**
 * Model Doador
 * 
 */
export type Doador = $Result.DefaultSelection<Prisma.$DoadorPayload>
/**
 * Model ProfissionalApoio
 * 
 */
export type ProfissionalApoio = $Result.DefaultSelection<Prisma.$ProfissionalApoioPayload>
/**
 * Model Disponibilidade
 * 
 */
export type Disponibilidade = $Result.DefaultSelection<Prisma.$DisponibilidadePayload>
/**
 * Model Encaminhamento
 * 
 */
export type Encaminhamento = $Result.DefaultSelection<Prisma.$EncaminhamentoPayload>
/**
 * Model Atendimento
 * 
 */
export type Atendimento = $Result.DefaultSelection<Prisma.$AtendimentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Escolaridade: {
  medioIncompleto: 'medioIncompleto',
  medioCompleto: 'medioCompleto',
  superiorIncompleto: 'superiorIncompleto',
  superiorCompleto: 'superiorCompleto'
};

export type Escolaridade = (typeof Escolaridade)[keyof typeof Escolaridade]


export const StatusEncaminhamento: {
  emAndamento: 'emAndamento',
  finalizado: 'finalizado',
  marcado: 'marcado'
};

export type StatusEncaminhamento = (typeof StatusEncaminhamento)[keyof typeof StatusEncaminhamento]

}

export type Escolaridade = $Enums.Escolaridade

export const Escolaridade: typeof $Enums.Escolaridade

export type StatusEncaminhamento = $Enums.StatusEncaminhamento

export const StatusEncaminhamento: typeof $Enums.StatusEncaminhamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maeSolo`: Exposes CRUD operations for the **MaeSolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaeSolos
    * const maeSolos = await prisma.maeSolo.findMany()
    * ```
    */
  get maeSolo(): Prisma.MaeSoloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filho`: Exposes CRUD operations for the **Filho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filhos
    * const filhos = await prisma.filho.findMany()
    * ```
    */
  get filho(): Prisma.FilhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doador`: Exposes CRUD operations for the **Doador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doadors
    * const doadors = await prisma.doador.findMany()
    * ```
    */
  get doador(): Prisma.DoadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissionalApoio`: Exposes CRUD operations for the **ProfissionalApoio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfissionalApoios
    * const profissionalApoios = await prisma.profissionalApoio.findMany()
    * ```
    */
  get profissionalApoio(): Prisma.ProfissionalApoioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilidade`: Exposes CRUD operations for the **Disponibilidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilidades
    * const disponibilidades = await prisma.disponibilidade.findMany()
    * ```
    */
  get disponibilidade(): Prisma.DisponibilidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.encaminhamento`: Exposes CRUD operations for the **Encaminhamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Encaminhamentos
    * const encaminhamentos = await prisma.encaminhamento.findMany()
    * ```
    */
  get encaminhamento(): Prisma.EncaminhamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atendimento`: Exposes CRUD operations for the **Atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.AtendimentoDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    MaeSolo: 'MaeSolo',
    Filho: 'Filho',
    Doador: 'Doador',
    ProfissionalApoio: 'ProfissionalApoio',
    Disponibilidade: 'Disponibilidade',
    Encaminhamento: 'Encaminhamento',
    Atendimento: 'Atendimento'
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
      modelProps: "usuario" | "maeSolo" | "filho" | "doador" | "profissionalApoio" | "disponibilidade" | "encaminhamento" | "atendimento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      MaeSolo: {
        payload: Prisma.$MaeSoloPayload<ExtArgs>
        fields: Prisma.MaeSoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaeSoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaeSoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>
          }
          findFirst: {
            args: Prisma.MaeSoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaeSoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>
          }
          findMany: {
            args: Prisma.MaeSoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>[]
          }
          create: {
            args: Prisma.MaeSoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>
          }
          createMany: {
            args: Prisma.MaeSoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaeSoloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>[]
          }
          delete: {
            args: Prisma.MaeSoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>
          }
          update: {
            args: Prisma.MaeSoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>
          }
          deleteMany: {
            args: Prisma.MaeSoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaeSoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaeSoloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>[]
          }
          upsert: {
            args: Prisma.MaeSoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaeSoloPayload>
          }
          aggregate: {
            args: Prisma.MaeSoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaeSolo>
          }
          groupBy: {
            args: Prisma.MaeSoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaeSoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaeSoloCountArgs<ExtArgs>
            result: $Utils.Optional<MaeSoloCountAggregateOutputType> | number
          }
        }
      }
      Filho: {
        payload: Prisma.$FilhoPayload<ExtArgs>
        fields: Prisma.FilhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>
          }
          findFirst: {
            args: Prisma.FilhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>
          }
          findMany: {
            args: Prisma.FilhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>[]
          }
          create: {
            args: Prisma.FilhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>
          }
          createMany: {
            args: Prisma.FilhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>[]
          }
          delete: {
            args: Prisma.FilhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>
          }
          update: {
            args: Prisma.FilhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>
          }
          deleteMany: {
            args: Prisma.FilhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>[]
          }
          upsert: {
            args: Prisma.FilhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilhoPayload>
          }
          aggregate: {
            args: Prisma.FilhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilho>
          }
          groupBy: {
            args: Prisma.FilhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilhoCountArgs<ExtArgs>
            result: $Utils.Optional<FilhoCountAggregateOutputType> | number
          }
        }
      }
      Doador: {
        payload: Prisma.$DoadorPayload<ExtArgs>
        fields: Prisma.DoadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>
          }
          findFirst: {
            args: Prisma.DoadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>
          }
          findMany: {
            args: Prisma.DoadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>[]
          }
          create: {
            args: Prisma.DoadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>
          }
          createMany: {
            args: Prisma.DoadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>[]
          }
          delete: {
            args: Prisma.DoadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>
          }
          update: {
            args: Prisma.DoadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>
          }
          deleteMany: {
            args: Prisma.DoadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>[]
          }
          upsert: {
            args: Prisma.DoadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoadorPayload>
          }
          aggregate: {
            args: Prisma.DoadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoador>
          }
          groupBy: {
            args: Prisma.DoadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoadorCountArgs<ExtArgs>
            result: $Utils.Optional<DoadorCountAggregateOutputType> | number
          }
        }
      }
      ProfissionalApoio: {
        payload: Prisma.$ProfissionalApoioPayload<ExtArgs>
        fields: Prisma.ProfissionalApoioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionalApoioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionalApoioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>
          }
          findFirst: {
            args: Prisma.ProfissionalApoioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionalApoioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>
          }
          findMany: {
            args: Prisma.ProfissionalApoioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>[]
          }
          create: {
            args: Prisma.ProfissionalApoioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>
          }
          createMany: {
            args: Prisma.ProfissionalApoioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfissionalApoioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>[]
          }
          delete: {
            args: Prisma.ProfissionalApoioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>
          }
          update: {
            args: Prisma.ProfissionalApoioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionalApoioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionalApoioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfissionalApoioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>[]
          }
          upsert: {
            args: Prisma.ProfissionalApoioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalApoioPayload>
          }
          aggregate: {
            args: Prisma.ProfissionalApoioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissionalApoio>
          }
          groupBy: {
            args: Prisma.ProfissionalApoioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalApoioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfissionalApoioCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalApoioCountAggregateOutputType> | number
          }
        }
      }
      Disponibilidade: {
        payload: Prisma.$DisponibilidadePayload<ExtArgs>
        fields: Prisma.DisponibilidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findFirst: {
            args: Prisma.DisponibilidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          findMany: {
            args: Prisma.DisponibilidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          create: {
            args: Prisma.DisponibilidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          createMany: {
            args: Prisma.DisponibilidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibilidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          delete: {
            args: Prisma.DisponibilidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          update: {
            args: Prisma.DisponibilidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          deleteMany: {
            args: Prisma.DisponibilidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>[]
          }
          upsert: {
            args: Prisma.DisponibilidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadePayload>
          }
          aggregate: {
            args: Prisma.DisponibilidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilidade>
          }
          groupBy: {
            args: Prisma.DisponibilidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilidadeCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadeCountAggregateOutputType> | number
          }
        }
      }
      Encaminhamento: {
        payload: Prisma.$EncaminhamentoPayload<ExtArgs>
        fields: Prisma.EncaminhamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EncaminhamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EncaminhamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>
          }
          findFirst: {
            args: Prisma.EncaminhamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EncaminhamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>
          }
          findMany: {
            args: Prisma.EncaminhamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>[]
          }
          create: {
            args: Prisma.EncaminhamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>
          }
          createMany: {
            args: Prisma.EncaminhamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EncaminhamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>[]
          }
          delete: {
            args: Prisma.EncaminhamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>
          }
          update: {
            args: Prisma.EncaminhamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>
          }
          deleteMany: {
            args: Prisma.EncaminhamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EncaminhamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EncaminhamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>[]
          }
          upsert: {
            args: Prisma.EncaminhamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncaminhamentoPayload>
          }
          aggregate: {
            args: Prisma.EncaminhamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEncaminhamento>
          }
          groupBy: {
            args: Prisma.EncaminhamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EncaminhamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EncaminhamentoCountArgs<ExtArgs>
            result: $Utils.Optional<EncaminhamentoCountAggregateOutputType> | number
          }
        }
      }
      Atendimento: {
        payload: Prisma.$AtendimentoPayload<ExtArgs>
        fields: Prisma.AtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findFirst: {
            args: Prisma.AtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findMany: {
            args: Prisma.AtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          create: {
            args: Prisma.AtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          createMany: {
            args: Prisma.AtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          delete: {
            args: Prisma.AtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          update: {
            args: Prisma.AtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.AtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.AtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.AtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    maeSolo?: MaeSoloOmit
    filho?: FilhoOmit
    doador?: DoadorOmit
    profissionalApoio?: ProfissionalApoioOmit
    disponibilidade?: DisponibilidadeOmit
    encaminhamento?: EncaminhamentoOmit
    atendimento?: AtendimentoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    MaeSolo: number
    Doador: number
    ProfissionalApoio: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MaeSolo?: boolean | UsuarioCountOutputTypeCountMaeSoloArgs
    Doador?: boolean | UsuarioCountOutputTypeCountDoadorArgs
    ProfissionalApoio?: boolean | UsuarioCountOutputTypeCountProfissionalApoioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMaeSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaeSoloWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDoadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoadorWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProfissionalApoioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalApoioWhereInput
  }


  /**
   * Count Type MaeSoloCountOutputType
   */

  export type MaeSoloCountOutputType = {
    Filho: number
    Encaminhamento: number
  }

  export type MaeSoloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Filho?: boolean | MaeSoloCountOutputTypeCountFilhoArgs
    Encaminhamento?: boolean | MaeSoloCountOutputTypeCountEncaminhamentoArgs
  }

  // Custom InputTypes
  /**
   * MaeSoloCountOutputType without action
   */
  export type MaeSoloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSoloCountOutputType
     */
    select?: MaeSoloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaeSoloCountOutputType without action
   */
  export type MaeSoloCountOutputTypeCountFilhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilhoWhereInput
  }

  /**
   * MaeSoloCountOutputType without action
   */
  export type MaeSoloCountOutputTypeCountEncaminhamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncaminhamentoWhereInput
  }


  /**
   * Count Type ProfissionalApoioCountOutputType
   */

  export type ProfissionalApoioCountOutputType = {
    Disponibilidade: number
    Encaminhamento: number
  }

  export type ProfissionalApoioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Disponibilidade?: boolean | ProfissionalApoioCountOutputTypeCountDisponibilidadeArgs
    Encaminhamento?: boolean | ProfissionalApoioCountOutputTypeCountEncaminhamentoArgs
  }

  // Custom InputTypes
  /**
   * ProfissionalApoioCountOutputType without action
   */
  export type ProfissionalApoioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoioCountOutputType
     */
    select?: ProfissionalApoioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionalApoioCountOutputType without action
   */
  export type ProfissionalApoioCountOutputTypeCountDisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
  }

  /**
   * ProfissionalApoioCountOutputType without action
   */
  export type ProfissionalApoioCountOutputTypeCountEncaminhamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncaminhamentoWhereInput
  }


  /**
   * Count Type EncaminhamentoCountOutputType
   */

  export type EncaminhamentoCountOutputType = {
    Atendimento: number
  }

  export type EncaminhamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Atendimento?: boolean | EncaminhamentoCountOutputTypeCountAtendimentoArgs
  }

  // Custom InputTypes
  /**
   * EncaminhamentoCountOutputType without action
   */
  export type EncaminhamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EncaminhamentoCountOutputType
     */
    select?: EncaminhamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EncaminhamentoCountOutputType without action
   */
  export type EncaminhamentoCountOutputTypeCountAtendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    documentoIdentificacao: string | null
    telefone: string | null
    email: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    documentoIdentificacao: string | null
    telefone: string | null
    email: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    documentoIdentificacao: number
    telefone: number
    email: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    documentoIdentificacao?: true
    telefone?: true
    email?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    documentoIdentificacao?: true
    telefone?: true
    email?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    documentoIdentificacao?: true
    telefone?: true
    email?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    documentoIdentificacao: string
    telefone: string | null
    email: string | null
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documentoIdentificacao?: boolean
    telefone?: boolean
    email?: boolean
    MaeSolo?: boolean | Usuario$MaeSoloArgs<ExtArgs>
    Doador?: boolean | Usuario$DoadorArgs<ExtArgs>
    ProfissionalApoio?: boolean | Usuario$ProfissionalApoioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documentoIdentificacao?: boolean
    telefone?: boolean
    email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    documentoIdentificacao?: boolean
    telefone?: boolean
    email?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    documentoIdentificacao?: boolean
    telefone?: boolean
    email?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "documentoIdentificacao" | "telefone" | "email", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MaeSolo?: boolean | Usuario$MaeSoloArgs<ExtArgs>
    Doador?: boolean | Usuario$DoadorArgs<ExtArgs>
    ProfissionalApoio?: boolean | Usuario$ProfissionalApoioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      MaeSolo: Prisma.$MaeSoloPayload<ExtArgs>[]
      Doador: Prisma.$DoadorPayload<ExtArgs>[]
      ProfissionalApoio: Prisma.$ProfissionalApoioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      documentoIdentificacao: string
      telefone: string | null
      email: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MaeSolo<T extends Usuario$MaeSoloArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$MaeSoloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Doador<T extends Usuario$DoadorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$DoadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProfissionalApoio<T extends Usuario$ProfissionalApoioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ProfissionalApoioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly documentoIdentificacao: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.MaeSolo
   */
  export type Usuario$MaeSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    where?: MaeSoloWhereInput
    orderBy?: MaeSoloOrderByWithRelationInput | MaeSoloOrderByWithRelationInput[]
    cursor?: MaeSoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaeSoloScalarFieldEnum | MaeSoloScalarFieldEnum[]
  }

  /**
   * Usuario.Doador
   */
  export type Usuario$DoadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    where?: DoadorWhereInput
    orderBy?: DoadorOrderByWithRelationInput | DoadorOrderByWithRelationInput[]
    cursor?: DoadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoadorScalarFieldEnum | DoadorScalarFieldEnum[]
  }

  /**
   * Usuario.ProfissionalApoio
   */
  export type Usuario$ProfissionalApoioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    where?: ProfissionalApoioWhereInput
    orderBy?: ProfissionalApoioOrderByWithRelationInput | ProfissionalApoioOrderByWithRelationInput[]
    cursor?: ProfissionalApoioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfissionalApoioScalarFieldEnum | ProfissionalApoioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model MaeSolo
   */

  export type AggregateMaeSolo = {
    _count: MaeSoloCountAggregateOutputType | null
    _avg: MaeSoloAvgAggregateOutputType | null
    _sum: MaeSoloSumAggregateOutputType | null
    _min: MaeSoloMinAggregateOutputType | null
    _max: MaeSoloMaxAggregateOutputType | null
  }

  export type MaeSoloAvgAggregateOutputType = {
    rendaMensal: number | null
  }

  export type MaeSoloSumAggregateOutputType = {
    rendaMensal: number | null
  }

  export type MaeSoloMinAggregateOutputType = {
    id: string | null
    data_nascimento: Date | null
    escolaridade: $Enums.Escolaridade | null
    endereco: string | null
    rendaMensal: number | null
    situacaoTrabalho: boolean | null
  }

  export type MaeSoloMaxAggregateOutputType = {
    id: string | null
    data_nascimento: Date | null
    escolaridade: $Enums.Escolaridade | null
    endereco: string | null
    rendaMensal: number | null
    situacaoTrabalho: boolean | null
  }

  export type MaeSoloCountAggregateOutputType = {
    id: number
    data_nascimento: number
    escolaridade: number
    endereco: number
    rendaMensal: number
    situacaoTrabalho: number
    _all: number
  }


  export type MaeSoloAvgAggregateInputType = {
    rendaMensal?: true
  }

  export type MaeSoloSumAggregateInputType = {
    rendaMensal?: true
  }

  export type MaeSoloMinAggregateInputType = {
    id?: true
    data_nascimento?: true
    escolaridade?: true
    endereco?: true
    rendaMensal?: true
    situacaoTrabalho?: true
  }

  export type MaeSoloMaxAggregateInputType = {
    id?: true
    data_nascimento?: true
    escolaridade?: true
    endereco?: true
    rendaMensal?: true
    situacaoTrabalho?: true
  }

  export type MaeSoloCountAggregateInputType = {
    id?: true
    data_nascimento?: true
    escolaridade?: true
    endereco?: true
    rendaMensal?: true
    situacaoTrabalho?: true
    _all?: true
  }

  export type MaeSoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaeSolo to aggregate.
     */
    where?: MaeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaeSolos to fetch.
     */
    orderBy?: MaeSoloOrderByWithRelationInput | MaeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaeSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaeSolos
    **/
    _count?: true | MaeSoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaeSoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaeSoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaeSoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaeSoloMaxAggregateInputType
  }

  export type GetMaeSoloAggregateType<T extends MaeSoloAggregateArgs> = {
        [P in keyof T & keyof AggregateMaeSolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaeSolo[P]>
      : GetScalarType<T[P], AggregateMaeSolo[P]>
  }




  export type MaeSoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaeSoloWhereInput
    orderBy?: MaeSoloOrderByWithAggregationInput | MaeSoloOrderByWithAggregationInput[]
    by: MaeSoloScalarFieldEnum[] | MaeSoloScalarFieldEnum
    having?: MaeSoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaeSoloCountAggregateInputType | true
    _avg?: MaeSoloAvgAggregateInputType
    _sum?: MaeSoloSumAggregateInputType
    _min?: MaeSoloMinAggregateInputType
    _max?: MaeSoloMaxAggregateInputType
  }

  export type MaeSoloGroupByOutputType = {
    id: string
    data_nascimento: Date
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    _count: MaeSoloCountAggregateOutputType | null
    _avg: MaeSoloAvgAggregateOutputType | null
    _sum: MaeSoloSumAggregateOutputType | null
    _min: MaeSoloMinAggregateOutputType | null
    _max: MaeSoloMaxAggregateOutputType | null
  }

  type GetMaeSoloGroupByPayload<T extends MaeSoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaeSoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaeSoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaeSoloGroupByOutputType[P]>
            : GetScalarType<T[P], MaeSoloGroupByOutputType[P]>
        }
      >
    >


  export type MaeSoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_nascimento?: boolean
    escolaridade?: boolean
    endereco?: boolean
    rendaMensal?: boolean
    situacaoTrabalho?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Filho?: boolean | MaeSolo$FilhoArgs<ExtArgs>
    Encaminhamento?: boolean | MaeSolo$EncaminhamentoArgs<ExtArgs>
    _count?: boolean | MaeSoloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maeSolo"]>

  export type MaeSoloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_nascimento?: boolean
    escolaridade?: boolean
    endereco?: boolean
    rendaMensal?: boolean
    situacaoTrabalho?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maeSolo"]>

  export type MaeSoloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_nascimento?: boolean
    escolaridade?: boolean
    endereco?: boolean
    rendaMensal?: boolean
    situacaoTrabalho?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maeSolo"]>

  export type MaeSoloSelectScalar = {
    id?: boolean
    data_nascimento?: boolean
    escolaridade?: boolean
    endereco?: boolean
    rendaMensal?: boolean
    situacaoTrabalho?: boolean
  }

  export type MaeSoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_nascimento" | "escolaridade" | "endereco" | "rendaMensal" | "situacaoTrabalho", ExtArgs["result"]["maeSolo"]>
  export type MaeSoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Filho?: boolean | MaeSolo$FilhoArgs<ExtArgs>
    Encaminhamento?: boolean | MaeSolo$EncaminhamentoArgs<ExtArgs>
    _count?: boolean | MaeSoloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaeSoloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MaeSoloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MaeSoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaeSolo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      Filho: Prisma.$FilhoPayload<ExtArgs>[]
      Encaminhamento: Prisma.$EncaminhamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data_nascimento: Date
      escolaridade: $Enums.Escolaridade
      endereco: string
      rendaMensal: number
      situacaoTrabalho: boolean
    }, ExtArgs["result"]["maeSolo"]>
    composites: {}
  }

  type MaeSoloGetPayload<S extends boolean | null | undefined | MaeSoloDefaultArgs> = $Result.GetResult<Prisma.$MaeSoloPayload, S>

  type MaeSoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaeSoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaeSoloCountAggregateInputType | true
    }

  export interface MaeSoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaeSolo'], meta: { name: 'MaeSolo' } }
    /**
     * Find zero or one MaeSolo that matches the filter.
     * @param {MaeSoloFindUniqueArgs} args - Arguments to find a MaeSolo
     * @example
     * // Get one MaeSolo
     * const maeSolo = await prisma.maeSolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaeSoloFindUniqueArgs>(args: SelectSubset<T, MaeSoloFindUniqueArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaeSolo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaeSoloFindUniqueOrThrowArgs} args - Arguments to find a MaeSolo
     * @example
     * // Get one MaeSolo
     * const maeSolo = await prisma.maeSolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaeSoloFindUniqueOrThrowArgs>(args: SelectSubset<T, MaeSoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaeSolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloFindFirstArgs} args - Arguments to find a MaeSolo
     * @example
     * // Get one MaeSolo
     * const maeSolo = await prisma.maeSolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaeSoloFindFirstArgs>(args?: SelectSubset<T, MaeSoloFindFirstArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaeSolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloFindFirstOrThrowArgs} args - Arguments to find a MaeSolo
     * @example
     * // Get one MaeSolo
     * const maeSolo = await prisma.maeSolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaeSoloFindFirstOrThrowArgs>(args?: SelectSubset<T, MaeSoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaeSolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaeSolos
     * const maeSolos = await prisma.maeSolo.findMany()
     * 
     * // Get first 10 MaeSolos
     * const maeSolos = await prisma.maeSolo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maeSoloWithIdOnly = await prisma.maeSolo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaeSoloFindManyArgs>(args?: SelectSubset<T, MaeSoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaeSolo.
     * @param {MaeSoloCreateArgs} args - Arguments to create a MaeSolo.
     * @example
     * // Create one MaeSolo
     * const MaeSolo = await prisma.maeSolo.create({
     *   data: {
     *     // ... data to create a MaeSolo
     *   }
     * })
     * 
     */
    create<T extends MaeSoloCreateArgs>(args: SelectSubset<T, MaeSoloCreateArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaeSolos.
     * @param {MaeSoloCreateManyArgs} args - Arguments to create many MaeSolos.
     * @example
     * // Create many MaeSolos
     * const maeSolo = await prisma.maeSolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaeSoloCreateManyArgs>(args?: SelectSubset<T, MaeSoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaeSolos and returns the data saved in the database.
     * @param {MaeSoloCreateManyAndReturnArgs} args - Arguments to create many MaeSolos.
     * @example
     * // Create many MaeSolos
     * const maeSolo = await prisma.maeSolo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaeSolos and only return the `id`
     * const maeSoloWithIdOnly = await prisma.maeSolo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaeSoloCreateManyAndReturnArgs>(args?: SelectSubset<T, MaeSoloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaeSolo.
     * @param {MaeSoloDeleteArgs} args - Arguments to delete one MaeSolo.
     * @example
     * // Delete one MaeSolo
     * const MaeSolo = await prisma.maeSolo.delete({
     *   where: {
     *     // ... filter to delete one MaeSolo
     *   }
     * })
     * 
     */
    delete<T extends MaeSoloDeleteArgs>(args: SelectSubset<T, MaeSoloDeleteArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaeSolo.
     * @param {MaeSoloUpdateArgs} args - Arguments to update one MaeSolo.
     * @example
     * // Update one MaeSolo
     * const maeSolo = await prisma.maeSolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaeSoloUpdateArgs>(args: SelectSubset<T, MaeSoloUpdateArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaeSolos.
     * @param {MaeSoloDeleteManyArgs} args - Arguments to filter MaeSolos to delete.
     * @example
     * // Delete a few MaeSolos
     * const { count } = await prisma.maeSolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaeSoloDeleteManyArgs>(args?: SelectSubset<T, MaeSoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaeSolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaeSolos
     * const maeSolo = await prisma.maeSolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaeSoloUpdateManyArgs>(args: SelectSubset<T, MaeSoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaeSolos and returns the data updated in the database.
     * @param {MaeSoloUpdateManyAndReturnArgs} args - Arguments to update many MaeSolos.
     * @example
     * // Update many MaeSolos
     * const maeSolo = await prisma.maeSolo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaeSolos and only return the `id`
     * const maeSoloWithIdOnly = await prisma.maeSolo.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaeSoloUpdateManyAndReturnArgs>(args: SelectSubset<T, MaeSoloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaeSolo.
     * @param {MaeSoloUpsertArgs} args - Arguments to update or create a MaeSolo.
     * @example
     * // Update or create a MaeSolo
     * const maeSolo = await prisma.maeSolo.upsert({
     *   create: {
     *     // ... data to create a MaeSolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaeSolo we want to update
     *   }
     * })
     */
    upsert<T extends MaeSoloUpsertArgs>(args: SelectSubset<T, MaeSoloUpsertArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaeSolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloCountArgs} args - Arguments to filter MaeSolos to count.
     * @example
     * // Count the number of MaeSolos
     * const count = await prisma.maeSolo.count({
     *   where: {
     *     // ... the filter for the MaeSolos we want to count
     *   }
     * })
    **/
    count<T extends MaeSoloCountArgs>(
      args?: Subset<T, MaeSoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaeSoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaeSolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaeSoloAggregateArgs>(args: Subset<T, MaeSoloAggregateArgs>): Prisma.PrismaPromise<GetMaeSoloAggregateType<T>>

    /**
     * Group by MaeSolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaeSoloGroupByArgs} args - Group by arguments.
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
      T extends MaeSoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaeSoloGroupByArgs['orderBy'] }
        : { orderBy?: MaeSoloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaeSoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaeSoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaeSolo model
   */
  readonly fields: MaeSoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaeSolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaeSoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Filho<T extends MaeSolo$FilhoArgs<ExtArgs> = {}>(args?: Subset<T, MaeSolo$FilhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Encaminhamento<T extends MaeSolo$EncaminhamentoArgs<ExtArgs> = {}>(args?: Subset<T, MaeSolo$EncaminhamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MaeSolo model
   */
  interface MaeSoloFieldRefs {
    readonly id: FieldRef<"MaeSolo", 'String'>
    readonly data_nascimento: FieldRef<"MaeSolo", 'DateTime'>
    readonly escolaridade: FieldRef<"MaeSolo", 'Escolaridade'>
    readonly endereco: FieldRef<"MaeSolo", 'String'>
    readonly rendaMensal: FieldRef<"MaeSolo", 'Int'>
    readonly situacaoTrabalho: FieldRef<"MaeSolo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MaeSolo findUnique
   */
  export type MaeSoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * Filter, which MaeSolo to fetch.
     */
    where: MaeSoloWhereUniqueInput
  }

  /**
   * MaeSolo findUniqueOrThrow
   */
  export type MaeSoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * Filter, which MaeSolo to fetch.
     */
    where: MaeSoloWhereUniqueInput
  }

  /**
   * MaeSolo findFirst
   */
  export type MaeSoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * Filter, which MaeSolo to fetch.
     */
    where?: MaeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaeSolos to fetch.
     */
    orderBy?: MaeSoloOrderByWithRelationInput | MaeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaeSolos.
     */
    cursor?: MaeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaeSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaeSolos.
     */
    distinct?: MaeSoloScalarFieldEnum | MaeSoloScalarFieldEnum[]
  }

  /**
   * MaeSolo findFirstOrThrow
   */
  export type MaeSoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * Filter, which MaeSolo to fetch.
     */
    where?: MaeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaeSolos to fetch.
     */
    orderBy?: MaeSoloOrderByWithRelationInput | MaeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaeSolos.
     */
    cursor?: MaeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaeSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaeSolos.
     */
    distinct?: MaeSoloScalarFieldEnum | MaeSoloScalarFieldEnum[]
  }

  /**
   * MaeSolo findMany
   */
  export type MaeSoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * Filter, which MaeSolos to fetch.
     */
    where?: MaeSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaeSolos to fetch.
     */
    orderBy?: MaeSoloOrderByWithRelationInput | MaeSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaeSolos.
     */
    cursor?: MaeSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaeSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaeSolos.
     */
    skip?: number
    distinct?: MaeSoloScalarFieldEnum | MaeSoloScalarFieldEnum[]
  }

  /**
   * MaeSolo create
   */
  export type MaeSoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * The data needed to create a MaeSolo.
     */
    data: XOR<MaeSoloCreateInput, MaeSoloUncheckedCreateInput>
  }

  /**
   * MaeSolo createMany
   */
  export type MaeSoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaeSolos.
     */
    data: MaeSoloCreateManyInput | MaeSoloCreateManyInput[]
  }

  /**
   * MaeSolo createManyAndReturn
   */
  export type MaeSoloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * The data used to create many MaeSolos.
     */
    data: MaeSoloCreateManyInput | MaeSoloCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaeSolo update
   */
  export type MaeSoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * The data needed to update a MaeSolo.
     */
    data: XOR<MaeSoloUpdateInput, MaeSoloUncheckedUpdateInput>
    /**
     * Choose, which MaeSolo to update.
     */
    where: MaeSoloWhereUniqueInput
  }

  /**
   * MaeSolo updateMany
   */
  export type MaeSoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaeSolos.
     */
    data: XOR<MaeSoloUpdateManyMutationInput, MaeSoloUncheckedUpdateManyInput>
    /**
     * Filter which MaeSolos to update
     */
    where?: MaeSoloWhereInput
    /**
     * Limit how many MaeSolos to update.
     */
    limit?: number
  }

  /**
   * MaeSolo updateManyAndReturn
   */
  export type MaeSoloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * The data used to update MaeSolos.
     */
    data: XOR<MaeSoloUpdateManyMutationInput, MaeSoloUncheckedUpdateManyInput>
    /**
     * Filter which MaeSolos to update
     */
    where?: MaeSoloWhereInput
    /**
     * Limit how many MaeSolos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaeSolo upsert
   */
  export type MaeSoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * The filter to search for the MaeSolo to update in case it exists.
     */
    where: MaeSoloWhereUniqueInput
    /**
     * In case the MaeSolo found by the `where` argument doesn't exist, create a new MaeSolo with this data.
     */
    create: XOR<MaeSoloCreateInput, MaeSoloUncheckedCreateInput>
    /**
     * In case the MaeSolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaeSoloUpdateInput, MaeSoloUncheckedUpdateInput>
  }

  /**
   * MaeSolo delete
   */
  export type MaeSoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
    /**
     * Filter which MaeSolo to delete.
     */
    where: MaeSoloWhereUniqueInput
  }

  /**
   * MaeSolo deleteMany
   */
  export type MaeSoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaeSolos to delete
     */
    where?: MaeSoloWhereInput
    /**
     * Limit how many MaeSolos to delete.
     */
    limit?: number
  }

  /**
   * MaeSolo.Filho
   */
  export type MaeSolo$FilhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    where?: FilhoWhereInput
    orderBy?: FilhoOrderByWithRelationInput | FilhoOrderByWithRelationInput[]
    cursor?: FilhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilhoScalarFieldEnum | FilhoScalarFieldEnum[]
  }

  /**
   * MaeSolo.Encaminhamento
   */
  export type MaeSolo$EncaminhamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    where?: EncaminhamentoWhereInput
    orderBy?: EncaminhamentoOrderByWithRelationInput | EncaminhamentoOrderByWithRelationInput[]
    cursor?: EncaminhamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncaminhamentoScalarFieldEnum | EncaminhamentoScalarFieldEnum[]
  }

  /**
   * MaeSolo without action
   */
  export type MaeSoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaeSolo
     */
    select?: MaeSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaeSolo
     */
    omit?: MaeSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaeSoloInclude<ExtArgs> | null
  }


  /**
   * Model Filho
   */

  export type AggregateFilho = {
    _count: FilhoCountAggregateOutputType | null
    _min: FilhoMinAggregateOutputType | null
    _max: FilhoMaxAggregateOutputType | null
  }

  export type FilhoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    data_nascimento: Date | null
    idMae: string | null
  }

  export type FilhoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    data_nascimento: Date | null
    idMae: string | null
  }

  export type FilhoCountAggregateOutputType = {
    id: number
    nome: number
    data_nascimento: number
    idMae: number
    _all: number
  }


  export type FilhoMinAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    idMae?: true
  }

  export type FilhoMaxAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    idMae?: true
  }

  export type FilhoCountAggregateInputType = {
    id?: true
    nome?: true
    data_nascimento?: true
    idMae?: true
    _all?: true
  }

  export type FilhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filho to aggregate.
     */
    where?: FilhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filhos to fetch.
     */
    orderBy?: FilhoOrderByWithRelationInput | FilhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filhos
    **/
    _count?: true | FilhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilhoMaxAggregateInputType
  }

  export type GetFilhoAggregateType<T extends FilhoAggregateArgs> = {
        [P in keyof T & keyof AggregateFilho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilho[P]>
      : GetScalarType<T[P], AggregateFilho[P]>
  }




  export type FilhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilhoWhereInput
    orderBy?: FilhoOrderByWithAggregationInput | FilhoOrderByWithAggregationInput[]
    by: FilhoScalarFieldEnum[] | FilhoScalarFieldEnum
    having?: FilhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilhoCountAggregateInputType | true
    _min?: FilhoMinAggregateInputType
    _max?: FilhoMaxAggregateInputType
  }

  export type FilhoGroupByOutputType = {
    id: string
    nome: string
    data_nascimento: Date
    idMae: string
    _count: FilhoCountAggregateOutputType | null
    _min: FilhoMinAggregateOutputType | null
    _max: FilhoMaxAggregateOutputType | null
  }

  type GetFilhoGroupByPayload<T extends FilhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilhoGroupByOutputType[P]>
            : GetScalarType<T[P], FilhoGroupByOutputType[P]>
        }
      >
    >


  export type FilhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    idMae?: boolean
    mae?: boolean | MaeSoloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filho"]>

  export type FilhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    idMae?: boolean
    mae?: boolean | MaeSoloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filho"]>

  export type FilhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    idMae?: boolean
    mae?: boolean | MaeSoloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filho"]>

  export type FilhoSelectScalar = {
    id?: boolean
    nome?: boolean
    data_nascimento?: boolean
    idMae?: boolean
  }

  export type FilhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data_nascimento" | "idMae", ExtArgs["result"]["filho"]>
  export type FilhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mae?: boolean | MaeSoloDefaultArgs<ExtArgs>
  }
  export type FilhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mae?: boolean | MaeSoloDefaultArgs<ExtArgs>
  }
  export type FilhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mae?: boolean | MaeSoloDefaultArgs<ExtArgs>
  }

  export type $FilhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filho"
    objects: {
      mae: Prisma.$MaeSoloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      data_nascimento: Date
      idMae: string
    }, ExtArgs["result"]["filho"]>
    composites: {}
  }

  type FilhoGetPayload<S extends boolean | null | undefined | FilhoDefaultArgs> = $Result.GetResult<Prisma.$FilhoPayload, S>

  type FilhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilhoCountAggregateInputType | true
    }

  export interface FilhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filho'], meta: { name: 'Filho' } }
    /**
     * Find zero or one Filho that matches the filter.
     * @param {FilhoFindUniqueArgs} args - Arguments to find a Filho
     * @example
     * // Get one Filho
     * const filho = await prisma.filho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilhoFindUniqueArgs>(args: SelectSubset<T, FilhoFindUniqueArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilhoFindUniqueOrThrowArgs} args - Arguments to find a Filho
     * @example
     * // Get one Filho
     * const filho = await prisma.filho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilhoFindUniqueOrThrowArgs>(args: SelectSubset<T, FilhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoFindFirstArgs} args - Arguments to find a Filho
     * @example
     * // Get one Filho
     * const filho = await prisma.filho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilhoFindFirstArgs>(args?: SelectSubset<T, FilhoFindFirstArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoFindFirstOrThrowArgs} args - Arguments to find a Filho
     * @example
     * // Get one Filho
     * const filho = await prisma.filho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilhoFindFirstOrThrowArgs>(args?: SelectSubset<T, FilhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filhos
     * const filhos = await prisma.filho.findMany()
     * 
     * // Get first 10 Filhos
     * const filhos = await prisma.filho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filhoWithIdOnly = await prisma.filho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilhoFindManyArgs>(args?: SelectSubset<T, FilhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filho.
     * @param {FilhoCreateArgs} args - Arguments to create a Filho.
     * @example
     * // Create one Filho
     * const Filho = await prisma.filho.create({
     *   data: {
     *     // ... data to create a Filho
     *   }
     * })
     * 
     */
    create<T extends FilhoCreateArgs>(args: SelectSubset<T, FilhoCreateArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filhos.
     * @param {FilhoCreateManyArgs} args - Arguments to create many Filhos.
     * @example
     * // Create many Filhos
     * const filho = await prisma.filho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilhoCreateManyArgs>(args?: SelectSubset<T, FilhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filhos and returns the data saved in the database.
     * @param {FilhoCreateManyAndReturnArgs} args - Arguments to create many Filhos.
     * @example
     * // Create many Filhos
     * const filho = await prisma.filho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filhos and only return the `id`
     * const filhoWithIdOnly = await prisma.filho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilhoCreateManyAndReturnArgs>(args?: SelectSubset<T, FilhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filho.
     * @param {FilhoDeleteArgs} args - Arguments to delete one Filho.
     * @example
     * // Delete one Filho
     * const Filho = await prisma.filho.delete({
     *   where: {
     *     // ... filter to delete one Filho
     *   }
     * })
     * 
     */
    delete<T extends FilhoDeleteArgs>(args: SelectSubset<T, FilhoDeleteArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filho.
     * @param {FilhoUpdateArgs} args - Arguments to update one Filho.
     * @example
     * // Update one Filho
     * const filho = await prisma.filho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilhoUpdateArgs>(args: SelectSubset<T, FilhoUpdateArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filhos.
     * @param {FilhoDeleteManyArgs} args - Arguments to filter Filhos to delete.
     * @example
     * // Delete a few Filhos
     * const { count } = await prisma.filho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilhoDeleteManyArgs>(args?: SelectSubset<T, FilhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filhos
     * const filho = await prisma.filho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilhoUpdateManyArgs>(args: SelectSubset<T, FilhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filhos and returns the data updated in the database.
     * @param {FilhoUpdateManyAndReturnArgs} args - Arguments to update many Filhos.
     * @example
     * // Update many Filhos
     * const filho = await prisma.filho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filhos and only return the `id`
     * const filhoWithIdOnly = await prisma.filho.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilhoUpdateManyAndReturnArgs>(args: SelectSubset<T, FilhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filho.
     * @param {FilhoUpsertArgs} args - Arguments to update or create a Filho.
     * @example
     * // Update or create a Filho
     * const filho = await prisma.filho.upsert({
     *   create: {
     *     // ... data to create a Filho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filho we want to update
     *   }
     * })
     */
    upsert<T extends FilhoUpsertArgs>(args: SelectSubset<T, FilhoUpsertArgs<ExtArgs>>): Prisma__FilhoClient<$Result.GetResult<Prisma.$FilhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoCountArgs} args - Arguments to filter Filhos to count.
     * @example
     * // Count the number of Filhos
     * const count = await prisma.filho.count({
     *   where: {
     *     // ... the filter for the Filhos we want to count
     *   }
     * })
    **/
    count<T extends FilhoCountArgs>(
      args?: Subset<T, FilhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilhoAggregateArgs>(args: Subset<T, FilhoAggregateArgs>): Prisma.PrismaPromise<GetFilhoAggregateType<T>>

    /**
     * Group by Filho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilhoGroupByArgs} args - Group by arguments.
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
      T extends FilhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilhoGroupByArgs['orderBy'] }
        : { orderBy?: FilhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filho model
   */
  readonly fields: FilhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mae<T extends MaeSoloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaeSoloDefaultArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Filho model
   */
  interface FilhoFieldRefs {
    readonly id: FieldRef<"Filho", 'String'>
    readonly nome: FieldRef<"Filho", 'String'>
    readonly data_nascimento: FieldRef<"Filho", 'DateTime'>
    readonly idMae: FieldRef<"Filho", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Filho findUnique
   */
  export type FilhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * Filter, which Filho to fetch.
     */
    where: FilhoWhereUniqueInput
  }

  /**
   * Filho findUniqueOrThrow
   */
  export type FilhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * Filter, which Filho to fetch.
     */
    where: FilhoWhereUniqueInput
  }

  /**
   * Filho findFirst
   */
  export type FilhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * Filter, which Filho to fetch.
     */
    where?: FilhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filhos to fetch.
     */
    orderBy?: FilhoOrderByWithRelationInput | FilhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filhos.
     */
    cursor?: FilhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filhos.
     */
    distinct?: FilhoScalarFieldEnum | FilhoScalarFieldEnum[]
  }

  /**
   * Filho findFirstOrThrow
   */
  export type FilhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * Filter, which Filho to fetch.
     */
    where?: FilhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filhos to fetch.
     */
    orderBy?: FilhoOrderByWithRelationInput | FilhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filhos.
     */
    cursor?: FilhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filhos.
     */
    distinct?: FilhoScalarFieldEnum | FilhoScalarFieldEnum[]
  }

  /**
   * Filho findMany
   */
  export type FilhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * Filter, which Filhos to fetch.
     */
    where?: FilhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filhos to fetch.
     */
    orderBy?: FilhoOrderByWithRelationInput | FilhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filhos.
     */
    cursor?: FilhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filhos.
     */
    skip?: number
    distinct?: FilhoScalarFieldEnum | FilhoScalarFieldEnum[]
  }

  /**
   * Filho create
   */
  export type FilhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * The data needed to create a Filho.
     */
    data: XOR<FilhoCreateInput, FilhoUncheckedCreateInput>
  }

  /**
   * Filho createMany
   */
  export type FilhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filhos.
     */
    data: FilhoCreateManyInput | FilhoCreateManyInput[]
  }

  /**
   * Filho createManyAndReturn
   */
  export type FilhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * The data used to create many Filhos.
     */
    data: FilhoCreateManyInput | FilhoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filho update
   */
  export type FilhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * The data needed to update a Filho.
     */
    data: XOR<FilhoUpdateInput, FilhoUncheckedUpdateInput>
    /**
     * Choose, which Filho to update.
     */
    where: FilhoWhereUniqueInput
  }

  /**
   * Filho updateMany
   */
  export type FilhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filhos.
     */
    data: XOR<FilhoUpdateManyMutationInput, FilhoUncheckedUpdateManyInput>
    /**
     * Filter which Filhos to update
     */
    where?: FilhoWhereInput
    /**
     * Limit how many Filhos to update.
     */
    limit?: number
  }

  /**
   * Filho updateManyAndReturn
   */
  export type FilhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * The data used to update Filhos.
     */
    data: XOR<FilhoUpdateManyMutationInput, FilhoUncheckedUpdateManyInput>
    /**
     * Filter which Filhos to update
     */
    where?: FilhoWhereInput
    /**
     * Limit how many Filhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filho upsert
   */
  export type FilhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * The filter to search for the Filho to update in case it exists.
     */
    where: FilhoWhereUniqueInput
    /**
     * In case the Filho found by the `where` argument doesn't exist, create a new Filho with this data.
     */
    create: XOR<FilhoCreateInput, FilhoUncheckedCreateInput>
    /**
     * In case the Filho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilhoUpdateInput, FilhoUncheckedUpdateInput>
  }

  /**
   * Filho delete
   */
  export type FilhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
    /**
     * Filter which Filho to delete.
     */
    where: FilhoWhereUniqueInput
  }

  /**
   * Filho deleteMany
   */
  export type FilhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filhos to delete
     */
    where?: FilhoWhereInput
    /**
     * Limit how many Filhos to delete.
     */
    limit?: number
  }

  /**
   * Filho without action
   */
  export type FilhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filho
     */
    select?: FilhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filho
     */
    omit?: FilhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilhoInclude<ExtArgs> | null
  }


  /**
   * Model Doador
   */

  export type AggregateDoador = {
    _count: DoadorCountAggregateOutputType | null
    _min: DoadorMinAggregateOutputType | null
    _max: DoadorMaxAggregateOutputType | null
  }

  export type DoadorMinAggregateOutputType = {
    id: string | null
    tipo_doador: string | null
  }

  export type DoadorMaxAggregateOutputType = {
    id: string | null
    tipo_doador: string | null
  }

  export type DoadorCountAggregateOutputType = {
    id: number
    tipo_doador: number
    _all: number
  }


  export type DoadorMinAggregateInputType = {
    id?: true
    tipo_doador?: true
  }

  export type DoadorMaxAggregateInputType = {
    id?: true
    tipo_doador?: true
  }

  export type DoadorCountAggregateInputType = {
    id?: true
    tipo_doador?: true
    _all?: true
  }

  export type DoadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doador to aggregate.
     */
    where?: DoadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doadors to fetch.
     */
    orderBy?: DoadorOrderByWithRelationInput | DoadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doadors
    **/
    _count?: true | DoadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoadorMaxAggregateInputType
  }

  export type GetDoadorAggregateType<T extends DoadorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoador[P]>
      : GetScalarType<T[P], AggregateDoador[P]>
  }




  export type DoadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoadorWhereInput
    orderBy?: DoadorOrderByWithAggregationInput | DoadorOrderByWithAggregationInput[]
    by: DoadorScalarFieldEnum[] | DoadorScalarFieldEnum
    having?: DoadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoadorCountAggregateInputType | true
    _min?: DoadorMinAggregateInputType
    _max?: DoadorMaxAggregateInputType
  }

  export type DoadorGroupByOutputType = {
    id: string
    tipo_doador: string
    _count: DoadorCountAggregateOutputType | null
    _min: DoadorMinAggregateOutputType | null
    _max: DoadorMaxAggregateOutputType | null
  }

  type GetDoadorGroupByPayload<T extends DoadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoadorGroupByOutputType[P]>
            : GetScalarType<T[P], DoadorGroupByOutputType[P]>
        }
      >
    >


  export type DoadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_doador?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doador"]>

  export type DoadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_doador?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doador"]>

  export type DoadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_doador?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doador"]>

  export type DoadorSelectScalar = {
    id?: boolean
    tipo_doador?: boolean
  }

  export type DoadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo_doador", ExtArgs["result"]["doador"]>
  export type DoadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type DoadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type DoadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $DoadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doador"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo_doador: string
    }, ExtArgs["result"]["doador"]>
    composites: {}
  }

  type DoadorGetPayload<S extends boolean | null | undefined | DoadorDefaultArgs> = $Result.GetResult<Prisma.$DoadorPayload, S>

  type DoadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoadorCountAggregateInputType | true
    }

  export interface DoadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doador'], meta: { name: 'Doador' } }
    /**
     * Find zero or one Doador that matches the filter.
     * @param {DoadorFindUniqueArgs} args - Arguments to find a Doador
     * @example
     * // Get one Doador
     * const doador = await prisma.doador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoadorFindUniqueArgs>(args: SelectSubset<T, DoadorFindUniqueArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoadorFindUniqueOrThrowArgs} args - Arguments to find a Doador
     * @example
     * // Get one Doador
     * const doador = await prisma.doador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoadorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorFindFirstArgs} args - Arguments to find a Doador
     * @example
     * // Get one Doador
     * const doador = await prisma.doador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoadorFindFirstArgs>(args?: SelectSubset<T, DoadorFindFirstArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorFindFirstOrThrowArgs} args - Arguments to find a Doador
     * @example
     * // Get one Doador
     * const doador = await prisma.doador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoadorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doadors
     * const doadors = await prisma.doador.findMany()
     * 
     * // Get first 10 Doadors
     * const doadors = await prisma.doador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doadorWithIdOnly = await prisma.doador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoadorFindManyArgs>(args?: SelectSubset<T, DoadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doador.
     * @param {DoadorCreateArgs} args - Arguments to create a Doador.
     * @example
     * // Create one Doador
     * const Doador = await prisma.doador.create({
     *   data: {
     *     // ... data to create a Doador
     *   }
     * })
     * 
     */
    create<T extends DoadorCreateArgs>(args: SelectSubset<T, DoadorCreateArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doadors.
     * @param {DoadorCreateManyArgs} args - Arguments to create many Doadors.
     * @example
     * // Create many Doadors
     * const doador = await prisma.doador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoadorCreateManyArgs>(args?: SelectSubset<T, DoadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doadors and returns the data saved in the database.
     * @param {DoadorCreateManyAndReturnArgs} args - Arguments to create many Doadors.
     * @example
     * // Create many Doadors
     * const doador = await prisma.doador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doadors and only return the `id`
     * const doadorWithIdOnly = await prisma.doador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoadorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doador.
     * @param {DoadorDeleteArgs} args - Arguments to delete one Doador.
     * @example
     * // Delete one Doador
     * const Doador = await prisma.doador.delete({
     *   where: {
     *     // ... filter to delete one Doador
     *   }
     * })
     * 
     */
    delete<T extends DoadorDeleteArgs>(args: SelectSubset<T, DoadorDeleteArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doador.
     * @param {DoadorUpdateArgs} args - Arguments to update one Doador.
     * @example
     * // Update one Doador
     * const doador = await prisma.doador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoadorUpdateArgs>(args: SelectSubset<T, DoadorUpdateArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doadors.
     * @param {DoadorDeleteManyArgs} args - Arguments to filter Doadors to delete.
     * @example
     * // Delete a few Doadors
     * const { count } = await prisma.doador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoadorDeleteManyArgs>(args?: SelectSubset<T, DoadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doadors
     * const doador = await prisma.doador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoadorUpdateManyArgs>(args: SelectSubset<T, DoadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doadors and returns the data updated in the database.
     * @param {DoadorUpdateManyAndReturnArgs} args - Arguments to update many Doadors.
     * @example
     * // Update many Doadors
     * const doador = await prisma.doador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doadors and only return the `id`
     * const doadorWithIdOnly = await prisma.doador.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoadorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doador.
     * @param {DoadorUpsertArgs} args - Arguments to update or create a Doador.
     * @example
     * // Update or create a Doador
     * const doador = await prisma.doador.upsert({
     *   create: {
     *     // ... data to create a Doador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doador we want to update
     *   }
     * })
     */
    upsert<T extends DoadorUpsertArgs>(args: SelectSubset<T, DoadorUpsertArgs<ExtArgs>>): Prisma__DoadorClient<$Result.GetResult<Prisma.$DoadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorCountArgs} args - Arguments to filter Doadors to count.
     * @example
     * // Count the number of Doadors
     * const count = await prisma.doador.count({
     *   where: {
     *     // ... the filter for the Doadors we want to count
     *   }
     * })
    **/
    count<T extends DoadorCountArgs>(
      args?: Subset<T, DoadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoadorAggregateArgs>(args: Subset<T, DoadorAggregateArgs>): Prisma.PrismaPromise<GetDoadorAggregateType<T>>

    /**
     * Group by Doador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoadorGroupByArgs} args - Group by arguments.
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
      T extends DoadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoadorGroupByArgs['orderBy'] }
        : { orderBy?: DoadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doador model
   */
  readonly fields: DoadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Doador model
   */
  interface DoadorFieldRefs {
    readonly id: FieldRef<"Doador", 'String'>
    readonly tipo_doador: FieldRef<"Doador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doador findUnique
   */
  export type DoadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * Filter, which Doador to fetch.
     */
    where: DoadorWhereUniqueInput
  }

  /**
   * Doador findUniqueOrThrow
   */
  export type DoadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * Filter, which Doador to fetch.
     */
    where: DoadorWhereUniqueInput
  }

  /**
   * Doador findFirst
   */
  export type DoadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * Filter, which Doador to fetch.
     */
    where?: DoadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doadors to fetch.
     */
    orderBy?: DoadorOrderByWithRelationInput | DoadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doadors.
     */
    cursor?: DoadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doadors.
     */
    distinct?: DoadorScalarFieldEnum | DoadorScalarFieldEnum[]
  }

  /**
   * Doador findFirstOrThrow
   */
  export type DoadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * Filter, which Doador to fetch.
     */
    where?: DoadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doadors to fetch.
     */
    orderBy?: DoadorOrderByWithRelationInput | DoadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doadors.
     */
    cursor?: DoadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doadors.
     */
    distinct?: DoadorScalarFieldEnum | DoadorScalarFieldEnum[]
  }

  /**
   * Doador findMany
   */
  export type DoadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * Filter, which Doadors to fetch.
     */
    where?: DoadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doadors to fetch.
     */
    orderBy?: DoadorOrderByWithRelationInput | DoadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doadors.
     */
    cursor?: DoadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doadors.
     */
    skip?: number
    distinct?: DoadorScalarFieldEnum | DoadorScalarFieldEnum[]
  }

  /**
   * Doador create
   */
  export type DoadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doador.
     */
    data: XOR<DoadorCreateInput, DoadorUncheckedCreateInput>
  }

  /**
   * Doador createMany
   */
  export type DoadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doadors.
     */
    data: DoadorCreateManyInput | DoadorCreateManyInput[]
  }

  /**
   * Doador createManyAndReturn
   */
  export type DoadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * The data used to create many Doadors.
     */
    data: DoadorCreateManyInput | DoadorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doador update
   */
  export type DoadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doador.
     */
    data: XOR<DoadorUpdateInput, DoadorUncheckedUpdateInput>
    /**
     * Choose, which Doador to update.
     */
    where: DoadorWhereUniqueInput
  }

  /**
   * Doador updateMany
   */
  export type DoadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doadors.
     */
    data: XOR<DoadorUpdateManyMutationInput, DoadorUncheckedUpdateManyInput>
    /**
     * Filter which Doadors to update
     */
    where?: DoadorWhereInput
    /**
     * Limit how many Doadors to update.
     */
    limit?: number
  }

  /**
   * Doador updateManyAndReturn
   */
  export type DoadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * The data used to update Doadors.
     */
    data: XOR<DoadorUpdateManyMutationInput, DoadorUncheckedUpdateManyInput>
    /**
     * Filter which Doadors to update
     */
    where?: DoadorWhereInput
    /**
     * Limit how many Doadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doador upsert
   */
  export type DoadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doador to update in case it exists.
     */
    where: DoadorWhereUniqueInput
    /**
     * In case the Doador found by the `where` argument doesn't exist, create a new Doador with this data.
     */
    create: XOR<DoadorCreateInput, DoadorUncheckedCreateInput>
    /**
     * In case the Doador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoadorUpdateInput, DoadorUncheckedUpdateInput>
  }

  /**
   * Doador delete
   */
  export type DoadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
    /**
     * Filter which Doador to delete.
     */
    where: DoadorWhereUniqueInput
  }

  /**
   * Doador deleteMany
   */
  export type DoadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doadors to delete
     */
    where?: DoadorWhereInput
    /**
     * Limit how many Doadors to delete.
     */
    limit?: number
  }

  /**
   * Doador without action
   */
  export type DoadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doador
     */
    select?: DoadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doador
     */
    omit?: DoadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoadorInclude<ExtArgs> | null
  }


  /**
   * Model ProfissionalApoio
   */

  export type AggregateProfissionalApoio = {
    _count: ProfissionalApoioCountAggregateOutputType | null
    _min: ProfissionalApoioMinAggregateOutputType | null
    _max: ProfissionalApoioMaxAggregateOutputType | null
  }

  export type ProfissionalApoioMinAggregateOutputType = {
    id: string | null
    areaAtuacao: string | null
  }

  export type ProfissionalApoioMaxAggregateOutputType = {
    id: string | null
    areaAtuacao: string | null
  }

  export type ProfissionalApoioCountAggregateOutputType = {
    id: number
    areaAtuacao: number
    _all: number
  }


  export type ProfissionalApoioMinAggregateInputType = {
    id?: true
    areaAtuacao?: true
  }

  export type ProfissionalApoioMaxAggregateInputType = {
    id?: true
    areaAtuacao?: true
  }

  export type ProfissionalApoioCountAggregateInputType = {
    id?: true
    areaAtuacao?: true
    _all?: true
  }

  export type ProfissionalApoioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfissionalApoio to aggregate.
     */
    where?: ProfissionalApoioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfissionalApoios to fetch.
     */
    orderBy?: ProfissionalApoioOrderByWithRelationInput | ProfissionalApoioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionalApoioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfissionalApoios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfissionalApoios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfissionalApoios
    **/
    _count?: true | ProfissionalApoioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionalApoioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionalApoioMaxAggregateInputType
  }

  export type GetProfissionalApoioAggregateType<T extends ProfissionalApoioAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissionalApoio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissionalApoio[P]>
      : GetScalarType<T[P], AggregateProfissionalApoio[P]>
  }




  export type ProfissionalApoioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalApoioWhereInput
    orderBy?: ProfissionalApoioOrderByWithAggregationInput | ProfissionalApoioOrderByWithAggregationInput[]
    by: ProfissionalApoioScalarFieldEnum[] | ProfissionalApoioScalarFieldEnum
    having?: ProfissionalApoioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionalApoioCountAggregateInputType | true
    _min?: ProfissionalApoioMinAggregateInputType
    _max?: ProfissionalApoioMaxAggregateInputType
  }

  export type ProfissionalApoioGroupByOutputType = {
    id: string
    areaAtuacao: string
    _count: ProfissionalApoioCountAggregateOutputType | null
    _min: ProfissionalApoioMinAggregateOutputType | null
    _max: ProfissionalApoioMaxAggregateOutputType | null
  }

  type GetProfissionalApoioGroupByPayload<T extends ProfissionalApoioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionalApoioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionalApoioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionalApoioGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionalApoioGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionalApoioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaAtuacao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disponibilidade?: boolean | ProfissionalApoio$DisponibilidadeArgs<ExtArgs>
    Encaminhamento?: boolean | ProfissionalApoio$EncaminhamentoArgs<ExtArgs>
    _count?: boolean | ProfissionalApoioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionalApoio"]>

  export type ProfissionalApoioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaAtuacao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionalApoio"]>

  export type ProfissionalApoioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaAtuacao?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionalApoio"]>

  export type ProfissionalApoioSelectScalar = {
    id?: boolean
    areaAtuacao?: boolean
  }

  export type ProfissionalApoioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "areaAtuacao", ExtArgs["result"]["profissionalApoio"]>
  export type ProfissionalApoioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    Disponibilidade?: boolean | ProfissionalApoio$DisponibilidadeArgs<ExtArgs>
    Encaminhamento?: boolean | ProfissionalApoio$EncaminhamentoArgs<ExtArgs>
    _count?: boolean | ProfissionalApoioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfissionalApoioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProfissionalApoioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProfissionalApoioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfissionalApoio"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      Disponibilidade: Prisma.$DisponibilidadePayload<ExtArgs>[]
      Encaminhamento: Prisma.$EncaminhamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      areaAtuacao: string
    }, ExtArgs["result"]["profissionalApoio"]>
    composites: {}
  }

  type ProfissionalApoioGetPayload<S extends boolean | null | undefined | ProfissionalApoioDefaultArgs> = $Result.GetResult<Prisma.$ProfissionalApoioPayload, S>

  type ProfissionalApoioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionalApoioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionalApoioCountAggregateInputType | true
    }

  export interface ProfissionalApoioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfissionalApoio'], meta: { name: 'ProfissionalApoio' } }
    /**
     * Find zero or one ProfissionalApoio that matches the filter.
     * @param {ProfissionalApoioFindUniqueArgs} args - Arguments to find a ProfissionalApoio
     * @example
     * // Get one ProfissionalApoio
     * const profissionalApoio = await prisma.profissionalApoio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionalApoioFindUniqueArgs>(args: SelectSubset<T, ProfissionalApoioFindUniqueArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfissionalApoio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionalApoioFindUniqueOrThrowArgs} args - Arguments to find a ProfissionalApoio
     * @example
     * // Get one ProfissionalApoio
     * const profissionalApoio = await prisma.profissionalApoio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionalApoioFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionalApoioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfissionalApoio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioFindFirstArgs} args - Arguments to find a ProfissionalApoio
     * @example
     * // Get one ProfissionalApoio
     * const profissionalApoio = await prisma.profissionalApoio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionalApoioFindFirstArgs>(args?: SelectSubset<T, ProfissionalApoioFindFirstArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfissionalApoio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioFindFirstOrThrowArgs} args - Arguments to find a ProfissionalApoio
     * @example
     * // Get one ProfissionalApoio
     * const profissionalApoio = await prisma.profissionalApoio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionalApoioFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionalApoioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfissionalApoios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfissionalApoios
     * const profissionalApoios = await prisma.profissionalApoio.findMany()
     * 
     * // Get first 10 ProfissionalApoios
     * const profissionalApoios = await prisma.profissionalApoio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionalApoioWithIdOnly = await prisma.profissionalApoio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionalApoioFindManyArgs>(args?: SelectSubset<T, ProfissionalApoioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfissionalApoio.
     * @param {ProfissionalApoioCreateArgs} args - Arguments to create a ProfissionalApoio.
     * @example
     * // Create one ProfissionalApoio
     * const ProfissionalApoio = await prisma.profissionalApoio.create({
     *   data: {
     *     // ... data to create a ProfissionalApoio
     *   }
     * })
     * 
     */
    create<T extends ProfissionalApoioCreateArgs>(args: SelectSubset<T, ProfissionalApoioCreateArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfissionalApoios.
     * @param {ProfissionalApoioCreateManyArgs} args - Arguments to create many ProfissionalApoios.
     * @example
     * // Create many ProfissionalApoios
     * const profissionalApoio = await prisma.profissionalApoio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionalApoioCreateManyArgs>(args?: SelectSubset<T, ProfissionalApoioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfissionalApoios and returns the data saved in the database.
     * @param {ProfissionalApoioCreateManyAndReturnArgs} args - Arguments to create many ProfissionalApoios.
     * @example
     * // Create many ProfissionalApoios
     * const profissionalApoio = await prisma.profissionalApoio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfissionalApoios and only return the `id`
     * const profissionalApoioWithIdOnly = await prisma.profissionalApoio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfissionalApoioCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfissionalApoioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfissionalApoio.
     * @param {ProfissionalApoioDeleteArgs} args - Arguments to delete one ProfissionalApoio.
     * @example
     * // Delete one ProfissionalApoio
     * const ProfissionalApoio = await prisma.profissionalApoio.delete({
     *   where: {
     *     // ... filter to delete one ProfissionalApoio
     *   }
     * })
     * 
     */
    delete<T extends ProfissionalApoioDeleteArgs>(args: SelectSubset<T, ProfissionalApoioDeleteArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfissionalApoio.
     * @param {ProfissionalApoioUpdateArgs} args - Arguments to update one ProfissionalApoio.
     * @example
     * // Update one ProfissionalApoio
     * const profissionalApoio = await prisma.profissionalApoio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionalApoioUpdateArgs>(args: SelectSubset<T, ProfissionalApoioUpdateArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfissionalApoios.
     * @param {ProfissionalApoioDeleteManyArgs} args - Arguments to filter ProfissionalApoios to delete.
     * @example
     * // Delete a few ProfissionalApoios
     * const { count } = await prisma.profissionalApoio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionalApoioDeleteManyArgs>(args?: SelectSubset<T, ProfissionalApoioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfissionalApoios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfissionalApoios
     * const profissionalApoio = await prisma.profissionalApoio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionalApoioUpdateManyArgs>(args: SelectSubset<T, ProfissionalApoioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfissionalApoios and returns the data updated in the database.
     * @param {ProfissionalApoioUpdateManyAndReturnArgs} args - Arguments to update many ProfissionalApoios.
     * @example
     * // Update many ProfissionalApoios
     * const profissionalApoio = await prisma.profissionalApoio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfissionalApoios and only return the `id`
     * const profissionalApoioWithIdOnly = await prisma.profissionalApoio.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfissionalApoioUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfissionalApoioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfissionalApoio.
     * @param {ProfissionalApoioUpsertArgs} args - Arguments to update or create a ProfissionalApoio.
     * @example
     * // Update or create a ProfissionalApoio
     * const profissionalApoio = await prisma.profissionalApoio.upsert({
     *   create: {
     *     // ... data to create a ProfissionalApoio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfissionalApoio we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionalApoioUpsertArgs>(args: SelectSubset<T, ProfissionalApoioUpsertArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfissionalApoios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioCountArgs} args - Arguments to filter ProfissionalApoios to count.
     * @example
     * // Count the number of ProfissionalApoios
     * const count = await prisma.profissionalApoio.count({
     *   where: {
     *     // ... the filter for the ProfissionalApoios we want to count
     *   }
     * })
    **/
    count<T extends ProfissionalApoioCountArgs>(
      args?: Subset<T, ProfissionalApoioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionalApoioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfissionalApoio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfissionalApoioAggregateArgs>(args: Subset<T, ProfissionalApoioAggregateArgs>): Prisma.PrismaPromise<GetProfissionalApoioAggregateType<T>>

    /**
     * Group by ProfissionalApoio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalApoioGroupByArgs} args - Group by arguments.
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
      T extends ProfissionalApoioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionalApoioGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionalApoioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfissionalApoioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionalApoioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfissionalApoio model
   */
  readonly fields: ProfissionalApoioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfissionalApoio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionalApoioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Disponibilidade<T extends ProfissionalApoio$DisponibilidadeArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalApoio$DisponibilidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Encaminhamento<T extends ProfissionalApoio$EncaminhamentoArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalApoio$EncaminhamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProfissionalApoio model
   */
  interface ProfissionalApoioFieldRefs {
    readonly id: FieldRef<"ProfissionalApoio", 'String'>
    readonly areaAtuacao: FieldRef<"ProfissionalApoio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProfissionalApoio findUnique
   */
  export type ProfissionalApoioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * Filter, which ProfissionalApoio to fetch.
     */
    where: ProfissionalApoioWhereUniqueInput
  }

  /**
   * ProfissionalApoio findUniqueOrThrow
   */
  export type ProfissionalApoioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * Filter, which ProfissionalApoio to fetch.
     */
    where: ProfissionalApoioWhereUniqueInput
  }

  /**
   * ProfissionalApoio findFirst
   */
  export type ProfissionalApoioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * Filter, which ProfissionalApoio to fetch.
     */
    where?: ProfissionalApoioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfissionalApoios to fetch.
     */
    orderBy?: ProfissionalApoioOrderByWithRelationInput | ProfissionalApoioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfissionalApoios.
     */
    cursor?: ProfissionalApoioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfissionalApoios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfissionalApoios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfissionalApoios.
     */
    distinct?: ProfissionalApoioScalarFieldEnum | ProfissionalApoioScalarFieldEnum[]
  }

  /**
   * ProfissionalApoio findFirstOrThrow
   */
  export type ProfissionalApoioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * Filter, which ProfissionalApoio to fetch.
     */
    where?: ProfissionalApoioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfissionalApoios to fetch.
     */
    orderBy?: ProfissionalApoioOrderByWithRelationInput | ProfissionalApoioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfissionalApoios.
     */
    cursor?: ProfissionalApoioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfissionalApoios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfissionalApoios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfissionalApoios.
     */
    distinct?: ProfissionalApoioScalarFieldEnum | ProfissionalApoioScalarFieldEnum[]
  }

  /**
   * ProfissionalApoio findMany
   */
  export type ProfissionalApoioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * Filter, which ProfissionalApoios to fetch.
     */
    where?: ProfissionalApoioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfissionalApoios to fetch.
     */
    orderBy?: ProfissionalApoioOrderByWithRelationInput | ProfissionalApoioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfissionalApoios.
     */
    cursor?: ProfissionalApoioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfissionalApoios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfissionalApoios.
     */
    skip?: number
    distinct?: ProfissionalApoioScalarFieldEnum | ProfissionalApoioScalarFieldEnum[]
  }

  /**
   * ProfissionalApoio create
   */
  export type ProfissionalApoioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfissionalApoio.
     */
    data: XOR<ProfissionalApoioCreateInput, ProfissionalApoioUncheckedCreateInput>
  }

  /**
   * ProfissionalApoio createMany
   */
  export type ProfissionalApoioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfissionalApoios.
     */
    data: ProfissionalApoioCreateManyInput | ProfissionalApoioCreateManyInput[]
  }

  /**
   * ProfissionalApoio createManyAndReturn
   */
  export type ProfissionalApoioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * The data used to create many ProfissionalApoios.
     */
    data: ProfissionalApoioCreateManyInput | ProfissionalApoioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfissionalApoio update
   */
  export type ProfissionalApoioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfissionalApoio.
     */
    data: XOR<ProfissionalApoioUpdateInput, ProfissionalApoioUncheckedUpdateInput>
    /**
     * Choose, which ProfissionalApoio to update.
     */
    where: ProfissionalApoioWhereUniqueInput
  }

  /**
   * ProfissionalApoio updateMany
   */
  export type ProfissionalApoioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfissionalApoios.
     */
    data: XOR<ProfissionalApoioUpdateManyMutationInput, ProfissionalApoioUncheckedUpdateManyInput>
    /**
     * Filter which ProfissionalApoios to update
     */
    where?: ProfissionalApoioWhereInput
    /**
     * Limit how many ProfissionalApoios to update.
     */
    limit?: number
  }

  /**
   * ProfissionalApoio updateManyAndReturn
   */
  export type ProfissionalApoioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * The data used to update ProfissionalApoios.
     */
    data: XOR<ProfissionalApoioUpdateManyMutationInput, ProfissionalApoioUncheckedUpdateManyInput>
    /**
     * Filter which ProfissionalApoios to update
     */
    where?: ProfissionalApoioWhereInput
    /**
     * Limit how many ProfissionalApoios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfissionalApoio upsert
   */
  export type ProfissionalApoioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfissionalApoio to update in case it exists.
     */
    where: ProfissionalApoioWhereUniqueInput
    /**
     * In case the ProfissionalApoio found by the `where` argument doesn't exist, create a new ProfissionalApoio with this data.
     */
    create: XOR<ProfissionalApoioCreateInput, ProfissionalApoioUncheckedCreateInput>
    /**
     * In case the ProfissionalApoio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionalApoioUpdateInput, ProfissionalApoioUncheckedUpdateInput>
  }

  /**
   * ProfissionalApoio delete
   */
  export type ProfissionalApoioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
    /**
     * Filter which ProfissionalApoio to delete.
     */
    where: ProfissionalApoioWhereUniqueInput
  }

  /**
   * ProfissionalApoio deleteMany
   */
  export type ProfissionalApoioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfissionalApoios to delete
     */
    where?: ProfissionalApoioWhereInput
    /**
     * Limit how many ProfissionalApoios to delete.
     */
    limit?: number
  }

  /**
   * ProfissionalApoio.Disponibilidade
   */
  export type ProfissionalApoio$DisponibilidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    cursor?: DisponibilidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * ProfissionalApoio.Encaminhamento
   */
  export type ProfissionalApoio$EncaminhamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    where?: EncaminhamentoWhereInput
    orderBy?: EncaminhamentoOrderByWithRelationInput | EncaminhamentoOrderByWithRelationInput[]
    cursor?: EncaminhamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncaminhamentoScalarFieldEnum | EncaminhamentoScalarFieldEnum[]
  }

  /**
   * ProfissionalApoio without action
   */
  export type ProfissionalApoioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalApoio
     */
    select?: ProfissionalApoioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfissionalApoio
     */
    omit?: ProfissionalApoioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalApoioInclude<ExtArgs> | null
  }


  /**
   * Model Disponibilidade
   */

  export type AggregateDisponibilidade = {
    _count: DisponibilidadeCountAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  export type DisponibilidadeMinAggregateOutputType = {
    id: string | null
    id_profissional: string | null
    data: string | null
    horario: string | null
  }

  export type DisponibilidadeMaxAggregateOutputType = {
    id: string | null
    id_profissional: string | null
    data: string | null
    horario: string | null
  }

  export type DisponibilidadeCountAggregateOutputType = {
    id: number
    id_profissional: number
    data: number
    horario: number
    _all: number
  }


  export type DisponibilidadeMinAggregateInputType = {
    id?: true
    id_profissional?: true
    data?: true
    horario?: true
  }

  export type DisponibilidadeMaxAggregateInputType = {
    id?: true
    id_profissional?: true
    data?: true
    horario?: true
  }

  export type DisponibilidadeCountAggregateInputType = {
    id?: true
    id_profissional?: true
    data?: true
    horario?: true
    _all?: true
  }

  export type DisponibilidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidade to aggregate.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilidades
    **/
    _count?: true | DisponibilidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type GetDisponibilidadeAggregateType<T extends DisponibilidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilidade[P]>
      : GetScalarType<T[P], AggregateDisponibilidade[P]>
  }




  export type DisponibilidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadeWhereInput
    orderBy?: DisponibilidadeOrderByWithAggregationInput | DisponibilidadeOrderByWithAggregationInput[]
    by: DisponibilidadeScalarFieldEnum[] | DisponibilidadeScalarFieldEnum
    having?: DisponibilidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilidadeCountAggregateInputType | true
    _min?: DisponibilidadeMinAggregateInputType
    _max?: DisponibilidadeMaxAggregateInputType
  }

  export type DisponibilidadeGroupByOutputType = {
    id: string
    id_profissional: string
    data: string
    horario: string
    _count: DisponibilidadeCountAggregateOutputType | null
    _min: DisponibilidadeMinAggregateOutputType | null
    _max: DisponibilidadeMaxAggregateOutputType | null
  }

  type GetDisponibilidadeGroupByPayload<T extends DisponibilidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilidadeGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_profissional?: boolean
    data?: boolean
    horario?: boolean
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_profissional?: boolean
    data?: boolean
    horario?: boolean
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_profissional?: boolean
    data?: boolean
    horario?: boolean
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidade"]>

  export type DisponibilidadeSelectScalar = {
    id?: boolean
    id_profissional?: boolean
    data?: boolean
    horario?: boolean
  }

  export type DisponibilidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_profissional" | "data" | "horario", ExtArgs["result"]["disponibilidade"]>
  export type DisponibilidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }
  export type DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }

  export type $DisponibilidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilidade"
    objects: {
      profissional: Prisma.$ProfissionalApoioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_profissional: string
      data: string
      horario: string
    }, ExtArgs["result"]["disponibilidade"]>
    composites: {}
  }

  type DisponibilidadeGetPayload<S extends boolean | null | undefined | DisponibilidadeDefaultArgs> = $Result.GetResult<Prisma.$DisponibilidadePayload, S>

  type DisponibilidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilidadeCountAggregateInputType | true
    }

  export interface DisponibilidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidade'], meta: { name: 'Disponibilidade' } }
    /**
     * Find zero or one Disponibilidade that matches the filter.
     * @param {DisponibilidadeFindUniqueArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilidadeFindUniqueArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilidadeFindUniqueOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilidadeFindFirstArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindFirstOrThrowArgs} args - Arguments to find a Disponibilidade
     * @example
     * // Get one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany()
     * 
     * // Get first 10 Disponibilidades
     * const disponibilidades = await prisma.disponibilidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibilidadeWithIdOnly = await prisma.disponibilidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibilidadeFindManyArgs>(args?: SelectSubset<T, DisponibilidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilidade.
     * @param {DisponibilidadeCreateArgs} args - Arguments to create a Disponibilidade.
     * @example
     * // Create one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.create({
     *   data: {
     *     // ... data to create a Disponibilidade
     *   }
     * })
     * 
     */
    create<T extends DisponibilidadeCreateArgs>(args: SelectSubset<T, DisponibilidadeCreateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilidades.
     * @param {DisponibilidadeCreateManyArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilidadeCreateManyArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilidades and returns the data saved in the database.
     * @param {DisponibilidadeCreateManyAndReturnArgs} args - Arguments to create many Disponibilidades.
     * @example
     * // Create many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilidades and only return the `id`
     * const disponibilidadeWithIdOnly = await prisma.disponibilidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibilidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibilidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibilidade.
     * @param {DisponibilidadeDeleteArgs} args - Arguments to delete one Disponibilidade.
     * @example
     * // Delete one Disponibilidade
     * const Disponibilidade = await prisma.disponibilidade.delete({
     *   where: {
     *     // ... filter to delete one Disponibilidade
     *   }
     * })
     * 
     */
    delete<T extends DisponibilidadeDeleteArgs>(args: SelectSubset<T, DisponibilidadeDeleteArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilidade.
     * @param {DisponibilidadeUpdateArgs} args - Arguments to update one Disponibilidade.
     * @example
     * // Update one Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilidadeUpdateArgs>(args: SelectSubset<T, DisponibilidadeUpdateArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilidades.
     * @param {DisponibilidadeDeleteManyArgs} args - Arguments to filter Disponibilidades to delete.
     * @example
     * // Delete a few Disponibilidades
     * const { count } = await prisma.disponibilidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilidadeDeleteManyArgs>(args?: SelectSubset<T, DisponibilidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilidadeUpdateManyArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidades and returns the data updated in the database.
     * @param {DisponibilidadeUpdateManyAndReturnArgs} args - Arguments to update many Disponibilidades.
     * @example
     * // Update many Disponibilidades
     * const disponibilidade = await prisma.disponibilidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilidades and only return the `id`
     * const disponibilidadeWithIdOnly = await prisma.disponibilidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisponibilidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibilidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibilidade.
     * @param {DisponibilidadeUpsertArgs} args - Arguments to update or create a Disponibilidade.
     * @example
     * // Update or create a Disponibilidade
     * const disponibilidade = await prisma.disponibilidade.upsert({
     *   create: {
     *     // ... data to create a Disponibilidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilidade we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilidadeUpsertArgs>(args: SelectSubset<T, DisponibilidadeUpsertArgs<ExtArgs>>): Prisma__DisponibilidadeClient<$Result.GetResult<Prisma.$DisponibilidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeCountArgs} args - Arguments to filter Disponibilidades to count.
     * @example
     * // Count the number of Disponibilidades
     * const count = await prisma.disponibilidade.count({
     *   where: {
     *     // ... the filter for the Disponibilidades we want to count
     *   }
     * })
    **/
    count<T extends DisponibilidadeCountArgs>(
      args?: Subset<T, DisponibilidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisponibilidadeAggregateArgs>(args: Subset<T, DisponibilidadeAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadeAggregateType<T>>

    /**
     * Group by Disponibilidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadeGroupByArgs} args - Group by arguments.
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
      T extends DisponibilidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilidadeGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisponibilidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilidade model
   */
  readonly fields: DisponibilidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends ProfissionalApoioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalApoioDefaultArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Disponibilidade model
   */
  interface DisponibilidadeFieldRefs {
    readonly id: FieldRef<"Disponibilidade", 'String'>
    readonly id_profissional: FieldRef<"Disponibilidade", 'String'>
    readonly data: FieldRef<"Disponibilidade", 'String'>
    readonly horario: FieldRef<"Disponibilidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilidade findUnique
   */
  export type DisponibilidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findUniqueOrThrow
   */
  export type DisponibilidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade findFirst
   */
  export type DisponibilidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findFirstOrThrow
   */
  export type DisponibilidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidade to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidades.
     */
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade findMany
   */
  export type DisponibilidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidades to fetch.
     */
    where?: DisponibilidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidades to fetch.
     */
    orderBy?: DisponibilidadeOrderByWithRelationInput | DisponibilidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilidades.
     */
    cursor?: DisponibilidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidades.
     */
    skip?: number
    distinct?: DisponibilidadeScalarFieldEnum | DisponibilidadeScalarFieldEnum[]
  }

  /**
   * Disponibilidade create
   */
  export type DisponibilidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibilidade.
     */
    data: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
  }

  /**
   * Disponibilidade createMany
   */
  export type DisponibilidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
  }

  /**
   * Disponibilidade createManyAndReturn
   */
  export type DisponibilidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilidades.
     */
    data: DisponibilidadeCreateManyInput | DisponibilidadeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade update
   */
  export type DisponibilidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibilidade.
     */
    data: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
    /**
     * Choose, which Disponibilidade to update.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade updateMany
   */
  export type DisponibilidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
  }

  /**
   * Disponibilidade updateManyAndReturn
   */
  export type DisponibilidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilidades.
     */
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidades to update
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disponibilidade upsert
   */
  export type DisponibilidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibilidade to update in case it exists.
     */
    where: DisponibilidadeWhereUniqueInput
    /**
     * In case the Disponibilidade found by the `where` argument doesn't exist, create a new Disponibilidade with this data.
     */
    create: XOR<DisponibilidadeCreateInput, DisponibilidadeUncheckedCreateInput>
    /**
     * In case the Disponibilidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilidadeUpdateInput, DisponibilidadeUncheckedUpdateInput>
  }

  /**
   * Disponibilidade delete
   */
  export type DisponibilidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
    /**
     * Filter which Disponibilidade to delete.
     */
    where: DisponibilidadeWhereUniqueInput
  }

  /**
   * Disponibilidade deleteMany
   */
  export type DisponibilidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidades to delete
     */
    where?: DisponibilidadeWhereInput
    /**
     * Limit how many Disponibilidades to delete.
     */
    limit?: number
  }

  /**
   * Disponibilidade without action
   */
  export type DisponibilidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidade
     */
    select?: DisponibilidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidade
     */
    omit?: DisponibilidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadeInclude<ExtArgs> | null
  }


  /**
   * Model Encaminhamento
   */

  export type AggregateEncaminhamento = {
    _count: EncaminhamentoCountAggregateOutputType | null
    _min: EncaminhamentoMinAggregateOutputType | null
    _max: EncaminhamentoMaxAggregateOutputType | null
  }

  export type EncaminhamentoMinAggregateOutputType = {
    id: string | null
    id_mae: string | null
    id_profissional: string | null
    data: Date | null
    status: $Enums.StatusEncaminhamento | null
    tipo_servico: string | null
  }

  export type EncaminhamentoMaxAggregateOutputType = {
    id: string | null
    id_mae: string | null
    id_profissional: string | null
    data: Date | null
    status: $Enums.StatusEncaminhamento | null
    tipo_servico: string | null
  }

  export type EncaminhamentoCountAggregateOutputType = {
    id: number
    id_mae: number
    id_profissional: number
    data: number
    status: number
    tipo_servico: number
    _all: number
  }


  export type EncaminhamentoMinAggregateInputType = {
    id?: true
    id_mae?: true
    id_profissional?: true
    data?: true
    status?: true
    tipo_servico?: true
  }

  export type EncaminhamentoMaxAggregateInputType = {
    id?: true
    id_mae?: true
    id_profissional?: true
    data?: true
    status?: true
    tipo_servico?: true
  }

  export type EncaminhamentoCountAggregateInputType = {
    id?: true
    id_mae?: true
    id_profissional?: true
    data?: true
    status?: true
    tipo_servico?: true
    _all?: true
  }

  export type EncaminhamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encaminhamento to aggregate.
     */
    where?: EncaminhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encaminhamentos to fetch.
     */
    orderBy?: EncaminhamentoOrderByWithRelationInput | EncaminhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EncaminhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encaminhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encaminhamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Encaminhamentos
    **/
    _count?: true | EncaminhamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EncaminhamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EncaminhamentoMaxAggregateInputType
  }

  export type GetEncaminhamentoAggregateType<T extends EncaminhamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEncaminhamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEncaminhamento[P]>
      : GetScalarType<T[P], AggregateEncaminhamento[P]>
  }




  export type EncaminhamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncaminhamentoWhereInput
    orderBy?: EncaminhamentoOrderByWithAggregationInput | EncaminhamentoOrderByWithAggregationInput[]
    by: EncaminhamentoScalarFieldEnum[] | EncaminhamentoScalarFieldEnum
    having?: EncaminhamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EncaminhamentoCountAggregateInputType | true
    _min?: EncaminhamentoMinAggregateInputType
    _max?: EncaminhamentoMaxAggregateInputType
  }

  export type EncaminhamentoGroupByOutputType = {
    id: string
    id_mae: string
    id_profissional: string
    data: Date
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    _count: EncaminhamentoCountAggregateOutputType | null
    _min: EncaminhamentoMinAggregateOutputType | null
    _max: EncaminhamentoMaxAggregateOutputType | null
  }

  type GetEncaminhamentoGroupByPayload<T extends EncaminhamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EncaminhamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EncaminhamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EncaminhamentoGroupByOutputType[P]>
            : GetScalarType<T[P], EncaminhamentoGroupByOutputType[P]>
        }
      >
    >


  export type EncaminhamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_mae?: boolean
    id_profissional?: boolean
    data?: boolean
    status?: boolean
    tipo_servico?: boolean
    maeSolo?: boolean | MaeSoloDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
    Atendimento?: boolean | Encaminhamento$AtendimentoArgs<ExtArgs>
    _count?: boolean | EncaminhamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encaminhamento"]>

  export type EncaminhamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_mae?: boolean
    id_profissional?: boolean
    data?: boolean
    status?: boolean
    tipo_servico?: boolean
    maeSolo?: boolean | MaeSoloDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encaminhamento"]>

  export type EncaminhamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_mae?: boolean
    id_profissional?: boolean
    data?: boolean
    status?: boolean
    tipo_servico?: boolean
    maeSolo?: boolean | MaeSoloDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encaminhamento"]>

  export type EncaminhamentoSelectScalar = {
    id?: boolean
    id_mae?: boolean
    id_profissional?: boolean
    data?: boolean
    status?: boolean
    tipo_servico?: boolean
  }

  export type EncaminhamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_mae" | "id_profissional" | "data" | "status" | "tipo_servico", ExtArgs["result"]["encaminhamento"]>
  export type EncaminhamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maeSolo?: boolean | MaeSoloDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
    Atendimento?: boolean | Encaminhamento$AtendimentoArgs<ExtArgs>
    _count?: boolean | EncaminhamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EncaminhamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maeSolo?: boolean | MaeSoloDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }
  export type EncaminhamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maeSolo?: boolean | MaeSoloDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionalApoioDefaultArgs<ExtArgs>
  }

  export type $EncaminhamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Encaminhamento"
    objects: {
      maeSolo: Prisma.$MaeSoloPayload<ExtArgs>
      profissional: Prisma.$ProfissionalApoioPayload<ExtArgs>
      Atendimento: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_mae: string
      id_profissional: string
      data: Date
      status: $Enums.StatusEncaminhamento
      tipo_servico: string
    }, ExtArgs["result"]["encaminhamento"]>
    composites: {}
  }

  type EncaminhamentoGetPayload<S extends boolean | null | undefined | EncaminhamentoDefaultArgs> = $Result.GetResult<Prisma.$EncaminhamentoPayload, S>

  type EncaminhamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EncaminhamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EncaminhamentoCountAggregateInputType | true
    }

  export interface EncaminhamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Encaminhamento'], meta: { name: 'Encaminhamento' } }
    /**
     * Find zero or one Encaminhamento that matches the filter.
     * @param {EncaminhamentoFindUniqueArgs} args - Arguments to find a Encaminhamento
     * @example
     * // Get one Encaminhamento
     * const encaminhamento = await prisma.encaminhamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EncaminhamentoFindUniqueArgs>(args: SelectSubset<T, EncaminhamentoFindUniqueArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Encaminhamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EncaminhamentoFindUniqueOrThrowArgs} args - Arguments to find a Encaminhamento
     * @example
     * // Get one Encaminhamento
     * const encaminhamento = await prisma.encaminhamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EncaminhamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, EncaminhamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encaminhamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoFindFirstArgs} args - Arguments to find a Encaminhamento
     * @example
     * // Get one Encaminhamento
     * const encaminhamento = await prisma.encaminhamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EncaminhamentoFindFirstArgs>(args?: SelectSubset<T, EncaminhamentoFindFirstArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encaminhamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoFindFirstOrThrowArgs} args - Arguments to find a Encaminhamento
     * @example
     * // Get one Encaminhamento
     * const encaminhamento = await prisma.encaminhamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EncaminhamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, EncaminhamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Encaminhamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Encaminhamentos
     * const encaminhamentos = await prisma.encaminhamento.findMany()
     * 
     * // Get first 10 Encaminhamentos
     * const encaminhamentos = await prisma.encaminhamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const encaminhamentoWithIdOnly = await prisma.encaminhamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EncaminhamentoFindManyArgs>(args?: SelectSubset<T, EncaminhamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Encaminhamento.
     * @param {EncaminhamentoCreateArgs} args - Arguments to create a Encaminhamento.
     * @example
     * // Create one Encaminhamento
     * const Encaminhamento = await prisma.encaminhamento.create({
     *   data: {
     *     // ... data to create a Encaminhamento
     *   }
     * })
     * 
     */
    create<T extends EncaminhamentoCreateArgs>(args: SelectSubset<T, EncaminhamentoCreateArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Encaminhamentos.
     * @param {EncaminhamentoCreateManyArgs} args - Arguments to create many Encaminhamentos.
     * @example
     * // Create many Encaminhamentos
     * const encaminhamento = await prisma.encaminhamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EncaminhamentoCreateManyArgs>(args?: SelectSubset<T, EncaminhamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Encaminhamentos and returns the data saved in the database.
     * @param {EncaminhamentoCreateManyAndReturnArgs} args - Arguments to create many Encaminhamentos.
     * @example
     * // Create many Encaminhamentos
     * const encaminhamento = await prisma.encaminhamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Encaminhamentos and only return the `id`
     * const encaminhamentoWithIdOnly = await prisma.encaminhamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EncaminhamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, EncaminhamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Encaminhamento.
     * @param {EncaminhamentoDeleteArgs} args - Arguments to delete one Encaminhamento.
     * @example
     * // Delete one Encaminhamento
     * const Encaminhamento = await prisma.encaminhamento.delete({
     *   where: {
     *     // ... filter to delete one Encaminhamento
     *   }
     * })
     * 
     */
    delete<T extends EncaminhamentoDeleteArgs>(args: SelectSubset<T, EncaminhamentoDeleteArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Encaminhamento.
     * @param {EncaminhamentoUpdateArgs} args - Arguments to update one Encaminhamento.
     * @example
     * // Update one Encaminhamento
     * const encaminhamento = await prisma.encaminhamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EncaminhamentoUpdateArgs>(args: SelectSubset<T, EncaminhamentoUpdateArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Encaminhamentos.
     * @param {EncaminhamentoDeleteManyArgs} args - Arguments to filter Encaminhamentos to delete.
     * @example
     * // Delete a few Encaminhamentos
     * const { count } = await prisma.encaminhamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EncaminhamentoDeleteManyArgs>(args?: SelectSubset<T, EncaminhamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encaminhamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Encaminhamentos
     * const encaminhamento = await prisma.encaminhamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EncaminhamentoUpdateManyArgs>(args: SelectSubset<T, EncaminhamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encaminhamentos and returns the data updated in the database.
     * @param {EncaminhamentoUpdateManyAndReturnArgs} args - Arguments to update many Encaminhamentos.
     * @example
     * // Update many Encaminhamentos
     * const encaminhamento = await prisma.encaminhamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Encaminhamentos and only return the `id`
     * const encaminhamentoWithIdOnly = await prisma.encaminhamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EncaminhamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, EncaminhamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Encaminhamento.
     * @param {EncaminhamentoUpsertArgs} args - Arguments to update or create a Encaminhamento.
     * @example
     * // Update or create a Encaminhamento
     * const encaminhamento = await prisma.encaminhamento.upsert({
     *   create: {
     *     // ... data to create a Encaminhamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Encaminhamento we want to update
     *   }
     * })
     */
    upsert<T extends EncaminhamentoUpsertArgs>(args: SelectSubset<T, EncaminhamentoUpsertArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Encaminhamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoCountArgs} args - Arguments to filter Encaminhamentos to count.
     * @example
     * // Count the number of Encaminhamentos
     * const count = await prisma.encaminhamento.count({
     *   where: {
     *     // ... the filter for the Encaminhamentos we want to count
     *   }
     * })
    **/
    count<T extends EncaminhamentoCountArgs>(
      args?: Subset<T, EncaminhamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EncaminhamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Encaminhamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EncaminhamentoAggregateArgs>(args: Subset<T, EncaminhamentoAggregateArgs>): Prisma.PrismaPromise<GetEncaminhamentoAggregateType<T>>

    /**
     * Group by Encaminhamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncaminhamentoGroupByArgs} args - Group by arguments.
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
      T extends EncaminhamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EncaminhamentoGroupByArgs['orderBy'] }
        : { orderBy?: EncaminhamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EncaminhamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncaminhamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Encaminhamento model
   */
  readonly fields: EncaminhamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Encaminhamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EncaminhamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maeSolo<T extends MaeSoloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaeSoloDefaultArgs<ExtArgs>>): Prisma__MaeSoloClient<$Result.GetResult<Prisma.$MaeSoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissional<T extends ProfissionalApoioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalApoioDefaultArgs<ExtArgs>>): Prisma__ProfissionalApoioClient<$Result.GetResult<Prisma.$ProfissionalApoioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Atendimento<T extends Encaminhamento$AtendimentoArgs<ExtArgs> = {}>(args?: Subset<T, Encaminhamento$AtendimentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Encaminhamento model
   */
  interface EncaminhamentoFieldRefs {
    readonly id: FieldRef<"Encaminhamento", 'String'>
    readonly id_mae: FieldRef<"Encaminhamento", 'String'>
    readonly id_profissional: FieldRef<"Encaminhamento", 'String'>
    readonly data: FieldRef<"Encaminhamento", 'DateTime'>
    readonly status: FieldRef<"Encaminhamento", 'StatusEncaminhamento'>
    readonly tipo_servico: FieldRef<"Encaminhamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Encaminhamento findUnique
   */
  export type EncaminhamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * Filter, which Encaminhamento to fetch.
     */
    where: EncaminhamentoWhereUniqueInput
  }

  /**
   * Encaminhamento findUniqueOrThrow
   */
  export type EncaminhamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * Filter, which Encaminhamento to fetch.
     */
    where: EncaminhamentoWhereUniqueInput
  }

  /**
   * Encaminhamento findFirst
   */
  export type EncaminhamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * Filter, which Encaminhamento to fetch.
     */
    where?: EncaminhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encaminhamentos to fetch.
     */
    orderBy?: EncaminhamentoOrderByWithRelationInput | EncaminhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encaminhamentos.
     */
    cursor?: EncaminhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encaminhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encaminhamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encaminhamentos.
     */
    distinct?: EncaminhamentoScalarFieldEnum | EncaminhamentoScalarFieldEnum[]
  }

  /**
   * Encaminhamento findFirstOrThrow
   */
  export type EncaminhamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * Filter, which Encaminhamento to fetch.
     */
    where?: EncaminhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encaminhamentos to fetch.
     */
    orderBy?: EncaminhamentoOrderByWithRelationInput | EncaminhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encaminhamentos.
     */
    cursor?: EncaminhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encaminhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encaminhamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encaminhamentos.
     */
    distinct?: EncaminhamentoScalarFieldEnum | EncaminhamentoScalarFieldEnum[]
  }

  /**
   * Encaminhamento findMany
   */
  export type EncaminhamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * Filter, which Encaminhamentos to fetch.
     */
    where?: EncaminhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encaminhamentos to fetch.
     */
    orderBy?: EncaminhamentoOrderByWithRelationInput | EncaminhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Encaminhamentos.
     */
    cursor?: EncaminhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encaminhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encaminhamentos.
     */
    skip?: number
    distinct?: EncaminhamentoScalarFieldEnum | EncaminhamentoScalarFieldEnum[]
  }

  /**
   * Encaminhamento create
   */
  export type EncaminhamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Encaminhamento.
     */
    data: XOR<EncaminhamentoCreateInput, EncaminhamentoUncheckedCreateInput>
  }

  /**
   * Encaminhamento createMany
   */
  export type EncaminhamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Encaminhamentos.
     */
    data: EncaminhamentoCreateManyInput | EncaminhamentoCreateManyInput[]
  }

  /**
   * Encaminhamento createManyAndReturn
   */
  export type EncaminhamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Encaminhamentos.
     */
    data: EncaminhamentoCreateManyInput | EncaminhamentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encaminhamento update
   */
  export type EncaminhamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Encaminhamento.
     */
    data: XOR<EncaminhamentoUpdateInput, EncaminhamentoUncheckedUpdateInput>
    /**
     * Choose, which Encaminhamento to update.
     */
    where: EncaminhamentoWhereUniqueInput
  }

  /**
   * Encaminhamento updateMany
   */
  export type EncaminhamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Encaminhamentos.
     */
    data: XOR<EncaminhamentoUpdateManyMutationInput, EncaminhamentoUncheckedUpdateManyInput>
    /**
     * Filter which Encaminhamentos to update
     */
    where?: EncaminhamentoWhereInput
    /**
     * Limit how many Encaminhamentos to update.
     */
    limit?: number
  }

  /**
   * Encaminhamento updateManyAndReturn
   */
  export type EncaminhamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * The data used to update Encaminhamentos.
     */
    data: XOR<EncaminhamentoUpdateManyMutationInput, EncaminhamentoUncheckedUpdateManyInput>
    /**
     * Filter which Encaminhamentos to update
     */
    where?: EncaminhamentoWhereInput
    /**
     * Limit how many Encaminhamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encaminhamento upsert
   */
  export type EncaminhamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Encaminhamento to update in case it exists.
     */
    where: EncaminhamentoWhereUniqueInput
    /**
     * In case the Encaminhamento found by the `where` argument doesn't exist, create a new Encaminhamento with this data.
     */
    create: XOR<EncaminhamentoCreateInput, EncaminhamentoUncheckedCreateInput>
    /**
     * In case the Encaminhamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EncaminhamentoUpdateInput, EncaminhamentoUncheckedUpdateInput>
  }

  /**
   * Encaminhamento delete
   */
  export type EncaminhamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
    /**
     * Filter which Encaminhamento to delete.
     */
    where: EncaminhamentoWhereUniqueInput
  }

  /**
   * Encaminhamento deleteMany
   */
  export type EncaminhamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encaminhamentos to delete
     */
    where?: EncaminhamentoWhereInput
    /**
     * Limit how many Encaminhamentos to delete.
     */
    limit?: number
  }

  /**
   * Encaminhamento.Atendimento
   */
  export type Encaminhamento$AtendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Encaminhamento without action
   */
  export type EncaminhamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encaminhamento
     */
    select?: EncaminhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encaminhamento
     */
    omit?: EncaminhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncaminhamentoInclude<ExtArgs> | null
  }


  /**
   * Model Atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoMinAggregateOutputType = {
    id: string | null
    id_encaminhamento: string | null
    observacoes: string | null
    data: Date | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    id: string | null
    id_encaminhamento: string | null
    observacoes: string | null
    data: Date | null
  }

  export type AtendimentoCountAggregateOutputType = {
    id: number
    id_encaminhamento: number
    observacoes: number
    data: number
    _all: number
  }


  export type AtendimentoMinAggregateInputType = {
    id?: true
    id_encaminhamento?: true
    observacoes?: true
    data?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    id?: true
    id_encaminhamento?: true
    observacoes?: true
    data?: true
  }

  export type AtendimentoCountAggregateInputType = {
    id?: true
    id_encaminhamento?: true
    observacoes?: true
    data?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimento to aggregate.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type AtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithAggregationInput | AtendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: AtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    id: string
    id_encaminhamento: string
    observacoes: string
    data: Date
    _count: AtendimentoCountAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends AtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type AtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_encaminhamento?: boolean
    observacoes?: boolean
    data?: boolean
    encaminhamento?: boolean | EncaminhamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_encaminhamento?: boolean
    observacoes?: boolean
    data?: boolean
    encaminhamento?: boolean | EncaminhamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_encaminhamento?: boolean
    observacoes?: boolean
    data?: boolean
    encaminhamento?: boolean | EncaminhamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectScalar = {
    id?: boolean
    id_encaminhamento?: boolean
    observacoes?: boolean
    data?: boolean
  }

  export type AtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_encaminhamento" | "observacoes" | "data", ExtArgs["result"]["atendimento"]>
  export type AtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encaminhamento?: boolean | EncaminhamentoDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encaminhamento?: boolean | EncaminhamentoDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encaminhamento?: boolean | EncaminhamentoDefaultArgs<ExtArgs>
  }

  export type $AtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atendimento"
    objects: {
      encaminhamento: Prisma.$EncaminhamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_encaminhamento: string
      observacoes: string
      data: Date
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type AtendimentoGetPayload<S extends boolean | null | undefined | AtendimentoDefaultArgs> = $Result.GetResult<Prisma.$AtendimentoPayload, S>

  type AtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface AtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atendimento'], meta: { name: 'Atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {AtendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtendimentoFindUniqueArgs>(args: SelectSubset<T, AtendimentoFindUniqueArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtendimentoFindFirstArgs>(args?: SelectSubset<T, AtendimentoFindFirstArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtendimentoFindManyArgs>(args?: SelectSubset<T, AtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {AtendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends AtendimentoCreateArgs>(args: SelectSubset<T, AtendimentoCreateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {AtendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtendimentoCreateManyArgs>(args?: SelectSubset<T, AtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {AtendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {AtendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends AtendimentoDeleteArgs>(args: SelectSubset<T, AtendimentoDeleteArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {AtendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtendimentoUpdateArgs>(args: SelectSubset<T, AtendimentoUpdateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {AtendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtendimentoDeleteManyArgs>(args?: SelectSubset<T, AtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtendimentoUpdateManyArgs>(args: SelectSubset<T, AtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {AtendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {AtendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends AtendimentoUpsertArgs>(args: SelectSubset<T, AtendimentoUpsertArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends AtendimentoCountArgs>(
      args?: Subset<T, AtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoGroupByArgs} args - Group by arguments.
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
      T extends AtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: AtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atendimento model
   */
  readonly fields: AtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    encaminhamento<T extends EncaminhamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EncaminhamentoDefaultArgs<ExtArgs>>): Prisma__EncaminhamentoClient<$Result.GetResult<Prisma.$EncaminhamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atendimento model
   */
  interface AtendimentoFieldRefs {
    readonly id: FieldRef<"Atendimento", 'String'>
    readonly id_encaminhamento: FieldRef<"Atendimento", 'String'>
    readonly observacoes: FieldRef<"Atendimento", 'String'>
    readonly data: FieldRef<"Atendimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Atendimento findUnique
   */
  export type AtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findUniqueOrThrow
   */
  export type AtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findFirst
   */
  export type AtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findFirstOrThrow
   */
  export type AtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findMany
   */
  export type AtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimentos to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento create
   */
  export type AtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atendimento.
     */
    data: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
  }

  /**
   * Atendimento createMany
   */
  export type AtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
  }

  /**
   * Atendimento createManyAndReturn
   */
  export type AtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento update
   */
  export type AtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atendimento.
     */
    data: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
    /**
     * Choose, which Atendimento to update.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento updateMany
   */
  export type AtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento updateManyAndReturn
   */
  export type AtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento upsert
   */
  export type AtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atendimento to update in case it exists.
     */
    where: AtendimentoWhereUniqueInput
    /**
     * In case the Atendimento found by the `where` argument doesn't exist, create a new Atendimento with this data.
     */
    create: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
    /**
     * In case the Atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
  }

  /**
   * Atendimento delete
   */
  export type AtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter which Atendimento to delete.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento deleteMany
   */
  export type AtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimentos to delete
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to delete.
     */
    limit?: number
  }

  /**
   * Atendimento without action
   */
  export type AtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    documentoIdentificacao: 'documentoIdentificacao',
    telefone: 'telefone',
    email: 'email'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MaeSoloScalarFieldEnum: {
    id: 'id',
    data_nascimento: 'data_nascimento',
    escolaridade: 'escolaridade',
    endereco: 'endereco',
    rendaMensal: 'rendaMensal',
    situacaoTrabalho: 'situacaoTrabalho'
  };

  export type MaeSoloScalarFieldEnum = (typeof MaeSoloScalarFieldEnum)[keyof typeof MaeSoloScalarFieldEnum]


  export const FilhoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data_nascimento: 'data_nascimento',
    idMae: 'idMae'
  };

  export type FilhoScalarFieldEnum = (typeof FilhoScalarFieldEnum)[keyof typeof FilhoScalarFieldEnum]


  export const DoadorScalarFieldEnum: {
    id: 'id',
    tipo_doador: 'tipo_doador'
  };

  export type DoadorScalarFieldEnum = (typeof DoadorScalarFieldEnum)[keyof typeof DoadorScalarFieldEnum]


  export const ProfissionalApoioScalarFieldEnum: {
    id: 'id',
    areaAtuacao: 'areaAtuacao'
  };

  export type ProfissionalApoioScalarFieldEnum = (typeof ProfissionalApoioScalarFieldEnum)[keyof typeof ProfissionalApoioScalarFieldEnum]


  export const DisponibilidadeScalarFieldEnum: {
    id: 'id',
    id_profissional: 'id_profissional',
    data: 'data',
    horario: 'horario'
  };

  export type DisponibilidadeScalarFieldEnum = (typeof DisponibilidadeScalarFieldEnum)[keyof typeof DisponibilidadeScalarFieldEnum]


  export const EncaminhamentoScalarFieldEnum: {
    id: 'id',
    id_mae: 'id_mae',
    id_profissional: 'id_profissional',
    data: 'data',
    status: 'status',
    tipo_servico: 'tipo_servico'
  };

  export type EncaminhamentoScalarFieldEnum = (typeof EncaminhamentoScalarFieldEnum)[keyof typeof EncaminhamentoScalarFieldEnum]


  export const AtendimentoScalarFieldEnum: {
    id: 'id',
    id_encaminhamento: 'id_encaminhamento',
    observacoes: 'observacoes',
    data: 'data'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Escolaridade'
   */
  export type EnumEscolaridadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Escolaridade'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusEncaminhamento'
   */
  export type EnumStatusEncaminhamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEncaminhamento'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    documentoIdentificacao?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    email?: StringNullableFilter<"Usuario"> | string | null
    MaeSolo?: MaeSoloListRelationFilter
    Doador?: DoadorListRelationFilter
    ProfissionalApoio?: ProfissionalApoioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    documentoIdentificacao?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    MaeSolo?: MaeSoloOrderByRelationAggregateInput
    Doador?: DoadorOrderByRelationAggregateInput
    ProfissionalApoio?: ProfissionalApoioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentoIdentificacao?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    MaeSolo?: MaeSoloListRelationFilter
    Doador?: DoadorListRelationFilter
    ProfissionalApoio?: ProfissionalApoioListRelationFilter
  }, "id" | "documentoIdentificacao" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    documentoIdentificacao?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    documentoIdentificacao?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type MaeSoloWhereInput = {
    AND?: MaeSoloWhereInput | MaeSoloWhereInput[]
    OR?: MaeSoloWhereInput[]
    NOT?: MaeSoloWhereInput | MaeSoloWhereInput[]
    id?: StringFilter<"MaeSolo"> | string
    data_nascimento?: DateTimeFilter<"MaeSolo"> | Date | string
    escolaridade?: EnumEscolaridadeFilter<"MaeSolo"> | $Enums.Escolaridade
    endereco?: StringFilter<"MaeSolo"> | string
    rendaMensal?: IntFilter<"MaeSolo"> | number
    situacaoTrabalho?: BoolFilter<"MaeSolo"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Filho?: FilhoListRelationFilter
    Encaminhamento?: EncaminhamentoListRelationFilter
  }

  export type MaeSoloOrderByWithRelationInput = {
    id?: SortOrder
    data_nascimento?: SortOrder
    escolaridade?: SortOrder
    endereco?: SortOrder
    rendaMensal?: SortOrder
    situacaoTrabalho?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    Filho?: FilhoOrderByRelationAggregateInput
    Encaminhamento?: EncaminhamentoOrderByRelationAggregateInput
  }

  export type MaeSoloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaeSoloWhereInput | MaeSoloWhereInput[]
    OR?: MaeSoloWhereInput[]
    NOT?: MaeSoloWhereInput | MaeSoloWhereInput[]
    data_nascimento?: DateTimeFilter<"MaeSolo"> | Date | string
    escolaridade?: EnumEscolaridadeFilter<"MaeSolo"> | $Enums.Escolaridade
    endereco?: StringFilter<"MaeSolo"> | string
    rendaMensal?: IntFilter<"MaeSolo"> | number
    situacaoTrabalho?: BoolFilter<"MaeSolo"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Filho?: FilhoListRelationFilter
    Encaminhamento?: EncaminhamentoListRelationFilter
  }, "id">

  export type MaeSoloOrderByWithAggregationInput = {
    id?: SortOrder
    data_nascimento?: SortOrder
    escolaridade?: SortOrder
    endereco?: SortOrder
    rendaMensal?: SortOrder
    situacaoTrabalho?: SortOrder
    _count?: MaeSoloCountOrderByAggregateInput
    _avg?: MaeSoloAvgOrderByAggregateInput
    _max?: MaeSoloMaxOrderByAggregateInput
    _min?: MaeSoloMinOrderByAggregateInput
    _sum?: MaeSoloSumOrderByAggregateInput
  }

  export type MaeSoloScalarWhereWithAggregatesInput = {
    AND?: MaeSoloScalarWhereWithAggregatesInput | MaeSoloScalarWhereWithAggregatesInput[]
    OR?: MaeSoloScalarWhereWithAggregatesInput[]
    NOT?: MaeSoloScalarWhereWithAggregatesInput | MaeSoloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaeSolo"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"MaeSolo"> | Date | string
    escolaridade?: EnumEscolaridadeWithAggregatesFilter<"MaeSolo"> | $Enums.Escolaridade
    endereco?: StringWithAggregatesFilter<"MaeSolo"> | string
    rendaMensal?: IntWithAggregatesFilter<"MaeSolo"> | number
    situacaoTrabalho?: BoolWithAggregatesFilter<"MaeSolo"> | boolean
  }

  export type FilhoWhereInput = {
    AND?: FilhoWhereInput | FilhoWhereInput[]
    OR?: FilhoWhereInput[]
    NOT?: FilhoWhereInput | FilhoWhereInput[]
    id?: StringFilter<"Filho"> | string
    nome?: StringFilter<"Filho"> | string
    data_nascimento?: DateTimeFilter<"Filho"> | Date | string
    idMae?: StringFilter<"Filho"> | string
    mae?: XOR<MaeSoloScalarRelationFilter, MaeSoloWhereInput>
  }

  export type FilhoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    idMae?: SortOrder
    mae?: MaeSoloOrderByWithRelationInput
  }

  export type FilhoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilhoWhereInput | FilhoWhereInput[]
    OR?: FilhoWhereInput[]
    NOT?: FilhoWhereInput | FilhoWhereInput[]
    nome?: StringFilter<"Filho"> | string
    data_nascimento?: DateTimeFilter<"Filho"> | Date | string
    idMae?: StringFilter<"Filho"> | string
    mae?: XOR<MaeSoloScalarRelationFilter, MaeSoloWhereInput>
  }, "id">

  export type FilhoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    idMae?: SortOrder
    _count?: FilhoCountOrderByAggregateInput
    _max?: FilhoMaxOrderByAggregateInput
    _min?: FilhoMinOrderByAggregateInput
  }

  export type FilhoScalarWhereWithAggregatesInput = {
    AND?: FilhoScalarWhereWithAggregatesInput | FilhoScalarWhereWithAggregatesInput[]
    OR?: FilhoScalarWhereWithAggregatesInput[]
    NOT?: FilhoScalarWhereWithAggregatesInput | FilhoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Filho"> | string
    nome?: StringWithAggregatesFilter<"Filho"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"Filho"> | Date | string
    idMae?: StringWithAggregatesFilter<"Filho"> | string
  }

  export type DoadorWhereInput = {
    AND?: DoadorWhereInput | DoadorWhereInput[]
    OR?: DoadorWhereInput[]
    NOT?: DoadorWhereInput | DoadorWhereInput[]
    id?: StringFilter<"Doador"> | string
    tipo_doador?: StringFilter<"Doador"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type DoadorOrderByWithRelationInput = {
    id?: SortOrder
    tipo_doador?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type DoadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoadorWhereInput | DoadorWhereInput[]
    OR?: DoadorWhereInput[]
    NOT?: DoadorWhereInput | DoadorWhereInput[]
    tipo_doador?: StringFilter<"Doador"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type DoadorOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_doador?: SortOrder
    _count?: DoadorCountOrderByAggregateInput
    _max?: DoadorMaxOrderByAggregateInput
    _min?: DoadorMinOrderByAggregateInput
  }

  export type DoadorScalarWhereWithAggregatesInput = {
    AND?: DoadorScalarWhereWithAggregatesInput | DoadorScalarWhereWithAggregatesInput[]
    OR?: DoadorScalarWhereWithAggregatesInput[]
    NOT?: DoadorScalarWhereWithAggregatesInput | DoadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doador"> | string
    tipo_doador?: StringWithAggregatesFilter<"Doador"> | string
  }

  export type ProfissionalApoioWhereInput = {
    AND?: ProfissionalApoioWhereInput | ProfissionalApoioWhereInput[]
    OR?: ProfissionalApoioWhereInput[]
    NOT?: ProfissionalApoioWhereInput | ProfissionalApoioWhereInput[]
    id?: StringFilter<"ProfissionalApoio"> | string
    areaAtuacao?: StringFilter<"ProfissionalApoio"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Disponibilidade?: DisponibilidadeListRelationFilter
    Encaminhamento?: EncaminhamentoListRelationFilter
  }

  export type ProfissionalApoioOrderByWithRelationInput = {
    id?: SortOrder
    areaAtuacao?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    Disponibilidade?: DisponibilidadeOrderByRelationAggregateInput
    Encaminhamento?: EncaminhamentoOrderByRelationAggregateInput
  }

  export type ProfissionalApoioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfissionalApoioWhereInput | ProfissionalApoioWhereInput[]
    OR?: ProfissionalApoioWhereInput[]
    NOT?: ProfissionalApoioWhereInput | ProfissionalApoioWhereInput[]
    areaAtuacao?: StringFilter<"ProfissionalApoio"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Disponibilidade?: DisponibilidadeListRelationFilter
    Encaminhamento?: EncaminhamentoListRelationFilter
  }, "id">

  export type ProfissionalApoioOrderByWithAggregationInput = {
    id?: SortOrder
    areaAtuacao?: SortOrder
    _count?: ProfissionalApoioCountOrderByAggregateInput
    _max?: ProfissionalApoioMaxOrderByAggregateInput
    _min?: ProfissionalApoioMinOrderByAggregateInput
  }

  export type ProfissionalApoioScalarWhereWithAggregatesInput = {
    AND?: ProfissionalApoioScalarWhereWithAggregatesInput | ProfissionalApoioScalarWhereWithAggregatesInput[]
    OR?: ProfissionalApoioScalarWhereWithAggregatesInput[]
    NOT?: ProfissionalApoioScalarWhereWithAggregatesInput | ProfissionalApoioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfissionalApoio"> | string
    areaAtuacao?: StringWithAggregatesFilter<"ProfissionalApoio"> | string
  }

  export type DisponibilidadeWhereInput = {
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    id?: StringFilter<"Disponibilidade"> | string
    id_profissional?: StringFilter<"Disponibilidade"> | string
    data?: StringFilter<"Disponibilidade"> | string
    horario?: StringFilter<"Disponibilidade"> | string
    profissional?: XOR<ProfissionalApoioScalarRelationFilter, ProfissionalApoioWhereInput>
  }

  export type DisponibilidadeOrderByWithRelationInput = {
    id?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    profissional?: ProfissionalApoioOrderByWithRelationInput
  }

  export type DisponibilidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    OR?: DisponibilidadeWhereInput[]
    NOT?: DisponibilidadeWhereInput | DisponibilidadeWhereInput[]
    id_profissional?: StringFilter<"Disponibilidade"> | string
    data?: StringFilter<"Disponibilidade"> | string
    horario?: StringFilter<"Disponibilidade"> | string
    profissional?: XOR<ProfissionalApoioScalarRelationFilter, ProfissionalApoioWhereInput>
  }, "id">

  export type DisponibilidadeOrderByWithAggregationInput = {
    id?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    _count?: DisponibilidadeCountOrderByAggregateInput
    _max?: DisponibilidadeMaxOrderByAggregateInput
    _min?: DisponibilidadeMinOrderByAggregateInput
  }

  export type DisponibilidadeScalarWhereWithAggregatesInput = {
    AND?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    OR?: DisponibilidadeScalarWhereWithAggregatesInput[]
    NOT?: DisponibilidadeScalarWhereWithAggregatesInput | DisponibilidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disponibilidade"> | string
    id_profissional?: StringWithAggregatesFilter<"Disponibilidade"> | string
    data?: StringWithAggregatesFilter<"Disponibilidade"> | string
    horario?: StringWithAggregatesFilter<"Disponibilidade"> | string
  }

  export type EncaminhamentoWhereInput = {
    AND?: EncaminhamentoWhereInput | EncaminhamentoWhereInput[]
    OR?: EncaminhamentoWhereInput[]
    NOT?: EncaminhamentoWhereInput | EncaminhamentoWhereInput[]
    id?: StringFilter<"Encaminhamento"> | string
    id_mae?: StringFilter<"Encaminhamento"> | string
    id_profissional?: StringFilter<"Encaminhamento"> | string
    data?: DateTimeFilter<"Encaminhamento"> | Date | string
    status?: EnumStatusEncaminhamentoFilter<"Encaminhamento"> | $Enums.StatusEncaminhamento
    tipo_servico?: StringFilter<"Encaminhamento"> | string
    maeSolo?: XOR<MaeSoloScalarRelationFilter, MaeSoloWhereInput>
    profissional?: XOR<ProfissionalApoioScalarRelationFilter, ProfissionalApoioWhereInput>
    Atendimento?: AtendimentoListRelationFilter
  }

  export type EncaminhamentoOrderByWithRelationInput = {
    id?: SortOrder
    id_mae?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    status?: SortOrder
    tipo_servico?: SortOrder
    maeSolo?: MaeSoloOrderByWithRelationInput
    profissional?: ProfissionalApoioOrderByWithRelationInput
    Atendimento?: AtendimentoOrderByRelationAggregateInput
  }

  export type EncaminhamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EncaminhamentoWhereInput | EncaminhamentoWhereInput[]
    OR?: EncaminhamentoWhereInput[]
    NOT?: EncaminhamentoWhereInput | EncaminhamentoWhereInput[]
    id_mae?: StringFilter<"Encaminhamento"> | string
    id_profissional?: StringFilter<"Encaminhamento"> | string
    data?: DateTimeFilter<"Encaminhamento"> | Date | string
    status?: EnumStatusEncaminhamentoFilter<"Encaminhamento"> | $Enums.StatusEncaminhamento
    tipo_servico?: StringFilter<"Encaminhamento"> | string
    maeSolo?: XOR<MaeSoloScalarRelationFilter, MaeSoloWhereInput>
    profissional?: XOR<ProfissionalApoioScalarRelationFilter, ProfissionalApoioWhereInput>
    Atendimento?: AtendimentoListRelationFilter
  }, "id">

  export type EncaminhamentoOrderByWithAggregationInput = {
    id?: SortOrder
    id_mae?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    status?: SortOrder
    tipo_servico?: SortOrder
    _count?: EncaminhamentoCountOrderByAggregateInput
    _max?: EncaminhamentoMaxOrderByAggregateInput
    _min?: EncaminhamentoMinOrderByAggregateInput
  }

  export type EncaminhamentoScalarWhereWithAggregatesInput = {
    AND?: EncaminhamentoScalarWhereWithAggregatesInput | EncaminhamentoScalarWhereWithAggregatesInput[]
    OR?: EncaminhamentoScalarWhereWithAggregatesInput[]
    NOT?: EncaminhamentoScalarWhereWithAggregatesInput | EncaminhamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Encaminhamento"> | string
    id_mae?: StringWithAggregatesFilter<"Encaminhamento"> | string
    id_profissional?: StringWithAggregatesFilter<"Encaminhamento"> | string
    data?: DateTimeWithAggregatesFilter<"Encaminhamento"> | Date | string
    status?: EnumStatusEncaminhamentoWithAggregatesFilter<"Encaminhamento"> | $Enums.StatusEncaminhamento
    tipo_servico?: StringWithAggregatesFilter<"Encaminhamento"> | string
  }

  export type AtendimentoWhereInput = {
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    id_encaminhamento?: StringFilter<"Atendimento"> | string
    observacoes?: StringFilter<"Atendimento"> | string
    data?: DateTimeFilter<"Atendimento"> | Date | string
    encaminhamento?: XOR<EncaminhamentoScalarRelationFilter, EncaminhamentoWhereInput>
  }

  export type AtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    id_encaminhamento?: SortOrder
    observacoes?: SortOrder
    data?: SortOrder
    encaminhamento?: EncaminhamentoOrderByWithRelationInput
  }

  export type AtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id_encaminhamento?: StringFilter<"Atendimento"> | string
    observacoes?: StringFilter<"Atendimento"> | string
    data?: DateTimeFilter<"Atendimento"> | Date | string
    encaminhamento?: XOR<EncaminhamentoScalarRelationFilter, EncaminhamentoWhereInput>
  }, "id">

  export type AtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    id_encaminhamento?: SortOrder
    observacoes?: SortOrder
    data?: SortOrder
    _count?: AtendimentoCountOrderByAggregateInput
    _max?: AtendimentoMaxOrderByAggregateInput
    _min?: AtendimentoMinOrderByAggregateInput
  }

  export type AtendimentoScalarWhereWithAggregatesInput = {
    AND?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    OR?: AtendimentoScalarWhereWithAggregatesInput[]
    NOT?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atendimento"> | string
    id_encaminhamento?: StringWithAggregatesFilter<"Atendimento"> | string
    observacoes?: StringWithAggregatesFilter<"Atendimento"> | string
    data?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    MaeSolo?: MaeSoloCreateNestedManyWithoutUsuarioInput
    Doador?: DoadorCreateNestedManyWithoutUsuarioInput
    ProfissionalApoio?: ProfissionalApoioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    MaeSolo?: MaeSoloUncheckedCreateNestedManyWithoutUsuarioInput
    Doador?: DoadorUncheckedCreateNestedManyWithoutUsuarioInput
    ProfissionalApoio?: ProfissionalApoioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    MaeSolo?: MaeSoloUpdateManyWithoutUsuarioNestedInput
    Doador?: DoadorUpdateManyWithoutUsuarioNestedInput
    ProfissionalApoio?: ProfissionalApoioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    MaeSolo?: MaeSoloUncheckedUpdateManyWithoutUsuarioNestedInput
    Doador?: DoadorUncheckedUpdateManyWithoutUsuarioNestedInput
    ProfissionalApoio?: ProfissionalApoioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaeSoloCreateInput = {
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    usuario: UsuarioCreateNestedOneWithoutMaeSoloInput
    Filho?: FilhoCreateNestedManyWithoutMaeInput
    Encaminhamento?: EncaminhamentoCreateNestedManyWithoutMaeSoloInput
  }

  export type MaeSoloUncheckedCreateInput = {
    id: string
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    Filho?: FilhoUncheckedCreateNestedManyWithoutMaeInput
    Encaminhamento?: EncaminhamentoUncheckedCreateNestedManyWithoutMaeSoloInput
  }

  export type MaeSoloUpdateInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutMaeSoloNestedInput
    Filho?: FilhoUpdateManyWithoutMaeNestedInput
    Encaminhamento?: EncaminhamentoUpdateManyWithoutMaeSoloNestedInput
  }

  export type MaeSoloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    Filho?: FilhoUncheckedUpdateManyWithoutMaeNestedInput
    Encaminhamento?: EncaminhamentoUncheckedUpdateManyWithoutMaeSoloNestedInput
  }

  export type MaeSoloCreateManyInput = {
    id: string
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
  }

  export type MaeSoloUpdateManyMutationInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaeSoloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FilhoCreateInput = {
    id?: string
    nome: string
    data_nascimento: Date | string
    mae: MaeSoloCreateNestedOneWithoutFilhoInput
  }

  export type FilhoUncheckedCreateInput = {
    id?: string
    nome: string
    data_nascimento: Date | string
    idMae: string
  }

  export type FilhoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    mae?: MaeSoloUpdateOneRequiredWithoutFilhoNestedInput
  }

  export type FilhoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    idMae?: StringFieldUpdateOperationsInput | string
  }

  export type FilhoCreateManyInput = {
    id?: string
    nome: string
    data_nascimento: Date | string
    idMae: string
  }

  export type FilhoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilhoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    idMae?: StringFieldUpdateOperationsInput | string
  }

  export type DoadorCreateInput = {
    tipo_doador: string
    usuario: UsuarioCreateNestedOneWithoutDoadorInput
  }

  export type DoadorUncheckedCreateInput = {
    id: string
    tipo_doador: string
  }

  export type DoadorUpdateInput = {
    tipo_doador?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutDoadorNestedInput
  }

  export type DoadorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_doador?: StringFieldUpdateOperationsInput | string
  }

  export type DoadorCreateManyInput = {
    id: string
    tipo_doador: string
  }

  export type DoadorUpdateManyMutationInput = {
    tipo_doador?: StringFieldUpdateOperationsInput | string
  }

  export type DoadorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_doador?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionalApoioCreateInput = {
    areaAtuacao: string
    usuario: UsuarioCreateNestedOneWithoutProfissionalApoioInput
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfissionalInput
    Encaminhamento?: EncaminhamentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioUncheckedCreateInput = {
    id: string
    areaAtuacao: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfissionalInput
    Encaminhamento?: EncaminhamentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioUpdateInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfissionalApoioNestedInput
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfissionalNestedInput
    Encaminhamento?: EncaminhamentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalApoioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfissionalNestedInput
    Encaminhamento?: EncaminhamentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalApoioCreateManyInput = {
    id: string
    areaAtuacao: string
  }

  export type ProfissionalApoioUpdateManyMutationInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionalApoioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateInput = {
    id?: string
    data: string
    horario: string
    profissional: ProfissionalApoioCreateNestedOneWithoutDisponibilidadeInput
  }

  export type DisponibilidadeUncheckedCreateInput = {
    id?: string
    id_profissional: string
    data: string
    horario: string
  }

  export type DisponibilidadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalApoioUpdateOneRequiredWithoutDisponibilidadeNestedInput
  }

  export type DisponibilidadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateManyInput = {
    id?: string
    id_profissional: string
    data: string
    horario: string
  }

  export type DisponibilidadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type EncaminhamentoCreateInput = {
    id?: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    maeSolo: MaeSoloCreateNestedOneWithoutEncaminhamentoInput
    profissional: ProfissionalApoioCreateNestedOneWithoutEncaminhamentoInput
    Atendimento?: AtendimentoCreateNestedManyWithoutEncaminhamentoInput
  }

  export type EncaminhamentoUncheckedCreateInput = {
    id?: string
    id_mae: string
    id_profissional: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    Atendimento?: AtendimentoUncheckedCreateNestedManyWithoutEncaminhamentoInput
  }

  export type EncaminhamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    maeSolo?: MaeSoloUpdateOneRequiredWithoutEncaminhamentoNestedInput
    profissional?: ProfissionalApoioUpdateOneRequiredWithoutEncaminhamentoNestedInput
    Atendimento?: AtendimentoUpdateManyWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_mae?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    Atendimento?: AtendimentoUncheckedUpdateManyWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoCreateManyInput = {
    id?: string
    id_mae: string
    id_profissional: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
  }

  export type EncaminhamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
  }

  export type EncaminhamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_mae?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoCreateInput = {
    id?: string
    observacoes: string
    data: Date | string
    encaminhamento: EncaminhamentoCreateNestedOneWithoutAtendimentoInput
  }

  export type AtendimentoUncheckedCreateInput = {
    id?: string
    id_encaminhamento: string
    observacoes: string
    data: Date | string
  }

  export type AtendimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    encaminhamento?: EncaminhamentoUpdateOneRequiredWithoutAtendimentoNestedInput
  }

  export type AtendimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_encaminhamento?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoCreateManyInput = {
    id?: string
    id_encaminhamento: string
    observacoes: string
    data: Date | string
  }

  export type AtendimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_encaminhamento?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MaeSoloListRelationFilter = {
    every?: MaeSoloWhereInput
    some?: MaeSoloWhereInput
    none?: MaeSoloWhereInput
  }

  export type DoadorListRelationFilter = {
    every?: DoadorWhereInput
    some?: DoadorWhereInput
    none?: DoadorWhereInput
  }

  export type ProfissionalApoioListRelationFilter = {
    every?: ProfissionalApoioWhereInput
    some?: ProfissionalApoioWhereInput
    none?: ProfissionalApoioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MaeSoloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfissionalApoioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documentoIdentificacao?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documentoIdentificacao?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    documentoIdentificacao?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEscolaridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Escolaridade | EnumEscolaridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Escolaridade[]
    notIn?: $Enums.Escolaridade[]
    not?: NestedEnumEscolaridadeFilter<$PrismaModel> | $Enums.Escolaridade
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FilhoListRelationFilter = {
    every?: FilhoWhereInput
    some?: FilhoWhereInput
    none?: FilhoWhereInput
  }

  export type EncaminhamentoListRelationFilter = {
    every?: EncaminhamentoWhereInput
    some?: EncaminhamentoWhereInput
    none?: EncaminhamentoWhereInput
  }

  export type FilhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EncaminhamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaeSoloCountOrderByAggregateInput = {
    id?: SortOrder
    data_nascimento?: SortOrder
    escolaridade?: SortOrder
    endereco?: SortOrder
    rendaMensal?: SortOrder
    situacaoTrabalho?: SortOrder
  }

  export type MaeSoloAvgOrderByAggregateInput = {
    rendaMensal?: SortOrder
  }

  export type MaeSoloMaxOrderByAggregateInput = {
    id?: SortOrder
    data_nascimento?: SortOrder
    escolaridade?: SortOrder
    endereco?: SortOrder
    rendaMensal?: SortOrder
    situacaoTrabalho?: SortOrder
  }

  export type MaeSoloMinOrderByAggregateInput = {
    id?: SortOrder
    data_nascimento?: SortOrder
    escolaridade?: SortOrder
    endereco?: SortOrder
    rendaMensal?: SortOrder
    situacaoTrabalho?: SortOrder
  }

  export type MaeSoloSumOrderByAggregateInput = {
    rendaMensal?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEscolaridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Escolaridade | EnumEscolaridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Escolaridade[]
    notIn?: $Enums.Escolaridade[]
    not?: NestedEnumEscolaridadeWithAggregatesFilter<$PrismaModel> | $Enums.Escolaridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscolaridadeFilter<$PrismaModel>
    _max?: NestedEnumEscolaridadeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MaeSoloScalarRelationFilter = {
    is?: MaeSoloWhereInput
    isNot?: MaeSoloWhereInput
  }

  export type FilhoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    idMae?: SortOrder
  }

  export type FilhoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    idMae?: SortOrder
  }

  export type FilhoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data_nascimento?: SortOrder
    idMae?: SortOrder
  }

  export type DoadorCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_doador?: SortOrder
  }

  export type DoadorMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_doador?: SortOrder
  }

  export type DoadorMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_doador?: SortOrder
  }

  export type DisponibilidadeListRelationFilter = {
    every?: DisponibilidadeWhereInput
    some?: DisponibilidadeWhereInput
    none?: DisponibilidadeWhereInput
  }

  export type DisponibilidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfissionalApoioCountOrderByAggregateInput = {
    id?: SortOrder
    areaAtuacao?: SortOrder
  }

  export type ProfissionalApoioMaxOrderByAggregateInput = {
    id?: SortOrder
    areaAtuacao?: SortOrder
  }

  export type ProfissionalApoioMinOrderByAggregateInput = {
    id?: SortOrder
    areaAtuacao?: SortOrder
  }

  export type ProfissionalApoioScalarRelationFilter = {
    is?: ProfissionalApoioWhereInput
    isNot?: ProfissionalApoioWhereInput
  }

  export type DisponibilidadeCountOrderByAggregateInput = {
    id?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    horario?: SortOrder
  }

  export type DisponibilidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    horario?: SortOrder
  }

  export type DisponibilidadeMinOrderByAggregateInput = {
    id?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    horario?: SortOrder
  }

  export type EnumStatusEncaminhamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncaminhamento | EnumStatusEncaminhamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncaminhamento[]
    notIn?: $Enums.StatusEncaminhamento[]
    not?: NestedEnumStatusEncaminhamentoFilter<$PrismaModel> | $Enums.StatusEncaminhamento
  }

  export type AtendimentoListRelationFilter = {
    every?: AtendimentoWhereInput
    some?: AtendimentoWhereInput
    none?: AtendimentoWhereInput
  }

  export type AtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EncaminhamentoCountOrderByAggregateInput = {
    id?: SortOrder
    id_mae?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    status?: SortOrder
    tipo_servico?: SortOrder
  }

  export type EncaminhamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_mae?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    status?: SortOrder
    tipo_servico?: SortOrder
  }

  export type EncaminhamentoMinOrderByAggregateInput = {
    id?: SortOrder
    id_mae?: SortOrder
    id_profissional?: SortOrder
    data?: SortOrder
    status?: SortOrder
    tipo_servico?: SortOrder
  }

  export type EnumStatusEncaminhamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncaminhamento | EnumStatusEncaminhamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncaminhamento[]
    notIn?: $Enums.StatusEncaminhamento[]
    not?: NestedEnumStatusEncaminhamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusEncaminhamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEncaminhamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusEncaminhamentoFilter<$PrismaModel>
  }

  export type EncaminhamentoScalarRelationFilter = {
    is?: EncaminhamentoWhereInput
    isNot?: EncaminhamentoWhereInput
  }

  export type AtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    id_encaminhamento?: SortOrder
    observacoes?: SortOrder
    data?: SortOrder
  }

  export type AtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_encaminhamento?: SortOrder
    observacoes?: SortOrder
    data?: SortOrder
  }

  export type AtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    id_encaminhamento?: SortOrder
    observacoes?: SortOrder
    data?: SortOrder
  }

  export type MaeSoloCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MaeSoloCreateWithoutUsuarioInput, MaeSoloUncheckedCreateWithoutUsuarioInput> | MaeSoloCreateWithoutUsuarioInput[] | MaeSoloUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MaeSoloCreateOrConnectWithoutUsuarioInput | MaeSoloCreateOrConnectWithoutUsuarioInput[]
    createMany?: MaeSoloCreateManyUsuarioInputEnvelope
    connect?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
  }

  export type DoadorCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DoadorCreateWithoutUsuarioInput, DoadorUncheckedCreateWithoutUsuarioInput> | DoadorCreateWithoutUsuarioInput[] | DoadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoadorCreateOrConnectWithoutUsuarioInput | DoadorCreateOrConnectWithoutUsuarioInput[]
    createMany?: DoadorCreateManyUsuarioInputEnvelope
    connect?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
  }

  export type ProfissionalApoioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProfissionalApoioCreateWithoutUsuarioInput, ProfissionalApoioUncheckedCreateWithoutUsuarioInput> | ProfissionalApoioCreateWithoutUsuarioInput[] | ProfissionalApoioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutUsuarioInput | ProfissionalApoioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProfissionalApoioCreateManyUsuarioInputEnvelope
    connect?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
  }

  export type MaeSoloUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MaeSoloCreateWithoutUsuarioInput, MaeSoloUncheckedCreateWithoutUsuarioInput> | MaeSoloCreateWithoutUsuarioInput[] | MaeSoloUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MaeSoloCreateOrConnectWithoutUsuarioInput | MaeSoloCreateOrConnectWithoutUsuarioInput[]
    createMany?: MaeSoloCreateManyUsuarioInputEnvelope
    connect?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
  }

  export type DoadorUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DoadorCreateWithoutUsuarioInput, DoadorUncheckedCreateWithoutUsuarioInput> | DoadorCreateWithoutUsuarioInput[] | DoadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoadorCreateOrConnectWithoutUsuarioInput | DoadorCreateOrConnectWithoutUsuarioInput[]
    createMany?: DoadorCreateManyUsuarioInputEnvelope
    connect?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
  }

  export type ProfissionalApoioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProfissionalApoioCreateWithoutUsuarioInput, ProfissionalApoioUncheckedCreateWithoutUsuarioInput> | ProfissionalApoioCreateWithoutUsuarioInput[] | ProfissionalApoioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutUsuarioInput | ProfissionalApoioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProfissionalApoioCreateManyUsuarioInputEnvelope
    connect?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MaeSoloUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MaeSoloCreateWithoutUsuarioInput, MaeSoloUncheckedCreateWithoutUsuarioInput> | MaeSoloCreateWithoutUsuarioInput[] | MaeSoloUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MaeSoloCreateOrConnectWithoutUsuarioInput | MaeSoloCreateOrConnectWithoutUsuarioInput[]
    upsert?: MaeSoloUpsertWithWhereUniqueWithoutUsuarioInput | MaeSoloUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MaeSoloCreateManyUsuarioInputEnvelope
    set?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    disconnect?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    delete?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    connect?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    update?: MaeSoloUpdateWithWhereUniqueWithoutUsuarioInput | MaeSoloUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MaeSoloUpdateManyWithWhereWithoutUsuarioInput | MaeSoloUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MaeSoloScalarWhereInput | MaeSoloScalarWhereInput[]
  }

  export type DoadorUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DoadorCreateWithoutUsuarioInput, DoadorUncheckedCreateWithoutUsuarioInput> | DoadorCreateWithoutUsuarioInput[] | DoadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoadorCreateOrConnectWithoutUsuarioInput | DoadorCreateOrConnectWithoutUsuarioInput[]
    upsert?: DoadorUpsertWithWhereUniqueWithoutUsuarioInput | DoadorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DoadorCreateManyUsuarioInputEnvelope
    set?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    disconnect?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    delete?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    connect?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    update?: DoadorUpdateWithWhereUniqueWithoutUsuarioInput | DoadorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DoadorUpdateManyWithWhereWithoutUsuarioInput | DoadorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DoadorScalarWhereInput | DoadorScalarWhereInput[]
  }

  export type ProfissionalApoioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProfissionalApoioCreateWithoutUsuarioInput, ProfissionalApoioUncheckedCreateWithoutUsuarioInput> | ProfissionalApoioCreateWithoutUsuarioInput[] | ProfissionalApoioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutUsuarioInput | ProfissionalApoioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProfissionalApoioUpsertWithWhereUniqueWithoutUsuarioInput | ProfissionalApoioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProfissionalApoioCreateManyUsuarioInputEnvelope
    set?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    disconnect?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    delete?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    connect?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    update?: ProfissionalApoioUpdateWithWhereUniqueWithoutUsuarioInput | ProfissionalApoioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProfissionalApoioUpdateManyWithWhereWithoutUsuarioInput | ProfissionalApoioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProfissionalApoioScalarWhereInput | ProfissionalApoioScalarWhereInput[]
  }

  export type MaeSoloUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MaeSoloCreateWithoutUsuarioInput, MaeSoloUncheckedCreateWithoutUsuarioInput> | MaeSoloCreateWithoutUsuarioInput[] | MaeSoloUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MaeSoloCreateOrConnectWithoutUsuarioInput | MaeSoloCreateOrConnectWithoutUsuarioInput[]
    upsert?: MaeSoloUpsertWithWhereUniqueWithoutUsuarioInput | MaeSoloUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MaeSoloCreateManyUsuarioInputEnvelope
    set?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    disconnect?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    delete?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    connect?: MaeSoloWhereUniqueInput | MaeSoloWhereUniqueInput[]
    update?: MaeSoloUpdateWithWhereUniqueWithoutUsuarioInput | MaeSoloUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MaeSoloUpdateManyWithWhereWithoutUsuarioInput | MaeSoloUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MaeSoloScalarWhereInput | MaeSoloScalarWhereInput[]
  }

  export type DoadorUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DoadorCreateWithoutUsuarioInput, DoadorUncheckedCreateWithoutUsuarioInput> | DoadorCreateWithoutUsuarioInput[] | DoadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DoadorCreateOrConnectWithoutUsuarioInput | DoadorCreateOrConnectWithoutUsuarioInput[]
    upsert?: DoadorUpsertWithWhereUniqueWithoutUsuarioInput | DoadorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DoadorCreateManyUsuarioInputEnvelope
    set?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    disconnect?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    delete?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    connect?: DoadorWhereUniqueInput | DoadorWhereUniqueInput[]
    update?: DoadorUpdateWithWhereUniqueWithoutUsuarioInput | DoadorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DoadorUpdateManyWithWhereWithoutUsuarioInput | DoadorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DoadorScalarWhereInput | DoadorScalarWhereInput[]
  }

  export type ProfissionalApoioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProfissionalApoioCreateWithoutUsuarioInput, ProfissionalApoioUncheckedCreateWithoutUsuarioInput> | ProfissionalApoioCreateWithoutUsuarioInput[] | ProfissionalApoioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutUsuarioInput | ProfissionalApoioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProfissionalApoioUpsertWithWhereUniqueWithoutUsuarioInput | ProfissionalApoioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProfissionalApoioCreateManyUsuarioInputEnvelope
    set?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    disconnect?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    delete?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    connect?: ProfissionalApoioWhereUniqueInput | ProfissionalApoioWhereUniqueInput[]
    update?: ProfissionalApoioUpdateWithWhereUniqueWithoutUsuarioInput | ProfissionalApoioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProfissionalApoioUpdateManyWithWhereWithoutUsuarioInput | ProfissionalApoioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProfissionalApoioScalarWhereInput | ProfissionalApoioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutMaeSoloInput = {
    create?: XOR<UsuarioCreateWithoutMaeSoloInput, UsuarioUncheckedCreateWithoutMaeSoloInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMaeSoloInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FilhoCreateNestedManyWithoutMaeInput = {
    create?: XOR<FilhoCreateWithoutMaeInput, FilhoUncheckedCreateWithoutMaeInput> | FilhoCreateWithoutMaeInput[] | FilhoUncheckedCreateWithoutMaeInput[]
    connectOrCreate?: FilhoCreateOrConnectWithoutMaeInput | FilhoCreateOrConnectWithoutMaeInput[]
    createMany?: FilhoCreateManyMaeInputEnvelope
    connect?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
  }

  export type EncaminhamentoCreateNestedManyWithoutMaeSoloInput = {
    create?: XOR<EncaminhamentoCreateWithoutMaeSoloInput, EncaminhamentoUncheckedCreateWithoutMaeSoloInput> | EncaminhamentoCreateWithoutMaeSoloInput[] | EncaminhamentoUncheckedCreateWithoutMaeSoloInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutMaeSoloInput | EncaminhamentoCreateOrConnectWithoutMaeSoloInput[]
    createMany?: EncaminhamentoCreateManyMaeSoloInputEnvelope
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
  }

  export type FilhoUncheckedCreateNestedManyWithoutMaeInput = {
    create?: XOR<FilhoCreateWithoutMaeInput, FilhoUncheckedCreateWithoutMaeInput> | FilhoCreateWithoutMaeInput[] | FilhoUncheckedCreateWithoutMaeInput[]
    connectOrCreate?: FilhoCreateOrConnectWithoutMaeInput | FilhoCreateOrConnectWithoutMaeInput[]
    createMany?: FilhoCreateManyMaeInputEnvelope
    connect?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
  }

  export type EncaminhamentoUncheckedCreateNestedManyWithoutMaeSoloInput = {
    create?: XOR<EncaminhamentoCreateWithoutMaeSoloInput, EncaminhamentoUncheckedCreateWithoutMaeSoloInput> | EncaminhamentoCreateWithoutMaeSoloInput[] | EncaminhamentoUncheckedCreateWithoutMaeSoloInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutMaeSoloInput | EncaminhamentoCreateOrConnectWithoutMaeSoloInput[]
    createMany?: EncaminhamentoCreateManyMaeSoloInputEnvelope
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEscolaridadeFieldUpdateOperationsInput = {
    set?: $Enums.Escolaridade
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutMaeSoloNestedInput = {
    create?: XOR<UsuarioCreateWithoutMaeSoloInput, UsuarioUncheckedCreateWithoutMaeSoloInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMaeSoloInput
    upsert?: UsuarioUpsertWithoutMaeSoloInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMaeSoloInput, UsuarioUpdateWithoutMaeSoloInput>, UsuarioUncheckedUpdateWithoutMaeSoloInput>
  }

  export type FilhoUpdateManyWithoutMaeNestedInput = {
    create?: XOR<FilhoCreateWithoutMaeInput, FilhoUncheckedCreateWithoutMaeInput> | FilhoCreateWithoutMaeInput[] | FilhoUncheckedCreateWithoutMaeInput[]
    connectOrCreate?: FilhoCreateOrConnectWithoutMaeInput | FilhoCreateOrConnectWithoutMaeInput[]
    upsert?: FilhoUpsertWithWhereUniqueWithoutMaeInput | FilhoUpsertWithWhereUniqueWithoutMaeInput[]
    createMany?: FilhoCreateManyMaeInputEnvelope
    set?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    disconnect?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    delete?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    connect?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    update?: FilhoUpdateWithWhereUniqueWithoutMaeInput | FilhoUpdateWithWhereUniqueWithoutMaeInput[]
    updateMany?: FilhoUpdateManyWithWhereWithoutMaeInput | FilhoUpdateManyWithWhereWithoutMaeInput[]
    deleteMany?: FilhoScalarWhereInput | FilhoScalarWhereInput[]
  }

  export type EncaminhamentoUpdateManyWithoutMaeSoloNestedInput = {
    create?: XOR<EncaminhamentoCreateWithoutMaeSoloInput, EncaminhamentoUncheckedCreateWithoutMaeSoloInput> | EncaminhamentoCreateWithoutMaeSoloInput[] | EncaminhamentoUncheckedCreateWithoutMaeSoloInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutMaeSoloInput | EncaminhamentoCreateOrConnectWithoutMaeSoloInput[]
    upsert?: EncaminhamentoUpsertWithWhereUniqueWithoutMaeSoloInput | EncaminhamentoUpsertWithWhereUniqueWithoutMaeSoloInput[]
    createMany?: EncaminhamentoCreateManyMaeSoloInputEnvelope
    set?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    disconnect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    delete?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    update?: EncaminhamentoUpdateWithWhereUniqueWithoutMaeSoloInput | EncaminhamentoUpdateWithWhereUniqueWithoutMaeSoloInput[]
    updateMany?: EncaminhamentoUpdateManyWithWhereWithoutMaeSoloInput | EncaminhamentoUpdateManyWithWhereWithoutMaeSoloInput[]
    deleteMany?: EncaminhamentoScalarWhereInput | EncaminhamentoScalarWhereInput[]
  }

  export type FilhoUncheckedUpdateManyWithoutMaeNestedInput = {
    create?: XOR<FilhoCreateWithoutMaeInput, FilhoUncheckedCreateWithoutMaeInput> | FilhoCreateWithoutMaeInput[] | FilhoUncheckedCreateWithoutMaeInput[]
    connectOrCreate?: FilhoCreateOrConnectWithoutMaeInput | FilhoCreateOrConnectWithoutMaeInput[]
    upsert?: FilhoUpsertWithWhereUniqueWithoutMaeInput | FilhoUpsertWithWhereUniqueWithoutMaeInput[]
    createMany?: FilhoCreateManyMaeInputEnvelope
    set?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    disconnect?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    delete?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    connect?: FilhoWhereUniqueInput | FilhoWhereUniqueInput[]
    update?: FilhoUpdateWithWhereUniqueWithoutMaeInput | FilhoUpdateWithWhereUniqueWithoutMaeInput[]
    updateMany?: FilhoUpdateManyWithWhereWithoutMaeInput | FilhoUpdateManyWithWhereWithoutMaeInput[]
    deleteMany?: FilhoScalarWhereInput | FilhoScalarWhereInput[]
  }

  export type EncaminhamentoUncheckedUpdateManyWithoutMaeSoloNestedInput = {
    create?: XOR<EncaminhamentoCreateWithoutMaeSoloInput, EncaminhamentoUncheckedCreateWithoutMaeSoloInput> | EncaminhamentoCreateWithoutMaeSoloInput[] | EncaminhamentoUncheckedCreateWithoutMaeSoloInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutMaeSoloInput | EncaminhamentoCreateOrConnectWithoutMaeSoloInput[]
    upsert?: EncaminhamentoUpsertWithWhereUniqueWithoutMaeSoloInput | EncaminhamentoUpsertWithWhereUniqueWithoutMaeSoloInput[]
    createMany?: EncaminhamentoCreateManyMaeSoloInputEnvelope
    set?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    disconnect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    delete?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    update?: EncaminhamentoUpdateWithWhereUniqueWithoutMaeSoloInput | EncaminhamentoUpdateWithWhereUniqueWithoutMaeSoloInput[]
    updateMany?: EncaminhamentoUpdateManyWithWhereWithoutMaeSoloInput | EncaminhamentoUpdateManyWithWhereWithoutMaeSoloInput[]
    deleteMany?: EncaminhamentoScalarWhereInput | EncaminhamentoScalarWhereInput[]
  }

  export type MaeSoloCreateNestedOneWithoutFilhoInput = {
    create?: XOR<MaeSoloCreateWithoutFilhoInput, MaeSoloUncheckedCreateWithoutFilhoInput>
    connectOrCreate?: MaeSoloCreateOrConnectWithoutFilhoInput
    connect?: MaeSoloWhereUniqueInput
  }

  export type MaeSoloUpdateOneRequiredWithoutFilhoNestedInput = {
    create?: XOR<MaeSoloCreateWithoutFilhoInput, MaeSoloUncheckedCreateWithoutFilhoInput>
    connectOrCreate?: MaeSoloCreateOrConnectWithoutFilhoInput
    upsert?: MaeSoloUpsertWithoutFilhoInput
    connect?: MaeSoloWhereUniqueInput
    update?: XOR<XOR<MaeSoloUpdateToOneWithWhereWithoutFilhoInput, MaeSoloUpdateWithoutFilhoInput>, MaeSoloUncheckedUpdateWithoutFilhoInput>
  }

  export type UsuarioCreateNestedOneWithoutDoadorInput = {
    create?: XOR<UsuarioCreateWithoutDoadorInput, UsuarioUncheckedCreateWithoutDoadorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDoadorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutDoadorNestedInput = {
    create?: XOR<UsuarioCreateWithoutDoadorInput, UsuarioUncheckedCreateWithoutDoadorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDoadorInput
    upsert?: UsuarioUpsertWithoutDoadorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDoadorInput, UsuarioUpdateWithoutDoadorInput>, UsuarioUncheckedUpdateWithoutDoadorInput>
  }

  export type UsuarioCreateNestedOneWithoutProfissionalApoioInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalApoioInput, UsuarioUncheckedCreateWithoutProfissionalApoioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalApoioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DisponibilidadeCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfissionalInput, DisponibilidadeUncheckedCreateWithoutProfissionalInput> | DisponibilidadeCreateWithoutProfissionalInput[] | DisponibilidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfissionalInput | DisponibilidadeCreateOrConnectWithoutProfissionalInput[]
    createMany?: DisponibilidadeCreateManyProfissionalInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type EncaminhamentoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<EncaminhamentoCreateWithoutProfissionalInput, EncaminhamentoUncheckedCreateWithoutProfissionalInput> | EncaminhamentoCreateWithoutProfissionalInput[] | EncaminhamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutProfissionalInput | EncaminhamentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: EncaminhamentoCreateManyProfissionalInputEnvelope
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
  }

  export type DisponibilidadeUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfissionalInput, DisponibilidadeUncheckedCreateWithoutProfissionalInput> | DisponibilidadeCreateWithoutProfissionalInput[] | DisponibilidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfissionalInput | DisponibilidadeCreateOrConnectWithoutProfissionalInput[]
    createMany?: DisponibilidadeCreateManyProfissionalInputEnvelope
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
  }

  export type EncaminhamentoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<EncaminhamentoCreateWithoutProfissionalInput, EncaminhamentoUncheckedCreateWithoutProfissionalInput> | EncaminhamentoCreateWithoutProfissionalInput[] | EncaminhamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutProfissionalInput | EncaminhamentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: EncaminhamentoCreateManyProfissionalInputEnvelope
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProfissionalApoioNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalApoioInput, UsuarioUncheckedCreateWithoutProfissionalApoioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalApoioInput
    upsert?: UsuarioUpsertWithoutProfissionalApoioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfissionalApoioInput, UsuarioUpdateWithoutProfissionalApoioInput>, UsuarioUncheckedUpdateWithoutProfissionalApoioInput>
  }

  export type DisponibilidadeUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfissionalInput, DisponibilidadeUncheckedCreateWithoutProfissionalInput> | DisponibilidadeCreateWithoutProfissionalInput[] | DisponibilidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfissionalInput | DisponibilidadeCreateOrConnectWithoutProfissionalInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutProfissionalInput | DisponibilidadeUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: DisponibilidadeCreateManyProfissionalInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutProfissionalInput | DisponibilidadeUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutProfissionalInput | DisponibilidadeUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type EncaminhamentoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<EncaminhamentoCreateWithoutProfissionalInput, EncaminhamentoUncheckedCreateWithoutProfissionalInput> | EncaminhamentoCreateWithoutProfissionalInput[] | EncaminhamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutProfissionalInput | EncaminhamentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: EncaminhamentoUpsertWithWhereUniqueWithoutProfissionalInput | EncaminhamentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: EncaminhamentoCreateManyProfissionalInputEnvelope
    set?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    disconnect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    delete?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    update?: EncaminhamentoUpdateWithWhereUniqueWithoutProfissionalInput | EncaminhamentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: EncaminhamentoUpdateManyWithWhereWithoutProfissionalInput | EncaminhamentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: EncaminhamentoScalarWhereInput | EncaminhamentoScalarWhereInput[]
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<DisponibilidadeCreateWithoutProfissionalInput, DisponibilidadeUncheckedCreateWithoutProfissionalInput> | DisponibilidadeCreateWithoutProfissionalInput[] | DisponibilidadeUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: DisponibilidadeCreateOrConnectWithoutProfissionalInput | DisponibilidadeCreateOrConnectWithoutProfissionalInput[]
    upsert?: DisponibilidadeUpsertWithWhereUniqueWithoutProfissionalInput | DisponibilidadeUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: DisponibilidadeCreateManyProfissionalInputEnvelope
    set?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    disconnect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    delete?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    connect?: DisponibilidadeWhereUniqueInput | DisponibilidadeWhereUniqueInput[]
    update?: DisponibilidadeUpdateWithWhereUniqueWithoutProfissionalInput | DisponibilidadeUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: DisponibilidadeUpdateManyWithWhereWithoutProfissionalInput | DisponibilidadeUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
  }

  export type EncaminhamentoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<EncaminhamentoCreateWithoutProfissionalInput, EncaminhamentoUncheckedCreateWithoutProfissionalInput> | EncaminhamentoCreateWithoutProfissionalInput[] | EncaminhamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutProfissionalInput | EncaminhamentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: EncaminhamentoUpsertWithWhereUniqueWithoutProfissionalInput | EncaminhamentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: EncaminhamentoCreateManyProfissionalInputEnvelope
    set?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    disconnect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    delete?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    connect?: EncaminhamentoWhereUniqueInput | EncaminhamentoWhereUniqueInput[]
    update?: EncaminhamentoUpdateWithWhereUniqueWithoutProfissionalInput | EncaminhamentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: EncaminhamentoUpdateManyWithWhereWithoutProfissionalInput | EncaminhamentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: EncaminhamentoScalarWhereInput | EncaminhamentoScalarWhereInput[]
  }

  export type ProfissionalApoioCreateNestedOneWithoutDisponibilidadeInput = {
    create?: XOR<ProfissionalApoioCreateWithoutDisponibilidadeInput, ProfissionalApoioUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutDisponibilidadeInput
    connect?: ProfissionalApoioWhereUniqueInput
  }

  export type ProfissionalApoioUpdateOneRequiredWithoutDisponibilidadeNestedInput = {
    create?: XOR<ProfissionalApoioCreateWithoutDisponibilidadeInput, ProfissionalApoioUncheckedCreateWithoutDisponibilidadeInput>
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutDisponibilidadeInput
    upsert?: ProfissionalApoioUpsertWithoutDisponibilidadeInput
    connect?: ProfissionalApoioWhereUniqueInput
    update?: XOR<XOR<ProfissionalApoioUpdateToOneWithWhereWithoutDisponibilidadeInput, ProfissionalApoioUpdateWithoutDisponibilidadeInput>, ProfissionalApoioUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type MaeSoloCreateNestedOneWithoutEncaminhamentoInput = {
    create?: XOR<MaeSoloCreateWithoutEncaminhamentoInput, MaeSoloUncheckedCreateWithoutEncaminhamentoInput>
    connectOrCreate?: MaeSoloCreateOrConnectWithoutEncaminhamentoInput
    connect?: MaeSoloWhereUniqueInput
  }

  export type ProfissionalApoioCreateNestedOneWithoutEncaminhamentoInput = {
    create?: XOR<ProfissionalApoioCreateWithoutEncaminhamentoInput, ProfissionalApoioUncheckedCreateWithoutEncaminhamentoInput>
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutEncaminhamentoInput
    connect?: ProfissionalApoioWhereUniqueInput
  }

  export type AtendimentoCreateNestedManyWithoutEncaminhamentoInput = {
    create?: XOR<AtendimentoCreateWithoutEncaminhamentoInput, AtendimentoUncheckedCreateWithoutEncaminhamentoInput> | AtendimentoCreateWithoutEncaminhamentoInput[] | AtendimentoUncheckedCreateWithoutEncaminhamentoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEncaminhamentoInput | AtendimentoCreateOrConnectWithoutEncaminhamentoInput[]
    createMany?: AtendimentoCreateManyEncaminhamentoInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutEncaminhamentoInput = {
    create?: XOR<AtendimentoCreateWithoutEncaminhamentoInput, AtendimentoUncheckedCreateWithoutEncaminhamentoInput> | AtendimentoCreateWithoutEncaminhamentoInput[] | AtendimentoUncheckedCreateWithoutEncaminhamentoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEncaminhamentoInput | AtendimentoCreateOrConnectWithoutEncaminhamentoInput[]
    createMany?: AtendimentoCreateManyEncaminhamentoInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type EnumStatusEncaminhamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusEncaminhamento
  }

  export type MaeSoloUpdateOneRequiredWithoutEncaminhamentoNestedInput = {
    create?: XOR<MaeSoloCreateWithoutEncaminhamentoInput, MaeSoloUncheckedCreateWithoutEncaminhamentoInput>
    connectOrCreate?: MaeSoloCreateOrConnectWithoutEncaminhamentoInput
    upsert?: MaeSoloUpsertWithoutEncaminhamentoInput
    connect?: MaeSoloWhereUniqueInput
    update?: XOR<XOR<MaeSoloUpdateToOneWithWhereWithoutEncaminhamentoInput, MaeSoloUpdateWithoutEncaminhamentoInput>, MaeSoloUncheckedUpdateWithoutEncaminhamentoInput>
  }

  export type ProfissionalApoioUpdateOneRequiredWithoutEncaminhamentoNestedInput = {
    create?: XOR<ProfissionalApoioCreateWithoutEncaminhamentoInput, ProfissionalApoioUncheckedCreateWithoutEncaminhamentoInput>
    connectOrCreate?: ProfissionalApoioCreateOrConnectWithoutEncaminhamentoInput
    upsert?: ProfissionalApoioUpsertWithoutEncaminhamentoInput
    connect?: ProfissionalApoioWhereUniqueInput
    update?: XOR<XOR<ProfissionalApoioUpdateToOneWithWhereWithoutEncaminhamentoInput, ProfissionalApoioUpdateWithoutEncaminhamentoInput>, ProfissionalApoioUncheckedUpdateWithoutEncaminhamentoInput>
  }

  export type AtendimentoUpdateManyWithoutEncaminhamentoNestedInput = {
    create?: XOR<AtendimentoCreateWithoutEncaminhamentoInput, AtendimentoUncheckedCreateWithoutEncaminhamentoInput> | AtendimentoCreateWithoutEncaminhamentoInput[] | AtendimentoUncheckedCreateWithoutEncaminhamentoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEncaminhamentoInput | AtendimentoCreateOrConnectWithoutEncaminhamentoInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutEncaminhamentoInput | AtendimentoUpsertWithWhereUniqueWithoutEncaminhamentoInput[]
    createMany?: AtendimentoCreateManyEncaminhamentoInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutEncaminhamentoInput | AtendimentoUpdateWithWhereUniqueWithoutEncaminhamentoInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutEncaminhamentoInput | AtendimentoUpdateManyWithWhereWithoutEncaminhamentoInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutEncaminhamentoNestedInput = {
    create?: XOR<AtendimentoCreateWithoutEncaminhamentoInput, AtendimentoUncheckedCreateWithoutEncaminhamentoInput> | AtendimentoCreateWithoutEncaminhamentoInput[] | AtendimentoUncheckedCreateWithoutEncaminhamentoInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEncaminhamentoInput | AtendimentoCreateOrConnectWithoutEncaminhamentoInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutEncaminhamentoInput | AtendimentoUpsertWithWhereUniqueWithoutEncaminhamentoInput[]
    createMany?: AtendimentoCreateManyEncaminhamentoInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutEncaminhamentoInput | AtendimentoUpdateWithWhereUniqueWithoutEncaminhamentoInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutEncaminhamentoInput | AtendimentoUpdateManyWithWhereWithoutEncaminhamentoInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type EncaminhamentoCreateNestedOneWithoutAtendimentoInput = {
    create?: XOR<EncaminhamentoCreateWithoutAtendimentoInput, EncaminhamentoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutAtendimentoInput
    connect?: EncaminhamentoWhereUniqueInput
  }

  export type EncaminhamentoUpdateOneRequiredWithoutAtendimentoNestedInput = {
    create?: XOR<EncaminhamentoCreateWithoutAtendimentoInput, EncaminhamentoUncheckedCreateWithoutAtendimentoInput>
    connectOrCreate?: EncaminhamentoCreateOrConnectWithoutAtendimentoInput
    upsert?: EncaminhamentoUpsertWithoutAtendimentoInput
    connect?: EncaminhamentoWhereUniqueInput
    update?: XOR<XOR<EncaminhamentoUpdateToOneWithWhereWithoutAtendimentoInput, EncaminhamentoUpdateWithoutAtendimentoInput>, EncaminhamentoUncheckedUpdateWithoutAtendimentoInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEscolaridadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Escolaridade | EnumEscolaridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Escolaridade[]
    notIn?: $Enums.Escolaridade[]
    not?: NestedEnumEscolaridadeFilter<$PrismaModel> | $Enums.Escolaridade
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEscolaridadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Escolaridade | EnumEscolaridadeFieldRefInput<$PrismaModel>
    in?: $Enums.Escolaridade[]
    notIn?: $Enums.Escolaridade[]
    not?: NestedEnumEscolaridadeWithAggregatesFilter<$PrismaModel> | $Enums.Escolaridade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscolaridadeFilter<$PrismaModel>
    _max?: NestedEnumEscolaridadeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusEncaminhamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncaminhamento | EnumStatusEncaminhamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncaminhamento[]
    notIn?: $Enums.StatusEncaminhamento[]
    not?: NestedEnumStatusEncaminhamentoFilter<$PrismaModel> | $Enums.StatusEncaminhamento
  }

  export type NestedEnumStatusEncaminhamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncaminhamento | EnumStatusEncaminhamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncaminhamento[]
    notIn?: $Enums.StatusEncaminhamento[]
    not?: NestedEnumStatusEncaminhamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusEncaminhamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEncaminhamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusEncaminhamentoFilter<$PrismaModel>
  }

  export type MaeSoloCreateWithoutUsuarioInput = {
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    Filho?: FilhoCreateNestedManyWithoutMaeInput
    Encaminhamento?: EncaminhamentoCreateNestedManyWithoutMaeSoloInput
  }

  export type MaeSoloUncheckedCreateWithoutUsuarioInput = {
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    Filho?: FilhoUncheckedCreateNestedManyWithoutMaeInput
    Encaminhamento?: EncaminhamentoUncheckedCreateNestedManyWithoutMaeSoloInput
  }

  export type MaeSoloCreateOrConnectWithoutUsuarioInput = {
    where: MaeSoloWhereUniqueInput
    create: XOR<MaeSoloCreateWithoutUsuarioInput, MaeSoloUncheckedCreateWithoutUsuarioInput>
  }

  export type MaeSoloCreateManyUsuarioInputEnvelope = {
    data: MaeSoloCreateManyUsuarioInput | MaeSoloCreateManyUsuarioInput[]
  }

  export type DoadorCreateWithoutUsuarioInput = {
    tipo_doador: string
  }

  export type DoadorUncheckedCreateWithoutUsuarioInput = {
    tipo_doador: string
  }

  export type DoadorCreateOrConnectWithoutUsuarioInput = {
    where: DoadorWhereUniqueInput
    create: XOR<DoadorCreateWithoutUsuarioInput, DoadorUncheckedCreateWithoutUsuarioInput>
  }

  export type DoadorCreateManyUsuarioInputEnvelope = {
    data: DoadorCreateManyUsuarioInput | DoadorCreateManyUsuarioInput[]
  }

  export type ProfissionalApoioCreateWithoutUsuarioInput = {
    areaAtuacao: string
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfissionalInput
    Encaminhamento?: EncaminhamentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioUncheckedCreateWithoutUsuarioInput = {
    areaAtuacao: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfissionalInput
    Encaminhamento?: EncaminhamentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioCreateOrConnectWithoutUsuarioInput = {
    where: ProfissionalApoioWhereUniqueInput
    create: XOR<ProfissionalApoioCreateWithoutUsuarioInput, ProfissionalApoioUncheckedCreateWithoutUsuarioInput>
  }

  export type ProfissionalApoioCreateManyUsuarioInputEnvelope = {
    data: ProfissionalApoioCreateManyUsuarioInput | ProfissionalApoioCreateManyUsuarioInput[]
  }

  export type MaeSoloUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MaeSoloWhereUniqueInput
    update: XOR<MaeSoloUpdateWithoutUsuarioInput, MaeSoloUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MaeSoloCreateWithoutUsuarioInput, MaeSoloUncheckedCreateWithoutUsuarioInput>
  }

  export type MaeSoloUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MaeSoloWhereUniqueInput
    data: XOR<MaeSoloUpdateWithoutUsuarioInput, MaeSoloUncheckedUpdateWithoutUsuarioInput>
  }

  export type MaeSoloUpdateManyWithWhereWithoutUsuarioInput = {
    where: MaeSoloScalarWhereInput
    data: XOR<MaeSoloUpdateManyMutationInput, MaeSoloUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MaeSoloScalarWhereInput = {
    AND?: MaeSoloScalarWhereInput | MaeSoloScalarWhereInput[]
    OR?: MaeSoloScalarWhereInput[]
    NOT?: MaeSoloScalarWhereInput | MaeSoloScalarWhereInput[]
    id?: StringFilter<"MaeSolo"> | string
    data_nascimento?: DateTimeFilter<"MaeSolo"> | Date | string
    escolaridade?: EnumEscolaridadeFilter<"MaeSolo"> | $Enums.Escolaridade
    endereco?: StringFilter<"MaeSolo"> | string
    rendaMensal?: IntFilter<"MaeSolo"> | number
    situacaoTrabalho?: BoolFilter<"MaeSolo"> | boolean
  }

  export type DoadorUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DoadorWhereUniqueInput
    update: XOR<DoadorUpdateWithoutUsuarioInput, DoadorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DoadorCreateWithoutUsuarioInput, DoadorUncheckedCreateWithoutUsuarioInput>
  }

  export type DoadorUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DoadorWhereUniqueInput
    data: XOR<DoadorUpdateWithoutUsuarioInput, DoadorUncheckedUpdateWithoutUsuarioInput>
  }

  export type DoadorUpdateManyWithWhereWithoutUsuarioInput = {
    where: DoadorScalarWhereInput
    data: XOR<DoadorUpdateManyMutationInput, DoadorUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DoadorScalarWhereInput = {
    AND?: DoadorScalarWhereInput | DoadorScalarWhereInput[]
    OR?: DoadorScalarWhereInput[]
    NOT?: DoadorScalarWhereInput | DoadorScalarWhereInput[]
    id?: StringFilter<"Doador"> | string
    tipo_doador?: StringFilter<"Doador"> | string
  }

  export type ProfissionalApoioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProfissionalApoioWhereUniqueInput
    update: XOR<ProfissionalApoioUpdateWithoutUsuarioInput, ProfissionalApoioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfissionalApoioCreateWithoutUsuarioInput, ProfissionalApoioUncheckedCreateWithoutUsuarioInput>
  }

  export type ProfissionalApoioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProfissionalApoioWhereUniqueInput
    data: XOR<ProfissionalApoioUpdateWithoutUsuarioInput, ProfissionalApoioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfissionalApoioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProfissionalApoioScalarWhereInput
    data: XOR<ProfissionalApoioUpdateManyMutationInput, ProfissionalApoioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProfissionalApoioScalarWhereInput = {
    AND?: ProfissionalApoioScalarWhereInput | ProfissionalApoioScalarWhereInput[]
    OR?: ProfissionalApoioScalarWhereInput[]
    NOT?: ProfissionalApoioScalarWhereInput | ProfissionalApoioScalarWhereInput[]
    id?: StringFilter<"ProfissionalApoio"> | string
    areaAtuacao?: StringFilter<"ProfissionalApoio"> | string
  }

  export type UsuarioCreateWithoutMaeSoloInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    Doador?: DoadorCreateNestedManyWithoutUsuarioInput
    ProfissionalApoio?: ProfissionalApoioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMaeSoloInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    Doador?: DoadorUncheckedCreateNestedManyWithoutUsuarioInput
    ProfissionalApoio?: ProfissionalApoioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMaeSoloInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMaeSoloInput, UsuarioUncheckedCreateWithoutMaeSoloInput>
  }

  export type FilhoCreateWithoutMaeInput = {
    id?: string
    nome: string
    data_nascimento: Date | string
  }

  export type FilhoUncheckedCreateWithoutMaeInput = {
    id?: string
    nome: string
    data_nascimento: Date | string
  }

  export type FilhoCreateOrConnectWithoutMaeInput = {
    where: FilhoWhereUniqueInput
    create: XOR<FilhoCreateWithoutMaeInput, FilhoUncheckedCreateWithoutMaeInput>
  }

  export type FilhoCreateManyMaeInputEnvelope = {
    data: FilhoCreateManyMaeInput | FilhoCreateManyMaeInput[]
  }

  export type EncaminhamentoCreateWithoutMaeSoloInput = {
    id?: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    profissional: ProfissionalApoioCreateNestedOneWithoutEncaminhamentoInput
    Atendimento?: AtendimentoCreateNestedManyWithoutEncaminhamentoInput
  }

  export type EncaminhamentoUncheckedCreateWithoutMaeSoloInput = {
    id?: string
    id_profissional: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    Atendimento?: AtendimentoUncheckedCreateNestedManyWithoutEncaminhamentoInput
  }

  export type EncaminhamentoCreateOrConnectWithoutMaeSoloInput = {
    where: EncaminhamentoWhereUniqueInput
    create: XOR<EncaminhamentoCreateWithoutMaeSoloInput, EncaminhamentoUncheckedCreateWithoutMaeSoloInput>
  }

  export type EncaminhamentoCreateManyMaeSoloInputEnvelope = {
    data: EncaminhamentoCreateManyMaeSoloInput | EncaminhamentoCreateManyMaeSoloInput[]
  }

  export type UsuarioUpsertWithoutMaeSoloInput = {
    update: XOR<UsuarioUpdateWithoutMaeSoloInput, UsuarioUncheckedUpdateWithoutMaeSoloInput>
    create: XOR<UsuarioCreateWithoutMaeSoloInput, UsuarioUncheckedCreateWithoutMaeSoloInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMaeSoloInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMaeSoloInput, UsuarioUncheckedUpdateWithoutMaeSoloInput>
  }

  export type UsuarioUpdateWithoutMaeSoloInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Doador?: DoadorUpdateManyWithoutUsuarioNestedInput
    ProfissionalApoio?: ProfissionalApoioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMaeSoloInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Doador?: DoadorUncheckedUpdateManyWithoutUsuarioNestedInput
    ProfissionalApoio?: ProfissionalApoioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type FilhoUpsertWithWhereUniqueWithoutMaeInput = {
    where: FilhoWhereUniqueInput
    update: XOR<FilhoUpdateWithoutMaeInput, FilhoUncheckedUpdateWithoutMaeInput>
    create: XOR<FilhoCreateWithoutMaeInput, FilhoUncheckedCreateWithoutMaeInput>
  }

  export type FilhoUpdateWithWhereUniqueWithoutMaeInput = {
    where: FilhoWhereUniqueInput
    data: XOR<FilhoUpdateWithoutMaeInput, FilhoUncheckedUpdateWithoutMaeInput>
  }

  export type FilhoUpdateManyWithWhereWithoutMaeInput = {
    where: FilhoScalarWhereInput
    data: XOR<FilhoUpdateManyMutationInput, FilhoUncheckedUpdateManyWithoutMaeInput>
  }

  export type FilhoScalarWhereInput = {
    AND?: FilhoScalarWhereInput | FilhoScalarWhereInput[]
    OR?: FilhoScalarWhereInput[]
    NOT?: FilhoScalarWhereInput | FilhoScalarWhereInput[]
    id?: StringFilter<"Filho"> | string
    nome?: StringFilter<"Filho"> | string
    data_nascimento?: DateTimeFilter<"Filho"> | Date | string
    idMae?: StringFilter<"Filho"> | string
  }

  export type EncaminhamentoUpsertWithWhereUniqueWithoutMaeSoloInput = {
    where: EncaminhamentoWhereUniqueInput
    update: XOR<EncaminhamentoUpdateWithoutMaeSoloInput, EncaminhamentoUncheckedUpdateWithoutMaeSoloInput>
    create: XOR<EncaminhamentoCreateWithoutMaeSoloInput, EncaminhamentoUncheckedCreateWithoutMaeSoloInput>
  }

  export type EncaminhamentoUpdateWithWhereUniqueWithoutMaeSoloInput = {
    where: EncaminhamentoWhereUniqueInput
    data: XOR<EncaminhamentoUpdateWithoutMaeSoloInput, EncaminhamentoUncheckedUpdateWithoutMaeSoloInput>
  }

  export type EncaminhamentoUpdateManyWithWhereWithoutMaeSoloInput = {
    where: EncaminhamentoScalarWhereInput
    data: XOR<EncaminhamentoUpdateManyMutationInput, EncaminhamentoUncheckedUpdateManyWithoutMaeSoloInput>
  }

  export type EncaminhamentoScalarWhereInput = {
    AND?: EncaminhamentoScalarWhereInput | EncaminhamentoScalarWhereInput[]
    OR?: EncaminhamentoScalarWhereInput[]
    NOT?: EncaminhamentoScalarWhereInput | EncaminhamentoScalarWhereInput[]
    id?: StringFilter<"Encaminhamento"> | string
    id_mae?: StringFilter<"Encaminhamento"> | string
    id_profissional?: StringFilter<"Encaminhamento"> | string
    data?: DateTimeFilter<"Encaminhamento"> | Date | string
    status?: EnumStatusEncaminhamentoFilter<"Encaminhamento"> | $Enums.StatusEncaminhamento
    tipo_servico?: StringFilter<"Encaminhamento"> | string
  }

  export type MaeSoloCreateWithoutFilhoInput = {
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    usuario: UsuarioCreateNestedOneWithoutMaeSoloInput
    Encaminhamento?: EncaminhamentoCreateNestedManyWithoutMaeSoloInput
  }

  export type MaeSoloUncheckedCreateWithoutFilhoInput = {
    id: string
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    Encaminhamento?: EncaminhamentoUncheckedCreateNestedManyWithoutMaeSoloInput
  }

  export type MaeSoloCreateOrConnectWithoutFilhoInput = {
    where: MaeSoloWhereUniqueInput
    create: XOR<MaeSoloCreateWithoutFilhoInput, MaeSoloUncheckedCreateWithoutFilhoInput>
  }

  export type MaeSoloUpsertWithoutFilhoInput = {
    update: XOR<MaeSoloUpdateWithoutFilhoInput, MaeSoloUncheckedUpdateWithoutFilhoInput>
    create: XOR<MaeSoloCreateWithoutFilhoInput, MaeSoloUncheckedCreateWithoutFilhoInput>
    where?: MaeSoloWhereInput
  }

  export type MaeSoloUpdateToOneWithWhereWithoutFilhoInput = {
    where?: MaeSoloWhereInput
    data: XOR<MaeSoloUpdateWithoutFilhoInput, MaeSoloUncheckedUpdateWithoutFilhoInput>
  }

  export type MaeSoloUpdateWithoutFilhoInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutMaeSoloNestedInput
    Encaminhamento?: EncaminhamentoUpdateManyWithoutMaeSoloNestedInput
  }

  export type MaeSoloUncheckedUpdateWithoutFilhoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    Encaminhamento?: EncaminhamentoUncheckedUpdateManyWithoutMaeSoloNestedInput
  }

  export type UsuarioCreateWithoutDoadorInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    MaeSolo?: MaeSoloCreateNestedManyWithoutUsuarioInput
    ProfissionalApoio?: ProfissionalApoioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDoadorInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    MaeSolo?: MaeSoloUncheckedCreateNestedManyWithoutUsuarioInput
    ProfissionalApoio?: ProfissionalApoioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDoadorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDoadorInput, UsuarioUncheckedCreateWithoutDoadorInput>
  }

  export type UsuarioUpsertWithoutDoadorInput = {
    update: XOR<UsuarioUpdateWithoutDoadorInput, UsuarioUncheckedUpdateWithoutDoadorInput>
    create: XOR<UsuarioCreateWithoutDoadorInput, UsuarioUncheckedCreateWithoutDoadorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDoadorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDoadorInput, UsuarioUncheckedUpdateWithoutDoadorInput>
  }

  export type UsuarioUpdateWithoutDoadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    MaeSolo?: MaeSoloUpdateManyWithoutUsuarioNestedInput
    ProfissionalApoio?: ProfissionalApoioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDoadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    MaeSolo?: MaeSoloUncheckedUpdateManyWithoutUsuarioNestedInput
    ProfissionalApoio?: ProfissionalApoioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutProfissionalApoioInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    MaeSolo?: MaeSoloCreateNestedManyWithoutUsuarioInput
    Doador?: DoadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfissionalApoioInput = {
    id?: string
    nome: string
    documentoIdentificacao: string
    telefone?: string | null
    email?: string | null
    MaeSolo?: MaeSoloUncheckedCreateNestedManyWithoutUsuarioInput
    Doador?: DoadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfissionalApoioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfissionalApoioInput, UsuarioUncheckedCreateWithoutProfissionalApoioInput>
  }

  export type DisponibilidadeCreateWithoutProfissionalInput = {
    id?: string
    data: string
    horario: string
  }

  export type DisponibilidadeUncheckedCreateWithoutProfissionalInput = {
    id?: string
    data: string
    horario: string
  }

  export type DisponibilidadeCreateOrConnectWithoutProfissionalInput = {
    where: DisponibilidadeWhereUniqueInput
    create: XOR<DisponibilidadeCreateWithoutProfissionalInput, DisponibilidadeUncheckedCreateWithoutProfissionalInput>
  }

  export type DisponibilidadeCreateManyProfissionalInputEnvelope = {
    data: DisponibilidadeCreateManyProfissionalInput | DisponibilidadeCreateManyProfissionalInput[]
  }

  export type EncaminhamentoCreateWithoutProfissionalInput = {
    id?: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    maeSolo: MaeSoloCreateNestedOneWithoutEncaminhamentoInput
    Atendimento?: AtendimentoCreateNestedManyWithoutEncaminhamentoInput
  }

  export type EncaminhamentoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    id_mae: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    Atendimento?: AtendimentoUncheckedCreateNestedManyWithoutEncaminhamentoInput
  }

  export type EncaminhamentoCreateOrConnectWithoutProfissionalInput = {
    where: EncaminhamentoWhereUniqueInput
    create: XOR<EncaminhamentoCreateWithoutProfissionalInput, EncaminhamentoUncheckedCreateWithoutProfissionalInput>
  }

  export type EncaminhamentoCreateManyProfissionalInputEnvelope = {
    data: EncaminhamentoCreateManyProfissionalInput | EncaminhamentoCreateManyProfissionalInput[]
  }

  export type UsuarioUpsertWithoutProfissionalApoioInput = {
    update: XOR<UsuarioUpdateWithoutProfissionalApoioInput, UsuarioUncheckedUpdateWithoutProfissionalApoioInput>
    create: XOR<UsuarioCreateWithoutProfissionalApoioInput, UsuarioUncheckedCreateWithoutProfissionalApoioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfissionalApoioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfissionalApoioInput, UsuarioUncheckedUpdateWithoutProfissionalApoioInput>
  }

  export type UsuarioUpdateWithoutProfissionalApoioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    MaeSolo?: MaeSoloUpdateManyWithoutUsuarioNestedInput
    Doador?: DoadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfissionalApoioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    documentoIdentificacao?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    MaeSolo?: MaeSoloUncheckedUpdateManyWithoutUsuarioNestedInput
    Doador?: DoadorUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DisponibilidadeUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: DisponibilidadeWhereUniqueInput
    update: XOR<DisponibilidadeUpdateWithoutProfissionalInput, DisponibilidadeUncheckedUpdateWithoutProfissionalInput>
    create: XOR<DisponibilidadeCreateWithoutProfissionalInput, DisponibilidadeUncheckedCreateWithoutProfissionalInput>
  }

  export type DisponibilidadeUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: DisponibilidadeWhereUniqueInput
    data: XOR<DisponibilidadeUpdateWithoutProfissionalInput, DisponibilidadeUncheckedUpdateWithoutProfissionalInput>
  }

  export type DisponibilidadeUpdateManyWithWhereWithoutProfissionalInput = {
    where: DisponibilidadeScalarWhereInput
    data: XOR<DisponibilidadeUpdateManyMutationInput, DisponibilidadeUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type DisponibilidadeScalarWhereInput = {
    AND?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    OR?: DisponibilidadeScalarWhereInput[]
    NOT?: DisponibilidadeScalarWhereInput | DisponibilidadeScalarWhereInput[]
    id?: StringFilter<"Disponibilidade"> | string
    id_profissional?: StringFilter<"Disponibilidade"> | string
    data?: StringFilter<"Disponibilidade"> | string
    horario?: StringFilter<"Disponibilidade"> | string
  }

  export type EncaminhamentoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: EncaminhamentoWhereUniqueInput
    update: XOR<EncaminhamentoUpdateWithoutProfissionalInput, EncaminhamentoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<EncaminhamentoCreateWithoutProfissionalInput, EncaminhamentoUncheckedCreateWithoutProfissionalInput>
  }

  export type EncaminhamentoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: EncaminhamentoWhereUniqueInput
    data: XOR<EncaminhamentoUpdateWithoutProfissionalInput, EncaminhamentoUncheckedUpdateWithoutProfissionalInput>
  }

  export type EncaminhamentoUpdateManyWithWhereWithoutProfissionalInput = {
    where: EncaminhamentoScalarWhereInput
    data: XOR<EncaminhamentoUpdateManyMutationInput, EncaminhamentoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type ProfissionalApoioCreateWithoutDisponibilidadeInput = {
    areaAtuacao: string
    usuario: UsuarioCreateNestedOneWithoutProfissionalApoioInput
    Encaminhamento?: EncaminhamentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioUncheckedCreateWithoutDisponibilidadeInput = {
    id: string
    areaAtuacao: string
    Encaminhamento?: EncaminhamentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioCreateOrConnectWithoutDisponibilidadeInput = {
    where: ProfissionalApoioWhereUniqueInput
    create: XOR<ProfissionalApoioCreateWithoutDisponibilidadeInput, ProfissionalApoioUncheckedCreateWithoutDisponibilidadeInput>
  }

  export type ProfissionalApoioUpsertWithoutDisponibilidadeInput = {
    update: XOR<ProfissionalApoioUpdateWithoutDisponibilidadeInput, ProfissionalApoioUncheckedUpdateWithoutDisponibilidadeInput>
    create: XOR<ProfissionalApoioCreateWithoutDisponibilidadeInput, ProfissionalApoioUncheckedCreateWithoutDisponibilidadeInput>
    where?: ProfissionalApoioWhereInput
  }

  export type ProfissionalApoioUpdateToOneWithWhereWithoutDisponibilidadeInput = {
    where?: ProfissionalApoioWhereInput
    data: XOR<ProfissionalApoioUpdateWithoutDisponibilidadeInput, ProfissionalApoioUncheckedUpdateWithoutDisponibilidadeInput>
  }

  export type ProfissionalApoioUpdateWithoutDisponibilidadeInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfissionalApoioNestedInput
    Encaminhamento?: EncaminhamentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalApoioUncheckedUpdateWithoutDisponibilidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    Encaminhamento?: EncaminhamentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type MaeSoloCreateWithoutEncaminhamentoInput = {
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    usuario: UsuarioCreateNestedOneWithoutMaeSoloInput
    Filho?: FilhoCreateNestedManyWithoutMaeInput
  }

  export type MaeSoloUncheckedCreateWithoutEncaminhamentoInput = {
    id: string
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
    Filho?: FilhoUncheckedCreateNestedManyWithoutMaeInput
  }

  export type MaeSoloCreateOrConnectWithoutEncaminhamentoInput = {
    where: MaeSoloWhereUniqueInput
    create: XOR<MaeSoloCreateWithoutEncaminhamentoInput, MaeSoloUncheckedCreateWithoutEncaminhamentoInput>
  }

  export type ProfissionalApoioCreateWithoutEncaminhamentoInput = {
    areaAtuacao: string
    usuario: UsuarioCreateNestedOneWithoutProfissionalApoioInput
    Disponibilidade?: DisponibilidadeCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioUncheckedCreateWithoutEncaminhamentoInput = {
    id: string
    areaAtuacao: string
    Disponibilidade?: DisponibilidadeUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalApoioCreateOrConnectWithoutEncaminhamentoInput = {
    where: ProfissionalApoioWhereUniqueInput
    create: XOR<ProfissionalApoioCreateWithoutEncaminhamentoInput, ProfissionalApoioUncheckedCreateWithoutEncaminhamentoInput>
  }

  export type AtendimentoCreateWithoutEncaminhamentoInput = {
    id?: string
    observacoes: string
    data: Date | string
  }

  export type AtendimentoUncheckedCreateWithoutEncaminhamentoInput = {
    id?: string
    observacoes: string
    data: Date | string
  }

  export type AtendimentoCreateOrConnectWithoutEncaminhamentoInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutEncaminhamentoInput, AtendimentoUncheckedCreateWithoutEncaminhamentoInput>
  }

  export type AtendimentoCreateManyEncaminhamentoInputEnvelope = {
    data: AtendimentoCreateManyEncaminhamentoInput | AtendimentoCreateManyEncaminhamentoInput[]
  }

  export type MaeSoloUpsertWithoutEncaminhamentoInput = {
    update: XOR<MaeSoloUpdateWithoutEncaminhamentoInput, MaeSoloUncheckedUpdateWithoutEncaminhamentoInput>
    create: XOR<MaeSoloCreateWithoutEncaminhamentoInput, MaeSoloUncheckedCreateWithoutEncaminhamentoInput>
    where?: MaeSoloWhereInput
  }

  export type MaeSoloUpdateToOneWithWhereWithoutEncaminhamentoInput = {
    where?: MaeSoloWhereInput
    data: XOR<MaeSoloUpdateWithoutEncaminhamentoInput, MaeSoloUncheckedUpdateWithoutEncaminhamentoInput>
  }

  export type MaeSoloUpdateWithoutEncaminhamentoInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutMaeSoloNestedInput
    Filho?: FilhoUpdateManyWithoutMaeNestedInput
  }

  export type MaeSoloUncheckedUpdateWithoutEncaminhamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    Filho?: FilhoUncheckedUpdateManyWithoutMaeNestedInput
  }

  export type ProfissionalApoioUpsertWithoutEncaminhamentoInput = {
    update: XOR<ProfissionalApoioUpdateWithoutEncaminhamentoInput, ProfissionalApoioUncheckedUpdateWithoutEncaminhamentoInput>
    create: XOR<ProfissionalApoioCreateWithoutEncaminhamentoInput, ProfissionalApoioUncheckedCreateWithoutEncaminhamentoInput>
    where?: ProfissionalApoioWhereInput
  }

  export type ProfissionalApoioUpdateToOneWithWhereWithoutEncaminhamentoInput = {
    where?: ProfissionalApoioWhereInput
    data: XOR<ProfissionalApoioUpdateWithoutEncaminhamentoInput, ProfissionalApoioUncheckedUpdateWithoutEncaminhamentoInput>
  }

  export type ProfissionalApoioUpdateWithoutEncaminhamentoInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfissionalApoioNestedInput
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalApoioUncheckedUpdateWithoutEncaminhamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutEncaminhamentoInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutEncaminhamentoInput, AtendimentoUncheckedUpdateWithoutEncaminhamentoInput>
    create: XOR<AtendimentoCreateWithoutEncaminhamentoInput, AtendimentoUncheckedCreateWithoutEncaminhamentoInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutEncaminhamentoInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutEncaminhamentoInput, AtendimentoUncheckedUpdateWithoutEncaminhamentoInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutEncaminhamentoInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutEncaminhamentoInput>
  }

  export type AtendimentoScalarWhereInput = {
    AND?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    OR?: AtendimentoScalarWhereInput[]
    NOT?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    id?: StringFilter<"Atendimento"> | string
    id_encaminhamento?: StringFilter<"Atendimento"> | string
    observacoes?: StringFilter<"Atendimento"> | string
    data?: DateTimeFilter<"Atendimento"> | Date | string
  }

  export type EncaminhamentoCreateWithoutAtendimentoInput = {
    id?: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
    maeSolo: MaeSoloCreateNestedOneWithoutEncaminhamentoInput
    profissional: ProfissionalApoioCreateNestedOneWithoutEncaminhamentoInput
  }

  export type EncaminhamentoUncheckedCreateWithoutAtendimentoInput = {
    id?: string
    id_mae: string
    id_profissional: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
  }

  export type EncaminhamentoCreateOrConnectWithoutAtendimentoInput = {
    where: EncaminhamentoWhereUniqueInput
    create: XOR<EncaminhamentoCreateWithoutAtendimentoInput, EncaminhamentoUncheckedCreateWithoutAtendimentoInput>
  }

  export type EncaminhamentoUpsertWithoutAtendimentoInput = {
    update: XOR<EncaminhamentoUpdateWithoutAtendimentoInput, EncaminhamentoUncheckedUpdateWithoutAtendimentoInput>
    create: XOR<EncaminhamentoCreateWithoutAtendimentoInput, EncaminhamentoUncheckedCreateWithoutAtendimentoInput>
    where?: EncaminhamentoWhereInput
  }

  export type EncaminhamentoUpdateToOneWithWhereWithoutAtendimentoInput = {
    where?: EncaminhamentoWhereInput
    data: XOR<EncaminhamentoUpdateWithoutAtendimentoInput, EncaminhamentoUncheckedUpdateWithoutAtendimentoInput>
  }

  export type EncaminhamentoUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    maeSolo?: MaeSoloUpdateOneRequiredWithoutEncaminhamentoNestedInput
    profissional?: ProfissionalApoioUpdateOneRequiredWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoUncheckedUpdateWithoutAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_mae?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
  }

  export type MaeSoloCreateManyUsuarioInput = {
    data_nascimento: Date | string
    escolaridade: $Enums.Escolaridade
    endereco: string
    rendaMensal: number
    situacaoTrabalho: boolean
  }

  export type DoadorCreateManyUsuarioInput = {
    tipo_doador: string
  }

  export type ProfissionalApoioCreateManyUsuarioInput = {
    areaAtuacao: string
  }

  export type MaeSoloUpdateWithoutUsuarioInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    Filho?: FilhoUpdateManyWithoutMaeNestedInput
    Encaminhamento?: EncaminhamentoUpdateManyWithoutMaeSoloNestedInput
  }

  export type MaeSoloUncheckedUpdateWithoutUsuarioInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
    Filho?: FilhoUncheckedUpdateManyWithoutMaeNestedInput
    Encaminhamento?: EncaminhamentoUncheckedUpdateManyWithoutMaeSoloNestedInput
  }

  export type MaeSoloUncheckedUpdateManyWithoutUsuarioInput = {
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    escolaridade?: EnumEscolaridadeFieldUpdateOperationsInput | $Enums.Escolaridade
    endereco?: StringFieldUpdateOperationsInput | string
    rendaMensal?: IntFieldUpdateOperationsInput | number
    situacaoTrabalho?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DoadorUpdateWithoutUsuarioInput = {
    tipo_doador?: StringFieldUpdateOperationsInput | string
  }

  export type DoadorUncheckedUpdateWithoutUsuarioInput = {
    tipo_doador?: StringFieldUpdateOperationsInput | string
  }

  export type DoadorUncheckedUpdateManyWithoutUsuarioInput = {
    tipo_doador?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionalApoioUpdateWithoutUsuarioInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUpdateManyWithoutProfissionalNestedInput
    Encaminhamento?: EncaminhamentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalApoioUncheckedUpdateWithoutUsuarioInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    Disponibilidade?: DisponibilidadeUncheckedUpdateManyWithoutProfissionalNestedInput
    Encaminhamento?: EncaminhamentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalApoioUncheckedUpdateManyWithoutUsuarioInput = {
    areaAtuacao?: StringFieldUpdateOperationsInput | string
  }

  export type FilhoCreateManyMaeInput = {
    id?: string
    nome: string
    data_nascimento: Date | string
  }

  export type EncaminhamentoCreateManyMaeSoloInput = {
    id?: string
    id_profissional: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
  }

  export type FilhoUpdateWithoutMaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilhoUncheckedUpdateWithoutMaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilhoUncheckedUpdateManyWithoutMaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncaminhamentoUpdateWithoutMaeSoloInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    profissional?: ProfissionalApoioUpdateOneRequiredWithoutEncaminhamentoNestedInput
    Atendimento?: AtendimentoUpdateManyWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoUncheckedUpdateWithoutMaeSoloInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    Atendimento?: AtendimentoUncheckedUpdateManyWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoUncheckedUpdateManyWithoutMaeSoloInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_profissional?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeCreateManyProfissionalInput = {
    id?: string
    data: string
    horario: string
  }

  export type EncaminhamentoCreateManyProfissionalInput = {
    id?: string
    id_mae: string
    data: Date | string
    status: $Enums.StatusEncaminhamento
    tipo_servico: string
  }

  export type DisponibilidadeUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadeUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type EncaminhamentoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    maeSolo?: MaeSoloUpdateOneRequiredWithoutEncaminhamentoNestedInput
    Atendimento?: AtendimentoUpdateManyWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_mae?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
    Atendimento?: AtendimentoUncheckedUpdateManyWithoutEncaminhamentoNestedInput
  }

  export type EncaminhamentoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_mae?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEncaminhamentoFieldUpdateOperationsInput | $Enums.StatusEncaminhamento
    tipo_servico?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoCreateManyEncaminhamentoInput = {
    id?: string
    observacoes: string
    data: Date | string
  }

  export type AtendimentoUpdateWithoutEncaminhamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateWithoutEncaminhamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutEncaminhamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
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