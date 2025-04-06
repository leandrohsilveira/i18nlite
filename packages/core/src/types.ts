export type Observer<T> = (value: T) => void

export type Unsubscriber = () => void

export type Translator<T> = (literal: keyof T, ...args: unknown[]) => string
