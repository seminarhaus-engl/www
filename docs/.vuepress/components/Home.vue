<template lang="pug">

.home
  h1 {{ title }}



</template>

<script lang="coffee">

export default({
  
  name: 'Home'
  #data: -> @$page.frontmatter
  
  computed:
    title: ->
      console.log @$page
      return this.$page.title
  created: ->
    console.log "console.log home", @$page


})

</script>

<style lang="stylus">
body 
  font-family: "Helvetica Neue", Roboto

</style>