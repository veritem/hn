<script setup>
     const  {data} = await useFetch("https://api.hnpwa.com/v0/newest/1.json")
</script>

<template>
  <h1 class="text-orange-500 font-sans">Hacker news</h1>

  <div v-for="article in data" :key="article.id">
   <a :href="article.url" target="_blank">
     {{article.title}} <span>{{article.time_ago}}</span>
   </a>
  </div>
</template>
