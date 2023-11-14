<script setup lang="ts">
import type { SecurityFormHash, SecurityFormHashRequest, SecurityFormHashResponse } from '~/plugins/securityFormHash.server';


// Security Form Hash
const securityFormHashRequest = {
  formUrl: "/api",
  formFields: null,
};

const csrfHash = useState(() => {
  const app = useNuxtApp()
  return (app.$securityFormHash as SecurityFormHash)(securityFormHashRequest) as SecurityFormHashResponse;
})

</script>

<template>
  <h1>Финансовый стриптиз</h1>

  <p>Hash: {{ csrfHash.hash }}</p>
  <p>Hash Time Stamp: {{ csrfHash.timestamp }}</p>
</template>
