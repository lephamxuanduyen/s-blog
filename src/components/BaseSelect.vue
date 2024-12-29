<script setup>
import { computed } from 'vue';

const emits = defineEmits(["update: modelValue"])

const props = defineProps({
    optionsArr: Array,
    label: String,
    modelValue: String,
})

const innerValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emits("update:modelValue", value)
    }
})

</script>

<template>
    <div class="base-select-container">
        <label :for="label.toLowerCase()" class="label-select">{{ label }}</label>
        <select v-model="innerValue" :name="label.toLowerCase()" :id="label.toLowerCase()" class="base-select">
            <option v-for="item in optionsArr" v-bind:value="item.id">
                {{ item.option }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.base-select-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
}

.label-select {
    font-weight: 600px;
    font-size: 16px;
    line-height: 16px;
    color: var(--label-text-color);
}

.base-select {
    border: solid 1px var(--light-border);
    padding: 16px;
    border-radius: 8px;
    font-weight: 400px;
    font-size: 14px;
    line-height: 14px;
    color: var(--passive-text-color);

    &:focus {
        outline: none;
    }
}

.base-select option {
    color: var(--default-text-color);
    padding: 8px;
}

select:focus>option:checked {
    background-color: var(--primary-btn-color) !important;

}
</style>