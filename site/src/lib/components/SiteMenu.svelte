<nav>
  <a href="/site/service">Services</a>
  <a href="/site/project">Portfolio</a>
  <a href="/site/about">About</a>
  <a href="/site/article">Publication</a>
</nav>

<style lang="scss">
  nav {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    font-size: large;
  }
  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }
</style>
