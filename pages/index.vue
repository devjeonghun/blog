<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>

        </v-card-text>
      </v-card>
      <v-textarea v-model="txt" />
      <v-btn @click="read">read</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import {fireDb} from '~/plugins/firebase.js'
  export default {
    data: () => ({
      txt: ''
    }),
    mounted() {
    },
    props: {
      source: String
    },
    created() {

    },

    methods: {
      read() {
        fireDb.collection("post").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.txt += JSON.stringify(doc.data())
            console.log(`${doc.id} => ${doc.data()}`);

          });
        });
      }
    }
  }
</script>
