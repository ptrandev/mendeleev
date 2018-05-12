<template>
  <div class="ProfileMenu">
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
          class="luxbar-item category-link" @click="closeMenu()">
            <router-link :to="{path: '/category/' + category}">{{category.replace(/-/g, ' ').replace(/gas/g, 'gase') + 's'}}</router-link>
         </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "ProfileMenu",
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
    closeMenu: function() {
      document.getElementById("luxbar-checkbox").checked = false;
    }
  }
};
</script>

<style scoped>
.luxbar-checkbox:not(:checked) ~ .luxbar-menu {
  min-height: 54px;
  height: 54px;
}

.luxbar-menu-dark {
  background-color: var(--color-black);
}

.luxbar-header {
  height: 54px;
}

.luxbar-brand {
  font-size: 1.6rem;
  font-weight: 700;
}

.luxbar-item {
  height: 54px;
}

.category-link {
  opacity: 0.9;
  transition: all 0.3s ease;
}

.luxbar-item {
  opacity: 0.9;
  z-index: 0;
}

.luxbar-item:focus,
.luxbar-item:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  opacity: 1;
  z-index: 2;
}

.luxbar-item a {
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 10px;
  font-size: 16px;
  color: var(--color-black);
}

@media (max-width: 1239px) {
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

@media screen and (min-width: 1240px) {
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
