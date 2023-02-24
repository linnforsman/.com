<script>
  import { fade } from "svelte/transition";
</script>

<article transition:fade={{ x: 5, duration: 550 }} class="container-md mx-auto">
  <slot />
</article>
