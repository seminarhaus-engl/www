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
    content:    -> if @$page.frontmatter.content then marked(@$page.frontmatter.content) else null
    title2:     -> @$page.frontmatter.title2
    content2:   -> if @$page.frontmatter.content then marked(@$page.frontmatter.content2) else null
    title3:     -> @$page.frontmatter.title3
    content3:   -> if @$page.frontmatter.content3 then marked(@$page.frontmatter.content3) else null
})

</script>

<style lang="stylus">

  .layout-Home
    .banner
      height: 36rem
    .navbar-site-name
      display: none !important

</style>