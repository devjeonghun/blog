<template>
<div>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    fixed
  >
    <NuxtLink :to="'/'"><v-toolbar-title>devjeonghun.github.io</v-toolbar-title></NuxtLink>
    <v-spacer></v-spacer>
    <v-btn icon @click="istheme">
      <v-icon>opacity</v-icon>
    </v-btn>
  </v-toolbar>
</div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    istheme(){
      this.$emit("isTheme",this.theme)
    }
  },
  props:['theme'],
  watch: {
    theme(val){
      this.theme=val
    }
  }
}
</script>