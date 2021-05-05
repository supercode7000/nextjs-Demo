import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Notfound = () => {
    return (
        <section className={styles.p3}>
            <h1>Not Found</h1>
            <Link href="/">home</Link>
        </section>
    );
}

export default Notfound;