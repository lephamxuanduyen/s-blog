<script setup>

const props = defineProps({
    label: String,
})

const emits = defineEmits(["upload"]);

const onUpload = (e) => {
    const files = e.target.files
    emits('upload', files)
}

</script>

<template>
    <div class="img-input-container">
        <label :for="label.toLowerCase()" class="img-input-label">{{ label }}</label>
        <input @change="onUpload" :name="label.toLowerCase()" :id="label.toLowerCase()" type="file"
            accept="image/png, image/jpeg" class="img-input" />
    </div>
</template>

<style>
.img-input-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
}

.img-input-label {
    font-weight: 600px;
    font-size: 16px;
    line-height: 16px;
    color: var(--label-text-color);
}

input#file-upload-button {
    background-color: var(--primary-btn-color);
}
</style>