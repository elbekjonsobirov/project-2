<template >
  <div class="contanier">
    <div class="home">
     <!-- <Card /> -->
     <Card2 />
     <Books1 />
     <Cildbook />
     <!-- <Logos /> -->
     <!-- <Phone /> -->
     <!-- <Blog /> -->
     <!-- <Mijozlar /> -->
     <Footer />
     
    </div>
    
  </div>
</template>
<script>



import Footer from '../Footer/Footer.vue';
import Card2 from '../Pages/Card2.vue';
import Books1 from '../Books/Books1.vue';
import Cildbook from '../Books/Cildbook.vue';

export default {
    components: { Footer, Footer, Card2, Books1, Cildbook }
}
</script>
<style scoped>
   .contanier{
  width: 1440px;
  height: auto;
  margin: 0 auto;
  }
  .home{
    width:100%;
    height:auto;
    

    margin: 32px auto;
  }
  @media only screen and (min-width: 992px) and (max-width: 1450px){
  .contanier{
    width: 100%;
  }
  .home{
    width: 90%;
  }

}
@media only screen and (min-width:769px) and (max-width:991px){
  .contanier{
    width: 100%;
  }
  .home{
    width: 90%;
  }
}
@media only screen and (min-width:576px) and (max-width: 768px){
  .contanier{
    width: 100%;
  }
  .home{
    width: 90%;
  }
}
@media(max-width:576px){
  .contanier{
    width: 100%;
  }
  .home{
    width: 90%;
  }
}
</style>