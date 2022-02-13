# snake-camel-types
Utility type definition convert snake_case🐍 ←→ camelCase🐪

## Installation

```sh
npm install snake-camel-types
```

## Usage

### SnakeToCamelCase(🐍→🐪)
Convert single key from snake_case to camelCase
```typescript
type CamelUserId = SnakeToCamelCase<'user_id'>
// => 'userId'
```

### SnakeToCamel(🐍→🐪)
Convert snake_case key object to camelCase key object
```
type SnakeUser = {
  user_id: string,
  birth_year: number
  is_married: boolean,
}
 
type CamelUser = SnakeToCamel<SnakeUser>
// type CamelUser = {
//   userId: string;
//   birthYear: number;
//   isMarried: boolean;
// }
```

### CamelToSnakeCase(🐪→🐍)
Convert single key from camelCase to snake_case
```typescript
type SnakeUserId = CamelToSnakeCase<'userId'>
// => 'user_id'
```
### CamelToSnake(🐪→🐍)
```typescript
type CamelUser = {
  userId: string,
  birthYear: number
  isMarried: boolean,
}
type SnakeUser = CamelToSnake<CamelUser>
// type SnakeUser = {
//   user_id: string;
//   birth_year: number;
//   is_married: boolean;
// }
```

## License

[MIT](http://opensource.org/licenses/MIT)
