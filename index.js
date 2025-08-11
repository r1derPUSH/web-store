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


navig.addEventListener('click', async function (e) {
    await wait(1000);
    if (selected_text.textContent == "men's clothing") {
        alert("men's clothing");
    }
    if (selected_text.textContent == "jewelery") {
        alert("jewelery");
    }
    if (selected_text.textContent == "electronics") {
        alert("electronics");
    }
    if (selected_text.textContent == "women's clothing") {
        alert("women's clothing");
    }
})

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
        for (let i = 0; i < arrOfMenClothing.length; i++) {
            const product = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h1');
            const description = document.createElement('p');
            const priceOfProduct = document.createElement('p');
            menC.appendChild(product);
            product.style.width = '50vh';
            product.style.height = '50vh';
            product.style.border = '2px solid gray';
            product.style.display = 'flex';
            product.style.flexDirection = 'column';
            product.style.justifyContent = 'space-around';
            product.style.alignItems = 'center';
            // title 
            product.appendChild(title);
            title.textContent = arrOfMenClothing[i].title;
            // img
            product.appendChild(img);
            img.src = arrOfMenClothing[i].image;
            img.style.width = '3vh';
            img.style.height = '3vh';
            //desc
            product.appendChild(description);
            description.textContent = arrOfMenClothing[i].description;
            // price
            product.appendChild(priceOfProduct);
            priceOfProduct.textContent = arrOfMenClothing[i].price;
        }
    }
}

const menClothing = new MenClothing ();
menClothing.renderMenClothing();

class WomenClothing {
    constructor (data) {

    }
    renderWomenClothing () {

    }
}

class Jewelery {
    constructor (data) {

    }
    renderJewelery () {

    }
}

}

renderWebsite();