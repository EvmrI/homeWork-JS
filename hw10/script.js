const iphones = [
  {
    model: "iPhone 13",
    price: 799,
    inStock: true,
    colors: ["black", "white", "blue"],
    releaseYear: 2021,
    rating: 4.8,
    discount: null,
  },
  {
    model: "iPhone 14",
    price: 999,
    inStock: true,
    colors: ["purple", "red", "yellow"],
    releaseYear: 2022,
    rating: 4.9,
    discount: 50,
  },
  {
    model: "iPhone 12",
    price: 699,
    inStock: false,
    colors: ["green", "black", "white"],
    releaseYear: 2020,
    rating: 4.6,
    discount: 100,
  },
  {
    model: "iPhone SE (2022)",
    price: 429,
    inStock: true,
    colors: ["black", "white", "red"],
    releaseYear: 2022,
    rating: 4.5,
    discount: null,
  },
  {
    model: "iPhone 13 Pro",
    price: 999,
    inStock: true,
    colors: ["blue", "silver", "gold"],
    releaseYear: 2021,
    rating: 4.8,
    discount: 70,
  },
  {
    model: "iPhone 14 Pro",
    price: 1199,
    inStock: false,
    colors: ["purple", "gold", "black"],
    releaseYear: 2022,
    rating: 4.9,
    discount: 100,
  },
  {
    model: "iPhone 11",
    price: 599,
    inStock: true,
    colors: ["white", "black", "yellow"],
    releaseYear: 2019,
    rating: 4.4,
    discount: 50,
  },
  {
    model: "iPhone XR",
    price: 499,
    inStock: false,
    colors: ["coral", "blue", "black"],
    releaseYear: 2018,
    rating: 4.3,
    discount: 30,
  },
  {
    model: "iPhone 15",
    price: 1099,
    inStock: true,
    colors: ["black", "white", "pink"],
    releaseYear: 2023,
    rating: 5.0,
    discount: 100,
  },
  {
    model: "iPhone 15 Pro Max",
    price: 1499,
    inStock: true,
    colors: ["blue", "titanium", "black"],
    releaseYear: 2023,
    rating: 4.9,
    discount: 200,
  }
];


let totalPrice = 0;
iphones.forEach((iphones) => {
  if (iphones.inStock){
    totalPrice += iphones.price;
  }
});
console.log("total amount of all goods in stock: ", "$" + totalPrice)


let phonesInStock = 0;
iphones.forEach((iphones) => {
  if (iphones.inStock){
    phonesInStock += iphones.inStock;
  }
});
console.log ("Number of available phones: "  +  phonesInStock)

let countIphones = 0;
iphones.forEach((iphone) => {
  if (iphone.inStock && iphone.price < 800) {
    countIphones += 1; 
  }
});
console.log("Our store has " + countIphones + " phones that cost less than $800");