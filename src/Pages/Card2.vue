<template>
    <div class="contanier">
      <div class="swiper">
          <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="slider">
        <div class="text">
            <img id="img" src="../Img/Kutubxona.jpg">
            <div class="texts">
                <h1>Salom siz Library Uz ga xush kelibsiz</h1>
            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="slider">
            <div class="text">
            <img id="img" src="../Img/Kutubxona1.jpg">
            <div class="texts">
                <h1>Bu yerda siz qiziqarli kitoblar</h1>
            </div>
        </div>
      
        </swiper-slide>
        <swiper-slide class="slider">
            <div class="text">
            <img id="img" src="../Img/Kutubxona.jpg">
            <div class="texts">
                <h1>Xoxlasangiz o`qishingiz yoki yuklab olishingiz mumkin boladi</h1>
            </div>
        </div>
        </swiper-slide>
        <swiper-slide class="slider">
            <div class="text">
            <img id="img" src="../Img/Kutubxona3.jpg">
            <div class="texts">
                <h1>Eng asosiysi sayt xaritasi hamma uchun foydasi tegadigan sodda qilib ishlangan</h1>
            </div>
        </div>
        </swiper-slide>
      </swiper>
      </div>
    </div>
     
    </template>
    <script>
      // Import Swiper Vue.js components
      import { Swiper, SwiperSlide } from 'swiper/vue';
    
      // Import Swiper styles
    
      // import required modules
      import { Autoplay, Pagination, Navigation } from 'swiper';
    
      export default {
        components: {
          Swiper,
          SwiperSlide,
        },
        setup() {
          return {
            modules: [Autoplay, Pagination, Navigation],
          };
        },
      };
    </script>
    <style scoped>
    .mySwiper{
      height:auto;
      width: 100% !important;
      /* border: 1px solid red; */
      width: 100%;
      background:#353535;
      color: white;
      border-radius: 12px;
      height: 100px;
      margin-top: 80px;
      box-sizing: border-box;
    }
    .slider{
      width: 100%;

      height:300px;
      /* border: 1px solid red; */
    }
    .text{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .card {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      background: #EAF1EB;
      margin-top: 100px;
    
    }
    .slider img{
      width:200px;
    }
    #img{
        width: 50%;
    }
    .texts{
        width: 40%;
    }
    
    
  
    
    
    @media only screen and (min-width: 992px) and (max-width: 1440px) {
      .contanier {
        width: 100%;
      }
    
      .swiper {
        width: 100%;
    
        height: auto;
      }
     .slider{
      width:100% ;
  
     }
     .slider img{
      width: 100%;
     }
  
    
    }
    
    @media only screen and (min-width:769px) and (max-width:991px) {
      .contanier {
        width: 100%;
      }
    
      .swiper {
        width: 100%;
    
        height: auto;
      }
     .slider{
      width:100% ;
  
     }
     .slider img{
      width: 100%;
     }
    }
    
    @media only screen and (min-width:576px) and (max-width: 768px) {
      .contanier {
        width: 100%;
      }
    
      .swiper {
        width: 100%;
    
        height: auto;
      }
     .slider{
      width:100% ;
      height: 200px;
  
     }
     .slider img{
      width: 100%;
      height: 100%;
     }
    }
    
    @media(max-width:576px) {
      .contanier {
        width: 100%;
      }
    
      .swiper {
        width: 100%;
    
        height: auto;
      }
     .slider{
      width:100% ;
      height: 200px;
  
     }
     .slider img{
      width: 100%;
      height: 100%;
     
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .texts h1{
        font-size: 12px;
        width: 100%;
    }
    .texts{
        width: 80%;
        margin:0  auto;
        text-align: center;
    }
    #img{
        width: 80%;
    }
    .slider{
        height: auto;
    }
    }
    </style>