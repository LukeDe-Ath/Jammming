import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist(props) {
  return (
    <div className='Playlist flex flex-col'>
            <input type="text" name="playlistName" id="playlistName" placeholder='New Playlist Name' value={props.playlistName} onChange={props.onNameChange} />

            <TrackList tracks={props.selectedTracks} isRemovable={true} onRemove={props.onRemove} />

            <button type="submit">Save To Spotify</button>
    </div>
  )
}

export default Playlist