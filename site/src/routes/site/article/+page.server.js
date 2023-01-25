import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'article'][]
{
  image,
  title,
  slug,
  category,
  publishdate,
}  | order(select(defined(publishdate) => 1,  0) asc, publishdate desc)`;

export const load = async () => {
  const articles = await client.fetch(query);

  if (!articles) throw error();
  return {
    articles,
  };
};

export const prerender = true;
