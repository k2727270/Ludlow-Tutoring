<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #fef7f0 0%, #f0f9ff 100%);
  color: #2d3748;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
}

.navbar {
  align-items: center;
}
</style>
