<template lang="pug">

  .page
    h2(v-html='fm.title')
    p.seminar-info-list {{fm.startDate}} - {{fm.endDate}} 
    p(v-html='fm.descriptionShort')
    p(v-html='fm.description')
    p <strong>Honorar:</strong> {{fm.honorar}}
    p <strong>Kursbebühr:</strong> {{fm.kursgebuehr}}
    p <strong>Unterkunft und Verpflegung:</strong> {{fm.unterkunft}}
    p <strong>Leitung:</strong> {{fm.performers}}
    p(v-html="fm.dozentenbeschreibung")
    a(:href="fm.websiteUrl", target="_blank") <strong>Website:</strong> {{fm.website}}


</template>

<script lang="coffee">

  export default({

    computed: {
      fm: -> @$page.frontmatter
    }
  
  })

</script>