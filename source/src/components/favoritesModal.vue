<template>
  <div class="favorites-modal-wrapper" :class="{show: show}">
      <div class="favorites-modal-container ">
        <div class="text-h6">Сохранить запрос</div>
        <div class="favorites-modal-inputs modal-inputs">
          <q-input 
            outlined
            v-if="isReadOnly" 
            v-model="options.request"
            class="modal-inputs-item"
            readonly
            label="Запрос"
          />

          <q-input 
            outlined
            v-if="!isReadOnly" 
            v-model="options.request"
            class="modal-inputs-item"
            label="Запрос"
          />

          <q-input 
            outlined 
            v-model="options.title"
            class="modal-inputs-item"
            label="*Название"
          />

          <q-select 
            outlined 
            v-model="options.chosenSortOpt" 
            :options="options.sortOpt" 
            class="modal-inputs-item"
            label="Сортировать по" 
          />

          <div class="text-subtitle">Максимальное количество</div>

          <q-slider 
            v-model="options.maxResult" 
            class="modal-inputs-item"
            :min="1" 
            :max="50"
            label
            switch-label-side
          />
        </div>
        <div class="favorites-modal-btns btns">
          <q-btn
            class="btns-item"
            outline
            color="primary"
            label="не сохранять"
            @click="closeModal"
          />
          <q-btn
            class="btns-item"
            color="primary"
            label="сохранить"
            @click="$emit('save')"
            :disabled="isTitleFilled"
          />
        </div>
      </div>
  </div>
</template>

<script>

import validateMixin from '@/mixins/validateMixin.js'
import toggleMixin from '@/mixins/toggleMixin.js'

export default {
  mixins: [validateMixin, toggleMixin],
  props: {
    options: {
      type: Object,
      default: {}
    },
    isReadOnly: {
      type: Boolean,
      default: true,
      requared: false
    }
  },

  computed: {
    isTitleFilled(){
      return this.options.title.length <= 0
    }
  }  
  
}
</script>

<style lang="scss" scoped>
  .favorites-modal-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.548);
    visibility: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    &.show {
      visibility: visible;
      opacity: 1;
    }
    .favorites-modal-container {
      width: 100%;
      max-width: 510px;
      background: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 40px 30px;
      .text-h6 {
        margin-bottom: 20px;
      }
      .favorites-modal-inputs{
        width: 100%;
        .modal-inputs-item {
          margin-bottom: 20px;
        }
      }
      .favorites-modal-btns {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .btns-item {
          width: 49%;
        }
      }
    }
  }
</style>