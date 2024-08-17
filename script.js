const inputText = document.querySelector('#itext')
const buttonSubmit = document.querySelector('#submit')
const containerCards = document.querySelector('#container-cards')

buttonSubmit.addEventListener('click', addCard)
// buttonSubmit.addEventListener('click', addCard)

let cardNumber = 1
function addCard(){
    let textInInputNotExists = inputText.value == ''
    if(!textInInputNotExists){
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerText = `${cardNumber} - ${inputText.value}`
        card.setAttribute('id', `card${cardNumber}`)
        
        let cardArray = inputText.value.split('')
        let cardMaxCaracters = cardArray[51] === undefined

        if(cardMaxCaracters){
            containerCards.prepend(card)
            console.log(`card${cardNumber} criado`)
            inputText.value = ''
            const cardN = document.querySelector(`#card${cardNumber}`)
            cardN.addEventListener('click', select)
            cardNumber++
        } else if(!cardMaxCaracters){
            inputText.value = 'máximo de caracteres'
            throw new Error('máximo de caracteres atingido')
        }
    } else{
        throw new Error('texto indefinido')
    }
    // const card = document.getElementsByClassName('card')
    // console.log(card)
    
}

function select(event){
    console.log(event.target.id+' riscado da lista')
    event.target.classList.toggle('selected')
}


