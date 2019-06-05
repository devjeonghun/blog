<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click="closePost">
                <v-icon>close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            {{post.title}}
        </v-toolbar>
        <v-list three-line subheader>
            <v-subheader><v-spacer></v-spacer>{{post.date}}</v-subheader>
            <v-list-tile avatar>
                <v-list-tile-content>
                    <v-list-tile-sub-title>
                        {{post.body}}
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>

</template>

<script>
  import {fireDb} from '~/plugins/firebase.js'

  export default {
    validate({params}) {
      return true
    },
    data: () => ({
      post: '',
    }),
    mounted() {
    },
    props: [],
    created() {
      const s = fireDb.collection("post").doc(this.$route.params.id).get().then(
        (item) => {
          const r = item.data()
          this.post = r
          this.post.date = r.date.toDate().toLocaleString()
        }
      )
      this.$emit('isCreated', false)
    },
    methods: {
      closePost() {
        this.$emit('isClose', true)
      }
    },
    watch: {}
  }
</script>
