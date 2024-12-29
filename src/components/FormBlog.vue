<script setup>
import BaseInput from '../components/BaseInput.vue';
import BaseButton from "../components/BaseButton.vue";
import { ref } from 'vue';
import SelectTopic from './BaseSelect.vue';
import ImageInput from './ImageInput.vue';
import Editor from './Editor.vue';
import { uploadImage } from '../apis/image.api';
import { editBlog, postBlog } from '../apis/blog.api';
import { useRoute, useRouter } from 'vue-router';
import { toPage } from '../utils/navigate';

const props = defineProps({
    titlePage: String,
    blog: {
        type: Object,
        default: {},
    },
    action: {
        type: String,
        default: "post"
    },
})
const router = useRouter()
const route = useRoute()
const isValidData = false

const options = [
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
const image = ref("")
const content = ref("")

if (props.blog !== {}) {
    title.value = props.blog.title
    desc.value = props.blog.description
    author.value = props.blog.author
    topic.value = props.blog.topic
    image.value = props.blog.imageCover
    content.value = props.blog.contentHTML
}

const onUpload = (files) => {
    if (files) {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "ml_default")
        uploadImage(formData)
            .then((res) => {
                image.value = res.data.url
            })
            .catch((err) => alert("Something went Wrong!!!", err))
    }
}

const getTitleLength = () => title.value ? title.value.length : 0

const getContent = (html) => {
    content.value = html
}

const handelSubmit = () => {

    if (isValidData) {
        const formData = {
            title: title.value,
            description: desc.value,
            author: author.value,
            topic: options[parseInt(topic.value) - 1].option,
            imageCover: image.value,
            contentHTML: content.value,
            views: "0",
            likes: "0",
        }
        if (props.action === "post") {
            postBlog(formData)
                .then(() => {
                    console.log("Created Successfully!!!", formData)
                    toPage(router, "/")
                }
                )
                .then((err) => {
                    console.log(err)
                })
        }
        else if (props.action === "edit") {
            const id = route.params.id
            editBlog(id, formData)
                .then(() => {
                    console.log("Edited Successfully!!!")
                    toPage(router, "/")
                }
                )
                .catch((err) => console.log(err))
        }
    }
}


</script>

<template>
    <div class="form-post">
        <div class="title">{{ titlePage }}</div>

        <BaseInput v-model="title" label="Title" placeHolder="Title..." />
        <p class="title-length">{{ getTitleLength() }}/300</p>
        <BaseInput v-model="desc" label="Description" placeHolder="Description" />

        <BaseInput v-model="author" label="Author" placeHolder="Your name..." />

        <SelectTopic v-model="topic" :optionsArr="options" label="Topic" />

        <ImageInput @upload="onUpload" label="Image Cover" />

        <Editor @type="getContent" label="Content" :initialValue="blog.contentHTML" />

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