<script setup></script>

<template>
  <nav class="flex bg-blue-500 justify-around py-5 text-white">
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
