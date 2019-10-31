<!-- .vuepress/components/CustomLayout.vue -->

<template lang="pug">

  .main-div.seminare-list
    //.no-seminare(v-if='listseminare.length === 0', key='no-seminare')
      | {{ $themeConfig.lang.noRelatedseminare }}
    //.seminare-items(v-else='', :key='page')
    ul.flex-1.max-w-xl.mx-auto.leading-normal
      li(v-for='post in seminare')
        router-link(:to='post.path') {{ post.title }}
      //seminareListitem(v-for='post in seminare', :key='post.path', :post='post')
  //.seminare-paginator(v-if='total > 1')
    pagination(v-model='page', :total='total')

</template>

<script>
export default {
  name: 'SeminareLayout',
  computed: {
      title() {
        return this.$page.title
      },
      seminare() {
        console.log(this.$site.pages)
        return this.$site.pages
          .filter(x => x.path.startsWith("/seminare/"))
      }
    }
}
</script>