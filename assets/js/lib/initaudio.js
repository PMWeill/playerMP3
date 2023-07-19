const initAudio = (playlist) => {
  function nextCurrentTrack() {
    if (currentTrack < playlist.length - 1) {
      currentTrack++;
    } else {
      currentTrack = 0;
    }
  }
  function backCurrentTrack() {
    if (currentTrack < playlist.length - 1) {
      currentTrack--;
    } else {
      currentTrack = 0;
    }
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
  const audio = new Audio(playlist[currentTrack].audio);
  audio.isPlaying = false;
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
    //lecture ou pas
    //si lecture (isPlaying = true)
    if (audio.isPlaying) {
      audio.isPlaying = true;
      console.log(currentTrack);
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
};

export { initAudio };
