import SC from 'soundcloud';

const CLIENT_ID = 'l8b1LlbFBGgDJmPurEkqHuuUHDVckbWK';

SC.initialize({
            client_id: CLIENT_ID,
        });

export function selectSong(file, deckNum) {
    //const SONG_SELECTED = 'SONG_SELECTED'
    const SONG_SELECTED = 'SONG_SELECTED';
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
        dispatch(recieveDataFromAPI(response))})
    .catch(ex => console.log('parsing failed', ex))
  }
}

export function handleBufferStart(deckNum) {
    const START_BUFFER = 'START_BUFFER';
    return {
        type: START_BUFFER + deckNum,
        payload: true
    }
}

export function handleBufferEnd(deckNum) {
    const END_BUFFER = 'END_BUFFER';
    return {
        type: END_BUFFER + deckNum,
        payload: false
    }
}

export function handleModal() {
    const UPDATE_MODAL = 'UPDATE_MODAL';
    return {
        type: UPDATE_MODAL,
    }
}

export function handleSongUpload(file) {
    //const SONG_SELECTED = 'SONG_SELECTED'
    const SONG_UPLOADED = 'SONG_UPLOADED';
    return {
        type: SONG_UPLOADED,
        payload: file
    }
}

export function startStopSong(deckNum) {
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
    const UPDATE_VOLUME = 'UPDATE_VOLUME';
    return {
        type: UPDATE_VOLUME + deckNum,
        payload: value
    }
}

export function handleXFade(value) {
    const UPDATE_X_FADE = 'UPDATE_X_FADE';
    return {
        type: UPDATE_X_FADE,
        payload: value
    }
}

export function handlePlaybackSpeed(value, deckNum) {
    const UPDATE_PLAYBACK_SPEED = 'UPDATE_PLAYBACK_SPEED';
    return {
        type: UPDATE_PLAYBACK_SPEED + deckNum,
        payload: value
    }
}

export function handleTrebleControl(value, deckNum) {
    return {
        type: 'UPDATE_TREBLE_CONTROL' + deckNum,
        payload: value
    }
}

export function handleMidControl(value, deckNum) {
    return {
        type: 'UPDATE_MID_CONTROL' + deckNum,
        payload: value
    }
}

export function handleBassControl(value, deckNum) {
    return {
        type: 'UPDATE_BASS_CONTROL' + deckNum,
        payload: value
    }
}

export function handleLpFilterCutoffChange(value, deckNum) {
    return {
        type: 'UPDATE_LP_FILTER_CUTOFF' + deckNum,
        payload: value
    }
}

export function handleLpFilterResChange(value, deckNum) {
    return {
        type: 'UPDATE_LP_FILTER_RES' + deckNum,
        payload: value
    }
}

export function handleHpFilterCutoffChange(value, deckNum) {
    return {
        type: 'UPDATE_HP_FILTER_CUTOFF' + deckNum,
        payload: value
    }
}

export function handleHpFilterResChange(value, deckNum) {
    return {
        type: 'UPDATE_HP_FILTER_RES' + deckNum,
        payload: value
    }
}

export function handleReverbMixChange(value, deckNum) {
    return {
        type: 'UPDATE_REVERB_MIX' + deckNum,
        payload: value
    }
}

export function handleDelayTimeChange(value, deckNum) {
    return {
        type: 'UPDATE_DELAY_TIME' + deckNum,
        payload: value
    }
}

export function handleDelayMixChange(value, deckNum) {
    return {
        type: 'UPDATE_DELAY_MIX' + deckNum,
        payload: value
    }
}

export function handleDistortionChange(value, deckNum) {
    return {
        type: 'UPDATE_DISTORTION' + deckNum,
        payload: value
    }
}

export function handleBitCrusherBypassChange(deckNum) {
    return {
        type: 'UPDATE_BITCRUSHER_BYPASS' + deckNum,
        //payload: value
    }
}

export function handleBitChange(value, deckNum) {
    return {
        type: 'UPDATE_BITS' + deckNum,
        payload: value
    }
}

export function handleNormFreqChange(value, deckNum) {
    return {
        type: 'UPDATE_NORM_FREQ' + deckNum,
        payload: value
    }
}

export function handleBufferSizeChange(value, deckNum) {
    return {
        type: 'UPDATE_BUFFER_SIZE' + deckNum,
        payload: value
    }
}