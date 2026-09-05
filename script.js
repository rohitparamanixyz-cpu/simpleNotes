const inputText = document.getElementById('input-text')

inputText.addEventListener('focus', () => {
    inputText.setAttribute('rows', '8')
})

inputText.addEventListener('blur', () => {
    inputText.setAttribute('rows', '1')
})