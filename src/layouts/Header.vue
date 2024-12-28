<script setup>
import { useRouter } from "vue-router"
import IconLogo from "../assets/icons/IconLogo.vue"
import BaseButton from "../components/BaseButton.vue";
import { toPage } from "../utils/navigate";
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

const router = useRouter()

</script>

<template>
    <header>
        <div class="logo" @click="toPage(router, '/')">
            <IconLogo />
        </div>
        <nav>
            <div v-for="item in listNav" class="nav-item" @click='toPage(router, item.url)'>{{ item.name }}</div>
            <BaseButton title="Create" @click="toPage(router, 'create-blog')" />
        </nav>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 150px;
    background-color: var(--white);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;
}

header .logo {
    display: inline-block;
}

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 76px;
}

.nav-item {
    display: inline-block;
    color: var(--default-text-color);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;


    &:hover {
        color: var(--hover-text-color);
    }
}

header .logo,
.nav-item {
    cursor: pointer;
}
</style>