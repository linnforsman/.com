<script>
  import { fade, fly } from "svelte/transition";
  import CallToAction from "$lib/components/CallToAction.svelte";
  import LF from "$lib/assets/Title.svg";
  export let sitename;
  export let subtitle;
</script>

<!-- Introduction -->

<section in:fade={{ x: 50, duration: 1000 }} out:fade class="introduction">
  <div in:fly={{ x: 50, duration: 1250 }} class="introduction-content">
    <h1 class="title gradient-light-text">{sitename}</h1>
    <h2 class="subtitle">{subtitle}</h2>
    <CallToAction />
  </div>
</section>

<!-- End of Introduction.svelte -->

<style lang="scss">
  .introduction {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .introduction-content {
      position: relative;
      padding: 0;
      margin: 1rem;
    }
    .title {
      font-size: min(16vw, 10rem);
    }
    .subtitle {
      text-transform: uppercase;
    }
  }
  @media (max-width: 786px) {
    .introduction {
      justify-content: center;
      .title {
        font-size: min(16vw, 3.5rem);
        .subtitle {
          font-size: min(16vw, 1rem);
        }
      }
    }
  }
</style>
