<script setup lang="ts">
const route = useRoute();

type categoryDto = {
  id: string;
  name: string;
  pid: string | null;
};

const url = "http://localhost:3001/v1/category/get/" + route.params.id;

const { data: category } = await useFetch<categoryDto>(url);

const { data: categories } = await useFetch<categoryDto[]>(
  "http://localhost:3001/v1/category/get"
);

// Решение от fukushine
const categoriesTree = computed(() => categoriesLtree(categories.value))
</script>

<template>
  <h1>Редактировать категорию</h1>

  <Form :category="category" :categories="categoriesTree" />
</template>
