<script lang="ts">
  import "./svelteify.css";
  import Icon from "$lib/projects/svelteify/icon.png";
  import Image1 from "$lib/projects/svelteify/image (1).png";
  import Image2 from "$lib/projects/svelteify/image (2).png";
  import Image3 from "$lib/projects/svelteify/image (3).png";
  import Image4 from "$lib/projects/svelteify/image (4).png";
  import Image5 from "$lib/projects/svelteify/image (5).png";
  import Image6 from "$lib/projects/svelteify/image (6).png";
  import PwaLogo from "$lib/projects/svelteify/pwa.png";
  import Pwa1Logo from "$lib/projects/svelteify/pwa1.png";
  import Pwa2Logo from "$lib/projects/svelteify/pwa2.png";
  import Bgplay1Logo from "$lib/projects/svelteify/bgplay1.png";
  import Bgplay2Logo from "$lib/projects/svelteify/bgplay2.png";
  import GithubLogo from "$lib/projects/svelteify/github.png";
  import SvelteKitLogo from "$lib/projects/svelteify/sveltekit.png";
  // import SvelteLogo from "$lib/projects/svelteify/svelte.png";
  // import TypescriptLogo from "$lib/projects/svelteify/typescript.png";
  // import CssLogo from "$lib/projects/svelteify/css.png";
  import FirestoreDatabaseLogo from "$lib/projects/svelteify/fdatabase.png";
  import FirestoreStorageLogo from "$lib/projects/svelteify/fstorage.png";
  import FirebaseLogo from "$lib/projects/svelteify/firebase.png";
  import IndexedDBLogo from "$lib/projects/svelteify/indexeddb.png";
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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

<section id="#Top">
  <div class="heroSection2">
    <div class="heroName">
      <img class="heroIcon" src={Icon} alt="🟢" srcset="" />
      <h1>
        <strong class="lightFont">SVELTE</strong>IFY
      </h1>
    </div>
    <div class="empty" />
    <div class="images">
      <img
        class="image animation"
        style="transition-delay: 1000ms"
        src={Image1}
        alt="🪲"
        srcset=""
      />
      <img
        class="image animation"
        style="transition-delay: 800ms"
        src={Image3}
        alt="🪲"
        srcset=""
      />
      <img
        class="image animation"
        style="transition-delay: 600ms"
        src={Image2}
        alt="🪲"
        srcset=""
      />
    </div>
  </div>
</section>
<div class="empty2" />
<section>
  <div
    class="heroSection"
    style="    z-index: 1;
  background-color: var(--background-color);"
  >
    <div class="innerSection">
      <h1 class="rem5 lightFont">Overview</h1>
      <p class="rem1p3">
        Svelteify is a PWA music player that allows users to upload their
        favorite songs and listen to them offline, thanks to its use of
        IndexedDB for audio storage. With Svelteify, users can enjoy their
        favorite music anytime, anywhere, even without an internet connection.
        The app also features a unique functionality that displays song lyrics
        synchronized with the audio playback, enhancing the listening
        experience. Built with modern web technologies like SvelteKit and
        Firebase for seamless audio storage and retrieval, Svelteify offers a
        seamless and immersive music streaming experience with offline access
        capabilities.
      </p>
    </div>
    <div class="innerSection">
      <h1 class="rem5 lightFont">Tech stack</h1>
      <div class="techStack">
        <div
          class="specialcard firebase animation"
          style="transition-delay: 100ms;"
        >
          <div class="cardheading">
            <div>
              <h2 class="rem1p5 lightFont">Front-end</h2>
            </div>
          </div>
          <div class="cardheading">
            <div>
              <img src={SvelteKitLogo} alt="" srcset="" />
            </div>
            <div>
              <h2 class="rem1p5">SvelteKit</h2>
            </div>
          </div>
        </div>

        <div
          class="specialcard firebase animation"
          style="transition-delay: 200ms;"
        >
          <div class="cardheading">
            <div>
              <h2 class="rem1p5 lightFont">Database</h2>
            </div>
          </div>
          <div class="cardheading">
            <div>
              <img src={FirestoreDatabaseLogo} alt="" srcset="" />
            </div>
            <div>
              <h2 class="rem1p5">Firestore Database</h2>
            </div>
          </div>
        </div>

        <div
          class="specialcard firebase animation"
          style="transition-delay: 300ms;"
        >
          <div class="cardheading">
            <div>
              <h2 class="rem1p5 lightFont">Cloud Stroage</h2>
            </div>
          </div>
          <div class="cardheading">
            <div>
              <img src={FirestoreStorageLogo} alt="" srcset="" />
            </div>
            <div>
              <h2 class="rem1p5">Firestore Storage</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="accentSection">
  <div class="heroSection">
    <div class="empty" />
    <div class="design">
      <h1 class="rem5 darkFont">Design</h1>
      <p class="rem1p3 darkFont">
        Heavily inspired from
        <strong>
          <a
            class="specialLink rem1p3 darkFont"
            href="https://www.figma.com/community/file/976054929108031412?comment=1225042566919312681"
            target="_blank">Sumit Singh's</a
          >
        </strong>
        design, Svelteify boasts easy navigation, clear icons, and smooth transitions.
        Check out there complete design
        <strong>
          <a
            href="https://www.figma.com/file/r5WY6m5OGDc9aGIJGfY8yo/pwa-music?node-id=0%3A1&t=Q2rgQIyXUMh4t6b9-1"
            class="specialLink rem1p3 darkFont"
            target="_blank">here.</a
          >
        </strong>
      </p>
    </div>
    <div class="empty" />
    <div class="features">
      <h1 class="rem5 darkFont">Features</h1>
      <div class="featuresList">
        <div class="specialcard animation">
          <div class="cardheading">
            <div>
              <img src={PwaLogo} alt="" srcset="" />
            </div>
          </div>
          <div class="cardcontent">
            <p class="rem1p3 lightFont">Install as an app.</p>
            <div class="cardcontentImages2 changeLater">
              <img class="shadow" src={Pwa2Logo} alt="" />
              <img class="shadow" src={Pwa1Logo} alt="" />
            </div>
          </div>
        </div>

        <div class="specialcard animation">
          <div class="cardheading">
            <div>
              <img src={FirebaseLogo} alt="" srcset="" />
            </div>
          </div>
          <div class="cardcontent">
            <p class="rem1p3 lightFont">
              Upload music and listen to it from Firebase.
            </p>
            <div class="cardcontentImages">
              <img src={Image5} alt="" />
              <img src={Image6} alt="" />
            </div>
          </div>
        </div>

        <div class="specialcard animation">
          <div class="cardheading">
            <div>
              <img src={IndexedDBLogo} alt="" srcset="" />
            </div>
          </div>
          <div class="cardcontent">
            <p class="rem1p3 lightFont">
              Download songs and save it to IndexedDB.
            </p>
            <div class="cardcontentImages">
              <img src={Image1} alt="" />
              <img src={Image4} alt="" />
            </div>
          </div>
        </div>

        <div class="specialcard animation">
          <div class="cardheading">
            <div>
              <img src={SvelteKitLogo} alt="" srcset="" />
            </div>
          </div>
          <div class="cardcontent">
            <p class="rem1p3 lightFont">
              Uplaod a .lrc file, and get real-time lyrics.
            </p>
            <div class="cardcontentImages">
              <img src={Image5} alt="" />
              <img src={Image3} alt="" />
            </div>
          </div>
        </div>

        <div class="specialcard animation">
          <div class="cardheading">
            <div>
              <img src={Icon} alt="" srcset="" />
            </div>
          </div>
          <div class="cardcontent">
            <p class="rem1p3 lightFont">
              Play and control music in the background.
            </p>
            <div class="cardcontentImages2">
              <img src={Bgplay1Logo} alt="" />
              <img src={Bgplay2Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section style="align-items: center;">
  <div class="heroSection">
    <h1 class="rem5 lightFont">Try now.</h1>
    <div class="svelteifyLinks">
      <a
        class="animation"
        href="https://mymusicapp-three.vercel.app/"
        target="_blank"
        ><div>
          <img src={Icon} alt="" />
          <h1 class="rem1p5"><strong>SVELTE</strong>IFY</h1>
        </div></a
      >
      <a
        class="animation"
        href="https://github.com/akash-cs13/pwa-music"
        target="_blank"
      >
        <div>
          <img src={GithubLogo} alt="" />
          <h1 class="rem1p5"><strong>Code</strong></h1>
        </div>
      </a>
    </div>
  </div>
</section>

<a class="toTop hidden shadow" href="/projects/svelteify#Top"
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

  .empty {
    height: 10vh;
  }

  .empty2 {
    height: 50vh;
  }
  .heroSection2 {
    padding-top: 2rem;
    min-height: calc(100vh - calc(5rem + 2rem));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .heroName {
    padding-top: 30vh;
    display: flex;
    font-size: 5rem;
    gap: 2rem;
  }

  .heroIcon {
    max-width: 6.2rem;
    max-height: 6.2rem;
  }

  .images {
    display: grid;

    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(3, 2rem) auto;
  }

  .images img:nth-child(1) {
    grid-row-start: 3;
    grid-column-start: 10;
    grid-column-end: 15;
  }
  .images img:nth-child(2) {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 6;
  }
  .images img:nth-child(3) {
    grid-row-start: 1;
    grid-column-start: 5;
    grid-column-end: 11;
  }

  .image {
    width: 100%;
  }

  @media (max-width: 700px) {
    .heroName {
      font-size: 3rem;
    }

    .heroIcon {
      max-width: 4.2rem;
      max-height: 4.2rem;
    }
  }

  @media (max-width: 600px) {
    .images {
      grid-template-rows: repeat(3, 1rem) auto;
    }
    .empty2 {
      height: 30vh;
    }
  }

  @media (max-width: 440px) {
    .empty2 {
      height: 1vh;
    }

    .heroName {
      padding-top: 5vh;
      font-size: 2rem;
      gap: 1rem;
    }
    .empty {
      height: 25vh;
    }

    .heroIcon {
      max-width: 3rem;
      max-height: 3rem;
    }
  }

  @media (max-width: 310px) {
    .heroName {
      padding-top: 2rem;
      font-size: 1.5rem;
      gap: 1rem;
    }

    .heroIcon {
      max-width: 2rem;
      max-height: 2rem;
    }
  }
</style>
