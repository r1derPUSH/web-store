// DOM Manipulation
const productContainer = document.querySelector('.product-box');
const navig = document.querySelector('.nav');
let selected_option = document.querySelector('.selected_option');
let selection = document.querySelector(".selected_option p");
let option_box = document.querySelector('nav');
let options = document.querySelectorAll("nav ul li");
let arrow = document.querySelector('.arrow');
let selected_text = document.querySelector('.selected-text');

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

// Products

class Product {
    constructor (id, name, price, description, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
    }
}

class MenClothing {
    constructor (data) {

    }
    renderMenClothing () {
        
    }
}

}

renderWebsite();