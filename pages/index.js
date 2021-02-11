import { MD5 } from 'crypto-js'

import HeroList from '../components/HeroList'

function HomePage ({ heroes }) {
    return (
        <div>
            <h1>Marvel's Heroes</h1>
            <HeroList heroes={heroes}/>
        </div>
    )
}

HomePage.getinittialProps = async () => {
    const { MARVEL_PUBLIC_KEY, MARVEL_SECRET_KEY, MARVEL_URL } = process.env
    const TIMESTAMP = new Date().getTime()
    const HASH = String(MD5(TIMESTAMP+MARVEL_SECRET_KEY+MARVEL_PUBLIC_KEY))
    const response = await fetch(`${MARVEL_URL}/v1/public/characters?apikey=${MARVEL_PUBLIC_KEY}&hash=${HASH}&ts=${TIMESTAMP}`,{
        method: 'GET'
    })
    const marvelResponse = await response.json()
    return {
        heroes: marvelResponse.data.results
    }
}

export default HomePage