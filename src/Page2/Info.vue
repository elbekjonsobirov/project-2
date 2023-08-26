<template >
    <div class="info">
        <h1> BARCHA KITOBLAR SONI:{{ addInfo }}</h1>
        
        
    </div>
</template>
<script>
import UIButton from '../Page2/UIButton.vue';
export default {
    components:{
        UIButton
    },
    props: {
        addInfo: {
            type: Number,
            required: true,
        }
    }

}
</script>


<style scoped>
/* Info   */
.info {
    border: 1px solid wheat;
    box-sizing: border-box;
    padding: 15px 25px;
    color: #fff;
    /* background-color: #3ba776; */
    background: #34495e;
}

/* ul_blok */
.ul_blok {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* ==== btns ===== */
.btns{
    padding: 10px 25px;
    background-color: #FF0303;
    color: #fff;
    border-radius: 5px;
}

/* blok */
.blok{
    padding: 10px 25px;
    border-radius: 5px;
    background-color: #F99417;
    color: #fff;
}

.info h2 {
    color: #3ba776;
}

@media(max-width:576px){
    .info{
        width: 100%;
    }
    .info h1{
        font-size: 24px;
    }
}
</style>