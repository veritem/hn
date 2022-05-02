<script setup>
const { data } = await useFetch("https://api.hnpwa.com/v0/news/1.json");
defineComponent({
  layout: "default",
});
</script>

<template>
  <section class="px-64 py-20">
    <nuxt-child />
    <div v-for="article in data" :key="article.id">
      <a :href="article.url" target="_blank">
        {{ article.title }} <span>{{ article.time_ago }}</span>
      </a>
    </div>
  </section>
</template>
