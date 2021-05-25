const menu = document.querySelector('.hambuger')
const mobileNav = document.querySelector('.nav-wrapper')

menu.addEventListener('click', (e) => {
  mobileNav.classList.toggle('open')
  e.stopPropagation()
})
document.body.addEventListener('click', (e) => {
  mobileNav.classList.remove('open')
  e.stopPropagation()
})
