<template>
  <div class="PeriodicTable">
    <div class="header">
      <h1>Periodic Table</h1>
    </div>

    <div class="periodic-table">
      <div class="elements-wrapper">
        <div class="elements-container">
          <div class="element" :class="`${element.category}`" :id="element.name.toLowerCase()" v-bind:style="`grid-column-start: ${element.xpos}; grid-row-start: ${element.ypos}`" v-for="element in elements">
            <div class="element-info">
              <div class="atomic-info">
                <span class="atomic-number">{{element.number}}</span>
                <span class="atomic-mass">{{element.atomic_mass | currency('', 3)}}</span>
              </div>
              <h2 class="element-symbol" :class="element.phase.toLowerCase()">{{element.symbol}}</h2>
              <span class="element-name">{{element.name}}</span>
              <span class="electron-configuration"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeriodicTable',
  data() {
    return {
      elements: []
    }
  },
  created: function(){
    this.$http.get('https://donutdeflector.me/api/periodic-table/periodic-table.json')
      .then(function(response){
        this.elements = response.data;
      });
  }
}
</script>