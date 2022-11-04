const header = document.querySelector('.header');
const paragraph = document.querySelector('#par');
const container = document.querySelector('.container');

//console.log(header);
//console.log(paragraph);

header.style.color = 'red';
paragraph.style.backgroundColor = 'green';

header.classList.add('class2');
header.classList.remove('class1');

const text = document.createElement('p'); // создаём новый элемен

text.innerText = 'Какой то текст'; 

container.append(text); // добавление р внутрь container