export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'Link',
      title: 'link',
      type: 'string',
    },
    {
      name: 'techstack',
      title: 'TechStack',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
