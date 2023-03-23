// write your code here
const ramenMenu = document.getElementById("ramen-menu");
const detailImage = document.querySelector(".detail-image");
const ramenName = document.querySelector(".name");
const restaurant = document.querySelector(".restaurant");
const rating = document.querySelector("#rating-display");
const comment = document.querySelector("#comment-display");
const ramenForm = document.getElementById("new-ramen");

addEventListener("DOMContentLoaded", () => {  
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(objects =>{
        objects.forEach(object => {
            const image = document.createElement("img");
            image.src = object.image;
            ramenMenu.appendChild(image);

            image.addEventListener("click", ()=>{
                detailImage.src = object.image;
                detailImage.alt = object.name;
                ramenName.innerText= object.name;
                restaurant.innerText=object.restaurant;
                rating.innerText=object.rating;
                comment.innerText=object.comment;
            })
        })
    }).catch(err => console.log(err.message));

    ramenForm.addEventListener("submit", (e)=>{
        fetch("http://localhost:3000/ramens", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                accept: "application/json"
            }, body: JSON.stringify({
                "name": document.getElementById("new-name").value,
                "restaurant": document.getElementById("new-restaurant").value,
                "image": document.getElementById("new-image").value,
                "rating": document.getElementById("new-rating").value,
                "comment": document.getElementById("new-comment").value
            })
        }).then(res => res.json())
        .then(obj => console.log(obj))
        .catch(err=> {
            return console.log(err);
        });

    });
});



