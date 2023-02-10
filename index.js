const color =document.getElementById('text');
color.style.backgroundColor = 'red';
const itemList = document.getElementById('list');
const li = document.createElement('li')
li.innerText='delta computer science collage,rangpur';
li.style.backgroundColor = 'pink';
li.style.fontSize = '1.5em'
itemList.appendChild(li);
document.getElementById('pink-color').addEventListener('click',function(){
  document.body.style.backgroundColor = 'pink';
})
