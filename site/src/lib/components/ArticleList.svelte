<section>
  <slot />
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    section {
      display: grid;
      grid-gap: 0.5rem;
      margin: 2rem 0 2rem 0;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
