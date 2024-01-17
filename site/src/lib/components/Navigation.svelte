<script>
  import CustomButton from "$lib/components/CustomButton.svelte";
  import SocialMedia from "$lib/components/SocialMedia.svelte";
  export let data;
</script>

<nav class="sticky">
<slot></slot>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    place-items: center;
    height: 55px;
    width: 100%;
    z-index: 103;
    background: transparent;
    margin: 1rem;
  }

  nav > div {
    margin: auto;
    width: auto;
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
