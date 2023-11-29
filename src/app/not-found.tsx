import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h1>🗣️ 404에러</h1>
            <p>페이지를 찾을 수 없습니다.</p>
            <Link href="/">Home으로 이동하기</Link>
        </div>
    );
};

export default NotFoundPage;
