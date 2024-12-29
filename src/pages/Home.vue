<script setup>
import { getBlogs } from '../apis/blog.api';
import SearchBox from '../components/SearchBox.vue';
import { ref, onMounted } from 'vue';
import BlogCard from '../components/BlogCard.vue';

const listBlogs = ref([])
const loading = ref(true)

const getAllBlogs = () => {
    getBlogs()
        .then((res) => {
            listBlogs.value = res.data
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            loading.value = false
        })
}

onMounted(() => {
    getAllBlogs()
})

</script>

<template>
    <SearchBox />
    <div class="list-blog">
        <div class="title">ALL POST</div>
    </div>
    <div class="blogs">
        <p v-if="loading">Loading...</p>
        <p v-else-if="listBlogs.length === 0">Not Found</p>
        <BlogCard v-else :blogs="listBlogs" />
    </div>
</template>

<style scoped>
.list-blog {
    margin: 0 20%;
}

.list-blog .title {
    color: var(--passive-text-color);
    font-size: 12px;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: -0.08px;
}

.blogs {
    padding: 0 20%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}
</style>