const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const container = document.getElementById("container");


for (let i = 0; i < posts.length; i++) {
    const post = `
<div class="post">
<div class="post__header">
    <div class="post-meta">
        <div class="post-meta__icon">
            <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${posts[i].author.name}</div>
            <div class="post-meta__time">${posts[i].created}</div>
        </div>
    </div>
</div>
<div class="post__text">${posts[i].content}</div>
<div class="post__image">
    <img src="${posts[i].media}" alt="${posts[i].author.name}">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
        </div>
    </div>
</div>
</div>`
    container.innerHTML += post;
}

// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const likeBtn = document.querySelectorAll(".like-button");
const likeCounter = document.querySelectorAll(".js-likes-counter");
const Likes = [];

for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function () {
        if (!likeBtn[i].classList.contains("like-button--liked")) {
            likeBtn[i].classList.add("like-button--liked");
            likeCounter[i].innerHTML++;
            Likes.push(posts[i].id);
        } else {
            likeBtn[i].classList.remove("like-button--liked");
            likeCounter[i].innerHTML--;
            Likes.pop(posts[i].id);
        }
    });
}