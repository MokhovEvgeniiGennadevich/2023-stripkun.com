<script setup lang="ts">
import SecurityFormHash from "~/utils/securityFormHash/securityFormHash"

// Security Form Hash
const securityFormHashRequest = {
  formUrl: "/api",
  formFileds: null,
};

const securityFormHashResponse = useState(() => { return SecurityFormHash(securityFormHashRequest); })
</script>

<template>
  <h1>Финансовый стриптиз</h1>

  <p>Hash: {{ securityFormHashResponse.hash }}</p>
  <p>Hash Time Stamp: {{ securityFormHashResponse.timestamp }}</p>
</template>
