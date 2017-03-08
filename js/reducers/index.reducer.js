import { combineReducers } from 'redux';
// import PlaylistReducer from './playlist.reducer';

const playlistState = {
    playlist:
    [
        {
            url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' ,
            cover: null,
            artist: {
                name: 'Various Artists',
                song: 'Chilled Serenity #5 Mix'
            }
        },
        {
            url: 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
            cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
            artist: {
                name: 'Hugo',
                song: '99 Problems'
            }
        },
        {
            url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
            cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
            artist: {
                name: 'Daft Punk',
                song: 'Get Lucky'
            }
        },
        {
            url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
            cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
            artist: {
                name: 'The Weekend',
                song: 'Can\'t Feel My Face'
            }
        },
        {
            url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
            cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
            artist: {
                name: 'Metallica',
                song: 'Fuel'
            }
        }

    ],
    // decks: {
    //     deck1: {
    //         activeSong: null,
    //         play: true,
    //         progress: 0,
    //         volume: 0.8,
    //         speed: 1,
    //         treble: 0,
    //         mid: 0,
    //         bass: 0,
    //         filter: 0,
    //         reverb: 0,
    //         delay: 0,
    //         distortion: 0,
    //     },
    //     deck2: {
    //         activeSong: null,
    //         play: true,
    //         progress: 0,
    //         volume: 0.8,
    //         speed: 1,
    //         treble: 0,
    //         mid: 0,
    //         bass: 0,
    //         filter: 0,
    //         reverb: 0,
    //         delay: 0,
    //         distortion: 0,
    //     },
    // }
}

const deckState = {
        deck1: {
            activeSong: null,
            play: false,
            progress: 0,
            volume: 0.8,
            speed: 1,
            treble: 0,
            mid: 0,
            bass: 0,
            filter: 0.5,
            reverb: 0,
            delay: 0,
            distortion: 0,
        },
        deck2: {
            activeSong: null,
            play: false,
            progress: 0,
            volume: 0.8,
            speed: 1,
            treble: 0,
            mid: 0,
            bass: 0,
            filter: 0.5,
            reverb: 0,
            delay: 0,
            distortion: 0,
        },
    }


//////////////////////////// TEST //////////////////////////////////////

const playlistReducer = (state=playlistState, action) => {
    return state;
}


const decksReducer = (state=deckState, action) => {
    switch(action.type) {
        case 'SONG_SELECTED_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, activeSong: action.payload}
            }
            case 'UPDATE_FILTER_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, filter: action.payload}
            }
        case 'UPDATE_REVERB_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, reverb: action.payload}
            }
        case 'UPDATE_DELAY_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, delay: action.payload}
            }
        case 'UPDATE_DISTORTION_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, distortion: action.payload}
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
            case 'START_STOP_SONG_DECK1':
        // state.play = !state.play;
        return {
                ...state,
                deck1: {...state.deck1, play: !state.deck1.play}
            }
            // return Object.assign({}, state, {
            //     deck1: {play: !state.play}
            // });
        case 'UPDATE_PLAYBACK_SPEED_DECK1':
        return {
                ...state,
                deck1: {...state.deck1, speed: action.payload * 2}
            }
            
//////////////////////////// DECK 2 //////////////////////////////////////

        case 'SONG_SELECTED_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, activeSong: action.payload}
            }
        case 'UPDATE_FILTER_DECK2':
            return {
                ...state,
                deck2: {...state.deck2, filter: action.payload}
            }
        case 'UPDATE_REVERB_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, reverb: action.payload}
            }
        case 'UPDATE_DELAY_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, delay: action.payload}
            }
        case 'UPDATE_DISTORTION_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, distortion: action.payload}
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
            case 'START_STOP_SONG_DECK2':
        // state.play = !state.play;
        return {
                ...state,
                deck2: {...state.deck2, play: !state.deck2.play}
            }
            // return Object.assign({}, state, {
            //     deck2: {play: !state.play}
            // });
        case 'UPDATE_PLAYBACK_SPEED_DECK2':
        return {
                ...state,
                deck2: {...state.deck2, speed: action.payload * 2}
            }

    }
    console.log('state', state);
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

