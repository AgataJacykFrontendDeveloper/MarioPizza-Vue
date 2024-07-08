<template>  
    <div id="app">
    <Header />
    <DarkMode/>
    <div class="box">
   <router-view></router-view> 
    </div>
    <cart/>
    <Footer /></div> 
    </template>

<script>
import Header from '../src/components/layout/Header.vue'
import Footer from '../src/components/layout/Footer.vue'
import cart from './components/cart.vue'
import DarkMode from './components/DarkModeToggle.vue'

export default {
    components: {
    Header,
    Footer,
    cart,
    DarkMode
},
};
</script>

<style>
[theme="custom-dark"] {
  background-image: url('../../public/images/darkrock.png');
  color: #fff;
}
[theme="custom-light"]{
    background-image: url('../../public/images/background.png');
}

</style>



