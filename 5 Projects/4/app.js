const board = document.querySelector('#board')
const colors = ['#228B22', '#FFEFD5', '#F08080', '#9932CC', '#DB7093', 	'#AFEEEE', 	'#F5DEB3', '#F5F5DC']
const SQUARES_NUMBER = 143

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseover', setColor)
    // square.addEventListener('mouseleave', () => removeColor(square))
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    element.style.backgroundColor = getRandomColor()
    element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor =  '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}