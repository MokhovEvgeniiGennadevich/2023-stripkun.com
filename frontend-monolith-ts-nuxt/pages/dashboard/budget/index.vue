<script setup lang="ts">
const { data: budget } = await useFetch<categoryDto[]>(
  "http://localhost:3001/v1/budget/get",
);
</script>

<template>
  <h1>Бюджет</h1>

  {{ budget }}

  <NuxtLink to="/dashboard/budget/create">Добавить</NuxtLink>
</template>
