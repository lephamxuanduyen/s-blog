<script setup>
import FormBlog from '../components/FormBlog.vue';

</script>

<template>
    <div class="create-blog">
        <FormBlog titlePage="Create Post" />
        <div class="recent-post"></div>
    </div>
</template>

<style scoped>
.create-blog {
    margin: 40px 20% 0 20%;
}
</style>



<!-- <template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor id="default" v-model="value" @change="console.log(contentFocus)"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { provide } from 'vue';
    import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, contentFocus } from "@syncfusion/ej2-vue-richtexteditor";
    // const rteInstance = ref(null);
    // const value = ref("<p>The Rich Text Editor component is a WYSIWYG editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>");
    const richtexteditor = [Toolbar, Link, Image, HtmlEditor];
    provide('richtexteditor', richtexteditor);

</script>
<style>
    @import "/node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "/node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css"; 
</style> -->