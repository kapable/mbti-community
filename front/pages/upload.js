import React from 'react';
import dynamic from 'next/dynamic';
let UploadEditor;
if (typeof window !== "undefined") {
    UploadEditor = dynamic(() => import('../components/Main/UploadEditor'));
};

const Upload = () => {
    return (
        <div>
            {UploadEditor && <UploadEditor />}
        </div>
    );
};

export default Upload;