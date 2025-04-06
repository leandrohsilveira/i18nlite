/**
 * @import { Observer, Unsubscriber } from "./types.js"
 */

/**
 * @template {string} T
 */
export class I18nStore {
  /**
   * @param {T[]} languages
   * @param {T} [defLanguage=languages[0]]
   */
  constructor(languages, defLanguage = languages[0]) {
    this.#language = defLanguage
    this.#languages = languages
  }

  /**
   * @type {T}
   */
  #language

  /**
   * @type {T[]}
   */
  #languages

  /**
   * @type {Observer<T>[]}
   */
  #observers = []

  get language() {
    return this.#language
  }

  /**
   * @param {T} language
   */
  changeLanguage(language, notify = true) {
    if (this.#languages.indexOf(language) < 0)
      throw new Error(
        `Unable to change language. Language "${language}" is not registered as a valid language`,
      )
    this.#language = language
    if (notify) this.#notify(language)
  }

  /**
   * @param {Observer<T>} observer
   * @returns {Unsubscriber}
   */
  subscribe(observer) {
    this.#observers = [...this.#observers, observer]
    return () =>
      (this.#observers = this.#observers.filter((o) => o !== observer))
  }

  /**
   * @param {T} value
   */
  #notify(value) {
    this.#observers.forEach((observer) => observer(value))
  }
}
