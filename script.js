const IMAGES = []
const CONTAINER = document.querySelector('.container')
const POINT = document.querySelector('.point')

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

function FLIP() {
    CONTAINER.addEventListener('click', function(event) {
        if (event.target.tagName == 'IMG') {
            let firstElement = null;

            for (let i = 0; i < CONTAINER.length; i++) {
                if (CONTAINER.children[i].src != null) {
                    console.log('src is not null');
                    if (firstElement != null) {
                        if (CONTAINER.children[i].src == firstElement.src) {
                            console.log('found same src');
                        }
                    } else {
                        firstElement = CONTAINER.children[i];

                        console.log('assigned first elementZ½');
                    }

                }
            }
        }
    })
}

            

REQUEST();

RANDOMIZE();

INSERT();

FLIP();