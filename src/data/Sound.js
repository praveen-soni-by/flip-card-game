import sound from '../assets/sound/creepy.mp3';
import flip from '../assets/sound/flip.wav';
import victory from '../assets/sound/victory.wav';
import gameOver from '../assets/sound/gameOver.wav';
import match from '../assets/sound/match_new.mp3';
import { Howl } from 'howler';

const BackGroundSound = new Howl({
  src: [sound],
  volume: 0.4
});

const Flip = new Howl({
  src: [flip],
  volume: 0.9
});

const winner = new Howl({
  src: [victory],
  volume: 0.9
});

const looser = new Howl({
  src: [gameOver],
  volume: 0.9
});

const matchCard = new Howl({
  src: [match],
  volume: 0.8
});


export default {matchCard, winner, looser, Flip ,BackGroundSound}