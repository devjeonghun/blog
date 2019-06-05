<template>
  <v-app :dark="theme" id="inspire">

    <!-- Left Navigation -->
    <LeftNavi @isDrawer="isDrawer" :drawer="drawer"></LeftNavi>
    <!-- //Left Navigation -->

    <!-- Header -->
    <Header 
      @isRightDrawer="isRightDrawer" :rightDrawer="rightDrawer"
      @isDrawer="isDrawer" :drawer="drawer" @isTheme="isTheme"
      :login="login"
      :appName="appName">
    </Header>
    <!-- //Header -->

    <!-- SPA App Page -->
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <!-- //SPA App Page -->
    
    <!-- Right Navigation -->
    <RightNavi @isRightDrawer="isRightDrawer" :rightDrawer="rightDrawer"></RightNavi>
    <!-- //Right Navigation -->

    <!-- Dialog Navigation Btn -->
    <v-btn
      fab
      bottom
      right
      fixed
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <!-- //Dialog Navigation Btn -->

    <!-- Modal Navigation -->
    <ModalNavi @isDialog="isDialog" :dialog="dialog"></ModalNavi>
    <!-- //Modal Navigatio -->

    <!-- Footer -->
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <!-- //Footer -->

  </v-app>
</template>

<script>
import Header from '@/components/default/Header.vue'
import LeftNavi from '@/components/default/LeftNavi.vue'
import ModalNavi from '@/components/default/ModalNavi.vue'
import RightNavi from '@/components/default/RightNavi.vue'
export default {
  data: () => ({
    drawer: false,
    rightDrawer: false,
    dialog: false,
    appName: '관리자',
    theme: false,
    login: false
  }),
  props: {
    source: String
  },
  created(){
    this.isLogin();
  },

  methods: {
    isLogin(data){
      this.$axios.$post('/apis/status').then((obj)=>{
        this.login = obj.result;
      });
    },
    isTheme(data){
      this.theme = data;
    },
    isDrawer (data) {
      console.log(data);
      this.drawer = data;
    },
    isRightDrawer (data) {
      console.log(data);
      this.rightDrawer = data;
    },
    isDialog (data) {
      console.log(data);
      this.dialog = data;
    }
  },
  components: {
    Header,
    LeftNavi,
    ModalNavi,
    RightNavi
  }
}
</script>