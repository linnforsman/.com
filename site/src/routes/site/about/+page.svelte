<script>
  import Profile from "$lib/components/Profile.svelte";
  import ProfileLayout from "$lib/components/ProfileLayout.svelte";
  import SanityImage from "$lib/components/SanityImage.svelte";
  import Contact from "$lib/components/Contact.svelte";
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; About</title>
</svelte:head>

<Profile>
  <ProfileLayout>
    {#each data.profile as profile}
      <div>
        {#if profile.image}
          <SanityImage image={profile.image} maxWidth={550} />
        {/if}
        <h1 class="profile-title">{profile.title}</h1>
        <small class="profile-occupation">{profile.occupation}</small>
        <hr />
        <small class="profile-availability">{profile.availability}</small>
        <Contact
          github={profile.github}
          linkedin={profile.linkedin}
          email={profile.email}
        />
      </div>
      <div>
        <p><i>{profile.summary}</i></p>
        <h1><b>Area of Interests</b></h1>
        <small> {profile.aoi} </small>
        <h1>Skill set</h1>
        <small>{profile.skillset}</small>
        <br />
        For full view of technology stack, redirect
        <a href="/site/about/technology">here</a>.
      </div>
    {/each}
  </ProfileLayout>
</Profile>

<style>
  .profile-title,
  .profile-occupation,
  .profile-availability {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  }
</style>
