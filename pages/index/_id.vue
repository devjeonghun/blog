<template>
    <v-card>
        <v-card-title>
            <span class="headline">{{post.title}} - {{post.date}}</span>
            <v-spacer></v-spacer>
            <NuxtLink :to="'/'">
                <v-btn icon @click.native="closePost">
                    <v-icon>close</v-icon>
                </v-btn>
            </NuxtLink>
        </v-card-title>
        <v-img max-height="100px" contain :src="post.thumbnail"></v-img>
        <v-card-text v-html="post.body"></v-card-text>
    </v-card>
</template>

<script>
  import {fireDb} from '~/plugins/firebase.js'

  export default {
    head(){
      return {
        title: this.post.title,
        meta: [
          {hid:'og:type',           property: 'og:type', content: 'article'},
          {hid:'og:url',            property: 'og:url', content: 'https://immense-thicket-34880.herokuapp.com'+this.$route.fullPath},
          {hid:'og:title',          property: 'og:title', content: '시발'},
          {hid:'og:image',          property: 'og:image', content: 'https://avatars0.githubusercontent.com/u/15138190?s=460&v=4'},
          {hid:'og:description',    property: 'og:description', content: '개쉬발'}
        ],
        link:[
          {rel:'canonical',href:'https://devjeonghun.cf'+this.$route.fullPath}
        ]
      }
    },
    validate({params}) {
      return true
    },
    data: () => ({
      post: '',
      description:''
    }),
    mounted() {
      const s = fireDb.collection("post").doc(this.$route.params.id).get().then(
        (item) => {
          const r = item.data()
          this.post = r
          this.description = this.post.body.replace(/(<([^>]+)>)/ig,"").substring(0,30)
          this.post.date = r.date.toDate().toLocaleString()
        }
      )
      this.$emit('isCreated', false)
    },
    props: [],
    created() {
    },
    methods: {
      closePost() {
        this.$emit('isClose', true)
      }
    },
    watch: {}
  }
</script>
