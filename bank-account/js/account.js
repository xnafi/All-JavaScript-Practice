// deposit button handler
document.getElementById('deposit').addEventListener('click', function () {
    // input Field Value
    const depositAmmount = document.getElementById('deposit-amount');
    const depositAmmountString = depositAmmount.value;
    const depositAmmountNumber = parseFloat(depositAmmountString)

    // to set input Field Value
    const depositValue = document.getElementById('deposit-value');
    const depositValueString = depositValue.innerText;
    const depositValueNumber = parseFloat(depositValueString);

    const totalDeposit = depositValueNumber + depositAmmountNumber;
    depositValue.innerText = totalDeposit;

    depositAmmount.value = '';

    // to set input Field Value total deposit
    const TotalAmount = document.getElementById('Total');
    const TotalAmountString = TotalAmount.innerText;
    const TotalAmountnumber = parseFloat(TotalAmountString);

    const totalTaka = TotalAmountnumber + depositAmmountNumber;
    TotalAmount.innerText = totalTaka;

    if (isNaN() == totalDeposit && isNaN() == TotalAmountnumber) {
        alert("please enter a number");
    }


})