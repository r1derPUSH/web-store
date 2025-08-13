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

const manSectionLength = JSON.parse(localStorage.getItem('idOfMenClothing'));
console.log(manSectionLength);

class CartOfManClothing {
   // ІДЕЯ: ПРИВЯЗАТИ ПОДІЮ ПРИ ДОДАВАННІ АЙДІ ДО 'id' ТАКОЖ ПРИВЯЗАТИ НОВИЙ АЙТЕМ ЛОКАЛ СТОРЕДЖУ (НАПРИКЛАД idOfWomenCLothes) 
   // ДЛЯ ПОДАЛЬШОГО ВИКОРИСТАННЯ НА НАСТУПНІЙ СТОРІНЦІ ТА ДИНАМІЧНОГО ВІДОБРАЖЕННЯ ЦИХ ПРОДУКТІВ
    renderManCartSection () {
        // container
        for (let i = 0; i < manSectionLength.length; i++) {
            // console.log(arrOfMenClothing[manSectionLength[i] - 1])
            const container = document.createElement('div');
            menC.appendChild(container);
            container.style.display = 'flex';
            container.style.justifyContent = 'space-around';
            container.style.alignItems = 'center';
            container.style.height = '12vh';
            container.style.width = '100vw';
            container.style.background = 'linear-gradient(135deg, #34495e, #5dade2)';
            container.style.margin = '1vh';
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
            const quantity = document.createElement('p');
            container.appendChild(quantity);
            quantity.textContent = 'Quantity: 1';
            quantity.style.fontSize = '1.3rem';
            quantity.style.fontWeight = 'bold';
        }
    }
}

const createManProps = new CartOfManClothing();
createManProps.renderManCartSection();

}

renderWebsite();