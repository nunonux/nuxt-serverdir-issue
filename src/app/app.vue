<script lang="ts" setup>
</script>

<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
      <!-- <VueQueryDevtools /> -->
    </NuxtLayout>

    <template #fallback>
      <!-- <SplashScreen /> -->
      loading...
    </template>
  </ClientOnly>
</template>
