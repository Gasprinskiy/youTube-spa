<template>
  <div class="search-result-page">
    <search-bar
      v-model:searchQuery="this.$store.state.searchOptions.request"
      v-model:show="$store.state.showModal"
      @search="searchRoute($store.state.searchOptions)"
    />
    <resul-list
      v-model:searchQuery="$route.params.path"
      v-model:searchResults="$store.state.searchResults"
    />
  </div>
  <favorites-modal
    v-model:show="$store.state.showModal"
    v-model:options="$store.state.searchOptions"
    @save="saveFavorites($store.state.searchOptions)"
  />
</template>

<script>

import searchPageMixin from '@/mixins/searchPageMixin.js'
import resulList from '@/components/resultList.vue'
import favoritesModal from '@/components/favoritesModal.vue'

export default {
    components: {resulList, favoritesModal},
    mixins: [searchPageMixin],

    methods: {
      saveFavorites(options){
            const toAddOptions = {
                request: options.request,
                title: options.title,
                maxResult: options.maxResult,
                chosenSortOpt: options.chosenSortOpt,
                sortOpt: [ options.chosenSortOpt]
            }
            const has = this.$store.state.favorites.findIndex(item => item.title === options.title)
            if(has >= 0){
                this.q$.notify({
                    message: 'Запрос с таким названием уже существует',
                    color: 'orange'
                })
            } else {
                this.$store.state.favorites.push(toAddOptions)
                this.$store.state.showModal = false
                this.setToStorage('favorites', this.$store.state.favorites)
                this.q$.notify({
                    message: 'Запрос сохранен',
                    color: 'green'
                })
            }
      },
    },

    beforeMount() {
      this.$store.state.searchOptions.request = this.$route.params.path
      if(!this.$store.searchResults){
        this.youtubeSearch(this.$store.state.searchOptions, this.apiKey1)
      }
    },

}
</script>

<style lang="scss" scoped>
  .search-result-page {
    padding: 30px 0px;
    .search-bar-wrapper {
      margin-bottom: 30px;
    }
  }
</style>