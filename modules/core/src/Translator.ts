export type Translator<T> = (literal: keyof T, ...args: unknown[]) => string
