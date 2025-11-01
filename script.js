document.addEventListener('DOMContentLoaded', () => {
    // Sample product data (this will come from your database later)
    const products = [
        {
            name: "Fresh Apples (1kg)",
            price: 180,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1560806887-1e4cd0b69665?w=400&h=400&fit=crop"
        },
        {
            name: "Amul Gold Milk (1L)",
            price: 66,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1628043501779-7a4a98436e20?w=400&h=400&fit=crop"
        },
        {
            name: "Britannia Bread",
            price: 45,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1598373182133-52452f741796?w=400&h=400&fit=crop"
        },
        {
            name: "Lays Classic Chips",
            price: 20,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1599493397143-4a1b52a412cc?w=400&h=400&fit=crop"
        }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <span class="material-icons">star</span>
                    <span>${product.rating}</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">₹${product.price.toFixed(2)}</div>
                    <button class="btn-add">ADD</button>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
});
