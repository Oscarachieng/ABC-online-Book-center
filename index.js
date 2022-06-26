// Displaying Products into the product page.
//Pseudocode...
/*
1.Grab the element, #product-container, and assign it to a varaible.
2.Add  "load" event listener to the variable, and and event handler function.
3.The event handler fetch, "GET", from the API,
4.The event handler calls renderProduct function to render product into the page.
5.

*/
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000});
 


//Grabbing the product-container element
const product_container = document.querySelector("#product-container");

// fetching API function
const fetchData = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7310622931msh9f6735caf0bf519p1c820cjsn2c95afa5cfdc",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
    },
  };

  fetch("https://amazon24.p.rapidapi.com/api/todaydeals", options)
    .then((response) => response.json())
    .then((response) => {
      const jsonData = response.deal_docs;
      console.log(jsonData);
      renderProduct(jsonData);
    })
    .catch((err) => console.error(err));
};
console.log(fetchData());

// function to render products into the page.The function should take the response data as argument.
/*
1. For each object in the product array do the following:
 ===Create a product container. resize it properly.
 ===inside the container = create image element and resize it, width 100px,
                         = creater element to hold description, p.

				    create a container to cotain these style the container div.		 
						 = create price element and style it, append to parent
						 = create currency element, append to parent 		
2. 
*/
const cart = document.querySelector(".cart");
const renderProduct = (data) => {
  data.forEach((element) => {
    const productItem = document.createElement("div");
    productItem.style.padding = "10px";
    productItem.style.height = "400px";
    productItem.style.width = "250px";
	//productItem.style.repeat = "no-repeat"
	//productItem.style.margin = "10px"

    const image = document.createElement("img");
    image.style.width = "230px";
    image.style.height = "200px";
    image.src = element.deal_main_image_url;
	productItem.appendChild(image); 

    const productTitle = document.createElement("p");
    productTitle.style.fontStyle = "italics";
    productTitle.style.width = "230px";
    productTitle.textContent = `Product Description: ${element.deal_title}`
	productItem.appendChild(productTitle); 

    //creates price element and div containing it.
    const price_container = document.createElement("div");
    price_container.style.display = "flex";
    price_container.style.width = "230px";
    price_container.style.justifyContent = "space-between";
    //price element.
    const price = document.createElement("h5");
    price.style.fontStyle = "italics";
    price.style.fontSize = "small";
    price.style.color = "chocolate";
    price.style.width = "50%"
    price.textContent = `Price Range : ${element.app_sale_range.min} to ${element.app_sale_range.max}`
	price_container.appendChild(price); 

    //currency element.
    const currency = document.createElement("h5");
    currency.style.fontSize = "small";
    currency.style.fontStyle = "italics";
    currency.style.color = "chocolate";
    currency.textContent = `Currency : ${element.app_sale_range.currency}`
	  price_container.appendChild(currency); 
    productItem.appendChild(price_container);

    const addTocat = document.createElement("button");
    addTocat.textContent = 'Add to Cart';
    addTocat.style.padding = "4px";
    addTocat.style.fontStyle= "oblique";
    addTocat.style.color = "white";
    addTocat.style.backgroundColor = "Orange";
    addTocat.style.borderColor = "transparent";
    addTocat.addEventListener("click",(e)=>{
      e.preventDefault();
     const p = document.createElement("p");
     p.style.padding = "10px";
     p.style.fontSize = "larger";
     p.style.fontStyle = "oblique";
     p.style.backgroundColor = "creme";
     p.textContent = `${productTitle.textContent}  ${price.textContent}  ${currency.textContent} `;

     const removeItem = document.createElement("button");
     removeItem.style.padding = "8px";
     removeItem.style.fontStyle = "oblique";
     removeItem.style.backgroundColor = "orange";
     removeItem.style.color = "white";
     removeItem.style.borderColor = "transparent"
     removeItem.textContent = "Remove";
     removeItem.addEventListener("click", (e)=>{
       e.preventDefault();
       e.target.parentElement.remove(); 
     })

     p.appendChild(removeItem);
     cart.appendChild(p);


    })
    productItem.appendChild(addTocat);
    


    //product ID element.
    // const productId = document.createElement("h4");
    // productId.style.width = "50%";
    // productId.style.padding = "20px";
    // //productId.textContent = //`Product ID: ${element.}`
	// productItem.appendChild(productId); 
    product_container.appendChild(productItem);
  });
};
product_container.addEventListener("load", fetchData);
