export type Observer<T> = (value: T) => void

export type Unsubscriber = () => void

export class I18nStore<T extends string> {
  constructor(private _language: T) {}

  private observers: Observer<T>[] = []

  get language() {
    return this._language
  }

  changeLanguage(language: T) {
    this._language = language
    this.notify(language)
  }

  subscribe(observer: Observer<T>): Unsubscriber {
    this.observers = [...this.observers, observer]
    return () => (this.observers = this.observers.filter((o) => o !== observer))
  }

  private notify(value: T) {
    this.observers.forEach((observer) => observer(value))
  }
}
