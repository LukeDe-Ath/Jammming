import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import TrackList from '../TrackList/TrackList';

function App() {

  const foundTracks = [
    {name: "Sweet Child O' Mine", artist: "Guns N Roses"},
    {name: "Basket Case", artist: "Green Day"},
    {name: "Go Your Own Way", artist: "Fleetwood Mac"}
  ]

  const selectedTracks = [
    {name: "Basket Case", artist: "Green Day"},
    {name: "Sweet Child O' Mine", artist: "Guns N Roses"}
  ]

  return (
    <>
      <div id="background"></div>
      <div className="App">
        <Header />
        <SearchBar />
        <div className="container flex just-center">
          <SearchResults />
          <TrackList />
        </div>
      </div>
    </>
    
  );
}

export default App;
