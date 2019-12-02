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
    infoCard: {
      headerBackground: {
        url: "/uploads/banner_infobox.jpg"
      }
    },
    personalInfo: {
      nickname: 'Barbara Wegmüller',
      description: 'There is no way to happiness<br/>Happiness is the way.',
      email: 'barbara.wegmüller@byom.de',
      //location: 'Berlin, Deutschland',
      organization: 'Peacemakers',
      avatar: '/uploads/person_barbara.wegmueller.jpg',
    },
    header:{
      showTitle: true,
      // this is used for seminare, to show it also on the detail page of each seminar
      background:{
        url: "/uploads/banner_seminare.jpg"
      },
    },
    footer: {
      poweredBy: false,
      poweredByTheme: false,
      //custom: 'info(at)seminarhaus-engl.de | Engl 1 | 84339 Unterdietfurt | fon: 08728 616 | fax: 08728 412 | <a href="/kontakt.html" target="_blank">Kontakt/Bankverbindung/Impressum/Datenschutz</a>',
      custom: 'info(at)seminarhaus-engl.de | Engl 1 | 84339 Unterdietfurt | fon: 08728 616 | <a href="/kontakt.html" target="_blank">Kontakt/Bankverbindung/Impressum/Datenschutz</a>',
    },
  

    //repo: 'seminarhaus-engl/www', #creates link to github
    /*
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    */
    nav: [
      {
        text: 'Seminare',
        link: '/seminare',
      },
      {
        text: 'Anmeldeinfos',
        link: '/anmeldeinfos',
      },
      {
        text: 'Dana-Prinzip',
        link: '/dana',
      },
      {
        text: 'Bilder',
        link: '/bilder',
      },
      {
        text: 'Links',
        link: '/links',
      }
    ]
  }
}

//image sizes:
// leader board: 728 x 90 pixels