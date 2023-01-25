import {CaseIcon} from '@sanity/icons'
export default {
  name: 'project',
  title: 'Project',
  icon: CaseIcon,
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
    },
    {
      title: 'Publish date',
      name: 'publishdate',
      type: 'datetime',
    },
    {
      title: 'Code',
      name: 'code',
      type: 'url',
    },
    {
      title: 'View',
      name: 'deploy',
      type: 'url',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
  ],
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
}
