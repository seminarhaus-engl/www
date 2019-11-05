<template lang="pug">

  .page
    h1(v-html='title')
    content

</template>

<script lang="coffee">

  export default({

    computed: {
      title: -> return this.$page.title
    }
  
  })

</script>