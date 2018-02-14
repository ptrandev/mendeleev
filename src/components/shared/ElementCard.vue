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
import AtomicModel from './AtomicModel.vue'

export default {
  name: 'ElementCard',
  components: {
    AtomicModel
  }
}
</script>
