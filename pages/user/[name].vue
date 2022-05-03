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
    <div>
        <h1 class="font-bold text-5xl py-5">{{ data.id }}</h1>
        <p>Joined <span class="font-black">{{ data.created }}</span> and has <span class="font-bold">{{ data.karma
        }}</span> karma</p>

        <div class="py-12 flex gap-4">
            <NuxtLink :to="`https://news.ycombinator.com/submitted?id=${data.id}`" target="_blank" class="underline">
                submissions
            </NuxtLink>
            <NuxtLink :to="`https://news.ycombinator.com/threads?id=${data.id}`" class="underline" target="_blank">
                comments</NuxtLink>
            <NuxtLink :to="`https://news.ycombinator.com/favorites?id=${data.id}`" class="underline" target="_blank">
                favorites</NuxtLink>
        </div>

    </div>
</template>
