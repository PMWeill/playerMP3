const initAudio = (playlist) => {
  function nextCurrentTrack() {
    if (currentTrack < playlist.length - 1) {
      currentTrack++;
    } else {
      currentTrack = 0;
    }
  }
  function backCurrentTrack() {
    if (currentTrack === 0) {
      currentTrack = playlist.length - 1;
      
    } else {
      
      currentTrack--;
    }
  }
//function de formatage de temps audio
const horloge = (temps) => {


  let totalHeures = Math.floor(temps/3600);

  let totalMinutes = Math.floor(temps/60);
  // pour récupérer le nombre de secondes restantes à mon temps exprimé en minutes j'utilise l'opérateur mathématique modulo (%)
  let totalSeconde = Math.floor(temps % 60);
  console.dir(totalHeures);
  console.dir(totalMinutes);
  console.log(totalSeconde);
  // si j'utilise à la suite d'une conditions qu'une seule insctruction, je poeu la déclarer  sans les {}.
if (totalHeures<=9)totalHeures = "0"+totalHeures;
if (totalMinutes<=9)totalMinutes = "0"+totalMinutes;
if (totalSeconde<=9)totalSeconde = "0"+totalSeconde;
//ls fonctions peuvent retourner le resultat d'une opération avec le mot clè return
return(totalHeures+":"+totalMinutes+":"+totalSeconde);
}


  //autre type de déclaration de fonction avec le mots clé function
  const togglePlayButton = () => {
    document.querySelector("#playPause i").classList.toggle("fa-play");
    document.querySelector("#playPause i").classList.toggle("fa-pause");
  };
  console.log("Hello Audio!!!!!!!!!!!!");
  const playPause = document.querySelector("#playPause");
  const next = document.querySelector(".next");
  const back = document.querySelector(".back");
  const plus = document.querySelector(".plus");
  const moin = document.querySelector(".moin");
  const time = document.querySelector(".time");
  const random = document.querySelector(".random");

  const audio = new Audio(playlist[currentTrack].audio);
  audio.isPlaying = false;
  audio.volume = .5;
  console.dir(audio);

  playPause.addEventListener("click", () => {
    //condition ternaire
    //dans une ternaire le ? sépare ma condition (à droite) de mon instruction pour true (a gauche). et le signe  :  renverra l'instruction unique pour false (à gauche)
    // audio.isPlaying === true ? audio.pause() : audio.play();

    togglePlayButton();

    if (audio.isPlaying) {
      audio.isPlaying = false;
      audio.pause();
    } else {
      audio.isPlaying = true;
      audio.play();
    }
  });

  next.addEventListener("click", () => {
    //lecture ou pas
    //si lecture (isPlaying = true)
    if (audio.isPlaying) {
      audio.isPlaying = true;
      console.log(currentTrack);
      // -> audio.pause(),
      audio.pause();
      //-> currentTrack++avec condition de taille du tableau d'objet,
      nextCurrentTrack();

      //-> audio.src à redifinir avec le currentTrack incrémenté;
      audio.src = playlist[currentTrack].audio;
      //-> audio.play()
      audio.play();
    } else {
      audio.isPlaying = false;

      //sinon: currentTrack++ avec condition de taille du tableau d'objet,
      nextCurrentTrack();
      //-> audio.src à redifinir avec le currentTrack incrémenté;
      audio.src = playlist[currentTrack].audio;
      //-> audio.play(),
      audio.play();
      // passer isPlaying a true,
      audio.isPlaying = true;

      //-> gestion affichage bouton playPause
      togglePlayButton();
    }
  });

  back.addEventListener("click", () => {
    console.log(currentTrack);
    //lecture ou pas
    //si lecture (isPlaying = true)
    if (audio.isPlaying) {
      audio.isPlaying = true;

      // -> audio.pause(),
      audio.pause();
      //-> currentTrack++avec condition de taille du tableau d'objet,
      backCurrentTrack();

      //-> audio.src à redifinir avec le currentTrack incrémenté;
      audio.src = playlist[currentTrack].audio;
      //-> audio.play()
      audio.play();
    } else {
      audio.isPlaying = false;

      //sinon: currentTrack++ avec condition de taille du tableau d'objet,
      backCurrentTrack();
      //-> audio.src à redifinir avec le currentTrack incrémenté;
      audio.src = playlist[currentTrack].audio;
      //-> audio.play(),
      audio.play();
      // passer isPlaying a true,
      audio.isPlaying = true;

      //-> gestion affichage bouton playPause
      togglePlayButton();
    }
  });

//utilisation d'une fonction event raccourcie à la place du traditionel addEventListener ex : onclick, onkeyup, onscroll...
  random.onclick = () => {
    console.dir("click sur random");
   
    
   
    

  };



  

  moin.addEventListener("click", () => {
    console.dir(audio.volume);
    // je veux retirer 10% au volume actuelle (entre 0 et 1 fixé a 1 par défaut)
    
    audio.volume = Math.round(audio.volume*100)/100;
    if (audio.volume >0){
      audio.volume = audio.volume - 0.1;
      // ou audio.volume -= 0.1; (version raccourcie)
    }
    
    

  });


  plus.addEventListener("click", () => {
    console.dir(audio.volume);
    // je veux retirer 10% au volume actuelle (entre 0 et 1 fixé a 1 par défaut)
    
    audio.volume = Math.round(audio.volume*100)/100;
    if (audio.volume <1){
      audio.volume = audio.volume + 0.1;
      // ou audio.volume += 0.1; (version raccourcie)
    }
  });
setTimeout(() => {
  //grace au return de ma fonction horlaoge je peux utiliser horloge comme une valeur
  let tmpHorloge = horloge(audio.duration)
 console.log(tmpHorloge); 
setInterval(() => {
  console.log(horloge(Math.round(audio.currentTime)));
  time.textContent = horloge(Math.round(audio.currentTime))+"/"+horloge(audio.duration)
}, 1000);

}, 200);







































};

export { initAudio };
