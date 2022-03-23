# @i18nlite/svelte

> A lightweight and simple i18n library for SvelteJS

[![NPM](https://img.shields.io/npm/v/@i18nlite/svelte.svg)](https://www.npmjs.com/package/@i18nlite/svelte)

## Install

```bash
npm install --save @i18nlite/core @i18nlite/svelte
```

## Usage

### Configuration:

`src/i18n.ts`:
```ts
import { I18nStore } from '@i18nlite/core'
import { makeI18n } from '@i18nlite/svelte'

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

`src/App.svelte`:
```svelte
<script lang="ts">
  import { useTranslate } from './i18n'
  import i18n from './App.i18n.json'

  const t = useTranslate(i18n)

</script>

<div>{$t('hello', $t('world'))}</div>
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

`src/ChangeLanguage.svelte`:
```svelte
<script lang="ts">
  import i18n from './ChangeLanguage.i18n.json'
  import {
    AvailableLanguages,
    languages,
    useLanguage,
    useTranslate,
  } from './config'

  const t = useTranslate(i18n)
  const [lang, changeLanguage] = useLanguage()

  function handleSelect(e: Event) {
    const target = e.target as HTMLSelectElement
    changeLanguage(target.value as AvailableLanguages)
  }
</script>

<select value={$lang} on:input={handleSelect}>
  {#each languages as lang (lang)}
    <option value={lang}>
      {$t(lang)}
    </option>
  {/each}
</select>
```

## License

MIT © [](https://github.com/)
