<template lang="pug">

.home
  h1 {{ title }}
  content



</template>

<script lang="coffee">

export default({
  
  name: 'Home'
  
  computed:
    title: -> @$page.title
  created: ->
    console.log @$page
    console.log @$page.frontmatter

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

//.banner
  //display: none

</style>