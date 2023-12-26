import { defineStore } from 'pinia';

export const useFeedStore = defineStore({
  id: 'feedStore',
  state:() =>({
      //información de los RSS
      sources:[{
        id:crypto.randomUUID(),
        name: 'Mozilla Hacks',
        url: 'https://hacks.mozilla.org/feed'
      }],

      //el feed actual
      current:{
        source:null,
        items:null
      }
  }),

  //Actions
  actions: {
    async loadSource(source){
      const response = await fetch(source.url)
      let text = await response.text();
      text = text.replace(/content:encoded/g, 'content')

      const domParser= new DOMParser();
      let doc = domParser.parseFromString(text, "text/xml")

      console.log(doc)

      const posts = [];
      doc.querySelectorAll(ítem, entry).forEach(item => {
        const post = {
          title: item.querySelector('title').textontent ?? "in tiulo",
          content: item.querySelector('content').textContent ?? "",
        }

        posts.push(post)
      })

      this.current.items = [...posts]
      this.current.source = source
    },

    async registerNewSource(url){
      
    }

  }

})