<template>
  <Footer/>
</template>

<script>
import Footer from "./Footer";

export default {
  name: "FooterPeriodicTable",
  components: {
    Footer
  }
};
</script>

<style>
.footer-wrapper {
  margin: auto;
  margin-top: 1vw;
  margin-bottom: 1vw;
}

.footer-container {
  display: flex;
  padding: 10px;
  background-color: var(--color-gray-2);
  text-align: center;
  margin: auto;
  max-width: 50vw;
}

.footer-container div {
  padding-bottom: 0;
  padding-right: 10px;
}

.footer-container div:last-child {
  padding-bottom: 0;
  padding-right: 0;
}

@media (max-width: 1023px) {
  .footer-wrapper {
    margin: 10px;
  }

  .footer-container {
    display: block;
    max-width: 768px;
  }

  .footer-container div {
    padding-bottom: 10px;
    padding-right: 0;
  }
}
</style>