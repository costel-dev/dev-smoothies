<template>
  <div class="home container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)"
          >delete</i
        >
        <h2 class="indigo-text">
          {{ smoothie.title }}
        </h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip"> {{ ing }} </span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link
          :to="{
            name: 'EditSmoothie',
            params: { smoothie_slug: smoothie.slug },
          }"
        >
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config';

export default {
  name: 'Home',
  data() {
    return {
      smoothies: [],
    };
  },
  created() {
    // fetch data from our firestore
    projectFirestore
      .collection('smoothies')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    deleteSmoothie(id) {
      // delete doc from our firestore
      projectFirestore
        .collection('smoothies')
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies
            .filter((smoothie) => smoothie.id !== id)
            .catch((err) => console.log(err.message));
        });
    },
  },
};
</script>

<style>
.home {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.card-content {
  width: 400px;
}
.home h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.home .ingredients {
  margin: 30px auto;
}
.home .ingredients li {
  display: inline-block;
}
.home .delete {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
.home .delete:hover {
  color: crimson;
}
</style>
