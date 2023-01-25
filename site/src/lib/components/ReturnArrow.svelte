<script>
  export let url;
</script>

<a class="returnarrow" style="font-size:2.5rem" href={url}>⟵</a>

<style>
  @media screen and (max-width: 678px) {
    .returnarrow {
      display: none;
    }
  }
</style>
