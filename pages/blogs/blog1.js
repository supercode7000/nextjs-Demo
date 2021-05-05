import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Blog1 = () => {
    return (
        <div className={styles.container}>

            <section>
                <h1 className="tomato">
                    Blog1
                </h1>
                <Image src="/chill.jpeg" alt="me" width="500" height="400" />
                {/* <img src="/chill.jpeg" alt="" /> */}
            </section>

        </div>
    );
}

export default Blog1;