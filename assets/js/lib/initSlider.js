function initSlider(playlist, track, direction, effect) {
  console.log("slider");
  console.dir(playlist);
  //   ici je recupere l'url de l'imaga a afficher dans le slider
  console.dir(playlist[track].cover);
  const slider = document.getElementById("slider");





  let trackB; //veut dire let trackB = null
  //tt les 5 s fait disparraitre l'imageA et txtA pour faire apparaitre l'imageB et txtB
  // la condition if verifie si une oprération est vraie
  if (direction /*=== true*/) {
    trackB = track + 1;
  } else {
    trackB = playlist.length - 1;
  }

  //creation d'une première image imageA
  const imageA = document.createElement("img");
  imageA.id = "imageA";
  imageA.src = playlist[track].cover;
  imageA.alt = playlist[track].author;
  imageA.style.zIndex = "2";
  imageA.style.borderRadius = 20 + "px";
  slider.prepend(imageA);

  //j'aimerais connaitre le height de mon imageA mais je doit d'abord attendre que mon image soit uploader par mon navigateur
  //je dois temporiser avec javascript avant d'obtenir des informations de mon image
  const imageB = document.createElement("img");
  imageB.id = "imageB";
  imageB.src = playlist[trackB].cover;
  imageB.alt = playlist[trackB].author;
  imageB.style.zIndex = "0";
  imageB.style.borderRadius = 20 + "px";
  slider.prepend(imageB);

  //creation d'une balise texte titreA
  const texteA = document.createElement("p");
  texteA.id = "texteA";
  texteA.style.zIndex = "3";

  texteA.innerHTML =
    "<p class= 'title'>" +
    playlist[track].title +
    "</p><p class= 'author'>" +
    playlist[track].author +
    "</p>";
  //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
  slider.append(texteA);

  const texteB = document.createElement("p");
  texteB.id = "texteB";
  texteB.style.zIndex = "1";
  texteB.innerHTML =
    "<p class= 'title'>" +
    playlist[trackB].title +
    "</p><p class= 'author'>" +
    playlist[trackB].author +
    "</p>";
  //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
  slider.prepend(texteB);

  setTimeout(() => {
    console.dir(imageA.clientHeight);
    slider.style.height = imageA.clientHeight + "px";
    slider.style.height = imageB.clientHeight + "px";
  }, 500);

  setInterval(() => {
    imageA.classList.add("trans");
    texteA.classList.add("trans");
    imageA.classList.add(effect);
    texteA.classList.add(effect);
    //j'attend la fin de ma transition(500ms) pour la suite

    setTimeout(() => {
      if (direction) {
        //je commence par incrémenter track
        if (trackB === playlist.length - 1) {
          trackB = 0;
        } else {
          trackB++;
        }

        if (track === playlist.length - 1) {
          track = 0;
        } else {
          track++;
        }
      } else {
        if (trackB === 0) {
          trackB = playlist.length - 1;
        } else {
          trackB--;
        }
        if (track === 0) {
          track = playlist.length - 1;
        } else {
          track--;
        }
      }

      imageA.src = playlist[track].cover;
      imageA.alt = playlist[track].author;
      texteA.innerHTML =
        "<p class= 'title'>" +
        playlist[track].title +
        "</p><p class= 'author'>" +
        playlist[track].author +
        "</p>";
      //je doi retirer la transition
      imageA.classList.remove("trans");
      texteA.classList.remove("trans");
      imageA.classList.remove(effect);
      texteA.classList.remove(effect);
      imageB.src = playlist[trackB].cover;
      imageB.alt = playlist[trackB].author;
      texteB.innerHTML =
        "<p class= 'title'>" +
        playlist[trackB].title +
        "</p><p class= 'author'>" +
        playlist[trackB].author +
        "</p>";
    }, 500);
  }, 5000);
}

export { initSlider };
