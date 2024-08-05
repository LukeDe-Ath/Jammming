import React from 'react'
import './Track.css'

function Track(props) {

    function handleAdd() {
        props.onAdd(props.trackData);
    }

    function handleRemove() {
        props.onRemove(props.trackData)
    }

    const renderAction = () => {
        if (props.isRemovable) {
            return (
                <button className="trackAction" onClick={handleRemove}>
                    -
                </button>
            )
        } else {
            return (
                <button className="trackAction" onClick={handleAdd}>
                    +
                </button>
            )
        }
    }

    const renderExplicit = () => {
        if (props.trackData.explicit) {
            return <span className="explicit">E</span>
        }
    }

    return (
        <div className='Track'>
            <p className='name'>
                {props.trackData.name}
                {renderExplicit()}
            </p>
            <p className="details">
                {props.trackData.artist} | {props.trackData.album} 
            </p>
            {renderAction()}
            <hr />
        </div>
    )
}

export default Track