//lorsque j'importe un ou plusieurs éléments je le fait tjrs en début de script
import { playlist_hiphop } from "./lib/playlist_hiphop.js";
import { initSlider, userSliderAction } from "./lib/initSlider.js";
import { initAudio } from "./lib/initaudio.js";

//initialisation de mes variables
//let currentTrack = 0;
//pour rendre globale une variable (partager entre tous mes scripts), j'utilise la déclaration globalThis
globalThis.currentTrack = "init";
globalThis.randomArray = [];
globalThis.playlist = playlist_hiphop;
globalThis.trackB = null;

globalThis.imageA =  globalThis.imageB = globalThis.texteA =  globalThis.texteB = null;
globalThis.userSliderAction = userSliderAction;
initSlider();
initAudio();
// userSliderAction();
