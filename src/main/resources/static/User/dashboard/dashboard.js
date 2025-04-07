document.addEventListener('DOMContentLoaded', function () {
    // User Data (will be replaced with API calls)
    const userData = {
        name: "Mazen Khaled",
        membership: "Premium Member",
        avatar: "../resources/Mazen_Khaled.jpg",
        stats: {
            wardrobeItems: 24,
            wishlistItems: 12,
            recentOrders: 5,
            upcomingFittings: 2
        },
        notifications: 3,
        recentOrders: [
            {
                product: "Classic Wool Suit",
                orderNumber: "RGL-78945",
                status: "Shipped",
                date: "May 15, 2023",
                price: 499.99,
                image: "../Clothes/Classic Wool Suit.jpeg"
            },
            {
                product: "Silk Pocket Square",
                orderNumber: "RGL-78231",
                status: "Processing",
                date: "May 10, 2023",
                price: 49.99,
                image: "../Clothes/Classic Wool Suit.jpeg"
            },
            {
                product: "Leather Dress Shoes",
                orderNumber: "RGL-77654",
                status: "Cancelled",
                date: "Apr 28, 2023",
                price: 299.99,
                image: "../Clothes/Classic Wool Suit.jpeg"
            }
        ],
        suggestions: [
            {
                title: "Summer Linen Collection",
                description: "Perfect for warm weather occasions",
                rating: 4.5,
                reviewCount: 24,
                image: "../Clothes/Cotton Chino Trousers.jpeg"
            },
            {
                title: "Formal Evening Wear",
                description: "Elegant options for special events",
                rating: 4,
                reviewCount: 18,
                image: "../Clothes/Cotton Chino Trousers.jpeg"
            }
        ],
        navigation: [
            { icon: "fa-home", text: "Dashboard", active: true },
            { icon: "fa-tshirt", text: "My Wardrobe" },
            { icon: "fa-heart", text: "Wishlist" },
            { icon: "fa-shopping-bag", text: "Orders" },
            { icon: "fa-calendar-alt", text: "Appointments" },
            { icon: "fa-cog", text: "Settings" }
        ]
    };

    // Initialize dynamic content
    initDynamicContent(userData);

    // Mobile Menu Toggle
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');
    const overlay = document.querySelector('.sidebar-overlay');

    // Debugging logs
    console.log('Elements:', { sidebar, menuToggle, sidebarClose, overlay });

    // Toggle sidebar with menu button
    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        console.log('Menu toggle clicked - current state:', sidebar.classList.contains('active'));
        sidebar.classList.toggle('active');
    });

    // Close sidebar with close button
    sidebarClose.addEventListener('click', function (e) {
        e.stopPropagation();
        console.log('Close button clicked');
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside
    overlay.addEventListener('click', function () {
        console.log('Overlay clicked');
        sidebar.classList.remove('active');
    });

    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            console.log('Escape key pressed');
            sidebar.classList.remove('active');
        }
    });

    // Wishlist button handler
    document.addEventListener('click', function (e) {
        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (wishlistBtn) {
            const icon = wishlistBtn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            wishlistBtn.classList.toggle('active');
        }
    });

    function initDynamicContent(data) {
        // Update user-specific values in static elements
        document.querySelectorAll('.user-name').forEach(element => { element.textContent = data.name; });
        document.querySelector('.notification-badge').textContent = data.notifications;
        document.querySelector('.user-avatar').src = data.avatar;

        // Update stats cards
        document.querySelector('.wardrobe-count').textContent = data.stats.wardrobeItems;
        document.querySelector('.wishlist-count').textContent = data.stats.wishlistItems;
        document.querySelector('.orders-count').textContent = data.stats.recentOrders;
        document.querySelector('.fittings-count').textContent = data.stats.upcomingFittings;

        // Generate dynamic sections
        generateRecentOrders(data.recentOrders);
        generateWardrobeSuggestions(data.suggestions);
    }

    function generateRecentOrders(orders) {
        const ordersGrid = document.querySelector('.orders-grid');

        orders.forEach(order => {
            const orderCard = document.createElement('div');
            orderCard.className = 'order-card';
            orderCard.innerHTML = `
                    <img src="${order.image}" alt="Product" class="order-img">
                    <div class="order-info">
                        <h4>${order.product}</h4>
                        <p>Order #${order.orderNumber}</p>
                        <div class="order-status" style="--status-color: ${getStatusColor(order.status)}">
                            ${order.status}
                        </div>
                    </div>
                    <div class="order-date">
                        <p>${order.date}</p>
                        <p>$${order.price.toFixed(2)}</p>
                    </div>
                `;
            ordersGrid.appendChild(orderCard);
        });
    }

    function generateWardrobeSuggestions(suggestions) {
        const suggestionsGrid = document.querySelector('.suggestions-grid');

        suggestions.forEach(suggestion => {
            const suggestionCard = document.createElement('div');
            suggestionCard.className = 'suggestion-card';
            suggestionCard.innerHTML = `
                    <div class="suggestion-img" style="background-image: url('${suggestion.image}')">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="suggestion-info">
                        <h4>${suggestion.title}</h4>
                        <p>${suggestion.description}</p>
                        <div class="rating">
                            ${generateStarRating(suggestion.rating)}
                            <span>(${suggestion.reviewCount})</span>
                        </div>
                        <a href="#" class="explore-btn">Explore</a>
                    </div>
                `;
            suggestionsGrid.appendChild(suggestionCard);
        });
    }

    // Helper functions
    function getStatusColor(status) {
        const statusColors = {
            'Shipped': 'var(--light-accent)',
            'Processing': 'var(--accent)',
            'Cancelled': '#ff6b6b'
        };
        return statusColors[status] || 'var(--light-accent)';
    }

    function generateStarRating(rating) {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push('<i class="fas fa-star"></i>');
            } else if (i === fullStars && hasHalfStar) {
                stars.push('<i class="fas fa-star-half-alt"></i>');
            } else {
                stars.push('<i class="far fa-star"></i>');
            }
        }
        return stars.join('');
    }
});