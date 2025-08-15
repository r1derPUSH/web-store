async function renderWebsite () {

// DOM manipulation
const menC = document.querySelector('.menC');
const womenC = document.querySelector('.womenC');
const electronics = document.querySelector('.electronics');
const jewelery = document.querySelector('.jewelery');
const btnBack = document.querySelector('.backToShop');


btnBack.addEventListener('click', function () {
    window.location.href = '../main/index.html';
})

document.querySelector('.clearStorage').addEventListener('click', function () {
    localStorage.clear();
    window.location = window.location;
})

// fetching info
const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
console.log(data);

const arrOfMenClothing = data.filter(item => item.category == "men's clothing");
const arrOfWomenClothing = data.filter(item => item.category == "women's clothing");
const arrOfElectronics = data.filter(item => item.category == "electronics");
const arrOfJewelery = data.filter(item => item.category == "jewelery");

// console.log(userCart);
// products of user

//constants for logic

//man
let id1 = false;
let quantId1 = 1;
let id2 = false;
let quantId2 = 1;
let id3 = false;
let quantId3 = 1;
let id4 = false;
let quantId4 = 1;
//woman
let id5 = false;
let id6 = false;
let id7 = false;
let id8 = false;
// electronics
let id9 = false;
let id10 = false;
let id11 = false;
let id12 = false;
// women
let id13 = false;
let id14 = false;
let id15 = false;
let id16 = false;

const manSectionLength = JSON.parse(localStorage.getItem('idOfMenClothing'));
console.log(manSectionLength);

class CartOfManClothing {
   // ДОДУМАТИ ЛОГІКУ З КІЛЬКІСТЮ ПРОДУКТІВ
    renderManCartSection () {
        // container
        const quantity = document.createElement('p');
        for (let i = 0; i < manSectionLength.length; i++) {
            if (id1) {
                quantId1++;
                quantity.textContent = `Quantity: ${quantId1}`;
                console.log('worked out');
            }
            if (id2) {
                quantId2++;
                quantity.textContent = `Quantity: ${quantId2}`;
            }
            if (id3) {
                quantId3++;
                quantity.textContent = `Quantity: ${quantId3}`;
            }
            if (id4) {
                quantId4++;
                quantity.textContent = `Quantity: ${quantId4}`;
            }
            // console.log(arrOfMenClothing[manSectionLength[i] - 1])  ;
            //МОЖНА ПОПРОБУВАТИ ЗАФІЛЬТРИТИ МАСИВ І ДІСТАТИ ДОВЖИНУ ОДНАКОВИХ АЙДІШОК, І ПРОСТО ПИСАТИ КВАНТІТІ
            // - ЇХ ДОВЖИНА, І ЗРОБИТИ 4 ЗМІННІ, І ПЕРЕВІРКУ СПОЧАТКУ, ЯКЩО ТАМ ДОВЖИНА БІЛЬШЕ ЗА 1 ТОГО ФІЛЬТР
            //МАСИВУ ТОДІ ПРОСТО ПИСАТИ КВАНТІТІ - МАСИВ.LENGTH;
            const container = document.createElement('div');
            menC.appendChild(container);
            container.style.display = 'flex';
            container.style.justifyContent = 'space-around';
            container.style.alignItems = 'center';
            container.style.height = '12vh';
            container.style.width = '100vw';
            container.style.background = 'linear-gradient(135deg, #34495e, #5dade2)';
            container.style.margin = '1vh';
            container.style.borderRadius = '50px';
            // item name
            const name = document.createElement('p');
            container.appendChild(name);
            name.style.fontSize = '1.2rem';
            name.style.fontWeight = 'bold';
            name.textContent = arrOfMenClothing[manSectionLength[i] - 1].title;
            // img 
            const img = document.createElement('img');
            container.appendChild(img);
            img.src = arrOfMenClothing[manSectionLength[i] - 1].image;
            img.style.width = '8vh';
            img.style.height = '8vh';
            // price
            const price = document.createElement('p');
            container.appendChild(price);
            price.textContent = arrOfMenClothing[manSectionLength[i] - 1].price + "$";
            price.style.fontSize = '1.5rem';
            price.style.fontWeight = 'bold';
            //description
            const description = document.createElement('p');
            container.appendChild(description);
            description.textContent = arrOfMenClothing[manSectionLength[i] - 1].description;
            description.style.maxWidth = '20vw';
            description.style.fontSize = '1.1rem';
            description.style.overflow = 'hidden';
            description.style.textOverflow = 'ellipsis';
            description.style.display = '-webkit-box';
            description.style.webkitLineClamp = '3';
            description.style.webkitBoxOrient = 'vertical';
            // quantity 
            container.appendChild(quantity);
            quantity.textContent = 'Quantity: 1';
            quantity.style.fontSize = '1.3rem';
            quantity.style.fontWeight = 'bold';
            if (manSectionLength[i] == 1) {
                id1 = true;
            }
            if (manSectionLength[i] == 2) {
                id2 = true;
            }
            if (manSectionLength[i] == 3) {
                id3 = true;
            }
            if (manSectionLength[i] == 4) {
                id1 = true;
            }
        }
    }
}

class CartOfWomanClothing {
    // logic later
}

const createManProps = new CartOfManClothing();
createManProps.renderManCartSection();

}

renderWebsite();