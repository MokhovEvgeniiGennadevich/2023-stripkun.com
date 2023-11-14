<script setup lang="ts">
// Form

// Define default value
const formData = ref({
  summ: "",
  date: new Date().toISOString().split('T')[0],
  categoryId: "",
  note: "",
})

type categoryDto = {
  summ: number;
  date: Date;
  categoryId: string | null;
  note: string;
};

const { data: categoriesFetch } = await useFetch<categoryDto[]>(
  "http://localhost:3001/v1/category/get"
);

const handleSubmit = async () => {
  // Convert data
  const conver = {
    summ: Number(formData.value.summ),
    date: formData.value.date,
  }

  alert(JSON.stringify(conver))

  const { data: response } = await useFetch(
    "http://localhost:3001/v1/budget/create",
    {
      method: "post",
      body: {
        summ: conver.summ,
        date: conver.date,
        categoryId: formData.value.categoryId,
        note: formData.value.note
      },
    }
  )

  alert(JSON.stringify(response.value))
}

// Решение от fukushine
const categories = computed(() => categoriesLtree(categoriesFetch.value))



</script>

<template>
  <h1>Внести доход или расход</h1>

  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Сумма" v-model="formData.summ" autocomplete="off" />
    <input type="date" v-model="formData.date" min="2000-01-01" max="2100-12-31" autocomplete="off" />
    <select v-model="formData.categoryId">

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
    <input type="text" placeholder="Заметка" v-model="formData.note" autocomplete="off" />
    <button type="submit">Submit</button>
  </form>
</template>