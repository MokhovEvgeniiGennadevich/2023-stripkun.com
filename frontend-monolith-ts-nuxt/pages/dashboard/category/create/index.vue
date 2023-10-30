<script setup lang="ts">
import { reactive } from "vue";

const formData = reactive({
  name: "",
});

const handleSubmit = (event: any) => {
  console.log(event);

  // const result = await useFetch("utl", {
  //   method: "POST",
  // });

  return;
};
</script>

<template>
  <h1>Создать категорию</h1>

  <form @submit.prevent="handleSubmit">
    <input
      v-model="formData.name"
      type="text"
      name="name"
      placeholder="Имя категории"
      required
      autocomplete="off"
    />
    <p></p>
    <button type="submit">Создать</button>
  </form>
</template>
