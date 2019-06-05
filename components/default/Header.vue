<template>
<div>
  <v-toolbar
    :clipped-right="$vuetify.breakpoint.lgAndUp"
    app
    fixed
  >
    <!-- header -->
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
    <v-toolbar-side-icon @click.stop="fnDrawer"></v-toolbar-side-icon>
    <span class="hidden-sm-and-down" v-text="appName"></span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <span>
      {{ $store.state.authUser }}
    </span>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon @click.prevent="fnLogout" v-if="login">
      <v-icon>account_circle</v-icon>
    </v-btn>
    <v-btn icon @click.prevent="fnLogIn" v-else>
      <v-icon>logout</v-icon>
    </v-btn>
    <v-btn icon @click.stop="fnRightDrawer">
      <v-icon light>compare_arrows</v-icon>
    </v-btn>
    <v-btn icon @click.stop="goDark">
      <v-icon>apps</v-icon>
    </v-btn>
    <!-- //header -->
  </v-toolbar>
</div>
</template>

<script>
export default {
  props: ['appName', 'drawer', 'rightDrawer','login'],
  data: () => ({
    drawerChild: null,
    rightDrawerChild: null
  }),
  methods: {
    goDark(){
      this.theme = this.theme === true ? false : true;
      this.$emit('isTheme',this.theme);
    },
    fnDrawer () {
      this.drawerChild = this.drawerChild === true ? false : true;
      this.$emit('isDrawer', this.drawerChild);
    },
    fnRightDrawer () {
      this.rightDrawerChild = this.rightDrawerChild === true ? false : true;
      this.$emit('isRightDrawer', this.rightDrawerChild);
    },
    fnLogout () {
      this.$store.dispatch('logout');
      this.$emit('isLogin',false);
    }
  },
  watch: {
    drawer (value) {
      this.drawerChild = value;
    },
    rightDrawer (value) {
      this.rightDrawerChild = value;
    }
  }
}
</script>