const menu = document.getElementsByTagName('menu')[0]

function menuSwitch() {
    if (window.getComputedStyle(menu).height === '0px') {
        document.getElementsByClassName('menu-bt')[0].style.transform = 'rotate(-270deg)'
        
        menu.style.height = '35px'
    } else {
        document.getElementsByClassName('menu-bt')[0].style.transform = "rotate(180deg)"

        menu.style.height = '0'
    }
}