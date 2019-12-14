module.exports = {
  chainWebpack: (config) => {
    config.module
    .rule('coffees')
    .test(/\.coffee$/)
    .use('coffee-loader')
      .loader('coffee-loader')
      .end()
  },

  title: 'Seminarhaus Engl',
  description: 'your description',
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

    infoCard: {
      headerBackground: {
        url: "/uploads/banner_infobox.jpg"
      }
    },
    // usefull for general infobox for site
    personalInfo: {
      nickname: '',
      description: '',
      email: '',
      //location: 'Berlin, Deutschland',
      organization: '',
      avatar: '',
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
      custom: '<ul><li>info(at)seminarhaus-engl.de</li><li>|</li><li> Engl 1</li><li>|</li><li>84339 Unterdietfurt</li> <li>|</li><li>fon: 08728 616</li><li>|</li><li><a href="/kontakt.html">Kontakt/Bankverbindung/Impressum</a></li><li>|</li><li><a href="/datenschutz.html">Datenschutz</a></li></ul>',
    },
  
    //repo: 'seminarhaus-engl/www', #creates link to github

    nav: [
      {
        text: 'Aktuelles',
        link: '/aktuelles',
      },
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
