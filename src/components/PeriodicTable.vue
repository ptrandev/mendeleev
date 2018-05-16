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
        :key="element.id"
        :class="`${element.category.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' ')}`"
        :id="element.name.toLowerCase()"
        :style="`grid-column-start: ${element.xpos + 1}; grid-row-start: ${element.ypos + 1}`"
        @mouseenter="generateCardContent(element)"
        @mouseleave="hideCard()">
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
        <div v-for="n in 7" class="period-label" :key="n.id" :id="'period-' + n"
        :style="`grid-column-start: 1; grid-row-start: ${n + 1}`">
          <div>
            <span>{{n}}</span>
          </div>
        </div>
        <div v-for="n in 18" class="group-label" :key="n.id" :id="'group-' + n"
        :style="generateGroupLabelPosition(n)">
          <span>{{n}}</span>
        </div>
        <div class="element shadow lanthanide placeholder" :style="`grid-column-start: 4; grid-row-start: 7`"></div>
        <div class="element shadow actinide placeholder" :style="`grid-column-start: 4; grid-row-start: 8`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import pt from "periodic-table";
import elements from "../assets/json/elements.json";
import TutorialCard from "./cards/TutorialCard";
import ElementCard from "./cards/ElementCard";

export default {
  name: "PeriodicTable",
  data: function() {
    return {
      elements,
      atomicConfig: {
        containerId: "#atomic-model",
        numElectrons: 1,
        idNumber: 1,
        nucleusColor: "#1B2126",
        electronColor: "#90CAF9",
        orbitalColor: "#1B2126"
      },
      orbitalRotationConfig: {
        pattern: {
          alternating: false,
          clockwise: true,
          preset: "random"
        }
      },
      atomGenerated: false,
      myAtom: null,
      windowWidth: null,
      selectedElement: {
        name: null,
        category: null,
        phase: null,
        boil: null,
        melt: null,
        number: null,
        mass: null,
        period: null,
        group: null,
        summary: null
      }
    };
  },
  components: {
    TutorialCard,
    ElementCard
  },
  methods: {
    generateCardContent(element) {
      // only allows card to be displayed in full table mode
      if (this.windowWidth > 1023) {
        this.saveSelectedElementProperties(element);
        this.generateGeneralElementInfo();
        this.generateElementBoil();
        this.generateElementMelt();
        this.generateAtomicModel();
        this.displayInfo();
        this.revealCard();
      }
    },
    saveSelectedElementProperties(element) {
      this.selectedElement.name = element.name;
      this.selectedElement.category = element.category;
      this.selectedElement.phase = element.phase;
      this.selectedElement.boil = element.boil;
      this.selectedElement.melt = element.melt;
      this.selectedElement.number = element.number;
      this.selectedElement.mass = element.atomic_mass.toFixed(3);
      this.selectedElement.period = element.period;
      this.selectedElement.group = element.xpos;
      this.selectedElement.summary = element.summary;
    },
    generateGeneralElementInfo() {
      // adds the correct class according to the element category
      document.querySelector("#card-element-general").removeAttribute("class");
      if (this.selectedElement.category.includes("unknown")) {
        document
          .querySelector("#card-element-general")
          .classList.add("unknown");
      } else {
        document
          .querySelector("#card-element-general")
          .classList.add(this.selectedElement.category.replace(/\s+/g, "-"));
      }

      document.querySelector(
        ".card-element-name"
      ).innerHTML = this.selectedElement.name;

      document.querySelector(
        ".card-element-category"
      ).innerHTML = this.selectedElement.category;
    },
    generateElementBoil() {
      if (this.selectedElement.boil === null) {
        this.selectedElement.boil = "N/A";
      } else {
        this.selectedElement.boil =
          this.selectedElement.boil +
          "&#176;K / " +
          (this.selectedElement.boil - 273.15).toFixed(3) +
          "&#176;C";
      }
    },
    generateElementMelt() {
      if (this.selectedElement.melt === null) {
        this.selectedElement.melt = "N/A";
      } else {
        this.selectedElement.melt =
          this.selectedElement.melt +
          "&#176;K / " +
          (this.selectedElement.melt - 273.15).toFixed(3) +
          "&#176;C";
      }
    },
    generateAtomicModel() {
      // create the atom element if it hasn't been created yet
      if (this.atomGenerated == false) {
        // generate new atom, set number of electrons, apply orbital config
        this.myAtom = new Atom(this.atomicConfig);
        this.myAtom.setNumElectrons(this.selectedElement.number);
        this.myAtom.rotateOrbitals(this.orbitalRotationConfig);

        // atom now generated, prevent if statement from running agian
        this.atomGenerated = true;
      } else {
        this.myAtom.setNumElectrons(this.selectedElement.number);
        this.myAtom.rotateOrbitals(this.orbitalRotationConfig);
      }
    },
    displayInfo() {
      document.querySelector("#phase").innerHTML = this.selectedElement.phase;
      document.querySelector(
        "#boiling-point"
      ).innerHTML = this.selectedElement.boil;
      document.querySelector(
        "#melting-point"
      ).innerHTML = this.selectedElement.melt;
      document.querySelector("#number-mass").innerHTML =
        this.selectedElement.number + " / " + this.selectedElement.mass;
      document.querySelector("#electron-configuration").innerHTML = pt.numbers[
        this.selectedElement.number
      ].electronicConfiguration.replace(
        /(?<=s)[0-9]?[0-9]|(?<=p)[0-9]?[0-9]|(?<=d)[0-9]?[0-9]|(?<=f)[0-9]?[0-9]/g,
        "<sup>$&</sup>"
      );
      document.querySelector("#period-group").innerHTML =
        this.selectedElement.period + " / " + this.selectedElement.group;
      document.querySelector(
        "#summary"
      ).innerHTML = this.selectedElement.summary;
    },
    revealCard() {
      document.querySelector(".card-element-wrapper").classList.remove("hide");
      document.querySelector(".card-element-wrapper").classList.add("reveal");
    },
    hideCard() {
      // bug with bohr model when trying to use display: none so I used
      // opacity: 0 instead
      document
        .querySelector(".card-element-wrapper")
        .classList.remove("reveal");
      document.querySelector(".card-element-wrapper").classList.add("hide");
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    generateGroupLabelPosition(n) {
      // all this just so I can have one v-for statement for group labels
      let position = {};

      position.gridColumnStart = n + 1;

      if (n === 1 || n === 18) {
        position.gridRowStart = 1;
      } else if (n === 2 || (n >= 13 && n <= 17)) {
        position.gridRowStart = 2;
      } else {
        position.gridRowStart = 4;
      }

      return position;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  opacity: 0.85;
  transition: all 0.3s ease;
  z-index: 0;
}

.element:hover,
.element:focus {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1vw;
}

.atomic-number {
  margin-left: 0.1vw;
}

.atomic-mass {
  margin-right: 0.1vw;
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

.group-label {
  display: flex;
  justify-content: center;
  align-self: flex-end;
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
    margin-top: 2px;
  }

  .atomic-number {
    margin-left: 2px;
  }

  .atomic-mass {
    margin-right: 2px;
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
