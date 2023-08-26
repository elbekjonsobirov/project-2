<template >
    <div class="contanier">
    <div class="regis">
      <div class="regis-cartoon">
        <h1>Ro`yxatdan o`ting</h1>
        <form>
            
            <br>
            <input type="text" placeholder="Ismingizni kiriting">
            <br>
            <br>
            <input type="text" placeholder="Familyangizni kiriting">
            <br>
            <br>
            <input type="email" placeholder="Emailingizni kiriting">
            <br><br>
            <input type="password" placeholder="Parol kiriting">
            <br><br>
            <input type="submit" value="Jo`natmoq" id="sub">
            
        </form>
        

      </div>
    </div>
    </div>
   <Footer />
</template>
<script>
import Footer from '../Footer/Footer.vue';

export default {
    components: { Footer }
}
</script>
<style scoped>
    .contanier{
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    .regis{
        width: 90%;
        height: 500px;
        /* border: 1px solid red; */
        border-radius: 16px;
        margin: 100px auto;
        background: #34495e;
        padding: 40px 0;
    }
    .regis-cartoon{
        text-align: center;
        width: 45%;
        margin: 0 auto;
        background: white;
        height:auto;
        padding: 40px;
        border-radius: 12px;
    }
    form input{
        width: 60%;
        padding: 0 10px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid #34495e;
    }
    #sub{
    background:green;
    border: none;
    color: white; 
    }
    @media(max-width:576px){
    .contanier{
        width: 100%;
    }
    .regis{
        width: 100%;
        /* background: red; */
    }
    .regis-cartoon{
        width: 80%;
        
    }
    h1{
        font-size: 22px;
    }
    form input{
        width: 70%;
    }
}

</style>