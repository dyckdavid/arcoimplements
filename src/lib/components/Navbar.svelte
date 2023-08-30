<script lang="ts">
  import { page } from "$app/stores";
  import logo from "$lib/images/Arco.png";
  import { afterNavigate } from "$app/navigation";
  import "./Navbar.css";
  import { onMount } from "svelte";

  let isMobile = false;

  /**
   * To calculate submenuHeight, use h = 30px * item + 50px
   *
   * TODO: Make this dynamic using proxies
   */
  const links = [
    {
      label: "Home",
      path: "/",
      expandable: false,
    },
    {
      label: "Products",
      path: "/products",
      expandable: true,
      submenuHeight: 200,
      submenu: [
        {
          label: "Tractor Implements",
          path: "/products/tractor-implements",
        },
        {
          label: "Hay Equipment",
          path: "/products/hay-equipment",
        },
        {
          label: "Lawn & Garden",
          path: "/products/lawn-garden",
        },
        {
          label: "Construction",
          path: "/products/construction",
        },
        {
          label: "Parts",
          path: "/products/parts",
        },
      ],
    },
    {
      label: "About",
      path: "/about",
      expandable: true,
      submenuHeight: 110,
      // getter
      submenu: [
        {
          label: "Our Story",
          path: "/about/our-story",
        },
        {
          label: "Our Team",
          path: "/about/our-team",
        },
      ],
    },
  ];

  afterNavigate(() => {
    const menuState = document.getElementById(
      "cj-menustate"
    ) as HTMLInputElement;

    if (menuState) {
      menuState.checked = false;
    }
  });

  onMount(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    isMobile = mq.matches;

    mq.addEventListener("change", (e) => {
      isMobile = e.matches;
    });

    const menuState = document.getElementById(
      "cj-menustate"
    ) as HTMLInputElement;

    menuState.addEventListener("change", (e: any) => {
      if (!e.target?.checked) {
        setTimeout(() => {
          expand = false;
          hoveredLabel = "";
        }, 500);
      }
    });
  });

  let expand = false;
  let submenuHeight = 0;
  let hoveredLabel = "";
</script>

<input type="checkbox" name="cj-menustate" id="cj-menustate" />
<nav
  id="cj-globalnav"
  class:expand
  on:mouseleave={() => {
    if (isMobile) return;

    expand = false;
    hoveredLabel = "";
  }}
  style="height: {expand ? submenuHeight + 53 : 53}px"
>
  <div class="cj-content">
    <div class="cj-site-logo">
      <a href="/">
        <img src={logo} alt="ArcoLogo" />
      </a>
    </div>
    <ul class="cj-header">
      <li class="cj-item cj-menuicon">
        <label class="cj-menuicon-label" for="cj-menustate">
          <span class="cj-menuicon-bread cj-menuicon-bread-top">
            <span class="cj-menuicon-bread-crust cj-menuicon-bread-crust-top" />
          </span>
          <span class="cj-menuicon-bread cj-menuicon-bread-bottom">
            <span
              class="cj-menuicon-bread-crust cj-menuicon-bread-crust-bottom"
            />
          </span>
        </label>
      </li>
    </ul>
    <ul class="cj-list">
      <li />
      {#each links as link}
        <li
          class="cj-item cj-item-menu"
          class:current-page={$page.url.pathname === link.path}
          on:mouseenter={() => {
            if (isMobile) return;

            if (link.expandable) {
              submenuHeight = link.submenuHeight || 200;
              expand = true;
              hoveredLabel = link.label;
            } else {
              expand = false;
              hoveredLabel = "";
            }
          }}
        >
          <a
            href={link.path}
            class="uppercase"
            on:click={(e) => {
              if (!isMobile) return;

              e.preventDefault();

              if (link.expandable) {
                expand = true;
                hoveredLabel = link.label;
              }
            }}>{link.label}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <div class="cj-submenu">
    {#each links as link}
      {#if link.expandable && link.submenu}
        <ul
          class="absolue w-full top-0 px-8 py-4 flex flex-col md:items-start items-center gap-2"
          class:hide={link.label !== hoveredLabel}
        >
          <li />
          {#if isMobile}
            <li class="cj-item cj-item-menu">
              <button
                class="uppercase"
                on:click={() => {
                  expand = false;
                  hoveredLabel = "";
                }}>&#8592; Back</button
              >
            </li>
          {/if}
          {#each link.submenu as submenu}
            <li class={isMobile ? "cj-item cj-item-menu" : ""}>
              <a href={submenu.path}>
                {submenu.label}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    {/each}
  </div>
</nav>

<style>
  .hide {
    display: none;
  }
</style>
