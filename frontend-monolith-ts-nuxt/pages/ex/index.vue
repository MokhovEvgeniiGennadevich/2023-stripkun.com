<template>
  <p>{{ counter }}</p>
  <p>Hash: {{ hash }}</p>
  <button @click="increment">Increment</button>
</template>

<script setup>
import crypto from "crypto";

// Server Side && User Side
const config = useRuntimeConfig()
const hash = config.public.apiBase

if (process.server) {
  console.log('process.server')
}

const counter = useState('counter', () => 0)

function increment() {
  counter.value++

  console.log(counter)
}

// После загрузки страницы
onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})
</script>