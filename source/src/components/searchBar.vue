<template>
  <form @submit.prevent="$emit('search')" class="search-bar-wrapper">
      <q-input
        class="search-input"
        v-model="searchQuery"
        label="Поиск"
        @update:model-value="updateSaerch"
        outlined
      >
        <template v-slot:append>
            <q-icon v-if="isSearchDone" @click="openModal(bool)" name="favorite_border"/>
        </template>
      </q-input>

      <q-btn
        class="search-btn" 
        label="поиск" 
        color="primary"
        type="submit"
        :disabled="isInputClear"
      />
  </form>
</template>

<script>

import toggleMixin from '@/mixins/toggleMixin.js'

export default {

  mixins: [toggleMixin],

  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  computed: {
    isInputClear(){
      return this.searchQuery.length <= 0
    },
    isSearchDone(){
      return this.$route.meta.searchDone
    }
  },
  methods: {
    updateSaerch(val){
      this.$emit('update:searchQuery', val)
    },
  },
}
</script>

<style lang="scss" scoped>
    .search-bar-wrapper {
      width: 100%;
      display: flex;
      background: #fff;
      .search-input {
        width: 85%;
        i {
          cursor: pointer;
        }
      }
      .search-btn {
        width: 15%;
      }
    }

    @media (max-width: 768px) {
      .search-bar-wrapper {
        .search-input {
          width: 100%;
          i {
            cursor: pointer;
          }
        }
        .search-btn {
          width: 0;
          display: none;
        }
      }
    }
</style>