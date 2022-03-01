<template>
  <div class="favorites-page-wrapper">
    <div class="text-h4">Избранное</div>
    <favoritesList
      v-model:favorites="this.$store.state.favorites"
      v-model:show="$store.state.showModal"
      v-model:options="changebleOptions"
      @searchChosen="searchRouteByChosen"
      @remove="removeFavorite(unChangedOptions)"
    />
  </div>
  
  <favorites-modal
    v-model:show="$store.state.showModal"
    v-model:options="changebleOptions"
    :isReadOnly="false"
    @save="redactFavorites(changebleOptions, unChangedOptions)"
    @donotsave="dontSave(unChangedOptions)"
  />
</template>

<script>

import favoritesModal from '@/components/favoritesModal.vue'
import favoritesList from '@/components/favoritesList.vue'
import searchPageMixin from '@/mixins/searchPageMixin.js'

export default {
  components: {favoritesModal, favoritesList},
  mixins: [searchPageMixin],
  data() {
    return {
      changebleOptions: this.$store.state.searchOptions,
      unChangedOptions: JSON.stringify(this.$store.state.favorites.slice(0)),
    }
  },

  methods: {
      
      redactFavorites(options, unchagedOpt){
            const unchagedFavoites = JSON.parse(unchagedOpt);
            const i = unchagedFavoites.findIndex(item => item.title === options.title)
            const chosenOpt = unchagedFavoites[i]
            console.log(chosenOpt);
            console.log(options);
            if(!this.isEqual(chosenOpt, options)){
                this.$store.state.showModal = false
                this.setToStorage('favorites', this.$store.state.favorites)
                this.unChangedOptions = JSON.stringify(this.$store.state.favorites.slice(0));
                this.q$.notify({
                    message: 'Изменения сохранены',
                    color: 'green'
                })
            } else {
                this.q$.notify({
                    message: 'Вы ничего не меняли',
                    color: 'orange'
                })
            }
        },

        dontSave(unchagedOpt){
            this.$store.state.favorites = JSON.parse(unchagedOpt);
        },

        removeFavorite(options){
            const i = this.$store.state.favorites.findIndex(item => item.title === options.title)
            this.$store.state.favorites.splice(i, 1)
            this.unChangedOptions = JSON.stringify(this.$store.state.favorites)
            this.patchUser(this.$store.state.favorites)
        },

        isEqual(targ1, targ2){
            const targOne = JSON.stringify(targ1);
            const targTwo = JSON.stringify(targ2);
            if(targOne !== targTwo) {
                return false
            } else {
                return true
            }
        }
  }
}
</script>

<style lang="scss" scoped>
  .favorites-page-wrapper {
    padding: 30px 0px;
    .text-h4 {
      margin-bottom: 20px;
    }
  }
</style>