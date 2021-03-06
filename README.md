# snake-camel-types
Utility type definition convert snake_caseπ ββ camelCaseπͺ

## Installation

```sh
npm install snake-camel-types --save-dev
or
yarn add -D snake-camel-types
```

## Usage

### SnakeToCamelCase(πβπͺ)
Convert single key from snake_case to camelCase
```typescript
import { SnakeToCamelCase } from "snake-camel-types"
type CamelUserId = SnakeToCamelCase<'user_id'>
// => 'userId'
```

### SnakeToCamel(πβπͺ)
Convert snake_case key object to camelCase key object
```typescript
import { SnakeToCamel } from "snake-camel-types"
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

### CamelToSnakeCase(πͺβπ)
Convert single key from camelCase to snake_case
```typescript
import { CamelToSnakeCase } from "snake-camel-types"
type SnakeUserId = CamelToSnakeCase<'userId'>
// => 'user_id'
```
### CamelToSnake(πͺβπ)
```typescript
import { CamelToSnake } from "snake-camel-types"
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
