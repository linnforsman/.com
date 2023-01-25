<script>
  import Card from "$lib/components/Card.svelte";
  import SanityImage from "$lib/components/SanityImage.svelte";
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
        <Card>
          <b>{project.type}</b>
          <small>
            {new Date(project.publishdate).toLocaleDateString("en", {
              month: "long",
              year: "numeric",
            })}</small
          >
          <a href="/site/project/{project.slug.current}"
            ><h2>{project.title}</h2></a
          >
          {#if project.image}
            <SanityImage image={project.image} maxWidth={550} />
          {/if}
        </Card>
      {/each}
    </Grid>
  {:else}
    <p>No projects found.</p>
  {/if}
</div>

<style>
  b,
  small,
  h2 {
    text-transform: uppercase;
  }
</style>
