<script setup>
import { useRouter } from 'vue-router';
import { toPage } from '../utils/navigate';

const listNav = [
    {
        name: "New",
        url: "/",
    },
    {
        name: "Reading List",
        url: "/reading-list",
    },
    {
        name: "Topics",
        url: "/topics",
    },
]

const handleToPage = (url) => {
    toPage(router, url)
}

const router = useRouter()
</script>

<template>
    <div class="sidebar">
        <nav>
            <div v-for="item in listNav" class="nav-item" @click='handleToPage(item.url)'>{{ item.name }}</div>
        </nav>
    </div>
</template>

<style scoped>
.sidebar {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--white);
    height: 100vh;
    width: 200px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: end;
    margin-top: 150px;
    animation: slide-right-left 0.3s ease;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: right;
}

.sidebar .exit-btn {
    height: 40px;
    width: 40px;
    object-fit: cover;
    cursor: pointer;
}

.nav-item {
    display: inline-block;
    color: var(--default-text-color);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;

    &:hover {
        color: var(--hover-text-color);
    }
}

@keyframes slide-right-left {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}
</style>