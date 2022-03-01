<template>
<div class="nav-bar-wrapper">
    <div class="nav-bar-container nav-bar" v-if="!noNav">
        <div class="nav-bar-left">
            <div class="nav-bar-logo">
                <q-img src="@/assets/logo.svg"/>
            </div>
            <div class="nav-bar-link">
                <router-link class="nav-router-link" :class="{searchPages: isSearch}" to="/">Поиск</router-link>
            </div>
            <div class="nav-bar-link">
                <router-link class="nav-router-link" to="/favorites">Избранное</router-link>
            </div>
        </div>
        <div class="nav-bar-right"></div>
  </div>
</div>
  
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        noNav(){
            return this.$route.meta.noNav
        },
        isSearch(){
            return this.$route.meta.search
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-bar-wrapper {
        width: 100%;
        background: #fff;
    }
    .nav-bar-container {
        width: 100%;
        max-width: 1440px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        color: $primary;
        padding: 0px 150px;
        .nav-bar-left {
            display: flex;
            align-items: center;
            .nav-bar-logo {
                width: 60px;
                margin-right: 20px;
            }
            .nav-bar-link {
                min-height: 80px;
                position: relative;
                display: flex;
                align-items: center;
                margin: 0px 20px;
                .nav-router-link {
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    justify-content: center;
                    &.router-link-active::before,
                    &.searchPages::before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background: $primary;
                        bottom: 0;
                    }
                }
                .nav-router-link:visited {
                    color: inherit;
                }
            }
        }
    }

    @media (max-width: 768px) {
      .nav-bar-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
        .nav-bar-container {
            padding: 0px 20px;
        }
        .nav-bar-logo,
        .nav-bar-right {
            display: none;
        }
        .nav-bar-left {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
        
    }
    }
</style>