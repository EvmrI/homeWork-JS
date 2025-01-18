const products = [
    {
      name: "смартфон",
      price: 25000,
      stock: 10,
      category: "Электроника",
      rating: 4.7,
      isOnSale: false,
    },
    {
      name: "ноутбук",
      price: 55000,
      stock: 5,
      category: "Электроника",
      rating: 4.5,
      isOnSale: true,
    },
    {
      name: "наушники",
      price: 3000,
      stock: 25,
      category: "Аксессуары",
      rating: 4.2,
      isOnSale: false,
    },
    {
      name: "клавиатура",
      price: 1500,
      stock: 15,
      category: "Электроника",
      rating: 3.9,
      isOnSale: true,
    },
    {
      name: "монитор",
      price: 12000,
      stock: 8,
      category: "Электроника",
      rating: 4.8,
      isOnSale: false,
    },
  ];

let priceCriterion = false;
console.log("Асортимент з ціною більше 5000:")

products.forEach((products) => {
  if (products.price >= 5000){
    console.log(products.name)
    priceCriterion = true;
  } 
});

if (!priceCriterion) {
  console.log("not found");
}





let categoryCriterion = false;
console.log("До категорії електроніки входять такі продукти:")

products.forEach((category) => {
  if (category.category === 'Электроника') {
    console.log(category.name);
    categoryCriterion = true;
  }
});

if (!categoryCriterion) {
  console.log("not found");
}