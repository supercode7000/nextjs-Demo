const BeerDetails = ({ beer }) => {
    console.log(beer)
    return (
        <figure>
            <img src={beer.image_url} alt="" />
            <p>{beer.description}</p>
            <style jsx>{`
                img{
                    width:100px;
                    height:200px
                }
            `}</style>
        </figure>
    );
}



// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://ih-beers-api2.herokuapp.com/beers/')
    const beers = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = beers.map((beer) => ({
        params: { id: beer._id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
    const beer = await res.json()

    // Pass post data to the page via props
    return { props: { beer } }
}


export default BeerDetails;