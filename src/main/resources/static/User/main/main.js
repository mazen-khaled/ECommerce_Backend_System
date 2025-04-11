let currentProductId;

// =============================================
// Data Setup
// =============================================
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
        category: "Living Room",
        originalPrice: 1299.99,
        salePrice: 899.99,
        image: "https://media.istockphoto.com/id/1068258892/photo/real-photo-of-a-leather-couch-in-a-living-room-interior.jpg?s=612x612&w=0&k=20&c=BroDHN5n3pk0HIvKTxCksciT1ZhoodzuCgcxQzmAUPc=",
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
        id: 102,
        name: "Marble Coffee Table",
        category: "Living Room",
        originalPrice: 499.99,
        salePrice: 299.99,
        image: "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202502/0087/chapman-oval-marble-coffee-table-52-o.jpg",
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
];

const bestSellers = [
    {
        id: 201,
        name: "King Size Bed Frame",
        category: "Bedroom",
        originalPrice: 0,
        salePrice: 12000,
        image: "https://m.media-amazon.com/images/I/81g++w1J0qL.jpg",
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
        name: "Dining Table Set",
        category: "Kitchen",
        originalPrice: 0,
        salePrice: 770,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMe54OPO1xfJdLqgXnaz_d6yGYMiaygynCQ&s",
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
];

const allProducts = [...onSaleProducts, ...bestSellers];

document.addEventListener('DOMContentLoaded', function () {
    // =============================================
    // Theme Setup
    // =============================================
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');

    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            logo.src = '../resources/logo-dark.png';
        } else {
            logo.src = '../resources/logo-light.png';
        }
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        const isDarkMode = body.classList.contains('dark-theme');

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        logo.src = isDarkMode ? '../resources/logo-dark.png' : '../resources/logo-light.png';
    });

    // =============================================
    // DOM Elements
    // =============================================
    const domElements = {
        categoriesGrid: document.getElementById('categoriesGrid'),
        onSaleProductsGrid: document.getElementById('onSaleProducts'),
        bestSellersGrid: document.getElementById('bestSellers'),
        productPopup: document.getElementById('productDetailPopup'),
        popupElements: {
            name: document.getElementById('popupProductName'),
            image: document.getElementById('popupMainImage'),
            salePrice: document.getElementById('popupPrice'),
            rating: document.getElementById('popupRating'),
            thumbnails: document.getElementById('popupThumbnails'),
            description: document.getElementById('popupDescription'),
            reviews: document.getElementById('popupReviews')
        }
    };

    // =============================================
    // Core Initialization
    // =============================================
    function initializeStore() {
        initializeTheme();

        // Check if we're on a category page
        if (window.location.pathname.includes('special-category.html')) {
            initCategoryPage();
        } else {
            renderAllSections();
        }

        setupEventListeners();
    }

    function renderAllSections() {
        renderCategories();
        renderOnSaleProducts();
        renderBestSellers();
    }

    // =============================================
    // Rendering Functions
    // =============================================
    function renderCategories() {
        domElements.categoriesGrid.innerHTML = categories.map(category => `
            <div class="category-card" data-id="${category.id}">
                <img src="${category.image}" alt="${category.name}" class="category-image">
                <div class="category-info">
                    <h3 class="category-title">${category.name}</h3>
                    <p>${category.productCount} items</p>
                </div>
            </div>
        `).join('');
    }

    function renderOnSaleProducts() {
        const productsToShow = onSaleProducts.slice(0, 4); // Show first 4 on-sale products
        domElements.onSaleProductsGrid.innerHTML = productsToShow.map(createProductCardHTML).join('');
    }

    function renderBestSellers() {
        const productsToShow = bestSellers.slice(0, 4); // Show first 4 best sellers
        domElements.bestSellersGrid.innerHTML = productsToShow.map(createProductCardHTML).join('');
    }

    // Update the createProductCardHTML function to always show badges
    function createProductCardHTML(product) {
        return `
        <div class="product-card" data-id="${product.id}">
            ${product.isOnSale ? `<span class="sale-badge">${product.discountPercentage}% Off</span>` : ''}
            ${product.isBestSeller ? '<span class="bestseller-badge">Best Seller</span>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-salePrice">
                    ${product.originalPrice ? `
                        <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    ` : `$${product.salePrice.toFixed(2)}`}
                </div>
                <div class="product-actions">
                    <button class="quick-add-btn"><i class="fas fa-cart-plus" style="margin-right: 15px; color: #000;"></i>Add to cart</button>
                </div>
            </div>
        </div>
    `;
    }

    // =============================================
    // Event Handlers
    // =============================================
    function setupEventListeners() {
        setupCategoryNavigation();
        setupProductInteractions();
        setupPopupControls();
        setupViewAllButtons();
    }

    function setupCategoryNavigation() {
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = categories.find(c => c.id == card.dataset.id);
                if (category) {
                    const roomSlug = category.name.toLowerCase().replace(/ /g, '-');
                    window.location.href = `../products/products.html?room=${roomSlug}`;
                }
            });
        });
    }

    function setupProductInteractions() {
        document.querySelectorAll('.products-grid').forEach(grid => {
            grid.addEventListener('click', handleProductInteraction);
        });
    }

    function handleProductInteraction(e) {
        const productCard = e.target.closest('.product-card');
        if (!productCard) return;

        if (e.target.classList.contains('quick-add-btn')) {
            handleQuickAdd(productCard);
        } else {
            handleProductView(productCard);
        }
    }

    function handleQuickAdd(productCard) {
        const productId = productCard.dataset.id;
        addToCart(productId);
    }

    function handleProductView(productCard) {
        const productId = productCard.dataset.id;
        openProductPopup(productId);
    }

    function setupPopupControls() {
        document.querySelector('.close-popup').addEventListener('click', closeProductPopup);
        document.querySelector('.popup-overlay').addEventListener('click', closeProductPopup);
        document.querySelector('.add-to-cart-btn').addEventListener('click', handlePopupAddToCart);
        setupQuantitySelector();

        // Handle thumbnail click to change main image
        domElements.popupElements.thumbnails.addEventListener('click', function (e) {
            const thumbnail = e.target.closest('.thumbnail');
            if (!thumbnail) return;

            const newImage = thumbnail.dataset.mainImage;
            domElements.popupElements.image.src = newImage;
        });
    }

    function handlePopupAddToCart() {
        if (!currentProductId) return;
        const quantity = parseInt(document.querySelector('.quantity-input').value);
        addToCart(currentProductId, quantity);
        closeProductPopup();
    }

    // Updated View All functionality
    function setupViewAllButtons() {
        document.querySelectorAll('.view-all').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const category = this.dataset.category;

                // Check if we're already on a special category page
                if (window.location.pathname.includes('special-category.html')) {
                    // Just update the content if we're already on the right page
                    loadCategoryContent(category);
                    window.scrollTo(0, 0);
                } else {
                    // Navigate to the special category page
                    window.location.href = `special-category.html?category=${category}`;
                }
            });
        });
    }

    // New function to load category content
    function loadCategoryContent(category) {
        let products = [];
        let title = '';

        switch (category) {
            case 'on-sale':
                title = 'On Sale Products';
                products = onSaleProducts;
                break;
            case 'best-sellers':
                title = 'Best Sellers';
                products = bestSellers;
                break;
        }

        // Update the page title
        document.title = `${title} | Your Store Name`;

        // Update the category title
        const titleElement = document.getElementById('fullCategoryTitle');
        if (titleElement) titleElement.textContent = title;

        // Render products
        const grid = document.getElementById('fullCategoryGrid');
        if (grid) grid.innerHTML = products.map(createProductCardHTML).join('');
    }

    // Initialize category page if we're on it
    function initCategoryPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');

        if (category && (category === 'on-sale' || category === 'best-sellers')) {
            loadCategoryContent(category);
        }
    }

    function showFullCategoryPage(title, products) {
        // Hide regular sections
        document.querySelector('.categories-section').style.display = 'none';
        document.querySelector('.on-sale-section').style.display = 'none';
        document.querySelector('.best-sellers-section').style.display = 'none';

        // Show full category section
        const fullCategorySection = document.querySelector('.full-category-section');
        fullCategorySection.style.display = 'block';

        // Update title
        document.getElementById('fullCategoryTitle').textContent = title;

        // Render all products
        const grid = document.getElementById('fullCategoryGrid');
        grid.innerHTML = products.map(createProductCardHTML).join('');

        // Add back button functionality
        document.getElementById('backToHome').addEventListener('click', () => {
            fullCategorySection.style.display = 'none';
            document.querySelector('.categories-section').style.display = 'block';
            document.querySelector('.on-sale-section').style.display = 'block';
            document.querySelector('.best-sellers-section').style.display = 'block';
        });
    }

    // =============================================
    // Cart Functionality
    // =============================================
    function addToCart(productId, quantity = 1) {
        const product = allProducts.find(p => p.id == productId);
        if (product) {
            alert(`Added ${quantity} ${product.name}(s) to cart!`);
            updateCartCount(quantity);
        }
    }

    function updateCartCount(quantity) {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + quantity;
    }

    // =============================================
    // Product Popup Functions
    // =============================================
    function openProductPopup(productId) {
        currentProductId = productId;
        const product = getProductById(productId);

        if (!product) return;

        updatePopupContent(product);
        showPopup();
    }

    function getProductById(productId) {
        return allProducts.find(p => p.id == productId);
    }

    function updatePopupContent(product) {
        const { name, image, salePrice, originalPrice, rating, thumbnails, description, reviews } = product;

        domElements.popupElements.name.textContent = name;
        domElements.popupElements.image.src = image;
        domElements.popupElements.salePrice.innerHTML = originalPrice ? `
            <span class="sale-price">$${salePrice.toFixed(2)}</span>
            <span class="original-price">$${originalPrice.toFixed(2)}</span>
        ` : `$${salePrice.toFixed(2)}`;

        domElements.popupElements.rating.innerHTML = renderStars(rating || 4.5);

        domElements.popupElements.thumbnails.innerHTML = createThumbnailsHTML(thumbnails || [image]);
        domElements.popupElements.description.textContent = description || "No description available.";
        domElements.popupElements.reviews.innerHTML = createReviewsHTML(reviews || []);
    }


    function createThumbnailsHTML(thumbnails) {
        return thumbnails.map((img, i) => `
            <img src="${img}" 
                 alt="Thumbnail ${i + 1}" 
                 class="thumbnail" 
                 data-main-image="${img}">
        `).join('');
    }

    function createReviewsHTML(reviews) {
        if (!reviews.length) {
            return '<p>No reviews yet.</p>';
        }

        return reviews.map(review => `
            <div class="review-item">
                ${createReviewHeader(review.name, review.date, review.rating)}
                <p class="review-text">${review.text}</p>
            </div>
        `).join('');
    }

    function createReviewHeader(author, date, rating) {
        return `
            <div class="review-header">
                <span class="review-author">${author}</span>
                <span class="review-date">${date}</span>
                <div class="review-stars">${renderStars(rating)}</div>
            </div>
        `;
    }

    function showPopup() {
        domElements.productPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeProductPopup() {
        domElements.productPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // =============================================
    // Utility Functions
    // =============================================
    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return Array.from({ length: 5 }, (_, i) => {
            if (i < fullStars) return '<i class="fas fa-star"></i>';
            if (i === fullStars && hasHalfStar) return '<i class="fas fa-star-half-alt"></i>';
            return '<i class="far fa-star"></i>';
        }).join('');
    }

    function setupQuantitySelector() {
        document.querySelectorAll('.quantity-plus').forEach(btn => {
            btn.addEventListener('click', () => adjustQuantity(btn, 1));
        });

        document.querySelectorAll('.quantity-minus').forEach(btn => {
            btn.addEventListener('click', () => adjustQuantity(btn, -1));
        });
    }

    function adjustQuantity(btn, delta) {
        const input = btn.parentNode.querySelector('.quantity-input');
        const newValue = parseInt(input.value) + delta;
        input.value = Math.max(1, newValue);
    }

    // =============================================
    // Initialize Application
    // =============================================
    initializeStore();
});