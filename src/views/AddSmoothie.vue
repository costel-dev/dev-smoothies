<template>
  <div class="add-smoothie container">
    <h3 class="center-align indigo-text">Add New Smoothie Recipe</h3>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add ingredient:</label>
        <input
          type="text"
          name="add-ingredient"
          @keydown.tab.prevent="addIngredient"
          v-model="nextIngredient"
        />
        <p class="feedback">{{ feedback }}</p>
      </div>
      <div class="field">
        <ul class="ingredients">
          <li v-for="(ing, index) in ingredients" :key="index">
            <span class="chip">
              {{ ing }}
              <span class="delete-ing" @click="deleteIngredient(index)">x</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config';
import { createSlug } from '../utils/createSlug';

export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null,
      nextIngredient: null,
      ingredients: [],
      feedback: null,
      slug: null,
    };
  },
  methods: {
    addSmoothie() {
      if (this.title) {
        this.feedback = null;
        // create a slug
        this.slug = createSlug(this.title);
        // adding to our firestore
        projectFirestore
          .collection('smoothies')
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug,
          })
          .then(() => this.$router.push({ name: 'Home' }))
          .catch((err) => console.log(err.message));
      } else {
        this.feedback = 'You must enter a Smoothie title';
      }
    },
    addIngredient() {
      if (this.nextIngredient) {
        this.ingredients.push(this.nextIngredient);
        this.nextIngredient = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter an ingredient';
      }
    },
    deleteIngredient(index) {
      return this.ingredients.splice(index, 1);
    },
  },
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 400px;
}
.add-smoothie h3 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
}
.add-smoothie .field .ingredients li {
  display: inline-block;
}
.add-smoothie .field .feedback {
  color: red;
  font-size: 0.8em;
}
.add-smoothie .field .delete-ing {
  cursor: pointer;
  margin: 0 5px;
}
</style>
