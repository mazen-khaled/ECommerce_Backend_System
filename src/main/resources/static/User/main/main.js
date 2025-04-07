// store.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle (same as previous pages)
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        logo.src = '../resources/logo-dark.png';
    } else {
        logo.src = '../resources/logo-light.png';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            logo.src = '../resources/logo-dark.png';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            logo.src = '../resources/logo-light.png';
        }
    });

    // Mock Data
    const categories = [
        {
            id: 1,
            name: "Living Room",
            image: "https://st.hzcdn.com/simgs/23d10aba05948770_9-2874/home-design.jpg",
            productCount: 45
        },
        {
            id: 2,
            name: "Bedroom",
            image: "https://cdn.shopify.com/s/files/1/0044/1208/0217/files/Mozart_16721e45-a1b5-4c99-907a-8fc634c73955_900x.jpg?v=1728031247",
            productCount: 32
        },
        {
            id: 3,
            name: "Kitchen",
            image: "https://www.tomhowley.co.uk/wp-content/uploads/TH076_Foxton_20_feature.jpg",
            productCount: 28
        },
        {
            id: 4,
            name: "Office",
            image: "https://hips.hearstapps.com/hmg-prod/images/alan-design-edit2-1505749166.jpg?crop=1xw:1xh;center,top&resize=980:*",
            productCount: 19
        }
    ];

    const onSaleProducts = [
        {
            id: 101,
            name: "Modern Leather Sofa",
            price: 899.99,
            originalPrice: 1299.99,
            image: "https://media.istockphoto.com/id/1068258892/photo/real-photo-of-a-leather-couch-in-a-living-room-interior.jpg?s=612x612&w=0&k=20&c=BroDHN5n3pk0HIvKTxCksciT1ZhoodzuCgcxQzmAUPc=",
            category: "Living Room"
        },
        {
            id: 102,
            name: "Marble Coffee Table",
            price: 299.99,
            originalPrice: 499.99,
            image: "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202502/0087/chapman-oval-marble-coffee-table-52-o.jpg",
            category: "Living Room"
        },
        // Add more products...
    ];

    const bestSellers = [
        {
            id: 201,
            name: "King Size Bed Frame",
            price: 799.99,
            image: "https://m.media-amazon.com/images/I/81g++w1J0qL.jpg",
            category: "Bedroom"
        },
        {
            id: 202,
            name: "Dining Table Set",
            price: 1299.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMe54OPO1xfJdLqgXnaz_d6yGYMiaygynCQ&s",
            category: "Kitchen"
        },
        // Add more products...
    ];

    // DOM Elements
    const categoriesGrid = document.getElementById('categoriesGrid');
    const onSaleProductsGrid = document.getElementById('onSaleProducts');
    const bestSellersGrid = document.getElementById('bestSellers');

    // Initialize Store
    function initStore() {
        renderCategories();
        renderOnSaleProducts();
        renderBestSellers();
        setupEventListeners();
    }

    // Render Categories
    function renderCategories() {
        categoriesGrid.innerHTML = categories.map(category => `
            <div class="category-card" data-id="${category.id}">
                <img src="${category.image}" alt="${category.name}" class="category-image">
                <div class="category-info">
                    <h3 class="category-title">${category.name}</h3>
                    <p>${category.productCount} items</p>
                </div>
            </div>
        `).join('');
    }

    // Render On Sale Products
    function renderOnSaleProducts() {
        onSaleProductsGrid.innerHTML = onSaleProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">
                        <span class="sale-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <div class="product-actions">
                        <button class="quick-add-btn">Quick Add</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Best Sellers
    function renderBestSellers() {
        bestSellersGrid.innerHTML = bestSellers.map(product => `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="quick-add-btn">Quick Add</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Category Navigation
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function() {
                const categoryId = this.dataset.id;
                // Navigate to category page (to be implemented)
                console.log(`Navigating to category ${categoryId}`);
            });
        });

        // Quick Add to Cart
        document.querySelectorAll('.quick-add-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.closest('.product-card').dataset.id;
                addToCart(productId);
            });
        });

        // View All Buttons
        document.querySelectorAll('.view-all').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                // Navigate to respective collection (to be implemented)
                console.log(`View all ${this.previousElementSibling.textContent}`);
            });
        });
    }

    // Add to Cart Functionality
    function addToCart(productId) {
        // In a real app, this would call the backend
        const product = [...onSaleProducts, ...bestSellers].find(p => p.id == productId);
        if (product) {
            alert(`Added ${product.name} to cart!`);
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = parseInt(cartCount.textContent) + 1;
        }
    }

    // Initialize the store
    initStore();
});