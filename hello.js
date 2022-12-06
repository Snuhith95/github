// const b={
//     name: 'snuhith',
//     clas: 5,
// };
// b.name="sarat"
// a=b
// console.log(a);
// console.log(typeof a);
// function n(c){
//     if (c==1){
//         return 1;
//     }
//     else {
//         console.log(c);
//         return n(c-1)
//     }
// }
// console.log(n(5))

var cowsay = require("cowsay");
var Quote = require('inspirational-quotes');
console.log(cowsay.say({
    text : Quote.getQuote().text+Quote.getQuote().author,
    e:"o-",
    T:"U "}));