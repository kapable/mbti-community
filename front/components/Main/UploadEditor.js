import React, { useCallback, useEffect, useRef, useState } from 'react';
import Router from 'next/router';
import { createReactEditorJS } from "react-editor-js";
const ReactEditorJS = createReactEditorJS();
import Paragraph from '@editorjs/paragraph'
// import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
// import List from "@editorjs/list";
// import Warning from "@editorjs/warning";
// import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import { Button, Divider, Input, Select } from 'antd';
import useInput from '../../hooks/useInput';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../../reducers/post';
// import Raw from "@editorjs/raw";
// import Header from "@editorjs/header";
// import Quote from "@editorjs/quote";
// import Marker from "@editorjs/marker";
// import CheckList from "@editorjs/checklist";
// import Delimiter from "@editorjs/delimiter";
// import InlineCode from "@editorjs/inline-code";
// import SimpleImage from "@editorjs/simple-image";

const { Option } = Select;

const UploadEditor = () => {
    const dispatch = useDispatch();
    const { imagePaths, addPostDone, myPosts } = useSelector((state) => state.post);
    const { myInfo } = useSelector((state) => state.user);

    const Categories = {
        "Hot 게시글" : [],
        "MBTI" : ['MBTI', 'ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'],
        "이슈두들링" : ['이슈', 'A'],
        "뒷담두들링" : ['뒷담', 'A'],
        "연애두들링" : ["연애", 'A'],
        "정보두들링" : ["정보", 'A'],
        "19두들링" : ["19", 'A'],
    };
    const [title, onChangeTitle, setTitle] = useInput('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [contents, setContents] = useState();
    const [resultContents, setResultContents] = useState(``);
    const imageInput = useRef(null);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
        }, [imageInput.current]);

    const onCategoryChange = useCallback((cat) => {
        setCategory(cat);
        setSubCategory(Categories[cat][0]);
    }, [Categories]);

    const handleOnChange = useCallback(async (e) => {
        const value = await e.saver.save();
        setContents(value.blocks);
    }, []);

    // {contents ? contents.map((value, index) => {
    //     if(value.type == 'paragraph') {
    //         return (
    //             <p key={index}>{value.data.text}</p>
    //         )
    //     }
    // }) : null}

    const onSubmit = useCallback(() => {
        let combinedContents = ``
        contents.map((value, index) => {
            if(value.type === 'paragraph') {
                combinedContents = combinedContents + `<p key=${index} >${value.data.text.replace("&nbsp;", "\u00a0")}</p>`
            } else if(value.type === 'image') {
                combinedContents = combinedContents + `<img key=${index} className='post-content-image' src=${value.data.file.url} alt=${index} />`
            }
        });
        setResultContents(combinedContents)
        if(!title || !title.trim()) {
            return alert('제목을 입력하세요!');
        };
        if(!category) {
            return alert('카테고리를 선택하세요!');
        };
        if(!contents) {
            return alert('본문을 작성해주세요!');
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', combinedContents);
        formData.append('category', category);
        dispatch({
            type: ADD_POST_REQUEST,
            data: {userId: myInfo.id, title, category, subCategory, combinedContents},
        });
        alert('정상적으로 글이 게시되었습니다!')
    }, [myInfo, title, category, subCategory, contents]);

    useEffect(() => {
        if(addPostDone) {
            setTitle('');
            setContents('');
            setCategory('');
            Router.push(`/post/${myPosts[0].id}`)
        };
    }, [addPostDone, myPosts]);

    const EDITOR_JS_TOOLS = {
        paragraph: Paragraph,
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
        <div className="upload-editor-div">
            {/* TITLE */}
            <div style={{textAlign: "center"}}>
                <Input className='upload-title-input' value={title} required showCount maxLength={30} onChange={onChangeTitle} placeholder="제목을 써주세요!" allowClear={true} />
                <Select
                    className='upload-category-select'
                    placeholder="게시판을 선택해주세요."
                    optionLabelProp='type'
                    onChange={onCategoryChange}>
                        {Object.entries(Categories).map((pair) => {
                            if(pair[0] !== 'Hot 게시글') {
                                return (
                                    <Option value={pair[0]} label={pair[0]} key={`${pair[0]}_category`}>
                                        {pair[0]}
                                    </Option>
                                )
                            }
                        })}
                </Select>
                <Select
                    className='upload-category-select'
                    disabled={category ? false : true}
                    placeholder="하위 게시판을 선택해주세요."
                    optionLabelProp='type'
                    value={subCategory ? subCategory : null}
                    onChange={setSubCategory}>
                        {category
                        ? (
                            Categories[category].map((item) => (
                                <Option value={item} label={item} key={`${item}_subcategory`}>
                                    {item}
                                </Option>
                            ))
                        )
                        : null}
                        
                </Select>
            </div>
            {/* <h1 className='admin-upload-title-preview'>{title}</h1> */}
            <Divider dashed />
            {/* EDITOR */}
            {/* <input type="file" name='image' accept="image/*" multiple hidden ref={imageInput} /> */}
            <ReactEditorJS tools={EDITOR_JS_TOOLS} onChange={handleOnChange} />
            <Divider dashed />
            {/* UPLOAD BUTTON */}
            <div style={{textAlign: "center"}}>
                <Button onClick={onSubmit} icon={<UploadOutlined />} className='upload-submit-button'>&nbsp;글 업로드</Button>
            </div>
            {resultContents}
        </div>
    );
};

export default UploadEditor;