<script setup>
const props = defineProps({
    title: String,
})
</script>

<template>
    <button class="base-button">
        {{ title }}
    </button>
</template>

<style scoped>
.base-button {
    background-color: var(--primary-btn-color);
    color: var(--white);
    border-radius: 10px;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.375px;
    cursor: pointer;
    /* margin-top: 30px; */
}
</style>