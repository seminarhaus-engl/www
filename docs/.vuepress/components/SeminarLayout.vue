<template>
  <div class="page">
    <h1 v-html="title"></h1>
    <Content />
  </div>
</template>

<script lang="coffee">

  export default({
    computed: {
      title: -> return this.$page.title
    }
  
  })

  console.log "ssdafasdf"
</script>