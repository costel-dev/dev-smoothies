<template>
  <div class="navbar">
    <nav class="nav-extended indigo">
      <div class="nav-content">
        <router-link :to="{ name: 'Home' }">
          <span class="nav-title">
            Dev <span class="material-icons">local_drink</span> Smoothies
          </span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{ name: 'AddSmoothie' }">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
  margin-bottom: 50px;
}
</style>
