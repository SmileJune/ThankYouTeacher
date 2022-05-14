<template>
  <header>
    <nav class="header-nav">
      <div>
        <router-link to="/">대전 4반 짱짱짱</router-link>
      </div>
      <div>
        <router-link to="/">HOME</router-link>
        <router-link to="/board">감사의인사</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
header {
  height: 70px;
  background-color: #ff1e1e7d;
  line-height: 70px;
  padding: 0px 30px;
}
.header-nav {
  display: flex;
  justify-content: space-between;
}
nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

a {
  padding: 10px;
}
</style>
