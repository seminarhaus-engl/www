module.exports = {
  title: 'Site Name',
  description: 'your description',
  theme: "meteorlxy",
  themeConfig: {
    docsDir: 'docs',
    search: false,
    searchMaxSuggestions: 10,
    personalInfo: {
      nickname: 'andrej',
      description: 'There is no way to happiness<br/>Happiness is the way.',
      email: 'andrej@byom.de',
      location: 'Linz, Österreich',
      //organization: 'Tencent',
      avatar: '/images/avatar.png',
    },
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