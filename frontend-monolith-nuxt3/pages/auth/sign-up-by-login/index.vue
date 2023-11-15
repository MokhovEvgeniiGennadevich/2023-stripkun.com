<template>
  <form @submit="onSubmit">

    <input type="text" autocomplete="off" :value="email" @change="handleChange" placeholder="Email" />
    <p style="font-weight: bold; color: #900;">{{ errors.email }}</p>

    <input type="password" autocomplete="off" :value="password" @change="handleChange" placeholder="Password" />
    <p style="font-weight: bold; color: #900;">{{ errors.password }}</p>
    <button type="submit">Submit</button>
  </form>
</template>

<!-- Options API -->
<script lang="ts">
import { useField, useForm } from "vee-validate"
import { object, string } from "yup"

export default {
  // ??
  setup() {
    // Validation Schema
    const validationSchema = object({
      email: string().trim().required().email(),
      password: string().trim().required().min(1),
    })

    const { setFieldValue, handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        email: '',
        password: '',
      }
    })

    const { value: email } = useField("email")
    const { value: password } = useField("password")

    const handleChange = (event: any) => {
      setFieldValue("email", event.target.value)
      setFieldValue("password", event.target.value)
    }

    const onSubmit = handleSubmit(values => {
      console.log('submit', values)
    })

    return {
      email,
      password,
      errors,
      onSubmit,
      handleChange
    }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>