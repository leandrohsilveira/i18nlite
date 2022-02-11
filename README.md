# react-i18n-lite

> A lightweight and simple i18n library for react

[![NPM](https://img.shields.io/npm/v/react-i18n-lite.svg)](https://www.npmjs.com/package/react-i18n-lite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-i18n-lite
```

## Usage

### Configuration and hooks creation:

`src/i18n.ts`:
```ts
import { I18nStore, makeI18n } from 'react-i18n-lite'

export type AvailableLanguages = 'en-us' | 'pt-br'

export const languages: AvailableLanguages[] = ['en-us', 'pt-br']

const store = new I18nStore(languages[0] /* <- Default language */)

export const { useLanguage, useTranslate } = makeI18n(store)
```

### Using translations:

`src/App.i18n.json`:
```json
{
  "en-us": {
    "hello": "Hello {0}!",
    "world": "world"
  },
  "pt-br": {
    "hello": "Olá {0}!",
    "world": "mundo"
  }
}
```

`src/App.tsx`:
```tsx
import * as React from 'react'
import { useTranslate } from './i18n'
import i18n from './App.i18n.json'

function App() {

  const t = useTranslate(i18n)

  return (
    <div>{t('hello', t('world'))}</div>
  )

}
```

### Reading and changing current language

`src/ChangeLanguage.tsx`:
```tsx
import * as React from 'react'
import { ChangeEvent, useCallback } from 'react'
import {
  AvailableLanguages,
  languages,
  useLanguage,
  useTranslate,
} from './i18n'
import i18n from './ChangeLanguage.i18n.json'

export function ChangeLanguage() {
  const [language, changeLanguage] = useLanguage()

  const t = useTranslate(i18n)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      changeLanguage(e.target.value as AvailableLanguages)
    },
    [changeLanguage],
  )

  return (
    <select value={language} onChange={handleChange}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {t(lang)}
        </option>
      ))}
    </select>
  )
}
```

### Persisting language in local storage:

`src/i18n.ts`:
```ts
import { I18nStore, makeI18n } from 'react-i18n-lite'

const STORAGE_KEY = 'app.lang'

export type AvailableLanguages = 'en-us' | 'pt-br'

export const languages: AvailableLanguages[] = ['en-us', 'pt-br']

const store = new I18nStore(window.localStorage.getItem(STORAGE_KEY) ?? languages[0])

store.subscribe(lang => window.localStorage.setItem(STORAGE_KEY, lang))

export const { useLanguage, useTranslate } = makeI18n(store)
```

## License

MIT © [](https://github.com/)
