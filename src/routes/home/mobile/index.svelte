<script>
  import Avatar from "./avatar/index.svelte";
  import Tabs from "./tabs/index.svelte";
  import ListContent from "./list-content/index.svelte";
  import { AUTHOR, COMPANY, POSITION_JOB } from "../../../constants";
  export let posts;
</script>

<Avatar />
<div class="my-2 pl-3 pr-4 is-hidden-tablet">
  <div class="columns">
    <div class="column">
      <div>
        <span class="h2 font-weight-600">{AUTHOR}</span>
        <br />
        <span class="subtitle-1 font-weight-400 has-text-grey-dark">
          {POSITION_JOB} at {COMPANY}
        </span>
      </div>
      <div class="mt-4">
        <span class="subtitle-2 has-text-grey-dark">
          "Belajar lah untuk mendapatkan pengalaman karna pengalaman itu lah
          pembelajaran yang terbaik untuk anda"
        </span>
        <span class="subtitle-2 has-text-grey">Github &nbsp;</span>
        <span class="subtitle-2 has-text-grey">Twitter &nbsp;</span>
        <span class="subtitle-2 has-text-grey">Facebook &nbsp;</span>
      </div>
    </div>
    <div class="column">
      <Tabs />
    </div>
    <div class="column">
      <div class="mt-3 mb-3">
        <h5 class="font-weight-600">Latest</h5>
      </div>
      {#if !posts}
        <span>Loading ...</span>
      {:else}
        {#each posts as post}
          <ListContent data={post} />
        {/each}
      {/if}
    </div>
  </div>
</div>
