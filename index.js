let percorsiImg = ["consegna/consegna/img/01.webp", "consegna/consegna/img/02.webp", "consegna/consegna/img/03.webp", "consegna/consegna/img/04.webp", "consegna/consegna/img/05.webp"];
let fotoContainer = document.getElementById("fotoContainer");
for(let i=0; i<percorsiImg.length; i++){
    let img = document.createElement("img");
    img.src = percorsiImg[i];
    if(!(i==0)){
        img.classList.add("disNon");
    }
    fotoContainer.appendChild(img);
}