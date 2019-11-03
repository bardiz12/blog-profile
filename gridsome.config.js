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
          tags: {
            typeName: 'Tag',
            route: '/blog/tag/:slug',
            create: true
          },
        },
        remark: {
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/projects/**/*.md',
        typeName: 'Project',
        route: '/project/:slug'
      }
    },
  ],
  transformers: {

  }
}
