<template lang="pug">

.home
  .main-div
    h2 {{ title }}
    p {{ content }}
  .main-div
    h2 Aktuelle Kurse
    p hier könnte eine liste der nächsten 5 kurse kommen

</template>

<script lang="coffee">

export default({
  
  name: 'Home'
  
  computed:
    title:      -> @$page.frontmatter.title
    content:    -> @$page.frontmatter.content

  #created: -> console.log @$page


})

</script>

<style lang="stylus">

  .layout-Home
    .banner
      height $bannerHeight * 3
    .navbar-site-name
      display: none !important

</style>