<template >
    <div class="books">
        <a  id="a" href="#">Mirkarim Osim Jayxun ustida bulutlar</a>
        <div class="book">
           <div class="book-let">
            <img src="./Img/asar.jpg">
            <div class="iconss">
                <a href="https://library.ziyonet.uz/uz/book/download/103268"><i class='bx bxs-download'></i></a>
                <a href="https://library.ziyonet.uz/static/lib/reader-pdf/web/viewer.html?file=https://library.ziyonet.uz/uploads/books/1241539/5cc7e60ad34a9.pdf"><i class='bx bx-book-reader'></i></a>
            </div>
           </div>
           <div class="book-rit">
           <h2> Jayxun ustida bulutlar</h2>
           <br><br>
           <p>Iste'dodli yozuvchi Mirkarim Osim qalamiga mansub bo'lgan asar " Jayhun ustida bulutlar" asaridir. Ushbu asar tarixiy qissa janrida yozilgan va u Beruniy haqidadir. </p>
           </div>
        </div>
    </div>
    <div class="books">
        <a href="#" id="a">Xurshid Davron Bibixon qissasi.</a>
        <div class="book">
           <div class="book-let">
            <img src="./Img/asar.jpg">
            <div class="iconss">
                <a href="https://library.ziyonet.uz/uz/book/download/103267"><i class='bx bxs-download'></i></a>
                <a href="https://library.ziyonet.uz/static/lib/reader-pdf/web/viewer.html?file=https://library.ziyonet.uz/uploads/books/1241539/5cc7e582a8ee9.pdf"><i class='bx bx-book-reader'></i></a>
            </div>
           </div>
           <div class="book-rit">
           <h2>Bibixon qissasi</h2>
           <br><br>
           <p>XURSHID DAVRON. BIBIXONIM QISSASI YOXUD TUGAMAGAN DOSTON
Hamma yuksak cho' qqiga
Chiqmoqni istar,
Lekin hech kim vodiyga tushib
Boqqisi kelmaydi
0' z yuragiga. 
Dzyun TAKAMI

Men yonib turgan chiroqqa qo'limni tutib:
"Qo'limni qancha tutib tursam, shu vaqt ichida llni ko'rishga
imkon bering", - deb 0' tindim.
Ammo ular chiroqni 0' chirib: "Sen llni ko' rmaysan", dedilar
Vinsent VAN GOG</p>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .books{
    width: 100%;
    height: auto;
    margin-top: 100px;
    background: #34495e;
    border-radius: 12px;
    padding: 10px;
   } 
   .book{
    width: 100%;
    height:auto;
    border-top: 2px solid red;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
   }
   .book-let{
    width: 50%;
    display: flex;
    flex-direction: column;
    height: auto;
    /* text-align: center; */
    padding: 30px 60px;
   }
   .book-let a{
    color: white;
    width:30px;
    border-radius: 7px;
    margin: 10px;
    border: 1px solid gold;
   }

   .book-let img{
    width: 50%;
    
    height:250px;
   }
   .book-rit{
    width: 50%;
    height: auto;
    padding: 30px 60px;
    color: white;
   }

   .books a{
    color: white;
    font-size: 30px;
   }
   .iconss{
    margin-top: 20px;
    
   }

   @media(max-width:576px){
    .books{
        width: 100%;
        
        padding: 10px;
        border-radius: 8px;
        text-align: center;
        
    }
    #a{
        font-size: 18px;
        text-align: center;
        width: 100%;
        margin: 0 auto;
    }
    .book{
        display: flex;
        flex-direction: column-reverse;

    }
    .book-rit{
        width: 100%;
        font-size: 12px;
        padding: 0;
    }
    .book-let{
        width: 100%;
        font-size: 12px;
    }
    .book-let img{
        width: 100%;
    }

}
@media only screen and (min-width: 992px) and (max-width: 1200px){
.books{
    width: 100%;
    /* background: red; */
}
.book-let img{
    width: 60%;
}
}
</style>