import { notFound } from 'next/navigation';
import { getTodo, getTodos } from '@/service/todos';

interface Iprops {
    params: {
        slug: string;
    };
}

const TodoLists = ({ params: { slug } }: Iprops) => {
    // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줄 것.
    const todo = getTodo(slug);
    if (!slug) {
        notFound();
    }

    return <div>My plan - {todo}</div>;
};
export default TodoLists;

export function generateStaticParams() {
    // 미리 만들어 놓고 싶은 정적페이지 구성하기
    const staticTodos = getTodos();
    return staticTodos.map((item) => ({ slug: item }));
}

export function generateMetadata({ params: { slug } }: Iprops) {
    return {
        title: `TodoList | ${slug}`,
        description: 'Records todo data',
    };
}
