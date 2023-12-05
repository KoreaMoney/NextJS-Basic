import { notFound, redirect } from 'next/navigation';
import { getTodo, getTodos } from '@/service/todos';
import Image from 'next/image';
import GoTodosBtn from '@/components/GoTodosBtn';

export const revalidate = 3; // ISR구축을 위해 3초마다 REVALIDATE진행

interface Iprops {
    params: {
        slug: string;
    };
}

const TodoLists = async ({ params: { slug } }: Iprops) => {
    // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줄 것.
    const todo = await getTodo(slug);
    if (!todo) {
        // 동적 Redirect 개발 - notFound가 아니라 redirect로 경로를 정해준다.
        redirect('/todos');
        // notFound();
    }

    return (
        <>
            {slug === '1' || slug === '2' || slug === '3' ? (
                <>
                    <h3>Today is study {todo?.name}</h3>
                    <Image
                        src={`/images/${todo?.image}`}
                        alt="이미지"
                        width="400"
                        height="400"
                        style={{ borderRadius: '16px' }}
                    />
                    <GoTodosBtn />
                </>
            ) : (
                <>
                    <h1>{slug}</h1>
                </>
            )}
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
        else if (slug === '3') return 'Python';
        return slug;
    }
    return {
        title: `TodoList | ${title(slug)}`,
        description: 'Records todo data',
    };
}
