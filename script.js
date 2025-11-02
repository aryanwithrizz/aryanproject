// Mobile search toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // You can add any interactive functionality here
    console.log("Aryan's Mega Bazaar loaded");
// Example: Add to cart animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Animation or cart update logic would go here
            console.log('Product added to cart');
        });
    });
});
