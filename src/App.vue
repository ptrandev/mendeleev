<template>
  <div id="app">
    <SortingMenu/>
    <PeriodicTable/>
  </div>
</template>

<script>
import PeriodicTable from './components/PeriodicTable'
import SortingMenu from './components/SortingMenu'

export default {
  name: 'app',
  components: {
    PeriodicTable,
    SortingMenu
  }
}
</script>