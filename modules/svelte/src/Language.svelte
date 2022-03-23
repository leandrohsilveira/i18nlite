<script lang="ts">
  import literals from './Language.i18n.json'
  import { Languages, useLanguage, useTranslate } from './testing'

  const t = useTranslate(literals)
  const [lang, changeLanguage] = useLanguage()

  function handleChangeLanguage(e: Event) {
    const target = e.target as HTMLSelectElement
    changeLanguage(target.value as Languages)
  }
</script>

<select
  name="language"
  placeholder={$t('language')}
  value={$lang}
  on:input={handleChangeLanguage}
>
  <option value="pt-br">{$t('pt-br')}</option>
  <option value="en-us">{$t('en-us')}</option>
</select>
<br />
<br />
<div>{$t('hello', 'Test')}</div>
