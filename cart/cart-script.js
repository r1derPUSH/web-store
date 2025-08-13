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

const t = localStorage.getItem('idOfMenClothing');
console.log(JSON.parse(t));

class CartOfManClothing {
   // ІДЕЯ: ПРИВЯЗАТИ ПОДІЮ ПРИ ДОДАВАННІ АЙДІ ДО 'id' ТАКОЖ ПРИВЯЗАТИ НОВИЙ АЙТЕМ ЛОКАЛ СТОРЕДЖУ (НАПРИКЛАД idOfWomenCLothes) 
   // ДЛЯ ПОДАЛЬШОГО ВИКОРИСТАННЯ НА НАСТУПНІЙ СТОРІНЦІ ТА ДИНАМІЧНОГО ВІДОБРАЖЕННЯ ЦИХ ПРОДУКТІВ
    
}

const createManProps = new CartOfManClothing();
// createManProps.renderCartOfManClothing();

}

renderWebsite();