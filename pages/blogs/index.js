
import styles from '../../styles/Home.module.css'

const Blogs = () => {
    return (
        <div className={styles.container}>

            <section>
                <h1 className="tomato">
                    All blogs
                </h1>
            </section>
            <style jsx>{`
                h1{
                    color:gold;
                }
                .tomato{
                    color:tomato
                }
            `}</style>
        </div>
    );
}

export default Blogs;