<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button class="dark-mode-btn" @click="toggleDark()">
    <img class="dark-mode-icon" src="/images/darkMode.png">
  </button>
</template>

<style>
.dark body {
  background-image: url('/images/darkbackground.png');
  color: #fff;
}

.dark a {
  background: 
    conic-gradient(from -135deg at 100%  50%,#9E4784  90deg,#9E4784 0) 0    var(--p,0%),
    conic-gradient(from -135deg at 1.2em 50%,#9E4784 90deg,#9E4784  0) 100% var(--p,0%),
    var(--c);
  -webkit-background-clip: text;
          background-clip: text;
  background-size: var(--s, 0%) 200%;
  background-repeat: no-repeat;
  position: relative;
  transition: .4s ease-in, background-position 0s;
}
.dark a:before {
  inset:0;
  z-index:-1;
  background: 
    conic-gradient(from -135deg at 100%  50%,#9E4784 90deg,#9E4784 0) 0    var(--p,0%),
    conic-gradient(from -135deg at 1.2em 50%,#9E4784 90deg,#9E4784 0) 100% var(--p,0%);
  background-size: inherit;
  background-repeat: no-repeat;
}

.dark a:hover {
  --p: 100%;
   /* it should be .6em (1.2em/2) but we use a litte bigger to avoid gaps */
  --s: calc(50% + .61em);
}

.dark .cart {
  background-color: #37306B;
  box-shadow:   -4px 0 0 0 #231d4a,
  4px 0 0 0 #231d4a,
  0 -4px 0 0 #231d4a,
  0 4px 0 0 #231d4a,
  inset -4px 2px 1px 1px #1c1934,
  inset -4px -2px 1px 1px #4c438e,
  inset 4px 0px 1px 1px #4c438e; 
}

.dark .dark-mode-btn {
  background-color: #37306B;
  box-shadow:   -4px 0 0 0 #231d4a,
  4px 0 0 0 #231d4a,
  0 -4px 0 0 #231d4a,
  0 4px 0 0 #231d4a,
  inset -4px 2px 1px 1px #1c1934,
  inset -4px -2px 1px 1px #4c438e,
  inset 4px 0px 1px 1px #4c438e; 
}

.dark div.box { 
    background-color: #37306B;
    box-shadow:   -10px 0 0 0 #231d4a,
  10px 0 0 0 #231d4a,
  0 -10px 0 0 #231d4a,
  0 10px 0 0 #231d4a,
  inset -4px 2px 1px 1px #1c1934,
  inset -4px -2px 1px 1px #4c438e,
  inset 4px 0px 1px 1px #4c438e; 
}

.dark h1,
.dark h2,
.dark h3,
.dark a { 
    color: #cecece;
    text-shadow:
    1px 1px 0 #131212,
      1px -1px 0 #131212,
      -1px 1px 0 #131212,
      -1px -1px 0 #131212,
      1px 0px 0 #131212,
      0px 1px 0 #131212,
      -1px 0px 0 #131212,
      0px -1px 0 #131212,
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #cecece,
    0 0 42px #9E4784,
    0 0 82px #9E4784,
    0 0 92px #9E4784,
    0 0 102px #9E4784,
    0 0 151px #9E4784;
}


.dark-mode-icon {
    width: 2rem;
}
.dark .plus {
background-color: #D27685;
  box-shadow: -3px 0 0 0 #9E4784, 3px 0 0 0 #9E4784, 0 -3px 0 0 #9E4784,
    0 3px 0 0 #9E4784, inset -4px 2px 1px 1px #E49393,
    inset -4px -2px 1px 1px #FFACAC;
} 

.dark .plus:hover {
  background-color: #9E4784;
}

</style>