<script lang="ts">
  import "./specialstyles.css";
  import Archive from "$lib/projects/projects.json";
  import Element1 from "./Element1.svelte";
  import Element2 from "./Element2.svelte";
  import MediaQuery from "../MediaQuery.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    const toTop = document.querySelector(".toTop");
    const height = window.innerHeight;

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > height / 6 ||
        document.documentElement.scrollTop > height / 6
      ) {
        toTop?.classList.remove("hidden");
      } else {
        toTop?.classList.add("hidden");
      }
    });
  });
</script>

<section id="#Top">
  <div class="heroSection">
    <h1 class="rem3 lightFont" style="padding-left: 1rem;">Projects.</h1>
    <h2 class="rem1p5" style="padding-left: 1rem;">
      An archive of all my projects.
    </h2>

    <div class="table">
      <MediaQuery query="(min-width: 751px)" let:matches>
        {#if matches}
          <div class="headings">
            <h2 class="rem1p3">Year</h2>
            <h2 class="rem1p3">Title</h2>
            <h2 class="rem1p3">Links</h2>
          </div>
          <div class="elements">
            {#each Archive.archive as project}
              <Element1 {project} />
            {/each}
          </div>
        {/if}
      </MediaQuery>
      <MediaQuery query="(max-width: 750px)" let:matches>
        {#if matches}
          <div class="headings2">
            <h2 class="rem1p3">Year</h2>
            <h2 class="rem1p3">Title</h2>
          </div>
          <div class="elements">
            {#each Archive.archive as project}
              <Element2 {project} />
            {/each}
          </div>
        {/if}
      </MediaQuery>
    </div>
  </div>
</section>

<a class="toTop hidden shadow" href="/projects#Top"
  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
    /></svg
  ></a
>

<style>
  section {
    align-items: start;
    padding: 0 1rem;
  }
  .heroSection {
    padding-top: 2rem;
  }
</style>
