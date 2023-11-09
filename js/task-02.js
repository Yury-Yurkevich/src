
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomato',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
const elements = [];

ingredients.forEach(value => {
  const listItem = document.createElement('li');
        listItem.textContent = value;
        listItem.classList.add('.item');
        elements.push(listItem);

})
// console.log(...elements);
list.append(...elements);


// const magicBtn = document.querySelector('.js-magic-btn');

// const currentPageUrl = '/portfolio';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`
// );
// console.log(linkEl);
// magicBtn.addEventListener('click', () => {
//   linkEl.classList.add('site-nav__link--current');
// })


// create title

// const titleEl = document.createElement("h1");
// titleEl.classList.add("page-title");
// titleEl.textContent = "this is a TITLE!!!!";

// create image  

// const imageEl = document.createElement("img");
// imageEl.src =
//   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// imageEl.alt = "Group of Horses Running";
// imageEl.width = 640;
// console.log("imageEl", imageEl);
// document.body.appendChild(imageEl);

// const heroEl = document.querySelector('.hero');
// heroEl.append(titleEl, imageEl);

// create li element

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// // create link
// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add("site-nav__link");
// navLinkEl.textContent = 'Особистий кабінет';
// navLinkEl.href = '/profile';

// navItemEl.appendChild(navLinkEl);
// // 

// const navEl = document.querySelector('.site-nav');
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// console.log(navItemEl);


// magicBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('.site-nav');
//   console.log(navEl.classList);
//   navEl.classList.add('site-nav__active');
//   navEl.classList.remove('site-nav');
//    navEl.classList.replace('site-nav', 'site-nav__active');
//   navEl.classList.toggle('super-cool');
//   console.log(navEl.classList.contains('super-cool'));
// })


// const navEl = document.querySelector('.site-nav');
// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log(navEl.children);
// console.log(navEl.lastElementChild)



// create buttons

// const colorPickerOptions = [
//   { label: "red", color: "#aa0000" },
//   { label: "green", color: "#058440" },
//   { label: "blue", color: "#0414ca" },
//   { label: "grey", color: "#666773" },
//   { label: "pink", color: "#d62374" },
//   { label: "yellow", color: "#f9e343" },
// ];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];
// colorPickerOptions.forEach((element) => {
//   const option = element;
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
// buttonEl.classList.add("color-picker__option");
//   elements.push(buttonEl);
// });



// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);



// тепер те саме але вже фунцією!!!---!!!

// const makeColorPickerOptions = (options) => {
//   return options.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
//   });
// }
//   const elements = makeColorPickerOptions(colorPickerOptions);
//   colorPickerContainerEl.append(...elements);


// одна картка
// const product = {
//   name: "Hyjlym Tamdym",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam, quia.Repudiandae at nihil expedita architecto dicta reprehenderit, voluptates amet! Totam assumenda at sequi autem atque saepe magnam ipsum consectetur deserunt?",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// import products from "./data/products.js";
// console.log(products);

// const productsContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({name, description, price}) => {
// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('product__descr');
// descrEl.textContent = description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Ціна: ${price} бабла`;
//   priceEl.classList.add('product__price');
  
//   productEl.append(nameEl, descrEl, priceEl);
//   return productEl;
// }
// // console.log(makeProductCard(products[2]));  

// const elements = products.map(makeProductCard);
// console.log(elements);
// productsContainerEl.append(...elements);
