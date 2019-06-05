<template>
    <v-container
            fluid
            grid-list-lg
    >
        <v-layout row wrap>
            <v-flex xs12 sm8 md4
                    v-for="item in items"
                    v-bind:data="item"
                    v-bind:key="item.id">
                <v-card>
                    <v-img
                            class="white--text"
                            height="200px"
                            v-bind:src="item.thumbnail"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{item.title}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <div>
                            <span class="grey--text">{{item.date}}</span><br>
                            <span>{{item.body}}</span><br>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <NuxtLink :to="'/'+item.id">
                            <v-btn flat color="orange"
                                   :disabled="dialog"
                                   :loading="dialog"
                                   @click.native="dialog = true"
                            >read</v-btn>
                        </NuxtLink>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <div>
            <v-layout row justify-center>
                <v-dialog v-model="postView" persistent scrollable max-width="1000px">
                    <NuxtChild @isCreated="isCreated" @isClose="isClose" :key="$route.params.id"/>
                </v-dialog>
            </v-layout>
        </div>
        <div class="text-xs-center">
            <v-dialog
                    v-model="dialog"
                    hide-overlay
                    persistent
                    width="300"
            >
                <v-card light>
                    <v-card-text class="text-xs-center red--text">
                        Loading
                        <v-progress-linear
                                indeterminate
                                color="red"
                                class="mb-0"
                        ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>

<script>
  import {fireDb} from '~/plugins/firebase.js'

  export default {
    data: () => ({
      txt: '',
      items: [],
      dialog: false,
      postView:false
    }),
    mounted() {
    },
    props: {
      source: String
    },
    created() {
      this.read()
    },

    methods: {
      async read() {
        const s = await fireDb.collection("post").get()
        this.items = []
        s.forEach(d => {
          const r = d.data()
          const item = Object.assign(r)
          item.id = d.id
          item.title = r.title
          item.body = r.body
          item.date = r.date.toDate().toLocaleString()
          this.items.push(item)
        })
      },
      isCreated(val){
        this.postView = true;
        this.dialog =val
      },
      isClose(val){
        this.postView=false;
      }
    },
    watch: {
      dialog(val) {
        if (!val) return
        setTimeout(() => (this.dialog = false), 10000)
      }
    }
  }
</script>
