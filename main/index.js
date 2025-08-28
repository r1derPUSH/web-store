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
// animated cart
const animatedCart = document.querySelector('.animatedCart');
const animatedCartImg = document.querySelector('.imgAnimatedCart');
// text for user
const userInfoName = document.querySelector('.userName');
const usernameImg = document.querySelector('.username-img');
// small section profile
const userImgSmallSection = document.querySelector('.user-small-section-avatar');
const userNameSmallSection = document.querySelector('.user-small-section-name');
const userSmallInfo = document.querySelector('.user-profile');
const countOfSmallSection = document.querySelector('.count');
const totalPriceOfSmallSection = document.querySelector('.price');
// login manipulation
// register
const header = document.querySelector('.header');
const mainS = document.querySelector('.mainS');
const mainLogin = document.querySelector('.main');
const loginDiv = document.querySelector('.flexLogin');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const textSignUp = document.querySelector('.sign-up-text');
// login
const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');
const loginText = document.querySelector('.login-text');
// Endpoint Of DOM Manipulation

// localStorage.clear();

// delay fn
function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isSmallInfoDisplayed = false;

let isLoggedIn = localStorage.getItem('isLoggedIn');
console.log(isLoggedIn);

if (isLoggedIn) {
    loginDiv.style.display = 'none';
    renderWebsite();
}

function checkEmail (email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function smallInformation () {
    if (!isSmallInfoDisplayed) {
        userSmallInfo.style.display = 'flex';
        isSmallInfoDisplayed = true;
    }
    else {
        userSmallInfo.style.display = 'none';
        isSmallInfoDisplayed = false;
    }
}


function getUserInfo() {
    if (!checkEmail(email.value)) {
        return;
    }
    if (email.value != '' && password.value != '' && username !='' && localStorage.getItem('username') === null && localStorage.getItem('email') === null && localStorage.getItem('password') === null) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('isLoggedIn', true);
        renderWebsite();
    }
    else {
        let user;
        if (localStorage.getItem('username') === null) {
            user = 'User';
        }
        else {
            user = localStorage.getItem('username');
        }
        textSignUp.textContent = `Dear ${user}, you have already been registered. Please login 😉`;
        textSignUp.style.color = 'red';
        textSignUp.style.marginLeft = '7vh'
        // alert('you have been already registered');
    }
}

totalPriceOfSmallSection.textContent = localStorage.getItem('email');

function getUserLoginInfo () {
    if (!checkEmail(email.value)) {
        return;
    }
    if (localStorage.getItem('username') !== null && localStorage.getItem('email') !== null && localStorage.getItem('password') !== null) {
        if (localStorage.getItem('email') == loginEmail.value && localStorage.getItem('password') == loginPassword.value) {
            localStorage.setItem('isLoggedIn', true);
            renderWebsite();
        } 
        else {
            const user = localStorage.getItem('username');
            loginText.textContent = `Dear ${user}, you entered wrong password or email 😣`;
            loginText.style.color = 'red';
            loginText.style.marginLeft = '3vh';
        }
    }
}

async function renderWebsite() {

    //username localstorage
    const user = localStorage.getItem('username');

    // code for small section

    userNameSmallSection.textContent = user;


        await wait(200);
        loginDiv.style.display = 'none';
        header.style.display = 'block';
        mainS.style.display = 'block';

let userCart = [];


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

// setting userName
userInfoName.textContent = user;


let isManActive = false;
let isWomenActive = false;
let isElectronicsActive = false;
let isJeweleryActive = false;

let isManCreated = false;
let isWomenCreated = false;
let isElectronicCreated = false;
let isJeweleryCreated = false;

const arrOfMenClothing = data.filter(item => item.category == "men's clothing");
const arrOfWomenClothing = data.filter(item => item.category == "women's clothing");
const arrOfElectronics = data.filter(item => item.category == "electronics");
const arrOfJewelery = data.filter(item => item.category == "jewelery");

function addUserCartInfo(id) {
    userCart.push(id);
}


// Products

class MenClothing {
    renderMenClothing () {
        isManActive = true;
        womenC.style.display = 'none';
        electronics.style.display = 'none';
        jewelery.style.display = 'none';
        isWomenActive = false;
        isElectronicsActive = false;
        isJeweleryActive = false;
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
            let counterBtn1 = 0;
            let counterBtn2 = 0;
            let counterBtn3 = 0;
            let counterBtn4 = 0;
            button.onclick = async function () {
                addUserCartInfo(arrOfMenClothing[i].id);
                console.log(userCart);
                animatedCart.style.display = 'flex';
                animatedCart.classList.add('moveRight');
                animatedCartImg.src = arrOfMenClothing[i].image;
                await wait (1200);
                animatedCart.style.display = 'none';
                animatedCart.classList.remove('moveRight');
                localStorage.setItem('id', JSON.stringify([...(JSON.parse(localStorage.getItem('id')) || []), arrOfMenClothing[i].id]));
                localStorage.setItem('idOfMenClothing', JSON.stringify([...(JSON.parse(localStorage.getItem('idOfMenClothing')) || []), arrOfMenClothing[i].id]));
                if (arrOfMenClothing[i].id == 1) {
                    counterBtn1++;
                    localStorage.setItem('clicksOnMenId1', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnMenId1')) || []), counterBtn1]));
                }
                if (arrOfMenClothing[i].id == 2) {
                    counterBtn2++;
                    localStorage.setItem('clicksOnMenId2', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnMenId2')) || []), counterBtn2]));
                }
                if (arrOfMenClothing[i].id == 3) {
                    counterBtn3++;
                    localStorage.setItem('clicksOnMenId3', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnMenId3')) || []), counterBtn3]));
                }
                if (arrOfMenClothing[i].id == 4) {
                    counterBtn4++;
                    localStorage.setItem('clicksOnMenId4', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnMenId4')) || []), counterBtn4]));
                }
                //count of products in small section under username
                const lengthOfProducts = JSON.parse(localStorage.getItem('id'));
                countOfSmallSection.textContent = lengthOfProducts.length;

                //email under username
                const email = localStorage.getItem('email');
                totalPriceOfSmallSection.textContent = email;
            }
            // checking
            isManCreated = true;
        }
    }
}

const menClothing = new MenClothing ();

class WomenClothing {
    renderWomenClothing () {
        isWomenActive = true;
        menC.style.display = 'none';
        electronics.style.display = 'none';
        jewelery.style.display = 'none';
        isManActive = false;
        isElectronicsActive = false;
        isJeweleryActive = false;
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
            let counterBtn5 = 0;
            let counterBtn6 = 0;
            let counterBtn7 = 0;
            let counterBtn8 = 0;
            button.onclick = async function () {
                addUserCartInfo(arrOfWomenClothing[i].id);
                console.log(userCart);
                animatedCart.style.display = 'flex';
                animatedCart.classList.add('moveRight');
                animatedCartImg.src = arrOfWomenClothing[i].image;
                await wait (1200);
                animatedCart.style.display = 'none';
                animatedCart.classList.remove('moveRight');
                localStorage.setItem('id', JSON.stringify([...(JSON.parse(localStorage.getItem('id')) || []), arrOfWomenClothing[i].id]));
                localStorage.setItem('idOfWomenClothing', JSON.stringify([...(JSON.parse(localStorage.getItem('idOfWomenClothing')) || []), arrOfWomenClothing[i].id]));
                if (arrOfWomenClothing[i].id == 15) {
                    counterBtn5++;
                    localStorage.setItem('clicksOnWomanId1', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnWomanId1')) || []), counterBtn5]));
                }
                if (arrOfWomenClothing[i].id == 16) {
                    counterBtn6++;
                    localStorage.setItem('clicksOnWomanId2', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnWomanId2')) || []), counterBtn6]));
                }
                if (arrOfWomenClothing[i].id == 17) {
                    counterBtn7++;
                    localStorage.setItem('clicksOnWomanId3', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnWomanId3')) || []), counterBtn7]));
                }
                if (arrOfWomenClothing[i].id == 18) {
                    counterBtn8++;
                    localStorage.setItem('clicksOnWomanId4', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnWomanId4')) || []), counterBtn8]));
                }
                //count of products in small section under username
                const lengthOfProducts = JSON.parse(localStorage.getItem('id'));
                countOfSmallSection.textContent = lengthOfProducts.length;

                //email under username
                const email = localStorage.getItem('email');
                totalPriceOfSmallSection.textContent = email;
            }
            isWomenCreated = true;
    }
}
}

const womenClothing = new WomenClothing();

class Electronics {
    renderElectronics () {
        isElectronicsActive = true;
        menC.style.display = 'none';
        womenC.style.display = 'none';
        jewelery.style.display = 'none';
        isManActive = false;
        isWomenActive = false;
        isJeweleryActive = false;
        if (isElectronicCreated) {
            electronics.style.display = 'flex';
            return;
        }
        for (let i = 0; i < 4; i++) {
            const product = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h1');
            const description = document.createElement('p');
            const priceOfProduct = document.createElement('p');
            const button = document.createElement('button');
            electronics.appendChild(product);
            electronics.style.display = 'flex';
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
            title.textContent = arrOfElectronics[i].title;
            // img
            product.appendChild(img);
            img.src = arrOfElectronics[i].image;
            img.style.width = '10vh';
            img.style.height = '10vh';
            //desc
            product.appendChild(description);
            description.textContent = arrOfElectronics[i].description;
            description.style.fontSize = '1.2rem';
            // price
            product.appendChild(priceOfProduct);
            priceOfProduct.textContent = arrOfElectronics[i].price + "$";
            priceOfProduct.style.fontSize = '1.5rem';
            priceOfProduct.style.fontWeight = 'bold';
            // btn
            product.appendChild(button);
            button.classList.add('add-to-cart-btn');
            button.textContent = 'Add to Cart';
            button.style.marginBottom = '2vh';
            let counterBtn9 = 0;
            let counterBtn10 = 0;
            let counterBtn11 = 0;
            let counterBtn12 = 0;
            button.onclick = async function () {
                addUserCartInfo(arrOfElectronics[i].id);
                console.log(userCart);
                animatedCart.style.display = 'flex';
                animatedCart.classList.add('moveRight');
                animatedCartImg.src = arrOfElectronics[i].image;
                await wait (1200);
                animatedCart.style.display = 'none';
                animatedCart.classList.remove('moveRight');
                localStorage.setItem('id', JSON.stringify([...(JSON.parse(localStorage.getItem('id')) || []), arrOfElectronics[i].id]));
                localStorage.setItem('idOfElectronics', JSON.stringify([...(JSON.parse(localStorage.getItem('idOfElectronics')) || []), arrOfElectronics[i].id]));
                if (arrOfElectronics[i].id == 9) {
                    counterBtn9++;
                    localStorage.setItem('clicksOnElectronicsId1', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnElectronicsId1')) || []), counterBtn9]));
                }
                if (arrOfElectronics[i].id == 10) {
                    counterBtn10++;
                    localStorage.setItem('clicksOnElectronicsId2', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnElectronicsId2')) || []), counterBtn10]));
                }
                if (arrOfElectronics[i].id == 11) {
                    counterBtn11++;
                    localStorage.setItem('clicksOnElectronicsId3', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnElectronicsId3')) || []), counterBtn11]));
                }
                if (arrOfElectronics[i].id == 12) {
                    counterBtn12++;
                    localStorage.setItem('clicksOnElectronicsId4', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnElectronicsId4')) || []), counterBtn12]));
                }
                //count of products in small section under username
                const lengthOfProducts = JSON.parse(localStorage.getItem('id'));
                countOfSmallSection.textContent = lengthOfProducts.length;

                //email under username
                const email = localStorage.getItem('email');
                totalPriceOfSmallSection.textContent = email;
            }
            isElectronicCreated = true;
    }
}
}

const elec = new Electronics ();


class Jewelery {
    renderJewelery () {
        isJeweleryActive = true;
        menC.style.display = 'none';
        womenC.style.display = 'none';
        electronics.style.display = 'none';
        isManActive = false;
        isWomenActive = false;
        isElectronicsActive = false;
        if (isJeweleryCreated) {
            jewelery.style.display = 'flex';
            return;
        }
        for (let i = 0; i < 4; i++) {
            const product = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('h1');
            const description = document.createElement('p');
            const priceOfProduct = document.createElement('p');
            const button = document.createElement('button');
            jewelery.appendChild(product);
            jewelery.style.display = 'flex';
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
            title.textContent = arrOfJewelery[i].title;
            // img
            product.appendChild(img);
            img.src = arrOfJewelery[i].image;
            img.style.width = '10vh';
            img.style.height = '10vh';
            //desc
            product.appendChild(description);
            description.textContent = arrOfJewelery[i].description;
            description.style.fontSize = '1.2rem';
            // price
            product.appendChild(priceOfProduct);
            priceOfProduct.textContent = arrOfJewelery[i].price + "$";
            priceOfProduct.style.fontSize = '1.5rem';
            priceOfProduct.style.fontWeight = 'bold';
            // btn
            product.appendChild(button);
            button.classList.add('add-to-cart-btn');
            button.textContent = 'Add to Cart';
            button.style.marginBottom = '2vh';
            let counterBtn13 = 0;
            let counterBtn14 = 0;
            let counterBtn15 = 0;
            let counterBtn16 = 0;
            button.onclick = async function () {
                addUserCartInfo(arrOfJewelery[i].id);
                console.log(userCart);
                animatedCart.style.display = 'flex';
                animatedCart.classList.add('moveRight');
                animatedCartImg.src = arrOfJewelery[i].image;
                await wait (1200);
                animatedCart.style.display = 'none';
                animatedCart.classList.remove('moveRight');
                localStorage.setItem('id', JSON.stringify([...(JSON.parse(localStorage.getItem('id')) || []), arrOfJewelery[i].id]));
                localStorage.setItem('idOfJewelery', JSON.stringify([...(JSON.parse(localStorage.getItem('idOfJewelery')) || []), arrOfJewelery[i].id]));
                if (arrOfJewelery[i].id == 5) {
                    counterBtn13++;
                    localStorage.setItem('clicksOnJeweleryId1', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnJeweleryId1')) || []), counterBtn13]));
                }
                if (arrOfJewelery[i].id == 6) {
                    counterBtn14++;
                    localStorage.setItem('clicksOnJeweleryId2', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnJeweleryId2')) || []), counterBtn14]));
                }
                if (arrOfJewelery[i].id == 7) {
                    counterBtn15++;
                    localStorage.setItem('clicksOnJeweleryId3', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnJeweleryId3')) || []), counterBtn15]));
                }
                if (arrOfJewelery[i].id == 8) {
                    counterBtn16++;
                    localStorage.setItem('clicksOnJeweleryId4', JSON.stringify([...(JSON.parse(localStorage.getItem('clicksOnJeweleryId4')) || []), counterBtn16]));
                }
                //count of products in small section under username
                const lengthOfProducts = JSON.parse(localStorage.getItem('id'));
                countOfSmallSection.textContent = lengthOfProducts.length;

                //email under username
                const email = localStorage.getItem('email');
                totalPriceOfSmallSection.textContent = email;
            }
            isJeweleryCreated = true;
    }
    }
}

const jew = new Jewelery ();

navig.addEventListener('click', async function (e) {
    await wait(200);
    if (selected_text.textContent == "men's clothing" && !isManActive) {
        console.log("men's clothing");
        menClothing.renderMenClothing();
    }
    if (selected_text.textContent == "women's clothing" && !isWomenActive) {
        console.log("jewelery");
        womenClothing.renderWomenClothing();
    }
    if (selected_text.textContent == "electronics" && !isElectronicsActive) {
        console.log("electronics");
        elec.renderElectronics();
    }
    if (selected_text.textContent == "jewelery") {
        console.log("women's clothing");
        jew.renderJewelery();
    }
})

    // function
}