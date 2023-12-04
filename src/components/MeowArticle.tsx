'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/components/css/meowAricle.module.css';
// CSR구축
const MeowArticle = () => {
    const [text, setText] = useState('Loading...');

    useEffect(() => {
        // Fetch를 이용한 서버 통신
        fetch('https://meowfacts.herokuapp.com')
            .then((res) => res.json())
            .then((data) => setText(data.data[0]));
    }, []);

    return (
        <>
            <article className={styles.article}>{text}</article>
        </>
    );
};

export default MeowArticle;
