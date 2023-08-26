<template >
    <div>
        <div class="lists">
            <ul>
                <li class="like">
                    <button @click="filterHendler('all')">Barcha kitoblar</button>
                </li>
                <li class="like">
                    <button  @click="filterHendler('popular')">Qiziqarli Kitoblar</button>
                </li>
                <li class="like">
                    <button @click="filterHendler('mostViemers')">Ko'p o`qilgan  kitolar</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

    props:{
        updateFilterHandler:{
            type:Function,
            required: true,
        }
    },
    data(){
        return{
            filter:'all'
        }
    },

    methods:{
        filterHendler(filter){
            this.filter=filter
            this.updateFilterHandler(this.filter)

        }
    },
   

}
</script>
<style scoped>
/*==== lists  ==== */
.lists ul {
    display: flex;
    /* flex-direction: row; */
    list-style: none;
    justify-content: space-between;
    padding: 10px;
}

/*==== lists  ==== */
.lists ul li button {
    display: block;
    font-size: 20px;
    width: 100%;
    
    padding: 10px 45px;
}







@media(max-width:576px){
    .lists{
        width: 100%;
        /* background: red; */
    }
    .lists ul li button{
        width: 100%;
        font-size: 12px;
        padding: 0;
    }
}


@media only screen and (min-width: 992px) and (max-width: 1440px){
 .lists{
    width: 100%;

 }
}


</style>