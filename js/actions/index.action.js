import SC from 'soundcloud';

const CLIENT_ID = 'l8b1LlbFBGgDJmPurEkqHuuUHDVckbWK';

SC.initialize({
            client_id: CLIENT_ID,
        });

export function selectSong(file, deckNum) {
    //const SONG_SELECTED = 'SONG_SELECTED'
    const SONG_SELECTED = 'SONG_SELECTED';
    console.log(file.title, ' has been selected');
    return {
        type: SONG_SELECTED + deckNum,
        payload: file
    }
}

const requestDataFromAPI = () => ({
  type: 'REQUEST_DATA'
})

const recieveDataFromAPI = (data) => ({
  type: 'RECEIVE_DATA',
  payload: data
})


export const fetchDataFromApi = (q) => {
  return dispatch => {
    dispatch(requestDataFromAPI())
    SC.get('/tracks', {
    q: q,
    limit: 20,
  })
    .then(response => {
        console.log('response = ', response)
        dispatch(recieveDataFromAPI(response))})
    .catch(ex => console.log('parsing failed', ex))
  }
}

export function handleBufferStart(deckNum) {
    const START_BUFFER = 'START_BUFFER';
    console.log('buffering');
    return {
        type: START_BUFFER + deckNum,
        payload: true
    }
}

export function handleBufferEnd(deckNum) {
    const END_BUFFER = 'END_BUFFER';
    console.log('ready');
    return {
        type: END_BUFFER + deckNum,
        payload: false
    }
}

export function handleModal() {
    const UPDATE_MODAL = 'UPDATE_MODAL';
    console.log("modal changed")
    return {
        type: UPDATE_MODAL,
    }
}

export function handleSongUpload(file) {
    //const SONG_SELECTED = 'SONG_SELECTED'
    const SONG_UPLOADED = 'SONG_UPLOADED';
    console.log(file, ' has been uploaded');
    return {
        type: SONG_UPLOADED,
        payload: file
    }
}

export function startStopSong(deckNum) {
    console.log('play/pause clicked');
    const START_STOP_SONG = 'START_STOP_SONG';
    return {
        type: START_STOP_SONG + deckNum,
    };
}

export function handleSeek(deckNum) {
    const SEEK = 'SEEK';
    return {
        type: SEEK + deckNum,
    }
}

export function handleProgressChange(value, deckNum) {
    const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
    return {
        type: UPDATE_PROGRESS + deckNum,
        payload: value
    }
}

export function handleVolumeChange(value, deckNum) {
    console.log('volume changed', value);
    const UPDATE_VOLUME = 'UPDATE_VOLUME';
    return {
        type: UPDATE_VOLUME + deckNum,
        payload: value
    }
}

export function handleXFade(value) {
    console.log('crossfade changed', value);
    const UPDATE_X_FADE = 'UPDATE_X_FADE';
    return {
        type: UPDATE_X_FADE,
        payload: value
    }
}

export function handlePlaybackSpeed(value, deckNum) {
    console.log('playback speed changed', value);
    const UPDATE_PLAYBACK_SPEED = 'UPDATE_PLAYBACK_SPEED';
    return {
        type: UPDATE_PLAYBACK_SPEED + deckNum,
        payload: value
    }
}

export function handleTrebleControl(value, deckNum) {
    console.log('treble value changed', value);
    return {
        type: 'UPDATE_TREBLE_CONTROL' + deckNum,
        payload: value
    }
}

export function handleMidControl(value, deckNum) {
    console.log('mid value changed', value);
    return {
        type: 'UPDATE_MID_CONTROL' + deckNum,
        payload: value
    }
}

export function handleBassControl(value, deckNum) {
    console.log('bass value changed', value);
    return {
        type: 'UPDATE_BASS_CONTROL' + deckNum,
        payload: value
    }
}

export function handleLpFilterCutoffChange(value, deckNum) {
    console.log('filter lp cutoff value changed', value);
    return {
        type: 'UPDATE_LP_FILTER_CUTOFF' + deckNum,
        payload: value
    }
}

export function handleLpFilterResChange(value, deckNum) {
    console.log('filter lp resonance value changed', value);
    return {
        type: 'UPDATE_LP_FILTER_RES' + deckNum,
        payload: value
    }
}

export function handleHpFilterCutoffChange(value, deckNum) {
    console.log('filter hp cutoff value changed', value);
    return {
        type: 'UPDATE_HP_FILTER_CUTOFF' + deckNum,
        payload: value
    }
}

export function handleHpFilterResChange(value, deckNum) {
    console.log('filter hp resonance value changed', value);
    return {
        type: 'UPDATE_HP_FILTER_RES' + deckNum,
        payload: value
    }
}

export function handleReverbMixChange(value, deckNum) {
    console.log('reverb mix value changed', value);
    return {
        type: 'UPDATE_REVERB_MIX' + deckNum,
        payload: value
    }
}

export function handleDelayTimeChange(value, deckNum) {
    console.log('delay time value changed', value);
    return {
        type: 'UPDATE_DELAY_TIME' + deckNum,
        payload: value
    }
}

export function handleDelayMixChange(value, deckNum) {
    console.log('delay mix value changed', value);
    return {
        type: 'UPDATE_DELAY_MIX' + deckNum,
        payload: value
    }
}

export function handleDistortionChange(value, deckNum) {
    console.log('distortion value changed', value);
    return {
        type: 'UPDATE_DISTORTION' + deckNum,
        payload: value
    }
}

export function handleBitCrusherBypassChange(deckNum) {
    console.log('bitcrusher bypass value changed');
    //state[deckNum].bitCrusherBypass == 0 ? value == 1 : value == 0
    return {
        type: 'UPDATE_BITCRUSHER_BYPASS' + deckNum,
        //payload: value
    }
}

export function handleBitChange(value, deckNum) {
    console.log('bit value changed', value);
    return {
        type: 'UPDATE_BITS' + deckNum,
        payload: value
    }
}

export function handleNormFreqChange(value, deckNum) {
    console.log('normFreq value changed', value);
    return {
        type: 'UPDATE_NORM_FREQ' + deckNum,
        payload: value
    }
}

export function handleBufferSizeChange(value, deckNum) {
    console.log('buffer size value changed', value);
    return {
        type: 'UPDATE_BUFFER_SIZE' + deckNum,
        payload: value
    }
}