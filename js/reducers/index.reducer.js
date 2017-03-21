import { combineReducers } from 'redux';
// import PlaylistReducer from './playlist.reducer';

const playlistState = {
    playlist:
    [
        {
            url: '../assets/test_playlist/Hugo-99_Problems_163BPM.mp3' ,
            cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
                name: 'Hugo',
                song: '99 Problems'
        },
        {
            url: '../assets/test_playlist/Creedence_Clearwater_Revival-Suzie_Q.mp3' ,
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-Y6gSuNZrGy8%2FT2s-cIQwS_I%2FAAAAAAAABwY%2FHAgkHzR2k_M%2Fs1600%2F114125684.jpg&f=1',
                name: 'Creedence Clearwater Revival',
                song: 'Suzie Q'
        },
        {
            url: '../assets/test_playlist/James_Brown_vs_Led Zeppelin-Whole_Lotta_Sex_Machine.mp3',
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJOD-M7WZkZQ%2Fhqdefault.jpg&f=1',

                name: 'James Brown Vs Led Zeppelin',
                song: 'Whole Lotta Sex Machine'

        },
        {
            url: '../assets/test_playlist/Marvin_Gaye-Sexual_Healing_(Kygo_Remix)101BPM.mp3' ,
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.themusicninja.com%2Fwp-content%2Fuploads%2F2013%2F11%2F26.jpg&f=1',

                name: 'Marvin Gaye',
                song: 'Sexual Healing (Kygo Remix)'

        },
        {
            url: '../assets/test_playlist/I_Took_A_Pill_In_Ibiza_(SeeB Remix)102BPM.mp3' ,
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fnothinbuthits.com%2Fwp-content%2Fuploads%2F2016%2F04%2FI-Took-A-Pill-In-Ibiza.png&f=1',

                name: 'Mike Posner',
                song: 'I Took A Pill In Ibiza'

        },
        {
            url: '../assets/test_playlist/Fifth_Harmony-Worth_It_Ft_Kid_Ink_100BPM.mp3' ,
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fradiomelodia.gr%2Fwp-content%2Fuploads%2F2015%2F03%2Ffifth-harmony_worth-it.jpg&f=1',

                name: 'Fifth Harmony',
                song: 'Worth It Ft. Kid Ink'

        },
        {
            url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
            cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',

                name: 'Daft Punk',
                song: 'Get Lucky'

        },
        {
            url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
            cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',

                name: 'The Weekend',
                song: 'Can\'t Feel My Face'

        },
        {
            url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
            cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',

                name: 'Metallica',
                song: 'Fuel'

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
        both: {
            xFade: 0.5,
        },
        deck1: {
            activeSong: playlistState.playlist[2],
            play: false,
            progress: 0,
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
            activeSong: playlistState.playlist[1],
            play: false,
            progress: 0,
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

const playlistReducer = (state=playlistState, action) => {
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
    switch(action.type) {
        case 'UPDATE_X_FADE':
            return {
                ...state,
                both: {...state.both, xFade: action.payload}
            }
        case 'SONG_SELECTED_DECK1':
            return {
                ...state,
                deck1: {...state.deck1, activeSong: action.payload}
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

