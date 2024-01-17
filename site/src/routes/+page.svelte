<script>
  import Introduction from "$lib/components/Introduction.svelte";
  import Skillset from "$lib/components/Skillset.svelte";
  import AOI from "$lib/components/AOI.svelte";
  export let data;
</script>

{#each data.content as data}
  <Introduction herotitle={data.name} title={data.intro} roles={data.roles} />

  <Skillset skillset={data.skillset} />

  <AOI aoi={data.aoi} />
{/each}
