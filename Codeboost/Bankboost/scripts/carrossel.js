var div = document.getElementById('carrossel');
var ul = document.getElementById('users');
let li = document.querySelectorAll('#carrossel li');

document.querySelector('#carrossel li').classList.add('active');

function createLi() {
    let li = document.querySelectorAll('#carrossel li');
    if (window.innerWidth < 832) {
        if (div.children.length == 2) {
            let Li2 = document.createElement('li');
            let Li3 = document.createElement('li');
            div.appendChild(Li2);
            div.appendChild(Li3);
            Li2.onclick = function() {
                seted(2);  // Chama a função seted com o valor 2
            };
            Li3.onclick = function() {
                seted(3);  // Chama a função seted com o valor 2
            };
        }
    } else {
        if (div.children.length != 2) {
            li[2].remove();
            li[3].remove();
            
            if(li[0].classList.contains('active')) {
                return
            } else {
                li[1].classList.add('active');
            }
        }
    }
};

window.addEventListener('DOMContentLoaded', createLi)
window.addEventListener('resize', createLi)

function seted(x) {
    let li = document.querySelectorAll('#carrossel li');
    li.forEach((item, i) => {
        if (i === x) {
            item.classList.add('active');

            if(div.children.length == 2) {
                ul.scrollLeft = ul.scrollWidth * (x/2);
            } else {
                switch (x) {
                    case 0:
                        ul.scrollLeft = ul.scrollWidth * 0;
                        break;
                    case 1:
                        ul.scrollLeft = ul.scrollWidth * 0.2;
                        break;
                    case 2:
                        ul.scrollLeft = ul.scrollWidth * 0.4;
                        break
                    case 3:
                        ul.scrollLeft = ul.scrollWidth * 0.8;
                        break;
                }
            }
        } else {
            item.classList.remove('active');
        }
    });
    console.log(ul.scrollLeft)
    console.log('filhos: ' + div.children.length)
}