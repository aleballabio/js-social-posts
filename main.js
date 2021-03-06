/*

Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del 
                bottone e incrementiamo il counter dei likes relativo.
                Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/


const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];
const arrPostsIDLiked = [];


for (let times = 0; times < posts.length; times++) {
    const arrPostsPosted = posts[times];
    let container = document.querySelector(".posts-list");
    let dateSplit = arrPostsPosted.created.split("-")
    console.log(dateSplit);
    //Posts Creation
    let counter = arrPostsPosted.likes
    const postElement = document.createElement("div");


    postElement.innerHTML = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                <div class="post-meta__icon">
                <img class="profile-pic" src="${arrPostsPosted.author.image}" alt="${arrPostsPosted.author.name}">
                    </div>
                    <div class="post-meta__data">
                    <div class="post-meta__author">${arrPostsPosted.author.name}</div>
                    <div class="post-meta__time">${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}</div>
                    </div>
                    </div>
                    </div>
                <div class="post__text">${arrPostsPosted.content}</div>
                <div class="post__image">
                <img src="${arrPostsPosted.media}" alt="">
            </div>
            <div class="post__footer">
            <div class="likes js-likes">
            <div class="likes__cta">
            <a class="like-button  js-like-button" href="#" data-postid="${arrPostsPosted.id}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                        </a>
                        </div>
                        <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${counter}</b> persone
                        </div>
                        </div>
                        </div>
                        </div>`;

    //Button to Add  Likes

    let btnLikes = postElement.querySelector(".js-like-button");
    let btnLikesCounter = postElement.querySelector(".js-likes-counter");
    btnLikes.addEventListener("click", addLikes);

    function addLikes(event) {


        if (arrPostsIDLiked.includes(arrPostsPosted.id)) {
            btnLikes.classList.remove("like-button--liked");
            let arrIndex = arrPostsIDLiked.indexOf(arrPostsPosted.id);
            arrPostsIDLiked.splice(arrIndex, 1);
            console.log(arrPostsIDLiked);
            counter--;
            btnLikesCounter.innerHTML = counter;
        }
        else {
            btnLikes.classList.add("like-button--liked");
            arrPostsIDLiked.push(arrPostsPosted.id);
            counter++;
            btnLikesCounter.innerHTML = counter;
        }
        event.preventDefault();
        console.log(arrPostsIDLiked);

    }

    container.append(postElement);

}
