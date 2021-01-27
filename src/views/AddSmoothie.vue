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
            <span class="chip"> {{ ing }} </span>
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
export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null,
      nextIngredient: null,
      ingredients: [],
      feedback: null,
    };
  },
  methods: {
    addSmoothie() {
      console.log(this.title);
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
</style>
