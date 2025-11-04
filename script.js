* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --primary: #8A2BE2;
    --primary-dark: #6A1BB3;
    --secondary: #FF5722;
    --dark: #121212;
    --light: #F5F5F5;
    --success: #4CAF50;
    --card-bg: #1E1E1E;
}

body {
    background-color: var(--dark);
    color: var(--light);
    overflow-x: hidden;
}

/* Login/Signup Page */
.auth-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.auth-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary) 0%, var(--dark) 50%);
    filter: blur(10px);
    z-index: -2;
}

.auth-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
}

.auth-card {
    background-color: rgba(30, 30, 30, 0.9);
    border-radius: 20px;
    padding: 40px;
    width: 90%;
    max-width: 450px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 1;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(138, 43, 226, 0.3);
}

.logo {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(45deg, var(--primary), #FF4081);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.tagline {
    color: #AAA;
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    padding: 15px;
    background: rgba(138, 43, 226, 0.2);
    border-radius: 10px;
}

.stat-item {
    text-align: center;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    font-size: 0.8rem;
    color: #AAA;
}

.auth-options {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.auth-option {
    flex: 1;
    padding: 15px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.auth-option.active {
    background: rgba(138, 43, 226, 0.3);
    border-color: var(--primary);
}

.auth-option:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #CCC;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
}

.form-group input:focus {
    outline: none;
    border-color: var(--primary);
}

.submit-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(45deg, var(--primary), var(--primary-dark));
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.4);
}

/* Welcome Page */
.welcome-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark);
    flex-direction: column;
    text-align: center;
    padding: 20px;
}

.welcome-title {
    font-size: 3rem;
    margin-bottom: 20px;
    background: linear-gradient(45deg, var(--primary), #FF4081);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.welcome-subtitle {
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: #CCC;
}

.start-btn {
    padding: 15px 40px;
    border: none;
    border-radius: 50px;
    background: var(--success);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.start-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.4);
}

/* Home Page */
.home-container {
    min-height: 100vh;
    background-color: var(--dark);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: rgba(30, 30, 30, 0.9);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.site-name {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(45deg, var(--primary), #FF4081);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.search-bar {
    flex: 1;
    max-width: 500px;
    margin: 0 20px;
    position: relative;
}

.search-bar input {
    width: 100%;
    padding: 12px 45px 12px 15px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
}

.search-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #AAA;
}

.user-actions {
    display: flex;
    gap: 20px;
}

.user-action {
    color: #AAA;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;
}

.user-action:hover {
    color: var(--primary);
}

.categories {
    padding: 30px 20px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    color: white;
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.category-card {
    background-color: var(--card-bg);
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.category-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.3);
}

.category-img {
    height: 150px;
    width: 100%;
    object-fit: cover;
}

.category-name {
    padding: 15px;
    font-weight: 600;
    font-size: 1.1rem;
}

.products {
    padding: 30px 20px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 20px;
}

.product-card {
    background-color: var(--card-bg);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.3);
}

.product-img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}

.product-info {
    padding: 15px;
}

.product-name {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.product-price {
    color: var(--primary);
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.product-actions {
    display: flex;
    gap: 10px;
}

.action-btn {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.cart-btn {
    background: rgba(138, 43, 226, 0.2);
    color: var(--primary);
    border: 1px solid var(--primary);
}

.buy-btn {
    background: var(--primary);
    color: white;
}

.action-btn:hover {
    transform: scale(1.05);
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 15px;
    background-color: rgba(30, 30, 30, 0.9);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #AAA;
    cursor: pointer;
    transition: color 0.3s ease;
}

.nav-item.active {
    color: var(--primary);
}

.nav-item i {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.nav-item span {
    font-size: 0.8rem;
}

.nav-item:hover {
    color: var(--primary);
}

/* Product Details Modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    overflow-y: auto;
}

.modal-content {
    background-color: var(--card-bg);
    margin: 50px auto;
    padding: 30px;
    border-radius: 20px;
    width: 90%;
    max-width: 800px;
    position: relative;
}

.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    color: #AAA;
    cursor: pointer;
}

.product-detail {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media (min-width: 768px) {
    .product-detail {
        flex-direction: row;
    }
}

.product-detail-img {
    flex: 1;
    border-radius: 15px;
    overflow: hidden;
}

.product-detail-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.product-detail-info {
    flex: 1;
    padding: 0 20px;
}

.product-detail-name {
    font-size: 2rem;
    margin-bottom: 15px;
}

.product-detail-price {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 15px;
}

.product-detail-desc {
    margin-bottom: 20px;
    line-height: 1.6;
    color: #CCC;
}

.product-detail-actions {
    display: flex;
    gap: 15px;
}

.detail-action-btn {
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.detail-cart-btn {
    background: rgba(138, 43, 226, 0.2);
    color: var(--primary);
    border: 1px solid var(--primary);
}

.detail-buy-btn {
    background: var(--primary);
    color: white;
}

.detail-action-btn:hover {
    transform: scale(1.05);
}

/* Payment Modal */
.payment-modal {
    display: none;
}

.payment-form {
    max-width: 500px;
    margin: 0 auto;
}

.payment-methods {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}

.payment-method {
    flex: 1;
    padding: 15px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.payment-method.active {
    background: rgba(138, 43, 226, 0.3);
    border: 1px solid var(--primary);
}

.payment-method i {
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--primary);
}

.upi-id {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
}

.payment-success {
    text-align: center;
    padding: 30px;
}

.success-icon {
    font-size: 4rem;
    color: var(--success);
    margin-bottom: 20px;
}

/* Page Transitions */
.page {
    display: none;
}

.page.active {
    display: block;
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.5s ease forwards;
}
