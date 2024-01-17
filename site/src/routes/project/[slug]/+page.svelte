<script>
  import SanityImage from "$lib/components/SanityImage.svelte";
  import Button from "$lib/components/Button.svelte";
  import CustomButton from "$lib/components/CustomButton.svelte";
  import Project from "$lib/components/Project.svelte";
  import ProjectLayout from "$lib/components/ProjectLayout.svelte";
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman / Portfolio / Project &mdash; {data.project.title}</title>
</svelte:head>

<Project>
  <ProjectLayout>
    <div>
      {#if data.project.image}
        <SanityImage image={data.project.image} maxWidth={550} />
      {/if}
    </div>
    <div class="project-details">
      <h1 class="project-title">
        {data.project.title}
      </h1>
      <p>
        {data.project.desc}
      </p>
      <b>
        {new Date(data.project.publishdate).toLocaleDateString("en", {
          month: "long",
          year: "numeric",
        })}
      </b>
      <hr />
      <b>Type</b>: {data.project.type} <b>Role</b>: {data.project.role}

      <div class="btn-group">
        <CustomButton>
          <a
            href={data.project.code}
            alt="Inspect the codebase for this project.">Code</a
          ></CustomButton
        >
        <Button>
          <a href={data.project.deploy} alt="View the demo for this project."
            >View</a
          ></Button
        >
      </div>
    </div>
  </ProjectLayout>
</Project>

<style lang="scss">
  .btn-group {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 5rem;
  }

  .project-details {
    padding-right: 2rem;
    padding-left: 2rem;
    .project-title {
      font-size: min(10vw, 4rem);
      text-transform: uppercase;
      padding: 0 10rem 0 0;
      margin: 0;
    }
  }
</style>
