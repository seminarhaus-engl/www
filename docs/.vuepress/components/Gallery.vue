<!-- .vuepress/components/CustomLayout.vue -->

<template lang="pug">

  .main-div
    .flexbox
      .item(v-for='image in galleryImages')
        img(:src='image')
        //p.title 1st item

</template>

<script lang="coffee">

  marked = require("marked")

  export default({
    name: 'GalleryLayout'

    computed:
      title: -> @$page.title
      galleryImages: ->
        console.log @$page.frontmatter.galleryImages
        @$page.frontmatter.galleryImages

    created: -> console.log "ready"

  })

</script>

<style lang="stylus" scoped>

// Flexbox wrapper
.flexbox{
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	height: 100vw;
  
  &:hover{
    img {
      opacity:0.28;
    }
  }

  // Each flex item
  .item{
    position:relative;
    width: 33.33%;  // 3 column
    img{
      width: 100%;
      display: block;
      transition:all .8s;
    }
    .title{
      position:absolute;
      top:48%;
      left:0;
      width:100%;
      padding:0 3%;
      font-size:30px;
      text-shadow:0 0 8px rgba(0,0,0,0.42);
    }
    &:hover{
      img{
        opacity:1;
      }
    }
  }
}

// Mediaqueries
@media ( max-width : 860px ){
  // set to 2 column
  .flexbox{
    height:220vw;
    .item{
      width:50%;
    }
  }
}
@media ( max-width : 667px ){
  // set to 1 column
  .flexbox{
    height:auto;
    .item{
      width:100%;
    }
  }
}
</style>