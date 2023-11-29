import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Iprops {
    params: {
        slug: string;
    };
}

const TodoLists = ({ params }: Iprops) => {
    if (params.slug === 'nothing') {
        notFound();
    }

    return <div>My plan - {params.slug}</div>;
};
export default TodoLists;

export function generateStaticParams() {
    // 미리 만들어 놓고 싶은 정적페이지 구성하기
    const staticTodos = ['Todo, Doing, Done'];
    return staticTodos.map((item) => ({ slug: item }));
}

export function generateMetadata({ params }: Iprops) {
    return {
        title: `TodoList | ${params.slug}`,
        description: 'Records todo data',
    };
}
