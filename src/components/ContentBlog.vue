<script setup>
import { onMounted } from 'vue'
import IconsMedia from '../assets/icons/IconsMedia.vue'
import IconHeat from '../assets/icons/IconHeart.vue'
import IconEye from '../assets/icons/IconEye.vue'
import { editBlog } from '../apis/blog.api'

const props = defineProps({
    blog: {
        type: Object,
        default: {},
    },
})

const like = () => {
    const formData = {
        title: props.blog.title,
        description: props.blog.description,
        author: props.blog.author,
        topic: props.blog.topic,
        imageCover: props.blog.imageCover,
        contentHTML: props.blog.contentHTML,
        views: props.blog.views,
        likes: (parseInt(props.blog.likes) + 1).toString(),
    }

    editBlog(props.blog.id, formData)
        .then(() => {
            console.log("Edited Successfully!!!")
            document.getElementById("likes").innerText = (parseInt(props.blog.likes) + 1).toString()
        }
        )
        .catch((err) => console.log(err))
}

const addView = () => {
    const formData = {
        title: props.blog.title,
        description: props.blog.description,
        author: props.blog.author,
        topic: props.blog.topic,
        imageCover: props.blog.imageCover,
        contentHTML: props.blog.contentHTML,
        views: (parseInt(props.blog.views) + 1).toString(),
        likes: props.blog.likes,
    }

    editBlog(props.blog.id, formData)
        .then(() => {
            console.log("Edited Successfully!!!")
        }
        )
        .catch((err) => console.log(err))
}

onMounted(
    addView()
)

</script>

<template>
    <div class="header">
        <h1 class="title">{{ blog.title }}</h1>
        <p class="desc">{{ blog.description }}</p>
        <div class="info">
            <span class="label">BY</span>
            <span>{{ blog.author }}</span>
            <span class="label">IN</span>
            <span>{{ blog.topic }}</span>
        </div>
    </div>
    <div class="detail-blog-container">
        <div class="image-header">
            <IconsMedia class="media" />
            <img :src="blog.imageCover" alt="Image Cover" />
            <div class="react">
                <div class="like" @click="like">
                    <IconHeat />
                    <p id="likes">{{ blog.likes }}</p>
                </div>
                <div class="view">
                    <IconEye />
                    <p>{{ blog.views }}</p>
                </div>
            </div>
        </div>
        <div v-html="blog.contentHTML" class="blog-content"></div>
        <div class="quote">“ WP Page Builder offers a lot of ready-to-use design blocks to make your site
            development process a lot faster and easier “</div>
    </div>
</template>

<style scoped>
.detail-blog-container {
    margin: 40px 20%;
}

.detail-blog-container .image-header {
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 40px;
}

.detail-blog-container .image-header .media {
    flex-shrink: 0;
}

.detail-blog-container .image-header img {
    width: calc(100% - 130px);
    border-radius: 8px;
}

.detail-blog-container .image-header .react {
    margin-left: auto;
}

.react .like {
    cursor: pointer;
}

.header {
    padding: 40px 20% 0 20%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.header .title {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -0.225px;
}

.header .desc {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.112px;
}

.header .info {
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: -0.1px;
}

.header .info .label {
    color: var(--passive-text-color-001);
}

.detail-blog-container .quote {
    color: var(--quote-text-color);
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: -0.15px;
    margin: 40px 0;
    text-align: center;
}

@media (max-width: 800px) {
    .detail-blog-container {
        margin: 40px 10%;
    }

    .header {
        padding: 40px 10% 0 10%;
    }
}
</style>