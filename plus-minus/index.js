let zero = 0;
const plus = document.getElementById('plus');
plus.addEventListener('click', function () {
    let count = document.getElementById('count');
    zero = zero + 1;
    count.innerText = zero;
})
document.getElementById('minus').addEventListener('click', function () {
    if (zero > 0) {
        zero--
        document.getElementById('count').innerText = zero;
    }

})