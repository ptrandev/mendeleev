<template>
  <div class="Footer">
    <div class="footer-wrapper">
      <div class="footer-container shadow">
        <div class="footer-about">
          <h4>About</h4>
            <p>Mendeleev primarily serves as a quick and easy reference for
            students in chemistry class. The creation of Mendeleev allowed me to
            learn the ins and outs of Vue.js while providing a useful resource
            for myself and others.</p>
        </div>
        <div class="footer-contribute">
          <h4>Contribute</h4>
          <p>Mendeleev is an MIT licensed, open-source project. The source code
            is available on <a target="_blank" rel="noopener" href="https://github.com/DonutDeflector/mendeleev">GitHub</a>.
            Additions to the project are welcome. Just remember to read the
            contribution guide before getting started!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
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

@media(max-width: 1023px) {
  .footer-wrapper {
    margin: 4px;
  }

  .footer-container {
    display: block;
    max-width: 512px;
  }

  .footer-container div {
    padding-bottom: 10px;
    padding-right: 0;
  }
}
</style>
