let currentProductId;

// Mock Data - Replace with API calls later
const userData = {
    id: 12345,
    name: "Mazen Khaled",
    email: "Mazen-Khaled@example.com",
    phone: "+20 1205843080",
    address: "Egypt",
    joinDate: "January 15, 2025",
};

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
]

const userOrders = [
    {
        order_id: "ORD-101",
        date: "May 15, 2023",
        user_id: userData.id,
        items: [101, 201],
        subtotal: 12999,
        tax: 0,
        total: 12999,
        status: 'delivered',
        canReview: true,
        canCancel: false,
        reason: "",
    },
    {
        order_id: "ORD-107",
        date: "May 15, 2023",
        user_id: userData.id,
        items: [101, 201],
        subtotal: 12999,
        tax: 0,
        total: 12999,
        status: 'delivered',
        canReview: true,
        canCancel: false,
        reason: "",
    },
    {
        order_id: "ORD-102",
        date: "March 14, 2001",
        user_id: userData.id,
        items: [102],
        subtotal: 999,
        tax: 0,
        total: 999,
        status: 'processing',
        canReview: false,
        canCancel: true,
        reason: "",
    },
    {
        order_id: "ORD-103",
        date: "Aprial 11, 2019",
        user_id: userData.id,
        items: [103],
        subtotal: 1457,
        tax: 0,
        total: 1457,
        status: 'cancelled',
        canReview: false,
        canCancel: true,
        reason: "",
    }
]

const wishlistData = [103, 201, 202];

document.addEventListener('DOMContentLoaded', function () {
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

    themeToggle.addEventListener('click', function () {
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

    // =====================
    // Populate User Profile
    // =====================

    const profileInfo = document.getElementById("profileInfo");
    const profileForm = document.getElementById("profileForm");
    const editBtn = document.getElementById("editProfileBtn");

    const editableFields = ["name", "phone", "address"];
    const profileData = ["name", "email", "phone", "address", "joinDate"];

    function createProfileView(data) {
        profileInfo.innerHTML = "";

        profileData.forEach((key) => {
            if (data[key] !== undefined) {
                const item = document.createElement("div");
                item.className = "profile-item";

                const label = document.createElement("label");
                label.textContent = formatLabel(key);

                const valuePara = document.createElement("p");
                valuePara.textContent = data[key];

                item.appendChild(label);
                item.appendChild(valuePara);
                profileInfo.appendChild(item);
            }
        });
    }

    function createProfileForm(data) {
        profileForm.innerHTML = "";

        const tempUserData = { ...data };

        editableFields.forEach((key) => {
            const group = document.createElement("div");
            group.className = "form-group";

            const label = document.createElement("label");
            label.setAttribute("for", key);
            label.textContent = formatLabel(key);

            const input = document.createElement("input");
            input.type = "text";
            input.id = key;
            input.name = key;
            input.value = data[key] || "";

            group.appendChild(label);
            group.appendChild(input);
            profileForm.appendChild(group);
        });

        const actions = document.createElement("div");
        actions.className = "form-actions";

        const saveBtn = document.createElement("button");
        saveBtn.className = "save-btn";
        saveBtn.textContent = "Save";
        saveBtn.type = "button";

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "cancel-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.type = "button";

        saveBtn.addEventListener("click", () => {
            profileData.forEach((key) => {
                const input = document.getElementById(key);
                if (input) {
                    userData[key] = input.value;
                }
            });

            createProfileView(userData);
            profileForm.style.display = "none";
            profileInfo.style.display = "block";
        });

        cancelBtn.addEventListener("click", () => {
            profileForm.style.display = "none";
            profileInfo.style.display = "block";
        });

        actions.appendChild(saveBtn);
        actions.appendChild(cancelBtn);
        profileForm.appendChild(actions);
    }


    function formatLabel(str) {
        return str.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase());
    }

    editBtn.addEventListener("click", () => {
        createProfileForm(userData);
        profileInfo.style.display = "none";
        profileForm.style.display = "block";
    });

    createProfileView(userData);

    // =====================
    // Populate Orders
    // =====================
    const ordersList = document.getElementById("ordersList");
    const tabs = document.querySelectorAll(".tab-btn");

    function renderOrders(type) {
        const filteredOrders = userOrders.filter(order => {
            if (type === 'past') return order.status === 'delivered';
            if (type === 'inProgress') return order.status === 'processing';
            if (type === 'cancelled') return order.status === 'cancelled';
            return false;
        });

        ordersList.innerHTML = "";
        filteredOrders.forEach(order => {
            const orderProducts = order.items.map(id =>
                products.find(p => p.id === id)
            ).filter(p => p); // Filter out undefined products

            const orderDiv = document.createElement("div");
            orderDiv.classList.add("order-item");
            orderDiv.innerHTML = `
                <div class="order-header">
                    <div>
                        <div class="order-id">${order.order_id}</div>
                        <div class="order-date">${order.date}</div>
                    </div>
                    <span class="order-status status-${order.status}">${order.status}</span>
                </div>
                <div class="order-products">
                    ${orderProducts.map((product, i) => `
                        <div style="display:flex; gap:1rem; align-items:center; margin-bottom: 10px; padding-bottom: 1rem; border-bottom: ${i < orderProducts.length - 1 ? '1px solid #444' : 'none'};"> 
                            <img src="${product.image}" alt="${product.name}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
                            <div>
                                <div><strong>${product.name}</strong></div>
                                <div>${product.category}</div>
                                <div>Price: $${product.salePrice.toFixed(2)}</div>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="order-total">Total: $${order.total.toFixed(2)}</div>
                <div class="order-actions">
                    ${order.canReview ? '<button class="action-btn feedback-btn">Give Feedback</button>' : ""}
                    ${(order.status) !== "processing" ? '<button class="action-btn reorder-btn">Reorder</button>' : ""}
                </div>
            `;
            ordersList.appendChild(orderDiv);
        });
    }

    // Handle tab switching
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const tabType = tab.getAttribute("data-tab");
            renderOrders(tabType);
        });
    });

    // Handle feedback button clicks
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('feedback-btn')) {
            const orderItem = e.target.closest('.order-item');
            const orderId = orderItem.querySelector('.order-id').textContent;

            // Find the order in userOrders
            const order = userOrders.find(o => o.order_id === orderId);

            if (order) {
                createProductSelectionModal(order);
            }
        }
    });

    function createProductSelectionModal(order) {
        const modal = document.createElement('div');
        modal.className = 'modal';

        // Get actual product details from products array
        const orderProducts = order.items.map(id =>
            products.find(p => p.id === id)
        ).filter(p => p); // Filter out undefined products

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Select a product to review</h3>
                <div class="product-selection">
                    ${orderProducts.map(product => `
                        <div class="product-option" data-product-id="${product.id}">
                            <img src="${product.image}" alt="${product.name}">
                            <div>
                                <h4>${product.name}</h4>
                                <p>${product.category}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal handlers
        modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => e.target === modal && modal.remove());

        // Product selection handler
        modal.querySelectorAll('.product-option').forEach(option => {
            option.addEventListener('click', function () {
                const productId = parseInt(this.dataset.productId);
                modal.remove();
                createReviewForm(productId, order.order_id);
            });
        });
    }

    function createReviewForm(productId, orderId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Write Your Review</h3>
                <form id="reviewForm">
                    <div class="form-group">
                        <label>Rating</label>
                        <div class="star-rating">
                            <span class="star" data-rating="1">&#9733;</span>
                            <span class="star" data-rating="2">&#9733;</span>
                            <span class="star" data-rating="3">&#9733;</span>
                            <span class="star" data-rating="4">&#9733;</span>
                            <span class="star" data-rating="5">&#9733;</span>
                        </div>
                        <input type="hidden" id="rating" name="rating" value="0">
                    </div>
                    <div class="form-group">
                        <label for="reviewText">Review</label>
                        <textarea id="reviewText" name="reviewText" rows="5" required></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="submit-btn">Submit Review</button>
                    </div>
                </form>
            </div>
        `;

        // Close modal when clicking X
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Star rating functionality
        const stars = modal.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', function () {
                const rating = parseInt(this.getAttribute('data-rating'));
                modal.querySelector('#rating').value = rating;

                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });

        // Star rating and form submission logic
        modal.querySelector('#reviewForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const rating = parseInt(this.rating.value);
            const reviewText = this.reviewText.value;

            if (!rating) {
                alert('Please select a rating');
                return;
            }

            // Add review to the product
            product.reviews.push({
                name: userData.name,
                date: new Date().toISOString().split('T')[0],
                rating: rating,
                text: reviewText
            });

            // Update product rating
            updateProductRating(product);

            // Update order status
            const order = userOrders.find(o => o.order_id === orderId);
            if (order) order.canReview = false;

            // Refresh orders view
            const activeTab = document.querySelector('.tab-btn.active');
            renderOrders(activeTab.dataset.tab);

            modal.remove();
            alert('Thank you for your review!');
        });

        document.body.appendChild(modal);
    }

    function updateProductRating(product) {
        if (!product.reviews || product.reviews.length === 0) return;

        const total = product.reviews.reduce((sum, review) => sum + review.rating, 0);
        product.rating = parseFloat((total / product.reviews.length).toFixed(1));
    }

    // Initial render
    renderOrders("past");

    // =====================
    // Populate Wishlist
    // =====================
    function populateWishlist() {
        const wishlistContainer = document.getElementById('wishlistItems');
        wishlistContainer.innerHTML = '';

        wishlistData.forEach(productId => {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.dataset.id = product.id;

            // Calculate discount if on sale (using PRODUCT instead of ITEM)
            const discountBadge = product.isOnSale
                ? `<span class="discount-badge">-${product.discountPercentage}%</span>`
                : '';

            // Determine which price to show (using PRODUCT)
            const priceToShow = product.isOnSale ? product.salePrice : product.originalPrice;
            const originalPriceDisplay = product.isOnSale
                ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>`
                : '';

            wishlistItem.innerHTML = `
                ${discountBadge}
                <img src="${product.image}" alt="${product.name}" class="wishlist-image">
                <div class="wishlist-info">
                    <h3 class="wishlist-name">${product.name}</h3>
                    <div class="wishlist-price">
                        ${originalPriceDisplay}
                        $${priceToShow.toFixed(2)}
                    </div>
                    <div class="wishlist-rating">
                        ${generateStarRating(product.rating)}
                        <span>(${product.reviews.length})</span>
                    </div>
                </div>
                <div class="wishlist-actions">
                    <button class="wishlist-remove" title="Remove from wishlist">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="wishlist-add">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            `;

            wishlistContainer.appendChild(wishlistItem);

            // Event delegation for dynamic elements
            wishlistItem.querySelector('.wishlist-remove').addEventListener('click', function (e) {
                e.stopPropagation();
                removeFromWishlist(product.id);
            });

            wishlistItem.querySelector('.wishlist-add').addEventListener('click', function (e) {
                e.stopPropagation();
                addToCart(product.id);
            });

            // Product detail click handler
            wishlistItem.addEventListener('click', function (e) {
                if (!e.target.closest('.wishlist-actions')) {
                    showProductDetails(product.id);
                }
            });
        });
    }


    function generateStarRating(rating) {
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

    // Fixed helper functions
    function removeFromWishlist(itemId) {
        const index = wishlistData.findIndex(id => id === itemId);
        if (index !== -1) {
            wishlistData.splice(index, 1);
            populateWishlist();
            showToast('Item removed from wishlist');
        }
    }

    // Update cart count
    const cartCount = document.querySelector('.cart-count');

    function addToCart(itemId) {
        const product = products.find(p => p.id === itemId);
        if (product) {
            // Add actual cart logic here

            cartCount.textContent = parseInt(cartCount.textContent || '0') + 1;
            showToast(`${product.name} added to cart`);
        }
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
                toast.remove();
            }, 300);
        }, 3000);
    }

    function showProductDetails(productId) {
        // Find the product in the products array, not wishlistData
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const popup = document.getElementById('productDetailPopup');
        if (!popup) {
            console.error('Popup element not found');
            return;
        }

        // Get all popup elements
        const mainImage = document.getElementById('popupMainImage');
        const thumbnailsContainer = document.getElementById('popupThumbnails');
        const productName = document.getElementById('popupProductName');
        const productPrice = document.getElementById('popupPrice');
        const productRating = document.getElementById('popupRating');
        const productDescription = document.getElementById('popupDescription');
        const reviewsContainer = document.getElementById('popupReviews');

        // Set main product details
        if (mainImage) mainImage.src = product.image;
        if (productName) productName.textContent = product.name;

        // Set price with discount if available
        if (productPrice) {
            if (product.isOnSale) {
                productPrice.innerHTML = `
                    <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                `;
            } else {
                productPrice.innerHTML = `$${product.originalPrice.toFixed(2)}`;
            }
        }

        // Set rating
        if (productRating) {
            productRating.innerHTML = `
                ${generateStarRating(product.rating)}
                <span>${product.rating} (${product.reviews.length} reviews)</span>
            `;
        }

        // Set description
        if (productDescription) productDescription.textContent = product.description;

        // Create thumbnails
        if (thumbnailsContainer) {
            thumbnailsContainer.innerHTML = '';
            const allImages = [product.image, ...(product.thumbnails || [])];
            allImages.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `${product.name} thumbnail ${index + 1}`;
                thumb.addEventListener('click', () => {
                    if (mainImage) mainImage.src = imgSrc;
                    // Update active thumbnail
                    document.querySelectorAll('#popupThumbnails img').forEach(t => {
                        t.classList.remove('active-thumbnail');
                    });
                    thumb.classList.add('active-thumbnail');
                });
                if (index === 0) thumb.classList.add('active-thumbnail');
                thumbnailsContainer.appendChild(thumb);
            });
        }

        // Create reviews
        if (reviewsContainer) {
            reviewsContainer.innerHTML = '';
            product.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review-item';
                reviewElement.innerHTML = `
                    <div class="review-header">
                        <div class="review-author">${review.name}</div>
                        <div class="review-date">${review.date}</div>
                        <div class="review-stars">${generateStarRating(review.rating)}</div>
                    </div>
                    <div class="review-text">${review.text}</div>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        }

        // Quantity selector functionality
        const quantityInput = document.querySelector('.quantity-input');
        if (quantityInput) {
            document.querySelector('.quantity-minus')?.addEventListener('click', () => {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });

            document.querySelector('.quantity-plus')?.addEventListener('click', () => {
                let value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });
        }

        // Add to cart button
        document.querySelector('.add-to-cart-btn')?.addEventListener('click', () => {
            const quantity = parseInt(quantityInput?.value || 1);
            addToCart(product.id, quantity);
            showToast(`${product.name} (${quantity}) added to cart`);
        });

        // Close button
        document.querySelector('.close-popup')?.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        document.querySelector('.popup-overlay')?.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Show the popup
        popup.style.display = 'flex';
    }

    // Initialize the wishlist
    populateWishlist();
});