<script>
  import { AUTHOR, COMPANY, POSITION_JOB } from "../../../../constants";
  import Author from "../../../../components/author/index.svelte";
  export let data;
</script>

<div class="box border is-box">
  <Author date="Apr 15, 2019" name={AUTHOR} company={COMPANY} category="Tech" />

  <div class="__content">
    <a rel="prefetch" class="__content" href="blog/{data.id}">
      <div class="mt-4 mb-2">
        <img
          class="image-post"
          alt="image-post"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3mYcJbgAb0pR7c0IMjpitJ0toD-TZYJuV7e71v13k4S0hfZNt" />
      </div>
      <div class="mb-2">
        <h1 class="h2 font-weight-600 has-text-black">{data.title}</h1>
      </div>
      <div>
        <span class="description">{data.body}</span>
      </div>
    </a>
  </div>
</div>
