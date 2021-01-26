<template>
  <div class="home container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">
          {{ smoothie.title }}
        </h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip"> {{ ing }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      smoothies: [
        {
          title: 'Dev Brew',
          slug: 'dev-brew',
          ingredients: ['banana', 'coffee', 'milk'],
          id: '1',
        },
        {
          title: 'White Banana',
          slug: 'white-banana',
          ingredients: ['banana', 'vanilla', 'milk'],
          id: '2',
        },
        {
          title: 'Choko Crisp',
          slug: 'choko-crisp',
          ingredients: ['chokolate', 'coffee', 'milk'],
          id: '3',
        },
      ],
    };
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
</style>
