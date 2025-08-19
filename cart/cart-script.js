async function renderWebsite () {

// DOM manipulation
const menC = document.querySelector('.menC');
const womenC = document.querySelector('.womenC');
const electronics = document.querySelector('.electronics');
const jewelery = document.querySelector('.jewelery');
const btnBack = document.querySelector('.backToShop');
const totalPrice = document.querySelector('.totalPrice');

btnBack.addEventListener('click', function () {
    window.location.href = '../main/index.html';
})

document.querySelector('.clearStorage').addEventListener('click', function () {
    localStorage.removeItem('clicksOnElectronicsId1');
    localStorage.removeItem('clicksOnElectronicsId2');
    localStorage.removeItem('clicksOnElectronicsId3');
    localStorage.removeItem('clicksOnElectronicsId4');
    localStorage.removeItem('clicksOnJeweleryId1');
    localStorage.removeItem('clicksOnJeweleryId2');
    localStorage.removeItem('clicksOnJeweleryId3');
    localStorage.removeItem('clicksOnJeweleryId4');
    localStorage.removeItem('clicksOnMenId1');
    localStorage.removeItem('clicksOnMenId2');
    localStorage.removeItem('clicksOnMenId3');
    localStorage.removeItem('clicksOnMenId4');
    localStorage.removeItem('clicksOnWomanId1');
    localStorage.removeItem('clicksOnWomanId2');
    localStorage.removeItem('clicksOnWomanId3');
    localStorage.removeItem('clicksOnWomanId4');
    localStorage.removeItem('idOfElectronics');
    localStorage.removeItem('idOfJewelery');
    localStorage.removeItem('idOfMenClothing');
    localStorage.removeItem('idOfWomenClothing');
    localStorage.removeItem('id');
    window.location = window.location;
})

// fetching info
const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
console.log(data);

const arrOfMenClothing = data.filter(item => item.category == "men's clothing");
console.log(arrOfMenClothing);
const arrOfWomenClothing = data.filter(item => item.category == "women's clothing");
console.log(arrOfWomenClothing);
const arrOfElectronics = data.filter(item => item.category == "electronics");
const arrOfJewelery = data.filter(item => item.category == "jewelery");
console.log(arrOfJewelery);

// console.log(userCart);
// products of user

//constants for logic
// const lengthOfMan1 


// total price counter
let total = 0;


const manSectionLength = JSON.parse(localStorage.getItem('idOfMenClothing'));
const womanSectionLength = JSON.parse(localStorage.getItem('idOfWomenClothing'));
const electronicsSectionLength = JSON.parse(localStorage.getItem('idOfElectronics'));
const jewelerySectionLength = JSON.parse(localStorage.getItem('idOfJewelery'));
console.log(jewelerySectionLength);

class CartOfManClothing {
   // ДОДУМАТИ ЛОГІКУ З КІЛЬКІСТЮ ПРОДУКТІВ
    renderManCartSection () {
        let isId1 = false;
        let isId2 = false;
        let isId3 = false;
        let isId4 = false;
        const manId1 = JSON.parse(localStorage.getItem('clicksOnMenId1'));
        const manId2 = JSON.parse(localStorage.getItem('clicksOnMenId2'));
        const manId3 = JSON.parse(localStorage.getItem('clicksOnMenId3'));
        const manId4 = JSON.parse(localStorage.getItem('clicksOnMenId4'));
        // container
        for (let i = 0; i < manSectionLength.length; i++) {
            if (manSectionLength[i] == 1 && !isId1) {
                const quantity = document.createElement('p');
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
                total += arrOfMenClothing[manSectionLength[i] - 1].price;
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
                quantity.textContent = `Quantity: ${manId1.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId1 = true;
        }
        if (manSectionLength[i] == 2 && !isId2) {
                const quantity = document.createElement('p');
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
                total += arrOfMenClothing[manSectionLength[i] - 1].price;
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
                quantity.textContent = `Quantity: ${manId2.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId2 = true;
        }
        if (manSectionLength[i] == 3 && !isId3) {
                const quantity = document.createElement('p');
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
                total += arrOfMenClothing[manSectionLength[i] - 1].price;
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
                quantity.textContent = `Quantity: ${manId3.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId3 = true;
        }
        if (manSectionLength[i] == 4 && !isId4) {
                const quantity = document.createElement('p');
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
                total += arrOfMenClothing[manSectionLength[i] - 1].price;
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
                quantity.textContent = `Quantity: ${manId4.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId4 = true;
        }
    }
    } //////
}

const manId5 = JSON.parse(localStorage.getItem('clicksOnWomanId1'));
const manId6 = JSON.parse(localStorage.getItem('clicksOnWomanId2'));
const manId7 = JSON.parse(localStorage.getItem('clicksOnWomanId3'));
const manId8 = JSON.parse(localStorage.getItem('clicksOnWomanId4'));
const manId9 = JSON.parse(localStorage.getItem('clicksOnElectronicsId1'));
const manId10 = JSON.parse(localStorage.getItem('clicksOnElectronicsId2'));
const manId11 = JSON.parse(localStorage.getItem('clicksOnElectronicsId3'));
const manId12 = JSON.parse(localStorage.getItem('clicksOnElectronicsId4'));
const manId13 = JSON.parse(localStorage.getItem('clicksOnJeweleryId1'));
const manId14 = JSON.parse(localStorage.getItem('clicksOnJeweleryId2'));
const manId15 = JSON.parse(localStorage.getItem('clicksOnJeweleryId3'));
const manId16 = JSON.parse(localStorage.getItem('clicksOnJeweleryId4'));
// console.log(manId7);

class CartOfWomanClothing {
    renderWomanSection () {
        let isId5 = false;
        let isId6 = false;
        let isId7 = false;
        let isId8 = false;
        // container
        for (let i = 0; i < womanSectionLength.length; i++) {
            if (womanSectionLength[i] == 15 && !isId5) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfWomenClothing[womanSectionLength[i] - 15].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].price + "$";
                total += arrOfWomenClothing[womanSectionLength[i] - 15].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId5.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId5 = true;
        }
        if (womanSectionLength[i] == 16 && !isId6) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfWomenClothing[womanSectionLength[i] - 15].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].price + "$";
                total += arrOfWomenClothing[womanSectionLength[i] - 15].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId6.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId6 = true;
        }
        if (womanSectionLength[i] == 17 && !isId7) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfWomenClothing[womanSectionLength[i] - 15].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].price + "$";
                total += arrOfWomenClothing[womanSectionLength[i] - 15].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId7.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId7 = true;
        }
        if (womanSectionLength[i] == 18 && !isId8) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfWomenClothing[womanSectionLength[i] - 15].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].price + "$";
                total += arrOfWomenClothing[womanSectionLength[i] - 15].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfWomenClothing[womanSectionLength[i] - 15].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId8.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId8 = true;
        }
    }
    }
}

class CartOfElectronics {
    rednerElectronicsSection () {
        let isId9 = false;
        let isId10 = false;
        let isId11 = false;
        let isId12 = false;
        // container
        for (let i = 0; i < electronicsSectionLength.length; i++) {
            if (electronicsSectionLength[i] == 9 && !isId9) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfElectronics[electronicsSectionLength[i] - 9].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].price + "$";
                total += arrOfElectronics[electronicsSectionLength[i] - 9].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId9.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId9 = true;
        }
        if (electronicsSectionLength[i] == 10 && !isId10) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfElectronics[electronicsSectionLength[i] - 9].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].price + "$";
                total += arrOfElectronics[electronicsSectionLength[i] - 9].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId10.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId10 = true;
        }
        if (electronicsSectionLength[i] == 11 && !isId11) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfElectronics[electronicsSectionLength[i] - 9].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].price + "$";
                total += arrOfElectronics[electronicsSectionLength[i] - 9].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId11.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId11 = true;
        }
        if (electronicsSectionLength[i] == 12 && !isId12) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfElectronics[electronicsSectionLength[i] - 9].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].price + "$";
                total += arrOfElectronics[electronicsSectionLength[i] - 9].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfElectronics[electronicsSectionLength[i] - 9].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId12.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId12 = true;
        }
    }
    }
}

class CartOfJewelery {
    renderJewelerySection () {
        let isId13 = false;
        let isId14 = false;
        let isId15 = false;
        let isId16 = false;
        // container
        for (let i = 0; i < jewelerySectionLength.length; i++) {
            if (jewelerySectionLength[i] == 5 && !isId13) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfJewelery[jewelerySectionLength[i] - 5].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].price + "$";
                total += arrOfJewelery[jewelerySectionLength[i] - 5].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId13.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId13 = true;
        }
        if (jewelerySectionLength[i] == 6 && !isId14) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfJewelery[jewelerySectionLength[i] - 5].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].price + "$";
                total += arrOfJewelery[jewelerySectionLength[i] - 5].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId14.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId14 = true;
        }
        if (jewelerySectionLength[i] == 7 && !isId15) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfJewelery[jewelerySectionLength[i] - 5].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].price + "$";
                total += arrOfJewelery[jewelerySectionLength[i] - 5].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId15.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId15 = true;
        }
        if (jewelerySectionLength[i] == 8 && !isId16) {
                const quantity = document.createElement('p');
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
                name.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].title;
                // img 
                const img = document.createElement('img');
                container.appendChild(img);
                img.src = arrOfJewelery[jewelerySectionLength[i] - 5].image;
                img.style.width = '8vh';
                img.style.height = '8vh';
                // price
                const price = document.createElement('p');
                container.appendChild(price);
                price.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].price + "$";
                total += arrOfJewelery[jewelerySectionLength[i] - 5].price;
                price.style.fontSize = '1.5rem';
                price.style.fontWeight = 'bold';
                //description
                const description = document.createElement('p');
                container.appendChild(description);
                description.textContent = arrOfJewelery[jewelerySectionLength[i] - 5].description;
                description.style.maxWidth = '20vw';
                description.style.fontSize = '1.1rem';
                description.style.overflow = 'hidden';
                description.style.textOverflow = 'ellipsis';
                description.style.display = '-webkit-box';
                description.style.webkitLineClamp = '3';
                description.style.webkitBoxOrient = 'vertical';
                // quantity 
                container.appendChild(quantity);
                quantity.textContent = `Quantity: ${manId16.length}`;
                quantity.style.fontSize = '1.3rem';
                quantity.style.fontWeight = 'bold';
                isId16 = true;
        }
    }
    }
}

class TotalPrice {
    renderTotalPrice () {
        totalPrice.textContent = `Total: ${total}$`;
        totalPrice.style.fontSize = '1.3rem';
    }
}


// render class components
// man
if (manSectionLength !== null) {
    const createManProps = new CartOfManClothing();
    createManProps.renderManCartSection();
}
// woman
if (womanSectionLength !== null) {
    const createWomanProps = new CartOfWomanClothing();
    createWomanProps.renderWomanSection();
}
// elec
if (electronicsSectionLength !== null) {
    const createElecProps = new CartOfElectronics();
    createElecProps.rednerElectronicsSection();
}
// jew
if (jewelerySectionLength !== null) {
    const createJewProps = new CartOfJewelery();
    createJewProps.renderJewelerySection();
}
// price
const createTotalPrice = new TotalPrice();
createTotalPrice.renderTotalPrice();
}

renderWebsite();