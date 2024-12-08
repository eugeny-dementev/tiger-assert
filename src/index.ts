import yamlifyObject from "yamlify-object";

const isPlainObject = (value: object) => value?.constructor === Object;

function addIndention (str: string) {
  return str.split('\n')
    .join('\n    ')
}

type Context = Record<string, unknown>

class TigerAssertionError extends Error {
  #context: Context

  constructor (message: string, context: Context) {
    super(message)
    this.name = 'TigerAssertionError';
    this.#context = context

    // Override the message to include context
    const contextStr = yamlifyObject(this.#context, {
      indent: '    ',
    })
    Object.defineProperty(this, 'message', {
      get: () => `${message}\n    ${addIndention(`context: ${contextStr}`)}`,
    });
  }
}

/**
 * Asserts that a given condition is true. Throws a TigerAssertionError if the condition fails.
 *
 * @param {boolean} condition - The result of the condition to assert. If false, an error is thrown.
 * @param {string} message - A descriptive message explaining the assertion failure.
 * @param {object} context - An object containing values related to the condition, for debugging purposes.
 */
export function assert (condition: boolean, message: string, context: Context) {
  if (!isPlainObject(context)) {
    throw new TypeError('provided "context" must be a plain js object')
  }

  if (typeof message !== 'string' || message.length === 0) {
    throw new TypeError('provided "message" must be non-empty string')
  }

  if (!condition) {
    throw new TigerAssertionError(message, context)
  }
}
