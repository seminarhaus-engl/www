<template lang="pug">

.home
  p sdaklfasfdlkj


</template>

<script lang="coffee">

export default({
  
  name: 'Home'
  data: ->
    @$page.frontmatter
  
  computed:
    title: ->
      console.log @$page
      return this.$page.title
  created: -> console.log "console.log home"


})

</script>