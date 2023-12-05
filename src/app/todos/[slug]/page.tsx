import { notFound } from 'next/navigation';
import { getTodo, getTodos } from '@/service/todos';
import Image from 'next/image';

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

    return (
        <>
            <h3>Today is study {todo?.name}</h3>
            <Image
                src={`/images/${todo?.image}`}
                alt="이미지"
                width="400"
                height="400"
                style={{ borderRadius: '16px' }}
            />
        </>
    );
};
export default TodoLists;

export async function generateStaticParams() {
    // 미리 만들어 놓고 싶은 정적페이지 구성하기
    const staticTodos = await getTodos();
    return staticTodos.map((item) => ({ slug: item.id }));
}

export function generateMetadata({ params: { slug } }: Iprops) {
    function title(slug: any) {
        if (slug === '1') return 'NextJS';
        else if (slug === '2') return 'Javascript';
        return 'Python';
    }
    return {
        title: `TodoList | ${title(slug)}`,
        description: 'Records todo data',
    };
}
