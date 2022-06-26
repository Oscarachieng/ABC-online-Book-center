// Creating reveiws slide...
const reveiws = document.querySelector("#reveiws");
//reveiws.addEventListener("load",renderReveiws);

const fetchReviews = () => {
    fetch("http://localhost:3000/reviews")
        .then(response => response.json())
        .then(response => {
            renderReveiws(response);
            console.log(response);
        })
        .catch(err => console.error(err));
}
fetchReviews()

// function to render review data
const renderReveiws = (response) => {

    const review_container = document.createElement("div");
    review_container.style.padding = "20px";
    review_container.style.position = "relative";
    review_container.style.alignContent = "center";
    review_container.style.width = "auto";
    review_container.style.height = "200px";
    review_container.style.display = "flex"

    response.forEach(element => {
        const review_slide = document.createElement("div");
        review_slide.style.alignContent = "center";
        review_slide.style.textAlign = "center";
        review_slide.style.fontStyle = "italics";
        review_slide.style.fontSize = "15px";
        review_slide.style.height = "200px";
        review_slide.style.margin = "0 10 0 10"
       // review_slide.style.display = "none";

       /* const userImage = document.createElement("img");
        userImage.style.height = "60px";
        userImage.style.borderRadius = "60%"
        userImage.src = element.image;
        review_slide.appendChild(userImage);*/

        const name = document.createElement("h4");
        name.textContent = element.name;
        name.style.fontStyle = "italics"
            review_slide.appendChild(name);
        const message = document.createElement("p");
        message.textContent = element.text;
        message.style.fontSize = "italics"
            review_slide.appendChild(message);
        review_container.appendChild(review_slide);
        reveiws.appendChild(review_container);
    });
}

reveiws.addEventListener("load", fetchReviews);