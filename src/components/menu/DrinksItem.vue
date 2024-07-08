<template>
  <li>
    <div class="parent">
      <div class="div1">
        <h3>{{ id }} <img :src="type" /></h3>
        <p class="menu">{{ cost }}$</p>
      </div>
    <AddButton />
    </div>
  </li>
</template>

<script>
import AddButton from "../UI/PlusButton.vue"

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
components: {
    AddButton,
}
};
</script>

<style scoped>
h3 {
  margin-bottom: 0.5rem;
}
</style>
