<script setup lang="ts">
// Security Form Hash
const securityFormHashRequest = {
  formUrl: "/api",
  formFields: null,
};

const { csrfHash } = useCsrfHash(securityFormHashRequest);
</script>

<template>
  <h1>О проекте "Финансовый стриптиз"</h1>

  <p>Hash: {{ csrfHash.hash }}</p>
  <p>Hash Time Stamp: {{ csrfHash.timestamp }}</p>

  <p>Проект разрабатывался с целью учёта личных доходов и расходов</p>
</template>
