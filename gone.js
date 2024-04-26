function addComment2() {
    var commentInput = document.getElementById('commentInput').value;
    var commentsDiv = document.getElementById('comments2');
    var thankYouMessage = document.getElementById('thankYouMessage2');
    
    if(commentInput.trim() === '') {
        alert("Please write a comment before submitting.");
        return;
    }
    
    var commentElement = document.createElement('div');
    commentElement.className = 'comment2';
    var commentParagraph = document.createElement('p');
    commentParagraph.innerText = commentInput;
    commentElement.appendChild(commentParagraph);
    commentsDiv.appendChild(commentElement);
    
    document.getElementById('commentInput').value = '';
    
    thankYouMessage.style.display = 'block';
    
    setTimeout(function() {
        thankYouMessage.style.display = 'none';
    }, 3000);
}
const stars = document.querySelectorAll('.star');
const result = document.getElementById('result');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        if (!star.classList.contains('selected')) {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            rating = value;
        } else {
            star.classList.remove('selected');
            rating = 0;
        }
        result.textContent = 'your Rating : ' +  rating  + '  Star';
    });
});
var showing=false;
function show(){
    var button=document.getElementsByClassName('f50');
    if(!showing){
    for(i=0;i<button.length;i++){
        button[i].style.display="inline-block";
        showing=true;

    }}
   else{
    for(i=0;i<button.length;i++){
        button[i].style.display="none";
        showing=false;
   } 


}
}

