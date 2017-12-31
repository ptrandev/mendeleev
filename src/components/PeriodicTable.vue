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
                <div class="card-element-property">
                  <h6 class="card-element-property-label">Phase</h6>
                  <span class="card-element-property-value" id="phase"></span>
                </div>
                <div class="card-element-property">
                  <h6 class="card-element-property-label">Boiling Point</h6>
                  <span class="card-element-property-value" id="boiling-point"></span>
                </div>
                <div class="card-element-property">
                  <h6 class="card-element-property-label">Melting Point</h6>
                  <span class="card-element-property-value" id="melting-point"></span>
                </div>
              </div>
              <div class="card-element-summary">
                <p id="summary"></p>
              </div>
            </div>
          </div>
          <div class="element" :class="`${element.category}`" :id="element.name.toLowerCase()" v-bind:style="`grid-column-start: ${element.xpos + 1}; grid-row-start: ${element.ypos + 1}`" v-on:mouseover="displayInfo(element.phase, element.boil, element.melt, element.summary)" v-for="element in elements">
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
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 2;`">
            <span id="period-1">1</span>
          </div>
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 3;`">
            <span id="period-2">2</span>
          </div>
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 4;`">
            <span id="period-3">3</span>
          </div>
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 5;`">
            <span id="period-4">4</span>
          </div>
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 6;`">
            <span id="period-5">5</span>
          </div>
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 7;`">
            <span id="period-6">6</span>
          </div>
          <div class="period-label" :style="`grid-column-start: 1; grid-row-start: 8;`">
            <span id="period-7">7</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 2; grid-row-start: 1;`">
            <span id="group-1">1</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 3; grid-row-start: 2; `">
            <span id="group-2">2</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 4; grid-row-start: 4; `">
            <span id="group-3">3</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 5; grid-row-start: 4; `">
            <span id="group-4">4</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 6; grid-row-start: 4; `">
            <span id="group-5">5</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 7; grid-row-start: 4; `">
            <span id="group-6">6</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 8; grid-row-start: 4; `">
            <span id="group-7">7</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 9; grid-row-start: 4; `">
            <span id="group-8">8</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 10; grid-row-start: 4; `">
            <span id="group-9">9</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 11; grid-row-start: 4; `">
            <span id="group-10">10</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 12; grid-row-start: 4; `">
            <span id="group-11">11</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 13; grid-row-start: 4; `">
            <span id="group-12">12</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 14; grid-row-start: 2; `">
            <span id="group-13">13</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 15; grid-row-start: 2; `">
            <span id="group-14">14</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 16; grid-row-start: 2; `">
            <span id="group-15">15</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 17; grid-row-start: 2; `">
            <span id="group-16">16</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 18; grid-row-start: 2; `">
            <span id="group-17">17</span>
          </div>
          <div class="group-label" :style="`grid-column-start: 19; grid-row-start: 1; `">
            <span id="group-18">18</span>
          </div>
          <div class="element lanthanide placeholder" :style="`grid-column-start: 4; grid-row-start: 7`"></div>
          <div class="element actinide placeholder" :style="`grid-column-start: 4; grid-row-start: 8`"></div>
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
    displayInfo(elementPhase, elementBoil, elementMelt, elementSummary) {
      
      // displays element card on first hover
      if ($('.card-element-wrapper').css('display') == 'block') {
      } else {
        $('.card-element-wrapper').css("display", "block");
      }

      // grabs element and element category
      let hoveredElement = event.currentTarget.id;
      let elementCategory = event.currentTarget.className.replace('element', '');

      // adds element category class, inserts name of element, inserts element category
      $('.card-element-general').attr('class', 'card-element-general').addClass(elementCategory);
      $('.card-element-name').html(hoveredElement);
      $('.card-element-category').html(elementCategory);

      // generate boiling point
      if (elementBoil === null) {
        elementBoil = 'N/A';
      } else {
        elementBoil = (elementBoil) + '&#176;K / ' + (elementBoil - 273.15).toFixed(3) + '&#176;C';
      };

      // generate melting point
      if (elementMelt === null) {
        elementMelt = 'N/A';
      } else {
        elementMelt = (elementMelt) + '&#176;K / ' + (elementMelt - 273.15).toFixed(3) + '&#176;C';
      };

      // displays element phase, boiling point, melting point, and summary
      $('#phase').html(elementPhase);
      $('#boiling-point').html(elementBoil);
      $('#melting-point').html(elementMelt);
      $('#summary').html(elementSummary);
    }
  }
}
</script>