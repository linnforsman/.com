import {CogIcon} from '@sanity/icons'
export default {
  name: 'siteconfig',
  type: 'document',
  icon: CogIcon,
  title: 'Site Configuration',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'The name of the site.',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The subtitle of the site.',
      type: 'string',
    },
  ],
}
