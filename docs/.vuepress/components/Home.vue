<template lang="pug">

.home
  .main-div(v-if="content")
    h2 {{ title }}
    p(v-html="content")
  .main-div(v-if="content2")
    h2 {{ title2 }}
    p(v-html="content2")
  .main-div(v-if="content3")
    h2 {{ title3 }}
    p(v-html="content3")

</template>

<script lang="coffee">

marked = require("marked")

export default({  
  name: 'Home'
  
  computed:
    title:      -> @$page.frontmatter.title
    content:    -> marked(@$page.frontmatter.content)
    title2:     -> @$page.frontmatter.title2
    content2:   -> marked(@$page.frontmatter.content2)
    title3:     -> @$page.frontmatter.title3
    content3:   -> marked(@$page.frontmatter.content3)
})

</script>

<style lang="stylus">

  .layout-Home
    .banner
      height $bannerHeight * 3
    .navbar-site-name
      display: none !important

</style>