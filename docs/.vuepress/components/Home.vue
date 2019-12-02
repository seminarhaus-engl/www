<template lang="pug">

.home
  .main-div
    h2 {{ title }}
    p {{ content }}
  .main-div
    h2 h2 {{ title2 }}
    p {{ content }}

</template>

<script lang="coffee">

export default({
  
  name: 'Home'
  
  computed:
    title:      -> @$page.frontmatter.title
    content:    -> @$page.frontmatter.content
    title2:      -> @$page.frontmatter.title2
    content2:    -> @$page.frontmatter.content2
})

</script>

<style lang="stylus">

  .layout-Home
    .banner
      height $bannerHeight * 3
    .navbar-site-name
      display: none !important

</style>