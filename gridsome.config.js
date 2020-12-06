// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://8.131.94.250:1337',
        queryLimit: 1000,
        contentTypes: ['blog', 'fans', 'idol', 'new', 'project'],
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
  templates: {
    StrapiBlog: [
      {
        path: '/blogDetal/:id',
        component:'./src/templates/blogDetal.vue'
      }
    ]
  }
}
