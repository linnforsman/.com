import {CaseIcon} from '@sanity/icons'
export default {
  name: 'project',
  title: 'Project',
  icon: CaseIcon,
  type: 'document',
  groups: [
    {
      name: 'base',
      title: 'Base',
    },
    {
      name: 'medias',
      title: 'Medias',
    },
    {
      name: 'details',
      title: 'Details',
    },
  ],
  fields: [
    {
      title: 'Project image',
      description: 'Project image.',
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
      title: 'Date',
      description: 'Year of the project.',
      name: 'date',
      type: 'date',
      group: 'base',
      options: {
        dateformat: 'YYYY',
        calendarTodayLabel: 'Today,',
      },
    },
    {
      title: 'Code',
      description: 'Available open source code, if not, then toggle off.',
      name: 'code',
      type: 'url',
      group: 'details',
    },
    {
      title: 'View',
      description: 'Available visual presentation or interactive product. If not, then toggle off.',
      name: 'deploy',
      type: 'url',
      group: 'details',
    },
    {
      title: 'Description',
      description: 'Text describing the project.',
      name: 'desc',
      type: 'text',
      group: 'details',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      group: 'details',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
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
