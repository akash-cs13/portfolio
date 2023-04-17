<script lang="ts">
  import { onMount } from "svelte";
  import MediaQuery from "./MediaQuery.svelte";
  import "./styles.css";
  import { afterNavigate, beforeNavigate } from "$app/navigation";

  let toggle = "close";
  let root: any;

  const navlinks = [
    {
      name: "Home",
      link: "/#Portfolio",
    },
    {
      name: "About",
      link: "/#About",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/#Contact",
    },
  ];

  onMount(() => {
    root = document.getElementsByTagName("html")[0];
    root?.classList.add("smoothscroll");

    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        navbar?.classList.add("navbarHidden");
        if ((toggle = "open")) {
          toggle = "close";
        }
      } else {
        navbar?.classList.remove("navbarHidden");
      }
      lastScrollY = window.scrollY;
    });
  });

  beforeNavigate(() => {
    root?.classList.remove("smoothscroll");
  });
  afterNavigate(() => {
    root?.classList.add("smoothscroll");
  });
</script>

<MediaQuery query="(min-width: 601px)" let:matches>
  {#if matches}
    <nav class="navbar shadow">
      <div class="navbarContents">
        <div class="navbarLinks">
          {#each navlinks as link}
            <a class="specialLink" href={link.link}
              ><h2 class="rem1p3">{link.name}</h2></a
            >
          {/each}
        </div>
      </div>
    </nav>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 600px)" let:matches>
  {#if matches}
    <div class="navbutton shadow {toggle}">
      <button
        id="hamburger"
        class={toggle}
        on:click={() => {
          if (toggle == "close") {
            toggle = "open";
          } else {
            toggle = "close";
          }
        }}
      >
        <span />
        <span />
        <span />
        <span />
      </button>
    </div>

    <div class="sidebar {toggle}">
      {#each navlinks as link}
        <button
          style="padding: 1rem 0rem"
          on:click={() => {
            toggle = "close";
          }}
        >
          <a class="specialLink" href={link.link}
            ><h2 class="rem1p5">{link.name}</h2></a
          >
        </button>
      {/each}
    </div>
  {/if}
</MediaQuery>
<slot />

<style>
  @font-face {
    font-family: "Calibre";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/Calibre/Calibre-Light.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: italic;
    font-weight: 300;
    src: url("/fonts/Calibre/Calibre-LightItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Calibre/Calibre-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: italic;
    font-weight: 400;
    src: url("/fonts/Calibre/Calibre-RegularItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Calibre/Calibre-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: italic;
    font-weight: 500;
    src: url("/fonts/Calibre/Calibre-MediumItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Calibre/Calibre-Semibold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Calibre";
    font-style: italic;
    font-weight: 600;
    src: url("/fonts/Calibre/Calibre-SemiboldItalic.ttf") format("truetype");
  }
</style>
