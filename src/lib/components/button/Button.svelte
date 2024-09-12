<script lang="ts">
  export let text = '';
  export let link = '';
</script>

<div>
  <a class="button button-request" href={link}>
    <span>
      {text}
    </span>
    
    
   </a>
</div>

<style>
  .button.button-request {
        width: 20.2rem;
        height: 4.1rem;
        cursor: pointer;


    }

    .button {
    caret-color: transparent;
    height: 5.2rem;
    width: 20.2rem;
    display: flex;
    align-items: center;
    color: var(--color-white);
    font-size: var(--font-16);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    
}

a, a:hover, a:focus {
    text-decoration: none;
    outline: none;
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease;
    box-shadow: none;
}

    a {
      outline: none;
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease;
    box-shadow: none;
    font-size: 50px;
    }

    .button.button-request span {
    width: 96.6%;
    clip-path: polygon(0 0, 87% 0, 100% 100%, 0% 100%);
}

.button span {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: var(--color-blacktwo);
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 19.3rem;
    padding-left: 2.6rem;
    padding-right: 2.6rem;
    transition-duration: 0.4s;
}
.button:after {
    clip-path: polygon(5% 1%, 100% 0, 100% 100%, 88% 100%);
    content: " ";
    top: 0;
    position: absolute;
    right: 2px;
    width: 3.1rem;
    height: 100%;
    background-color: var(--color-orange);
    display: block;
    transition-duration: 0.4s;
}

.button:hover span {
  background-color: var(--color-orange);
}

.button:hover::after {
  background-color: var(--color-black);
}

:root {
    --font-base: 'Raleway', sans-serif;
    --font-headings: 'Roboto Condensed', sans-serif;
    --font-monts: 'Montserrat', sans-serif;
    --color-white: #FFF;
    --color-body: #555555;
    --color-orange: #F07A33;
    --color-black: #3A3F3E;
    --color-blacktwo: #232424;
    --font-64: 6.4rem;
    --font-45: 4.5rem;
    --font-40: 4rem;
    --font-30: 3rem;
    --font-35: 3.5rem;
    --font-20: 2rem;
    --font-18: 1.8rem;
    --font-17: 1.7rem;
    --font-16: 1.6rem;
    --font-14: 1.4rem;
    --line-28: 2.8rem;
    --transition: transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease;
}

@media (max-width: 991px) {
    .button.button-request:after {
        width: 2.8rem;
    }
}

@media (max-width: 991px) {
    .button:after {
        width: 2rem;
        clip-path: polygon(-5% 1%, 100% 0, 100% 100%, 88% 100%);
    }
}



  </style>