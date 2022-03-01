<template>
  <div class="result-list-wrapper result-list">
      <div class="result-list-top">
          <div class="text-subtitle">Видео по запросу "<b>{{searchQuery}}</b>" </div>
          <div class="result-list-change-btns">
              <q-btn 
                v-for="btn in listDisplayBts"
                flat
                :key="btn"
                :icon="btn.icon"
                :class="{chose: btn.isChosen}"
                @click="changeListDisplay(btn.value)"
              />
          </div>
      </div>
      <div class="result-list-body" :class="{grid: isGrid, column: isColumn}">
          <div 
            class="result-block result"
            v-for="result in searchResults"
            :key="result"
            >
              <div class="result-preview">
                  <q-img :src="result.snippet.thumbnails.medium.url"/>
              </div>
              <div class="result-text">
                  <div class="text-subtitle result-title">
                      {{result.snippet.title}}
                  </div>
                  <div class="text-subtitle result-chanel-title">
                      {{result.snippet.channelTitle}}
                  </div>
                  <div v-if="result.snippet.description" class="text-subtitle result-description">
                      {{result.snippet.description}}
                  </div>
                  <div class="text-subtitle result-description">
                      Просмотры {{numberWithSpaces(result.statistics.viewCount)}}
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            listDisplayBts: [
                {value: 'column',  icon: 'list'},
                {value: 'grid',  icon: 'grid_view'},
            ],
            isGrid: true,
            isColumn: false
        }
    },

    props: {
        searchResults: {
            type: Array,
            default: []
        },
        searchQuery: {
            type: String,
            default: ''
        }
    },

    methods: {
        changeListDisplay(value){
            this.setToStorage('chosenListType', value)
            if(value === 'grid'){
                this.isGrid = true;
                this.isColumn = false;
            } else if(value === 'column'){
                this.isGrid = false;
                this.isColumn = true;
            }
        },

        rememberListType(){
           const chosenType = this.getFromStorage('chosenListType', chosenType)
           if(chosenType){
               this.changeListDisplay(chosenType)
           }
        },

        numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },

        detectMobile(){
            if(this.$q.platform.is.mobile) {
                this.isGrid = false;
                this.isColumn = true;
            }
        }

    },

    beforeMount(){
        this.rememberListType()
        this.detectMobile()
    }
}
</script>

<style lang="scss" scoped>
    .result-list-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        .result-list-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }
        .result-block {
            cursor: pointer;
            display: flex;
            width: 100%;
        }
        .result-list-body {
            width: 100%;
            &.grid {
                display: grid;
                grid-template-columns: repeat(4, 250px);
                justify-content: space-between;
                gap: 40px;
                .result-block {
                    flex-direction: column;
                    min-width: 250px;
                    max-width: 250px; 
                    .result-preview {
                        width: 100%;
                        height: 140px;
                        overflow: hidden; 
                        img {
                            max-width: 100%;
                            height: inherit;
                        }
                    }
                }
            }

            &.column {
                width: 100%;
                display: flex;
                flex-direction: column;
                .result-block {
                    width: 100%; 
                    display: flex;
                    margin-bottom: 40px;
                    .result-preview {
                        min-width: 250px;
                        max-width: 250px;
                        height: 140px;
                        overflow: hidden; 
                        img {
                            max-width: 100%;
                            object-fit: cover;
                            height: inherit;
                        }
                    }
                    .result-text{
                        width: 80%;
                        padding: 20px;
                        .result-chanel-title {
                            margin-bottom: 15px;
                        }
                    }
                }
            }
            .result-text {
                width: 100%;
                max-height: 200px;
                white-space: nowrap;
                .result-title { 
                    font-weight: 600;
                }
                .result-chanel-title,
                .result-description {
                    opacity: 0.6;
                }
                .text-subtitle {
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }            
        }
    }

    @media (max-width: 768px) {
        .result-list-wrapper {
            .result-list-body {
            width: 100%;
            &.column {
                width: 100%;
                display: flex;
                flex-direction: column;
                .result-block {
                    width: 100%; 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 40px;
                    .result-preview {
                        min-width: 100%;
                        max-width: 100%;
                        height: unset;
                        overflow: hidden; 
                        img {
                            max-width: 100%;
                            object-fit: cover;
                            height: inherit;
                        }
                    }
                    .result-text{
                        width: 100%;
                        padding: 10px;
                        text-align: left;
                        .result-chanel-title {
                            margin-bottom: 15px;
                        }
                    }
                }
            }            
        }
        }
            .result-list-change-btns {
                display: none;
            }
        }    

</style>