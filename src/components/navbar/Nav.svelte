<script>
  import LogoIcon from "../../../static/icons/logo.svg";
  import LogoSmall from "../../../static/icons/logo-small.svg";
</script>

<style scoped lang="scss" src="./style.scss">

</style>

<nav
  class="navbar navbar-shadow"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        {@html LogoIcon}
      </a>

      <a
        role="button"
        href="https://bulma.io"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">

      <div class="navbar-end">
        <!-- <div class="navbar-item">
          <a href="https://bulma.io" class="h6 has-text-primary">About me</a>
        </div> -->
      </div>
    </div>
  </div>
</nav>
