import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The record | Home',
    description: 'Records create a path to success.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className={styles.header}>
                    <h1>
                        <Link href="/">Demo Note</Link>
                    </h1>
                    <nav className={styles.nav}>
                        <Link href="/todos" className={styles.link}>
                            ToDoList
                        </Link>
                        <Link href="/about" className={styles.link}>
                            About
                        </Link>
                        <Link href="/contact" className={styles.link}>
                            Contact
                        </Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
