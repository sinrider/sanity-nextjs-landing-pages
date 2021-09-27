export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6151f200faac447e1edca78e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vjtoros9',
                  apiId: 'cc567f46-4cdb-42ab-b8f8-57445539f4ba'
                },
                {
                  buildHookId: '6151f200632cd5392910d6f7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dvq2pjup',
                  apiId: '17a33d7a-01aa-4623-bc1c-2ec4f3357ac0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sinrider/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dvq2pjup.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
