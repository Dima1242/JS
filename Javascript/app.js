// Web only

// window.alert('1') // === alert('1')
// window.prompt('What is yout name?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] // Its Old
// const heading2 = document.getElementsByClassName('h2-class')[0] // Its old to
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('h2') // Return only first element

console.dir(heading2);

//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List);
const heading3 = h2List[h2List.length-1]
console.log(heading3); 

// console.dir(heading.textContent);

setTimeout(() => { 
    addStyleTo(heading, 'Javascript')
}, 1500);

setTimeout(() => { 
    addStyleTo(heading2, 'Практикуйся', 'yellow')
}, 3000);

const link = heading3.children[0]

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => { 
    addStyleTo(link, 'И все получится', 'blue', '5rem')
}, 4500);

function addStyleTo (node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem' 
    node.style.display = 'block' 
    node.style.width = '100%' 
    // false: '', undefined, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

    heading2.addEventListener('dblclick', () => {
        if (heading2.style.color === 'yellow') {
            heading2.style.color = '#000'
            heading2.style.backgroundColor = '#fff'
        } else {
            heading2.style.color = 'yellow'
            heading2.style.backgroundColor = '#000'
        }
    })