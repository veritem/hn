<script setup>
const { data } = await useFetch("https://api.hnpwa.com/v0/news/1.json")

</script>

<template>
  <section>
    <div v-for="article in data" :key="article.id" class="font-sans">
      <a :href="article.url" target="_blank">
        {{ article.title }} <span>{{ article.time_ago }}</span>
      </a>
    </div>
  </section>
</template>
