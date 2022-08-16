function changeHello() {
    const change = document.getElementById('hello');
    change.innerText = "hello im changed"
    change.style.color = 'red'
};

document.getElementById('btn').addEventListener('click', function () {
    const changeHello = document.getElementById('hel')
    changeHello.innerText = 'i can also changed'
})

document.getElementById('input-btn').addEventListener('click', function(){
    const filed = document.getElementById("input-field");
    const inputValue = filed.value;

    const textChange = document.getElementById('input-dis')
    textChange.innerText = inputValue;
    filed.value = '';

})