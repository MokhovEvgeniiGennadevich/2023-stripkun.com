<script setup lang="ts">
// Get Props
const props = defineProps(["category"]);
</script>

<template>
  <option>
    <CategoryTabsChild v-for="child in category.categoryChild" :key="child.id" :category="child" />
  </option>
</template>