//import logo from './logo.svg';
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

/*When a user requests data from Spotify, the JSON response will include a set of song tracks. 
Each track will contain a field for name, artist, and album. For each track in the results list, your Jammming web app will display the song name, artist, and album.
In a later section, you will build a method that sets the state of the search results parameter to a response from the Spotify API.
30. Add a constructor function to the App component, and pull in props from the React.Component class.
31. Inside of the App component, set a hard-coded initial value for this.state.searchResults (it will be an array containing track objects).
Inside of the App constructor, set this.state to an object with a property called searchResults set to an array of objects, each containing name, artist, album, and id properties.*/
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'name1', artist:'artist1', album:'album1', id: 1}, {name: 'name2', artist:'artist2', album:'album2', id: 2}, {name: 'name3', artist:'artist3', album:'album3', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'PlayListName1', artist:'PlayListArtist1', album:'PlayListAlbum1', id: 4}, {name: 'PlayListName2', artist:'PlayListArtist2', album:'PlayListAlbum2', id: 5}, {name: 'PlayListName3', artist:'PlayListArtist3', album:'PlayListAlbum3', id: 6}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  } 

// if the track has not been added, then it aves it to the playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} 
            onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
