import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Beautiful People', duration: '3:47' },
        { title: 'Photograph', duration: '4:00' },
        { title: 'Thinking out loud', duration: '4:05' }
    ];
};

const selectedSongReducer = (selectedSong=null ,action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});