function initSlider() {
  //   ici je recupere l'url de l'imaga a afficher dans le slider
  currentTrack === "init" ? currentTrack = 0 : ""
  const slider = document.getElementById("slider");

  //veut dire let trackB = null
  //tt les 5 s fait disparraitre l'imageA et txtA pour faire apparaitre l'imageB et txtB
  // la condition if verifie si une oprération est vraie

  //creation d'une première image imageA
  imageA = document.createElement("img");
  imageA.id = "imageA";
  imageA.src = playlist[currentTrack].cover;
  imageA.alt = playlist[currentTrack].author;
  imageA.style.zIndex = "2";
  imageA.style.borderRadius = 20 + "px";
  slider.prepend(imageA);

  //j'aimerais connaitre le height de mon imageA mais je doit d'abord attendre que mon image soit uploader par mon navigateur
  //je dois temporiser avec javascript avant d'obtenir des informations de mon image
  imageB = document.createElement("img");
  imageB.id = "imageB";
  imageB.src = "";
  imageB.alt = "";
  imageB.style.zIndex = "0";
  imageB.style.borderRadius = 20 + "px";
  slider.prepend(imageB);

  //creation d'une balise texte titreA
  texteA = document.createElement("p");
  texteA.id = "texteA";
  texteA.style.zIndex = "3";

  texteA.innerHTML =
    "<p class= 'title'>" +
    playlist[currentTrack].title +
    "</p><p class= 'author'>" +
    playlist[currentTrack].author +
    "</p>";
  //texteA.innerText = playlist[currentTrack].title+"/"+playlist[currentTrack].author;
  slider.append(texteA);

  texteB = document.createElement("p");
  texteB.id = "texteB";
  texteB.style.zIndex = "1";
  texteB.innerHTML = "";
  //texteA.innerText = playlist[currentTrack].title+"/"+playlist[currentTrack].author;
  slider.prepend(texteB);

  setTimeout(() => {
    slider.style.height = imageA.clientHeight + "px";
    // slider.style.height = imageB.clientHeight + "px";
  }, 500);
}
// effect: swipeLeft .swipeRight swipeTop {swipeDown fadeOut :string
//direction: boolean
const userSliderAction = (effect, direction) => {
  let trackB = null;
  if (direction /*=== true*/) {
    trackB = currentTrack + 1;
  } else {
    trackB = playlist.length - 1;
  }

  imageA.classList.add("trans");
  texteA.classList.add("trans");
  imageA.classList.add(effect);
  texteA.classList.add(effect);
  //j'attend la fin de ma transition(500ms) pour la suite

  setTimeout(() => {
   /*  if (direction) {
      //je commence par incrémenter track
      if (trackB === playlist.length - 1) {
        trackB = 0;
      } else {
        trackB++;
      }

      if (currentTrack === playlist.length - 1) {
        currentTrack = 0;
      } else {
        currentTrack++;
      }
    } else {
      if (trackB === 0) {
        trackB = playlist.length - 1;
      } else {
        trackB--;
      }
      if (currentTrack === 0) {
        currentTrack = playlist.length - 1;
      } else {
        currentTrack--;
      }
    } */

    imageA.src = playlist[currentTrack].cover;
    imageA.alt = playlist[currentTrack].author;
    texteA.innerHTML =
      "<p class= 'title'>" +
      playlist[currentTrack].title +
      "</p><p class= 'author'>" +
      playlist[currentTrack].author +
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
};
export { initSlider, userSliderAction };
