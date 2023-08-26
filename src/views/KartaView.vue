<template>
    <div class="contanier">
        <div class="karta">
            <h1>Checkout</h1>
            <div class="shaxsiy">
                <h2>Shaxsiy ma'lumotlar</h2>
               <div class="form">
                <div class="forma"> 
               
                    <label>Ism</label>
                    <br>
                    <input type="text" placeholder="Ismingiz" required>
               
                </div>
                <div class="forma">
                    <label>Telefon raqamingiz</label>
                    <br>
                    <input type="text" placeholder="Sizning raqamingiz">
                </div>
               </div>
            </div>

            <div class="shaxsiy">
                <h2>Manzillar</h2>
               <div class="form">
                <div class="forma"> <label>Viloyat</label>
                    <br>
                    <input type="text" placeholder="Viloyat nomi"></div>
                <div class="forma">
                    <label>Tuman</label>
                    <br>
                    <input type="text" placeholder="Tuman nomi">
                </div>
               </div>
            </div>
            <div class="forma1">
                    <label>Manzil</label>
                    <br>
                    <input type="text" placeholder="Manzil nomi">
                </div>
            <div class="btn">
                <button>
                    <RouterLink class="list" v-bind:to="{ name: 'click' }">Davom Eting</RouterLink>
                </button>
            </div>
            <Footer />
        </div>
   
    </div>
</template>
<script>
import Footer from '../Footer/Footer.vue';

export default {
    components: { Footer }
}
</script>
<style scoped>
    .contanier{
        width: 1440px;
        height: auto;
        margin: 0 auto;

    }
    .karta{
        width: 100%;
        height: 900px;
        /* border: 1px solid red; */
        margin: 120px auto;
    }
    .shaxsiy h2{
        font-size: 24px;
        font-weight: 700;
        margin-top: 20px;
    }
    .shaxsiy{
        width: 70%;
        /* border: 1px solid red; */
    }
    .forma{
        width: 100%;

    }
    .forma input{
        width: 80%;
        height: 50px;
        margin-top: 10px;
    }
    .form{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        padding: 0 10px;
    }
    .forma1{
        margin-top: 15px;
        padding: 0 10px;
    }
    .forma1 input{
        width: 28%;
        height: 50px;
        margin-top: 10px;
    }
    .btn{
        width: 50%;
        padding: 0 10px;


    }
    .btn button{
     width: 30%;
    }


    @media only screen and (min-width: 992px) and (max-width: 1440px){
    .contanier{
        width: 100%;
    }
    .karta{
        width: 90%;
        
    }
    .shaxsiy{
        width: 100%;
       
    }
}


@media only screen and (min-width:769px) and (max-width:991px){
    .contanier{
        width: 100%;
    }
    .karta{
        width: 90%;
        
    }
    .shaxsiy{
        width: 100%;
        
    }
}

@media only screen and (min-width:576px) and (max-width: 768px){
    .contanier{
        width: 100%;
    }
    .karta{
        width: 90%;
        
    }
    .shaxsiy{
        width: 100%;
        /* border: 1px solid red; */
    }
    .btn button{
     width: 50%;
    }
}

@media(max-width:576px){
    .contanier{
        width: 100%;
    }
    .karta{
        width: 90%;
        
    }
    .shaxsiy{
        width: 100%;
        /* border: 1px solid red; */
    }
    .btn button{
     width: 100%;
    }
}
</style>