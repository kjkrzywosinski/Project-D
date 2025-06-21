
let subtotal = 0;

for (let i = 0; i < cart.length; i++) {
   let item = cart[i]
   let total = calculateTotal(item.quantity, item.product.price);
   subtotal += total;
   outputCartRow(item, total);
}

let taxRate = 0.10;
let shippingThreshhold = 300;
let shippingCost = subtotal > shippingThreshhold ? 0 : 40;
let tax = subtotal * taxRate;
let grandTotal = subtotal + tax + shippingCost;

document.write(`<tr class="totals"><td colspan="4">Subtotal</td><td class="right">$${subtotal.toFixed(2)}</td></tr>`);
document.write(`<tr class="totals"><td colspan="4">Tax</td><td class="right">$${tax.toFixed(2)}</td></tr>`);
document.write(`<tr class="totals"><td colspan="4">Shipping</td><td class="right">$${shippingCost.toFixed(2)}</td></tr>`);
document.write(`<tr class="totals"><td colspan="4">Grand Total</td><td class="right">$${grandTotal.toFixed(2)}</td></tr>`);