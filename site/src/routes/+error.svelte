<script>
  import ReturnArrow from "$lib/components/ReturnArrow.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error</title>
</svelte:head>

<div class="error">
  <div>
    <hr class="err-line" />
    <h1 class="error-status">
      <b>{$page.status}</b>
    </h1>
    <h2 class="error-msg">
      {$page.error.message}
    </h2>
    <hr class="err-line" />
    Didn't find what you were looking for?
    <div class="btn">
      <ReturnArrow url="/" />
    </div>
  </div>
</div>

<style lang="scss">
  .btn {
    color: red;
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
</style>
