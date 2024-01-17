import {PlayIcon} from '@sanity/icons'
export default {
  name: 'music',
  title: 'music',
  icon: PlayIcon,
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
      title: 'music brand image',
      description: 'The face of the brand, music or project.',
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
