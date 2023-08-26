<template >
   <div class="contanier">
    <div class="footer">
        <div class="nav">
                <RouterLink class="list" v-bind:to="{ name: 'home' }">Home</RouterLink>
                <!-- <RouterLink class="list" v-bind:to="{ name: 'product' }">Kitoblar</RouterLink> -->
                <!-- <RouterLink class="list" v-bind:to="{ name: 'about' }">Biz haqimizda</RouterLink> -->
                <!-- <img src="../Img/logo10.svg"> -->
                <RouterLink class="list" v-bind:to="{ name: 'blog' }">Kitoblar</RouterLink>
                <RouterLink class="list" v-bind:to="{ name: 'contact' }">Biz haqimizda</RouterLink>
        </div>
        <div class="footer-foot">
            <p>@Copyright by Khan_Develop 2023</p>
            <p>Barcha huquqlar himoyalangan</p>
        </div>
    </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
 .contanier{
    width:100%;
    
 }
    .footer{
        width:100%;
        height: 172px;
        margin-top: 150px;
   
        margin: 0 auto;
        padding: 0 50px;
    }
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3e3e3;
        height: 100px;
    }
    .footer-foot{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* height: 100px; */
    }
    .footer-foot i{
        background: #359740;
        border-radius: 100%;
        color: white;
        font-size: 30px;
    }

    @media only screen and (min-width: 992px) and (max-width: 1440px){
   .contanier{
    width: 100%;
   }
   .footer{
    width: 100%;
    
   }
}
@media only screen and (min-width:769px) and (max-width:991px){
    .footer{
    width: 100%;
    
   }
}
@media only screen and (min-width:576px) and (max-width: 768px){
    .footer{
        width: 100%;
    }
    .nav{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .list{
        margin-top: 20px;
    }
    .footer-foot i
    {
       font-size: 18px;
    }
}
@media(max-width:576px){
    .footer{
        width: 100%;
    }
    .nav{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .list{
        margin-top: 20px;
    }
    .footer-foot i
    {
       font-size: 18px;
    }
}
</style>