
document.getElementById('post').addEventListener('click', function () {
     let addNew = document.getElementById('addItem');
     let comment = addNew.value;
     let posthere = document.createElement('postHere')
     let Comment = document.getElementById('comment');
     Comment.innerHTML = comment;    
     posthere.appendChild();
     addNew.value = '';

})