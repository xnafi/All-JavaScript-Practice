function getElentFromInputField(id) {
    const inputfield = document.getElementById(id);
    const inputfieldString = inputfield.value;
    const inputFieldValue = parseFloat(inputfieldString)
    inputfield.value = '';
    return inputFieldValue

}

function getElementByIdFromHtml(id) {
    const depositTotalValue = document.getElementById(id);
    const depositTotalString = depositTotalValue.innerText;
    const depositTotalConvert = parseFloat(depositTotalString)
    return depositTotalConvert;
}

function setElemetValue(id, value) {
    const textElement = document.getElementById(id);
    textElement.innerText = value;
}