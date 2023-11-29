import React from 'react';
import { notFound } from 'next/navigation';

interface Iprops {
    params: {
        slug: string;
    };
}

const Pants = ({ params }: Iprops) => {
    if (params.slug === 'nothing') {
        notFound();
    }
    return <div>My plan - {params.slug}</div>;
};
export default Pants;

export function generateStaticParams() {
    // 미리 만들어 놓고 싶은 정적페이지 구성하기
    const staticTodos = ['Todo, Doing, Done'];
    return staticTodos.map((item) => ({ slug: item }));
}
