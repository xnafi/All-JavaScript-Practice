
document.getElementById("hello").style.color='red';
const headerLi = document.getElementById('header');
const newLi = document.createElement('li');
newLi.innerText = "hi im dynamic li";
headerLi.appendChild(newLi);

// where to add 
const mainSectionAdd = document.getElementById('main');
// what to be added 
const section2 = document.createElement('section');
// element create 
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
h1.innerText = "im dynamic h1";
h1.style.color = 'blue'
li1.style.listStyle = 'none'
li1.innerText = 'im a dynamic li 1'
li2.innerText = 'im a dynamic li 2'
// element added to new section
section2.appendChild(h1);
ul.appendChild(li1)
ul.appendChild(li2)
section2.appendChild(ul)
// added there main
mainSectionAdd.appendChild(section2)

// method 2 where to add
const anotherSection = document.createElement('section')
anotherSection.innerHTML = `
<h1> im new section method two </h1>
<ul> 
<li>hello</li>
<li>yo</li>
<li>jo</li>
</ul>
`
mainSectionAdd.appendChild(anotherSection)
