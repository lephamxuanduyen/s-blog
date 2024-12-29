<script setup>
const props = defineProps({
    listTopics: {
        typeof: Array,
        default: [],
    }
})
</script>

<template>
    <div class="topic" v-for="(topic, idx) in listTopics" :key="idx">
        <div class="topic-header">
            <img :src="topic.icon" :alt="topic.option" class="icon">
            <div class="title">{{ topic.option }}</div>
        </div>
        <div class="content">{{ topic.desc }}</div>
    </div>
</template>

<style>
.topic-header {
    display: flex;
    flex-direction: row;
    gap: 35px;
    margin-bottom: 30px;
}

.topic-header .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 58px;
    letter-spacing: -0.15px;
    overflow: hidden;
}

.topic-header .icon {
    height: 45px;
}

.topic {
    padding: 40px 50px;
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 8px;
    width: calc(50% - 11px);
    overflow: hidden;
}

.topic .content {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
}

@media (max-width: 768px) {
    .topic {
        width: 100%;
    }
}
</style>