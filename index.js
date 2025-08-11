// DOM Manipulation
const productContainer = document.querySelector('.product-box');
const navig = document.querySelector('.nav');
const selected_option = document.querySelector('.selected_option');
const selection = document.querySelector(".selected_option p");
const option_box = document.querySelector('nav');
const options = document.querySelectorAll("nav ul li");
const arrow = document.querySelector('.arrow');
const selected_text = document.querySelector('.selected-text');
// products
const menC = document.querySelector('.menC');
const womenC = document.querySelector('.womenC');
const electronics = document.querySelector('.electronics');
const jewelery = document.querySelector('.jewelery');

// Endpoint Of DOM Manipulation

function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function renderWebsite() {


// select-menu code

    selected_option.addEventListener("click", selection_function)

    function selection_function() {
        option_box.classList.toggle('nav_active');

        if (option_box.classList.contains('nav_active')) {
            arrow.classList.add("arrow_active");

            for (let i = 0; i < options.length; i++) {
                const element = options[i];
                element.onclick = function() {
                    selection.textContent = element.textContent;
                    selection_function();
                }
                setTimeout(() => {
                    element.style.transform = "scale(1)";
                    element.style.opacity = "1";
                }, i * 150);
            }
        }
        else {
            arrow.classList.remove('arrow_active');

            for (let i = 0; i < options.length; i++) {
                const element = options[i];
                setTimeout(() => {
                    element.style.transform = "scale(0.5)";
                    element.style.opacity = "0";
                }, i * 150);
            }
        }
    }

// endpoint of select-menu code


// fetching info
const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
console.log(data);

let isManActive = false;
let isWomenActive = false;
let isElectronicsActive = false;
let iseJeweleryActive = false;

let isManCreated = false;
let isWomenCreated = false;

const arrOfMenClothing = data.filter(item => item.category == "men's clothing");
const arrOfWomenClothing = data.filter(item => item.category == "women's clothing");
const arrOfElectronics = data.filter(item => item.category == "electronics");
const arrOfJewelery = data.filter(item => item.category == "jewelery");
// console.log(arrOfMenClothing);
// console.log(arrOfWomenClothing);
// console.log(arrOfElectronics);
// console.log(arrOfJewelery);

// Products

class MenClothing {
    constructor (name, img, desc, price, inStock) {
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.price = price;
        this.inStock = inStock;
    }
    renderMenClothing () {
        isManActive = true;
        womenC.style.display = 'none';
        isWomenActive = false;
        if (isManCreated) {
            menC.style.display = 'flex';
            return;
        }
        for (let i = 0; i < arrOfMenClothing.length; i++) {
            const product = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h1');
            const description = document.createElement('p');
            const priceOfProduct = document.createElement('p');
            const button = document.createElement('button');
            menC.appendChild(product);
            menC.style.display = 'flex';
            product.classList.add('product-container'); // for hover
            product.style.background = "rgba(255, 255, 255, 0.15)";
            product.style.borderRadius = '12px';
            product.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.25)";
            product.style.backdropFilter = "blur(8px)";
            product.style.transform = "transform 0.3s ease, box-shadow 0.3s ease";
            product.style.width = '45vh';
            product.style.height = '50vh';
            product.style.display = 'flex';
            product.style.flexDirection = 'column';
            product.style.justifyContent = 'space-around';
            product.style.alignItems = 'center';
            product.style.textAlign = 'center';
            // title 
            product.appendChild(title);
            title.textContent = arrOfMenClothing[i].title;
            // img
            product.appendChild(img);
            img.src = arrOfMenClothing[i].image;
            img.style.width = '10vh';
            img.style.height = '10vh';
            //desc
            product.appendChild(description);
            description.textContent = arrOfMenClothing[i].description;
            description.style.fontSize = '1.2rem';
            // price
            product.appendChild(priceOfProduct);
            priceOfProduct.textContent = arrOfMenClothing[i].price + "$";
            priceOfProduct.style.fontSize = '1.5rem';
            priceOfProduct.style.fontWeight = 'bold';
            // btn
            product.appendChild(button);
            button.classList.add('add-to-cart-btn');
            button.textContent = 'Add to Cart';
            button.style.marginBottom = '2vh';
            // checking
            isManCreated = true;
        }
    }
}

const menClothing = new MenClothing ();

class WomenClothing {
    constructor (data) {

    }
    renderWomenClothing () {
        isWomenActive = true;
        menC.style.display = 'none';
        isManActive = false;
        if (isWomenCreated) {
            womenC.style.display = 'flex';
            return;
        }
        for (let i = 0; i < 4; i++) {
            const product = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h1');
            const description = document.createElement('p');
            const priceOfProduct = document.createElement('p');
            const button = document.createElement('button');
            womenC.appendChild(product);
            womenC.style.display = 'flex';
            product.classList.add('product-container'); // for hover
            product.style.background = "rgba(255, 255, 255, 0.15)";
            product.style.borderRadius = '12px';
            product.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.25)";
            product.style.backdropFilter = "blur(8px)";
            product.style.transform = "transform 0.3s ease, box-shadow 0.3s ease";
            product.style.width = '45vh';
            product.style.height = '50vh';
            product.style.display = 'flex';
            product.style.flexDirection = 'column';
            product.style.justifyContent = 'space-around';
            product.style.alignItems = 'center';
            product.style.textAlign = 'center';
            // title 
            product.appendChild(title);
            title.textContent = arrOfWomenClothing[i].title;
            // img
            product.appendChild(img);
            img.src = arrOfWomenClothing[i].image;
            img.style.width = '10vh';
            img.style.height = '10vh';
            //desc
            product.appendChild(description);
            description.textContent = arrOfWomenClothing[i].description;
            description.style.fontSize = '1.2rem';
            // price
            product.appendChild(priceOfProduct);
            priceOfProduct.textContent = arrOfWomenClothing[i].price + "$";
            priceOfProduct.style.fontSize = '1.5rem';
            priceOfProduct.style.fontWeight = 'bold';
            // btn
            product.appendChild(button);
            button.classList.add('add-to-cart-btn');
            button.textContent = 'Add to Cart';
            button.style.marginBottom = '2vh';
            isWomenCreated = true;
    }
}
}

const womenClothing = new WomenClothing();

class Jewelery {
    constructor (data) {

    }
    renderJewelery () {

    }
}

navig.addEventListener('click', async function (e) {
    await wait(1000);
    if (selected_text.textContent == "men's clothing" && !isManActive) {
        console.log("men's clothing");
        menClothing.renderMenClothing();
    }
    if (selected_text.textContent == "jewelery" && !isWomenActive) {
        console.log("jewelery");
        womenClothing.renderWomenClothing();
    }
    if (selected_text.textContent == "electronics") {
        console.log("electronics");
    }
    if (selected_text.textContent == "women's clothing") {
        console.log("women's clothing");
    }
})

}

renderWebsite();