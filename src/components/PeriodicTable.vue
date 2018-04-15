<template>
  <div class="PeriodicTable">
    <div class="periodic-table">
      <div class="elements-container">
        <div class="header">
          <h1>Periodic Table of the Elements</h1>
        </div>
        <TutorialCard/>
        <ElementCard/>
        <div v-for="element in elements" class="element shadow-hoverable"
        :class="`${element.category.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' ')}`"
        :id="element.name.toLowerCase()"
        v-bind:style="`grid-column-start: ${element.xpos + 1}; grid-row-start: ${element.ypos + 1}`"
        v-on:mouseenter="displayInfo(element.name, element.category,
        element.phase, element.boil, element.melt, element.number,
        element.atomic_mass.toFixed(3), element.shells.join(' '), element.ypos,
        element.xpos, element.summary)"
        v-on:mouseleave="hideInfo()">
        <router-link :to="{path: '/element/' + element.number}">
          <div class="element-container">
            <div class="atomic-info">
              <span class="atomic-number">{{element.number}}</span>
              <span class="atomic-mass">{{element.atomic_mass | currency('', 3)}}</span>
            </div>
            <div class="element-symbol-container">
              <h3 class="element-symbol" :class="element.phase.toLowerCase()">{{element.symbol}}</h3>
            </div>
            <div class="element-name-container">
              <span class="element-name">{{element.name}}</span>
            </div>
            <div class="electron-configuration-container">
              <span class="electron-configuration">{{element.shells.join(' ')}}</span>
            </div>
          </div>
         </router-link>
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
        <div class="element shadow lanthanide placeholder" :style="`grid-column-start: 4; grid-row-start: 7`"></div>
        <div class="element shadow actinide placeholder" :style="`grid-column-start: 4; grid-row-start: 8`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import elements from '../assets/json/elements.json'
import TutorialCard from './shared/TutorialCard'
import ElementCard from './shared/ElementCard'

export default {
  name: 'PeriodicTable',
  data: function() {
    return {
      elements,
      atomicConfig: {
        containerId: '#atomic-model',
        numElectrons: 118,
        idNumber: 118,
        nucleusColor: '#1B2126',
        electronColor: '#90CAF9',
        orbitalColor: '#1B2126',
        animationTime: 1500
      },
      orbitalRotationConfig: {
        pattern: {
          alternating: false,
          clockwise: true,
          preset: 'random',
        }
      },
      atomGenerated: false,
      myAtom: null
      }
  },
  components: {
    TutorialCard,
    ElementCard
  },
  methods: {
    displayInfo(elementName, elementCategory, elementPhase, elementBoil,
    elementMelt, elementNumber, elementMass, elementElectronConfiguration,
    elementPeriod, elementGroup, elementSummary) {

      // displays element card on hover
      if ($('.card-element-wrapper').css('display') != 'block') {
        $('.card-element-wrapper').css("display", "block");
      }

      // adds element category class, inserts name of element, inserts element category
      $('.card-element-general').attr('class', 'card-element-general').addClass(elementCategory.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' '));
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

      // create the atom element if it hasn't been created yet
      if (this.atomGenerated == false) {
        // generate new atom, set number of electrons, apply orbital config
        this.myAtom = new Atom(this.atomicConfig);
        this.myAtom.setNumElectrons(elementNumber);
        this.myAtom.rotateOrbitals(this.orbitalRotationConfig);

        // atom now generated, prevent if statement from running agian
        this.atomGenerated = true;
      }

      // set number of electrons for atomic model, apply orbital config
      this.myAtom.setNumElectrons(elementNumber);
      this.myAtom.rotateOrbitals(this.orbitalRotationConfig);
    },
    hideInfo() {
      // hides card on mouse leave
      if ($('.card-element-wrapper').css('display') === 'block') {
        $('.card-element-wrapper').css("display", "");
      }
    }
  }
}
</script>

<style scoped>

/* Periodic Table */

.periodic-table {
  padding-top: 3.5vw;
  display: flex;
  width: 100%;
  margin: auto;
}

.header {
  width: auto;
  grid-column: 3 / 19;
  grid-row: 2 / 2;
  align-self: start;
}

.elements-wrapper {
  display: inline-block;
  width: 100%;
  margin: 0 auto;
}

.elements-container {
  display: grid;
  grid-template-columns: 1.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 1.4vw;
  grid-template-rows: 1.4vw 6.2vw 6.2vw 6.2vw 6.2vw 6.2vw 6.2vw 6.2vw 0 6.2vw 6.2vw;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.element {
  height: 100%;
  width: 100%;
  border: 1px solid var(--color-gray);
  color: var(--color-gray);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  opacity: 0.85;
  transition: all 0.3s ease;
  z-index: 0;
}

.element:hover,
.element:focus {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  opacity: 1;
  cursor: pointer;
  z-index: 2;
}

.element:last-child {
  margin-right: 0;
}

.element a,
.element a:hover,
.element a:focus {
  color: inherit;
  text-decoration: inherit;
}

.element-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.1vw;
  height: 100%;
}

.atomic-info {
  display: block;
  text-align: left;
  width: 100%;
  height: 1vw;
}

.atomic-number {
  display: inline-block;
  margin: 0px 0px 0px 2px;
  vertical-align: top;
}

.atomic-mass {
  float: right;
  margin: 0px 2px 0px 0px;
}

h1.gas,
h2.gas {
  -webkit-text-stroke: 2px var(--color-gray);
  color: transparent;
}

h1.liquid,
h2.liquid {
  -webkit-text-stroke: 2px var(--color-gray);
  color: var(--color-white);
}


.element-symbol,
.element-name {
  display: block;
  margin: auto;
}

.electron-configuration {
  display: block;
  margin: auto;
  font-size: 0.675vw;
}

.placeholder {
  cursor: default !important;
  box-shadow: unset;
}

.placeholder:hover,
.placeholder:focus {
  opacity: 0.85;
  box-shadow: unset;
}

.period-label {
  display: block;
}

.group-label {
  display: block;
  align-self: end;
  z-index: 3;
}

@media (min-width: 735px) and (max-width: 839px) {
  .actinide.placeholder {
    display: none;
  }
}

@media (max-width: 1023px) {
  .periodic-table {
    padding-top: 64px;
    max-width: 944px;
  }

  .period-container {
    display: none;
  }

  .elements-wrapper {
    width: 100%;
  }

  .header {
    display: block;
    width: 100%;
    padding-bottom: 10px;
  }

  .elements-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .element {
    display: inline-block;
    height: 120px;
    width: 105px;
  }

  .atomic-info {
    height: auto;
  }

  .electron-configuration {
    font-size: 14px;
  }

  .period-label,
  .group-label {
    display: none;
  }
}
</style>
