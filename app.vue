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
	<section
		class="flex items-center justify-center py-4 md:py-12 lg:py-12 dark:bg-[#222222] dark:text-[#bbb] text-[#555] font-sans">
		<NuxtPage />
	</section>
</template>

