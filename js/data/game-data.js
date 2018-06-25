import music from './music.js';

export default [
  {
    type: 1,
    title: `Кто исполняет эту песню?`,
    audio: music[0].src,
    options: [music[0].artist, music[1].artist, music[2].artist],
    answer: music[0].artist
  },
  {
    type: 2,
    title: `Выберите инди-рок треки`,
    options: [music[2].src, music[3].src, music[4].src, music[5].src],
    answer: [music[3].src, music[4].src]
  },
  // {
  //   type: 1,
  //   title: `Кто исполняет эту песню?`,
  //   audio: music[0].src,
  //   options: [music[0].artist, music[1].artist, music[2].artist],
  //   answer: music[0].artist
  // },
  // {
  //   type: 2,
  //   title: `Выберите инди-рок треки`,
  //   options: [music[2].src, music[3].src, music[4].src, music[5].src],
  //   answer: [music[3].src, music[4].src]
  // },
  // {
  //   type: 1,
  //   title: `Кто исполняет эту песню?`,
  //   audio: music[0].src,
  //   options: [music[0].artist, music[1].artist, music[2].artist],
  //   answer: music[0].artist
  // },
  // {
  //   type: 2,
  //   title: `Выберите инди-рок треки`,
  //   options: [music[2].src, music[3].src, music[4].src, music[5].src],
  //   answer: [music[3].src, music[4].src]
  // },
  // {
  //   type: 1,
  //   title: `Кто исполняет эту песню?`,
  //   audio: music[0].src,
  //   options: [music[0].artist, music[1].artist, music[2].artist],
  //   answer: music[0].artist
  // },
  // {
  //   type: 2,
  //   title: `Выберите инди-рок треки`,
  //   options: [music[2].src, music[3].src, music[4].src, music[5].src],
  //   answer: [music[3].src, music[4].src]
  // },
  // {
  //   type: 1,
  //   title: `Кто исполняет эту песню?`,
  //   audio: music[0].src,
  //   options: [music[0].artist, music[1].artist, music[2].artist],
  //   answer: music[0].artist
  // },
  // {
  //   type: 2,
  //   title: `Выберите инди-рок треки`,
  //   options: [music[2].src, music[3].src, music[4].src, music[5].src],
  //   answer: [music[3].src, music[4].src]
  // }
];
