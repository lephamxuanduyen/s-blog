<script setup>
import FormBlog from '../components/FormBlog.vue';

</script>

<template>
    <div class="create-blog">
        <FormBlog titlePage="Create Post" />
        <div class="recent-post"></div>
    </div>
</template>

<style scoped>
.create-blog {
    margin: 40px 20% 0 20%;
}

@media (max-width: 800px) {
    .create-blog {
        margin: 40px 10% 0 10%;
    }
}
</style>