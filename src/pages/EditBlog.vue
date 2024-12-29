<script setup>
import { useRoute } from 'vue-router';
import FormBlog from '../components/FormBlog.vue';
import { getDetailBlog } from '../apis/blog.api';
import { onMounted, ref } from 'vue';

const route = useRoute()
const blogDetail = ref(null)
const loading = ref(true)
const id = route.params.id

const getBlogById = (id) => {
    getDetailBlog(id)
        .then((res) => {
            blogDetail.value = res.data
        })
        .catch((err) => console.log(err))
        .finally(() => loading.value = false)
}

onMounted(() => {
    getBlogById(id)
})
</script>

<template>
    <div class="edit">
        <p v-if="loading">Loaing...</p>
        <p v-else-if="blogDetail.value === null">Not Found</p>
        <FormBlog titlePage="Edit Blog" :blog="blogDetail" action="edit" v-else />
    </div>
</template>

<style scoped>
.edit {
    margin: 40px 20%;
}

@media (max-width: 800px) {
    .edit {
        margin: 40px 10%;
    }
}
</style>