<script setup>
useHead({
  title: "Hn",
  meta: [
    {
      name: "description",
      content: "Hack news",
    },
  ],
});
</script>

<template>
  <Nav />
  <section class="px-64 py-20 font-sans">
    <NuxtPage />
  </section>
</template>
