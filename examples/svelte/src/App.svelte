<script lang="ts">
  import literals from './App.i18n.json'
  import ChangeLanguage from './ChangeLanguage.svelte'
  import { useTranslate } from './config'

  const t = useTranslate(literals)
</script>

<ChangeLanguage />
<br />
<br />
<div>{$t('hello', $t('world'))}</div>
