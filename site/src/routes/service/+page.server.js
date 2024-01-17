import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'service']
{
  image,
  title,
  slug,
  desc,
} `;

export const load = async () => {
  const services = await client.fetch(query);

  if (!services) error();
  return {
    services,
  };
};
