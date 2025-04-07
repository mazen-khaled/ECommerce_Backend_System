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

    // Mock Data - Replace with API calls later
    const userData = {
        id: 12345,
        name: "Mazen Khaled",
        email: "Mazen-Khaled@example.com",
        phone: "+20 1205843080",
        address: "Egypt",
        joinDate: "January 15, 2025",
        lastLogin: "Today at 10:30 AM"
    };

    const ordersData = {
        past: [
            {
                id: "ORD-1001",
                date: "March 15, 2023",
                status: "delivered",
                products: [
                    {
                        id: 101,
                        name: "Velvet Chesterfield Sofa",
                        price: 1299.99,
                        quantity: 1,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMtds0nwWqgdV-0ufamwXzY9lN7kwGQI-Sg&s"
                    },
                    {
                        id: 102,
                        name: "Marble Coffee Table",
                        price: 599.99,
                        quantity: 1,
                        image: "https://m.media-amazon.com/images/I/81i4N20E85L.jpg"
                    }
                ],
                total: 1899.98,
                canReview: true
            },
            {
                id: "ORD-1002",
                date: "February 28, 2023",
                status: "delivered",
                products: [
                    {
                        id: 103,
                        name: "Mid-Century Armchair",
                        price: 499.99,
                        quantity: 2,
                        image: "https://cdn20.pamono.com/p/g/1/7/1799564_gxk3w93wvo/mid-century-armchair-in-dusty-pink-boucle-by-henryk-lis-1960s-image-1.jpg"
                    }
                ],
                total: 999.98,
                canReview: false
            }
        ],
        inProgress: [
            {
                id: "ORD-1003",
                date: "April 5, 2023",
                status: "processing",
                products: [
                    {
                        id: 104,
                        name: "Industrial Bookshelf",
                        price: 799.99,
                        quantity: 1,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeD-BiYjvN5gPQphwXBkjUgC8pcyhkqERgkA&s"
                    },
                    {
                        id: 105,
                        name: "Leather Ottoman",
                        price: 299.99,
                        quantity: 1,
                        image: "https://cb2.scene7.com/is/image/CB2/TuftedRectSaddleLthrOttmnSHS18_1x1/$web_product_hero$&/240215083539/saddle-leather-tufted-ottoman.jpg"
                    }
                ],
                total: 1099.98,
                canCancel: true
            }
        ],
        cancelled: [
            {
                id: "ORD-1004",
                date: "January 10, 2023",
                status: "cancelled",
                products: [
                    {
                        id: 106,
                        name: "Modern Dining Table",
                        price: 899.99,
                        quantity: 1,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sI-ksxNfcCBdKZZmNucm4B10tYt1CzmLWg&s"
                    }
                ],
                total: 899.99,
                reason: "Changed mind"
            }
        ]
    };

    const wishlistData = [
        {
            id: 201,
            name: "Scandinavian Lounge Chair",
            price: 649.99,
                        image: "https://cdn20.pamono.com/p/g/2/7/273430_tmbuh85gfm/mid-century-scandinavian-lounge-chairs-from-france-and-son-1960s-set-of-2-3.jpg"
        },
        {
            id: 202,
            name: "Glass Display Cabinet",
            price: 899.99,
                        image: "https://images-cdn.ubuy.co.in/63684aed59ee4b2f334b6b54-famapy-display-cabinet-with-glass-doors.jpg"
        },
        {
            id: 203,
            name: "Velvet Bed Frame",
            price: 1499.99,
                        image: "https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?t=st=1744015766~exp=1744019366~hmac=fd494df52d9c216fe0a6b148fd823e17dfc3e3e8f868107405714928f9d08a40&w=740"
        }
    ];

    // DOM Elements
    const userNameElement = document.getElementById('userName');
    const profileInfoElement = document.getElementById('profileInfo');
    const profileFormElement = document.getElementById('profileForm');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const ordersListElement = document.getElementById('ordersList');
    const wishlistItemsElement = document.getElementById('wishlistItems');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const feedbackModal = document.getElementById('feedbackModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const ratingStars = document.querySelectorAll('.rating-stars i');
    const feedbackRatingInput = document.getElementById('feedbackRating');
    const feedbackForm = document.getElementById('feedbackForm');

    // Initialize Dashboard
    function initDashboard() {
        // Set user name
        userNameElement.textContent = userData.name;
        
        // Render profile info
        renderProfileInfo();
        
        // Render orders (default to past orders)
        renderOrders('past');
        
        // Render wishlist
        renderWishlist();
        
        // Set up event listeners
        setupEventListeners();
    }

    // Render Profile Info
    function renderProfileInfo() {
        profileInfoElement.innerHTML = `
            <div class="profile-item">
                <label>Full Name</label>
                <p>${userData.name}</p>
            </div>
            <div class="profile-item">
                <label>Email</label>
                <p>${userData.email}</p>
            </div>
            <div class="profile-item">
                <label>Phone</label>
                <p>${userData.phone}</p>
            </div>
            <div class="profile-item">
                <label>Address</label>
                <p>${userData.address}</p>
            </div>
            <div class="profile-item">
                <label>Member Since</label>
                <p>${userData.joinDate}</p>
            </div>
            <div class="profile-item">
                <label>Last Login</label>
                <p>${userData.lastLogin}</p>
            </div>
        `;
        
        // Render profile form
        profileFormElement.innerHTML = `
            <div class="form-group">
                <label for="editName">Full Name</label>
                <input type="text" id="editName" value="${userData.name}">
            </div>
            <div class="form-group">
                <label for="editEmail">Email</label>
                <input type="email" id="editEmail" value="${userData.email}">
            </div>
            <div class="form-group">
                <label for="editPhone">Phone</label>
                <input type="tel" id="editPhone" value="${userData.phone}">
            </div>
            <div class="form-group">
                <label for="editAddress">Address</label>
                <input type="text" id="editAddress" value="${userData.address}">
            </div>
            <div class="form-actions">
                <button type="button" class="cancel-btn" id="cancelEditBtn">Cancel</button>
                <button type="button" class="save-btn" id="saveProfileBtn">Save Changes</button>
            </div>
        `;
    }

    // Render Orders
    function renderOrders(type) {
        const orders = ordersData[type === 'in-progress' ? 'inProgress' : type];
        let ordersHTML = '';
        
        if (orders.length === 0) {
            ordersHTML = `<p class="no-orders">You have no ${type} orders.</p>`;
        } else {
            orders.forEach(order => {
                let statusClass = '';
                let statusText = '';
                
                switch (order.status) {
                    case 'delivered':
                        statusClass = 'status-delivered';
                        statusText = 'Delivered';
                        break;
                    case 'processing':
                        statusClass = 'status-processing';
                        statusText = 'Processing';
                        break;
                    case 'cancelled':
                        statusClass = 'status-cancelled';
                        statusText = 'Cancelled';
                        break;
                }
                
                let productsHTML = '';
                order.products.forEach(product => {
                    productsHTML += `
                        <div class="product-item">
                            <img src="${product.image}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <div class="product-name">${product.name}</div>
                                <div class="product-price">$${product.price.toFixed(2)} × ${product.quantity}</div>
                            </div>
                        </div>
                    `;
                });
                
                let actionsHTML = '';
                if (order.status === 'delivered' && order.canReview) {
                    actionsHTML += `<button class="action-btn feedback-btn" data-order="${order.id}">Leave Feedback</button>`;
                }
                
                if (order.status === 'processing' && order.canCancel) {
                    actionsHTML += `<button class="action-btn reorder-btn">Reorder</button>`;
                }
                
                if (order.status === 'cancelled') {
                    actionsHTML += `<div class="cancel-reason">Reason: ${order.reason}</div>`;
                }
                
                ordersHTML += `
                    <div class="order-item">
                        <div class="order-header">
                            <span class="order-id">${order.id}</span>
                            <span class="order-date">${order.date}</span>
                        </div>
                        <div class="${statusClass} order-status">${statusText}</div>
                        <div class="order-products">
                            ${productsHTML}
                        </div>
                        <div class="order-total">Total: $${order.total.toFixed(2)}</div>
                        <div class="order-actions">
                            ${actionsHTML}
                        </div>
                    </div>
                `;
            });
        }
        
        ordersListElement.innerHTML = ordersHTML;
        
        // Set up feedback button events
        document.querySelectorAll('.feedback-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                openFeedbackModal(this.dataset.order);
            });
        });
    }

    // Render Wishlist
    function renderWishlist() {
        let wishlistHTML = '';
        
        if (wishlistData.length === 0) {
            wishlistHTML = `<p class="no-wishlist">Your wishlist is empty.</p>`;
        } else {
            wishlistData.forEach(item => {
                wishlistHTML += `
                    <div class="wishlist-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="wishlist-image">
                        <div class="wishlist-name">${item.name}</div>
                        <div class="wishlist-price">$${item.price.toFixed(2)}</div>
                        <div class="wishlist-actions">
                            <button class="wishlist-remove"><i class="fas fa-trash"></i></button>
                            <button class="wishlist-add">Add to Cart</button>
                        </div>
                    </div>
                `;
            });
        }
        
        wishlistItemsElement.innerHTML = wishlistHTML;
        
        // Set up wishlist item events
        document.querySelectorAll('.wishlist-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.wishlist-item').dataset.id);
                removeFromWishlist(itemId);
            });
        });
        
        document.querySelectorAll('.wishlist-add').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.closest('.wishlist-item').dataset.id);
                addToCart(itemId);
            });
        });
    }

    // Set Up Event Listeners
    function setupEventListeners() {
        // Edit Profile
        editProfileBtn.addEventListener('click', function() {
            profileInfoElement.style.display = 'none';
            profileFormElement.style.display = 'grid';
        });
        
        // Cancel Edit
        document.addEventListener('click', function(e) {
            if (e.target.id === 'cancelEditBtn') {
                profileInfoElement.style.display = 'grid';
                profileFormElement.style.display = 'none';
            }
        });
        
        // Save Profile
        document.addEventListener('click', function(e) {
            if (e.target.id === 'saveProfileBtn') {
                // In a real app, this would save to the backend
                userData.name = document.getElementById('editName').value;
                userData.email = document.getElementById('editEmail').value;
                userData.phone = document.getElementById('editPhone').value;
                userData.address = document.getElementById('editAddress').value;
                
                renderProfileInfo();
                profileInfoElement.style.display = 'grid';
                profileFormElement.style.display = 'none';
                
                // Update welcome message if name changed
                userNameElement.textContent = userData.name;
                
                alert('Profile updated successfully!');
            }
        });
        
        // Order Tabs
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tabButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderOrders(this.dataset.tab);
            });
        });
        
        // Rating Stars
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.dataset.rating);
                feedbackRatingInput.value = rating;
                
                ratingStars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('fas');
                        s.classList.remove('far');
                    } else {
                        s.classList.add('far');
                        s.classList.remove('fas');
                    }
                });
            });
        });
        
        // Feedback Form
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const rating = feedbackRatingInput.value;
            const comment = document.getElementById('feedbackComment').value;
            
            if (rating === '0') {
                alert('Please select a rating');
                return;
            }
            
            // In a real app, this would submit to the backend
            console.log('Feedback submitted:', { rating, comment });
            alert('Thank you for your feedback!');
            feedbackModal.style.display = 'none';
            resetFeedbackForm();
        });
        
        // Close Modal
        closeModalBtn.addEventListener('click', function() {
            feedbackModal.style.display = 'none';
            resetFeedbackForm();
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === feedbackModal) {
                feedbackModal.style.display = 'none';
                resetFeedbackForm();
            }
        });
    }

    // Open Feedback Modal
    function openFeedbackModal(orderId) {
        feedbackModal.style.display = 'flex';
        feedbackForm.dataset.order = orderId;
    }

    // Reset Feedback Form
    function resetFeedbackForm() {
        feedbackRatingInput.value = '0';
        document.getElementById('feedbackComment').value = '';
        
        ratingStars.forEach(star => {
            star.classList.add('far');
            star.classList.remove('fas');
        });
    }

    // Remove from Wishlist
    function removeFromWishlist(itemId) {
        // In a real app, this would call the backend
        const index = wishlistData.findIndex(item => item.id === itemId);
        if (index !== -1) {
            wishlistData.splice(index, 1);
            renderWishlist();
        }
    }

    // Add to Cart
    function addToCart(itemId) {
        // In a real app, this would call the backend
        const item = wishlistData.find(item => item.id === itemId);
        if (item) {
            alert(`${item.name} added to cart!`);
            // Here you would update the cart count in the navbar
        }
    }

    // Initialize the dashboard
    initDashboard();
});