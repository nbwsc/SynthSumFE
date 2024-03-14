<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './components/HelloWorld.vue'
</script>

<template>
  <header class="navbar">
    <div class="logo">
      SynthSum 深思
    </div>
    <div class="menu">
      <nav>
        <RouterLink class="navitem text-2xl" to="/">首页</RouterLink>
        <RouterLink class="navitem text-2xl" to="/about">关于我们</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView class="panel" />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #0B4891;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.logo {
  height: 30px;
  font-size: 60px;
  margin-left: 40px;
  color: #ffff;
  font-weight: bold;
}

.logoimg {
  width: 120px;
}

.menu {
  margin: 0 60px;
  color: #333;
  text-decoration: none;
}

.bold {
  font-weight: bold;
}

.menu:hover {
  color: #1890ff;
}

.navitem {
  margin: 0 10px;
  color: #ffff;

  text-decoration: none;
}
</style>
