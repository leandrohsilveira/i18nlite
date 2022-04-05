export function formatText(text: string, ...args: unknown[]): string {
  return args.reduce<string>(
    (acc, arg, index) =>
      acc.replace(new RegExp(`\\{${index}\\}`, 'g'), String(arg)),
    text,
  )
}
