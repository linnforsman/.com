<script>
  import "$lib/styles/global.scss";
  import "$lib/styles/prism.css";
  import "$lib/styles/prism.js";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import SiteMenu from "$lib/components/SiteMenu.svelte";

  import { page } from "$app/stores";

  /** @type {import('./$types').LayoutLoad} */
  export const load = async ({ url: { pathname } }) => {
    return { pathname };
  };
  export let data;
  let open = false;
</script>

<svelte:head>
  <link rel="stylesheet" href="./styles/prism.css" />
</svelte:head>
<Sidebar bind:open />
<Navigation bind:sidebar={open} />
<SiteMenu />
<Breadcrumb path={$page.url.pathname} />
<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>
