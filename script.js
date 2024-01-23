function showAnswer() {
    const questButton1El = document.querySelector('#questButton1')
    const answer1El = document.querySelector('#answer1')
    const minus1El = document.querySelector('#minus1')
    const plus1El = document.querySelector('#plus1')

    questButton1El.addEventListener('click', () => {
        if (answer1El.style.display === 'block') {
            answer1El.style.display = 'none' 
        } else {
            answer1El.style.display = 'block' 
        }
        
        if (minus1El.style.display === 'block') {
            minus1El.style.display = 'none'
            plus1El.style.display = 'block'
        } else {
            minus1El.style.display = 'block'
            plus1El.style.display = 'none'
        }
    })

}

showAnswer()