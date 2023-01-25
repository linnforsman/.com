<script>
  import { fade } from "svelte/transition";
</script>

<article in:fade={{ x: 5, duration: 2000 }} class="container-md mx-auto">
  <slot />
</article>
