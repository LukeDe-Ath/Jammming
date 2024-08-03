import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// eslint-disable-next-line
import Spotify from '../../util/Spotify'

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [playlistName, setPlaylistName] = useState('');

  const foundTracks = [
    {name: "Sweet Child O' Mine", artist: "Guns N Roses", album: "Some Album", uri: "spotify:track:5OmIuplwp4x5LT8HXPq6wP", id: 1},
    {name: "Basket Case", artist: "Green Day", album: "Basket Case", uri: "spotify:track:6uLMxmK9MHb6fiecxn2yrp", id: 2},
    {name: "Go Your Own Way", artist: "Fleetwood Mac", album: "Rumours", uri: "spotify:track:7809fpO7iB8XTGYGwbWiQB", id: 3}
  ]

  const [selectedTracks, setSelectedTracks] = useState([])

  function handleSearchChange({ target }) {
    setSearchValue(target.value);
  }

  function handleNameChange({ target }) {
    setPlaylistName(target.value);
  }

  function addTrack(newTrack) {
    if (selectedTracks.some((currentTrack => currentTrack.id === newTrack.id))) {
      alert('This track has already been added!');
      return;
    }

    setSelectedTracks(prev => [...prev, newTrack])
  }

  function removeTrack(trackToRemove) {
    setSelectedTracks(prevSelectedTracks => prevSelectedTracks.filter(currentTrack => currentTrack.id !== trackToRemove.id));
  }

  return (
    <>
      <div id="background"></div>
      <div className="App">
        <Header />
        <SearchBar />
        <div className="container flex just-center">
          <SearchResults 
            foundTracks={foundTracks} 
            onAdd={addTrack}
            searchValue={searchValue}
            onSearchChange={handleSearchChange}
          />
          <Playlist 
            selectedTracks={selectedTracks}
            playlistName={playlistName}
            onNameChange={handleNameChange}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </>
    
  );
}

export default App;
