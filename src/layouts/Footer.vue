<script setup>
import IconLogoFooter from '../assets/icons/IconLogoFooter.vue';
import IconsMediaFooter from '../components/IconsMediaFooter.vue';
</script>

<template>
    <footer>
        <IconLogoFooter />
        <IconsMediaFooter />
        <p class="info">All Rights Reserved 2018 3layers</p>
    </footer>
</template>

<style scoped>
footer .info {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: right;
    color: var(--passive-text-color);
}

footer {
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    padding: 30px 20%;
}

@media (max-width: 800px) {
    footer {
        padding: 30px 10%;
    }
}

@media (max-width: 600px) {
    footer {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}
</style>