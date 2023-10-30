<script setup lang="ts">
type catDto = {
  id: number;
  name: string;
};

const { pending, data: categories } = await useFetch<catDto[]>(
  "http://localhost:3001/v1/category/get"
);
</script>

<template>
  <h1>Статьи дохода и расхода</h1>
  <NuxtLink to="/dashboard/category/create">Добавить</NuxtLink>

  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div v-for="category in categories" class="list">
      <div>{{ category.name }}</div>
      <div>
        <NuxtLink :to="`/dashboard/category/edit/${category.id}`"
          >[edit]</NuxtLink
        >
      </div>
      <div>[delete]</div>
    </div>
  </div>
</template>

<style>
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
