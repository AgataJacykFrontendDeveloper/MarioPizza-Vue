<template>
    <h2>Menu</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at. Eu sem integer vitae justo eget magna fermentum iaculis eu.</p>
    <h3>Pizza Menu</h3>
  <ul>
    <menu-item
      v-for="pizza in pizzas"
      :key="pizza.id"
      :id="pizza.id"
      :type="pizza.type"
      :ingrediens="pizza.ingrediens"
      :cost="pizza.cost"
    ></menu-item>
    </ul>
    <ul>
    <h3>Drinks</h3>
    <drinks-item v-for="drink in drinks"
    :key="drink.id"
    :id="drink.id"
    :type="drink.type"
    :cost="drink.cost"
    ></drinks-item>
</ul>
</template>

<script>
import MenuItem from "./menu/MenuItem.vue";
import DrinksItem from "./menu/DrinksItem.vue";
import beer from "../assets/icons/beer.png"
import cheese from "../assets/icons/cheese.png"
import chicken from "../assets/icons/chicken.png"
import fish from "../assets/icons/fish.png"
import pepper from "../assets/icons/pepperRed.png"
import tomato from "../assets/icons/tomato.png"
import wine from "../assets/icons/wine.png"


export default {
  name: "MenuPage",
  components: {
    DrinksItem,
    MenuItem,
  },

  data() {
    return {
      pizzas: [
        {
          id: "Margherita",
          type: tomato,
          ingrediens: "tomato sauce, cheese, basil",
          cost: 15,
        },
        {
          id: "Capriciosa",
          type: chicken,
          ingrediens: "tomato sauce, mozzarella, ham, champignons",
          cost: 20,},
        {
          id: "Vegetariana",
          type: tomato,
          ingrediens: "tomato sauce, mozzarella, corn, cherry tomatoes, pepper, onion, oregano",
          cost: 20,
        },
        {
          id: "Pepperoni",
          type: chicken,
          ingrediens: "tomato sauce, double mozzarella, double pepperoni sausage",
          cost: 23,
        },
        {
          id: "Pescada",
          type: fish,
          ingrediens: "tomato sauce, cheese, salmon, shrimps, ",
          cost: 25,
        },
        {
          id: "Anchois",
          type: fish,
          ingrediens: "tomato sauce, cheese, anchois, onion, olives ",
          cost: 25.5,
        },
        {
          id: "Diavola",
          type: pepper,
          ingrediens: "tomato sauce, mozzarella, pepperoni sausage, onion, jalapeno peppers",
          cost: 26,
        },
        {
          id: "Contadina",
          type: chicken,
          ingrediens: "tomato sauce, mozzarella, roasted chicken, onion, corn",
          cost: 26,
        },
        {
          id: "Veggie",
          type: tomato,
          ingrediens: "tomato sauce, mozzarella, spinach, onion, champignons, black olives, greek cheese, cherry tomatoes",
          cost: 28.5,
        },
        {
          id: "Quattro Cheese",
          type: cheese,
          ingrediens: "cream sauce, cheeses: mozzarella, cheddar, ementaler, blue cheese",
          cost: 30,
        },
        {
          id: "Chicken Luigi",
          type: chicken,
          ingrediens: "cream sauce, spinach, sun-dried tomatoes, mozzarella, roasted chicken, blue cheese",
          cost: 32,
        }
      ],
      drinks: [
        {
        id: "Beer",
        type: beer,
        cost: 5,
        },
        {
        id:"Wine",
        type: wine,
        cost: 15,
        }
      ]
    };
  },
};
</script>

