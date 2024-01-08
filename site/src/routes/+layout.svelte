<script>
  import "$lib/styles/global.scss";
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // Imports for view of user insights to Vercel's Web Analytics dashboard.
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  inject({ mode: dev ? "development" : "production" });
</script>

<CustomCursor />
<slot />
<Footer />
