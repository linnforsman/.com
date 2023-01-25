export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      name: 'example',
      type: 'portableText',
      title: 'Full description on example of service.',
    },
    {
      name: 'desc',
      title: 'Description or Preview',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/service/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
}
