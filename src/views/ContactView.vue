<template >
    <div class="login">
        <div class="add">
            <h3>Kutubxona - ma'rifatli dunyoga ochilgan eshik.</h3>
            <p>Kutubxona (arab. kutub - "kitoblar", fors. xona - "uy") axborot yigʻiladigan joydir. Bunda axborot kitob, gazeta, jurnal, video- va audiotasma, optik disk va hk shaklda boʻlishi mumkin. Kutubxonalar tashkilot (jamoat) yoki jismoniy shaxs (shaxsiy kutubxona) tomonidan tashkil etilishi mumkin.

Kutubxona — bosma va ayrim qoʻlyozma asarlardan ommaviy foydalanishni taʼminlovchi madaniy-maʼrifiy va ilmiy muassasa; muntazam ravishda bosma asarlar toʻplash, saqlash, targʻib qilish va kitobxonlarga yetkazish, shuningdek, axborot-bibliografiya ishlari bilan shugʻullanadi, ommaning madaniy saviyasini oshirishda faollik koʻrsatadi. Kitobxonlarga xizmat koʻrsatish K.ning asosiy faoliyati boʻlib, qolgan barcha faoliyatlar (kitob fondini butlash va uni tashkil etish, fond mazmunini yoritish, uni kitobxonlarga yetkazish qabilar) asosiy faoliyat uchun xizmat kiladi. Kitobxonlarga xizmat koʻrsatishning asosiy maqsadi ularni axborot va adabiyotga boʻlgan talablarini imkon boricha toʻliq qondirish va adabiyot tanlashlariga yordam berishdan iborat. Har bir K. oʻz turiga koʻra kitobxonlarni tabaqalarga boʻlib, alohida kitobxonlar guruhlariga ajratgan holda xizmat koʻrsatishni tashkil qiladi. Adabiyotlar targʻibotining barcha shakl va usullari kitobxonlar talabini imkon qadar toʻliq va tezkorlik bilan qondirishga qaratiladi.</p>
          <h3>Siz ham saytimizga o`z  hissangizni qo`shishingiz mumkin.Ya`ni saytda bo`lmagan eng yaxshi kitoblarni qo`shishingiz va mualliflik kitoblaringizni saytga joylashishingiz mumkin bo`ladi.
            </h3>
            <RouterLink class="list" v-bind:to="{ name: 'click' }">Davom Eting</RouterLink>

        </div>
        <div class="img">
            
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
    .login{
        width: 90%;
        margin: 100px auto;
        height:600px;
        border: 1px solid red;
        background: #34495e;
        color: white;
        padding: 30px 10px;
    }
    .add{
        width: 90%;
        height:auto;
        /* border: 1px solid black; */
        margin: 0 auto;
        text-align: center;
        font-size: 24px;
    }
    .add a{
        font-size: 20px;
        color: gold;
    }
    @media(max-width:576px){
        .login{
            width: 100%;
            height: auto;
        }
        h3{
            font-size: 18px;
        }
        .add a{
            font-size: 16px
        }
}

</style>