<script>
  // Declare props to Card
  import SanityImage from "$lib/components/SanityImage.svelte";
  export let CARDTYPE;
  export let CARDTITLE;
  export let DESCRIPTION;
  export let DATE;
  export let IMAGE;
  export let TYPE;
</script>

<div class="card">
  <div class="cardbar">
    <small class="metadata">CARD_TYPE={CARDTYPE}</small>
    {#if DATE}
      <small class="metadata">
        {new Date(DATE).toLocaleDateString("en", {
          month: "long",
          year: "numeric",
        })}
      </small>
    {/if}
  </div>
  <div>
    {#if TYPE}
      <span class="type">
        {TYPE}
      </span>
    {/if}
    <h2>{CARDTITLE}</h2>
    {#if DESCRIPTION}
      <p>{DESCRIPTION}</p>
    {/if}
    {#if IMAGE}
      <SanityImage image={IMAGE} maxWidth={550} />
    {/if}
  </div>
</div>

<style lang="scss">
  h2,
  span {
    text-transform: uppercase;
  }
  .card {
    display: grid;
    justify-content: center;
    width: 15rem;
    height: 30rem;
    flex: 1 1 auto;
    flex-direction: column;
    border-radius: 5px;
    grid-template-columns: 15% 85%;
    padding-right: 15px;
    text-align: end;
    .cardbar {
      text-align: start;
      height: 30rem;
      width: 1.50rem;
    }
    .metadata {
      writing-mode: vertical-lr;
      font-size: 9px;
      text-transform: uppercase;
      padding: 10px;
    }
    .type {
      padding-left: 0px;
    }
  }

  @media screen and (max-width: 425px) {
    .card {
      width: auto;
      height: auto;
    }
  }

  @media screen and (max-width: 425px) {
    .card {
      width: auto;
      height: auto;
    }
  }
</style>
