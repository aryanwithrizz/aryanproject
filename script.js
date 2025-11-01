document.addEventListener('DOMContentLoaded', () => {

    // --- YOUR MENU ---
    // You can easily add, remove, or change items here.
    // Use your own image URLs. For now, we use placeholders.
    const menu = [
        { id: 1, name: "Margherita Pizza", price: 299, image: "https://images.unsplash.com/photo-1598021680133-eb3a737d73c6?q=80&w=300" },
        { id: 2, name: "Chicken Biryani", price: 349, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=300" },
        { id: 3, name: "Paneer Butter Masala", price: 279, image: "https://images.unsplash.com/photo-1630617354317-565b5976b9e2?q=80&w=300" },
        { id: 4, name: "Veg Hakka Noodles", price: 199, image: "https://images.unsplash.com/photo-1626725934114-b81b29a3a968?q=80&w=300" },
        { id: 5, name: "Classic Burger", price: 249, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=300" },
        { id: 6, name: "Chocolate Brownie", price: 149, image: "https://images.unsplash.com/photo-1607958996333-f8a2e50aa4ea?q=80&w=300" },
    ];

    const menuItemsContainer = document.getElementById('menu-items');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const cartEmptyMsg = document.querySelector('.cart-empty-message');
    
    // Payment Modal Elements
    const paymentModal = document.getElementById('payment-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const qrCodeImg = document.getElementById('qr-code-img');
    const paymentAmountEl = document.getElementById('payment-amount');
    
    let cart = [];

    // Function to display menu items
    function displayMenu() {
        menuItemsContainer.innerHTML = ''; // Clear existing items
        menu.forEach(item => {
            const menuItemEl = document.createElement('div');
            menuItemEl.className = 'menu-item';
            menuItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <div class="item-details">
                        <span class="price">₹${item.price.toFixed(2)}</span>
                        <button class="btn-add-cart" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            menuItemsContainer.appendChild(menuItemEl);
        });
    }

    // Function to update the cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartEmptyMsg.style.display = 'block';
            placeOrderBtn.disabled = true;
        } else {
            cartEmptyMsg.style.display = 'none';
            cart.forEach(item => {
                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <span class="cart-item-name">${item.name} (x${item.quantity})</span>
                    <span class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</span>
                `;
                cartItemsContainer.appendChild(cartItemEl);
            });
            placeOrderBtn.disabled = false;
        }
        
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceEl.textContent = `₹${totalPrice.toFixed(2)}`;
    }

    // Event listener for adding items to cart
    menuItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add-cart')) {
            const itemId = parseInt(e.target.dataset.id);
            const menuItem = menu.find(item => item.id === itemId);
            
            const itemInCart = cart.find(item => item.id === itemId);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                cart.push({ ...menuItem, quantity: 1 });
            }
            updateCart();
        }
    });

    // Event listener for placing an order
    placeOrderBtn.addEventListener('click', () => {
        const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        if (totalAmount > 0) {
            // Your UPI details
            const upiId = 'aryanwithrizz@ybl';
            const upiName = 'Aryan\'s Kitchen'; // This will show up in the user's UPI app

            // Generate UPI QR Code URL
            const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${totalAmount.toFixed(2)}&cu=INR`;
            
            // Use a public QR code API
            qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
            paymentAmountEl.textContent = `₹${totalAmount.toFixed(2)}`;
            
            paymentModal.style.display = 'block';
        }
    });

    // Event listeners for closing the modal
    closeModalBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
    });

    // Initial setup
    displayMenu();
    updateCart();
});
