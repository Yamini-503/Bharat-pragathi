function updateCart() {
    const rows = document.querySelectorAll('#cart-body tr');
    let subtotal = 0;

    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.price').innerText.replace('$', ''));
        const quantity = parseInt(row.querySelector('input[name="quantity"]').value);
        const total = price * quantity;
        
        row.querySelector('.total').innerText = `${total.toFixed(2)}`;
        subtotal += total;
    });

    const discount = 3.00; // Example discount
    const total = subtotal - discount;

    document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)}`;
    document.getElementById('total').innerText = `${total.toFixed(2)}`;
}

function removeItem(element) {
    const row = element.closest('tr'); // Get the closest row
    row.remove(); // Remove the row from the table
    updateCart(); // Update the cart totals
}


   // Sample product data
//    const products = [
//     { id: 1, name: 'Chilli', price: 120.00 }
//     // Add more products as needed
// ];
