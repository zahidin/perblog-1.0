<script context="module">
  import axios from "axios";
  export async function preload({ params, query }) {
    try {
      const req = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      return req.data;
    } catch (error) {
      return new Error(error);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  onMount(() => goto("/"));
</script>
