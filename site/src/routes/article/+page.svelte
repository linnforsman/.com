<script>
  import SanityImage from "$lib/components/SanityImage.svelte";
  import ArticleList from "$lib/components/ArticleList.svelte";
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import { fade } from "svelte/transition";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Articles & Publications</title>
</svelte:head>
<div class="container-lg mx-auto" in:fade>
  {#if data.articles && data.articles.length}
    {#each data.articles as article}
      <div class="border-l" style="text-transform:uppercase">
        <ArticleList>
          <a rel="prefetch" href="/site/article/{article.slug.current}">
            <ArticleCard>
              <div>
                {#if article.image}
                  <SanityImage
                    image={article.image}
                    maxWidth={550}
                    alt="Preview article image."
                  />
                {/if}
              </div>
              <div>
                <small class="category article-category"
                  ><b>{article.category}</b></small
                >
                <li>
                  <small>
                    Published {new Date(article.publishdate).toLocaleDateString(
                      "en",
                      {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </small>

                  <h1>
                    {article.title}
                  </h1>
                </li>
              </div>
            </ArticleCard>
          </a>
        </ArticleList>
      </div>
    {/each}
  {:else}
    <p>No articles found.</p>
  {/if}
</div>

<style>
  h1 {
    font-size: min(10vw, 1.5rem);
  }
  li {
    list-style: none;
  }
</style>
