<script setup>
import { useRouter } from "vue-router"
import IconLogo from "../assets/icons/IconLogo.vue"
import BaseButton from "../components/BaseButton.vue";
import IconMenu from '../assets/icons/IconMenu.vue'
import { toPage } from "../utils/navigate";

let isOpenMenu = false
const emits = defineEmits(["isOpen"])

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

const toggleSidebar = () => {
    isOpenMenu = !isOpenMenu
    emits('isOpen', isOpenMenu)
}

const router = useRouter()

</script>

<template>
    <header>
        <div class="logo" @click="toPage(router, '/')">
            <IconLogo />
        </div>
        <div class="navigation">
            <nav>
                <div v-for="item in listNav" class="nav-item" @click='toPage(router, item.url)'>{{ item.name }}</div>
            </nav>
            <IconMenu class="menu" @click="toggleSidebar" />
            <BaseButton title="Create" @click="toPage(router, 'create-blog')" />
        </div>
    </header>
</template>

<style scoped>
header .menu {
    display: none;
    cursor: pointer;
}

header .navigation {
    display: flex;
    flex-direction: row;
    gap: 76px;
    align-items: center;
}

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

/* Điện thoại di động (dọc) */
@media (max-width: 320px) {}

/* Điện thoại di động (ngang) */
@media (max-width: 480px) {}

/* Máy tính bảng nhỏ (dọc) */
@media (max-width: 600px) {}

/* Máy tính bảng nhỏ (ngang) */
@media (max-width: 800px) {
    header {
        padding: 0 10%;
    }
}

/* Máy tính bảng lớn (dọc) */
@media (max-width: 768px) {}

/* Máy tính bảng lớn (ngang) */
@media (max-width: 1024px) {
    nav {
        display: none;
    }

    header .menu {
        display: block;
    }
}
</style>