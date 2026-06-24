const  inputcheck = document.querySelector('#modo-dark')

const elemento = document.querySelector('body')

inputcheck.addEventListener('click', () => {
    const modo = inputcheck.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
})