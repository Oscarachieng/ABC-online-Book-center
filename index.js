// Displaying Products into the product page.
//Pseudocode...
/*
1.Grab the element, #product-container, and assign it to a varaible.
2.Add  "load" event listener to the variable, and and event handler function.
3.The event handler fetch, "GET", from the API,
4.The event handler calls renderProduct function to render product into the page.
5.

*/
//Grabbing the product-container element
const product_container = document.querySelector("product-container");
//product_container.addEventListener("load",fetchData);

// fetching API function
const fetchData= ()=> {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7310622931msh9f6735caf0bf519p1c820cjsn2c95afa5cfdc',
			'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
		}
	};
	
	const myFetch = fetch('https://amazon24.p.rapidapi.com/api/todaydeals', options)
		.then(response => response.json())
		.then(response => {
			return response;
		})
		.catch(err => console.error(err));
		return myFetch
}
console.log(fetchData())

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

const renderProduct =(data)=>{
    data.forEach(element => {
		const productItem = document.createElement("div");
		productItem.style.padding = "10px";
		productItem.style.height = "300px"
		productItem.style.width = "150px";
		

		const image = document.createElement("img");
		image.style.width = "130px";
		image.style.height = "200px";
		image.src = // `${}`
		productItem.appendChild(image);

		const productTitle = document.createElement("p");
		productTitle.style.fontStyle = "italics"
		productTitle.style.width = "130px";
		productTitle.textContent = //` Product Description ${}`
		productItem.appendChild(productTitle);

//creates price element and div containing it.
        const price_container = document.createElement("div");
		price_container.style.display = "flex";
		price_container.style.width = "130px"
		price_container.style.justifyContent = "space-between"
		//price element.
		const price = document.createElement("h4");
		price.style.fontStyle = "italics";
		price.style.fontSize = "x-large";
        price.style.color = "chocolate";
		//price.style.width = "50%"
		price.textContent = //` Price : ${}`
		price_container.appendChild(price);

		//currency element.
		const currency = document.createElement("h4");
		currency.style.fontSize = "x-large";
		currency.style.fontStyle = "italics";
		currency.style.color = "chocolate";
		currency.textContent = //`Currency :${}`
		price_container.appendChild(currency);
		productItem.appendChild(price_container);

		//product ID element.
		const productId = document.createElement("h4");
		productId.style.width = "50%";
		productId.style.padding = "20px"
		productId.textContent = //`Product ID: ${}`
		productItem.appendChild(productId);
		product_container.appendChild(productItem);
	});
}
