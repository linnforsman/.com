import {EarthAmericasIcon} from '@sanity/icons'
export default {
  name: 'business',
  title: 'Business',
  icon: EarthAmericasIcon,
  type: 'document',
  groups: [
    {
      name: 'base',
      title: 'Base',
    },
    {
      name: 'details',
      title: 'Details',
    },
  ],
  fields: [
    {
      title: 'Business brand image',
      description: 'The face of the brand, business or project.',
      name: 'image',
      type: 'image',
      group: 'base',
    },
    {
      title: 'Title',
      description: 'The title of the project.',
      name: 'title',
      type: 'string',
      group: 'base',
    },
    {
      title: 'Slug',
      description: 'For redirecting properly.',
      name: 'slug',
      type: 'slug',
      group: 'base',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      title: 'Description',
      description: 'Text describing the project.',
      name: 'desc',
      type: 'text',
      group: 'details',
    },
  ],

  /* DISABLE
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/project/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },

  */
}
