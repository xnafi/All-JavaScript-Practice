document.getElementById('btn').addEventListener('click', function () {
    const del = document.getElementById('delete-btn');
    del.innerText = '';

})
document.getElementById('input-filed').addEventListener('keyup', function (e) {
    const val = e.target.value;
    const btn = document.getElementById('btn')
    if (val === 'delete'){
      btn.removeAttribute('disabled', false)
    }
    else {
        btn.setAttribute('disabled', true)
    }


})