import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from "react-editor-js";
const ReactEditorJS = createReactEditorJS();

// import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
// import List from "@editorjs/list";
// import Warning from "@editorjs/warning";
// import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
// import Raw from "@editorjs/raw";
// import Header from "@editorjs/header";
// import Quote from "@editorjs/quote";
// import Marker from "@editorjs/marker";
// import CheckList from "@editorjs/checklist";
// import Delimiter from "@editorjs/delimiter";
// import InlineCode from "@editorjs/inline-code";
// import SimpleImage from "@editorjs/simple-image";

const UploadEditor = () => {
    const imageInput = useRef(null);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
        }, [imageInput.current]);


    const handleOnChange = async (e) => {
        const value = await e.saver.save()
        value.blocks.map(content => (
            console.log(content.data.text)
        ))
    }
    const EDITOR_JS_TOOLS = {
        // embed: Embed,
        // table: Table,
        // marker: Marker,
        // list: List,
        // warning: Warning,
        // code: Code,
        // linkTool: LinkTool,
        image: {
            class: Image,
            config: {
                endpoints: {
                    byFile: 'http://localhost:3000', // Your backend file uploader endpoint
                }
            }
        },
        // raw: Raw,
        // header: Header,
        // quote: Quote,
        // checklist: CheckList,
        // delimiter: Delimiter,
        // inlineCode: InlineCode,
        // simpleImage: SimpleImage
    };

    return (
        <div style={{border: 'solid 0.5rem grey'}}>
            <input type="file" name='image' accept="image/*" multiple hidden ref={imageInput} />
            <ReactEditorJS tools={EDITOR_JS_TOOLS} onChange={handleOnChange} />
        </div>
    );
};

export default UploadEditor;