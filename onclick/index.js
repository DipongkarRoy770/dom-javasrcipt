function handleOnclick(){
  const write = document.getElementById('title-text')
  write.innerText = 'amr sonar bangla ami tomay valobasi';
}
document.getElementById('click-me').addEventListener('click',function(){
  const title = document.getElementById('title-text')
  title.innerText = 'delta computer science collage ,rangpur';
})
//cheeking working to the codeing:
// document.getElementById('click-me').addEventListener('click',function(){
//   document.body.style.backgroundColor = 'pink';
// })