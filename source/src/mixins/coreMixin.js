
import axios from 'axios'
import { useQuasar } from 'quasar'


export default {
    data() {
        return {
            apiUrl:'https://www.googleapis.com/youtube/v3',
            apiKey1: 'AIzaSyBWlj8NYVMXRmu8K-VVVrsxmwbfBf1Yrak',
            apiKey2: 'AIzaSyCz3FXHsEIcBmW4rl4nf1BNO6Z3rUm_E_c',
            q$: useQuasar(),
        }
    },

    methods: {
    
        async youtubeSearch(options, apiKey){
            try {
                const result = await axios.get(this.apiUrl + '/search', {
                        params: {
                            key: apiKey,
                            part: "snippet",
                            type: "video",
                            order: options.chosenSortOpt.value,
                            q: options.request,
                            maxResults: options.maxResult
                        }
                    } 
                )
                this.$store.state.searchResults = await []
                await this.getVideoStatics(result.data.items, apiKey);
            } catch(e){
                try {
                   await this.youtubeSearch(query, options, this.apiKey2)
                } catch(e){
                    this.$store.state.searchResults = this.getFromStorage('items', this.$store.state.searchResults)
                    this.q$.notify({
                        message: `Ошибка при загрузке видео ${e}`,
                        color: 'red'
                    })
                }
                
            }
        },

        async getVideoStatics(array, apiKey){
          await  array.forEach(item =>{
                axios.get(this.apiUrl + '/videos', {
                    params: {
                        part: 'statistics',
                        id: item.id.videoId,
                        key: apiKey,
                    }
                }).then((resp) => {
                    resp.data.items.forEach(stat => {
                        item.statistics = stat.statistics
                        this.$store.state.searchResults.push(item)
                    })
                })
            })
            
        },

        setToStorage(key, value){
            localStorage.setItem(key, JSON.stringify(value))
        },

        getFromStorage(key, item){
            if(localStorage.getItem(key)){
                return JSON.parse(localStorage.getItem(key))
            }
            return item
        },

        removeFromStorage(key){
            localStorage.removeItem(key)
        },
    }
}
