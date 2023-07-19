//lorsque j'importe un ou plusieurs éléments je le fait tjrs en début de script
import { playlist_hiphop } from "./lib/playlist_hiphop.js";
import { initSlider } from "./lib/initSlider.js";
import { initAudio } from "./lib/initaudio.js";
//initialisation de mes variables
//let currentTrack = 0;
//pour rendre globale une variable (partager entre tous mes scripts), j'utilise la déclaration globalThis
globalThis.currentTrack = 0;




console.dir(playlist_hiphop);
console.log("Hello");
initSlider(playlist_hiphop,currentTrack,false,"fadeOut");
initAudio(playlist_hiphop);








