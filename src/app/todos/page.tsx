import Link from 'next/link';
import React from 'react';
import { getTodos } from '@/service/todos';
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import todoBasicImage from '../../../public/images/todoImage.png';
// import styles from '@/app/todos/page.module.css';

// export const revalidate = 3; // ISR구축을 위해 3초마다 REVALIDATE진행

const TodosPage = async () => {
    // throw new Error();
    // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줄 것.
    const todoList = await getTodos();
    // // Fetch를 이용한 서버 통신
    // const res = await fetch('https://meowfacts.herokuapp.com', {
    //     next: { revalidate: 3 },
    // }); // api는 임시 데이터, {}로 option으로 넣을 수 있다.
    // // 만약 revalidate를 0으로 하면 SSR로 구축 할 수 있다. = next:{}옵션 대신 cache : "no-store"를 사용해도 된다.
    // const data = await res.json();
    // const factTexts = data.data[0];
    return (
        <>
            <h1>📖 Space to create a todo list</h1>
            <Image src={todoBasicImage} alt="기본 이미지" loading="lazy" />
            <ul>
                {todoList.map(({ id, name }) => (
                    <li key={id}>
                        🔖<Link href={`todos/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle />
            {/* <article className={styles.article}>{factTexts}</article> */}
        </>
    );
};

export default TodosPage;
