export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60626d60e31d36009618fa40',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dqtsa2so',
                  apiId: '8f088fa9-47ba-4fbc-b7f7-619f5169381b'
                },
                {
                  buildHookId: '60626d60ea8e44007c41eedc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pyt75sy5',
                  apiId: '9623031d-263d-4859-b112-c88da73a4160'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davehenzy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pyt75sy5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
