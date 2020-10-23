const modalOverlay = document.querySelector('.modal-overlay')
const beBetas = document.querySelectorAll('.beBeta')

for (let beBeta of beBetas) {
    beBeta.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        const beBetaID = beBeta.getAttribute('id');
        modalOverlay.querySelector('.picture').src = `.Pictures/Fotos/${beBetaID}.png`

        const beBetaName = beBeta.querySelector('.beBeta_name').textContent
        modalOverlay.querySelector('.name').innerHTML = beBetaName
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('beBeta_picture').src = ""
    modalOverlay.querySelector('.name').innerHTML = ""
})