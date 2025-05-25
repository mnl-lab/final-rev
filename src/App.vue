<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view></router-view>

  </div>
</template>

<script setup>
</script>

<style scoped>
#app {
  font-family: 'Georgia', serif;
  color: #5D4037;
  /* Dark brown */
  background-color: #FDF5E6;
  /* Old lace - light cream */
  min-height: 100vh;
  padding: 20px;
}
</style>