// Navigation bar animation (either slide in  from side, or use Traversy page rotation)



// Image gallery carousel

let image = document.querySelectorAll('.panel')

image.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveclass()
        panel.classList.add('active')
    })
})

function removeActiveclass() {
    image.forEach(panel => {
        panel.classList.remove('active')
    })
}