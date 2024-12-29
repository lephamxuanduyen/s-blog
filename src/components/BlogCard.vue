<script setup>
import { useRouter } from 'vue-router';
import { deleteBlog } from '../apis/blog.api';
import BaseButton from './BaseButton.vue';
import { toPage } from '../utils/navigate';

const props = defineProps({
    blogs: Object
})

const router = useRouter()

const editBlog = (id) => {
    toPage(router, `edit-blog/${id}`)
}

const delBlog = (id) => {
    const result = confirm("Are you sure")
    if (result) {
        deleteBlog(id)
            .then(() => {
                console.log("Deleted Successfully!!")
                alert("Please Refresh!!!")
            })
            .catch((err) => console.log(err))
    }
}

const toDetailBlog = (id) => {
    toPage(router, `/blogs/${id}`)
}
</script>

<template>
    <div class="blog" v-for="blog in blogs" :key="blog.id">
        <img :src="blog.imageCover" @click="toDetailBlog(blog.id)" />
        <div class="card-content">
            <div class="card-top" @click="toDetailBlog(blog.id)">
                <div class="info">
                    <span class="label">BY</span>
                    <span>{{ blog.author }}</span>
                    <span class="label">IN</span>
                    <span>{{ blog.topic }}</span>
                </div>
                <div class="title">{{ blog.title }}</div>
                <div class="desc">{{ blog.description }}</div>
            </div>
            <div class="card-bottom">
                <BaseButton title="Edit" @click="editBlog(blog.id)" />
                <BaseButton title="Delete" @click="delBlog(blog.id)" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.blog img {
    width: 100%;
    aspect-ratio: 5/3;
    object-fit: cover;
    flex-shrink: 0;
    cursor: pointer;
}

.info {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: -0.1px;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.info .label {
    color: var(--passive-text-color-001);
}

.blog .title {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 46px;
    letter-spacing: -0.175px;
}

.blog .desc {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    color: var(--passive-text-color-001);
    text-align: justifyl
}

.blog .card-top {
    cursor: pointer;
}

.blog .card-bottom {
    display: flex;
    gap: 30px;
    border-top: 1px solid var(--passive-text-color-001);
    padding-top: 20px;
    margin-top: auto;
}

.blog .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.card-content .title,
.card-content .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
}
</style>