<template >
    <div class="contanier">
        <div class="cild">
        <div class="cild-top">
            <i class='bx bx-book-open bx-tada' ></i>
         <h1>Bu yerda sizni qiziqtiradigan adabiyotlar bor</h1>
        </div>
        <div class="cards">
            <div class="card">
             <div class="card-img">
                <img src="../Img/1.jpg">
             </div>
             <div class="card-text">
                   <a href="https://uz.wikipedia.org/wiki/O%CA%BBtkan_kunlar">O`tkan kunlar</a>
                   <p>Abdulla Qodiriy</p>
             </div>

            </div>
            <div class="card">
             <div class="card-img">
                <img src="../Img/2.jpg">
             </div>
             <div class="card-text">
                   <a href="https://kitobxon.com/oz/kitob/dayus">Dayus</a>
                   <p>Sherxon Qorayev</p>
             </div>

            </div>
            <div class="card">
             <div class="card-img">
                <img src="../Img/3.jpg">
             </div>
             <div class="card-text">
                   <a href="https://library.samdu.uz/files/f229f7ed2e8f42677ceb9ddb16a80b18_Dunyoning%20ishlari.pdf">Dunyoning ishlari</a>
                   <p>O`tkir Hoshimov</p>
             </div>

            </div>
            <div class="card">
             <div class="card-img">
                <img src="../Img/4.jpg">
             </div>
             <div class="card-text">
                   <a href="https://kitobxon.com/oz/kitob/urush-tugasa-ayting-qaytib-kelaman">Urush tugasa ayting ...</a>
                   <p>Qo`chqor Norqobil</p>
             </div>

            </div>
        </div>

        <!-- 2-chi qator -->
        <div class="cards">
            <div class="card">
             <div class="card-img">
                <img src="../Img/5.jpg">
             </div>
             <div class="card-text">
                   <a href="http://www.ferlibrary.uz/f/sariq_devni_minib_roman.pdf">Sariq devni minib</a>
                   <p>Xudoyberdi To`xtabayev</p>
             </div>

            </div>
            <div class="card">
             <div class="card-img">
                <img src="../Img/6.jpg">
             </div>
             <div class="card-text">
                   <a href="https://cyberleninka.ru/article/n/o-tkir-hoshimovning-daftar-hoshiyasidagi-bitiklar-asari-badiiy-falsafiy-xususiyatlari">Daftar hoshiyasidagi bitiklar</a>
                   <p>O`tkir Hoshimov</p>
             </div>

            </div>
            <div class="card">
             <div class="card-img">
                <img src="../Img/7.jpg">
             </div>
             <div class="card-text">
                   <a href="http://ferlibrary.uz/f/chingiz_aytmatov-oqkema_qissa.pdf">Oq kema</a>
                   <p>Chingiz Aytmatov</p>
             </div>

            </div>
            <div class="card">
             <div class="card-img">
                <img src="../Img/8.jpg">
             </div>
             <div class="card-text">
                   <a href="https://vaqf.uz/uz/lists/view/501">Namoz eng ulug` ibodat</a>
                   <p>O`zbekiston musulmonlar idorasi</p>
             </div>

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
  .contanier{
    width: 100%;
    height: auto;
    margin: 0 auto;
  }  
  .cild{
    width: 100%;
    height: 1200px;
    /* border: 1px solid red; */
    background: #34495e;
    color: white;
    margin: 40px auto;
    border-radius: 12px;
  }

.cild-top{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.cild-top i{
    font-size: 36px;
}
.cards{
    width: 100%;
    height: auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    
    padding: 10px 30px;
}
.card{
    background: white;
    width: 250px;
    border-radius: 10px;
   
    height: auto;

}
.card-img{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
.card-img img{
    width: 100%;
    height: 300px;
    border-radius: 10px;
    
    
}
.card:hover{
    transform:translateY(-20px);
}
.card-text{
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media(max-width:576px){
    .contanier{
        width: 100%;
    }
    .cild{
        width: 100%;
        /* background: red; */
        height: auto;
        padding-top: 20px;
    }
    .cild-top i, h1{
        font-size: 24px;
        
    }
    .cild-top{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    h1{
        text-align: center;
    }
    .cards{
        display:flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>