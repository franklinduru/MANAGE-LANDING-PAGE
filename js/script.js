const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const hLinks = document.querySelectorAll('#hLinks')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

hLinks.forEach(link => {
    link.addEventListener('click', () => {
        btn.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    })
})
