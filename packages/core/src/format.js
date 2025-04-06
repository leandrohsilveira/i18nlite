/**
 * @param {string} text
 * @param {...unknown} args
 * @returns {string}
 */
export function formatText(text, ...args) {
  return args.reduce(
    /**
     * @param {string} acc
     * @param {unknown} arg
     * @param {number} index
     * @returns {string}
     */
    (acc, arg, index) =>
      acc.replace(new RegExp(`\\{${index}\\}`, 'g'), String(arg)),
    text,
  )
}
