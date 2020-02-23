<script>
  import {
    AUTHOR,
    COMPANY,
    POSITION_JOB
  } from "../../../../constants/index.js";
</script>

<div class="my-5 py-4 is-hidden-mobile">
  <div class="columns is-centered">
    <div class="column is-three-fifths">
      <div class="columns mx-5">
        <div class="column is-9">
          <div>
            <span class="h2 font-weight-600">{AUTHOR}</span>
          </div>
          <span class="subtitle-1 font-weight-400 has-text-grey-dark">
            {POSITION_JOB} at {COMPANY}
          </span>
          <div class="mt-3">
            <span class="subtitle-2 has-text-grey-dark">
              "Belajar lah untuk mendapatkan pengalaman karna pengalaman itu lah
              pembelajaran yang terbaik untuk anda"
            </span>
          </div>
          <div class="mt-1">
            <span class="subtitle-2 has-text-grey">Github &nbsp;</span>
            <span class="subtitle-2 has-text-grey">Twitter &nbsp;</span>
            <span class="subtitle-2 has-text-grey">Facebook &nbsp;</span>
          </div>
        </div>
        <div class="column is-3">
          <figure class="image is-128x128 ">
            <img
              class="is-rounded"
              alt="test"
              src="https://avatars1.githubusercontent.com/u/22991542?s=460&v=4" />
          </figure>
        </div>
      </div>
      <div class="column mx-5">
        <div class="tabs is-small">
          <ul>
            <li class="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
