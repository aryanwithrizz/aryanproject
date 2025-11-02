
// Product Database
const products = {
    electronics: [
        { id: 1, name: "Wireless Headphones", price: 1999, image: "http://static.photos/electronics/320x240/1" },
        { id: 2, name: "Smart Watch", price: 2499, image: "http://static.photos/electronics/320x240/2" },
        { id: 3, name: "Bluetooth Speaker", price: 1299, image: "http://static.photos/electronics/320x240/3" }
    ],
    fashion: [
        { id: 4, name: "Men's T-Shirt Pack", price: 499, image: "http://static.photos/fashion/320x240/1" },
        { id: 5, name: "Women's Jeans", price: 899, image: "http://static.photos/fashion/320x240/2" },
        { id: 6, name: "Running Shoes", price: 1499, image: "http://static.photos/fashion/320x240/3" }
    ],
    grocery: [
        { id: 7, name: "Organic Rice 5kg", price: 299, image: "http://static.photos/grocery/320x240/1" },
        { id: 8, name: "Assorted Spices Pack", price: 199, image: "http://static.photos/grocery/320x240/2" },
        { id: 9, name: "Premium Tea 250g", price: 149, image: "http://static.photos/grocery/320x240/3" }
    ]
};

// Cart and Order Management
let cart = [];
let orders = [];

document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    renderProducts();
    updateCartCount();

    // Event Listeners
    document.querySelector('[href="#"]').addEventListener('click', toggleLogin);
    document.querySelector('[aria-label="Cart"]').addEventListener('click', toggleCart);
});

// Product Rendering
function renderProducts() {
    const container = document.querySelector('.grid.grid-cols-2');
    if (!container) return;

    container.innerHTML = '';
    
    Object.entries(products).forEach(([category, items]) => {
        items.forEach(product => {
            const productHTML = `
                <div class="card p-4">
                    <div class="h-40 mb-3 flex items-center justify-center">
                        <img src="${product.image}" alt="${product.name}" class="max-h-full">
                    </div>
                    <h3 class="font-medium mb-1">${product.name}</h3>
                    <div class="flex items-center mb-3">
                        <span class="text-amazon-primary font-bold">₹${product.price}</span>
                    </div>
                    <button onclick="addToCart(${product.id})" class="w-full btn-accent py-2 rounded">
                        Add to Cart
                    </button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', productHTML);
        });
    });
}

// Cart Functions
function addToCart(productId) {
    let product;
    Object.values(products).some(category => {
        product = category.find(p => p.id === productId);
        return product;
    });

    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartCount();
        showToast(`${product.name} added to cart`);
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('[aria-label="Cart"] span').textContent = count || 'Cart';
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemHTML = `
            <div class="flex items-center border-b py-4">
                <div class="w-20 h-20 flex-shrink-0">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">
                </div>
                <div class="ml-4 flex-grow">
                    <h4 class="font-medium">${item.name}</h4>
                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center">
                            <button onclick="updateQuantity(${item.id}, -1)" class="px-2 border rounded-l">-</button>
                            <span class="px-3 border-t border-b">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" class="px-2 border rounded-r">+</button>
                        </div>
                        <span class="font-bold">₹${itemTotal}</span>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });

    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
}

// Order Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    renderCheckoutItems();
    toggleCart();
    toggleCheckout();
}

function renderCheckoutItems() {
    const container = document.getElementById('checkoutItems');
    if (!container) return;

    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemHTML = `
            <div class="flex items-center justify-between py-2">
                <div class="flex items-center">
                    <span class="mr-2">${item.quantity}x</span>
                    <span>${item.name}</span>
                </div>
                <span>₹${itemTotal}</span>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', itemHTML);
    });

    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal}`;
    document.getElementById('checkoutTotal').textContent = `₹${subtotal}`;
}

function placeOrder() {
    if (cart.length === 0) return;

    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: [...cart],
        status: 'Processing',
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    orders.push(order);
    cart = [];
    updateCartCount();

    document.getElementById('orderNumber').textContent = order.id;
    toggleCheckout();
    toggleOrderConfirmation();
}

// UI Functions
function toggleLogin() {
    document.getElementById('loginModal').classList.toggle('hidden');
}

function toggleCart() {
    renderCartItems();
    document.getElementById('cartModal').classList.toggle('hidden');
}

function toggleCheckout() {
    document.getElementById('checkoutModal').classList.toggle('hidden');
}

function toggleOrderConfirmation() {
    document.getElementById('orderConfirmation').classList.toggle('hidden');
}

function closeOrderConfirmation() {
    toggleOrderConfirmation();
    window.location.href = '/';
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        renderCartItems();
        updateCartCount();
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
                                                              }
