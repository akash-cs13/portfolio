<script lang="ts">
  import { page } from "$app/stores";
</script>

<section>
  <div class="heroSection">
    <h1 class="rem5">
      Oh no! <strong class="lightFont">{$page.status}</strong>
    </h1>
    <p class="rem1p3">
      Looks like something went wrong. <strong class="lightFont"
        >{$page.error?.message}.</strong
      >
      <br />
      Why not try something <a href="/" class="specialLink">else?</a>
    </p>
  </div>
</section>
