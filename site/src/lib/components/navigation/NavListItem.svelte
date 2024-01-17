<script>
  import { page } from "$app/stores";
  const NavListItem = [
    { title: "Services", path: "/service" },
    { title: "Portfolio", path: "/project" },
    { title: "About", path: "/about" },
    { title: "Publication", path: "/article" },
  ];
</script>

<div class="full-page">
  <ul>
    <li>
      {#each NavListItem as i}
        <a
          class="navlistitem"
          role="button"
          target="_self"
          rel="noreferrer"
          class:active={$page.url.pathname === i.path}
          href={i.path}>{i.title}</a
        >
      {/each}
    </li>
  </ul>
</div>

<style lang="scss">
  li {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    font-size: min(16vw, 7rem);
    line-height: 1.25;
    width: 100%;
  }

  .full-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    place-items: center;
    position: fixed;
    width: 100vw;
    z-index: 101;
  }

  @media screen and (max-width: 768px) {
    .full-page {
      text-align: start;
    }
    li {
      font-size: min(15vw, 5rem);
      line-height: 3ch;
    }
  }
</style>
