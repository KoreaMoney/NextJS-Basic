import React from 'react';
import Link from 'next/link';

const ProductsNotFound = () => {
    return (
        <div>
            <h1>⚠️ 페이지를 찾을 수 없습니다.</h1>
            <Link href="/">Return Home</Link>
        </div>
    );
};
export default ProductsNotFound;
