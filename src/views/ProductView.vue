<template>
    <div class="app">
      <Info v-bind:addInfo="movies.length" />
      <div class="search">
        <Flutter :ubdetTerm="ubdetTerm" />
        <!--  -->
        <ButtonMovie :updateFilterHandler="updateFilterHandler" />
      </div>
      <!--3 onSearchHandler 2 ta qiymat qabul qilinad   -->
  
      <!-- "onFilterHandler  ichiga -->
      <Movie v-bind:movies="onFilterHandler(onSearchHandler(movies, term), filter)" @onLike="onLikeHop"
        @onRemove="onRemoveHop" />
  
      <Forms v-on:cardMovie="cardMovie" />
      <Footer />
  
  
    </div>
  </template>
  
  <script>
  import Info from '../Page2/Info.vue'
  import ButtonMovie from '../Page2/ButtonMovie.vue'
  import Movie from '../Page2/Movie.vue'
  import Forms from '../Page2/Forms.vue'
  import Flutter from '../Page2/Flutter.vue'
import Footer from '../Footer/Footer.vue'
  
  export default {
    components: {
    Info,
    Movie,
    Flutter,
    ButtonMovie,
    Forms,
    Footer
},
    data() {
      return {
        movies: [
          {
            name: "Jayxun ustida bulutlar (M.Osim)",
            vars: "555",
            id: 1
          },
  
          {
            name: "Bibixon qissasi (X.Davron)",
            vars: "400",
            id: 2
  
          },
          {
            name: "Chinor Romani (A.Muxtor)",
            vars: "478",
            id: 3,
  
          },
          {
            name: "Martin Iden (J.London)",
            vars: "841",
            id: 4,
          },
          {
            name: "Tushda kechgan umr (O`.Hoshimov)",
            vars: "331",
            id: 5,
          },
          {
            name: "Kapitan Qizi (A.Pushkin)",
            vars: "451",
            id: 6,
          },
          {
            name: "O`tkan kunlar (A.Qodiriy)",
            vars: "451",
            id: 7,
          },
          {
            name: "Dayus (Sherxon Qorayev)",
            vars: "451",
            id: 8,
          },
          {
            name: "Dunyoning ishlari (O`.Hoshimov)",
            vars: "451",
            id: 9,
          },
          {
            name: "Urush tugasa ayting ... (Q. Norqobil)",
            vars: "451",
            id: 10,
          },
          {
            name: "Sariq devni minib (X.To`xtaboyev)",
            vars: "451",
            id: 11,
          },
          {
            name: "Daftar Hoshiyasidaggi bitiklar (O`.Hoshimov)",
            vars: "451",
            id: 12,
          },
          {
            name: "Oq kema (Ch.Aytmatov)",
            vars: "451",
            id: 13,
          },
          
  
        ],
        //1  Qidiruv uchun Deta ga yangi o'zgaruvchi ochiladi  
        term: '',
  
        // filter uchun yangi o'zgaruvchi ochiladi  
        filter: 'all'
      }
    }, 
  
    methods: {
      cardMovie(item) {
        this.movies.push(item)
      },
      onRemoveHop(id) {
        this.movies = this.movies.filter(c => c.id !== id)
      },
  
  
      //2 Funsiya  massiv ni flter qilish uchun 
      onSearchHandler(arr, term) {
        if (term.length == 0) {
          return arr
        }
        return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
      },
      
      //  filter shart beriladi
      onFilterHandler(arr, filter) {
        switch (filter) {
          case 'popular':
            return arr.filter(c => c.like)
          case 'mostViemers':
            return arr.filter(c => c.vars>400)
          default:
            return arr
        }
  
      },
  
      // 4 term ni qiymatini o'zgarish uchun   
      ubdetTerm(term) {
        this.term = term
      },
      updateFilterHandler(filter){
        this.filter=filter
      } 
  
  
    },
  }
  </script>
  
  <style scoped>
  /*  app asos  */
  .app {
    width: 80%;
    border: 1px solid black;
    margin: 100px auto;
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    height: auto;
  
  }
  
  
  /*==== search ====  */
  .search {
    background: #34495e;
    padding: 15px;
    margin-top: 10px;
    box-sizing: border-box;
  }
  
  /*   */
  @media(max-width:576px){
    .app{
      width: 100%;
      padding: 0;
      
}
  }
  </style>