<template>
  <v-app dark id="inspire">

    <!-- Header -->
    <Header>
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

  }),
  props: {
    source: String
  },
  created(){

  },

  methods: {
  },
  components: {
    Header
  }
}
</script>