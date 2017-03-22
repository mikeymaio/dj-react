import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

// COMPONENTS

import Hello from '../js/components/hello-world.component';
import App from '../js/components/app.component';
import Header from '../js/components/header.component';
import Table from '../js/components/table.component';
import Search from '../js/components/search.component';
import ChannelLeft from '../js/components/channel-left.component';
import ChannelRight from '../js/components/channel-right.component';
import Turntable from '../js/components/turntable2.component';
import Mixer from '../js/components/mixer.component';
import FxSection from '../js/components/fx-section.component';


// ACTIONS

import * as actions from '../js/actions/index.action';

// Reducers

import rootReducer from '../js/reducers/index.reducer';

describe('Components', () => {

    describe('Hello component', function() {
        it('Renders a greeting',  function() {
            const greeting = 'Hello World';

            const renderer = TestUtils.createRenderer();
            renderer.render(<Hello greeting={greeting} />);
            const result = renderer.getRenderOutput();

            const p = result.props;
            console.log(p);
            p.children.type.should.equal('h1');
            p.className.should.equal('hello');
            p.children.props.should.be.a('object');
            p.children.props.children.should.equal(greeting);
        });
    });

// describe('App component', function() {
//     it('Renders all components',  function() {

//         const renderer = TestUtils.createRenderer();
//         renderer.render(<App />);
//         const result = renderer.getRenderOutput();

//         const p = result.props;
//         console.log(p);
//         p.children.type.should.equal(div);
//         p.children.props.should.be.a('object');
//     });
// });

// describe('Table component', function() {
//     it('Renders search, channel-left, channel-right, and crossfader',  function() {

//         const renderer = TestUtils.createRenderer();
//         renderer.render(<Table />);
//         const result = renderer.getRenderOutput();

//         const p = result.props;
//         console.log(p);
//         p.className.should.equal('container col-lg-10 col-lg-offset-1');
//         // p.children.type.should.equal(div);
//         p.children.props.should.be.a('object');
//     });
// });
});

describe('Actions', () => {

    describe('selectSong', () => {
        it('Should return the selected song', () => {
            const file = {text: '', value: (<li></li>), url: ''}
            const deckNum = "_DECK_NUM"
            const action = actions.selectSong(file, deckNum);
            action.type.should.equal('SONG_SELECTED'+deckNum);
            action.payload.should.deep.equal(file);
            action.payload.should.be.a('object');
            action.payload.should.include.keys('text', 'value', 'url');
            action.payload.text.should.be.a('string');
            action.payload.value.should.be.a('object')
            action.payload.url.should.be.a('string')
        });
    });

    describe('startStopSong', () => {
        it('Should play or pause the song', () => {
            const deckNum = "_DECK_NUM"
            const action = actions.selectSong(deckNum);
        });
    });

    describe('handleVolumeChange', () => {
        it('Should return the new volume value', () => {
            const value = 1
            const deckNum = "_DECK_NUM"
            const action = actions.handleVolumeChange(value, deckNum);
            action.type.should.equal('UPDATE_VOLUME'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleXFade', () => {
        it('Should return the new xFade value', () => {
            const value = 1
            const action = actions.handleXFade(value);
            action.type.should.equal('UPDATE_X_FADE');
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handlePlaybackSpeed', () => {
        it('Should return the new playback value', () => {
            const value = 1.5
            const deckNum = "_DECK_NUM"
            const action = actions.handlePlaybackSpeed(value, deckNum);
            action.type.should.equal('UPDATE_PLAYBACK_SPEED'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleTrebleControl', () => {
        it('Should return the new treble value', () => {
            const value = 3
            const deckNum = "_DECK_NUM"
            const action = actions.handleTrebleControl(value, deckNum);
            action.type.should.equal('UPDATE_TREBLE_CONTROL'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleMidControl', () => {
        it('Should return the new mid value', () => {
            const value = 3
            const deckNum = "_DECK_NUM"
            const action = actions.handleMidControl(value, deckNum);
            action.type.should.equal('UPDATE_MID_CONTROL'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleBassControl', () => {
        it('Should return the new bass value', () => {
            const value = 3
            const deckNum = "_DECK_NUM"
            const action = actions.handleBassControl(value, deckNum);
            action.type.should.equal('UPDATE_BASS_CONTROL'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleLpFilterCutoffChange', () => {
        it('Should return the new lowpass filter cutoff value', () => {
            const value = 1000
            const deckNum = "_DECK_NUM"
            const action = actions.handleLpFilterCutoffChange(value, deckNum);
            action.type.should.equal('UPDATE_LP_FILTER_CUTOFF'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleLpFilterResChange', () => {
        it('Should return the new lowpass filter resonance value', () => {
            const value = 2
            const deckNum = "_DECK_NUM"
            const action = actions.handleLpFilterResChange(value, deckNum);
            action.type.should.equal('UPDATE_LP_FILTER_RES'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleHpFilterCutoffChange', () => {
        it('Should return the new highpass filter cutoff value', () => {
            const value = 1000
            const deckNum = "_DECK_NUM"
            const action = actions.handleHpFilterCutoffChange(value, deckNum);
            action.type.should.equal('UPDATE_HP_FILTER_CUTOFF'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleHpFilterResChange', () => {
        it('Should return the new highpass filter resonance value', () => {
            const value = 2
            const deckNum = "_DECK_NUM"
            const action = actions.handleHpFilterResChange(value, deckNum);
            action.type.should.equal('UPDATE_HP_FILTER_RES'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleReverbMixChange', () => {
        it('Should return the new reverb mix value', () => {
            const value = 1
            const deckNum = "_DECK_NUM"
            const action = actions.handleReverbMixChange(value, deckNum);
            action.type.should.equal('UPDATE_REVERB_MIX'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });


    describe('handleDelayTimeChange', () => {
        it('Should return the new delay time value', () => {
            const value = 500
            const deckNum = "_DECK_NUM"
            const action = actions.handleDelayTimeChange(value, deckNum);
            action.type.should.equal('UPDATE_DELAY_TIME'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleDelayMixChange', () => {
        it('Should return the new delay mix value', () => {
            const value = 500
            const deckNum = "_DECK_NUM"
            const action = actions.handleDelayMixChange(value, deckNum);
            action.type.should.equal('UPDATE_DELAY_MIX'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleDistortionChange', () => {
        it('Should return the new distortion value', () => {
            const value = 1
            const deckNum = "_DECK_NUM"
            const action = actions.handleDistortionChange(value, deckNum);
            action.type.should.equal('UPDATE_DISTORTION'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleBitCrusherBypassChange', () => {
        it('Should return the new bitcrusher bypass value', () => {
            const deckNum = "_DECK_NUM"
            const action = actions.handleBitCrusherBypassChange(deckNum);
            action.type.should.equal('UPDATE_BITCRUSHER_BYPASS'+deckNum);
        });
    });

    describe('handleBitChange', () => {
        it('Should return the new bitcrusher bit value', () => {
            const value = 8
            const deckNum = "_DECK_NUM"
            const action = actions.handleBitChange(value, deckNum);
            action.type.should.equal('UPDATE_BITS'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleNormFreqChange', () => {
        it('Should return the new normal frequency value', () => {
            const value = 8
            const deckNum = "_DECK_NUM"
            const action = actions.handleNormFreqChange(value, deckNum);
            action.type.should.equal('UPDATE_NORM_FREQ'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

    describe('handleBufferSizeChange', () => {
        it('Should return the new bitcrusher buffer size value', () => {
            const value = 1024
            const deckNum = "_DECK_NUM"
            const action = actions.handleBufferSizeChange(value, deckNum);
            action.type.should.equal('UPDATE_BUFFER_SIZE'+deckNum);
            action.payload.should.equal(value);
            action.payload.should.be.a('number');
        });
    });

});


describe('Reducer', () => {
    const deckNum = "_DECK1"
    const testState = {
    playlistReducer: {
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
},

    decksReducer: {
        both: {
            xFade: 0.5,
        },
        deck1: {
            activeSong:
        {
            url: '../assets/test_playlist/James_Brown_vs_Led Zeppelin-Whole_Lotta_Sex_Machine.mp3',
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJOD-M7WZkZQ%2Fhqdefault.jpg&f=1',

                name: 'James Brown Vs Led Zeppelin',
                song: 'Whole Lotta Sex Machine'

        },
            play: false,
            progress: 0,
            volume: 0.8,
            speed: 1,
            treble: 0,
            mid: 0,
            bass: 0,
            lpFilterCutoff: 16000,
            lpFilterRes: 0,
            hpFilterCutoff: 20,
            hpFilterRes: 0,
            reverbMix: 0,
            delayMix: 0,
            delayTime: 500,
            bitCrusherBypass: true,
            bits: 100,
            normFreq: 0.2,
            bufferSize: 4096,
            distortion: 0,
        },
        deck2: {
            activeSong: {
            url: '../assets/test_playlist/Creedence_Clearwater_Revival-Suzie_Q.mp3' ,
            cover: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-Y6gSuNZrGy8%2FT2s-cIQwS_I%2FAAAAAAAABwY%2FHAgkHzR2k_M%2Fs1600%2F114125684.jpg&f=1',
                name: 'Creedence Clearwater Revival',
                song: 'Suzie Q'
        },
            play: false,
            progress: 0,
            volume: 0.8,
            speed: 1,
            treble: 0,
            mid: 0,
            bass: 0,
            lpFilterCutoff: 16000,
            lpFilterRes: 0,
            hpFilterCutoff: 20,
            hpFilterRes: 0,
            reverbMix: 0,
            delayMix: 0,
            delayTime: 500,
            bitCrusherBypass: true,
            bits: 100,
            normFreq: 0.2,
            bufferSize: 4096,
            distortion: 0,
        },
    }};

    it('Should set the initial state when nothing is passed in', () => {

        const state = rootReducer(undefined, {type: '__UNKNOWN'});

        state.playlistReducer.playlist.should.deep.equal(testState.playlistReducer.playlist);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = testState;
        const state = rootReducer(currentState, {type: '__UNKNOWN'});
        state.should.deep.equal(currentState);
    });

// describe('selectSong', () => {
    it('Should update activeSong', () => {
        let state = testState;
        const newSong = {
            url: '../assets/test_playlist/Hugo-99_Problems_163BPM.mp3' ,
            cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
            name: 'Hugo',
            song: '99 Problems'
        };
        state = rootReducer(state, actions.selectSong(newSong, deckNum));
        state.decksReducer.deck1.activeSong.should.deep.equal(newSong);
    });
// });

    it('Should play/pause activeSong', () => {
        let state = testState;
        const play = true
        state = rootReducer(state, actions.startStopSong(deckNum));
        state.decksReducer.deck1.play.should.equal(play);
    });

    it('Should change volume value', () => {
        let state = testState;
        const volume = 0.5
        state = rootReducer(state, actions.handleVolumeChange(volume, deckNum));
        state.decksReducer.deck1.volume.should.equal(volume);
    });

    it('Should change xFade value', () => {
        let state = testState;
        const xFade = 1
        state = rootReducer(state, actions.handleXFade(xFade));
        state.decksReducer.both.xFade.should.equal(xFade);
    });

    it('Should change playback speed value', () => {
        let state = testState;
        const playbackSpeed = 1.5;
        state = rootReducer(state, actions.handlePlaybackSpeed(playbackSpeed, deckNum));
        state.decksReducer.deck1.speed.should.equal(playbackSpeed * 2);
    });

    it('Should change treble value', () => {
        let state = testState;
        const treble = 3;
        state = rootReducer(state, actions.handleTrebleControl(treble, deckNum));
        state.decksReducer.deck1.treble.should.equal(treble);
    });

    it('Should change mid value', () => {
        let state = testState;
        const mid = 3;
        state = rootReducer(state, actions.handleMidControl(mid, deckNum));
        state.decksReducer.deck1.mid.should.equal(mid);
    });

    it('Should change bass value', () => {
        let state = testState;
        const bass = 3;
        state = rootReducer(state, actions.handleBassControl(bass, deckNum));
        state.decksReducer.deck1.bass.should.equal(bass);
    });

    it('Should change lowpass filter cutoff value', () => {
        let state = testState;
        const lpCutoff = 1000;
        state = rootReducer(state, actions.handleLpFilterCutoffChange(lpCutoff, deckNum));
        state.decksReducer.deck1.lpFilterCutoff.should.equal(lpCutoff);
    });

    it('Should change lowpass filter resonance value', () => {
        let state = testState;
        const lpFilterRes = 2;
        state = rootReducer(state, actions.handleLpFilterResChange(lpFilterRes, deckNum));
        state.decksReducer.deck1.lpFilterRes.should.equal(lpFilterRes);
    });

    it('Should change highpass filter cutoff value', () => {
        let state = testState;
        const hpFilterCutoff = 1000;
        state = rootReducer(state, actions.handleHpFilterCutoffChange(hpFilterCutoff, deckNum));
        state.decksReducer.deck1.hpFilterCutoff.should.equal(hpFilterCutoff);
    });

    it('Should change highpass filter resonance value', () => {
        let state = testState;
        const hpFilterRes = 0.8;
        state = rootReducer(state, actions.handleHpFilterResChange(hpFilterRes, deckNum));
        state.decksReducer.deck1.hpFilterRes.should.equal(hpFilterRes);
    });


    it('Should change reverb mix value', () => {
        let state = testState;
        const reverb = 1;
        state = rootReducer(state, actions.handleReverbMixChange(reverb, deckNum));
        state.decksReducer.deck1.reverbMix.should.equal(reverb);
    });

    it('Should change delay time value', () => {
        let state = testState;
        const delayTime = 700;
        state = rootReducer(state, actions.handleDelayTimeChange(delayTime, deckNum));
        state.decksReducer.deck1.delayTime.should.equal(delayTime);
    });

    it('Should change delay mix value', () => {
        let state = testState;
        const delayMix = 0.6;
        state = rootReducer(state, actions.handleDelayMixChange(delayMix, deckNum));
        state.decksReducer.deck1.delayMix.should.equal(delayMix);
    });

    it('Should change distortion value', () => {
        let state = testState;
        const distortion = 1;
        state = rootReducer(state, actions.handleDistortionChange(distortion, deckNum));
        state.decksReducer.deck1.distortion.should.equal(distortion);
    });

    it('Should change bitcrusher bypass value', () => {
        let state = testState;
        const bitCrusherBypass = false;
        state = rootReducer(state, actions.handleBitCrusherBypassChange(deckNum));
        state.decksReducer.deck1.bitCrusherBypass.should.equal(bitCrusherBypass);
    });



    it('Should change bitcrusher bit value', () => {
        let state = testState;
        const bits = 8;
        state = rootReducer(state, actions.handleBitChange(bits, deckNum));
        state.decksReducer.deck1.bits.should.equal(bits);
    });

    it('Should change bitcrusher normal frequency value', () => {
        let state = testState;
        const normFreq = 1;
        state = rootReducer(state, actions.handleNormFreqChange(normFreq, deckNum));
        state.decksReducer.deck1.normFreq.should.equal(normFreq);
    });

    it('Should change bitcrusher buffer size value', () => {
        let state = testState;
        const bufferSize = 256;
        state = rootReducer(state, actions.handleBufferSizeChange(bufferSize, deckNum));
        state.decksReducer.deck1.bufferSize.should.equal(bufferSize);
    });






// SONG UPLOAD IS NOT YET SUPPORTED
//         it('Should update state.playlist', () => {

//         });

        // it('Should...', () => {


        // });




});
