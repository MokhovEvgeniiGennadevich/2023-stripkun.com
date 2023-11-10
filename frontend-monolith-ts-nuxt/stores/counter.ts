export const useCounterStore = defineStore(
  // $id
  "counter",
  () => {
    const count = ref(1000);
    const name = ref("Eduardo");
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }

    return { count, name, doubleCount, increment };
  }
);
