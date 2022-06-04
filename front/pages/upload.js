import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useSelector } from 'react-redux';
let UploadEditor;
if (typeof window !== "undefined") {
    UploadEditor = dynamic(() => import('../components/Main/UploadEditor'));
};

const Upload = () => {
    const { myInfo } = useSelector((state) => state.user);
    // useEffect(() => {
    //     if(!myInfo) {
    //         alert('로그인 후 글 작성이 가능해요!');
    //         Router.push('/');
    //     }
    // }, [myInfo]);

    return (
        <div>
            {UploadEditor && <UploadEditor />}  
        </div>
    );
};

export default Upload;