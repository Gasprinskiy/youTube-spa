<template>
  <div class="home-page-wrapper">
    <search-bar
      v-model:searchQuery="$store.state.searchOptions.request"
      @search="searchRoute($store.state.searchOptions)"
    />
  </div>
</template>

<script>

import searchPageMixin from '@/mixins/searchPageMixin.js'

export default {
  mixins: [searchPageMixin]
}
</script>

<style lang="scss" scoped>
  .home-page-wrapper {
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
  }
</style>