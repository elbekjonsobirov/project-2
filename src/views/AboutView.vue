<template >
  <div class="contanier">
    <div class="login">
     <div class="login-card">
     <h1>LOGIN</h1>
     <br>
    <form>
      <label>Email</label>
     <br>
     <input type="email">
     <br><br>
     <label>Password</label>
     <br>
     <input type="password">
    </form>
     <br>
      <button>        
<RouterLink class="list" v-bind:to="{ name: 'product' }">Davom eting</RouterLink>
      </button>
      <div class="foot">
        <h3>Sizning hisobingiz yoqmi unda</h3>
        <RouterLink class="list" v-bind:to="{ name: 'click' }">Bu yerda bosing📌</RouterLink>
      </div>

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
  label{
    font-size: 24px;
  }
  .login
  {
    width: 90%;
    /* text-align: center; */
    height: auto;
    background: #34495e;
    margin: 100px auto;
    padding: 20px 0;
  }
  form input{
    width: 100%;
    height: 30px;
    border-radius: 8px;
  }
  .foot{
    margin-top:20px ;
  }
  .login-card{
    width: 35%;
    height: 500px;
    margin: 0 auto;
    padding: 30px 40px;
    border-radius: 14px;
    background:white;
    color: black;
  }
 button{
  margin-top: 30px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
 }


 @media(max-width:576px){

  .contanier{
    width: 100%;
  }
  .login{
    width: 90%;
    border-radius: 12px;
    height: auto;
  }

  .login-card{

    width: 80%;
    height: auto;
  }
  h1{
    font-size: 28px;
  }
  label{
    font-size: 20px;
  }
}


</style>