// Step 1 Add event listener post button
document.getElementById('comment-btn').addEventListener('click', function () {
    // to get input area
    const inputFeild = document.getElementById('comment-filed')
    // to get input area value and store comment
    const comment = inputFeild.value
    // value got and post whatever y0u want
    const post = document.getElementById('addNew')
    // add child dynamically add p tag
    const p = document.createElement('p');
    p.innerText = comment;
    post.appendChild(p)
    // after comment empty input field
    inputFeild.value = '';
})