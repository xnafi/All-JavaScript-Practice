

document.getElementById('deposit').addEventListener('click', function () {

    const newTextValue = getElementByIdFromHtml('total-deposit-value');
    const newDepositValue = newTextValue + newInputValue;
    setElemetValue('total-deposit-value', newDepositValue)
    if (newTextValue === String) {
        alert('please enter a number')
    }


    const money = getElementByIdFromHtml('total-balance-value');
    const totalMoney = money + newInputValue;
    setElemetValue('total-balance-value', totalMoney)

})

document.getElementById('withdraw').addEventListener('click', function () {
    const newInput = getElentFromInputField('input-value-withdraw');

    const newTextValue = getElementByIdFromHtml('total-withdraw-value');

    const depositTotal = newInput + newTextValue;

    setElemetValue('total-withdraw-value', depositTotal);

    const money = getElementByIdFromHtml('total-balance-value');
    setElemetValue('total-balance-value', money - newInput)
    if (money < newInput) {
        alert("insufficient balance")
    } else {
        
    }


})

document.getElementById('logout').addEventListener('click', function () {
    window.location.href = "index.html"
})
