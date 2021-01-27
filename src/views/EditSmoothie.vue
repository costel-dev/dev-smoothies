<template>
  <div class="edit-smoothie container" v-if="smoothie">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title" />
      </div>
      <div
        class="field"
        v-for="(ing, index) in smoothie.ingredients"
        :key="index"
      >
        <label for="ingredient">Ingredient:</label>
        <input
          type="text"
          name="ingredient"
          v-model="smoothie.ingredients[index]"
        />
        <i class="material-icons delete" @click="deleteIngredient(index)"
          >delete</i
        >
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

      <div class="field center-align">
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config';
import { createSlug } from '../utils/createSlug';

export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null,
      nextIngredient: null,
      feedback: null,
    };
  },
  created() {
    let ref = projectFirestore
      .collection('smoothies')
      .where('slug', '==', this.$route.params.smoothie_slug);
    ref
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.smoothie = doc.data();
          this.smoothie.id = doc.id;
        });
      })
      .catch((err) => console.log(err));
  },
  methods: {
    editSmoothie() {
      if (this.smoothie.title) {
        this.feedback = null;
        // create a slug
        this.smoothie.slug = createSlug(this.smoothie.title);
        // adding to our firestore
        projectFirestore
          .collection('smoothies')
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug,
          })
          .then(() => this.$router.push({ name: 'Home' }))
          .catch((err) => console.log(err.message));
      } else {
        this.feedback = 'You must enter a Smoothie title';
      }
    },
    addIngredient() {
      if (this.nextIngredient) {
        this.smoothie.ingredients.push(this.nextIngredient);
        this.nextIngredient = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter an ingredient';
      }
    },
    deleteIngredient(index) {
      return this.smoothie.ingredients.splice(index, 1);
    },
  },
};
</script>

<style>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 400px;
}
.edit-smoothie h3 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
.edit-smoothie .delete:hover {
  color: crimson;
}
</style>
