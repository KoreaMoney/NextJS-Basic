import { notFound } from 'next/navigation';
import { getTodo, getTodos } from '@/service/todos';

export const revalidate = 3; // ISR구축을 위해 3초마다 REVALIDATE진행

interface Iprops {
    params: {
        slug: string;
    };
}

const TodoLists = async ({ params: { slug } }: Iprops) => {
    // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줄 것.
    const todo = await getTodo(slug);
    if (!slug) {
        notFound();
    }

    return <div>My plan -{todo?.name}</div>;
};
export default TodoLists;

export async function generateStaticParams() {
    // 미리 만들어 놓고 싶은 정적페이지 구성하기
    const staticTodos = await getTodos();
    return staticTodos.map((item) => ({ slug: item.id }));
}

export function generateMetadata({ params: { slug } }: Iprops) {
    return {
        title: `TodoList | ${slug}`,
        description: 'Records todo data',
    };
}
