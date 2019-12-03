<template lang="pug">

  .page
    .main-div
      h2 {{fm.title}}
      p.seminar-info-list {{fm.startDate}} - {{fm.endDate}} 
      p(v-if="descriptionShort",  v-html='descriptionShort')
      p(v-if="description",       v-html='description')
      p(v-if="fm.honorar")      <strong>Honorar:</strong>                     {{fm.honorar}}
      p(v-if="fm.kursgebuehr")  <strong>Kursbebühr:</strong>                  {{fm.kursgebuehr}}
      p(v-if="fm.unterkunft")   <strong>Unterkunft und Verpflegung:</strong>  {{fm.unterkunft}}
      p(v-if="fm.performers")   <strong>Leitung:</strong>                     {{fm.performers}}
      p(v-if="dozentenbeschreibung", v-html="dozentenbeschreibung")
      //a(v-if="fm.websiteUrl", :href="fm.websiteUrl", target="_blank") <strong>Website:</strong> {{fm.website}}

</template>

<script lang="coffee">
  # todo: add white background to page

  marked = require("marked")

  export default({

    computed: {
      # get frontmatter props into fm object
      fm: -> @$page.frontmatter
      
      descriptionShort:     -> if @fm.descriptionShort then marked(@fm.descriptionShort) else null
      description:          -> if @fm.description then marked(@fm.description) else null
      dozentenbeschreibung: -> if @fm.dozentenbeschreibung then marked(@fm.dozentenbeschreibung) else null
    }
    #created: ->
  
  })

</script>