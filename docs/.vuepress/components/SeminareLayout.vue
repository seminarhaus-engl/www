<!-- .vuepress/components/CustomLayout.vue -->

<template lang="pug">

  .main-div.seminare-list
    //.no-seminare(v-if='listseminare.length === 0', key='no-seminare')
      | {{ $themeConfig.lang.noRelatedseminare }}
    //.seminare-items(v-else='', :key='page')
    //ul.flex-1.max-w-xl.mx-auto.leading-normal
    .seminare-items
      .seminare-list-item(v-for='seminar in seminare')
        router-link(:to='seminar.path', class="seminar-link")
          h3.seminar-title {{ seminar.title }}
          p.seminar-info-list {{seminar.frontmatter.startDate}} - {{seminar.frontmatter.endDate}} 
          p.seminar-excerpt.content(v-html="seminar.frontmatter.descriptionShort || ''")
          p Leitung: {{seminar.frontmatter.performers}}

</template>

<script lang="coffee">

  marked = require("marked")

  export default({
    name: 'SeminareLayout'

    computed:
      title: -> @$page.title
      seminare: ->
        @$site.pages.filter((seminar) -> 
          if seminar.frontmatter?.descriptionShort
            seminar.frontmatter.descriptionShort =  marked(seminar.frontmatter.descriptionShort)
          # alles was SeminarLayout hat wird angezeigt
          seminar.frontmatter.layout is "SeminarLayout"
        )
  })

</script>

<style lang="stylus">
  
  @require '~@theme/styles/variables'
  .seminare-list-item
    padding 0 0.5rem
    &:not(:first-child)
      border-top 1px solid $borderColor
    .seminar-title
      color $textColor
      transition all 0.2s
    .seminar-info-list
      color $lightTextColor
      .seminar-info-item
        cursor default
        &:not(:first-child)
          margin-left 0.5em
        a
          color $lightTextColor
          font-weight normal
        .icon
          fill $lightTextColor
    .seminar-excerpt
      color $grayTextColor
      text-align justify
      padding 0
    .seminar-link
      &:hover
        text-decoration none
        .seminar-title
          color $accentColor

</style>