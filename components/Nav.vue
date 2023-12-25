<script setup></script>

<template>
	<nav
		class="flex justify-between border-b-3 border-blue-500 dark:border-blueGray justify-around py-5 dark:bg-[#222222] dark:text-[#bbb] text-[#555] font-sans">
		<NuxtLink to="/" class="dark:text-white">Hacker news</NuxtLink>
		<ul class="flex gap-4">
			<li>
				<NuxtLink to="/jobs/1" class="dark:text-white">
					Jobs
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style>
@import url("@unocss/reset/tailwind.css");
</style>
