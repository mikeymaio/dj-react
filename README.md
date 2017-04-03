# DJ-React
A virtual dj rig for your browser!

## UX
![Laptop Full Size Browser](https://cloud.githubusercontent.com/assets/18637588/24592495/a46b1fae-17cc-11e7-9324-23cc7ba2401f.png)

(https://cloud.githubusercontent.com/assets/18637588/24592495/a46b1fae-17cc-11e7-9324-23cc7ba2401f.png)

DJ-React is built using React and Redux. It is was created with tablets in mind (try it on the largest touch screen device you can get your hands on!), but is responsive on all devices.

## Prototype
You can find a working prototype here: https://hypeufo.github.io/dj-react/


## Technical
DJ-React uses react-dropzone to handle file uploads, as well as the SoundCloudApi. These tracks are used as sources to feed the mixer and fx sextion, which were built using the Web Audio API. When the app loads, the audio players are targeted and the fx sections calls "createMediaSourceElement" on them. These sources are then routed through the various FX before connecting to the audioContext destination (speakers/headphones). All component params are stored in Redux and passed to the appropriate components on change.

## To Do's
  * Connect Volume Meter
  * Add waveform display as background for seek bar
  * Read bpm of tracks in realtime (playback rate changes should update bpm)
  * Seek by spinning turntable deck
  
