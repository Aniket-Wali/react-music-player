import React from 'react';

const LibrarySong = (props) => {
    const {song, setCurrentSong, audioRef, isPlaying} = props;

    const songSelectHandler = () => {
        setCurrentSong(song);
        // Check if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then(audio => audio.current.play());
            }
        }
    }
    return(
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} alt='cover'/>
            <div className="song-description"> 
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;