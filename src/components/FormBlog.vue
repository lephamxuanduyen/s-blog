<script setup>
import BaseInput from '../components/BaseInput.vue';
import BaseButton from "../components/BaseButton.vue";
import { ref } from 'vue';
import SelectTopic from './BaseSelect.vue';
import ImageInput from './ImageInput.vue';
import Editor from './Editor.vue';
import { uploadImage } from '../apis/image.api';
import { postBlog } from '../apis/blog.api';
import { useRouter } from 'vue-router';
import { toPage } from '../utils/navigate';

const options = [
    {
        id: "",
        option: "Please choose a topic",
    },
    {
        id: "1",
        option: "Inspiration",
    },
    {
        id: "2",
        option: "Resource",
    },
    {
        id: "3",
        option: "Announcements",
    },
    {
        id: "4",
        option: "Entrepreneurship",
    },
    {
        id: "5",
        option: "Tutorials",
    },
    {
        id: "6",
        option: "Freelancing",
    },
    {
        id: "7",
        option: "Design Process",
    },
    {
        id: "8",
        option: "Web Design",
    },
]

const title = ref("")
const desc = ref("")
const author = ref("")
const topic = ref("")
const image = ref(null)
const content = ref("")

const router = useRouter()

const onUpload = (files) => {
    image.value = files
}

const getTitleLength = () => title.value.length

const getContent = (html) => {
    content.value = html
}

const handelUploadImg = (file) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "ml_default")
    return uploadImage(formData)
}

const handelSubmit = () => {
    let urlImage
    if (image.value) {
        urlImage = handelUploadImg(image.value[0])
    }
    else {
        urlImage = ""
    }
    console.log(urlImage)
    const formData = {
        title: title.value,
        description: desc.value,
        author: author.value,
        topic: topic.value,
        imageCover: urlImage,
        contentHTML: content.value,
        views: "0",
        likes: "0",
    }
    try {
        postBlog(formData)
        console.log("Successfully!!!", formData)
        toPage(router, "/")
    }
    catch (err) {
        console.log(err)
    }
}


</script>

<template>
    <div class="form-post">
        <div class="title">Create Post</div>

        <BaseInput v-model="title" label="Title" placeHolder="Title..." />
        <p class="title-length">{{ getTitleLength() }}/300</p>
        <BaseInput v-model="desc" label="Description" placeHolder="Description" />

        <BaseInput v-model="author" label="Author" placeHolder="Your name..." />

        <SelectTopic v-model="topic" :optionsArr="options" label="Topic" />

        <ImageInput @upload="onUpload" label="Image Cover" />

        <Editor @type="getContent" label="Content" />

        <BaseButton title="Submit" @click="handelSubmit()" class="submit-btn" />
    </div>
</template>

<style scoped>
.form-post .title {
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
}

.form-post .title-length {
    font-size: 14px;
    line-height: 14px;
    color: var(--passive-text-color-001);
    margin-top: 10px;
}

.submit-btn {
    margin-top: 30px;
}
</style>