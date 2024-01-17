import client from "$lib/utils/sanity";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const data =
    await client.fetch(`*[_type == "service" && slug.current =='${params.slug}'][0]
  {
    title,
    image,
    slug,
    example,
  }
`);
  return {
    service: data,
    slug: params.slug,
  };
}
