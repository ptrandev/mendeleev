<template>
  <div class="PeriodicTable">
    <div class="periodic-table">
      <div class="elements-container">
        <div class="header">
          <h1>Periodic Table of the Elements</h1>
        </div>
        <ElementCard/>
        <div class="element"
        :class="`${element.category.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' ')}`"
        :id="element.name.toLowerCase()"
        v-bind:style="`grid-column-start: ${element.xpos + 1};
        grid-row-start: ${element.ypos + 1}`"
        v-on:mouseover="displayInfo(element.name, element.category,
        element.phase, element.boil, element.melt, element.number,
        element.atomic_mass.toFixed(3), element.shells.join(' '), element.ypos,
        element.xpos, element.summary)"
        v-for="element in elements">
          <div class="element-container">
            <div class="atomic-info">
              <span class="atomic-number">{{element.number}}</span>
              <span class="atomic-mass">{{element.atomic_mass | currency('', 3)}}</span>
            </div>
            <div class="element-info">
              <h3 class="element-symbol" :class="element.phase.toLowerCase()">{{element.symbol}}</h3>
              <span class="element-name">{{element.name}}</span>
            </div>
            <span class="electron-configuration">{{element.shells.join(' ')}}</span>
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
</template>

<script>
import elements from '../assets/json/elements.json'
import ElementCard from './shared/ElementCard'

export default {
  name: 'PeriodicTable',
  data: function() {
    return {
      elements
    }
  },
  components: {
    ElementCard
  },
  methods: {
    displayInfo(elementName, elementCategory, elementPhase, elementBoil,
    elementMelt, elementNumber, elementMass, elementElectronConfiguration,
    elementPeriod, elementGroup, elementSummary) {
      
      // displays element card on first hover
      if ($('.card-element-wrapper').css('display') != 'block') {
        $('.card-element-wrapper').css("display", "block");
      }

      // adds element category class, inserts name of element, inserts element category
      $('.card-element-general').attr('class', 'card-element-general').addClass(elementCategory.replace(/\s+/g, '-'));
      $('.card-element-name').html(elementName);
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

      // displays element phase, boiling point, melting point, atomic number,
      // atomic mass and summary
      $('#phase').html(elementPhase);
      $('#boiling-point').html(elementBoil);
      $('#melting-point').html(elementMelt);
      $('#number-mass').html(elementNumber + " / " + elementMass);
      $('#electron-configuration').html(elementElectronConfiguration);
      $('#period-group').html(elementPeriod + " / " + elementGroup);
      $('#summary').html(elementSummary);
    }
  }
}
</script>