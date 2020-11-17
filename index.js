window.addEventListener('load', () => {
    const nombre = document.getElementById('inputEmail4')
    const correo = document.getElementById('inputPassword4')
    const sel = document.getElementById('ciudad')
    const check = document.getElementById('check')
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const noticia = document.querySelector('input[name="noticia"]:checked')
        const usuario = {
            nombre: nombre.value,
            email: correo.value,
            noticia: noticia.value,
            ciudad: ciudad.value,
            aceptaOferta: check.checked
        }
        console.log(usuario)
        localStorage.setItem('cliente', JSON.stringify(usuario))
    })
    
})

