<template>
  <div class="card-element-wrapper">
    <div class="card-element-container">
      <div class="card-element-general">
        <h2 class="card-element-name"></h2>
        <h5 class="card-element-category"></h5>
      </div>
      <div class="card-element-properties">
        <ul>
          <li>
            <span class="card-element-property-label">Phase</span>
            <span class="card-element-propert-value" id="phase"></span>
          </li>
          <li>
            <span class="card-element-property-label">Boiling Point</span>
            <span id="boiling-point"></span>
          </li>
          <li>
            <span class="card-element-property-label">Melting Point</span>
            <span id="melting-point"></span>
          </li>
          <li>
            <span class="card-element-property-label">Number / Mass</span>
            <span id="number-mass"></span>
          </li>
          <li>
            <span class="card-element-property-label">Electron Configuration</span>
            <span id="electron-configuration"></span>
          </li>
          <li>
            <span class="card-element-property-label">Period / Group</span>
            <span id="period-group"></span>
          </li>
        </ul>
      </div>
      <div class="card-element-summary">
      <p id="summary"></p>
      </div>
       <AtomicModel/>
    </div>
  </div>  
</template>

<script>
import AtomicModel from "../shared/AtomicModel.vue";

export default {
  name: "ElementCard",
  components: {
    AtomicModel
  }
};
</script>

<style scoped>
.card-element-wrapper {
  display: none;
  width: 100%;
  height: 100%;
  margin: 0;
  color: var(--color-white);
  text-align: left;
  grid-column: 4 / 14;
  grid-row: 3 / 5;
  z-index: 1;
}

.card-element-container {
  display: grid;
  grid-template-columns: 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw;
  grid-template-rows: 6.2vw 6.2vw;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: var(--color-gray-2);
  border-style: solid;
  border-color: var(--color-gray);
  border-width: 1px;
}

.card-element-general {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1 / 5;
  grid-row: 1 / 1;
  color: var(--color-gray);
  border-right: 2px solid var(--color-gray);
  border-bottom: 2px solid var(--color-gray);
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0px 1px 0px 1px;
  opacity: 0.85;
  transition: opacity 0.3s ease;
}

.card-element-name {
  text-transform: capitalize;
}

.card-element-properties {
  display: flex;
  align-items: center;
  grid-column: 5 / 9;
  grid-row: 1 / 1;
  padding: 2px 2px 0px 2px;
}

.card-element-properties ul {
  list-style: none;
}

.card-element-property {
  width: 100%;
}

.card-element-property-label {
  font-weight: 700;
}

#atomic-model {
  height: 100%;
  width: 100%;
  grid-column: 9 / 11;
  grid-row: 1 / 3;
  margin: auto;
}

.bohr-atomic-symbol {
  font-family: "Roboto Condensed";
}

.card-element-summary {
  grid-column: 1 / 9;
  grid-row: 2 / 2;
  padding: 2px 2px 0px 2px;
}

@media (max-width: 1023px) {
  .card-element-wrapper {
    height: auto;
    margin: 5px 0 2px 0;
    padding: 0 2px 0;
  }

  .card-element-container {
    display: block;
    max-width: 768px;
    padding: 5px 5px 0 5px;
  }

  .card-element-general {
    border: 0;
    margin: 0;
  }
}
</style>
