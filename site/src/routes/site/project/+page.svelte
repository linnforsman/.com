<script>
  import Card from "$lib/components/Card.svelte";

  import Grid from "$lib/components/Grid.svelte";
  import { fade } from "svelte/transition";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Portfolio</title>
</svelte:head>
<div class="container-lg mx-auto" transition:fade={{ x: 200, duration: 550 }}>
  {#if data.projects && data.projects.length}
    <Grid>
      {#each data.projects as project}
        <a rel="prefetch" href="/site/project/{project.slug.current}">
          <Card
            CARDTYPE={project.title}
            CARDTITLE={project.title}
            DATE={project.publishdate}
            DESCRIPTION={project.desc}
            TYPE={project.type}
            IMAGE={project.image}
          />
        </a>
      {/each}
    </Grid>
  {:else}
    <p>No projects found.</p>
  {/if}
</div>
