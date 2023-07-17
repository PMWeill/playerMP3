function initSlider(playlist, track) {
  console.log("slider");
  console.dir(playlist);
  //   ici je recupere l'url de l'imaga a afficher dans le slider
  console.dir(playlist[track].cover);
  const slider = document.getElementById("slider");
  //creation d'une première image imageA
  const imageA = document.createElement("img");
  imageA.id = "imageA";
  imageA.src = playlist[track].cover;
  imageA.alt = playlist[track].author;
  slider.prepend(imageA);
  //j'aimerais connaitre le height de mon imageA mais je doit d'abord attendre que mon image soit uploader par mon navigateur
  //je dois temporiser avec javascript avant d'obtenir des informations de mon image
  const imageB = document.createElement("img");
  imageB.id = "imageB";
  imageB.src = playlist[track+1].cover;
  imageB.alt = playlist[track+1].author;
  slider.prepend(imageB);

  setTimeout(() => {
     console.dir(imageA.clientHeight);
     slider.style.height = imageA.clientHeight+"px";
     slider.style.height = imageB.clientHeight+"px";
  }, 500); 
 
//creation d'une balise texte titreA
  const texteA = document.createElement("p");
  texteA.id = "texteA"
  texteA.innerHTML = "<p class= 'title'>"+playlist[track].title+"</p><p class= 'author'>"+playlist[track].author+"</p>";
  //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
  slider.append(texteA);

 const texteB = document.createElement("p");
  texteB.id = "texteB"
  texteB.innerHTML = "<p class= 'title'>"+playlist[track].title+"</p><p class= 'author'>"+playlist[track].author+"</p>";
  //texteA.innerText = playlist[track].title+"/"+playlist[track].author;
  slider.prepend(texteB);


 








}


export { initSlider };
