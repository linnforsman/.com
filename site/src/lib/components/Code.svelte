<script>
  export let portableText;

  $: value = portableText.value;
</script>

<pre>
    <code class="language-{value.language}">{value.code}</code>
  </pre>

<style>
  code {
    white-space: pre-wrap;
  }
</style>
