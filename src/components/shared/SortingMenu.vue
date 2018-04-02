<template>
  <header id="luxbar" class="luxbar-fixed">
    <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
    <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
      <ul class="luxbar-navigation">
        <li class="luxbar-header">
          <a href="#" class="luxbar-brand">Mendeleev</a>
          <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
          id="luxbar-hamburger" for="luxbar-checkbox"><span></span>
          </label>
        </li>
        <li v-for="category in categories" :class="category"
        class="luxbar-item category-link" v-on:mouseover="emphasize(category)"
        v-on:mouseout="deemphasize">
          <a href="#">{{category.replace(/-/g, ' ').replace(/gas/g, 'gase') + 's'}}</a>
       </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SortingMenu',
  data: function() {
    return {
      categories: [
        'polyatomic-nonmetal',
        'diatomic-nonmetal',
        'alkali-metal',
        'alkaline-earth-metal',
        'transition-metal',
        'post-transition-metal',
        'metalloid',
        'noble-gas',
        'lanthanide',
        'actinide'
      ]
    }
  },
  methods: {
    emphasize(category) {
      // convert category variable to class
      category = '.' + category;

      // deemphasize .element and .category-link elements
      $('.element').css('opacity', '0.6');
      $('.category-link').css('opacity', '0.6');

      // emphasize elements of the selected category
      $(category).css('opacity', '1.0').css('box-shadow', '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)').css('z-index', '2');
    },
    deemphasize() {
      // revert emphasis and deemphasis
      $('.category-link').css('opacity', '').css('box-shadow','').css('z-index', '');
      $('.element').css('opacity', '').css('box-shadow','').css('z-index', '');
      $('.card-element-general').css('opacity', '').css('box-shadow','').css('z-index', '');
    }
  }
}
</script>
