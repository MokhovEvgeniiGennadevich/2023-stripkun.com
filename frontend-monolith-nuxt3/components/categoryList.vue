<script setup lang="ts">
// Get Props
const props = defineProps(["category"]);
</script>

<template>
  <li>
    {{ category.name }}
    <ul>
      <CategoryList v-for="child in category.categoryChild" :key="child.id" :category="child" />
    </ul>
  </li>
</template>