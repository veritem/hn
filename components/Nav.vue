<script setup></script>

<template>
  <nav class="flex  border-b-2  border-blue-500 justify-around py-5">
    <NuxtLink to="/">Hacker news</NuxtLink>
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/1">
          News
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/jobs/1">
          Jobs
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
@import url("@unocss/reset/tailwind.css");
</style>
