let percorsiImg = ["consegna/consegna/img/01.webp", "consegna/consegna/img/02.webp", "consegna/consegna/img/03.webp", "consegna/consegna/img/04.webp", "consegna/consegna/img/05.webp"];
let fotoContainer = document.getElementById("fotoContainer");
let immagini = [];
for(let i=0; i<percorsiImg.length; i++){
    let img = document.createElement("img");
    img.src = percorsiImg[i];
    if(!(i==0)){
        img.classList.add("disNon");
    }
    immagini.push(img);
    fotoContainer.appendChild(img);
}
let miniFotoContainer = document.getElementById("miniFotoContainer");
let miniImmagini = [];
for(let i=0; i<percorsiImg.length; i++){
    let img = document.createElement("img");
    img.src = percorsiImg[i];
    if(!(i==0)){
        img.style.opacity = 0.4;
    }
    miniImmagini.push(img);
    miniFotoContainer.appendChild(img);
}
let index = 0;
let avanti = document.getElementById("avanti");
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
let indietro = document.getElementById("indietro");
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