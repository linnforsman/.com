import { error } from "@sveltejs/kit";
import client from "$lib/utils/sanity";

let query = `*[_type == 'siteconfig']
{
title,
subtitle,
}`;

export const load = async () => {
  const siteconfig = await client.fetch(query);

  if (!siteconfig) throw error();
  return {
    siteconfig,
  };
};
