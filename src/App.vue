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