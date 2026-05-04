let productName = "Coffee Mug";
let costPerUnit = 13.75;
let basePrice = 15.55;
let discountRate = 0.35;
let salesTaxRate = 0.05;
let fixedMonthlyCosts = 750;
let desiredProfit = 5;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = profitPerUnit > 0 
  ? Math.ceil(fixedMonthlyCosts / profitPerUnit) 
  : "Not possible because product loses money";

let isProfitablePerUnit = profitPerUnit > 0;

console.log("=================================");
console.log("☕ PRODUCT PROFIT REPORT");
console.log("=================================");

console.log(`📦 Product: ${productName}`);
console.log(`💵 Cost per unit: $${costPerUnit.toFixed(2)}`);
console.log(`🏷️ Base price: $${basePrice.toFixed(2)}`);
console.log(`🔻 Discount rate: ${discountRate * 100}%`);
console.log(`🧾 Sales tax rate: ${salesTaxRate * 100}%`);
console.log(`🏢 Fixed monthly costs: $${fixedMonthlyCosts.toFixed(2)}`);

console.log("---------------------------------");
console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
console.log(`Final price with tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-even units: ${breakEvenUnits}`);
console.log(`Profitable per unit: ${isProfitablePerUnit}`);

console.log("---------------------------------");

if (profitPerUnit < 0) {
  console.log("❌ This product is losing money.");
  console.log("💡 Suggestion: Raise the price, lower the discount, or reduce the cost.");
} else if (profitPerUnit < 2) {
  console.log("⚠️ This product is profitable, but the profit margin is low.");
} else {
  console.log("✅ This product has a solid profit margin.");
}

if (discountRate > 0.2) {
  console.log("⚠️ Your discount might be too high.");
}

let requiredPrice = (costPerUnit + desiredProfit) / (1 - discountRate);

console.log("---------------------------------");
console.log(`🎯 To make $${desiredProfit.toFixed(2)} profit per unit,`);
console.log(`you should charge about $${requiredPrice.toFixed(2)} before tax.`);

console.log("---------------------------------");
console.log("📊 Discount Scenario Comparison");

let discounts = [0.1, 0.2, 0.35];

discounts.forEach(rate => {
  let priceAfterDiscount = basePrice * (1 - rate);
  let finalPrice = priceAfterDiscount * (1 + salesTaxRate);
  let profit = finalPrice - costPerUnit;

  console.log(`\nDiscount: ${rate * 100}%`);
  console.log(`Final price: $${finalPrice.toFixed(2)}`);
  console.log(`Profit: $${profit.toFixed(2)}`);

  if (profit > 0) {
    console.log("Result: Profitable ✅");
  } else {
    console.log("Result: Losing money ❌");
  }
});

console.log("=================================");
console.log("END OF REPORT");
console.log("=================================");

