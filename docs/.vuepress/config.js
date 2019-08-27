module.exports = {
  title: 'Site Name',
  description: 'your description',
  theme: "meteorlxy",
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
        link: '/ueber-uns',
      },
      {
        text: 'Aktuelles',
        link: '/aktuelles',
      },
      {
        text: 'Bilder',
        link: '/bilder',
      }

    ]
  }
}