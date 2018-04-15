<template>
  <div class="ElementProfile">
    <div class="pure-g">
      <div class="pure-u-1-1">
        <div class="element-general shadow" :class="`${selectedElement.category.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' ')}`">
          <h1>{{ selectedElement.name }}</h1>
          <h5>{{ selectedElement.category }}</h5>
        </div>
      </div>
        <div class="pure-u-1-1 pure-u-md-1-3">
          <div class="card shadow atomic-model">
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
            </div>
          </div>
        </div>
        <div class="pure-u-1-1 pure-u-md-2-3 element-summary-container">
          <div class="card shadow element-summary">
            <h3>Summary</h3>
            <p>{{ selectedElement.summary }}</p>
          </div>
        </div>
        <div class="pure-u-1-1">
          <div class="card shadow element-info">
            <ul>
              <li>Boiling Point: {{ elementBoil }}</li>
              <li>Melting Point: {{ elementMelt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import elements from '../assets/json/elements.json'
import AtomicModel from './shared/AtomicModel'

export default {
  name: 'ElementProfile',
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
        },
      },
      myAtom: null
    }
  },
  components: {
    AtomicModel
  },
  computed: {
    selectedElement: function() {
      // selected element corresponds with element in json file
      return this.elements[this.$route.params.id - 1]
    },
    elementBoil: function() {
      if (this.selectedElement.boil === null) {
        return 'N/A';
      } else {
        return this.selectedElement.boil + '\xB0K';
      }
    },
    elementMelt: function() {
      if (this.selectedElement.melt === null) {
        return 'N/A';
      } else {
        return this.selectedElement.melt + '\xB0K';
      }
    }
  },
  methods: {
    createAtomicModel(){
      // generate atomic model, set number of electrons, apply orbital config
      this.myAtom = new Atom(this.atomicConfig);
      this.myAtom.setNumElectrons(this.selectedElement.number);
      this.myAtom.rotateOrbitals(this.orbitalRotationConfig);
    }
  },
  mounted: function() {
    // generate atomic model on load
    this.createAtomicModel();
  }
}
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
ol {
  font-size: 18px;
}

.card {
  padding: 20px;
}

.ElementProfile {
  padding: 10px;
  width: 100%;
  max-width: 960px;
  margin: auto;
}

.element-general {
  width: 100%;
  color: var(--color-black);
  text-align: center;
  margin-bottom: 20px;
}

.atomic-model {
  margin-right: 10px;
  margin-bottom: 20px;
}

#atomic-model {
  height: 250px;
  width: 100%;
  max-width: 250px;
  margin: auto;
}

.atomic-info {
  display: flex;
  justify-content: space-between;
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

.element-summary-container {
  display: flex;
  align-items: center;
}

.element-summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 20px);
  margin-left: 10px;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  .atomic-model {
    margin-right: 0;
  }

  .element-summary {
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
  ol {
    font-size: 16px;
  }
}
</style>


