<script setup lang="ts">
// Получаем props используя <script setup>
// Options API либо Composition API
const props = defineProps(["category"]);

const category = props.category[0];

function handleSubmit() {
  alert(JSON.stringify(category));
}
</script>

<template>
  <h1>Props: {{ category }}</h1>

  <form @submit.prevent="handleSubmit">
    <input type="hidden" id="id" v-model="category.id" autocomplete="off" />

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="category.name" autocomplete="off" />

    <button type="submit">Submit</button>
  </form>
</template>
