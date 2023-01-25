import {UserIcon} from '@sanity/icons'
export default {
  name: 'profile',
  title: 'Profile',
  icon: UserIcon,
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Profile Image',
      description: 'Profile image for your about page.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'occupation',
      type: 'string',
      title: 'Occupation',
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn',
    },
    {
      name: 'github',
      type: 'url',
      title: 'Gihub',
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
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
      name: 'summary',
      type: 'text',
      title: 'Profile Summary',
    },
    {
      name: 'availability',
      type: 'string',
      title: 'Availability',
    },
    {
      name: 'aoi',
      type: 'array',
      title: 'Area of Interests',
      of: [{type: 'string'}],
    },
    {
      name: 'skillset',
      type: 'array',
      title: 'Skillset',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/profile/${slug.current}/`
      return {
        title,
        media,
        subtitle: path,
      }
    },
  },
}
