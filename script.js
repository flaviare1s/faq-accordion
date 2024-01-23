function showAnswer() {
    const questButtonEls = document.querySelectorAll('.questButton')

    questButtonEls.forEach((questButtonEl) => {
        questButtonEl.addEventListener('click', () => alert('teste'))
    })
}

showAnswer()