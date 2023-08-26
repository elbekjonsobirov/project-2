<template >
    <div class="movie">
        <MovieList 
        v-for="movie in movies" 
        v-bind:movie="movie" 
        :key="movie.id"
        @onLike="$emit('onLike', movie.id)"
        
        @onRemove="$emit('onRemove', movie.id)"
    
         />
    </div>
</template>
<script>
import MovieList from '../Page2/MovieList.vue'

export default {
    components: { MovieList },
    //  APP dan 
    props: {
        movies:{
            type:Array,
            required:true,
           
        }
    }
}
</script>

<style scoped>
.movie {
    /* background: #2B2B4B; */
    background: #34495e;
    padding: 10px 25px;
    box-sizing: border-box;
    margin-top: 10px;
}
</style>