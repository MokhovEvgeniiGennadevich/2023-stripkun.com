<script setup lang="ts">

type categoryDto = {
  id: string;
  name: string;
  pid: string | null;
};

// Client and Server Fetch
// Protect this route

const { data: categories } = await useFetch<categoryDto[]>(
  "/api/v1/category/get",
  {
    server: true
  }
);

// const categoriesTree = categoriesLtree(categories.value);

// Решение от fukushine
const categoriesTree = computed(() => categoriesLtree(categories.value))

//////////////////////////////////////////////////////////////////////////
// 100% working code
const hash_time = useState("hash_time", () => {
  return Date.now()
})
</script>

<template>
  <h1>Категории дохода и расхода</h1>

  <p>Hash Time: {{ hash_time }}</p>

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
~/composables/useCsrfHash