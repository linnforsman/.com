import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'content']
{
  intro, 
  paragraph,
  paragraph2,
  skillset,
  aoi,
  email,
  linkedin,
  medium,
  title,
  name,
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
