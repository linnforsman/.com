<script>
  import Navigation from "$lib/components/Navigation.svelte";

  import SocialMedia from "$lib/components/SocialMedia.svelte";
  import CustomButton from "$lib/components/CustomButton.svelte";
  import "$lib/styles/global.scss";
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import Footer from "$lib/components/Footer.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<Navigation>
  <SocialMedia
    linkedin={data.linkedin}
    github={data.github}
    email={data.email}
    instagram={data.instagram}
    medium={data.medium}
  />
  <CustomButton>Get in touch</CustomButton>
</Navigation>
<CustomCursor />
<slot />
<Footer />
