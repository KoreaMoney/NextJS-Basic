import React from 'react';

interface Iprops {
    params: {
        slug: string;
    };
}

const Pants = ({ params }: Iprops) => {
    return <div>상품항목 - {params.slug}</div>;
};
export default Pants;

export function generateStaticParams() {
    // 미리 만들어 놓고 싶은 정적페이지 구성하기
    const staticProducts = ['pants, shirt'];
    return staticProducts.map((item) => ({ slug: item }));
}
