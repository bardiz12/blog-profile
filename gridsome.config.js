// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bardizba | Web Developer',
  siteUrl: "https://bardiz.digital",
  siteDescription: "Bardizba | Web Developer",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/read/:year/:slug',
        refs: {
          // if you have a field with tag ids named 'tags':
          tags: 'Tag',
          // or auto create all tags based on the 'tags' field:
          tags: {
            typeName: 'Tag',
            route: '/blog/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/tags/*.md',
        typeName: 'Tag',
        route: '/blog/tag/:id'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank'
    }
  }
}
