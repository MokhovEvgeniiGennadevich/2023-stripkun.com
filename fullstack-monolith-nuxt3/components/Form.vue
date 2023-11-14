<script setup lang="ts">
// Get Props
const props = defineProps(["category", "categories"]);

const category = props.category;
const categories = props.categories;

// Form

// Define default value
const formData = ref({
  id: category.id,
  name: category.name,
  pid: category.pid
})

async function handleSubmit() {
  console.log(formData.value)

  const { data: response } = await useFetch(
    "http://localhost:3001/v1/category/update",
    {
      method: "put",
      body: {
        id: formData.value.id,
        name: formData.value.name,
        pid: formData.value.pid
      }
    }
  )

}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="hidden" name="id" v-model="formData.id" autocomplete="off" />
    <input type="text" name="name" v-model="formData.name" autocomplete="off" />
    <select v-model="formData.pid">
      <template v-if="category.pid === null">
        <option :value="null" selected>Без категории</option>
      </template>
      <template v-else>
        <option :value="null">Без категории</option>
      </template>

      <template v-for="(category, index) in categories" :key="`first-${index}`">
        <option :value="category.id[category.id.length - 1]">
          {{ category.name[0] }}

          <template v-if="category.name[1]">
            - {{ category.name[1] }}
            <template v-if="category.name[2]">
              - {{ category.name[2] }}
            </template>
          </template>
        </option>
      </template>
    </select>
    <button type="submit">Submit</button>
  </form>
</template>
