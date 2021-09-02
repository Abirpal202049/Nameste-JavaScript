var listingPrice = 799;
var sellingPrice = 199;

// WAP to calculate the percentage discount for your e-commerse website
var percent =  ((listingPrice - sellingPrice) * 100) / listingPrice;

console.log(`The Percentage Off is ${percent}% OFF`);

var roundDiscount = Math.round(percent);
console.log(`The Discount Off For The Course Is : ${roundDiscount}% OFF`);

var result = listingPrice > sellingPrice
console.log(result);
