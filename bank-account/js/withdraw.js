document.getElementById('withdraw').addEventListener('click', function () {

    const withdrawInputValue = document.getElementById('withdraw-value');
    const withdrawInputValueString = withdrawInputValue.value;
    const withdrawValueConvert = parseFloat(withdrawInputValueString);



    const withdrawValue = document.getElementById('withdraw-amount')
    const withdrawValueString = withdrawValue.innerText;
    const withdrawNumber = parseFloat(withdrawValueString);
    withdrawValue.innerText = withdrawValueConvert;

    const depositTotal = document.getElementById('Total');
    const depositTotalString = depositTotal.innerText;
    const depositTaka = parseFloat(depositTotalString);

    const depositRemain = depositTaka - withdrawValueConvert;
    depositTotal.innerText = depositRemain;
    withdrawInputValue.value = '';

    if (depositTaka > withdrawNumber) {
        alert('insufficient balance')
        return
    }

})


