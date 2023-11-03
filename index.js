// Percorsi immagine
const percorsiImg = ["consegna/consegna/img/01.webp", "consegna/consegna/img/02.webp", "consegna/consegna/img/03.webp", "consegna/consegna/img/04.webp", "consegna/consegna/img/05.webp"];
// Foto principale
const fotoContainer = document.getElementById("fotoContainer");
const immagini = [];
for(let i=0; i<percorsiImg.length; i++){
    const img = document.createElement("img");
    img.src = percorsiImg[i];
    if(!(i==0)){
        img.classList.add("disNon");
    }
    immagini.push(img);
    fotoContainer.appendChild(img);
}
// Mini foto
const miniFotoContainer = document.getElementById("miniFotoContainer");
const miniImmagini = [];
for(let i=0; i<percorsiImg.length; i++){
    const img = document.createElement("img");
    img.src = percorsiImg[i];
    if(!(i==0)){
        img.style.opacity = 0.4;
    }
    miniImmagini.push(img);
    miniFotoContainer.appendChild(img);
}
// Index
let index = 0;
// Btn avanti
const avanti = document.getElementById("avanti");
avanti.addEventListener("click", function(){
    if(index==(immagini.length-1)){
        immagini[index].classList.add("disNon");
        miniImmagini[index].style.opacity = 0.4;
        index = 0;
        immagini[index].classList.remove("disNon");
        miniImmagini[index].style.opacity = 1;
    }else{
        immagini[index].classList.add("disNon");
        miniImmagini[index].style.opacity = 0.4;
        index++;
        immagini[index].classList.remove("disNon");
        miniImmagini[index].style.opacity = 1;
    }
})
// Btn indietro
const indietro = document.getElementById("indietro");
indietro.addEventListener("click", function(){
    if(index==0){
        immagini[index].classList.add("disNon");
        miniImmagini[index].style.opacity = 0.4;
        index = (immagini.length-1);
        immagini[index].classList.remove("disNon");
        miniImmagini[index].style.opacity = 1;
    }else{
        immagini[index].classList.add("disNon");
        miniImmagini[index].style.opacity = 0.4;
        index--;
        immagini[index].classList.remove("disNon");
        miniImmagini[index].style.opacity = 1;
    }
})