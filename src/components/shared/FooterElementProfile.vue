<template>
  <div class="FooterElementProfile">
  <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer";

export default {
  name: "FooterElementProfile",
  components: {
    Footer
  }
};
</script>

<style>
.FooterElementProfile .footer-wrapper {
  max-width: 960px;
  width: 100%;
  margin: auto;
  padding: 10px 0 10px;
}

.FooterElementProfile .footer-container {
  display: flex;
  background-color: var(--color-gray-2);
  text-align: center;
  width: 100%;
  max-width: none;
}

.FooterElementProfile .footer-container h4 {
  font-size: 36px;
}

.FooterElementProfile .footer-container p,
.FooterElementProfile .footer-container a {
  font-size: 18px;
}

.FooterElementProfile .footer-container div {
  padding-bottom: 0;
  padding-right: 10px;
}

.FooterElementProfile .footer-container div:last-child {
  padding-bottom: 0;
  padding-right: 0;
}

@media (max-width: 1023px) {
  .FooterElementProfile .footer-wrapper {
    padding: 10px;
  }

  .FooterElementProfile .footer-container p,
  .FooterElementProfile .footer-container a {
    font-size: 16px;
  }

  .FooterElementProfile .footer-container {
    flex-direction: column;
  }

  .FooterElementProfile .footer-container div {
    padding-bottom: 10px;
    padding-right: 0;
  }
}
</style>