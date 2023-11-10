<template>
  <form @submit="onSubmit">

    <input type="text" autocomplete="off" v-model="email" placeholder="Email" />
    <p style="font-weight: bold; color: #900;">{{ errors.email }}</p>

    <input type="password" autocomplete="off" v-model="password" placeholder="Password" />
    <p style="font-weight: bold; color: #900;">{{ errors.password }}</p>
    <button type="submit">Submit</button>
  </form>
</template>

<!-- Options API -->
<script lang="ts">
import { useField, useForm } from "vee-validate"

export default {
  setup() {
    const required = (value: string) => {
      const requiredMessage = 'This field is required'
      if (value === undefined || value === null) return requiredMessage
      if (!String(value).length) return requiredMessage

      return true
    }

    const minLength = (number: number, value: string) => {
      if (String(value).length < number) return 'Please type at least ' + number + ' characters'

      return true
    }

    const anything = () => {
      return true
    }

    // Validation Schema
    const validationSchema = {
      email: (value: string) => {
        const req = required(value);

        if (req !== true) return req;

        const min = minLength(3, value);

        if (min !== true) return min

        return true
      },
      password: anything,
    }

    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        email: '',
        password: '123',
      }
    })

    const { value: email } = useField("email")
    const { value: password } = useField("password")



    const onSubmit = handleSubmit(values => {
      console.log('submit', values)
    })

    return {
      email,
      password,
      errors,
      onSubmit
    }
  }
}
</script>