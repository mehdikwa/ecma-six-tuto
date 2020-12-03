'use strict';
const root = 'https://jsonplaceholder.typicode.com/';
const postList = document.querySelector('#post-list');
console.clear();

const promise1 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        resolve(this.response);
    };
    xhr.onerror = reject;
    xhr.open('GET', root + 'comments');
    xhr.send();
});

const promise2 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        resolve(this.response);
    };
    xhr.onerror = reject;
    xhr.open('GET', root + 'users');
    xhr.send();
});

const promise3 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        resolve(this.response);
    };
    xhr.onerror = reject;
    xhr.open('GET', root + 'posts');
    xhr.send();
});

// Posts
promise3
    .then(data => {
        const posts = JSON.parse(data); // Contains our posts

        promise2
            .then(data => {
                const users = JSON.parse(data); // Contains our users
                promise1
                    .then(data => {
                        const comments = JSON.parse(data);
                        displayPosts(posts, users, comments);
                    });
            });
    }).catch(error => { console.log(error); });

'use strict';
const root = 'https://jsonplaceholder.typicode.com/';
const postList = document.querySelector('#post-list');
console.clear();

const requestJSON = objType => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            try {
                resolve(JSON.parse(this.responseText));
            }
            catch (e) {
                reject(e);
            }
        };
        xhr.onerror = reject;
        xhr.open('GET', root + objType);
        xhr.send();
    });
};

Promise.all([requestJSON('posts'), requestJSON('users'), requestJSON('comments')])
    .then(results => {
        displayPosts(...results);
    })
    .catch(error => {
        console.log(error);
    })

// Users

function displayPosts(posts ,users, comments) {
    let output = '';
    posts.map(post => {
        output += `
			<li class="post"> 
				<h4> ${displayUserName(users, post)} </h4>
				<h3> ${post.title} </h3>
				<p> ${post.body} </p>
				<div class="comment-count"><span> ${displayCommentAmount(comments, post)} comments</span></div>
			</li>
		`;
    }).join('');
    postList.innerHTML = output;
}

function displayUserName(users, post) {
    return users.map(user => {
        if (user.id === post.userId) {
            return user.name;
        }
    }).join('');
};

function displayCommentAmount(comments, post) {
    const commentArray = comments.filter(comment => {
        return comment.postId === post.id;
    });
    return commentArray.length;
}
