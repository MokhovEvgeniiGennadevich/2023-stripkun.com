<template>
  <input type="email" autocomplete="off" required v-model="email" placeholder="Email" />
  <p>{{ emailError }}</p>
</template>

<!-- Options API -->
<script lang="ts">
import { useField } from "vee-validate"

export default {
  setup() {
    const email = useField("email", (value) => {
      if (!value) return "Email обязателен"

      return true
    })

    return {
      email: email.value,
      emailError: email.errors
    }
  }
}
</script>