// humburger-menu
const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu() 
)

document.addEventListener('click', (event) => {
    const target = event.target
    const isClickInside = menuElem.contains(target) || burger.contains(target)
  
    if (!isClickInside && menuElem.classList.contains('menu-active')) {
      toggleMenu()
    }
  })