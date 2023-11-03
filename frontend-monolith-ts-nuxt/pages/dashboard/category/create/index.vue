<template>
  <form>
    <textarea
      placeholder="Type something..."
      v-model="form.name"
      spellcheck="false"></textarea>
    <button type="button" @click="handleSubmit">Send data</button>
  </form>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      const { data: response } = await useFetch(
        "http://localhost:3001/v1/category/create",
        {
          method: "post",
          body: {
            name: this.form.name,
          },
        }
      );

      if (response) {
        alert(response.value);
      }
    },
  },
};
</script>
