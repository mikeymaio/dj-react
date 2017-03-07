export function selectSong(song, deckNum) {
    //const SONG_SELECTED = 'SONG_SELECTED'
    const SONG_SELECTED = 'SONG_SELECTED';
    console.log(song.artist.song, ' has been selected');
    return {
        type: SONG_SELECTED + deckNum,
        payload: song
    }
}

export function startStopSong(deckNum) {
    console.log('play/pause clicked');
    const START_STOP_SONG = 'START_STOP_SONG';
    return {
        type: START_STOP_SONG + deckNum,
    };
}

export function handleVolumeChange(value, deckNum) {
    console.log('volume changed');
    const UPDATE_VOLUME = 'UPDATE_VOLUME';
    return {
        type: UPDATE_VOLUME + deckNum,
        payload: value
    }
}

export function handlePlaybackSpeed(value, deckNum) {
    console.log('playback speed changed');
    const UPDATE_PLAYBACK_SPEED = 'UPDATE_PLAYBACK_SPEED';
    return {
        type: UPDATE_PLAYBACK_SPEED + deckNum,
        payload: value
    }
}

export function handleTrebleControl(value, deckNum) {
    console.log('treble value changed');
    return {
        type: 'UPDATE_TREBLE_CONTROL' + deckNum,
        payload: value
    }
}

export function handleMidControl(value, deckNum) {
    console.log('mid value changed');
    return {
        type: 'UPDATE_MID_CONTROL' + deckNum,
        payload: value
    }
}

export function handleBassControl(value, deckNum) {
    console.log('bass value changed');
    return {
        type: 'UPDATE_BASS_CONTROL' + deckNum,
        payload: value
    }
}

export function handleFilterChange(value, deckNum) {
    console.log('filter cutoff value changed');
    return {
        type: 'UPDATE_FILTER' + deckNum,
        payload: value
    }
}

export function handleReverbChange(value, deckNum) {
    console.log('reverb mix value changed');
    return {
        type: 'UPDATE_REVERB' + deckNum,
        payload: value
    }
}

export function handleDelayChange(value, deckNum) {
    console.log('delay mix value changed');
    return {
        type: 'UPDATE_DELAY' + deckNum,
        payload: value
    }
}

export function handleDistortionChange(value, deckNum) {
    console.log('distortion value changed');
    return {
        type: 'UPDATE_DISTORTION' + deckNum,
        payload: value
    }
}