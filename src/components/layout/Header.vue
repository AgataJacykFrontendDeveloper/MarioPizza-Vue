<template>
  <header>
    <h1>Marios Pizza</h1>
    <nav>
      <button><router-link to="/">Home</router-link></button
      ><button><router-link to="/AboutUs">About Us</router-link></button
      ><button><router-link to="/Menu">Menu</router-link></button
      ><button><router-link to="/ContactUs">Contact Us</router-link></button>
    </nav>
    <img src="\images\Mario.gif" alt="Mario colecting coin from delivery" />
  </header>
</template>

<script>
export default {
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style scoped>
button {
  margin: 1rem;
  background: #83e8f5;
  border: 0px;
  box-shadow: inset -4px 2px 1px 1px grey, inset -4px -2px 1px 1px lightgray,
    inset 4px 0px 1px 1px lightgray;
  color: white;
  font-family: "VT323", monospace;
  font-size: 0.5rem;
  height: 3rem;
  position: relative;
  text-shadow: 1px 1px 0 #131212, 
  1px -1px 0 #131212, 
  -1px 1px 0 #131212,
    -1px -1px 0 #131212, 
    1px 0px 0 #131212, 
    0px 1px 0 #131212,
    -1px 0px 0 #131212, 
    0px -1px 0 #131212;
  --c: #8deaf7;
  width: 12rem;
}
button:hover {
  cursor: pointer;
  background-color: #06a6bc;
}

button:active {
  top: 5px;
  box-shadow: -4px 2px 1px 1px grey, -4px -2px 1px 1px lightgray,
    4px 0px 1px 1px lightgray;
}

button::before {
  content: "";
  background: #048192;
  position: absolute;
  left: 0;
  top: -5%;
  width: 100%;
  height: 113%;
  z-index: -1;
}

button::after {
  content: "";
  background: #048192;
  position: absolute;
  left: -2.5%;
  top: 0;
  width: 105%;
  height: 100%;
  z-index: -1;
}
h1 {
  margin-top: 0%;
  margin-bottom: 0%;
}
img {
  display: block;
  margin: auto;
}
nav {
  display: flex;
  justify-content: center;
}

.dark button {
  background-color: #37306B;
    box-shadow:   -1px 0 0 0 #231d4a,
  1px 0 0 0 #231d4a,
  0 -1px 0 0 #231d4a,
  0 1px 0 0 #231d4a,
  inset -4px 2px 1px 1px #383261,
  inset -4px -2px 1px 1px #362d76,
  inset 4px 0px 1px 1px #362d76; 
}

.dark button:hover {
  background-color: #231d4a;
}

.dark button:active {
  top: 5px;
  box-shadow: -4px 2px 1px 1px #231d4a, -4px -2px 1px 1px #362d76,
    4px 0px 1px 1px #362d76;
}

.dark button::before {
  background: #362d76;
}

.dark button::after {
  background: #362d76;
}
</style>
