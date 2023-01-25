import client from "$lib/utils/sanity";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const data =
    await client.fetch(`*[_type == "project" && slug.current =='${params.slug}'][0]
  {
    title,
    image,
    publishdate,
    slug,
    type,
    role,
    desc,
    code, 
    deploy,
  }
`);
  return {
    project: data,
    slug: params.slug,
  };
}
