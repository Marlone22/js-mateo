const productProfit = [
    { name: "Product A", profit: 100 },
    { name: "Product B", profit: -50 },
    { name: "Product C", profit: 75 },
    { name: "Product D", profit: -10 }
];

const top = topProduct(productProfit);
const bottom = bottomProduct(productProfit);
const zero = zeroProfitProduct(productProfit);



function topProduct(productProfit) {
    if (productProfit.length === 0) return "No Data";

    let maxProfit = -Infinity;
    let topProduct = "";

    for (const product of productProfit) {
        if (product.profit > maxProfit) {
            maxProfit = product.profit;
            topProduct = product.name;
        }
    }

    return topProduct;
}

function bottomProduct(productProfit) {
    if (productProfit.length === 0) return "No Data";

    let minProfit = Infinity;
    let bottomProduct = "";

    for (const product of productProfit) {
        if (product.profit < minProfit) {
            minProfit = product.profit;
            bottomProduct = product.name;
        }
    }

    return bottomProduct;
}

function zeroProfitProduct(productProfit) {
    if (productProfit.length === 0) return "No Data";

    let closestToZero = Infinity;
    let zeroProduct = "";

    for (const product of productProfit) {
        const absProfit = Math.abs(product.profit);

        if (absProfit < closestToZero || (absProfit === closestToZero && product.profit > 0)) {
            closestToZero = absProfit;
            zeroProduct = product.name;
        }
    }

    return zeroProduct;
}

console.log("Product with highest profit:", top);
console.log("Product with lowest profit:", bottom);
console.log("Product nearest to zero profit:", zero);