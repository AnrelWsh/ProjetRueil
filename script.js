const voirJub = document.getElementById("jubTitre")
let jub = document.getElementById("jubP")

const voirOct = document.getElementById("octTitre")
let oct = document.getElementById("octP")

const voirSci = document.getElementById("sciTitre")
let sci = document.getElementById("sciP")

let imgActus = document.getElementById("imgActus")

voirJub.addEventListener('click', () => {
if(jub.style.display == "none"){
    jub.style.display = "block"
    oct.style.display = "none"
    sci.style.display = "none"
    imgActus.src = "img/jubile.jpg" 
}else{
    jub.style.display = "none"
}
})

voirOct.addEventListener('click', () => {
if(oct.style.display == "none"){
    oct.style.display = "block"
    jub.style.display = "none"
    sci.style.display = "none"
    imgActus.src = "img/oct.jpg" 
}else{
    oct.style.display = "none"
}
})

voirSci.addEventListener('click', () => {
if(sci.style.display == "none"){
    sci.style.display = "block"
    jub.style.display = "none"
    oct.style.display = "none"
    imgActus.src = "img/sci.png" 
}else{
    sci.style.display = "none"
}
})


