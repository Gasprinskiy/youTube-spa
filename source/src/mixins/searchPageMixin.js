import searchBar from '@/components/searchBar.vue'


export default {
  components: {searchBar},
  methods: {
      searchRoute(opt){
        this.$q.loading.show({
          delay: 200
        })
        this.youtubeSearch(opt, this.apiKey2)
          .then(()=>{
            this.$router.push(`/search/${opt.request}`)
            this.$q.loading.hide()
          })
      },
      searchRouteByChosen(opt){
        this.searchRoute(opt)
      }
  }
}  