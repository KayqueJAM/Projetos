var btMenu = document.getElementById('bt-menu')

var btFmenu = document.getElementById('bt-Fmenu')

const menu = document.getElementsByTagName('menu')[0]

function abrirMenu() {
    if (window.getComputedStyle(menu).width === '0px') {
        btMenu.style.transform = "rotate(-45deg)"
        btFmenu.style.transform = "rotate(-90deg)"

        menu.style.width = "100%";

        document.body.style.overflow = "hidden"
    }
}
function fecharMenu() {
    if (window.getComputedStyle(menu).width != '0px') {
        btMenu.style.transform = "rotate(0deg)"
        btFmenu.style.transform = "rotate(0deg)"

        menu.style.width = "0%"

        document.body.style.overflow = "scroll"
    }
}