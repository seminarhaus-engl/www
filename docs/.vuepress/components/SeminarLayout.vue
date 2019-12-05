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

    .main-div
      h2(style="text-align: center") Anmeldung
      form.pure-form.pure-form-aligned
        fieldset
          .pure-control-group
            label(for='givenName') Vorname<em style="color:red">*</em>
            input.pure-input-1-2(type='text', required)
          .pure-control-group
            label(for='familyName') Nachname<em style="color:red">*</em>
            input.pure-input-1-2(type='text', required)
          .pure-control-group
            label(for='newsletter') Geschlecht<em style="color:red">*</em>
            label.pure-radio(for='sex')
              input(type='radio', name='optionsRadios', value='male', required)
              | männlich
            label.pure-radio(for='sex')
              input(type='radio', name='optionsRadios', value='female')
              | weiblich
          .pure-control-group
            label(for='email') Email Adresse<em style="color:red">*</em>
            input.pure-input-1-2(type='email', required)
          .pure-control-group
            label(for='streetAddress') Telefon<em style="color:red">*</em>
            input.pure-input-1-2(type='tel', required)
          .pure-control-group
            label(for='streetAddress') Strasse<em style="color:red">*</em>
            input.pure-input-1-2(type='text', required)
          .pure-control-group
            label(for='postalCode') PLZ<em style="color:red">*</em>
            input.pure-input-1-2(type='text', required)
          .pure-control-group
            label(for='addressLocality') Ort<em style="color:red">*</em>
            input.pure-input-1-2(type='text', required)
          .pure-control-group
            label(for='country') Land<em style="color:red">*</em>
            input.pure-input-1-2(type='text', required)
          .pure-control-group
            label(for='country') Geburtsdatum
            input.pure-input-1-2(type='text', placeholder='Um doppelte Einträge zu vermeiden')


          .pure-control-group
            label(for='country') Bemerkung
            textarea.pure-input-1-2

          .pure-control-group
            label(for='newsletter') Newsletter<em style="color:red">*</em>
            label.pure-radio(for='newsletter')
              input(type='radio', name='optionsRadios', value='true')
              | Ja
            label.pure-radio(for='newsletter')
              input(type='radio', name='optionsRadios', value='false', checked='')
              | Nein

          .pure-controls
            label.pure-checkbox(for='cb')
              input#cb(type='checkbox')
              | Ich habe die Anmeldeinfo gelesen und akzeptiere die Veranstaltungsbedingungen
            button.pure-button.pure-button-success(type='submit') Anmeldung abschicken



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

###
*Ime in priimek
*E-Mail
*Postni naslov
*Telefonska stevila pod katero je osebo najlazje dobiti

Pripomba/ Bemerkung
*Potrditev  da je prebrala Anmeldeinfos
Newsletter: ja ali ne


Veranstaltungsbedingungen
Ich nehme zur Kenntnis, dass meine personenbezogenen Daten und die meines Partners/meiner Partnerin, nämlich Name, Adresse, E-Mail Adresse, Telefonnummer zum Zweck der Veranstaltungsverwaltung elektronisch gespeichert werden. Die Daten werden BEZIEHUNGLEBEN.AT, als Veranstalter, und an das Bildungshaus/die Bildungseinrichtung in welchem/r der Ehevorbereitungskurs stattfindet, weitergegeben. Nur so kann das Bildungshaus/die Bildungseinrichtung Ihnen die notwendigen Informationen zukommen lassen. Zwei Jahre nach der letzten besuchten Veranstaltung werden die Daten inaktiv gestellt und 5 Jahre nach der letzten besuchten Veranstaltung werden die Daten gelöscht. Mit der Anmeldung zu einer Veranstaltung bei BEZIEHUNGLEBEN.AT erkläre ich mich damit einverstanden, dass ich einmal jährlich das Bildungsprogramm mit Seminaren von BEZIEHUNGLEBEN.AT bis zu zwei Jahre nach der Veranstaltung zugeschickt bekomme.
Alle Einwilligungen können jederzeit per Mail an beziehungleben@dioezese-linz.at widerrufen werden. Es wird darauf hingewiesen, dass alle bis zum Widerruf vorgenommenen Verarbeitungen weiterhin rechtmäßig bleiben.

###

</script>
