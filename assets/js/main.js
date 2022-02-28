const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 650) header.classList.add('header__background-scroll'); else header.classList.remove('header__background-scroll')
}
window.addEventListener('scroll', scrollHeader)
