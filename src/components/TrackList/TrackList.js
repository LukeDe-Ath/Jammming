import React from 'react'
import './TrackList.css'

function TrackList() {

    const resultArr = [
      {name: "Sweet Child O' Mine", artist: "Guns N Roses"},
      {name: "Basket Case", artist: "Green Day"},
      {name: "Go Your Own Way", artist: "Fleetwood Mac"}
    ]

    return (
      <div className='TrackList'>
          <form className="flex flex-col just-center">
              <input type="text" name="playlistName" id="playlistName" placeholder='New Playlist Name' />
              <div className="selectedSongs">
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
              <button type="submit">Save To Spotify</button>
          </form>
      </div>
    )
}

export default TrackList