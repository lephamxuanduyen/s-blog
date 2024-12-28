<script setup>
    import IconSearch from "../assets/icons/IconSearch.vue"
</script>

<template>
    <div class="search-box">
        <input type="text" placeholder="Type something..." name="search" id="search">
        <label for="search" class="search-icon"><IconSearch/></label>
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
</style>