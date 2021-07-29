const imgUrl = "http://localhost:3000/images/1"

const h2 = document.getElementById('fg-title');
const viewedImage = document.getElementById('fg-image');
const likes = document.getElementById('fg-likes');
const commentList = document.getElementById('fg-comments');
const likeButton = document.getElementById('fg-like-button');
const commentForm = document.getElementById('fg-comment-form');
const commentButton = document.querySelector('button.comment-button');
const inputForm = document.querySelector('input.comment-input');
console.log(inputForm);
//console.log(commentButton);
//const commentValue = document.getElementByClassName('comment-input').value;
//console.log(commentValue);

fetch(imgUrl)
.then(resp => resp.json())
.then((data) => renderPost(data));

function renderPost(data) {
    h2.textContent = data.title;
    viewedImage.src = data.image;
    commentList.innerHTML = '';
    data.comments.forEach((comment) => {
        li = document.createElement('li');
        li.textContent = comment.content;
        commentList.append(li);
    });
    likeButton.addEventListener('click', () => {
        addLikes(data);
    }); 
};

function addLikes(data) {
    likes.textContent = `${data.likes++} likes`;
}

inputForm.addEventListener('input', addComment);

function addComment(e) {
    e.preventDefault();
    newComment = e.target.value;
    
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log(newComment);
        liNew = document.createElement('li');
        liNew.textContent = newComment;
        commentList.append(liNew);
        // let commentArray = [];
        // commentArray.push(liNew);
        // commentArray = commentArray.length - 1;
        // commentList.append(commentArray);
    })
}
/*
Known issue: form is submitting multiple entries, one for every character length in the form submission. Most likely because the event listener is running for every keystroke. 

Last minute troubleshooting attempts was to create an array of all the entries and only submit the last in the array, didn't work. Should have just fixed the original inputForm.addEventListener('input'). 
*/




