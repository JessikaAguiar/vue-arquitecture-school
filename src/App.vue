<template>
  <div id="app">
    <HeaderComponents />
    <main>
      <router-view></router-view>
    </main>
    <FooterComponents />
  </div>
</template>

<script>
import HeaderComponents from './components/HeaderComponents'
import FooterComponents from './components/FooterComponents'
export default {
  name: 'App',
  components: {HeaderComponents, FooterComponents}
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  color: #6C6C6C;
}
</style>
