<script lang="ts">
  import MyPhoto from "$lib/akash.png";
  import Info from "$lib/info.json";
  import { onMount } from "svelte";
  import { initialLoad } from "./stores";
  import { gsap } from "gsap/dist/gsap";

  let run = true;

  onMount(() => {
    initialLoad.subscribe((data) => {
      if (data == true) {
        run = true;
      } else {
      }
    });

    setTimeout(() => {
      initialLoad.set(false);
      run = false;
    }, 1500);

    gsap.from(".myname", {
      y: 150,
      opacity: 0,
      delay: 1.5,
      duration: 0.8,
    });
    gsap.from(".tagline", {
      y: 150,
      opacity: 0,
      delay: 2,
      duration: 0.8,
    });

    const toTop = document.querySelector(".toTop");
    const height = window.innerHeight;

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > height / 2 ||
        document.documentElement.scrollTop > height / 2
      ) {
        toTop?.classList.remove("hidden");
      } else {
        toTop?.classList.add("hidden");
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const animation = document.querySelectorAll(".animation");
    animation.forEach((el) => {
      observer.observe(el);
    });
  });
</script>

<section id="Portfolio">
  <div class="heroSection">
    <h3 class="rem1p5 accent">
      Hi{#if run} <span class="wave">👋</span> {:else}, I'm{/if}
    </h3>
    <h1 class="rem5 lightFont myname">
      <strong class="accent">Akash</strong> Cuntur Shrinivasmurthy.
    </h1>
    <h1 class="rem3 tagline">
      Turning ideas into real life products is my calling.
    </h1>
    <p />
  </div>
</section>
<section id="About">
  <div class="heroSection">
    <h1 class="rem3 lightFont animation">Who am I?</h1>
    <div class="aboutMeContent">
      <p class="rem1p3 justify animation">
        Hello! I'm Akash, an engineer based in Bengaluru, India. I am passionate
        about bringing ideas to life and creating scalable projects that solve
        real-world problems. <br />

        As a developer, I thrive on coding and enjoy researching new
        technologies to stay at the forefront of innovation. I enjoy exploring
        technologies that I'm not familiar with and experimenting with new
        ideas. I believe that every challenge is an opportunity to learn and
        grow, which is why I take a hands-on approach to problem-solving and
        embrace new challenges with enthusiasm. <br />

        Outside of work, you can often find me hiking or motorbiking to explore
        the beautiful landscape around us. I also have a passion for
        <a
          class="specialLink rem1p3"
          href="https://www.instagram.com/ondu_yele/"
          target="_blank"
        >
          sketching and 3D art</a
        >, which helps me tap into my creative side and bring fresh perspectives
        to my work. <br />

        Recently, I've been hitting the gym to get in shape so that I can pursue
        my latest interest: rock climbing and bouldering. I love the thrill of
        pushing myself to new heights (literally!) and the challenge of finding
        new routes to conquer. <br /><br />

        I am always open to new opportunities and collaborations, and I'm
        excited to hear about your ideas and projects.
        <a class="specialLink rem1p3" href="#Contact">Let's work together</a>
        to turn your vision into a reality!<br /><br />
      </p>
      <img class="profilePhoto animation" src={MyPhoto} alt="" srcset="" />
    </div>
    <div class="skills animation">
      <p class="rem1p3">Technologies I'm comfortable with</p>
      <div class="skilltabs">
        {#each Info.skills as skill}
          <div class="skilltab">{skill}</div>
        {/each}
      </div>
    </div>
  </div>
</section>
<section id="Project">
  <div class="heroSection">
    <h1 class="rem3 lightFont animation">Some Ideas brought to life.</h1>
    <div class="featuredProjects">
      {#each Info.projects as project}
        <div class="project {project.align}  animation">
          <div class="banner" />
          <div class="info">
            <div class="name">
              <h1 class="lightFont">{project.name}</h1>
            </div>
            <div class="card">
              <p class="rem1p3">{@html project.description}</p>
            </div>
            <div class="links">
              {#if project.link.main.show}
                {#if project.link.main.redirect}
                  <a href={project.link.main.link} target="_blank">
                    <svg
                      class="clickable"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      /></svg
                    >
                  </a>
                {:else}
                  <a href={project.link.main.link}>
                    <svg
                      class="clickable"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      ><title>External Link</title>
                      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      /></svg
                    >
                  </a>
                {/if}
              {/if}

              {#if project.link.github.show}
                <a href={project.link.github.link} target="_blank">
                  <svg
                    class="github clickable"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    ><title>GitHub</title>
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    /></svg
                  >
                </a>
              {/if}

              {#each project.link.other as other}
                {#if other.show}
                  <div>
                    {#if other.redirect}
                      <a class="otherLinks" href={other.link} target="_blank"
                        >{other.name}</a
                      >
                    {:else}
                      <a class="otherLinks" href={other.link}>{other.name}</a>
                    {/if}
                  </div>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div style="padding-top: 2rem;">
      <a href="/projects" class="specialLink"
        ><p class="rem1p3">Check out the archive.</p></a
      >
    </div>
  </div>
</section>
<section id="Contact">
  <div class="heroSection">
    <h1 class="rem3 lightFont">Get in touch.</h1>
    <div>
      <p class="rem1p3 justify">
        My inbox is always open! Whether you have a question, want to say hi, or
        have an idea you're eager to bring to life, I'm here to help. I'm
        passionate about turning ideas into reality, and I'm excited to
        collaborate with you on your projects. Please don't hesitate to reach
        out to me through the contact options provided. I'll do my best to
        respond promptly and discuss how we can work together to bring your
        ideas to life. Looking forward to connecting with you!
      </p>
      <div class="contacts animation">
        <a
          class="otherLinks morePadding"
          href="mailto:akashchandrashekar13@gmail.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            /></svg
          >
          <p class="rem1p3">akashchandrashekar13@gmail.com</p></a
        >
        <a
          class="otherLinks morePadding"
          href="https://github.com/akash-cs13/"
          target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            /></svg
          >
          <p class="rem1p3">GitHub</p></a
        >
        <a
          class="otherLinks morePadding"
          href="https://www.linkedin.com/in/akash-cs-44997914b/"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            /></svg
          >
          <p class="rem1p3">LinkedIn</p></a
        >
      </div>
    </div>
  </div>
</section>
<a class="toTop hidden shadow" href="#Portfolio"
  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
    /></svg
  ></a
>

<style>
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
</style>
