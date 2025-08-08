// DOM Manipulation
const productContainer = document.querySelector('.product-box');

// Endpoint Of DOM Manipulation

async function renderWebsite() {


// select-menu code

    let selected_option = document.querySelector('.selected_option');
    let selection = document.querySelector(".selected_option p");
    let option_box = document.querySelector('nav');
    let options = document.querySelectorAll("nav ul li");
    let arrow = document.querySelector('.arrow');

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

class ProductStyles { 
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth () {
        return this.width;
    }
    getHeight () {
        return this.height;
    }
}

const proportions = new ProductStyles(30, 30);
// properties (width, heigh)
const widthOfContainer = proportions.getWidth();
const heightOfContainer = proportions.getHeight();

class DivProperties {
    constructor (product) {
        this.product = product;
    }
    createDiv () {
        this.product.style.width = `${widthOfContainer}vh`;
        this.product.style.height = `${heightOfContainer}vh`;
        this.product.style.border = `3px solid black`;
        this.product.style.backgroundColor = 'gray';
    }
}

// properties for creating div
const divProperties = new DivProperties(productContainer);



class CreateImg {
    constructor (src) {
        this.src = src;
    }
    createImage() {
        const img = document.createElement('img');
        productContainer.appendChild(img);
        img.src = `${this.src}`;
        img.style.width = '10vh';
        img.style.height = '10vh';
    }
}
const imgProperties = new CreateImg(data[0].image);

class RenderProduct {
    renderAll () {
        divProperties.createDiv();
        imgProperties.createImage();
    }
}

const renderProduct = new RenderProduct();
renderProduct.renderAll();

}

renderWebsite();