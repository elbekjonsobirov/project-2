<template>
    <div class="contanier">
        <div class="navbar">
            <div class="logo">
                <h2 class="log">Library</h2>
                <h2 class="log1">Uz</h2>
            </div>
            <div class="nav">
                <RouterLink class="list" v-bind:to="{ name: 'home' }">Home</RouterLink>
                
                <!-- <RouterLink class="list" v-bind:to="{ name: 'about' }">Biz haqimizda</RouterLink> -->
                <RouterLink class="list" v-bind:to="{ name: 'blog' }">Kitoblar</RouterLink>

                
             
                <RouterLink class="list" v-bind:to="{ name: 'contact' }">Biz haqimizda</RouterLink>
                <!-- <RouterLink class="list" v-bind:to="{ name: 'product' }">Qo`shimcha</RouterLink> -->
            </div>
            <div class="icons">
                <!-- <i class='bx bxs-color'></i> -->
                <a href="https://t.me/+M45Qgfufcx03YmEy"><i class='bx bxl-telegram' id="tg"></i></a>
            <!-- <div class="input">
                <input type="search"  class="input1" placeholder="Search">
        
            </div> -->
            <!-- <i class='bx bx-heart' id="toogle"></i> -->
                <button id="sign">
                    <RouterLink class="list" v-bind:to="{ name: 'about' }">Kirish</RouterLink>
                </button>
                <div class="submenu"  @click="menuopen">
                <i class='bx bx-menu-alt-right' ></i>
            </div>

            </div>
         <div class="nav-res" v-if="menuclick">
                <div class="m-list">
                <RouterLink class="list1" @click="menuopen" v-bind:to="{ name: 'home' }">Home</RouterLink>
                <!-- <RouterLink class="list" @click="menuopen" v-bind:to="{ name: 'product' }">Mahsulotlar</RouterLink> -->
                <!-- <RouterLink class="list" @click="menuopen" v-bind:to="{ name: 'about' }">Biz haqimizda</RouterLink> -->
                <RouterLink class="list1" @click="menuopen"  v-bind:to="{ name: 'blog' }">Kitoblar</RouterLink>
                <RouterLink class="list1" @click="menuopen" v-bind:to="{ name: 'contact' }">Biz haqimizda</RouterLink>
                </div>
            </div>
        
            
            
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuclick: false
        }
    },
    methods:{
      menuopen(){
        this.menuclick = !this.menuclick
      }
    },
    

}
</script>
<style scoped>
.nav-res{
    display: none;
    position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100vh;
  background: #222;
  display: flex;
  align-items: center;
  flex-direction:column!important;
  font-size: 30px;

}
#sign{
    width: 100%;
    height: 40px;
    border-radius: 12px;
    margin-left: 30px;
}
.red{
    color:red;
}
.m-list{
  display: flex;
  flex-direction:column!important;
  justify-content: center;
  align-items: center;
  font-size: 30px !important;
  margin-top: 20px;
  

}
.list1{
    margin-top: 20px;
    font-size: 30px;
}
.submenu{
    display: none;
    font-size: 30px;
    
    color: black;
}
.contanier{
    width:100%;
    height: auto;
    position: fixed;
    z-index: 100;
    /* left: 0; */
    top: 0;
    background:#e3e3e3;
  
    margin: 0 auto;
    box-shadow: -3px 16px 9px 0px rgba(34, 60, 80, 0.2);
   

}
.navbar{
    width:1440px;
    height: 75px;
   
    /* border: 1px solid red; */
   
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.log, .log1{
    font-size: 20px;
    font-weight: 700;  
}
.log{
    color: #359740;
}
.log1{
color: #ffcf55;
margin-left: 10px;
}
.logo{
    display: flex;
}
.nav{
  width: 35%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
}
.icons i{
 widows: 24px;
 cursor: pointer;
 height: 24px;
 font-size: 24px;
 
 color: #359740;
 margin-left: 21px;
}
.icons{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input{
    width: 285px;
}
.input input{

  width:100%;
  height: 48px;
  border-radius: 71px;
  margin: 0 15px;
}
.input1{
    padding: 0 40px;
    color: black;
}


@media (max-width: 1450px){
.contanier{
    width:100%;
}
.navbar{
    width: 90%;
    /* background:gold; */
}
.nav{
    width: 42%;
}
.input{
    width: 200px;
}
}

@media (max-width: 992px){
    .contanier{
    width: 100%;
}
.navbar{
    width: 90%;
    display: flex;
    align-items: center;

    /* background:blue; */
}
.input{
    display: none;
}
.nav{
    width: 55%;
    margin: 0 10px;
    
}
.list{
    font-size: 14px;
}
}

@media (max-width: 768px){
    .contanier{
    width: 100%;
}
.navbar{
    width: 90%;
    /* background:green; */
}
.nav{
    display: none;

}
.submenu{
    display: block;
}
#tg{
    display: none;
}
}
	
@media (max-width: 576px){
    .contanier{
    width: 100%;
}
.navbar{
    width: 90%;
    /* background:red; */
}
.icons{
    display: flex;
    justify-content: start;
}
.icons i{
    width:18px;
    margin: 0 5px;
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.logo h2{
    font-size: 18px;
}
.m-list{
    font-size: 40px; 
}
}
    
</style>