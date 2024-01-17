<script>
  import { fade, fly } from "svelte/transition";
  import CallToAction from "$lib/components/CallToAction.svelte";
  export let herotitle, title, roles;
</script>

<!-- identity -->

<section in:fade={{ x: 50, duration: 1000 }} out:fade>
  <div class="identity-item" in:fly={{ x: 50, duration: 1250 }}>
    <h2 class="title-2">{title}</h2>
  </div>
  <div>
    <h1 class="title">{herotitle}</h1>
  </div>
  <div class="identity-item">
    <h3 class="title-3">{roles}</h3>
  </div>
</section>
<CallToAction />

<!-- End of Introduction.svelte -->

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
  .identity-item {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: min(10vw, 25rem);
    text-transform: uppercase;
  }

  .title-2 {
    font-size: min(10vw, 2.5rem);
    text-transform: uppercase;
  }
  .title-3 {
    font-size: min(16vw, 1.5rem);
    text-transform: uppercase;
  }
</style>
