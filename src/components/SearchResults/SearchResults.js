import React from 'react'
import './SearchResults.css'

function SearchResults() {

    const resultArr = [
        {name: "Sweet Child O' Mine", artist: "Guns N Roses"},
        {name: "Basket Case", artist: "Green Day"},
        {name: "Go Your Own Way", artist: "Fleetwood Mac"}
    ]

    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            {
                resultArr.map((song, i) => {
                    return (
                        <div>
                            <p key={`artist-${i}`} className="artist">{song.artist}</p>
                            <p key={`name-${i}`} className='name'>{song.name}</p>
                            {
                                i !== resultArr.length-1 || i === 0 && resultArr.length !== 1 ? <hr /> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResults