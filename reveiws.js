// Creating reveiws slide...
const reveiws = document.querySelector("#reveiws");
//reveiws.addEventListener("load",renderReveiws);

const fetchReviews = () => {
    fetch("http://localhost:3000/reviews")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderReveiws(data);
        })
        .catch(err => console.error(err));
}
fetchReviews()

// function to render review data
const renderReveiws = (data) => {

    const review_container = document.createElement("div");
    review_container.style.padding = "40px";
    review_container.style.position = "relative";
    review_container.style.alignContent = "center";
    review_container.style.width = "80%";
    review_container.style.height = "340px";

    data.forEach(element => {

        const review_slide = document.createElement("div");
        review_slide.style.alignContent = "center";
        review_slide.style.padding = "20px";
        review_slide.style.textAlign = "center";
        review_slide.style.fontStyle = "italics";
        review_slide.style.fontSize = "24px";
        review_slide.style.height = "300px"

        const userImage = document.createElement("img");
        userImage.style.height = "60px";
        userImage.style.borderRadius = "60%"
       // userImage.src = element.image;
        review_slide.appendChild(userImage);

        const name = document.createElement("h4");
        name.textContent = element.name;
            review_slide.appendChild(name);
        const message = document.createElement("p");
        message.textContent = element.text;
            review_slide.appendChild(message);
        review_container.appendChild(review_slide);

    });

}
renderReveiws()

reveiws.addEventListener("load", fetchReviews);