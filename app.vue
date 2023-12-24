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
	<section class="flex items-center justify-center py-4 md:py-12 lg:py-12 font-sans">
		<NuxtPage />
	</section>
</template>
