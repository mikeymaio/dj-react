import { combineReducers } from 'redux';
// import PlaylistReducer from './playlist.reducer';

const playlistState = {
    playlist:
    [
        {
            url: '../dj-react/assets/audio/vinyl-crackle.wav',
            name: '',
        },
    ],
}

const deckState = {
        searchResults: {
            loading: false,
            tracks: [],
        },
        both: {
            xFade: 0.5,
        },
        deck1: {
            activeSong: playlistState.playlist[0],
            play: false,
            buffering: false,
            progress: 0,
            seeking: false,
            volume: 0.8,
            speed: 1,
            treble: 0,
            mid: 0,
            bass: 0,
            //lpFilterBypass: true,
            lpFilterCutoff: 16000,
            lpFilterRes: 0,
           // hpFilterBypass: true,
            hpFilterCutoff: 20,
            hpFilterRes: 0,
            //reverbBypass: true,
            reverbMix: 0,
           // delayBypass: true,
            delayMix: 0,
            delayTime: 500,
            bitCrusherBypass: true,
            bits: 100,
            normFreq: 0.2,
            bufferSize: 4096,
            distortion: 0,
        },
        deck2: {
            activeSong: playlistState.playlist[0],
            play: false,
            buffering: false,
            progress: 0,
            seeking: false,
            volume: 0.8,
            speed: 1,
            treble: 0,
            mid: 0,
            bass: 0,
            //lpFilterBypass: true,
            lpFilterCutoff: 16000,
            lpFilterRes: 0,
           // hpFilterBypass: true,
            hpFilterCutoff: 20,
            hpFilterRes: 0,
            //reverbBypass: true,
            reverbMix: 0,
           // delayBypass: true,
            delayMix: 0,
            delayTime: 500,
            bitCrusherBypass: true,
            bits: 100,
            normFreq: 0.2,
            bufferSize: 4096,
            distortion: 0,
        },
    }


//////////////////////////// TEST //////////////////////////////////////

const playlistReducer = (state, action) => {
    state = state || playlistState
    switch(action.type) {
        case 'SONG_UPLOADED':
        return [...state.playlist, action.payload];
        // const before = state.playlist.slice(0, index);
        // const after = state.playlist.slice(index + 1);
        // const newSong = Object.assign({}, state[index], action.payload);
        // return [...before, newSong, ...after];
        console.log('redux playlist state = ', state);
    }
   return state;
}


const decksReducer = (state=deckState, action) => {
    state = state || deckState
    switch(action.type) {
        case 'UPDATE_X_FADE':
            return {
                ...state,
                both: {...state.both, xFade: action.payload}
            }
        case 'REQUEST_DATA':
            return {
                ...state,
                searchResults: {...state.searchResults, loading: true}
            }
        case 'RECEIVE_DATA':
            return {
                ...state,
                searchResults: {loading: false, tracks: action.payload}
            }
        case 'START_BUFFER_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, buffering: action.payload}
            }
        case 'END_BUFFER_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, buffering: action.payload}
            }
        case 'SONG_SELECTED_DECK1':
        console.log(action.payload)
            return {
                ...state,
                deck1: {...state.deck1, buffering: true, activeSong: action.payload}
            }
        case 'START_STOP_SONG_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, play: !state.deck1.play}
            }
        case 'UPDATE_PLAYBACK_SPEED_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, speed: action.payload * 2}
            }
        case 'SEEK_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, seeking: !state.deck1.seeking}
            }
        case 'UPDATE_PR0GRESS_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, progress: action.payload}
            }
        case 'UPDATE_LP_FILTER_CUTOFF_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, lpFilterCutoff: action.payload}
            }
        case 'UPDATE_LP_FILTER_RES_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, lpFilterRes: action.payload}
            }
            case 'UPDATE_HP_FILTER_CUTOFF_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, hpFilterCutoff: action.payload}
            }
        case 'UPDATE_HP_FILTER_RES_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, hpFilterRes: action.payload}
            }
        case 'UPDATE_REVERB_MIX_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, reverbMix: action.payload}
            }
        case 'UPDATE_DELAY_TIME_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, delayTime: action.payload}
            }
            case 'UPDATE_DELAY_MIX_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, delayMix: action.payload}
            }
        case 'UPDATE_DISTORTION_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, distortion: action.payload}
            }
        case 'UPDATE_BITCRUSHER_BYPASS_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, bitCrusherBypass: !state.deck1.bitCrusherBypass}
            }
        case 'UPDATE_BITS_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, bits: action.payload}
            }
        case 'UPDATE_BUFFER_SIZE_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, bufferSize: action.payload}
            }
        case 'UPDATE_NORM_FREQ_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, normFreq: action.payload}
            }
        case 'UPDATE_VOLUME_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, volume: action.payload}
            }
        case 'UPDATE_TREBLE_CONTROL_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, treble: action.payload}
            }
        case 'UPDATE_MID_CONTROL_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, mid: action.payload}
            }
        case 'UPDATE_BASS_CONTROL_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, bass: action.payload}
            }
//////////////////////////// DECK 2 //////////////////////////////////////
        case 'START_BUFFER_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, buffering: action.payload}
            }
        case 'END_BUFFER_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, buffering: action.payload}
            }
        case 'SONG_SELECTED_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, buffering: true, activeSong: action.payload}
            }
        case 'SEEK_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, seeking: !state.deck2.seeking}
            }
        case 'UPDATE_PR0GRESS_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, progress: action.payload}
            }
        case 'START_STOP_SONG_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, play: !state.deck2.play}
            }
        case 'UPDATE_PLAYBACK_SPEED_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, speed: action.payload * 2}
            }
        case 'UPDATE_LP_FILTER_CUTOFF_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, lpFilterCutoff: action.payload}
            }
        case 'UPDATE_LP_FILTER_RES_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, lpFilterRes: action.payload}
            }
            case 'UPDATE_HP_FILTER_CUTOFF_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, hpFilterCutoff: action.payload}
            }
        case 'UPDATE_HP_FILTER_RES_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, hpFilterRes: action.payload}
            }
        case 'UPDATE_REVERB_MIX_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, reverbMix: action.payload}
            }
        case 'UPDATE_DELAY_TIME_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, delayTime: action.payload}
            }
            case 'UPDATE_DELAY_MIX_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, delayMix: action.payload}
            }
        case 'UPDATE_DISTORTION_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, distortion: action.payload}
            }
        case 'UPDATE_BITCRUSHER_BYPASS_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, bitCrusherBypass: !state.deck2.bitCrusherBypass}
            }
        case 'UPDATE_BITS_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, bits: action.payload}
            }
        case 'UPDATE_BUFFER_SIZE_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, bufferSize: action.payload}
            }
        case 'UPDATE_NORM_FREQ_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, normFreq: action.payload}
            }
        case 'UPDATE_VOLUME_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, volume: action.payload}
            }
        case 'UPDATE_TREBLE_CONTROL_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, treble: action.payload}
            }
        case 'UPDATE_MID_CONTROL_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, mid: action.payload}
            }
        case 'UPDATE_BASS_CONTROL_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, bass: action.payload}
            }
        }
        return state;
    }

//////////////////////////// TEST //////////////////////////////////////



const rootReducer = combineReducers({
    // deck1: reducer,
    // deck2: reducer
    // reducer
    decksReducer,
    playlistReducer
});

export default rootReducer;

//////////////////////////////////////////////////////

