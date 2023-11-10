<script setup lang="ts">
import { ref } from 'vue';

const formData = reactive({
  // Sign-Up Init Values
  login: "",
  password: "",
  password_confirm: "",

  // Security Init Values
  csrf: "123",
  hash: "fdsfdsfs",
  hash_time: "123123",
})

// Это дерьмо надо ставить для того, чтобы useFetch
// начал принимать файлы cookie от BackEnd
const headers = useRequestHeaders(['cookie'])
const handleSubmit = async () => {
  try {
    const { data, pending, error, refresh } = await useFetch(
      "/api/v1/auth/sign-up-by-login",
      {
        // 100% гарантия что это будет Client Side
        // lazy: true && server: false
        lazy: true,
        server: false,

        method: "POST",

        // Необходимая залупа чтобы получать файлы cookie
        // от BackEnd
        headers: headers,

        body: {
          login: formData.login,
          password: formData.password,
          password_confirm: formData.password_confirm,

          csrf: formData.csrf,
          hash: formData.hash,
          hash_time: formData.hash_time
        }

      }
    )

    if (error.value) {
      console.log(error.value)
    }
  } catch (error) {

  }
}
</script>

<template>
  <h1>Регистрация</h1>

  <form @submit.prevent="handleSubmit">
    <input type="text" name="login" v-model="formData.login" autocomplete="off" />
    <input type="password" name="password" v-model="formData.password" />
    <input type="password" name="password_confirm" v-model="formData.password_confirm" />

    <!-- Security -->
    <input type="hidden" name="csrf" v-model="formData.csrf" />
    <input type="hidden" name="hash" v-model="formData.hash" />
    <input type="hidden" name="hash_time" v-model="formData.hash_time" />

    <button type="submit">Войти</button>
  </form>
</template>