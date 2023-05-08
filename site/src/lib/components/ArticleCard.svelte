<article class="article-layout">
  <slot />
</article>

<style>
  .article-layout {
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .article-layout {
      display: grid;
      grid-gap: 0.5rem;
      margin: 0 0rem 0 0rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
