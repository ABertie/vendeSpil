const IMAGES = []
const CONTAINER = document.querySelector('.container')

function REQUEST() {
    for(let i = 0; i < 8; i++) {
        IMAGES.push(`https://picsum.photos/30${i}`)
        IMAGES.push(`https://picsum.photos/30${i}`)
    }
}

function RANDOMIZE() {
    IMAGES.sort(function() {
        return Math.random() - 0.5
    })
}

function INSERT() {
    for (let i = 0; i < IMAGES.length; i++) {
        const IMG = document.createElement('img')

        IMG.addEventListener('click', function(event) {
            IMG.src = IMAGES[i]

            console.log()
        })

        CONTAINER.appendChild(IMG)
    }
}

REQUEST();

RANDOMIZE();

INSERT();