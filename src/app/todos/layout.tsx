import Link from 'next/link';
import styles from './todos.module.css';

const TODOSLINK = '/todos';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href={`${TODOSLINK}/Todo`}>Todo</Link>
                    <Link href={`${TODOSLINK}/Doing`}>Doing</Link>
                    <Link href={`${TODOSLINK}/Done`}>Done</Link>
                </nav>
            </header>
            <section className={styles.todo}> {children}</section>
        </div>
    );
}
