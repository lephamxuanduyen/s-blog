<script setup>
import { computed } from 'vue';

const emits = defineEmits(["update:modelValue"])

const props = defineProps({
    label: String,
    placeHolder: String,
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
    <div class="base-input-container">
        <label class="label-input" :for="label.toLowerCase()">{{ label }}</label>
        <input class="base-input" type="text" :name="label.toLowerCase()" :id="label.toLowerCase()"
            :placeholder="placeHolder" v-model="innerValue" />
    </div>
</template>

<style scoped>
.base-input-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
}

.label-input {
    font-weight: 600px;
    font-size: 16px;
    line-height: 16px;
    color: var(--label-text-color);
}

.base-input {
    border: solid 1px var(--light-border);
    padding: 16px;
    border-radius: 8px;

    ::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: var(--passive-text-color);
    }

    &:focus {
        outline: none;
    }
}
</style>