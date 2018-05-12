<template>
  <div class="SortingMenu">
    <header id="luxbar" class="luxbar-fixed">
      <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
      <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul class="luxbar-navigation">
          <li class="luxbar-header">
            <router-link :to="'/'"><span class="luxbar-brand">Mendeleev</span></router-link>
            <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
            id="luxbar-hamburger" for="luxbar-checkbox"><span></span>
            </label>
          </li>
          <li v-for="category in categories" :class="category"
          class="luxbar-item category-link" v-on:mouseover="emphasize(category)"
          v-on:mouseout="deemphasize(category)">
            <router-link :to="{path: '/category/' + category}">{{category.replace(/-/g, ' ').replace(/gas/g, 'gase') + 's'}}</router-link>
         </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "SortingMenu",
  data: function() {
    return {
      categories: [
        "polyatomic-nonmetal",
        "diatomic-nonmetal",
        "alkali-metal",
        "alkaline-earth-metal",
        "transition-metal",
        "post-transition-metal",
        "metalloid",
        "noble-gas",
        "lanthanide",
        "actinide"
      ]
    };
  },
  methods: {
    emphasize(category) {
      // convert category variable to class
      category = "." + category;

      // find all element and category elements
      let elements = document.querySelectorAll(".element");
      let categories = document.querySelectorAll(".category-link");
      let selectedCategory = document.querySelectorAll(category);

      // deemphasize .element and .category-link elements
      elements.forEach(function(element) {
        element.classList.add("deemphasized");
      });

      categories.forEach(function(category) {
        category.classList.add("deemphasized");
      });

      // emphasize elements of the selected category
      selectedCategory.forEach(function(category) {
        category.classList.add("emphasized");
      });
    },
    deemphasize(category) {
      // convert category variable to class
      category = "." + category;

      // find all element and category elements
      let elements = document.querySelectorAll(".element");
      let categories = document.querySelectorAll(".category-link");
      let selectedCategory = document.querySelectorAll(category);

      // revert emphasis and deemphasis
      elements.forEach(function(element) {
        element.classList.remove("deemphasized");
      });

      categories.forEach(function(category) {
        category.classList.remove("deemphasized");
        category.classList.remove("emphasized");
      });

      selectedCategory.forEach(function(category) {
        category.classList.remove("emphasized");
      });
    }
  }
};
</script>

<style scoped>
.luxbar-checkbox:not(:checked) ~ .luxbar-menu {
  min-height: 2.5vw;
  height: 2.5vw;
}

.luxbar-menu-dark {
  background-color: var(--color-black);
}

.luxbar-header {
  height: 2.5vw;
}

.luxbar-brand {
  font-weight: 700;
}

.luxbar-item {
  height: 2.5vw;
}

.category-link {
  opacity: 0.9;
  transition: all 0.3s ease;
}

.luxbar-item a {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5vw;
  color: var(--color-black);
}

.luxbar-item a:focus,
.luxbar-item a:hover {
  color: var(--color-black);
}

@media (max-width: 1023px) {
  .luxbar-checkbox:not(:checked) ~ .luxbar-menu {
    min-height: 54px;
    height: 54px;
  }

  .luxbar-header {
    height: 54px;
  }

  .luxbar-item {
    height: 54px;
  }

  .luxbar-item {
    padding: 10px;
  }
}

@media screen and (min-width: 1024px) {
  .luxbar-navigation {
    flex-flow: row;
    justify-content: flex-end;
  }

  .luxbar-hamburger {
    display: none;
  }

  .luxbar-checkbox:not(:checked) ~ .luxbar-menu {
    overflow: visible;
  }
  .luxbar-checkbox:checked ~ .luxbar-menu {
    height: 40px;
  }

  .luxbar-menu .luxbar-item {
    border-top: 0;
  }

  .luxbar-menu-right .luxbar-header {
    margin-right: auto;
  }

  .dropdown {
    height: 40px;
  }
  .dropdown:hover > ul {
    position: absolute;
    left: 0;
    top: 40px;
    padding: 0;
  }
  .dropdown > ul {
    display: none;
  }
  .dropdown > ul .luxbar-item {
    padding: 5px 10px;
  }
  .dropdown > ul .luxbar-item a {
    white-space: nowrap;
  }
}
</style>
