<!-- .vuepress/components/CustomLayout.vue -->

<template class="pug">

  .home-layout
    // .main-div is the block with white background
    .main-div
      | This is a my homepage layout.
    .main-div
      // <Content /> is to show the rendered markdown content of this page
      content.content

</template>

<script>
export default {
  name: 'HomeLayout',
}
</script>