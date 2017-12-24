<template>
  <div class="PeriodicTable">
    <div class="periodic-table">
      <div class="elements-wrapper">
        <div class="elements-container">
          <div class="card-element-wrapper">
            <div class="card-element-container">
              <div class="card-element-general">
                <h1 class="card-element-name"></h1>
                <h5 class="card-element-category"></h5>
              </div>
              <div class="card-element-properties">
                <h5 class="card-element-label">Boiling Point</h5>
                <span class="card-element-boiling-point"></span>
              </div>
            </div>
          </div>
          <div class="element" :class="`${element.category}`" :id="element.name.toLowerCase()" v-bind:style="`grid-column-start: ${element.xpos}; grid-row-start: ${element.ypos}`" v-on:mouseover="displayInfo(element.boil)" v-for="element in elements">
            <div class="element-container">
              <div class="atomic-info">
                <span class="atomic-number">{{element.number}}</span>
                <span class="atomic-mass">{{element.atomic_mass | currency('', 3)}}</span>
              </div>
              <div class="element-info">
                <h2 class="element-symbol" :class="element.phase.toLowerCase()">{{element.symbol}}</h2>
                <span class="element-name">{{element.name}}</span>
              </div>
              <span class="electron-configuration">{{element.shells}}</span>
            </div>
          </div>
          <div class="element lanthanide placeholder" :style="`grid-column-start: 3; grid-row-start: 6`"></div>
          <div class="element actinide placeholder" :style="`grid-column-start: 3; grid-row-start: 7`"></div>
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
  },
  methods: {
    displayInfo(elementBoil) {
      let hoveredElement  = event.currentTarget.id;
      let elementCategory = event.currentTarget.className.replace('element', '');

      $('.card-element-general').attr('class', 'card-element-general');
      $('.card-element-general').addClass(elementCategory);
      $('.card-element-name').html(hoveredElement);
      $('.card-element-category').html(elementCategory);

      if (elementBoil === null) {
        elementBoil = 'n/a';
      } else {
        elementBoil = (elementBoil - 273.15).toFixed(3);
      }

      $('.card-element-boiling-point').html(elementBoil);
    }
  }
}
</script>