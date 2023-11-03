<script setup lang="ts">
type categoryDto = {
  id: string;
  name: string;
  pid: string | null;
};

const { data: categories } = await useFetch<categoryDto[]>(
  "http://localhost:3001/v1/category/get"
);

// const categoriesTree = categoriesLtree(categories.value);

// Решение от fukushine
const categoriesTree = computed(() => categoriesLtree(categories.value))
</script>

<template>
  <h1>Статьи дохода и расхода</h1>

  <NuxtLink to="/dashboard/category/create">Добавить</NuxtLink>

  <ul>
    <li v-for="(category, index) in categoriesTree" :key="`first-${index}`">
      <NuxtLink :to="`/dashboard/category/edit/${category.id[0]}`">
        {{ category.name[0] }}
      </NuxtLink>
      <template v-if="category.name[1]">
        <ul>
          <li>
            <NuxtLink :to="`/dashboard/category/edit/${category.id[1]}`">
              {{ category.name[1] }}
            </NuxtLink>
            <template v-if="category.name[2]">
              <ul>
                <li>
                  <NuxtLink :to="`/dashboard/category/edit/${category.id[2]}`">
                    {{ category.name[2] }}
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </li>
  </ul>
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
