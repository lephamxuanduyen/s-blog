<script setup>
import IconSearch from "../assets/icons/IconSearch.vue"
</script>

<template>
    <div class="search-box">
        <input type="text" placeholder="Type something..." name="search" id="search">
        <label for="search" class="search-icon">
            <IconSearch />
        </label>
    </div>
</template>

<style scoped>
.search-box {
    width: 60%;
    height: 83px;
    background-color: var(--white);
    border-radius: 8px;
    margin: 40px 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
}

.search-box input {
    border: 0;
    background-color: transparent;
    margin-left: 40px;
    height: 100%;
    width: 100%;

    ::placeholder {
        color: var(--passive-text-color);
    }

    &:focus {
        outline: none;
    }
}

.search-icon {
    width: 24px;
    height: 24px;
    margin-right: 45px;
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
    .search-box {
        margin: 40px 10%;
        width: 80%;

    }
}

/* Máy tính bảng lớn (dọc) */
@media (max-width: 768px) {}
</style>