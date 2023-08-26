<template >
    <div class="field">

        <!--6 ubdetTerm ga hodisa qo'shiladi va   7 :value=" term"  -->
        <input type="text"
        :value=" term"
        @input="changeHendr" />

    </div>
</template>
<script>
export default {

    // 5  ubdetTerm
    props:{
        
        ubdetTerm:{
            type:Function,
            required:true,
        }
    },
 //  
    data() {
        return {
            term:'' 
        }
    },

    // 
    methods:{
        changeHendr(e){
            this.term=e.target.value,
            this.ubdetTerm(this.term)
        }
    }

}
</script>
<style scoped>

.field {
    margin: 0 auto;
}


.field input {
    width: 98%;
    height: 50px;
    border-radius: 10px;
    border: none;
    text-indent: 10px;
    font-size: 30px;
    margin-left: 10px;
}


@media(max-width:576px){
    .field{
        width: 100%;
        
    }
}

@media only screen and (min-width: 992px) and (max-width: 1440px){
 .field{
    width: 100%;
 }
}

</style>