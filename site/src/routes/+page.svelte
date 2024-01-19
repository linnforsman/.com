<script>
  import SEO from "$lib/components/SEO.svelte";
  import Introduction from "$lib/components/Introduction.svelte";
  import Skillset from "$lib/components/Skillset.svelte";
  import AOI from "$lib/components/AOI.svelte";
  export let data;
</script>

{#each data.content as data}
  <SEO
    title={data.seoTitle}
    desc={data.seoDescription}
    keywords={data.seoKeywords}
    slug={data.seoSlug}
    img={data.seoImage}
  />
  <Introduction herotitle={data.name} title={data.intro} roles={data.roles} />

  <Skillset skillset={data.skillset} />

  <AOI aoi={data.aoi} />
{/each}
