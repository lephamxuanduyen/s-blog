<script setup>
import { RouterView } from 'vue-router';
import Header from './Header.vue';
import SideBar from './SideBar.vue';
import { ref } from 'vue';

const isOpenSideBar = ref(false)

const handleToggleSidebar = (data) => {
    isOpenSideBar.value = data
}

const toggleSidebar = () => {
    isOpenSideBar.value = !isOpenSideBar.value
}

</script>

<template>
    <Header @isOpen="handleToggleSidebar" />
    <div class="container">
        <RouterView />
    </div>
    <SideBar v-if="isOpenSideBar" @click="toggleSidebar" />
</template>

<style scoped></style>