import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'project'][]
{
  image,
  title,
  slug,
  type,
  publishdate,
}  | order(select(defined(publishdate) => 1,  0) asc, publishdate desc)`;

export const load = async () => {
  const projects = await client.fetch(query);

  if (!projects) throw error();
  return {
    projects,
  };
};
