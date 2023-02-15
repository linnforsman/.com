<script>
  import ReturnArrow from "$lib/components/ReturnArrow.svelte";

  import { PortableText } from "@portabletext/svelte";
  import Code from "$lib/components/Code.svelte";
  import Link from "$lib/components/Link.svelte";
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import SanityImage from "$lib/components/SanityImage.svelte";
  import ToC from "$lib/components/ToC.svelte";
  export let data;
</script>

<svelte:head>
  <title
    >Linn Forsman / Article & Publications / Article &mdash; {data.article
      .title}</title
  >
</svelte:head>

<ReturnArrow url="/site/article" />

<article class="container-prose mx-auto">
  {#if data.article.image}
    <SanityImage image={data.article.image} maxWidth={1200} />
  {/if}
  <header class="articleheader">
    <span class="category"> <b>{data.article.category}</b></span>
    <span>
      PUBLISHED {new Date(data.article.publishdate).toLocaleDateString("en", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })}
    </span>
    <h1>{data.article.title}</h1>
  </header>

  <div class="articlebody mx-prose" style="padding-bottom:5rem">
    <PortableText
      value={data.article.body}
      components={{
        types: {
          code: Code,
          image: ImageBlock,
        },
        marks: {
          link: Link,
        },
      }}
    />
  </div>
</article>

<!--  -->
<style lang="scss">
  article {
    border-radius: 0.2rem;
    border: 1px solid transparent;
    .articlebody {
      padding: 1rem;
    }
    header {
      padding: 1rem;
    }
  }

  h1 {
    font-size: min(10vw, 2rem);
    text-transform: capitalize;
  }

  @media only screen and (max-width: 768px) {
    .mx-prose {
      margin: auto 1rem auto 1rem;
    }
  }
</style>
