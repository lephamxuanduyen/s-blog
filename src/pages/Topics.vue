<script setup>
// import { ref, onMounted } from 'vue';
import { onMounted, ref } from 'vue';
import { getTopics } from '../apis/topics.api';
import TopicCard from '../components/TopicCard.vue';

const listTopics = ref([])
const loading = ref(true)

const getAllTopics = () => {
    getTopics()
        .then((res) => {
            listTopics.value = res.data
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            loading.value = false;  // Đánh dấu là đã tải xong
        });
}

onMounted(() => {
    getAllTopics()
})

</script>


<template>
    <div class="topics-container">
        <div class="topics-header">
            <div class="title">Topics</div>
            <div class="desc">Find everything from design inspiration to best practices, freelancing tips to tools.
            </div>
        </div>
        <div class="topics">
            <p v-if="loading">Loading...</p>
            <p v-else-if="listTopics.length === 0">Not Found</p>
            <TopicCard v-else :listTopics="listTopics" />
        </div>
    </div>
</template>

<style scoped>
.topics-container .topics-header {
    background-color: var(--white);
    padding: 50px 20%;
}

.topics-header .title {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -0.225px;
}

.topics-header .desc {
    margin-top: 30px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.112px;
}

.topics {
    margin: 90px 20%;
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
}

@media (max-width: 800px) {
    .topics {
        margin: 90px 10%;
    }

    .topics-container .topics-header {
        padding: 50px 10%;
    }
}

@media (max-width: 768px) {
    .topics {
        flex-direction: column;
    }
}
</style>