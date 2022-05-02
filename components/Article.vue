<script setup lang="ts">

defineProps<{
  title: string,
  time_ago: string,
  url: string
}>()
</script>

<template>
  <div class="py-4">
    <NuxtLink :to="url" target="_blank">
      <h1>{{ title }}</h1>
    </NuxtLink>
  </div>
</template>
