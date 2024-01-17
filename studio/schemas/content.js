import {CaseIcon, CogIcon} from '@sanity/icons'
export default {
  name: 'content',
  title: 'Content',
  type: 'document',
  groups: [
    {
      name: 'about',
      title: 'About',
    },
    {
      name: 'project',
      title: 'Projects',
    },
    {
      name: 'service',
      title: 'Services',
      icon: CaseIcon,
    },
    {
      name: 'contact',
      title: 'Contact',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: CogIcon,
    },
  ],
  fields: [
    /* {name: 'image', title: 'Hero image', type: 'image', group: 'about'}, */
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'name', type: 'string', group: 'about'},
    // For introduction section
    {
      name: 'intro',
      description: 'Introducing yourself to the world.',
      type: 'string',
      group: 'about',
    },
    {
      name: 'roles',
      description: 'All secondary roles or available as in terms of value & service delivery.',
      type: 'array',
      of: [{type: 'string', description: 'string'}],
      group: 'about',
    },
    {
      name: 'paragraph',
      type: 'string',
      group: 'about',
    },
    {
      name: 'paragraph2',
      type: 'string',
      group: 'about',
    },
    {
      name: 'skillset',
      title: 'Skill set',
      description:
        'Description of the combination of knowledge, personal qualities, and abilities.',
      type: 'array',
      of: [{type: 'string', description: 'string'}],
      group: 'about',
    },
    {
      name: 'aoi',
      title: 'Areas of Interest',
      description: 'Description of the areas of interest.',
      type: 'array',
      of: [{type: 'string'}],
      group: 'about',
    },

    // Project & Business

    {
      name: 'project',
      title: 'Featured projects',
      description: 'Projects that will be featured on first page.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    },

    {
      name: 'business',
      title: 'Businesess',
      description: 'Businesses and organizations that will be featured on first page.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'business'}]}],
    },
    {
      name: 'article',
      title: 'Latest articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
    // Contact & Media
    {
      name: 'email',
      description: 'Professional email.',
      type: 'email',
      group: 'contact',
    },
    {
      name: 'linkedin',
      description: 'Professional networking platform.',
      type: 'url',
      group: 'contact',
    },
    {
      name: 'medium',
      description: 'All my writings.',
      type: 'url',
      group: 'contact',
    },

    {
      name: 'github',
      description: 'Technical portfolio.',
      type: 'url',
      group: 'contact',
    },

    {
      name: 'instagram',
      description: 'Visual social media. Art & lifestyle.',
      type: 'url',
      group: 'media',
    },

    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoDescription', title: 'Page description', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo'},
    {
      name: 'seoSlug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLenght: 96,
      },
      group: 'seo',
    },
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
  ],
}
