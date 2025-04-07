document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const productsGrid = document.querySelector('.products-grid');
    const sortSelect = document.getElementById('sortSelect');
    const searchInput = document.getElementById('searchInput');
    const filterGroups = document.querySelectorAll('.filter-group');
    const clearFiltersBtn = document.querySelector('.clear-filters');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const currentPageSpan = document.querySelector('.current-page');
    const totalPagesSpan = document.querySelector('.total-pages');
    const quickViewModal = document.getElementById('quickViewModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    
    // State
    let products = [];
    let filteredProducts = [];
    let currentPage = 1;
    const productsPerPage = 9;
    
    // Initialize
    fetchProducts();
    setupEventListeners();
    
    // Functions
    function fetchProducts() {
        // In a real app, this would be an API call
        // For demo, we'll use mock data
        const mockProducts = [
            {
                id: 1,
                name: "Classic Wool Suit",
                category: "men-suits",
                price: 499.99,
                oldPrice: 599.99,
                rating: 4.5,
                reviewCount: 24,
                sizes: ["S", "M", "L", "XL"],
                colors: ["black", "navy"],
                image: "../Clothes/Classic Wool Suit.jpeg",
                badge: "New",
                description: "Premium wool suit for formal occasions with perfect fit and timeless design."
            },
            {
                id: 2,
                name: "Silk Evening Dress",
                category: "women-dresses",
                price: 349.99,
                oldPrice: 449.99,
                rating: 4,
                reviewCount: 18,
                sizes: ["XS", "S", "M"],
                colors: ["black", "gold"],
                image: "../Clothes/Silk Evening Dress.jpeg",
                badge: "Sale",
                description: "Elegant silk dress perfect for evening events with flowing silhouette."
            },
            {
                id: 3,
                name: "Linen Summer Shirt",
                category: "men-shirts",
                price: 89.99,
                rating: 5,
                reviewCount: 32,
                sizes: ["S", "M", "L"],
                colors: ["white", "sage"],
                image: "../Clothes/Linen Summer Shirt.jpeg",
                description: "Breathable linen shirt for warm weather with relaxed fit."
            },
            {
                id: 4,
                name: "Cashmere Winter Coat",
                category: "women-coats",
                price: 599.99,
                rating: 4.8,
                reviewCount: 15,
                sizes: ["S", "M", "L"],
                colors: ["black", "olive"],
                image: "../Clothes/Cashmere Winter Coat.jpeg",
                badge: "Bestseller",
                description: "Luxurious cashmere coat for winter with tailored fit and warm lining."
            },
            {
                id: 5,
                name: "Cotton Chino Trousers",
                category: "men-trousers",
                price: 79.99,
                rating: 4.2,
                reviewCount: 28,
                sizes: ["S", "M", "L", "XL"],
                colors: ["olive", "sage"],
                image: "../Clothes/Cotton Chino Trousers.jpeg",
                description: "Versatile chino trousers for both casual and smart occasions."
            },
            {
                id: 6,
                name: "Silk Blouse",
                category: "women-blouses",
                price: 129.99,
                oldPrice: 159.99,
                rating: 4.7,
                reviewCount: 21,
                sizes: ["XS", "S", "M"],
                colors: ["white", "gold"],
                image: "../Clothes/Silk Blouse.jpeg",
                description: "Elegant silk blouse with delicate details for sophisticated styling."
            },
            {
                id: 7,
                name: "Leather Dress Shoes",
                category: "men-shoes",
                price: 199.99,
                rating: 4.9,
                reviewCount: 42,
                sizes: ["8", "9", "10", "11"],
                colors: ["black"],
                image: "../Clothes/Leather Dress Shoes.jpeg",
                description: "Premium leather shoes with classic design and comfortable fit."
            },
            {
                id: 8,
                name: "Wool Blend Skirt",
                category: "women-skirts",
                price: 109.99,
                rating: 4.3,
                reviewCount: 16,
                sizes: ["XS", "S", "M"],
                colors: ["black", "olive"],
                image: "../Clothes/Wool Blend Skirt.jpeg",
                description: "Warm wool blend skirt with elegant pleats for winter styling."
            },
            {
                id: 9,
                name: "Silk Pocket Square",
                category: "men-accessories",
                price: 49.99,
                rating: 4.6,
                reviewCount: 37,
                colors: ["gold", "sage", "navy"],
                image: "../Clothes/Silk Pocket Square.jpeg",
                description: "Luxury silk pocket square to complement any formal attire."
            }
        ];
        
        products = mockProducts;
        filteredProducts = [...products];
        renderProducts();
        updatePagination();
    }
    
    function setupEventListeners() {
        // Filter group toggle
        filterGroups.forEach(group => {
            const header = group.querySelector('.filter-header');
            header.addEventListener('click', () => {
                group.classList.toggle('active');
            });
        });
        
        // Filter changes
        document.querySelectorAll('.filter-option input, .size-option input, .color-option input').forEach(input => {
            input.addEventListener('change', applyFilters);
        });
        
        document.getElementById('priceRange').addEventListener('input', applyFilters);
        
        // Sort changes
        sortSelect.addEventListener('change', applySorting);
        
        // Search
        searchInput.addEventListener('input', applySearch);
        
        // Clear filters
        clearFiltersBtn.addEventListener('click', clearFilters);
        
        // Pagination
        prevPageBtn.addEventListener('click', goToPrevPage);
        nextPageBtn.addEventListener('click', goToNextPage);
        
        // Quick view modal
        closeModalBtn.addEventListener('click', closeModal);
        quickViewModal.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
        
        // Mobile menu toggle
        menuToggle.addEventListener('click', function() {
            navCenter.classList.toggle('active');
        });
        
        // Category links
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                filterByCategory(category);
            });
        });
    }
    
    function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
        const selectedSizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(el => el.value);
        const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(el => el.value);
        const maxPrice = parseInt(document.getElementById('priceRange').value);
        
        filteredProducts = products.filter(product => {
            // Category filter
            if (selectedCategories.length > 0) {
                const productCategory = product.category.split('-')[0]; // "men" or "women"
                if (!selectedCategories.includes(productCategory) && !selectedCategories.includes('accessories')) {
                    return false;
                }
            }
            
            // Size filter
            if (selectedSizes.length > 0 && product.sizes) {
                const hasSize = selectedSizes.some(size => product.sizes.includes(size));
                if (!hasSize) return false;
            }
            
            // Color filter
            if (selectedColors.length > 0) {
                const hasColor = selectedColors.some(color => product.colors.includes(color));
                if (!hasColor) return false;
            }
            
            // Price filter
            if (product.price > maxPrice) return false;
            
            return true;
        });
        
        currentPage = 1;
        applySorting();
        renderProducts();
        updatePagination();
    }
    
    function applySorting() {
        const sortValue = sortSelect.value;
        
        filteredProducts.sort((a, b) => {
            switch (sortValue) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'newest':
                    return b.id - a.id; // Assuming higher ID = newer
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return 0; // Default/featured order
            }
        });
        
        renderProducts();
    }
    
    function applySearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm === '') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
        
        currentPage = 1;
        applySorting();
        renderProducts();
        updatePagination();
    }
    
    function filterByCategory(category) {
        // Reset all category checkboxes
        document.querySelectorAll('input[name="category"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the appropriate category
        if (category.startsWith('men-')) {
            document.querySelector('input[name="category"][value="men"]').checked = true;
        } else if (category.startsWith('women-')) {
            document.querySelector('input[name="category"][value="women"]').checked = true;
        }
        
        // Apply filters
        applyFilters();
        
        // Scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
    
    function clearFilters() {
        // Uncheck all filter inputs
        document.querySelectorAll('.filter-options input').forEach(input => {
            input.checked = false;
        });
        
        // Reset price slider
        document.getElementById('priceRange').value = 1000;
        
        // Reset filters
        filteredProducts = [...products];
        currentPage = 1;
        applySorting();
        renderProducts();
        updatePagination();
    }
    
    function renderProducts() {
        // Calculate pagination
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        
        // Clear existing products
        productsGrid.innerHTML = '';
        
        // Render products
        if (productsToShow.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search term</p>
                    <button class="clear-filters-btn">Clear All Filters</button>
                </div>
            `;
            
            document.querySelector('.clear-filters-btn').addEventListener('click', clearFilters);
        } else {
            productsToShow.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }
        
        // Add event listeners to new product cards
        addProductCardEventListeners();
    }
    
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let badgeHTML = '';
        if (product.badge) {
            const badgeClass = product.badge === 'Sale' ? 'sale' : '';
            badgeHTML = `<div class="product-badge ${badgeClass}">${product.badge}</div>`;
        }
        
        let priceHTML = `<span class="current-price">$${product.price.toFixed(2)}</span>`;
        if (product.oldPrice) {
            priceHTML += `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>`;
        }
        
        const ratingStars = Array(5).fill().map((_, i) => {
            if (i < Math.floor(product.rating)) {
                return '<i class="fas fa-star"></i>';
            } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                return '<i class="fas fa-star-half-alt"></i>';
            } else {
                return '<i class="far fa-star"></i>';
            }
        }).join('');
        
        card.innerHTML = `
            ${badgeHTML}
            <div class="product-img" style="background-image: url('${product.image}')">
                <div class="product-actions">
                    <button class="quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="wishlist-btn" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">
                    ${priceHTML}
                </div>
                <div class="rating">
                    ${ratingStars}
                    <span>(${product.reviewCount})</span>
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        return card;
    }
    
    function addProductCardEventListeners() {
        // Quick view buttons
        document.querySelectorAll('.quick-view').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                openQuickView(productId);
            });
        });
        
        // Wishlist buttons
        document.querySelectorAll('.wishlist-btn').forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('far')) {
                    icon.classList.replace('far', 'fas');
                    this.classList.add('active');
                    updateWishlistCount(1);
                } else {
                    icon.classList.replace('fas', 'far');
                    this.classList.remove('active');
                    updateWishlistCount(-1);
                }
            });
        });
        
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }
    
    function openQuickView(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const modalImages = quickViewModal.querySelector('.modal-product-images');
        const modalInfo = quickViewModal.querySelector('.modal-product-info');
        
        // Set product images
        modalImages.innerHTML = `
            <div class="main-image" style="background-image: url('${product.image}')"></div>
            <div class="thumbnail-container">
                <div class="thumbnail active" style="background-image: url('${product.image}')"></div>
                <div class="thumbnail" style="background-image: url('https://via.placeholder.com/400x500/eee?text=Back')"></div>
                <div class="thumbnail" style="background-image: url('https://via.placeholder.com/400x500/eee?text=Detail')"></div>
            </div>
        `;
        
        // Set product info
        let priceHTML = `<div class="modal-price">$${product.price.toFixed(2)}</div>`;
        if (product.oldPrice) {
            priceHTML = `
                <div class="modal-price">
                    <span class="current">$${product.price.toFixed(2)}</span>
                    <span class="old">$${product.oldPrice.toFixed(2)}</span>
                </div>
            `;
        }
        
        let sizesHTML = '';
        if (product.sizes) {
            sizesHTML = `
                <div class="modal-size">
                    <h5>Size</h5>
                    <div class="size-options">
                        ${product.sizes.map(size => `
                            <label class="size-option">
                                <input type="radio" name="size" value="${size}">
                                <span>${size}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        let colorsHTML = '';
        if (product.colors) {
            colorsHTML = `
                <div class="modal-color">
                    <h5>Color</h5>
                    <div class="color-options">
                        ${product.colors.map(color => `
                            <label class="color-option" style="--color: ${getColorValue(color)}">
                                <input type="radio" name="color" value="${color}">
                                <span class="color-checkbox"></span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        modalInfo.innerHTML = `
            <h3>${product.name}</h3>
            <div class="modal-rating">
                <div class="stars">
                    ${Array(5).fill().map((_, i) => 
                        i < Math.floor(product.rating) ? 
                        '<i class="fas fa-star"></i>' : 
                        (i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? 
                        '<i class="fas fa-star-half-alt"></i>' : 
                        '<i class="far fa-star"></i>'
                    ).join(''))}
                </div>
                <span class="review-count">${product.reviewCount} reviews</span>
            </div>
            ${priceHTML}
            <div class="modal-description">
                <p>${product.description}</p>
            </div>
            ${sizesHTML}
            ${colorsHTML}
            <div class="modal-actions">
                <button class="modal-add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="modal-wishlist" data-id="${product.id}">
                    <i class="far fa-heart"></i> Add to Wishlist
                </button>
            </div>
        `;
        
        // Show modal
        quickViewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add event listeners for modal
        document.querySelector('.modal-add-to-cart').addEventListener('click', function() {
            addToCart(productId);
            closeModal();
        });
        
        document.querySelector('.modal-wishlist').addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
                updateWishlistCount(1);
            } else {
                icon.classList.replace('fas', 'far');
                updateWishlistCount(-1);
            }
        });
    }
    
    function closeModal() {
        quickViewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function getColorValue(colorName) {
        const colorMap = {
            'black': '#000000',
            'white': '#FFFFFF',
            'green': '#172815',
            'olive': '#3E5622',
            'sage': '#709255',
            'gold': '#FAA916',
            'navy': '#001F3F'
        };
        return colorMap[colorName] || '#CCCCCC';
    }
    
    function addToCart(productId) {
        // In a real app, this would add to cart via API
        const cartCount = document.querySelector('.cart-count');
        let count = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = count + 1;
        
        // Show feedback
        const product = products.find(p => p.id === productId);
        if (product) {
            showToast(`${product.name} added to cart`);
        }
    }
    
    function updateWishlistCount(change) {
        const wishlistCount = document.querySelector('.wishlist-count');
        let count = parseInt(wishlistCount.textContent) || 0;
        count = Math.max(0, count + change);
        wishlistCount.textContent = count;
    }
    
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        totalPagesSpan.textContent = totalPages;
        currentPageSpan.textContent = currentPage;
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
    
    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    function goToNextPage() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    // Initialize filter groups to be active by default
    filterGroups.forEach(group => group.classList.add('active'));
});