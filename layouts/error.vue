<template>
  <section class="error-page">
    <div class="error-page__error"><span>404</span></div>
    <nuxt-link class="link" to="/">Home</nuxt-link>
  </section>
</template>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.error-page__error {
  padding-top: 100px;
  font-size: 100px;
  color: #000;
}

.link {
  color: #191974;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 20px;
  font-size: 30px;
  text-decoration: none;
  transition: 0.3s;
}

.link:hover {
  color: #000;
}
</style>
