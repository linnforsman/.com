<section>
  <slot />
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem 0rem;
    margin: 1rem;
  }
</style>