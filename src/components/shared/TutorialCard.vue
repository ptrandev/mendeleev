<template>
  <div class="card-tutorial-wrapper">
    <div class="card-tutorial-container">
      <div class="card-tutorial-intro">
        <h3>Welcome to Mendeleev.</h3>
        <ul>
          <li>Hover over elements to view general details.</li>
          <li>Click on elements to be taken to a comprehensive profile.</li>
          <li>Hover over categories in the navigation bar to isolate elements of those types.</li>
          <li>Click on categories in the navigation bar to be taken to a compreshensive profile.</li>
        </ul>
      </div>
      <div class="card-tutorial-element-container">
        <div class="card-tutorial-element-key-container">
          <div class="card-tutorial-element-key">
            <div class="card-tutorial-element-key-1">
              <span>Atomic Number / Mass</span>
              <span>Element Symbol</span>
            </div>
            <div class="card-tutorial-element-key-2">
              <span>Element Name</span>
              <span>Electron Configuration</span>
            </div>
          </div>
        </div>
        <div class="card-tutorial-element">
          <div class="atomic-info">
            <span class="atomic-number">14</span>
            <span class="atomic-mass">28.085</span>
          </div>
          <div class="element-symbol-container">
            <h1 class="element-symbol">Si</h1>
          </div>
          <div class="element-name-container">
            <span class="element-name">Silicon</span>
          </div>
          <div class="electron-configuration-container">
            <span class="electron-configuration">2 8 4</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorial'
}
</script>