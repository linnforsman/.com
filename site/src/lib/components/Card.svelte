<div class="card"><slot /></div>

<style>
  .card {
    display: flex;
    justify-content: first baseline;
    width: 10rem;
    height: 20rem;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
    border-radius: 3px;
  }

  @media screen and (max-width: 425px) {
    .card {
      width: auto;
      height: auto;
    }
  }
</style>
