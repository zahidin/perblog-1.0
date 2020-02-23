<script>
  import Nav from "../components/navbar/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "../styles/index.scss";
</style>

<Nav {segment} />

<main id="root">
  <slot />
</main>
