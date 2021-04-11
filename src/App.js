import React, {useState} from 'react';
// Import Styles
import './styles/app.scss';
// Import Components
import Songs from './components/Songs';
import Player from './components/Player';
import Library from './components/Library';
// Import Util
import data from './util';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Songs currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
