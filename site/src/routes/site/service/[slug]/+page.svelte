<script>
  import { fade } from "svelte/transition";
  import { PortableText } from "@portabletext/svelte";
  import Code from "$lib/components/Code.svelte";
  import Link from "$lib/components/Link.svelte";
  import ImageBlock from "$lib/components/ImageBlock.svelte";
  import ReturnArrow from "$lib/components/ReturnArrow.svelte";
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Service / {data.service.title}</title>
</svelte:head>

<ReturnArrow url="/site/service/" />
<div in:fade={{ x: 200, duration: 1000 }} class="container-prose mx-auto">
  <h1>{data.service.title}</h1>
  <PortableText
    value={data.service.example}
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
