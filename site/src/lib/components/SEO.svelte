<script>
  export let title, desc, keywords, slug, img;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta name="keywords" content={keywords} />
  <meta name="slug" content={slug} />
  <meta property="og:image" content={img} />
</svelte:head>
