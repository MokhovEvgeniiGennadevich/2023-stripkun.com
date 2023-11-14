<script setup lang="ts">

type budgetDto = {
  pagination: {
    "total": number
  }
  data: []
};



// 100% working code
const hash_time = useState("hash_time", () => {
  return Date.now()
})


//////////////////////////////////////////////////////////////////////////
const { data: budget, error } = await useFetch<budgetDto[]>(
  "http://localhost:3001/v1/budget/get",
  {
    query: { page: 0, limit: 1 },
    server: true,
    headers: {
      // CSRF: 
      "csrf": "222",
      // HASH: Пользователь не может менять параметры запроса,
    }
  }
);
</script>

<template>
  <h1>Бюджет</h1>

  <p>Hash Time: {{ hash_time }}</p>
  <p>Hash</p>


  <p>Budget Data: {{ budget }}</p>
  <p>Budget Error: {{ error }}</p>

  <NuxtLink to="/dashboard/budget/create">Добавить</NuxtLink>
</template>
~/composables/useCsrfHash