const initAudio = () => {
  currentTrack === "init" ? currentTrack = 0 : ""
  function nextCurrentTrack() {
    if (currentTrack < playlist.length - 1) {
      currentTrack++;
    } else {
      currentTrack = 0;
    }
  }
  function backCurrentTrack() {
    if (currentTrack > 0) {
      currentTrack--;
    } else {
      currentTrack = playlist.length - 1;
    }
  }
  //function de formatage de temps audio
  const horloge = (temps) => {
    let totalHeures = Math.floor(temps / 3600);

    let totalMinutes = Math.floor(temps / 60);
    // pour récupérer le nombre de secondes restantes à mon temps exprimé en minutes j'utilise l'opérateur mathématique modulo (%)
    let totalSeconde = Math.floor(temps % 60);

    // si j'utilise à la suite d'une conditions qu'une seule insctruction, je poeu la déclarer  sans les {}.
    if (totalHeures <= 9) totalHeures = "0" + totalHeures;
    if (totalMinutes <= 9) totalMinutes = "0" + totalMinutes;
    if (totalSeconde <= 9) totalSeconde = "0" + totalSeconde;
    //ls fonctions peuvent retourner le resultat d'une opération avec le mot clè return
    return totalHeures + ":" + totalMinutes + ":" + totalSeconde;
  };
  //fonction qui va attribuer à currenTrack l'index aléatoire que je vient de tirer
  // fonction qui va attribuer à currentTrack l'index aléatoire
  // que je viens de tirer
  function nextRandomTrack(randomIndex) {
    // j'ai besoin de savoir si currentTrack est déjà present dans mon tables randomArray
    if (randomArray.length >= playlist.length - 1) {
      randomArray.splice(0, playlist.length / 1.75);
    }
    if (randomArray.length > 1) {
      let positiveResult = false;
      for (let i = 0; i < randomArray.length; i++) {
        const element = randomArray[i];
        // mon currentTrack
        if (element === randomIndex) {
          positiveResult = true;
        }
      }
      if (positiveResult) {
        let randomIndexTmp = Math.floor(Math.random() * playlist.length);
        nextRandomTrack(randomIndexTmp);
      } else {
        randomArray.push(randomIndex);
        currentTrack = randomIndex;
      }
    } else {
      randomArray.push(randomIndex);
      currentTrack = randomIndex;
    }
    console.dir(randomArray);
    console.log(currentTrack);
  }

  //autre type de déclaration de fonction avec le mots clé function
  const togglePlayButton = () => {
    document.querySelector("#playPause i").classList.toggle("fa-play");
    document.querySelector("#playPause i").classList.toggle("fa-pause");
  };

  const playPause = document.querySelector("#playPause");
  const next = document.querySelector(".next");
  const back = document.querySelector(".back");
  const plus = document.querySelector(".plus");
  const moin = document.querySelector(".moin");
  const time = document.querySelector(".time");
  const random = document.querySelector(".random");
  const randomColor = document.querySelector(".random i");

  const audio = new Audio(playlist[currentTrack].audio);
  audio.isPlaying = false;
  audio.volume = 0.5;
  audio.random = false;

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

    if (audio.random) {
      //trouver un index de playlist aléatoirement
      let randomIndexTmp = Math.floor(Math.random() * playlist.length);

      if (audio.isPlaying) {
        userSliderAction("swipeLeft",true)
        audio.pause();
        nextRandomTrack(randomIndexTmp);
        audio.src = playlist[currentTrack].audio;
        audio.play();
        audio.isPlaying = true;
      } else {
        nextRandomTrack(randomIndexTmp);
        audio.src = playlist[currentTrack].audio;
        audio.play();
        audio.isPlaying = true;
        togglePlayButton();
      }
    } else {
      if (audio.isPlaying) {
        audio.pause();
        nextCurrentTrack();
        audio.src = playlist[currentTrack].audio;
        audio.play();
        audio.isPlaying = true;
      } else {
        userSliderAction("swipeLeft",true)
        nextCurrentTrack();
        audio.src = playlist[currentTrack].audio;
        audio.play();
        audio.isPlaying = true;
        togglePlayButton();
      }

      //lecture ou pas
      //si lecture (isPlaying = true)
    }
  });

  // la fonction qui va gérer le retour dans mon tableau randomArray
  const prevRandomTrack = () => {
    if(randomArray.length > 0){
        if(currentTrack === randomArray[randomArray.length-1]){
            currentTrack = randomArray[randomArray.length-2];
            // supprimer cette entrée
            randomArray.splice(randomArray.length-1,1);
        } else {
            currentTrack = randomArray[randomArray.length-1];
        }
    } else {
        console.log("vide");
        let randomIndexTmp = Math.floor(Math.random() * playlist.length);
        randomArray.push(randomIndexTmp);
        nextRandomTrack(randomIndexTmp);
    }
    console.dir(randomArray);
    console.log(currentTrack);
}

  //utilisation d'une fonction event raccourcie à la place du traditionel addEventListener ex : onclick, onkeyup, onscroll...
  random.onclick = () => {
    console.dir("click sur random");
    //inverser une boolean

    //premiere version condition standard
    //if (audio.random /*=== true*/) {
    // audio.random = false;
    // } else {
    //  audio.random = true;
    //}

    //2e version condition ternaire
    //condition ternaire
    //dans une ternaire le ? sépare ma condition (à droite) de mon instruction pour true (a gauche). et le signe  :  renverra l'instruction unique pour false (à gauche)
    //exemple :  audio.isPlaying === true ? audio.pause() : audio.play();
    //audio.random ? audio.random = false : audio.random = true;
    //ou
    //audio.random = audio.random ? false : true;

    //3e version affectation du contraire
    audio.random = !audio.random;

    console.dir(random.classList);
    randomColor.classList.toggle("red");
  };

  moin.addEventListener("click", () => {
    // je veux retirer 10% au volume actuelle (entre 0 et 1 fixé a 1 par défaut)

    audio.volume = Math.round(audio.volume * 100) / 100;
    if (audio.volume > 0) {
      audio.volume = audio.volume - 0.1;
      // ou audio.volume -= 0.1; (version raccourcie)
    }
  });

  plus.addEventListener("click", () => {
    // je veux retirer 10% au volume actuelle (entre 0 et 1 fixé a 1 par défaut)

    audio.volume = Math.round(audio.volume * 100) / 100;
    if (audio.volume < 1) {
      audio.volume = audio.volume + 0.1;
      // ou audio.volume += 0.1; (version raccourcie)
    }
  });
  setTimeout(() => {
    //grace au return de ma fonction horlaoge je peux utiliser horloge comme une valeur
    let tmpHorloge = horloge(audio.duration);

    setInterval(() => {
      time.textContent =
        horloge(Math.round(audio.currentTime)) + "/" + horloge(audio.duration);
    }, 1000);
  }, 200);
};

export { initAudio };
