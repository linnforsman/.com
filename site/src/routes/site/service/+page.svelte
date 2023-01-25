<script>
  import Card from "$lib/components/Card.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import { fade } from "svelte/transition";
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Services</title>
</svelte:head>

<div in:fade={{ x: 200, duration: 1000 }} class="container-lg mx-auto">
  {#if data.services && data.services.length}
    <Grid>
      {#each data.services as service}
        <Card>
          <a href="/site/service/{service.slug.current}">
            <h1 style="text-transform:uppercase">{service.title}</h1>
          </a>
          {service.desc}
        </Card>
      {/each}
    </Grid>
  {:else}
    <p>No services found.</p>
  {/if}
</div>
