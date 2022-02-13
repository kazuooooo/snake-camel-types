export type SnakeToCamelCase<T extends string> =
  T extends `${infer R}_${infer U}` ? `${R}${Capitalize<SnakeToCamelCase<U>>}` : T

export type SnakeToCamel<T extends object> = {
  [K in keyof T as `${SnakeToCamelCase<string & K>}`]: T[K] extends object ? SnakeToCamel<T[K]> : T[K]
}

export type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}` ?
  `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}` : S

export type CamelToSnake<T extends object> = {
  [K in keyof T as `${CamelToSnakeCase<string & K>}`]: T[K] extends object ? CamelToSnake<T[K]> : T[K]
}