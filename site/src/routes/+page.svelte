<script>
  export let data;
  import Introduction from "$lib/components/Introduction.svelte";
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Programmer, Scientist, Musician</title>
</svelte:head>

{#each data.siteconfig as siteconfig}
  <Introduction sitename={siteconfig.title} subtitle={siteconfig.subtitle} />
{/each}
