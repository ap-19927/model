<script setup>
const colorMode = useColorMode()
</script>

<template>
  <header>
    <nav>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </nav>
  </header>
</template>

<style>
nav {
  float: right;
}
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode a {
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
img {
    max-width: 100%;
    min-width: 300px;
    height: auto;
}
</style>
