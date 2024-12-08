# Tiger Assertion

Tiger Assertion is a lightweight utility for validating conditions in your JavaScript/TypeScript applications.
It throws detailed errors enriched with structured context, helping developers debug issues more effectively.

Inspired by assertions approach used as part of [Tiger Style](https://tigerstyle.dev)

## Features

- **Custom Error Class**: Provides a `TigerAssertionError` that automatically includes a detailed context in the error message.
- **Context Serialization**: Context is serialized to YAML for better readability.
- **Strict Validations**: Ensures `context` is a plain JavaScript object and `message` is a non-empty string.

## Installation

Install via npm or yarn:

```bash
npm install tiger-assert
# or
yarn add tiger-assert
```

## Usage

```js
assert(value == 'target value', 'value is not what it should be', { value });
```

## Error example

```sh
        throw new TigerAssertionError(message, context);
        ^

TigerAssertionError: value is not what it should be
    context:
        value: wrong value
    at assert (tiger-assert-test/node_modules/tiger-assert/_cjs/index.js:43:15)
    at Object.<anonymous> (tiger-assert-test/index.js:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
```
