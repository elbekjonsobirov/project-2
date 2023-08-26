<template >
    <div class="blog">
      <div class="blog-text">
        <h1>Bizning blog.</h1> 
       <div class="ahref">
        <p>Bizning blogimizga o'ting</p>
      </div>
       </div>
       <div class="cards">
        <div class="card">
        <div class="card-top">
            <i class='bx bxs-hourglass-top' ></i>
            <p>12.09.2021</p>
        </div>
        <div class="card-foot">
            <h2>Siz uchun Noutbuk</h2>
            <p>Noutbuk o'zining xususiyatlariga ko'ra mashhur brenddan kam emas.Barcha ofis vazifalari uchun.</p>
            <button>READ</button>
        </div>
       </div>
        <div class="card-img">
            <img src="../Img/Untitled-1 1.png">
        </div>
       </div>
       <div class="mebels">
        <div class="mebel">
            <div class="card-top">
            <i class='bx bxs-hourglass-top' ></i>
            <p>12.09.2021</p>
        </div>
        <h2>Maishiy texnika</h2>
        <button>READ</button>
        <div class="img">
            <img src="../Img/gaz.png">
        </div>
        </div>
        <div class="mebel">
            <div class="card-top">
            <i class='bx bxs-hourglass-top' ></i>
            <p>12.09.2021</p>
        </div>
        <h2>Maishiy texnika</h2>
        <button>READ</button>
        <div class="img">
            <img src="../Img/image 4.png">
        </div>
        </div>
        <div class="mebel">
            <div class="card-top">
            <i class='bx bxs-hourglass-top' ></i>
            <p>12.09.2021</p>
        </div>
        <h2>Maishiy texnika</h2>
        <button>READ</button>
        <div class="img">
            <img src="../Img/gaz.png">
        </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .blog{
        width: 100%;
        height: auto;
     
    }
    .blog-text{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ahref{
        width: 18%;
        height: 51px;
        border: 1px solid #e3e3e3;
        border-radius: 8px;
        text-align: center;
        color: #359740;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -3.5%;

    }
    .ahref:hover{
        border: 1px solid #359740;
        transition-duration: 1s;
        color: black;
    }
    .cards{
        width: 100%;
        height: auto;
        border-radius: 12px;
        /* border: 1px solid black; */
        margin-top: 42px;
        padding: 20px;
        display: flex;
        background: #EAF1EB;
        justify-content: space-between;
        
    }
    .card-top{
        display: flex;
        align-items: center;
    }
    .card-top p{
       margin-left: 10px;
    }
    .card-foot{
        width: 60%;
    }
    .card-foot p{
        width: 100%;
        margin-top: 5px;
    }
    .blog h2{
        font-weight: 700;
        color: black;
        margin-top: 10px;
    }
    .blog button{
        width: 100px;
        height: 50px;
        margin-top: 14px;
        border-radius: 10px;
        border: none;
        background: white;
        color: #359740;
    }
 .mebels{
    width: 100%;
    height:auto;
    
    margin-top: 30px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .mebel{
    width: 30%;
    padding: 30px;
    height: 100%;
    /* border: 1px solid red; */
    background: #EFF2F8;
    border-radius: 14PX;

 }
.img{
    display: flex;
    justify-content:end;
    align-items: end;
    margin-left: 30px;
  
    width: 100%;
}
.img img{
    width:40%;
}

    @media only screen and (min-width: 992px) and (max-width: 1440px){
        .blog{
            width: 100%;
            background:red;
        }
        .img img{
        width: 45%;
    }

}
@media only screen and (min-width:769px) and (max-width:991px){
    .img img{
        width: 75%;
    }
}
@media only screen and (min-width:576px) and (max-width: 768px){
    .blog{
        width: 100%;
       
    }
    .ahref{
        width: 30%;
    }
    .cards{
        width: 100%;
     
        height: auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    .card-top, .card-foot{
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
    .card-img{
        width: 100%;
        text-align: center;
    }
    .card-img img{
        width: 80%;
    }
    .mebels{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .mebel{
        width: 80%;
        margin: 20px 0;
        
    }
    
    .img img{
        width: 35%;
    }
   
}

@media(max-width:576px){
    .blog{
        width: 100%;
        /* background: blue; */
    }
    .ahref{
        width: 40%;
    }
    .blog-text h1{
        font-size: 22px;
    }
    .cards{
        width: 100%;
        /* background: blue; */
        height: auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    .card-top, .card-foot{
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
    .card-img{
        width: 100%;
        text-align: center;
    }
    .card-img img{
        width: 80%}

    .mebels{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .mebel{
        width: 80%;
        margin: 20px 0;
    }
}
</style>