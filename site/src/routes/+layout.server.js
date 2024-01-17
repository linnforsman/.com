import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'content']
{
  title,
  name,
  intro, 
  roles,
  paragraph,
  paragraph2,
  skillset,
  aoi,
  project,
  business,
  email,
  linkedin,
  medium,
  github,
  instagram,
  seoTitle,
  seoDescription,
  seoKeywords,
  seoSlug,
  seoImage,
}`;

export const load = async () => {
  const content = await client.fetch(query);

  if (!content) error();
  return {
    content,
  };
};
