<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="http://www.creative-tim.com/license">
            Licenses
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} Desenvolvido por 
        <a href="https://www.johnnyvaz.com.br" target="_blank" rel="noopener">Johnny Vaz</a> 
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
