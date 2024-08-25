<script setup lang="ts">
const response = ref('');
const { data, refresh } = useAsyncData(
  '/api/xpto/hello',
  () => $fetch('/api/xpto/hello'),
  { immediate: false }
);

async function clickMe() {
  await refresh();
}
</script>

<template>
  <div>
    Hello World

    <button @click="clickMe">click me</button>

    <p>
      {{ data }}
    </p>
  </div>
</template>
