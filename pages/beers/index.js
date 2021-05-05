import Link from "next/link"
import styles from '../../styles/Home.module.css'
// posts will be populated at build time by getStaticProps()
function Beers({ beers }) {
    console.log(beers)
    return (
        <div className={styles.grid1}>
            {beers.map(beer =>
                <figure>
                    <img src={beer.image_url} alt="" />
                    <figcaption>
                        <h1>{beer.name}</h1>
                        <h3><Link href={`/beers/${beer._id}`}>Read more</Link></h3>
                    </figcaption>
                </figure>
            )}
            <style jsx>{`
                img{
                    width:100px;
                    height:200px
                }
            `}</style>
        </div>

    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://ih-beers-api2.herokuapp.com/beers')
    const beers = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            beers,
        },
    }
}

export default Beers