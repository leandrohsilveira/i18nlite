<script>
  import literals from './Language.i18n.json'
  import { useLanguage, useTranslate } from '../testing/config.js'

  const t = useTranslate(literals)
  const [lang, changeLanguage] = useLanguage()

  /**
   * @param {Event} e
   */
  function handleChangeLanguage(e) {
    const target = /** @type {HTMLSelectElement} */ (e.target)
    changeLanguage(/** @type {*} */ (target.value))
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
