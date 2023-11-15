<template>
  <input type="email" autocomplete="off" required v-model="email" placeholder="Email" />
  <p style="font-weight: bold; color: #900;">{{ emailError }}</p>

  <input type="password" autocomplete="off" required v-model="password" placeholder="Password" />
  <p style="font-weight: bold; color: #900;">{{ passwordError }}</p>
</template>

<!-- Options API -->
<script lang="ts">
import { useField, useForm } from "vee-validate"

export default {
  setup() {

    // useForm: Validation Schema
    const validation = {
      email: (value: string) => {
        if (!value) return "Email обязателен"

        if (value.length < 3) return "Email должен быть больше 3 символов"

        return true
      },
      password: (value: string) => {
        if (!value) return "Пароль обязателен"

        if (value.length < 3) return "Пароль должен быть больше 3 символов"

        return true
      }
    }

    // useForm: Trigger validation
    useForm({
      validationSchema: validation
    })

    // useFields: Fields Binding
    const { value: email, errorMessage: emailError } = useField("email")
    const { value: password, errorMessage: passwordError } = useField("password")

    return {
      // email: email,
      // emailError: emailError,
      email,
      emailError,
      password,
      passwordError
    }
  }
}
</script>