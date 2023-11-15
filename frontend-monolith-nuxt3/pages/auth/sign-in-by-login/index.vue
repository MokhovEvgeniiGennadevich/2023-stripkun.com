<script setup lang="ts">

</script>

<template>
  <main>
    <h1>Вход</h1>

    <form @submit.prevent="handleSubmit">
      <input type="text" name="login" autocomplete="off" />
      <input type="password" name="password" />

      <!-- Security -->
      <input type="hidden" name="csrf" value="csrf" />
      <input type="hidden" name="hash" value="hash" />
      <input type="hidden" name="hash_time" value="hash_time" />

      <button type="submit">Войти</button>
    </form>
  </main>
</template>