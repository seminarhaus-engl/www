export default {

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.coffee$/,
        loader: 'coffee-loader'
      })
    }
  }
  
}