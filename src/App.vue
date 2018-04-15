<template>
  <div id="app">
    <router-view name="nav"/>
    <router-view/>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>
