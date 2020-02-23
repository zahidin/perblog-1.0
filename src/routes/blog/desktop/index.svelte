<script>
  import Author from "../../../components/author/index.svelte";
  import Content from "./components/content.svelte";
  import { AUTHOR, COMPANY, POSITION_JOB } from "../../../constants/index.js";
  export let data;
</script>

<div class="my-3 py-3 is-hidden-mobile">
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="mb-4">
        <h1 class="h1 font-weight-500">{data.title}</h1>
      </div>
      <div class="author-blog-content">
        <Author
          date="Apr 15, 2019"
          name={AUTHOR}
          company={COMPANY}
          category="Tech" />
      </div>

      <Content data={data.body} />

      <div class="footer-content">
        <div class="is-flex flex-row align-items-center mb-2 ">
          <div class="mr-3">
            <figure class="image is-64x64">
              <img
                class="is-rounded"
                alt="test"
                src="https://avatars1.githubusercontent.com/u/22991542?s=460&v=4" />
            </figure>
          </div>
          <div class="is-flex flex-column">
            <span
              class="subtitle-4 font-weight-300 has-text-grey line-height-1">
              Written by
            </span>
            <span class="h5 font-weight-600 has-text-grey-dark">
              {AUTHOR} in {COMPANY}
            </span>
            <span class="body-2 font-weight-400 has-text-grey line-height-1">
              {POSITION_JOB} at {COMPANY}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
