import client from "$lib/utils/sanity";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const data =
    await client.fetch(`*[_type == "article" && slug.current =='${params.slug}'][0]
  {
    title,
    image,
    publishdate,
    category,
    slug,
    body
  }
`);
  return {
    article: data,
    slug: params.slug,
  };
}