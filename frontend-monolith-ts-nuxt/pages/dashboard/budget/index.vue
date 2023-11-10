<script setup lang="ts">
import { generateHash } from '~/composables/securityHash';

type budgetDto = {
  pagination: {
    "total": number
  }
  data: []
};

//////////////////////////////////////////////////////////////////////////
// const crypto = require("crypto");

// решение от izede
// useState исполняется только один раз и на сервере
// const hash_time = useState("hash_time", () => {
//   return Date.now()
// })

// const hash = useState("hash", () => {
//   return crypto
//     .createHmac("sha512", "password")
//     .update(
//       "/v1/budget/getpage0limit1" +
//       String(hash_time.value),
//       "utf-8"
//     )
//     .digest("hex");
// })

// 100% working code
const hash_time = useState("hash_time", () => {
  return Date.now()
})

// ?? is working
const hash = useState("hash", () => {
  return generateHash("/api/v1/auth/sign-up-by-login", hash_time.value);
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
      // HASH: Пользователь не может менять параметры запроса
      "hash": hash,
    }
  }
);
</script>

<template>
  <h1>Бюджет</h1>

  <p>Hash Time: {{ hash_time }}</p>
  <p>Hash: {{ hash }}</p>


  <p>Budget Data: {{ budget }}</p>
  <p>Budget Error: {{ error }}</p>

  <NuxtLink to="/dashboard/budget/create">Добавить</NuxtLink>
</template>
