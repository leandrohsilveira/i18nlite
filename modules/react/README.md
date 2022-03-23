# @i18nlite/react

> A lightweight and simple i18n library for react

[![NPM](https://img.shields.io/npm/v/@i18nlite/react.svg)](https://www.npmjs.com/package/@i18nlite/react)

## Install

```bash
npm install --save @i18nlite/core @i18nlite/react
```

## Usage

### Configuration:

`src/i18n.ts`:
```ts
import { I18nStore } from '@i18nlite/core'
import { makeI18n } from '@i18nlite/react'

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

`src/ChangeLanguage.i18n.json`
```json
{
  "en-us": {
    "pt-br": "Brazillian Portuguese",
    "en-us": "US English"
  },
  "pt-br": {
    "pt-br": "Português Brasileiro",
    "en-us": "Inglês EUA"
  }
}
```

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

## License

MIT © [](https://github.com/)
