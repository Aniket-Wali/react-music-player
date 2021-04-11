import React from 'react';
import LibrarySong from './LibrarySong';

const Library = (props) => {
    const {songs, setCurrentSong, audioRef, isPlaying} = props;
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong song={song} songs={songs} setCurrentSong={setCurrentSong} key={song.id} id={song.id} audioRef={audioRef} isPlaying={isPlaying}/> )}
            </div>
        </div>
    );
}

export default Library;