<template>
  <div class="favorites-list-wrapper">
    <div 
      class="favorites-list-item"
      v-for="favorite in favorites"
      :key="favorite"

    >
        <div class="favorites-list-click-cathcer" @click="request(favorite)"/>
        <div class="test-subtitle">{{favorite.title}}</div>
        <div 
          class="favorite-btns"
          >
            <q-btn
                flat
                label="Изменить"
                color="primary"
                @click="openModal(bool,favorite)"
            />
            <q-btn
                flat
                label="Удалить"
                color="negative"
                @click="remove(favorite)"
            />
        </div>
    </div>
  </div>
</template>

<script>

import toggleMixin from '@/mixins/toggleMixin.js'

export default {
    mixins: [toggleMixin],
    props: {
        favorites: {
            type: Array,
            default: []
        }
    },
    methods: {
        request(favorite) {
            this.$emit('searchChosen', favorite)
        },
        remove(favorite) {
            this.$emit('remove', favorite)
        }
    }
}
</script>

<style lang="scss" scoped>
    .favorites-list-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        .favorites-list-item {
            width: 100%;
            background: #fff;
            padding: 15px 20px;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            outline: 1px solid rgba(143, 143, 143, 0.24);
            cursor: pointer;
            margin-bottom: 1px;
            overflow: hidden;
            &:hover {
                outline: 1px solid $primary;
                .favorite-btns {
                    opacity: 1;
                }
            }
            .favorites-list-click-cathcer {
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 100;
                left: 0;
            }
            .test-subtitle {
                font-weight: 600;
            }
            .favorite-btns {
                z-index: 101;
                opacity: 0;
                position: absolute;
                right: 20px;
            }
        }
    }
</style>