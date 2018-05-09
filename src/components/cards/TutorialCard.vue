<template>
  <div class="card-tutorial-wrapper">
    <div class="card-tutorial-container">
      <div class="card-tutorial-intro shadow">
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
        <div class="card-tutorial-element shadow">
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
  name: "Tutorial"
};
</script>

<style scoped>
.card-tutorial-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  color: var(--color-white);
  text-align: left;
  grid-column: 4 / 14;
  grid-row: 3 / 5;
}

.card-tutorial-container {
  display: grid;
  grid-template-columns: 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw 5.4vw;
  grid-template-rows: 6.2vw 6.2vw;
  width: 100%;
  height: 100%;
  margin: auto;
  border-style: solid;
  border-color: var(--color-gray);
  border-width: 1px;
}

.card-tutorial-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 7;
  grid-row: 1/ 3;
  margin-left: 1vw;
  background-color: var(--color-gray-2);
  height: calc(100% - 3.6vw);
}

.card-tutorial-intro h3 {
  text-align: center;
}

.card-tutorial-element-container {
  display: flex;
  justify-content: flex-end;
  grid-column: 7 / 12;
  grid-row: 1 / 3;
  margin-right: 1vw;
}

.card-tutorial-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(10.8vw - 3.6vw);
  height: calc(100% - 3.6vw);
  padding: 0.2vw;
  opacity: 0.85;
  color: var(--color-black);
  background-color: var(--color-teal);
}

.card-tutorial-element span {
  font-size: 1.25vw;
}

.atomic-info {
  display: flex;
  justify-content: space-between;
  height: 1.25vw;
  width: 100%;
}

.atomic-number {
  margin-left: 0.15vw;
}

.atomic-mass {
  margin-right: 0.15vw;
}

.card-tutorial-element .electron-configuration-container span {
  font-size: 1vw;
}

.card-tutorial-element-key-container {
  margin-right: 0.25vw;
}

.card-tutorial-element-key {
  height: calc(100% - 3.6vw);
  padding: 0.2vw 0;
}

.card-tutorial-element-key span {
  display: flex;
  align-items: center;
}

.card-tutorial-element-key span:after {
  content: "";
  display: inline-block;
  height: 0.75vw;
  width: 0.75vw;
  background-image: url("../../assets/img/iconmonstr-arrow-37.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 0.25vw;
}

.card-tutorial-element-key-1,
.card-tutorial-element-key-2 {
  display: flex;
  align-items: flex-end;
  height: 50%;
}

.card-tutorial-element-key-1 {
  padding-top: 0.15vw;
  flex-direction: column;
  justify-content: space-between;
}

.card-tutorial-element-key-2 {
  padding-bottom: 0.05vw;
  flex-direction: column;
  justify-content: flex-end;
}

.card-tutorial-element-key-2 span:first-of-type {
  margin-bottom: 0.3vw;
}

@media (max-width: 1023px) {
  .card-tutorial-wrapper {
    display: none;
  }
}
</style>
