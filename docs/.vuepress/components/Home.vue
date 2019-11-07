<template lang="pug">

.home
  h1 {{ title }}
  p {{ content }}

</template>

<script lang="coffee">

export default({
  
  name: 'Home'
  
  computed:
    title:      -> @$page.frontmatter.title
    content:    -> @$page.frontmatter.content

  created: -> console.log @$page


})

</script>

<style lang="stylus">

import('bulma/css/bulma.css')

body 
  font-family: "Roboto", sans-serif
  //background-size: cover
  //background-repeat: no-repeat
  //background-position: center center
  //background-attachment: scroll
  //background-image: url("/uploads/bg_home.jpg")

//.banner
  //display: none

</style>