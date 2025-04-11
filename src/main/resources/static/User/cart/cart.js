const userCart = [
    {
        cart_id: 'C01',
        user_id: 'U01',
        user_products: [
            {
                product_id: 201,
                product_quantity: 2,
            },
            {
                product_id: 203,
                product_quantity: 5,
            },
        ]
    }
]

const products = [
    {
        id: 201,
        name: "Scandinavian Lounge Chair",
        category: "Living Room",
        originalPrice: 1299.99,
        salePrice: 649.99,
        image: "https://cdn20.pamono.com/p/g/2/7/273430_tmbuh85gfm/mid-century-scandinavian-lounge-chairs-from-france-and-son-1960s-set-of-2-3.jpg",
        thumbnails: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSstIz5iT-l_x2vjfGmUyEQ17yOT5xgr03og&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9TbqQJt4UtqlFf7S7ZSvWzq_vZjlMmTADQ&s",
            "https://media.istockphoto.com/id/1068258892/photo/real-photo-of-a-leather-couch-in-a-living-room-interior.jpg?s=612x612&w=0&k=20&c=BroDHN5n3pk0HIvKTxCksciT1ZhoodzuCgcxQzmAUPc=",
            "https://www.elhelowgroup.com/wp-content/uploads/2023/06/york-sofa-elhelow-group-6-600x400.jpg"
        ],
        description: "High quality modern leather sofa for your living room.",
        rating: 4.7,
        reviews: [
            {
                name: "Ali",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely love it!"
            },
            {
                name: "Nora",
                date: "2025-03-20",
                rating: 4,
                text: "Stylish and comfy."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 202,
        name: "Glass Display Cabinet",
        category: "Living Room",
        originalPrice: 1299.99,
        salePrice: 899.99,
        image: "https://images-cdn.ubuy.co.in/63684aed59ee4b2f334b6b54-famapy-display-cabinet-with-glass-doors.jpg",
        thumbnails: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSstIz5iT-l_x2vjfGmUyEQ17yOT5xgr03og&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9TbqQJt4UtqlFf7S7ZSvWzq_vZjlMmTADQ&s",
            "https://media.istockphoto.com/id/1068258892/photo/real-photo-of-a-leather-couch-in-a-living-room-interior.jpg?s=612x612&w=0&k=20&c=BroDHN5n3pk0HIvKTxCksciT1ZhoodzuCgcxQzmAUPc=",
            "https://www.elhelowgroup.com/wp-content/uploads/2023/06/york-sofa-elhelow-group-6-600x400.jpg"
        ],
        description: "High quality modern leather sofa for your living room.",
        rating: 4.7,
        reviews: [
            {
                name: "Ali",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely love it!"
            },
            {
                name: "Nora",
                date: "2025-03-20",
                rating: 4,
                text: "Stylish and comfy."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20,
    },
    {
        id: 203,
        name: "Velvet Bed Frame",
        category: "Living Room",
        originalPrice: 1299.99,
        salePrice: 1499.99,
        image: "https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?t=st=1744015766~exp=1744019366~hmac=fd494df52d9c216fe0a6b148fd823e17dfc3e3e8f868107405714928f9d08a40&w=740",
        thumbnails: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSstIz5iT-l_x2vjfGmUyEQ17yOT5xgr03og&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9TbqQJt4UtqlFf7S7ZSvWzq_vZjlMmTADQ&s",
            "https://media.istockphoto.com/id/1068258892/photo/real-photo-of-a-leather-couch-in-a-living-room-interior.jpg?s=612x612&w=0&k=20&c=BroDHN5n3pk0HIvKTxCksciT1ZhoodzuCgcxQzmAUPc=",
            "https://www.elhelowgroup.com/wp-content/uploads/2023/06/york-sofa-elhelow-group-6-600x400.jpg"
        ],
        description: "High quality modern leather sofa for your living room.",
        rating: 4.7,
        reviews: [
            {
                name: "Ali",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely love it!"
            },
            {
                name: "Nora",
                date: "2025-03-20",
                rating: 4,
                text: "Stylish and comfy."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20,
    }
];

// Cart functionality
document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');
    const footerLogo = document.querySelector('.logo-my-footer');

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        logo.src = '../resources/logo-dark.png';
        footerLogo.src = '../resources/logo-dark.png';
    } else {
        logo.src = '../resources/logo-light.png';
        footerLogo.src = '../resources/logo-light.png';
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            logo.src = '../resources/logo-dark.png';
            footerLogo.src = '../resources/logo-dark.png';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            logo.src = '../resources/logo-light.png';
            footerLogo.src = '../resources/logo-light.png';
        }
    });

    // Initialize cart from localStorage or use the provided userCart
    let cartData = userCart[0]; // Assuming we're using the first user's cart
    const allProducts = products;

    // DOM elements
    const cartItemsList = document.querySelector('.cart-items-list');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const itemCountElement = document.querySelector('.item-count');
    const subtotalElement = document.querySelector('.subtotal');
    const taxElement = document.querySelector('.tax');
    const totalElement = document.querySelector('.total-amount');
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cartCountElement = document.querySelector('.cart-count');

    // Initialize cart
    updateCart();

    // Helper function to find product by ID
    function findProductById(productId) {
        return allProducts.find(product => product.id === productId);
    }

    // Render cart items
    function renderCartItems() {
        cartItemsList.innerHTML = '';

        if (cartData.user_products.length === 0) {
            emptyCartMessage.style.display = 'block';
            document.querySelector('.cart-items').style.display = 'none';
            document.querySelector('.cart-summary-section').style.display = 'none';
            return;
        } else {
            emptyCartMessage.style.display = 'none';
            document.querySelector('.cart-items').style.display = 'block';
            document.querySelector('.cart-summary-section').style.display = 'block';
        }

        cartData.user_products.forEach((cartProduct, index) => {
            const product = findProductById(cartProduct.product_id);

            if (!product) return; // Skip if product not found

            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item-product';
            cartItemElement.dataset.id = product.id;

            const priceToShow = product.isOnSale ? product.salePrice : product.originalPrice;

            cartItemElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${product.name}</h3>
                    <p class="cart-item-category">${product.category}</p>
                    <div class="cart-item-price">
                        <span class="current-price">$${priceToShow.toFixed(2)}</span>
                        ${product.isOnSale ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn minus" data-id="${product.id}">-</button>
                            <input type="number" class="quantity-input" value="${cartProduct.product_quantity}" min="1" data-id="${product.id}">
                            <button class="quantity-btn plus" data-id="${product.id}">+</button>
                        </div>
                        <button class="remove-item-btn" data-id="${product.id}">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            `;

            cartItemsList.appendChild(cartItemElement);
        });

        // Add event listeners to quantity buttons and remove buttons
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', handleQuantityChange);
        });

        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', handleQuantityInputChange);
        });

        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // Update cart totals and UI
    function updateCart() {
        renderCartItems();
        updateCartTotals();
        updateCartCount();
        saveCartToLocalStorage();
    }

    // Update cart totals
    function updateCartTotals() {
        let subtotal = 0;
        let totalItems = 0;

        cartData.user_products.forEach(cartProduct => {
            const product = findProductById(cartProduct.product_id);
            if (product) {
                const price = product.isOnSale ? product.salePrice : product.originalPrice;
                subtotal += price * cartProduct.product_quantity;
                totalItems += cartProduct.product_quantity;
            }
        });

        const tax = subtotal * 0.1; // Assuming 10% tax
        const total = subtotal + tax;

        itemCountElement.textContent = totalItems;
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Update cart count in navbar
    function updateCartCount() {
        const totalItems = cartData.user_products.reduce((sum, item) => sum + item.product_quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    // Save cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cartData', JSON.stringify(cartData));
    }

    // Handle quantity change
    function handleQuantityChange(e) {
        const productId = parseInt(e.target.dataset.id);
        const cartProduct = cartData.user_products.find(item => item.product_id === productId);

        if (!cartProduct) return;

        const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);

        if (e.target.classList.contains('plus')) {
            cartProduct.product_quantity += 1;
            input.value = cartProduct.product_quantity;
        } else if (e.target.classList.contains('minus')) {
            if (cartProduct.product_quantity > 1) {
                cartProduct.product_quantity -= 1;
                input.value = cartProduct.product_quantity;
            }
        }

        updateCart();
    }

    // Handle direct quantity input change
    function handleQuantityInputChange(e) {
        const productId = parseInt(e.target.dataset.id);
        const cartProduct = cartData.user_products.find(item => item.product_id === productId);

        if (!cartProduct) return;

        let value = parseInt(e.target.value);

        if (isNaN(value) || value < 1) {
            value = 1;
            e.target.value = 1;
        }

        cartProduct.product_quantity = value;
        updateCart();
    }

    // Remove item from cart
    function removeItem(e) {
        const productId = parseInt(e.target.dataset.id);
        cartData.user_products = cartData.user_products.filter(item => item.product_id !== productId);
        updateCart();
    }

    // Clear cart
    clearCartBtn.addEventListener('click', function () {
        cartData.user_products = [];
        updateCart();
    });

    // Initialize orders array (load from localStorage if available)
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Checkout button - now saves order data
    checkoutBtn.addEventListener('click', function () {
        if (cartData.user_products.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const order = {
            user_id: cartData.user_id,
            items: [],
        };

        cartData.user_products.forEach(cartProduct => {
            const product = findProductById(cartProduct.product_id);
            if (product) {
                const price = product.isOnSale ? product.salePrice : product.originalPrice;
                const itemTotal = price * cartProduct.product_quantity;

                order.items.push({
                    product_id: product.id,
                    quantity: cartProduct.product_quantity,
                });

                order.subtotal += itemTotal;
            }
        });

        order.tax = order.subtotal * 0.1;
        order.total = order.subtotal + order.tax;

        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        cartData.user_products = [];
        updateCart();

        alert(`Order #${order.order_id} placed successfully!\nTotal: $${order.total.toFixed(2)}`);
    });

    // Helper function to generate order ID
    function generateOrderId() {
        return 'ORD-' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100).toString().padStart(2, '0');
    }

    // Make sure cart count is updated on page load
    updateCartCount();
});