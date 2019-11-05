module.exports = {
  title: 'Site Name',
  description: 'your description',
  chainWebpack: (config) => {
    config.module
    .rule('coffees')
    .test(/\.coffee$/)
    .use('coffee-loader')
      .loader('coffee-loader')
      .end()
  },
  theme: "meteorlxy",
  themeConfig: {
    docsDir: 'docs',
    search: false,
    searchMaxSuggestions: 10,
    //background:{
    //  useGeo: false
    //},
    personalInfo: {
      nickname: 'andrej',
      description: 'There is no way to happiness<br/>Happiness is the way.',
      email: 'andrej@byom.de',
      location: 'Linz, Österreich',
      //organization: 'Tencent',
      avatar: '/uploads/avatar.png',
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
        text: 'Seminare',
        link: '/seminare',
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

//image sizes:
// leader board: 728 x 90 pixels