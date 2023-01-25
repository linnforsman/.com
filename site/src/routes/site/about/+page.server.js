import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'profile']
{
  image,
  summary,
  title,
  occupation,
  availability,
  slug,
  aoi,
  skillset,
  linkedin,
  github,
  email,
} `;

export const load = async () => {
  const profile = await client.fetch(query);

  if (!profile) throw error();
  return {
    profile,
  };
};
