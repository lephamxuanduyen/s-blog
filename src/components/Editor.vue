<script>
import { RichTextEditorComponent, Toolbar, Image, HtmlEditor, Link, Table, QuickToolbar, EmojiPicker, PasteCleanup, FormatPainter } from '@syncfusion/ej2-vue-richtexteditor';
export default {
    props: {
        label: String,
        initialValue: String,
    },
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    methods: {
        click: function () {
            debugger;
            const content = this.$refs.rteInstance.getHtml();
            console.log(content);
        },
        getEditor() {
            this.$emit("type", this.$refs.rteInstance.getHtml())
            // console.log(this.$refs.rteInstance.getHtml())
        }
    },
    data: function () {
        return {
            toolbarSettings: {
                items: ['SourceCode', 'Undo', 'Redo', '|', 'FormatPainter', 'ClearFormat', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', 'Blockquote', '|',
                    'OrderedList', 'UnorderedList', '|', 'CreateTable', 'CreateLink', 'Image', '|', '|', 'EmojiPicker', '|']
            },
            value: this.initialValue,
        }
    },
    provide: {
        richtexteditor: [Toolbar, Image, HtmlEditor, Link, Table, QuickToolbar, EmojiPicker, PasteCleanup, FormatPainter]
    }
}

</script>

<template>
    <div class="editor-container">
        <p class="title">{{ label }}</p>
        <ejs-richtexteditor @change="getEditor" ref="rteInstance" height="500px" width="100%" class="editor"
            v-bind:value="value" :toolbarSettings="toolbarSettings">
        </ejs-richtexteditor>
    </div>
</template>

<style>
@import "/node_modules/@syncfusion/ej2-base/styles/material.css";
@import "/node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "/node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "/node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "/node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "/node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "/node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "/node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";

.editor-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;
}

.editor-container .title {
    font-weight: 600px;
    font-size: 16px;
    line-height: 16px;
    color: var(--label-text-color);
}
</style>