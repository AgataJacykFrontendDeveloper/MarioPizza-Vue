<template>
  <div class="div2">
    <button class="plus"><font-awesome-icon icon="fa-solid fa-plus" /></button>
  </div>
</template>

<style scoped>
button {
    background-color: #83e8f5;
  box-shadow: -3px 0 0 0 #048192, 3px 0 0 0 #048192, 0 -3px 0 0 #048192,
    0 3px 0 0 #048192, inset -4px 2px 1px 1px #7db3ba,
    inset -4px -2px 1px 1px #adf0f9, inset 4px 0px 1px 1px #adf0f9;
  height: 2rem;
  width: 2rem;
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
  position: absolute;
  left: 0;
  top: -5%;
  width: 100%;
  height: 113%;
  z-index: -1;
}
</style>
