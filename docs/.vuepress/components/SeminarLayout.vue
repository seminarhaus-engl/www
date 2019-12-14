<template lang="pug">

  .page
    .main-div
      h2 {{fm.title}}
      p.seminar-info-list {{fm.startDate}} - {{fm.endDate}} 
      p(v-if="descriptionShort",  v-html="descriptionShort")
      p(v-if="description",       v-html="description")
      p(v-if="fm.honorar")      <strong>Honorar:</strong>                     {{fm.honorar}}
      p(v-if="fm.kursgebuehr")  <strong>Kursbebühr:</strong>                  {{fm.kursgebuehr}}
      p(v-if="fm.unterkunft")   <strong>Unterkunft und Verpflegung:</strong>  {{fm.unterkunft}}
      p(v-if="fm.performers")   <strong>Leitung:</strong>                     {{fm.performers}}
      p(v-if="dozentenbeschreibung", v-html="dozentenbeschreibung")
      //a(v-if="fm.websiteUrl", :href="fm.websiteUrl", target="_blank") <strong>Website:</strong> {{fm.website}}

    .main-div
      h2(style="text-align: center") Anmeldung
      form.pure-form.pure-form-aligned(@submit.prevent="processForm")
        fieldset
          .pure-control-group
            label(for="givenName") Vorname<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.givenName", type="text", required)
          .pure-control-group
            label(for="familyName") Nachname<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.familyName", type="text", required)
          .pure-control-group
            label(for="gender") Geschlecht<em style="color:red">*</em>
            label.pure-radio(for="gender")
              input(v-model="form.gender", type="radio", name="genderRadio", value="male", required)
              | männlich
            label.pure-radio(for="gender")
              input(v-model="form.gender", type="radio", name="genderRadio", value="female", required)
              | weiblich
            label.pure-radio(for="gender")
              input(v-model="form.gender", type="radio", name="genderRadio", value="transgender", required)
              | transgender
          .pure-control-group
            label(for="email") Email Adresse<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.email", type="email", required)
          .pure-control-group
            label(for="telephone") Telefon<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.telephone", type="tel", required, placeholder="Bitte die Nummer, unter der Sie am besten zu erreichen sind.")
          .pure-control-group
            label(for="streetAddress") Strasse<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.streetAddress", type="text", required)
          .pure-control-group
            label(for="postalCode") PLZ<em style="color:red">*</em>
            input.pure-input-2-3(v-model.number="form.postalCode", type="number", required)
          .pure-control-group
            label(for="addressLocality") Ort<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.addressLocality", type="text", required)
          .pure-control-group
            label(for="addressCountry") Land<em style="color:red">*</em>
            input.pure-input-2-3(v-model.trim="form.addressCountry", type="text", required)
          .pure-control-group
            label(for="birthDate") Geburtsdatum
            input.pure-input-2-3(v-model.trim="form.birthDate", type="date", placeholder="tt.mm.jjjj")
          .pure-control-group
            label(for="description") Bemerkung
            textarea.pure-input-2-3(v-model.trim="form.description", rows="3")
          .pure-control-group
            label(for="newsletter") Newsletter<em style="color:red">*</em>
            label.pure-radio(for="newsletter")
              input(v-model="form.newsletter", type="radio", name="newsletterRadio", value="true", required)
              | Ja
            label.pure-radio(for="newsletter")
              input(v-model="form.newsletter", type="radio", name="newsletterRadio", value="false", required)
              | Nein
          .pure-controls
            label.pure-checkbox(for="acceptPolicy")
              input#cb(v-model="form.acceptPolicy", type="checkbox", required)
              | Ich habe die Anmeldeinfo gelesen und akzeptiere die Veranstaltungsbedingungen
              //p: #[span this is the start of the para] #[a(href="http://example.com") a link] #[span and this is the rest of the paragraph]
            button.pure-button.pure-button-success(type="submit") Anmeldung abschicken

</template>

<script lang="coffee">
  # todo: add white background to page

  marked = require("marked")

  export default({
    data: ->
      form:
        givenName:        null
        familyName:       null
        gender:           null
        email:            null
        telephone:        null
        streetAddress:    null
        postalCode:       null
        addressLocality:  null
        addressCountry:   null
        birthDate:        null
        description:      null
        newsletter:       null
        acceptPolicy:     null


    methods:
      processForm: ->
        console.log "processing", @form
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
