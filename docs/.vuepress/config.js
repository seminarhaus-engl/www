module.exports = {
  title: 'Site Name',
  description: 'your description',
  themeConfig: {
    docsDir: 'docs',
    search: false,
    searchMaxSuggestions: 10,
    //repo: 'simplify-web/www', #creates link to github
    /*
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    */
    nav: [
      {
        text: 'Über Uns',
        link: '/ueber-uns/index.html',
      },
      {
        text: 'Aktuelles',
        link: '/aktuelles/index.html',
      },
      {
        text: 'Bilder',
        link: '/bilder/index.html',
      }

    ]
  }
}