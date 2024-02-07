<script lang="ts">
  import { onMount } from "svelte";
  import logo from "$lib/images/Arco.png";
  import { afterNavigate } from "$app/navigation";
  import "./Navbar.css";
  import "./ListAnimations.css";
  import "./NavContent.css";
  import Hamburger from "./Hamburger.svelte";

  onMount(() => {
    const backButtons = document.querySelectorAll(".cj-back-btn");
    const navContent = document.querySelector(".cj-nav-content") as HTMLElement;
    const mq = window.matchMedia("(max-width: 767px)");
    const navListItems = document.querySelectorAll(".cj-nav-content > ul > li");
    const navBar = document.getElementById("cj-globalnav") as HTMLElement;

    let isMobile = mq.matches;

    mq.addEventListener("change", (e) => {
      isMobile = e.matches;
    });

    for (let i = 1; i < navListItems.length; i++) {
      const li = navListItems[i];
      const hasSubmenu = li.classList.contains("has-submenu");
      let height = 0;
      if (hasSubmenu) {
        const submenu = navContent.querySelector(
          `[data-submenu="${i}"]`
        ) as HTMLElement;
        height = submenu.offsetHeight;
      }

      li.addEventListener("mouseover", () => {
        navContent.setAttribute("data-submenu", i.toString());
        navBar.style.setProperty("--nav-height", `${height}px`);
      });

      const a = li.querySelector("a");

      if (a && hasSubmenu) {
        a.addEventListener("click", (e) => {
          if (isMobile) {
            e.preventDefault();
            navContent.classList.add("page-right");
          }
        });
      }

      const menuState = document.getElementById(
        "cj-menustate"
      ) as HTMLInputElement;

      menuState.addEventListener("change", (e: any) => {
        if (!e.target?.checked) {
          setTimeout(() => {
            navContent.classList.remove("page-right");
          }, 500);
        }
      });
    }

    backButtons.forEach((button) => {
      button.addEventListener("click", () => {
        navContent.classList.remove("page-right");
      });
    });
  });

  afterNavigate(() => {
    const menuState = document.getElementById(
      "cj-menustate"
    ) as HTMLInputElement;

    if (menuState) {
      menuState.checked = false;
    }
  });
</script>

<input type="checkbox" name="cj-menustate" id="cj-menustate" />
<nav id="cj-globalnav">
  <div class="cj-content">
    <div class="cj-site-logo">
      <a href="/">
        <img src={logo} alt="ArcoLogo" />
      </a>
    </div>
    <div class="cj-header">
      <Hamburger />
    </div>
    <div class="cj-nav-content">
      <slot name="main-list" />
      <slot name="secondary-content" />
    </div>
  </div>
</nav>