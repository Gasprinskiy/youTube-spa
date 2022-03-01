<template>
  <nav-bar
    v-model:show="$store.state.exitModal"
  />
  <div class="wrapper">
      <router-view/>
  </div>
  
</template>

<script>

import navBar from '@/components/navBar.vue'

export default {
  components: {navBar},

  beforeCreate(){
    this.$q.loading.show()
  },

  beforeMount(){
    this.$store.state.favorites = this.$store.getters.favorites
    // localStorage.setItem('items', JSON.stringify([{"kind":"youtube#searchResult","etag":"BQHws0jRCNICdeFBAqdMEZMsDXQ","id":{"kind":"youtube#video","videoId":"teB1nW2GGbc"},"snippet":{"publishedAt":"2020-05-16T18:00:24Z","channelId":"UCTmk03XjXB7BOg7T_FUWl0w","title":"Johnny Silverhand - Cyberpunk Music Mix","description":"Johnny Silverhand - Cyberpunk Music Mix Art animation: https://steamcommunity.com/sharedfiles/filedetails/?id=2043632040 ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/teB1nW2GGbc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/teB1nW2GGbc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/teB1nW2GGbc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"GG Music","liveBroadcastContent":"none","publishTime":"2020-05-16T18:00:24Z"},"statistics":{"viewCount":"2276315","likeCount":"50585","favoriteCount":"0","commentCount":"1362"}},{"kind":"youtube#searchResult","etag":"hz8DCUgPRh34lmC5iZR-0Zfy5v4","id":{"kind":"youtube#video","videoId":"LJFt_o1HVVc"},"snippet":{"publishedAt":"2020-12-09T15:00:13Z","channelId":"UCj4lFy4F5PqXD7d41mCKVYw","title":"CYBERPUNK 2077 Keanu Reeves All Scenes (Johnny Silverhand Cutscenes)","description":"CYBERPUNK 2077 Keanu Reeves All Scenes (Johnny Silverhand Cutscenes) New Trailers 2020! Subscribe To Gameclips To ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/LJFt_o1HVVc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/LJFt_o1HVVc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/LJFt_o1HVVc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"GameClips","liveBroadcastContent":"none","publishTime":"2020-12-09T15:00:13Z"},"statistics":{"viewCount":"457983","likeCount":"5681","favoriteCount":"0","commentCount":"835"}},{"kind":"youtube#searchResult","etag":"TXDqkqtGXUTeH5r55kFlabclkYw","id":{"kind":"youtube#video","videoId":"b4rQBNDsWYM"},"snippet":{"publishedAt":"2020-12-28T00:06:17Z","channelId":"UC9bORzxOWiewqMXxkmhAwAg","title":"Cyberpunk 2077 - The Story of Johnny Silverhand","description":"Johnny Silverhand is the most well-renowned rocker boy of the 21st century. But there is a lot more to johnny than just music.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/b4rQBNDsWYM/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/b4rQBNDsWYM/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/b4rQBNDsWYM/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Gingy","liveBroadcastContent":"none","publishTime":"2020-12-28T00:06:17Z"},"statistics":{"viewCount":"117160","likeCount":"3177","favoriteCount":"0","commentCount":"284"}},{"kind":"youtube#searchResult","etag":"K1jchvSH6tdKhMxqZlRn5C5s6GQ","id":{"kind":"youtube#video","videoId":"BhkocY1gJ8c"},"snippet":{"publishedAt":"2020-12-10T09:02:12Z","channelId":"UCD1QymTi9ei-LPz61a2dPQA","title":"Cyberpunk 2077 Johnny Silverhand Badassery","description":"Johnny's sexy Malorian Arms 3516 ▻Patreon: https://www.patreon.com/oyff ▻Twitter: https://twitter.com/Oyffie ▻Discord: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/BhkocY1gJ8c/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/BhkocY1gJ8c/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/BhkocY1gJ8c/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Oyff","liveBroadcastContent":"none","publishTime":"2020-12-10T09:02:12Z"},"statistics":{"viewCount":"815399","likeCount":"27377","favoriteCount":"0","commentCount":"1384"}},{"kind":"youtube#searchResult","etag":"LS3uVFglPcy5gGH6zwhIp9F-4p4","id":{"kind":"youtube#video","videoId":"rPppjjvjQlk"},"snippet":{"publishedAt":"2020-11-19T17:03:26Z","channelId":"UC4zyoIAzmdsgpDZQfO1-lSA","title":"Cyberpunk 2077 — Official Trailer — Johnny Silverhand","description":"It's Johnny. Johnny Silverhand. Cyberpunk 2077, an open-world, action-adventure story from CD PROJEKT RED, is coming to ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/rPppjjvjQlk/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/rPppjjvjQlk/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/rPppjjvjQlk/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Cyberpunk 2077","liveBroadcastContent":"none","publishTime":"2020-11-19T17:03:26Z"},"statistics":{"viewCount":"2911925","likeCount":"122513","favoriteCount":"0","commentCount":"7000"}},{"kind":"youtube#searchResult","etag":"hHpFtCWF0tnIb1ixO1NLnpuLTOE","id":{"kind":"youtube#video","videoId":"xuxWlWkxLDQ"},"snippet":{"publishedAt":"2020-12-15T05:24:54Z","channelId":"UCjN4QPkP737M6U72usAjGoA","title":"Johnny Silverhand Theme(Cello/Violin version) | Cyberpunk 2077","description":"Johnny Silverhand's Official Theme (Cello Version) | The Rebel Path - Cyberpunk 2077 Official Soundtrack Music - MAIN THEME ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/xuxWlWkxLDQ/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/xuxWlWkxLDQ/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/xuxWlWkxLDQ/hqdefault.jpg","width":480,"height":360}},"channelTitle":"HotChaddi","liveBroadcastContent":"none","publishTime":"2020-12-15T05:24:54Z"},"statistics":{"viewCount":"2232138","likeCount":"46332","favoriteCount":"0","commentCount":"1782"}},{"kind":"youtube#searchResult","etag":"D2injIDJiUual5w61xzKpcvcQQs","id":{"kind":"youtube#video","videoId":"ZDdsWa2h-Kc"},"snippet":{"publishedAt":"2021-03-16T22:01:29Z","channelId":"UC0DJoOvRcjL2AkyuSEtOHfQ","title":"Cyberpunk 2077: Best of Johnny Silverhand","description":"Johnny Silverhand funny moments.","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/ZDdsWa2h-Kc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/ZDdsWa2h-Kc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/ZDdsWa2h-Kc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"TheStreetKid","liveBroadcastContent":"none","publishTime":"2021-03-16T22:01:29Z"},"statistics":{"viewCount":"108209","likeCount":"2064","favoriteCount":"0","commentCount":"99"}},{"kind":"youtube#searchResult","etag":"b51n0ldcUu105SLTqGDeWNvyJzI","id":{"kind":"youtube#video","videoId":"mXFyqLee_OU"},"snippet":{"publishedAt":"2020-12-11T04:40:53Z","channelId":"UCWSfEWhyuPPOAsFsVYIeYgQ","title":"CYBERPUNK 2077 - Meeting Johnny Silverhand / V Meets Johnny","description":"Cyberpunk 2077 Meeting Johnny Silverhand. V meets Johnny Silverhand for the first time in Cyberpunk 2077. After being shot in ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/mXFyqLee_OU/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/mXFyqLee_OU/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/mXFyqLee_OU/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Generic Gaming","liveBroadcastContent":"none","publishTime":"2020-12-11T04:40:53Z"},"statistics":{"viewCount":"98093","likeCount":"1493","favoriteCount":"0","commentCount":"214"}},{"kind":"youtube#searchResult","etag":"3og0ZNePm8LOF0wRncSogkZnm0o","id":{"kind":"youtube#video","videoId":"wXHWeHxLDcs"},"snippet":{"publishedAt":"2020-11-19T17:08:09Z","channelId":"UC4zyoIAzmdsgpDZQfO1-lSA","title":"Cyberpunk 2077 — Behind the Scenes: Keanu Reeves","description":"How do you bring an iconic character of Johnny Silverhand to life? Go behind the scenes with Keanu Reeves to find out!","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/wXHWeHxLDcs/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/wXHWeHxLDcs/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/wXHWeHxLDcs/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Cyberpunk 2077","liveBroadcastContent":"none","publishTime":"2020-11-19T17:08:09Z"},"statistics":{"viewCount":"4544256","likeCount":"242051","favoriteCount":"0","commentCount":"9651"}},{"kind":"youtube#searchResult","etag":"KUO4SR3aqsYo13w4oalS94Rnyws","id":{"kind":"youtube#video","videoId":"M_UzJFllpok"},"snippet":{"publishedAt":"2020-11-19T23:31:14Z","channelId":"UCjBp_7RuDBUYbd1LegWEJ8g","title":"Cyberpunk 2077 — Official Trailer — Johnny Silverhand","description":"Johnny Silverhand is back and he's ready to pick up right where he left off. With a bang! Get to know one of Night City's most ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/M_UzJFllpok/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/M_UzJFllpok/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/M_UzJFllpok/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Xbox","liveBroadcastContent":"none","publishTime":"2020-11-19T23:31:14Z"},"statistics":{"viewCount":"55694","likeCount":"3854","favoriteCount":"0","commentCount":"143"}},{"kind":"youtube#searchResult","etag":"A5nxQz3K3Q3BVmNrX8fbFrIwXvQ","id":{"kind":"youtube#video","videoId":"5jBgxitz0Vs"},"snippet":{"publishedAt":"2020-12-14T19:48:57Z","channelId":"UCzF5oxzeidHOZzy4KK5nxCQ","title":"How To Get All Johnny Silverhand Items In Cyberpunk 2077 (Cyberpunk 2077 Johnny Silverhand Gun)","description":"Get exclusive discount on Displates here: https://displate.com/jorraptor1?art=5f7590d12338c This video includes: Cyberpunk ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/5jBgxitz0Vs/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/5jBgxitz0Vs/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/5jBgxitz0Vs/hqdefault.jpg","width":480,"height":360}},"channelTitle":"JorRaptor","liveBroadcastContent":"none","publishTime":"2020-12-14T19:48:57Z"},"statistics":{"viewCount":"516790","likeCount":"13135","favoriteCount":"0","commentCount":"532"}},{"kind":"youtube#searchResult","etag":"yiRsHIpTzy7Au5ggGiM9iRkhQy4","id":{"kind":"youtube#video","videoId":"SDnEEya78SA"},"snippet":{"publishedAt":"2020-12-20T16:55:04Z","channelId":"UCigSgBzRaVs1xGuCEEwzuZA","title":"Cyberpunk 2077 (OST) - JOHNNY SILVERHAND Official Theme (Full - Cello Version) | The Rebel Path","description":"Johnny Silverhand's Official Theme (Cello Version) | The Rebel Path - Cyberpunk 2077 Official Soundtrack Music - MAIN THEME ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/SDnEEya78SA/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/SDnEEya78SA/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/SDnEEya78SA/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Versus Music Official","liveBroadcastContent":"none","publishTime":"2020-12-20T16:55:04Z"},"statistics":{"viewCount":"1971187","likeCount":"38358","favoriteCount":"0","commentCount":"1718"}}]))
  },

  mounted(){
    this.$q.loading.hide()
  },

  created(){
    if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        this.$router.push(redirect)
    }
  }
}
</script>

<style lang="scss">
body,
html {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #FAFAFA;
  overflow: hidden;
}

.wrapper {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0px 150px;
  flex: 1 1 auto;
}


@media (max-width: 768px) {
  .wrapper {
    padding: 0px 40px;
  }
}

@media (max-width: 500px) {
  .wrapper {
    padding: 0px 20px;
  }
}

</style>
