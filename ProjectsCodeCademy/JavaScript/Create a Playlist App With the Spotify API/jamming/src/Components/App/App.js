//import logo from './logo.svg';
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';


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
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);


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

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});

  }
// Potential problem; the website instruction URIs are capital but the video instruction is in small letters
  savePlaylist(){
    const trackURIs =  this.state.playlistTracks.map(track=>track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar  onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} 
            onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName} 
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
