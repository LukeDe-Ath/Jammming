import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import TrackList from '../TrackList/TrackList';

function App() {
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
