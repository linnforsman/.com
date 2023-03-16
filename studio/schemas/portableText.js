export default {
  name: 'portableText',
  type: 'array',
  title: 'Portable Text',
  of: [
    {
      type: 'block',
    },
    {
      type: 'code',
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
