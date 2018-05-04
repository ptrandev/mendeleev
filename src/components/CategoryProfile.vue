<template>
  <div class="CategoryProfile">
    <div class="pure-g">
      <div class="pure-u-1-1">
        <div class="shadow category-header" :class="selectedCategory.replace(/ /g, '-')">
          <h1>{{ selectedCategory }}</h1>
        </div>
      </div>
      <div class="pure-u-1-1">
        <div class="shadow card summary">
          <h2 class="title">Summary</h2>
            <p>{{ categorySummary }}</p>
        </div>
      </div>
      <div class="pure-u-1-1">
        <div class="elements-container">
          <div v-for="element in categoryElements" class="element shadow-hoverable"
          :class="`${element.category.replace(/probably|predicted to be/g, '').replace(/\s+/g, '-').replace(/,-/g, ' ')}`"
          :id="element.name.toLowerCase()"
          :style="`grid-column-start: ${element.xpos + 1}; grid-row-start: ${element.ypos + 1}`"
          @mouseenter="displayInfo(element.name, element.category,
          element.phase, element.boil, element.melt, element.number,
          element.atomic_mass.toFixed(3), element.ypos,
          element.xpos, element.summary)"
          @mouseleave="hideInfo()">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categories from "../assets/json/categories.json";
import elements from "../assets/json/elements.json";

export default {
  name: "CategoryProfile",
  data: function() {
    return {
      categories,
      elements
    };
  },
  computed: {
    selectedCategory: function() {
      return this.$route.params.id
        .replace(/-/g, " ")
        .replace(/post transition/g, "post-transition");
    },
    categorySummary: function() {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].name === this.selectedCategory) {
          return this.categories[i].summary;
        }
      }
    },
    categoryElements: function() {
      let array = [];
      let category = this.selectedCategory;

      for (let i = 0; i < this.elements.length; i++) {
        if (this.elements[i].category === category) {
          // remember to add these items to an array to make it work
          array.push(this.elements[i]);
        }
      }

      return array;
    }
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
}

.title {
  text-align: center;
}

.CategoryProfile {
  margin: auto;
  width: 100%;
  max-width: 960px;
  padding: 64px 0 0;
}

.category-header {
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: var(--color-black);
  opacity: 0.85;
}

.summary {
  margin-bottom: 10px;
}

.elements-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
}

.element-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.element {
  display: inline-block;
  height: 120px;
  width: 105px;
  border: 1px solid var(--color-gray);
  color: var(--color-gray);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  opacity: 0.85;
  transition: all 0.3s ease;
  z-index: 0;
  text-align: center;
}

.element:hover,
.element:focus {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  opacity: 1;
  cursor: pointer;
  z-index: 2;
}

.element a,
.element a:hover,
.element a:focus {
  color: inherit;
  text-decoration: inherit;
}

.element h3 {
  font-size: 50px;
}

.atomic-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-top: 2px;
}

.atomic-number {
  margin-left: 2px;
  font-size: 16px;
}

.atomic-mass {
  margin-right: 2px;
  font-size: 16px;
}

.element-symbol,
.element-name {
  display: block;
  margin: auto;
}

.element-name {
  font-size: 16px;
}

.electron-configuration {
  display: block;
  margin: auto;
  font-size: 14px;
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
}
</style>
