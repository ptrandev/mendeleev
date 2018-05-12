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
          <li class="luxbar-item previous-element" @click="closeMenu()">
            <router-link class="previous-element-link" :to="{path: '/element/' + previousElement}">Previous Element
            </router-link>
          </li>
          <li class="luxbar-item next-element" @click="closeMenu()">
            <router-link class="next-element-link" :to="{path: '/element/' + nextElement}">Next Element
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "ProfileMenu",
  computed: {
    currentElement: function() {
      return parseInt(this.$route.params.id);
    },
    nextElement: function() {
      return this.currentElement + 1;
    },
    previousElement: function() {
      return this.currentElement - 1;
    }
  },
  methods: {
    hidePreviousElement: function() {
      if (this.currentElement === 1) {
        document.querySelector(".previous-element-link").style.display = "none";
      } else {
        document.querySelector(".previous-element-link").style.display = "";
      }
    },
    hideNextElement: function() {
      if (this.currentElement === 118) {
        document.querySelector(".next-element-link").style.display = "none";
      } else {
        document.querySelector(".next-element-link").style.display = "";
      }
    },
    closeMenu: function() {
      document.getElementById("luxbar-checkbox").checked = false;
    }
  },
  mounted: function() {
    this.hidePreviousElement();
    this.hideNextElement();
  },
  updated: function() {
    this.hidePreviousElement();
    this.hideNextElement();
  }
};
</script>

<style scoped>
.luxbar-fixed {
  max-width: 960px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.luxbar-checkbox:not(:checked) ~ .luxbar-menu {
  min-height: 54px;
  height: 54px;
}

.luxbar-header {
  height: 54px;
}

.luxbar-menu-dark {
  background-color: var(--color-black);
}

.luxbar-brand {
  font-weight: 700;
  font-size: 1.6rem;
}

.luxbar-item {
  display: flex;
  align-items: center;
  height: 54px;
  color: #000;
  text-align: center;
}

.luxbar-item a {
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-size: 18px;
  padding: 18px 10px;
  transition: all 0.3s ease;
}

.luxbar-item a:focus,
.luxbar-item a:hover {
  background-color: var(--color-gray-2);
}

.previous-element-link:before {
  content: "";
  display: inline-block;
  height: 18px;
  width: 18px;
  background-image: url("../../assets/img/iconmonstr-arrow-79.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 5px;
}

.next-element-link:after {
  content: "";
  display: inline-block;
  height: 18px;
  width: 18px;
  background-image: url("../../assets/img/iconmonstr-arrow-37.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 5px;
}

@media screen and (min-width: 425px) {
  .luxbar-navigation {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto;
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
    margin: 0;
    order: 1;
    justify-content: center;
  }

  .next-element {
    order: 2;
    justify-content: flex-end;
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

  .previous-element-link {
    float: left;
  }
}

@media (max-width: 1023px) {
  .luxbar-static {
    max-width: calc(100% - 20px);
  }

  .luxbar-item a {
    font-size: 16px;
  }

  .next-element-link:after {
    height: 16px;
    width: 16px;
  }
}
</style>
