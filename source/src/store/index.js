import { createStore } from 'vuex'

export default createStore({
  state: {
    searchResults: [],
    favorites: [],
    searchOptions: {
      request: '',
      title: '',
      maxResult: 12,
      chosenSortOpt: {label: 'Без сортировки', value: 'searchSortUnspecified'},
      sortOpt: [
        {label: 'Дате', value: 'date'},
        {label: 'Рейтингу', value: 'rating'},
        {label: 'Просмтрам', value: 'viewCount'},
        {label: 'Названию', value: 'title'},
        {label: 'Количеству видео', value: 'videoCount'},
      ]
    },
    showModal: false,
    searchQuerry: '',
  },
  getters: {
    favorites(){
      if(localStorage.getItem('favorites')){
        return JSON.parse(localStorage.getItem('favorites'))
      } else {
        return []
      }
    }
  },
  
})
