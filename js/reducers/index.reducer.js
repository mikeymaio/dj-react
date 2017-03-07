import { combineReducers } from 'redux';
// import PlaylistReducer from './playlist.reducer';

const initialState = {
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
    deck1: {
        activeSong: null,
        play: true,
        progress: 0,
        volume: 0.8,
        speed: 1,
        treble: 0,
        mid: 0,
        bass: 0,
        filter: 0,
        reverb: 0,
        delay: 0,
        distortion: 0,
    },
    deck1: {
        activeSong: null,
        play: true,
        progress: 0,
        volume: 0.8,
        speed: 1,
        treble: 0,
        mid: 0,
        bass: 0,
        filter: 0,
        reverb: 0,
        delay: 0,
        distortion: 0,
    },
}


//////////////////////////// TEST //////////////////////////////////////
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SONG_SELECTED':
            return {
                ...state,
                deck1: {activeSong: action.payload}
            }
            case 'UPDATE_FILTER':
        return {
            ...state,
            deck1: {filter: action.payload}
        }
        case 'UPDATE_REVERB':
        return {
            ...state,
            deck1: {reverb: action.payload}
        }
        case 'UPDATE_DELAY':
        return {
            ...state,
        deck1: {delay: action.payload}
        }
        case 'UPDATE_DISTORTION':
        return {
            ...state,
            deck1: {distortion: action.payload}
        }
        case 'UPDATE_VOLUME':
            return {
                ...state,
                deck1: {volume: action.payload}
            }
        case 'UPDATE_TREBLE_CONTROL':
            return {
                ...state,
                deck1: {treble: action.payload}
            }
        case 'UPDATE_MID_CONTROL':
            return {
                ...state,
                deck1: {mid: action.payload}
            }
        case 'UPDATE_BASS_CONTROL':
            return {
                ...state,
                deck1: {bass: action.payload}
            }
            case 'START_STOP_SONG':
        // state.play = !state.play;
            return Object.assign({}, state, {
                deck1: {play: !state.play}
            });
        case 'UPDATE_PLAYBACK_SPEED':
            return {
                ...state,
                deck1: {speed: action.payload * 2}
            }
    }
    console.log('state', state);
    return state;
}

//////////////////////////// TEST //////////////////////////////////////



const rootReducer = combineReducers({
    // deck1: reducer,
    // deck2: reducer
    reducer
});

export default rootReducer;

//////////////////////////////////////////////////////

