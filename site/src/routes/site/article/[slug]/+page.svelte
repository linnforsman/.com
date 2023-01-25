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

<header class="h-container">
  <h1 class="header-title" style="text-align:center">{data.article.title}</h1>
  {#if data.article.image}
    <SanityImage image={data.article.image} maxWidth={1200} />
  {/if}
</header>
<article class="container-prose mx-auto">
  <span class="category"> {data.article.category}</span>

  <p>
    Published {new Date(data.article.publishdate).toLocaleDateString("en", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    })}
  </p>

  <hr />

  <div class="relative mx-prose" style="padding-bottom:5rem">
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

    <!-- table of contents -->
    <aside aria-label="Table of Contents">
      <!-- ignore h1 tags as they should only be used for the post title -->
      <ToC allowedHeadings={["h2", "h3", "h4", "h5", "h6"]} />
    </aside>
  </div>
</article>

<!--  -->
<style lang="scss">
  .h-container {
    position: relative;
    text-align: center;
    z-index: -1;
    .header-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  h1 {
    font-size: min(10vw, 4rem);
    text-transform: capitalize;
  }
  .relative {
    position: relative;
  }
  aside {
    width: auto;
    position: fixed;
    z-index: 1;
    top: 5rem;
    left: 5rem;
    background-color: transparent;
    overflow-x: hidden;
    padding: 8px 0;
  }

  @media only screen and (max-width: 768px) {
    .mx-prose {
      margin: auto 1rem auto 1rem;
    }
  }

  @media only screen and (max-width: 2250px) {
    aside {
      display: none;
    }
  }
</style>
