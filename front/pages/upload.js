import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useSelector } from 'react-redux';
let UploadEditor;
if (typeof window !== "undefined") {
    UploadEditor = dynamic(() => import('../components/Main/UploadEditor'));
};

const Upload = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    // useEffect(() => {
    //     if(!isLoggedIn) {
    //         alert('로그인 후 글 작성이 가능해요!');
    //         Router.push('/');
    //     }
    // }, [isLoggedIn]);

    return (
        <div>
            {UploadEditor && <UploadEditor />}  
        </div>
    );
};

export default Upload;