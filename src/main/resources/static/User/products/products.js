// =============================================
// Data Setup
// =============================================
const rooms = [
    { id: 'living-room', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'office', name: 'Office' },
    { id: 'dining-room', name: 'Dining Room' }
];

const products = [
    {
        id: 101,
        name: "Modern Leather Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 1299.99,
        salePrice: 299.99,
        image: "https://articture.com/cdn/shop/files/image_4_a1d732f9-f198-427b-b04b-4f9074fb338b_800x.jpg?v=1695745828",
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
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 102,
        name: "Leather Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 3000.99,
        salePrice: 1299.99,
        image: "https://articture.com/cdn/shop/files/image_4_a1d732f9-f198-427b-b04b-4f9074fb338b_800x.jpg?v=1695745828",
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
        id: 103,
        name: "Modern Leather Sofa",
        category: "Sofas",
        room: "living-room",
        originalPrice: 1624.99,
        salePrice: 1299.99,
        image: "https://articture.com/cdn/shop/files/image_4_a1d732f9-f198-427b-b04b-4f9074fb338b_800x.jpg?v=1695745828",
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
        id: 201,
        name: "King Size Bed Frame",
        room: "bedroom",
        category: "Beds",
        originalPrice: 1624.99,
        salePrice: 1299.99,
        image: "https://eg-rv.homzmart.net/catalog/product/e/n/eng.fur.36-2_1.jpg",
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
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20,
    },
    {
        id: 202,
        name: "King Size Bed Frame",
        room: "bedroom",
        category: "Beds",
        originalPrice: 1624.99,
        salePrice: 1299.99,
        image: "https://eg-rv.homzmart.net/catalog/product/e/n/eng.fur.36-2_1.jpg",
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
        isNew: true,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 20,
    },
    {
        id: 202,
        name: "King Size Bed Frame",
        room: "kitchen",
        category: "Beds",
        originalPrice: 1624.99,
        salePrice: 1299.99,
        image: "https://eg-rv.homzmart.net/catalog/product/e/n/eng.fur.36-2_1.jpg",
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
        isNew: true,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 20,
    },
    {
        id: 202,
        name: "King Size Bed Frame",
        room: "office",
        category: "Beds",
        originalPrice: 1624.99,
        salePrice: 1299.99,
        image: "https://eg-rv.homzmart.net/catalog/product/e/n/eng.fur.36-2_1.jpg",
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
        isNew: true,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 20,
    },
    {
        id: 202,
        name: "King Size Bed Frame",
        room: "dining-room",
        category: "Beds",
        originalPrice: 1624.99,
        salePrice: 1299.99,
        image: "https://eg-rv.homzmart.net/catalog/product/e/n/eng.fur.36-2_1.jpg",
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
        isNew: true,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 20,
    }
];

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
    const roomTitle = document.getElementById('roomTitle');
    const currentRoomSpan = document.getElementById('currentRoom');
    const dropdownContent = document.querySelector('.dropdown-content');
    const productsGrid = document.getElementById('productsGrid');
    const filterBtn = document.getElementById('filterBtn');
    const filterDropdown = document.getElementById('filterDropdown');
    const priceRange = document.getElementById('priceRange');
    const minPriceSpan = document.getElementById('minPrice');
    const maxPriceSpan = document.getElementById('maxPrice');
    const categoryFilters = document.getElementById('categoryFilters');
    const sortOptions = document.getElementById('sortOptions');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');

    // =============================================
    // Core Initialization
    // =============================================
    const urlParams = new URLSearchParams(window.location.search);
    const itemsPerPage = 8;
    let currentPage = 1;
    let currentRoom = urlParams.get('room') || 'living-room';
    let currentProducts = products.filter(p => p.room === currentRoom);
    let filteredProducts = [...currentProducts];
    let currentProductId = null;

    function initPage() {
        initializeTheme();
        const room = rooms.find(r => r.id === currentRoom);
        if (room) {
            roomTitle.textContent = room.name;
            currentRoomSpan.textContent = room.name;
        }
        renderRoomDropdown();
        initFilters();
        renderProducts();
        setupEventListeners();
    }

    // =============================================
    // Rendering Functions
    // =============================================
    function renderRoomDropdown() {
        dropdownContent.innerHTML = rooms.map(room => `
            <a href="products.html?room=${room.id}">${room.name}</a>
        `).join('');
    }

    // Render Products
    function renderProducts() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        if (paginatedProducts.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">No products match your filters.</p>';
        } else {
            productsGrid.innerHTML = paginatedProducts.map(product => `
                    <div class="product-card" data-id="${product.id}">
                        ${product.isNew ? '<span class="new-badge">New</span>' : ''}
                        ${product.isBestSeller ? '<span class="bestseller-badge">Best Seller</span>' : ''}
                        ${product.isOnSale ? `<span class="sale-badge">${product.discountPercentage}% Off</span>` : ''}
                        <div class="product-image-container">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                        </div>
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                            <div class="product-salePrice">
                                ${product.isOnSale ? `
                                    <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                                ` : `<span>$${product.salePrice.toFixed(2)}</span>`}
                            </div>
                            <div class="product-actions">
                                <button class="quick-add-btn"> <i class="fas fa-cart-plus" style="margin-right: 15px;"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `).join('');
        }

        // Update pagination
        updatePagination();
    }

    // Render Star Rating
    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }

        return stars;
    }

    // =============================================
    // Event Handlers
    // =============================================
    // Initialize Filters
    function initFilters() {
        // Get unique categories for current room
        const categories = [...new Set(currentProducts.map(p => p.category))];

        // Render category filters
        categoryFilters.innerHTML = categories.map(category => `
            <label class="filter-option">
                <input type="checkbox" name="category" value="${category}" checked>
                ${category}
            </label>
        `).join('');

        // Set price range display
        updatePriceRangeDisplay();
    }

    // Apply Filters
    function applyFilters() {
        const selectedCategories = Array.from(
            document.querySelectorAll('input[name="category"]:checked')
        ).map(el => el.value);

        const maxPrice = parseFloat(priceRange.value);
        const minPrice = parseFloat(priceRange.min);

        filteredProducts = currentProducts.filter(product => {
            const categoryMatch = selectedCategories.includes(product.category);
            const priceMatch = product.salePrice >= minPrice && product.salePrice <= maxPrice;
            return categoryMatch && priceMatch;
        });

        // Apply sorting
        applySorting();

        // Reset to first page
        currentPage = 1;
        renderProducts();
    }

    // Update price Range Display
    function updatePriceRangeDisplay() {
        const prices = currentProducts.map(p => p.salePrice);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        priceRange.min = minPrice;
        priceRange.max = maxPrice;
        priceRange.value = maxPrice;

        minPriceSpan.textContent = `$${minPrice.toFixed(2)}`;
        maxPriceSpan.textContent = `$${maxPrice.toFixed(2)}`;

        // Initialize current price display
        document.getElementById('currentMinPrice').textContent = `$${minPrice.toFixed(2)}`;
        document.getElementById('currentMaxPrice').textContent = `$${maxPrice.toFixed(2)}`;

        // Update price range colors
        updatePriceRangeColors();
    }

    function updatePriceRangeColors() {
        const currentValue = parseInt(priceRange.value);
        const minPrice = parseInt(priceRange.min);
        const maxPrice = parseInt(priceRange.max);
        const percentage = ((currentValue - minPrice) / (maxPrice - minPrice)) * 100;
        
        priceRange.style.background = `linear-gradient(to right, var(--secondary-light) 0%, var(--secondary-light) ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

        // Dark theme adjustment
        if (body.classList.contains('dark-theme')) {
            priceRange.style.background = `linear-gradient(to right, var(--secondary-dark) 0%, var(--secondary-dark) ${percentage}%, #444 ${percentage}%, #444 100%)`;
        }
    }

    // Update Pagination
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        // Update buttons
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

        // Update page numbers
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('span');
            pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
            });
            pageNumbers.appendChild(pageBtn);
        }
    }

    // Apply Sorting
    function applySorting() {
        const sortValue = sortOptions.value;

        switch (sortValue) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.salePrice - b.salePrice);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.salePrice - a.salePrice);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'best-selling':
                filteredProducts.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
                break;
            case 'newest':
                filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            default: // featured
                // Keep original order
                break;
        }
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Filter button toggle
        filterBtn.addEventListener('click', function () {
            filterDropdown.classList.toggle('show');
        });

        // Close filter dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!filterBtn.contains(e.target) && !filterDropdown.contains(e.target)) {
                filterDropdown.classList.remove('show');
            }
        });

        // Price range slider
        priceRange.addEventListener('input', function () {
            const currentValue = parseInt(this.value);
            document.getElementById('currentMaxPrice').textContent = `$${currentValue.toFixed(2)}`;
            updatePriceRangeColors();
        });

        // Apply filters button
        document.querySelector('.apply-btn').addEventListener('click', function () {
            applyFilters();
            filterDropdown.classList.remove('show');
        });

        // Reset filters button
        document.querySelector('.reset-btn').addEventListener('click', function () {
            document.querySelectorAll('input[name="category"]').forEach(checkbox => {
                checkbox.checked = true;
            });
            priceRange.value = priceRange.max;
            updatePriceRangeDisplay();
            applyFilters();
            filterDropdown.classList.remove('show');
        });

        // Sort options
        sortOptions.addEventListener('change', function () {
            applyFilters();
        });

        // Pagination buttons
        prevPageBtn.addEventListener('click', function () {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
            }
        });

        nextPageBtn.addEventListener('click', function () {
            const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
            }
        });

        // Quick add to cart
        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('quick-add-btn') || e.target.closest('.quick-add-btn')) {
                const productId = e.target.closest('.product-card').dataset.id;
                addToCart(productId);
            }
        });

        // Product card click (for popup)
        productsGrid.addEventListener('click', function (e) {
            const productCard = e.target.closest('.product-card');
            if (productCard && !e.target.classList.contains('quick-add-btn') && !e.target.closest('.quick-add-btn')) {
                const productId = productCard.dataset.id;
                openProductPopup(productId);
            }
        });

        // Close popup
        document.querySelector('.close-popup').addEventListener('click', closeProductPopup);
        document.querySelector('.popup-overlay').addEventListener('click', closeProductPopup);

        // Quantity selector
        document.querySelector('.quantity-plus').addEventListener('click', function() {
            const input = document.querySelector('.quantity-input');
            input.value = parseInt(input.value) + 1;
        });

        document.querySelector('.quantity-minus').addEventListener('click', function() {
            const input = document.querySelector('.quantity-input');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });

        // Add to cart from popup
        document.querySelector('.add-to-cart-btn').addEventListener('click', function () {
            if (!currentProductId) return;

            const quantity = parseInt(document.querySelector('.quantity-input').value);
            addToCart(currentProductId, quantity);
            closeProductPopup();
        });
    }

    // Add to Cart Functionality
    function addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id == productId);
        if (product) {
            alert(`Added ${quantity} ${product.name}(s) to cart!`);
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = parseInt(cartCount.textContent || '0') + quantity;
        }
    }

    // Product Detail Popup Functions
    function openProductPopup(productId) {
        currentProductId = productId;
        const product = products.find(p => p.id == productId);
        if (!product) return;

        // Set product data in popup
        document.getElementById('popupProductName').textContent = product.name;
        document.getElementById('popupMainImage').src = product.image;
        document.getElementById('popupDescription').textContent = product.description;

        // Set price
        const priceElement = document.getElementById('popupPrice');
        if (product.isOnSale) {
            priceElement.innerHTML = `
                <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            `;
        } else {
            priceElement.textContent = `$${product.salePrice.toFixed(2)}`;
        }

        // Set rating
        document.getElementById('popupRating').innerHTML = renderStars(product.rating);

        // Set thumbnails
        const thumbnailsContainer = document.getElementById('popupThumbnails');
        thumbnailsContainer.innerHTML = '';

        // Add all thumbnails from the product data
        [product.image, ...product.thumbnails].forEach((thumbnailSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = thumbnailSrc;
            thumbnail.alt = `${product.name} thumbnail ${index + 1}`;
            thumbnail.addEventListener('click', () => {
                document.getElementById('popupMainImage').src = thumbnailSrc;
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Set reviews from product data
        const reviewsContainer = document.getElementById('popupReviews');
        reviewsContainer.innerHTML = '';

        if (product.reviews && product.reviews.length > 0) {
            product.reviews.forEach(review => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.innerHTML = `
                    <div class="review-header">
                        <span class="review-author">${review.name}</span>
                        <span class="review-date">${review.date}</span>
                        <div class="review-stars">${renderStars(review.rating)}</div>
                    </div>
                    <p class="review-text">${review.text}</p>
                `;
                reviewsContainer.appendChild(reviewItem);
            });
        } else {
            reviewsContainer.innerHTML = '<p>No reviews yet for this product.</p>';
        }

        // Show popup
        document.getElementById('productDetailPopup').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeProductPopup() {
        document.getElementById('productDetailPopup').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Initialize the page
    initPage();
});