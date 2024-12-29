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
        <div class="blogs">
            <p v-if="loading">Loading...</p>
            <p v-else-if="listBlogs.length === 0">Not Found</p>
            <BlogCard v-else :blogs="listBlogs" />
        </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

/* Điện thoại di động (dọc) */
@media (max-width: 320px) {}

/* Điện thoại di động (ngang) */
@media (max-width: 480px) {}

/* Máy tính bảng nhỏ (dọc) */
@media (max-width: 600px) {
    .blogs {
        grid-template-columns: 1fr;
    }
}

/* Máy tính bảng nhỏ (ngang) */
@media (max-width: 800px) {
    .list-blog {
        margin: 0 10%;
    }
}

/* Máy tính bảng lớn (dọc) */
@media (max-width: 768px) {}
</style>