import music from './music.js';

export default [
  {
    title: `Кто исполняет эту песню?`,
    audio: music[0].src,
    options: [music[0].artist, music[1].artist, music[2].artist],
    answer: music[0].artist
  },
  {
    title: `Выберите инди-рок треки`,
    options: [music[2].src, music[3].src, music[4].src, music[5].src],
    answer: [music[3].src, music[4].src]
  }
];
