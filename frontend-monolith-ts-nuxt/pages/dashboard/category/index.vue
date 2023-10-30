<script setup lang="ts">
const { data } = await useFetch("http://localhost:3001/v1/ping");
</script>

<template>
  <h1>Статьи дохода и расхода</h1>
  <NuxtLink to="/dashboard/category/create">Добавить</NuxtLink>

  <ul>
    <li>ping: {{ data }}</li>
  </ul>
</template>
