<script>
  export let name;
  export let date;
  export let company;
  export let category;
</script>

<div class="is-flex flex-row align-items-center mb-2 ">
  <div class="mr-3">
    <figure class="image is-48x48">
      <img
        class="is-rounded"
        alt="test"
        src="https://avatars1.githubusercontent.com/u/22991542?s=460&v=4" />
    </figure>
  </div>
  <div class="is-flex flex-column">
    <span class="h6 font-weight-500 has-text-grey-dark author-name">
      {name} in {company} {category} Blog
    </span>
    <span class="body-3 has-text-grey line-height-1 date">{date}</span>
  </div>
</div>
