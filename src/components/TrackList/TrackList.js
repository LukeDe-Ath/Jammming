import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

function TrackList(props) {

    return (
      <div className='TrackList'>
      {
        props.tracks.map((trackData, i) => {
          return (
            <Track
              key={i}
              trackData={trackData} 
              isRemovable={props.isRemovable}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
          )
        })
      }
      </div>
    )


}

export default TrackList