export function formatText(text: string, ...args: unknown[]): string {
  return args.reduce<string>(
    (acc, arg, index) => acc.replaceAll(`{${index}}`, String(arg)),
    text,
  )
}
