<template>
  <div class="FooterProfile">
  <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer";

export default {
  name: "FooterProfile",
  components: {
    Footer
  }
};
</script>

<style>
.FooterProfile .footer-wrapper {
  max-width: 960px;
  width: 100%;
  margin: auto;
  padding: 10px 0 10px;
}

.FooterProfile .footer-container {
  display: flex;
  background-color: var(--color-gray-2);
  text-align: center;
  width: 100%;
  max-width: none;
}

.FooterProfile .footer-container h4 {
  font-size: 36px;
}

.FooterProfile .footer-container p,
.FooterProfile .footer-container a {
  font-size: 18px;
}

.FooterProfile .footer-container div {
  padding-bottom: 0;
  padding-right: 10px;
}

.FooterProfile .footer-container div:last-child {
  padding-bottom: 0;
  padding-right: 0;
}

@media (max-width: 1023px) {
  .FooterProfile .footer-wrapper {
    padding: 10px;
  }

  .FooterProfile .footer-container p,
  .FooterProfile .footer-container a {
    font-size: 16px;
  }

  .FooterProfile .footer-container {
    flex-direction: column;
  }

  .FooterProfile .footer-container div {
    padding-bottom: 10px;
    padding-right: 0;
  }
}
</style>