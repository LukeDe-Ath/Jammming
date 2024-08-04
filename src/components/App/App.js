import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify'

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [playlistName, setPlaylistName] = useState('My New Playlist');
  const [selectedTracks, setSelectedTracks] = useState([])
  const [foundTracks, setFoundTracks] = useState([]);

  function handleSearchChange({ target }) {
    setSearchValue(target.value);
  }

  function handleNameChange({ target }) {
    setPlaylistName(target.value);
  }

  function addTrack(newTrack) {
    setSearchValue('');
    if (selectedTracks.some((currentTrack => currentTrack.id === newTrack.id))) {
      alert('This track has already been added!');
      return;
    }

    setSelectedTracks(prev => [...prev, newTrack])
  }

  function removeTrack(trackToRemove) {
    setSelectedTracks(prevSelectedTracks => prevSelectedTracks.filter(currentTrack => currentTrack.id !== trackToRemove.id));
  }

  function search(term) {
    Spotify.search(term).then(setFoundTracks);
  }

  function showSaveBanner() {
    const banner = document.querySelector('.saved');
    banner.classList.add('show')
    setTimeout(() => {
      banner.classList.remove('show');
    }, 3000)
  }

  function handleSave() {
    // Concatenate all uris to a single string
    const uris = selectedTracks.map(track => track.uri)

    Spotify.savePlaylist(uris, playlistName).then(() => {
      setSelectedTracks([]);
      setPlaylistName('My New Playlist');

      // Saved banner
      showSaveBanner();
    })
  }

  return (
    <>
      <div id="background"></div>
      <div className="App">
        <Header />
        <SearchBar 
          onSearch={search} 
          onSearchChange={handleSearchChange}
          searchValue={searchValue}
        />
        <div className="container flex just-center">
          <SearchResults 
            foundTracks={foundTracks} 
            onAdd={addTrack}
            searchValue={searchValue}
          />
          <Playlist 
            selectedTracks={selectedTracks}
            playlistName={playlistName}
            onNameChange={handleNameChange}
            onRemove={removeTrack}
            onSave={handleSave}
          />
        </div>
      </div>
    </>
    
  );
}

export default App;
