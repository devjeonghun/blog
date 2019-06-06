<template>
  <v-app :light="theme" :dark="!theme" id="inspire">

    <!-- Header -->
    <Header @isTheme="isTheme" :theme="this.theme">
    </Header>
    <!-- //Header -->

    <!-- SPA App Page -->
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <!-- //SPA App Page -->

    <!-- Footer -->
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }} nuxt.js + firebase</span>
    </v-footer>
    <!-- //Footer -->

  </v-app>
</template>

<script>
import Header from '@/components/default/Header.vue'

export default {

  data: () => ({
    theme: true
  }),
  props: {
    source: String
  },
  created(){

  },

  methods: {
    isTheme(val){
      this.theme=!val;
    }
  },
  components: {
    Header
  }
}
</script>