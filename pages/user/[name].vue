<script setup lang="ts">


const route = useRoute()


const { data } = await useFetch<{
	id: string
	karma: string
	created: string
}>(
	`https://api.hnpwa.com/v0/user/${route.params.name}.json`
);

</script>

<template>
	<section class="font-sans">
		<div class="font-sans py-3" v-if="data">
			<h1 class="font-bold text-2xl md:text-5xl lg:text-5xl font-sans">{{ data.id }}</h1>
			<p class="py-4">Joined <span class="font-black italic font-bold">{{ data.created }}</span> and has <span
					class="font-bold">{{
						data.karma
					}}</span> karma</p>

			<div class="py-12 flex gap-4 items-center">
				<NuxtLink :to="`https://news.ycombinator.com/submitted?id=${data.id}`" target="_blank" class="underline">
					submissions
				</NuxtLink>
				<NuxtLink :to="`https://news.ycombinator.com/threads?id=${data.id}`" class="underline" target="_blank">
					comments</NuxtLink>
				<NuxtLink :to="`https://news.ycombinator.com/favorites?id=${data.id}`" class="underline" target="_blank">
					favorites</NuxtLink>
			</div>
		</div>
		<div v-if="!data">
			<p>
				No user found with the name <span class="font-bold">{{ route.params.name }}</span>
			</p>
		</div>
	</section>
</template>
