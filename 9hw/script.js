// let score = 0;
// const num = 7;

// while (10 >= score){
//     const result = num * score;
//     console.log(num + ' * ' + score + ' = ' + result);
//     score = score + 1;
// }
// console.log("табличка множення на 7!")

let UAH = 2500;
const USD = 42;

function CurrencyConverter(UAH,USD){
    const result = UAH / USD
    console.log("У вас є " + UAH + " гривень, якщо ви хочете купити доллар, то за " + UAH + " гривень ви отримаєте " + result + " долларів!");
}
CurrencyConverter(2500, 42);
