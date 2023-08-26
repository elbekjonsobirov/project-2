<template >
    <div class="list">
        <li class="lists">
            <span   class="list_text"> {{ movie.name }}</span>
            <!-- <input type="number" class="list_number" v-bind:value="movie.vars"> -->
            <div class="list_icon">
                <button>
                    <i class='bx bx-plus-medical plus'></i>
                </button>
                <button @click="onRemove" >
                    <i class='bx bxs-trash-alt dlet'></i>
                </button>
                <!-- <a href="#">Ko`rish</a> -->
            </div>
        </li>
    </div>
</template>

<script>
export default {
    props:{
        movie:{
            type:Object,
            required:true,
        }
    },

    methods:{
        onRemove(){
            this.$emit('onRemove', this.movie.id)
        }

    }

}
</script>
<style scoped>
/*===== List  =====*/
.list {
    padding: 10px 25px;
    color: #fff;
    border: 1px solid wheat;
    margin-top: 10px;
}

/*===== Lists  =====*/
.lists {
    display: flex;
    justify-content: space-between;
}

.list_text {
    font-size: 26px;
    cursor: pointer;

}

.list_number {
    font-size: 20px;
    border-radius: 20px;
    text-align: center;
    border: none;
    outline: none;
}

.list_icon {
    display: flex;
    gap: 10px;
    align-items: center;
}

.list_icon button {
    width: 35px;
    height: 35px;
    border: none;
    margin: 3px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 20px;
}

.list_icon .plus {
    color: goldenrod;
}

.list_icon .dlet {
    color: red;
}

.list_icon .hear {
    font-size: 30px;
    transition: 03s all;
    transform: translateX(30px);
    opacity: 0;
}

.list_icon.lake .hear {
    opacity: 1;
    transform: translateX(0);
}
a{
    color: red;
}
a:hover{
    color: white;
}



@media(max-width:576px){
    .list{
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        padding: 0;
    }
    .lists{
        display: flex;
        /* background: #000; */
        width: 100%;
        justify-content: space-between;
    }
    .list_text{
        width: 40%;
        border: 1px solid green;
        font-size: 16px;
    }
    .list_number{
        width: 16%;
        border-radius: 4px;
        font-size: 14px;
        height: 90%;
        margin-top: 3px;
        padding: 0 4px;
    }
}
</style>