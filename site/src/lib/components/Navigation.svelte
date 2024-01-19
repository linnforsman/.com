<nav class="sticky">
  <slot />
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    place-items: center;
    width: 100%;
    z-index: 103;
    background: transparent;
    margin: 1rem;
  }

  nav > div {
    margin: auto;
    width: auto;
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>
