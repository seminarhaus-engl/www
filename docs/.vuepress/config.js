module.exports = {
  title: 'Seminarhaus Engl',
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
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: false,
      // Allow theme to add Posts page (url: /posts/)
      posts: false,
    },
    docsDir: 'docs',
    search: false,
    searchMaxSuggestions: 10,
    //background:{
    //  useGeo: false
    //},
    personalInfo: {
      nickname: 'Barbara Wegmüller',
      description: 'There is no way to happiness<br/>Happiness is the way.',
      email: 'barbara.wegmüller@byom.de',
      location: 'Berlin, Deutschland',
      //organization: 'Tencent',
      avatar: '/uploads/person_barbara.wegmueller.jpg',
    },
    header:{
      showTitle: true,
      // this is used for seminare, to show it also on the detail page of each seminar
      background:{
        url: "/uploads/banner_seminare.jpg"
      },
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