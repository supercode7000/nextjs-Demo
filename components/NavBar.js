import Link from 'next/link'
import styles from '../styles/Home.module.css'
const NavBar = () => {
    return (<nav>
        <ul className={styles.flex}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/beers">
                    <a>Beers</a>
                </Link>
            </li>
            <li>
                <Link href="/blogs/">
                    <a>All blogs</a>
                </Link>
            </li>
            <li>
                <Link href="/blogs/blog1">
                    <a>blog1</a>
                </Link>
            </li>
            <li>
                <Link href="/blogs/blog2">
                    <a>blog2</a>
                </Link>
            </li>
        </ul>
    </nav>);
}

export default NavBar;