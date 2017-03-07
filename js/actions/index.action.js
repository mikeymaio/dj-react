export function selectSong(song) {
    //const SONG_SELECTED = 'SONG_SELECTED'
    console.log(song.artist.song, ' has been selected');
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export function startStopSong(play) {
    console.log('play/pause clicked');
    return {
        type: 'START_STOP_SONG',
        payload: play
    };
}

export function handleVolumeChange(value) {
    console.log('volume changed');
    return {
        type: 'UPDATE_VOLUME',
        payload: value
    }
}

export function handlePlaybackSpeed(value) {
    console.log('playback speed changed');
    return {
        type: 'UPDATE_PLAYBACK_SPEED',
        payload: value
    }
}

export function handleTrebleControl(value) {
    console.log('treble value changed');
    return {
        type: 'UPDATE_TREBLE_CONTROL',
        payload: value
    }
}

export function handleMidControl(value) {
    console.log('mid value changed');
    return {
        type: 'UPDATE_MID_CONTROL',
        payload: value
    }
}

export function handleBassControl(value) {
    console.log('bass value changed');
    return {
        type: 'UPDATE_BASS_CONTROL',
        payload: value
    }
}

export function handleFilterChange(value) {
    console.log('filter cutoff value changed');
    return {
        type: 'UPDATE_FILTER',
        payload: value
    }
}

export function handleReverbChange(value) {
    console.log('reverb mix value changed');
    return {
        type: 'UPDATE_REVERB',
        payload: value
    }
}

export function handleDelayChange(value) {
    console.log('delay mix value changed');
    return {
        type: 'UPDATE_DELAY',
        payload: value
    }
}

export function handleDistortionChange(value) {
    console.log('distortion value changed');
    return {
        type: 'UPDATE_DISTORTION',
        payload: value
    }
}