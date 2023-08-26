<template >
    <div class="info">
        <h1>Yangi kitoblar qo`shish</h1>

        <div class="info_form">
            <form v-on:submit.prevent>
                <input type="text" 
                v-bind:value="name" 
                v-on:input="name=$event.target.value" 
                placeholder="Yangi kitoblar" />

                <input type="number" 
                v-bind:value="vars" 
                v-on:input="vars=$event.target.value" 
                placeholder="Tartib raqami" />
                <input type="file" />
                
            </form>
            <UIButton  v-on:click="addMovie" > Qo'shish</UIButton>
        </div>
    </div>
</template>
<script>
import UIButton from '../Page2/UIButton.vue'
export default {
    components:{
        UIButton,
    },
    
    data() {
        return {
            name: '',
            vars: ''
        }
    },

    methods:{
        addMovie(){
            if(!this.name ||!this.vars) return
            const newMovie={
                name:this.name,
                vars:this.vars,
                id:Date.now(),
            }
            // console.log(newMovie);
            this.$emit("cardMovie",newMovie )
            this.name="",
            this.vars=""
            
        }

    }


}
</script>
<style scoped>
.info {
    background: #34495e;
    margin-top: 10px;
    padding: 15px;
    height:auto;
}

.info h1 {
    color: #3ba776;
    font-size: 30px;
}
form{
    display: flex;
    justify-content: space-between;

}
.info_form {
    /* display: flex; */
    /* justify-content: space-between; */
    gap: 10px;
}

.info_form form input {
    width: 45%;
    height: 35px;
    margin-top: 30px;
    text-indent: 10px;
}

/* .btn {
    padding: 0 40px;
    background: #3ba776;
    color: #fff;
    border: none;
    cursor: pointer;
} */
@media(max-width:576px){
    .info{
        width: 100%;
    }
    .info h1{
        font-size: 24px;
    }
    form 
    {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;

    }
}
</style>