var btn = document.querySelector('.wrapper__btn')
var skin1 = document.getElementById('skin1')
var skin2 = document.getElementById('skin2')

btn.addEventListener('click', function() {
    if (skin1.classList.contains('old')) {
        skin1.classList.remove('old')
    } else {
        skin1.classList.add('old')
    }

    if (skin2.classList.contains('new')) {
        skin2.classList.remove('new')
    }else {
        skin2.classList.add('new')
    }

})