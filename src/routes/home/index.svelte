<script>
  import { preload } from "../blog/index.svelte";
  import ContentMobile from "./mobile/index.svelte";
  import ContentDesktop from "./desktop/index.svelte";
  import { onMount } from "svelte";
  let posts = false;
  let param = {
    params: "",
    query: ""
  };
  onMount(async () => {
    posts = await preload(param);
  });
</script>

<div class="container">
  <ContentMobile {posts} />
  <ContentDesktop {posts} />
</div>
