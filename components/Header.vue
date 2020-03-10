<template>
  <header class="header">
    <div class="wrapper">
      <nav class="navbar">
        <a class="logo" href="#">posts</a>
        <button class="button_menu">menu</button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #f8ff6e;
}

.navbar {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #191974;
  text-decoration: none;
  transition: 0.3s;
}

.logo:hover {
  opacity: 0.7;
}

.button_menu {
  background: none;
  padding: 3px 5px;
  border: 2px solid #191974;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #191974;
  transition: 0.3s;
}

.button_menu:hover {
  background-color: #ffdd00;
  cursor: pointer;
}
</style>
