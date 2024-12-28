<script setup>
const props = defineProps({
    blogs: Object
})
</script>

<template>
    <div class="blog" v-for="blog in blogs" :key="blog.id">
        <img :src="blog.imageCover" />
        <div class="info">
            <span>BY</span>
            <span>{{ blog.author }}</span>
            <span>IN</span>
            <span>{{ blog.topic }}</span>
        </div>
        <div class="title">{{ blog.title }}</div>
        <div class="desc">{{ blog.description }}</div>
    </div>
</template>

<style scoped></style>