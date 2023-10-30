<script setup lang="ts">
const route = useRoute();

type catDto = {
  id: number;
  name: string;
};

const url = "http://localhost:3001/v1/category/get/" + route.params.id;

const { data: category } = await useFetch<catDto>(url);
</script>

<template>
  <h1>Изменить категорию</h1>

  <p>ID: {{ $route.params.id }}</p>
  <p>Data: {{ category }}</p>

  <Form :category="category" />
</template>
