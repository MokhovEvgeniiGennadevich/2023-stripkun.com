<script setup lang="ts">

// Security Form Hash
const securityFormHashRequest = {
  formUrl: "/api",
  formFileds: null,
};

const { csrfHash } = useCsrfHash(securityFormHashRequest);
</script>

<template>
  <h1>Финансовый стриптиз</h1>

  <p>Hash: {{ csrfHash.hash }}</p>
  <p>Hash Time Stamp: {{ csrfHash.timestamp }}</p>
</template>
