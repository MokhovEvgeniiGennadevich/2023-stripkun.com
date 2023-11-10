<script setup lang="ts">
// User: Auth

// User: Fetch User Get Api

// User: Store: Pinia

////////////////////////////////////////////////////
// Server срабатывает один раз при инициализации приложения
// мы должны прогрузить всё дерьмо тут
// и засунуть его в Pinia
if (process.server) {
  ////////////////////////////////////////////////////
  // Security: Hash
  // генерируем все хэши всех форм сайта
  const hash_time = useState("hash_time", () => {
    return Date.now()
  })

  const hashSet = useState("hashSet", () => {
    return {
      "/api/v1/auth/sign-up-by-login": generateHash("/api/v1/auth/sign-up-by-login", hash_time.value)
    }
  })
}

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
