<script lang="ts">
  import literals from './ChangeLanguage.i18n.json'
  import {
    languages,
    useLanguage,
    useTranslate,
    type AvailableLanguages,
  } from './config.js'

  const t = useTranslate(literals)
  const [lang, changeLanguage] = useLanguage()

  function handleSelect(e: Event) {
    const target = e.target as HTMLSelectElement
    console.log('handleSelect', target.value)
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
