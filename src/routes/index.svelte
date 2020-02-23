<script>
  import Home from "./home/index.svelte";
  import { setContext } from "svelte";
  setContext("tabActive", "posts");
</script>

<svelte:head>
  <title>Personal blog zahidin</title>
</svelte:head>

<Home />
