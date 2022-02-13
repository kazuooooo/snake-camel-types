/**
 * Convert single key from snake_case to camelCase
 * @example
 * ```typescript
 * type CamelUserId = SnakeToCamelCase<'user_id'>
 * // => 'userId'
 * ```
 */
export type SnakeToCamelCase<T extends string> =
  T extends `${infer R}_${infer U}` ? `${R}${Capitalize<SnakeToCamelCase<U>>}` : T

/**
 * Convert snake_case key object to camelCase key object
 * @example
 * ```typescript
 * type SnakeUser = {
 *   user_id: string,
 *   birth_year: number
 *   is_married: boolean,
 * }
 * 
 * type CamelUser = SnakeToCamel<SnakeUser>
 * // type CamelUser = {
 * //   userId: string;
 * //   birthYear: number;
 * //   isMarried: boolean;
 * // }
 * ```
 */
export type SnakeToCamel<T extends object> = {
  [K in keyof T as `${SnakeToCamelCase<string & K>}`]: T[K] extends object ? SnakeToCamel<T[K]> : T[K]
}

/**
 * Convert single key from camelCase to snake_case
 * ```typescript
 * type SnakeUserId = CamelToSnakeCase<'userId'>
 * // => 'user_id'
 * ```
 */
export type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}` ?
  `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}` : S

/**
 * Convert camelCase key object to snake_case key object
 * @example
 * ```typescript
 * type CamelUser = {
 *   userId: string,
 *   birthYear: number
 *   isMarried: boolean,
 * }
 * type SnakeUser = CamelToSnake<CamelUser>
 * // type SnakeUser = {
 * //   user_id: string;
 * //   birth_year: number;
 * //   is_married: boolean;
 * // }
 * ```
 */
export type CamelToSnake<T extends object> = {
  [K in keyof T as `${CamelToSnakeCase<string & K>}`]: T[K] extends object ? CamelToSnake<T[K]> : T[K]
}