/*1st: id k niye kaj korte hbe .btn kaj kore kina ...*/
document.getElementById('btn').addEventListener('click',function(){
  //2nd: tarpor new-comment id diye add korte hhe kaj kore kina?
  const comments = document.getElementById('new-comment')
  const commentBox = comments.value ;
  //kaj korle value output hisabe kaj korte hbe.
  //3rd:j div add korbo ,tar id banate hbe ,crete-element diye kaj korte hbe 
   const commentsContainer = document.getElementById('comments-container');
   const p = document.createElement('p')
   p.innerText = commentBox;
   commentsContainer.appendChild(p)
   //4th: comments value sarate ('')emty file mto kaj korte hbe.
   comments.value = ''
})