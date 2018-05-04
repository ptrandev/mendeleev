<template>
  <div class="ElementProfile">
    <div class="pure-g">
      <div class="pure-u-1-1">
        <div class="shadow element-header" :class="`${selectedElement.category.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' ')}`">
          <h1>{{ selectedElement.name }}</h1>
          <h5>{{ selectedElement.category }}</h5>
        </div>
      </div>
        <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-2-5">
          <div class="card shadow atomic-model">
            <div class="title">
              <h2>Atom</h2>
            </div>
            <AtomicModel/>
            <div class="atomic-info">
              <div class="atomic-number">
                <span class="bold">Atomic Number</span>
                <span>{{ selectedElement.number }}</span>
              </div>
              <div class="atomic-mass">
                <span class="bold">Atomic Mass</span>
                <span>{{ selectedElement.atomic_mass | currency('', 3)}}</span>
              </div>
              <div class="electron-configuration">
                <span class="bold">Electron Configuration</span> 
                <span v-html="elementElectronConfiguration"></span>
              </div>
              <div class="electrons-per-shell">
                <span class="bold">Electrons Per Shell</span>
                <span>{{ elementElectronsPerShell }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-3-5 element-summary-container">
          <div class="card shadow element-summary">
            <div class="title">
              <h2>Summary</h2>
            </div>
            <p>{{ selectedElement.summary }}</p>
            <div class="element-misc">
              <span class="element-discovery">
                <span class="bold">Discovered by</span> 
                <span class="background-black">{{ elementDiscoveredBy }}</span>
                <span class="bold">in</span>
                <span class="background-black">{{ elementYearDiscovered }}</span>
              </span>
              <span class="element-period-group">
                <span class="bold">Period</span>
                <span class="background-black">{{ selectedElement.xpos }}</span>
                <span class="bold">Group</span>
                <span class="background-black">{{ selectedElement.ypos }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-2">
          <div class="card shadow element-physical-properties">
            <div class="title">
              <h3>Physical Properties</h3>
            </div>
            <dl>
              <dt class="bold">Phase at STP</dt>
                <dd>{{ selectedElement.phase }}</dd>
              <dt class="bold">Boiling Point</dt>
                <dd>{{ elementBoil }}</dd>
              <dt class="bold">Melting Point</dt>
                <dd>{{ elementMelt }}</dd>
              <dt class="bold">Density</dt>
                <dd>{{ elementDensity }}</dd>
              <dt class="bold">Molar Heat</dt>
                <dd>{{ elementMolarHeat }}</dd>
            </dl>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-2">
          <div class="card shadow element-atomic-properties">
            <div class="title">
              <h3>Atomic Properties</h3>
            </div>
            <dl>
              <dt class="bold">Electronegativity</dt>
                <dd>{{ elementElectronegativity }}</dd>
              <dt class="bold">Electron Affinity</dt>
                <dd>{{ elementElectronAffinity }}</dd>
              <dt class="bold">Oxidation States</dt>
                <dd>{{ elementOxidationStates }}</dd>
              <dt class="bold">First Ionization Energy</dt>
                <dd>{{ elementIonizationEnergy }}</dd>
              <dt class="bold">Van Der Waals Radius</dt>
                <dd>{{ elementVanDerWaalsRadius }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import pt from "periodic-table";
import elements from "../assets/json/elements.json";
import AtomicModel from "./shared/AtomicModel";

export default {
  name: "ElementProfile",
  data: function() {
    return {
      elements,
      atomicConfig: {
        containerId: "#atomic-model",
        numElectrons: 118,
        idNumber: 118,
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
      myAtom: null
    };
  },
  components: {
    AtomicModel
  },
  computed: {
    selectedElement: function() {
      // selected element corresponds with element in json file
      return this.elements[this.$route.params.id - 1];
    },
    elementBoil: function() {
      if (this.selectedElement.boil === null) {
        return "N/A";
      } else {
        return (
          this.selectedElement.boil +
          " K (" +
          (this.selectedElement.boil - 273.15).toFixed(3) +
          "\xB0C, " +
          ((this.selectedElement.boil - 273) * 1.8 + 32).toFixed(3) +
          "\xB0F)"
        );
        elementElectrons;
      }
    },
    elementMelt: function() {
      if (this.selectedElement.melt === null) {
        return "N/A";
      } else {
        return (
          this.selectedElement.melt +
          " K (" +
          (this.selectedElement.melt - 273.15).toFixed(3) +
          "\xB0C, " +
          ((this.selectedElement.melt - 273) * 1.8 + 32).toFixed(3) +
          "\xB0F)"
        );
      }
    },
    elementDensity: function() {
      if (this.selectedElement.density === null) {
        return "N/A";
      } else {
        return this.selectedElement.density + " g/L";
      }
    },
    elementMolarHeat: function() {
      if (this.selectedElement.molar_heat === null) {
        return "N/A";
      } else {
        return this.selectedElement.molar_heat + " J/(Mol*K)";
      }
    },
    elementDiscoveredBy: function() {
      if (this.selectedElement.discovered_by === null) {
        return "N/A";
      } else {
        return this.selectedElement.discovered_by;
      }
    },
    elementYearDiscovered: function() {
      if (pt.numbers[this.$route.params.id].yearDiscovered === "Ancient") {
        return "Ancient Times";
      } else {
        return pt.numbers[this.$route.params.id].yearDiscovered;
      }
    },
    elementElectronConfiguration: function() {
      return pt.numbers[this.$route.params.id].electronicConfiguration.replace(
        /(?<=s)[0-9]?[0-9]|(?<=p)[0-9]?[0-9]|(?<=d)[0-9]?[0-9]|(?<=f)[0-9]?[0-9]/g,
        "<sup>$&</sup>"
      );
    },
    elementElectronsPerShell: function() {
      return this.selectedElement.shells.join(", ");
    },
    elementElectronegativity: function() {
      if (pt.numbers[this.$route.params.id].electronegativity === "") {
        return "N/A";
      } else {
        return pt.numbers[this.$route.params.id].electronegativity;
      }
    },
    elementElectronAffinity: function() {
      if (pt.numbers[this.$route.params.id].electronAffinity === "") {
        return "N/A";
      } else {
        return pt.numbers[this.$route.params.id].electronAffinity;
      }
    },
    elementOxidationStates: function() {
      if (pt.numbers[this.$route.params.id].oxidationStates === "") {
        return "N/A";
      } else {
        return pt.numbers[this.$route.params.id].oxidationStates;
      }
    },
    elementIonizationEnergy: function() {
      if (pt.numbers[this.$route.params.id].ionizationEnergy === "") {
        return "N/A";
      } else {
        return pt.numbers[this.$route.params.id].ionizationEnergy + " kJ/Mol";
      }
    },
    elementVanDerWaalsRadius: function() {
      if (pt.numbers[this.$route.params.id].vanDelWaalsRadius === "") {
        return "N/A";
      } else {
        return pt.numbers[this.$route.params.id].vanDelWaalsRadius + " pm";
      }
    }
  },
  methods: {
    createAtomicModel() {
      // generate atomic model
      this.myAtom = new Atom(this.atomicConfig);
    },
    updateAtomicModel() {
      // set number of electrons, apply orbital config
      this.myAtom.setNumElectrons(this.selectedElement.number);
      this.myAtom.rotateOrbitals(this.orbitalRotationConfig);
    }
  },
  mounted: function() {
    // generate and update atomic model on load
    this.createAtomicModel();
    this.updateAtomicModel();
  },
  updated: function() {
    // update atomic model on page change
    this.updateAtomicModel();
  }
};
</script>

<style scoped>
h1 {
  font-size: 60px;
}

h2 {
  font-size: 56px;
}

h3 {
  font-size: 42px;
}

h4 {
  font-size: 36px;
}

h5 {
  font-size: 24px;
}

h6 {
  font-size: 18px;
}

a,
p,
span,
button,
ul,
ol,
dl {
  font-size: 18px;
}

p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

span {
  display: inline-block;
}

dd {
  margin: 0;
  margin-bottom: 10px;
}

dd:last-child {
  margin-bottom: 0;
}

.title {
  text-align: center;
}

.ElementProfile {
  width: 100%;
  max-width: 960px;
  margin: auto;
  padding-top: 64px;
}

.element-header {
  width: 100%;
  color: var(--color-black);
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
  opacity: 0.85;
}

.atomic-model {
  margin-right: 5px;
  margin-bottom: 10px;
}

#atomic-model {
  height: 250px;
  width: 100%;
  max-width: 250px;
  margin: auto;
}

.atomic-info {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}

.atomic-number {
  display: flex;
  flex-direction: column;
}

.atomic-mass {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.electron-configuration {
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
}

.electrons-per-shell {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.element-summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 10px);
  margin-left: 5px;
  margin-bottom: 10px;
}

.element-discovery {
  display: block;
  margin-bottom: 5px;
}

.element-physical-properties {
  margin-right: 5px;
  height: 100%;
  margin-bottom: 10px;
}

.element-atomic-properties {
  margin-left: 5px;
  height: 100%;
}

@media (max-width: 767px) {
  .atomic-model,
  .element-physical-properties {
    margin-right: 0;
    height: auto;
  }

  .element-summary,
  .element-atomic-properties {
    margin-left: 0;
    height: auto;
  }
}

@media (max-width: 1023px) {
  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 46px;
  }

  h3 {
    font-size: 42px;
  }

  h4 {
    font-size: 36px;
  }

  h5 {
    font-size: 24px;
  }

  h6 {
    font-size: 16px;
  }

  a,
  p,
  span,
  button,
  ul,
  ol,
  dl {
    font-size: 16px;
  }

  .ElementProfile {
    padding: 64px 10px 0;
  }
}
</style>


