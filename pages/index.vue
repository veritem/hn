<script setup>

const { data } = await useFetch("https://api.hnpwa.com/v0/news/1.json");

// console.log(data)

</script>

<template>
  <section class="px-64 py-20 font-sans">
    <nuxt-child />
    <div v-for="article in data" :key="article.id">
      <!-- <a :href="article.url" target="_blank">
        {{ article.title }} <span>{{ article.time_ago }}</span>
      </a> -->
      <Article :title="article.title" :time_ago="article.time_ago" :url="article.url" />
    </div>
    <!-- <NuxtLink :to="route.params.id ">
      Next
    </NuxtLink> -->
  </section>
</template>
