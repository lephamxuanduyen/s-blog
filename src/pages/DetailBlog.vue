<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailBlog } from '../apis/blog.api';
import ContentBlog from '../components/ContentBlog.vue';
import IconBack from '../assets/icons/IconBack.vue';
import { toPage } from '../utils/navigate';

const route = useRoute()
const router = useRouter()
const blog = ref(null)
const loading = ref(true)
const id = route.params.id

const getBlog = (id) => {
    getDetailBlog(id)
        .then((res) => {
            blog.value = res.data
        })
        .catch((err) => console.log(err))
        .finally(() => loading.value = false)
}

onMounted(() => {
    getBlog(id)
})

</script>

<template>
    <p @click="toPage(router, '/')" class="back">Back</p>
    <p v-if="loading === true">Loading...</p>
    <p v-else-if="blog.value === null">Not Found</p>
    <ContentBlog v-else :blog="blog" />

</template>

<style scoped>
.back {
    background-color: var(--white);
    padding-left: 20%;
    color: var(--passive-text-color);
    cursor: pointer;
}
</style>