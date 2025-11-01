document.addEventListener('DOMContentLoaded', () => {

    // --- YOUR NEW, EXPANDED MENU ---
    // This is where you can easily add, remove, or change items and categories.
    const menuData = [
        {
            category: "Starters & Appetizers",
            items: [
                { id: 101, name: "Paneer Tikka", price: 280, image: "https://images.unsplash.com/photo-1626202245352-73c242c94178?w=300&h=200&fit=crop" },
                { id: 102, name: "Chilli Chicken Dry", price: 320, image: "https://images.unsplash.com/photo-1599493397143-4a1b52a412cc?w=300&h=200&fit=crop" },
                { id: 103, name: "Veg Spring Rolls", price: 210, image: "https://images.unsplash.com/photo-1585109649139-d3381547926b?w=300&h=200&fit=crop" },
                { id: 104, name: "Hara Bhara Kebab", price: 240, image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=200&fit=crop" }
            ]
        },
        {
            category: "Main Course - Curries",
            items: [
                { id: 201, name: "Paneer Butter Masala", price: 350, image: "https://images.unsplash.com/photo-1630617354317-565b5976b9e2?w=300&h=200&fit=crop" },
                { id: 202, name: "Butter Chicken", price: 450, image: "https://images.unsplash.com/photo-1606495211497-2384c5438dfe?w=300&h=200&fit=crop" },
                { id: 203, name: "Dal Makhani", price: 290, image: "https://images.unsplash.com/photo-1631292784018-c205a793d053?w=300&h=200&fit=crop" },
                { id: 204, name: "Kadai Paneer", price: 340, image: "https://images.unsplash.com/photo-1596350356213-058a3a0c3068?w=300&h=200&fit=crop" }
            ]
        },
        {
            category: "Biryani & Rice",
            items: [
                { id: 301, name: "Hyderabadi Chicken Biryani", price: 380, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
                { id: 302, name: "Veg Pulao", price: 260, image: "https://images.unsplash.com/photo-1653123512316-f58a786015ac?w=300&h=200&fit=crop" },
                { id: 303, name: "Jeera Rice", price: 180, image: "https://images.unsplash.com/photo-1620403724391-42354c00322b?w=300&h=200&fit=crop" }
            ]
        },
        {
            category: "Pizzas",
            items: [
                { id: 401, name: "Margherita Pizza", price: 299, image: "https://images.unsplash.com/photo-1598021680133-eb3a737d73c6?w=300&h=200&fit=crop" },
                { id: 402, name: "Pepperoni Pizza", price: 450, image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&h=200&fit=crop" },
                { id: 403, name: "Farmhouse Veg Pizza", price: 399, image: "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?w=300&h=200&fit=crop" }
            ]
        },
        {
            category: "Desserts & Beverages",
            items: [
                { id: 501, name: "Chocolate Brownie", price: 149, image: "https://images.unsplash.com/photo-1607958996333-f8a2e50aa4ea?w=300&h=200&fit=crop" },
                { id: 502, name: "Gulab Jamun (2 pcs)", price: 90, image: "https://images.unsplash.com/photo-1613431693437-00445a64375b?w=300&h=200&fit=crop" },
                { id: 503, name: "Coke (500ml)", price: 60, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=200&fit=crop" }
            ]
        }
    ];

    const menuContainer = document.getElementById('full-menu');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const cartEmptyMsg = document.querySelector('.cart-empty-message');
    const paymentModal = document.getElementById('payment-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const qrCodeImg = document.getElementById('qr-code-img');
    const paymentAmountEl = document.getElementById('payment-amount');
    
    let cart = [];
    let menu = []; // This will store all items in a flat list for easy access

    // Function to display the categorized menu
    function displayMenu() {
        menuContainer.innerHTML = ''; // Clear loading message
        
        menuData.forEach(categoryObj => {
            // Create a section for the category
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';

            // Create the title for the category
            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = categoryObj.category;
            categorySection.appendChild(categoryTitle);

            // Create the grid for the items in this category
            const menuGrid = document.createElement('div');
            menuGrid.className = 'menu-grid';

            categoryObj.items.forEach(item => {
                // Add item to the flat menu list
                menu.push(item); 
                
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
                menuGrid.appendChild(menuItemEl);
            });
            
            categorySection.appendChild(menuGrid);
            menuContainer.appendChild(categorySection);
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

    // Event listener for adding items to cart (works on the whole menu container)
    menuContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add-cart')) {
            const itemId = parseInt(e.target.dataset.id);
            const menuItem = menu.find(item => item.id === itemId);
            if (!menuItem) return;

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
            const upiId = 'aryanwithrizz@ybl';
            const upiName = 'Aryan\'s Kitchen';
            const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(upiName)}&am=${totalAmount.toFixed(2)}&cu=INR`;
            
            qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
            paymentAmountEl.textContent = `₹${totalAmount.toFixed(2)}`;
            paymentModal.style.display = 'block';
        }
    });

    // Modal close listeners
    closeModalBtn.addEventListener('click', () => { paymentModal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target === paymentModal) { paymentModal.style.display = 'none'; } });

    // Initial setup
    displayMenu();
    updateCart();
});
