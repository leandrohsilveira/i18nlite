# @i18nlite/core

> A lightweight and simple i18n library for react

[![NPM](https://img.shields.io/npm/v/@i18nlite/core.svg)](https://www.npmjs.com/package/@i18nlite/core)

## Install

```bash
npm install --save @i18nlite/core @i18nlite/core
```

## Usage

### Configuration:

`src/i18n.ts`:
```ts
import { I18nStore } from '@i18nlite/core'

export type AvailableLanguages = 'en-us' | 'pt-br'

export const languages: AvailableLanguages[] = ['en-us', 'pt-br']

const store = new I18nStore(languages[0] /* <- Default language */)

```

### Changing selected language

`src/language.ts`:
```ts
import { store } from './i18n.ts'

store.subscribe(lang => console.log('Selected language has changed', lang))
// log -> Selected language has changed, pt-br

store.changeLanguage('pt-br')
```

### Formatting texts
`src/app.ts`:
```ts
import { formatText } from '@i18nlite/core'

console.log(formatText('A {0} testing {1} output', 'basic', 'to format'))
// log -> A basic testing to format output
```

### Persisting language in local storage:

`src/i18n.ts`:
```ts
import { I18nStore } from '@i18nlite/core'

const STORAGE_KEY = 'app.lang'

export type AvailableLanguages = 'en-us' | 'pt-br'

export const languages: AvailableLanguages[] = ['en-us', 'pt-br']

const store = new I18nStore(window.localStorage.getItem(STORAGE_KEY) ?? languages[0])

store.subscribe(lang => window.localStorage.setItem(STORAGE_KEY, lang))
```
