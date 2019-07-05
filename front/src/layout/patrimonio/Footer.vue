<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright">
        © {{year}} Desenvolvido por
        <a href="http://www.johnnyvaz.com.br" target="_blank" rel="noopener">Johnny Vaz</a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
