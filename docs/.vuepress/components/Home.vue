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

body 
  font-family: "Roboto", sans-serif

  //background-size: cover
  //background-repeat: no-repeat
  //background-position: center center
  //background-attachment: scroll
  //background-image: url("/uploads/bg_home.jpg")

.navbar-site-name
  text-transform: uppercase

</style>