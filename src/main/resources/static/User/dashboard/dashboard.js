let currentProductId;

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

    // Mock Data - Replace with API calls later
    const userData = {
        id: 12345,
        name: "Mazen Khaled",
        email: "Mazen-Khaled@example.com",
        phone: "+20 1205843080",
        address: "Egypt",
        joinDate: "January 15, 2025",
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
                        category: "Living Room",
                        originalPrice: 1299.99,
                        salePrice: 1299.99,
                        quantity: 1,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMtds0nwWqgdV-0ufamwXzY9lN7kwGQI-Sg&s",
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
                        originalPrice: 1299.99,
                        salePrice: 599.99,
                        quantity: 1,
                        image: "https://m.media-amazon.com/images/I/81i4N20E85L.jpg",
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
                        category: "Living Room",
                        originalPrice: 1299.99,
                        salePrice: 499.99,
                        quantity: 2,
                        image: "https://cdn20.pamono.com/p/g/1/7/1799564_gxk3w93wvo/mid-century-armchair-in-dusty-pink-boucle-by-henryk-lis-1960s-image-1.jpg",
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
                        category: "Living Room",
                        originalPrice: 1299.99,
                        salePrice: 799.99,
                        quantity: 1,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeD-BiYjvN5gPQphwXBkjUgC8pcyhkqERgkA&s",
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
                        id: 105,
                        name: "Leather Ottoman",
                        category: "Living Room",
                        originalPrice: 1299.99,
                        salePrice: 299.99,
                        quantity: 1,
                        image: "https://cb2.scene7.com/is/image/CB2/TuftedRectSaddleLthrOttmnSHS18_1x1/$web_product_hero$&/240215083539/saddle-leather-tufted-ottoman.jpg",
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
                        category: "Living Room",
                        originalPrice: 1299.99,
                        salePrice: 899.99,
                        quantity: 1,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sI-ksxNfcCBdKZZmNucm4B10tYt1CzmLWg&s",
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

        profileData.forEach((key) => {
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
        const orders = ordersData[type];
        ordersList.innerHTML = "";

        orders.forEach(order => {
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("order-item");

            orderDiv.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-id">${order.id}</div>
                    <div class="order-date">${order.date}</div>
                </div>
                <span class="order-status status-${order.status}">${order.status}</span>
            </div>
            <div class="order-products">
                ${order.products.map((product, i) => `
                    <div style="display:flex; gap:1rem; align-items:center; margin-bottom: 10px; padding-bottom: 1rem; border-bottom: ${i < order.products.length - 1 ? '1px solid #444' : 'none'};">
                        <img src="${product.image}" alt="${product.name}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
                        <div>
                            <div><strong>${product.name}</strong></div>
                            <div>${product.category}</div>
                            <div>Qty: ${product.quantity}</div>
                            <div>Price: $${product.salePrice.toFixed(2)}</div>
                        </div>
                    </div>
                `).join("")}            
            </div>
            <div class="order-total">Total: $${order.total.toFixed(2)}</div>
            <div class="order-actions">
                ${order.canReview ? '<button class="action-btn feedback-btn">Give Feedback</button>' : ""}
                <button class="action-btn reorder-btn">Reorder</button>
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
            // Find the closest order item
            const orderItem = e.target.closest('.order-item');
            const orderId = orderItem.querySelector('.order-id').textContent;

            // Find the order in our data
            let order;
            for (const type in ordersData) {
                order = ordersData[type].find(o => o.id === orderId);
                if (order) break;
            }

            if (order) {
                // Create a modal for product selection
                createProductSelectionModal(order);
            }
        }
    });

    function createProductSelectionModal(order) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Select a product to review</h3>
                <div class="product-selection">
                    ${order.products.map(product => `
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

        // Handle product selection
        modal.querySelectorAll('.product-option').forEach(option => {
            option.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-product-id'));
                modal.remove();
                createReviewForm(productId, order.id);
            });
        });
    }

    function createReviewForm(productId, orderId) {
        currentProductId = productId;

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

        document.body.appendChild(modal);

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

        // Handle form submission
        modal.querySelector('#reviewForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const rating = parseInt(this.rating.value);
            const reviewText = this.reviewText.value;

            if (rating === 0) {
                alert('Please select a rating');
                return;
            }

            // Find the product in all orders
            let productToReview;
            for (const type in ordersData) {
                for (const order of ordersData[type]) {
                    if (order.id === orderId) {
                        productToReview = order.products.find(p => p.id === productId);
                        if (productToReview) break;
                    }
                }
                if (productToReview) break;
            }

            if (productToReview) {
                // Add the new review
                const newReview = {
                    name: userData.name,
                    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
                    rating: rating,
                    text: reviewText
                };

                if (!productToReview.reviews) {
                    productToReview.reviews = [];
                }

                productToReview.reviews.push(newReview);

                // Update the product rating average
                updateProductRating(productToReview);

                // Mark this order as no longer reviewable
                for (const type in ordersData) {
                    const orderIndex = ordersData[type].findIndex(o => o.id === orderId);
                    if (orderIndex !== -1) {
                        ordersData[type][orderIndex].canReview = false;
                        break;
                    }
                }

                // Close the modal
                modal.remove();

                // Re-render the orders to reflect the change
                const activeTab = document.querySelector('.tab-btn.active');
                renderOrders(activeTab.getAttribute('data-tab'));

                alert('Thank you for your review!');
            }
        });
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
    const cartCount = document.querySelector('.cart-count');

    function populateWishlist() {
        const wishlistContainer = document.getElementById('wishlistItems');
        wishlistContainer.innerHTML = '';

        wishlistData.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.dataset.id = item.id;

            // Calculate discount if on sale
            const discountBadge = item.isOnSale
                ? `<span class="discount-badge">-${item.discountPercentage}%</span>`
                : '';

            // Determine which price to show
            const priceToShow = item.isOnSale ? item.salePrice : item.originalPrice;
            const originalPriceDisplay = item.isOnSale
                ? `<span class="original-price">$${item.originalPrice.toFixed(2)}</span>`
                : '';

            wishlistItem.innerHTML = `
            ${discountBadge}
            <img src="${item.image}" alt="${item.name}" class="wishlist-image">
            <div class="wishlist-info">
                <h3 class="wishlist-name">${item.name}</h3>
                <div class="wishlist-price">
                    ${originalPriceDisplay}
                    $${priceToShow.toFixed(2)}
                </div>
                <div class="wishlist-rating">
                    ${generateStarRating(item.rating)}
                    <span>(${item.reviews.length})</span>
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

            // Add click handler to show product details
            wishlistItem.addEventListener('click', function (e) {
                // Don't trigger if clicked on action buttons
                if (!e.target.closest('.wishlist-actions')) {
                    const itemId = parseInt(this.dataset.id);
                    showProductDetails(itemId);
                }
            });
        });

        // Add event listeners for the buttons
        document.querySelectorAll('.wishlist-remove').forEach(button => {
            button.addEventListener('click', function (e) {
                const itemId = parseInt(this.closest('.wishlist-item').dataset.id);
                removeFromWishlist(itemId);
            });
        });

        document.querySelectorAll('.wishlist-add').forEach(button => {
            button.addEventListener('click', function (e) {
                const itemId = parseInt(this.closest('.wishlist-item').dataset.id);
                addToCart(itemId);
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

    function removeFromWishlist(itemId) {
        const index = wishlistData.findIndex(item => item.id === itemId);
        if (index !== -1) {
            wishlistData.splice(index, 1);
            populateWishlist();
            // In a real app, you would also update the server here
            showToast('Item removed from wishlist');
        }
    }

    function addToCart(itemId, quantity = 1) {
        const item = wishlistData.find(item => item.id === itemId);
        if (item) {
            // In a real app, you would add to cart logic here
            console.log(`Added ${quantity} of ${item.name} to cart`);
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
        const product = wishlistData.find(item => item.id === productId);
        if (!product) return;
    
        const popup = document.getElementById('productDetailPopup');
        const mainImage = document.getElementById('popupMainImage');
        const thumbnailsContainer = document.getElementById('popupThumbnails');
        const productName = document.getElementById('popupProductName');
        const productPrice = document.getElementById('popupPrice');
        const productRating = document.getElementById('popupRating');
        const productDescription = document.getElementById('popupDescription');
        const reviewsContainer = document.getElementById('popupReviews');
    
        // Set main product details
        mainImage.src = product.image;
        productName.textContent = product.name;
        
        // Set price with discount if available
        if (product.isOnSale) {
            productPrice.innerHTML = `
                <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            `;
        } else {
            productPrice.innerHTML = `$${product.originalPrice.toFixed(2)}`;
        }
    
        // Set rating
        productRating.innerHTML = `
            ${generateStarRating(product.rating)}
            <span>${product.rating} (${product.reviews.length} reviews)</span>
        `;
    
        // Set description
        productDescription.textContent = product.description;
    
        // Create thumbnails
        thumbnailsContainer.innerHTML = '';
        const allImages = [product.image, ...product.thumbnails];
        allImages.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.alt = `${product.name} thumbnail ${index + 1}`;
            thumb.addEventListener('click', () => {
                mainImage.src = imgSrc;
                // Update active thumbnail
                document.querySelectorAll('#popupThumbnails img').forEach(t => {
                    t.classList.remove('active-thumbnail');
                });
                thumb.classList.add('active-thumbnail');
            });
            if (index === 0) thumb.classList.add('active-thumbnail');
            thumbnailsContainer.appendChild(thumb);
        });
    
        // Create reviews
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
    
        // Quantity selector functionality
        const quantityInput = document.querySelector('.quantity-input');
        document.querySelector('.quantity-minus').addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        document.querySelector('.quantity-plus').addEventListener('click', () => {
            let value = parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
    
        // Add to cart button
        document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
            showToast(`${product.name} (${quantity}) added to cart`);
        });
    
        // Close button
        document.querySelector('.close-popup').addEventListener('click', () => {
            popup.style.display = 'none';
        });

        document.querySelector('.popup-overlay').addEventListener('click', () => {
            popup.style.display = 'none';
        });
    
        // Show the popup
        popup.style.display = 'flex';
    }

    // Initialize the wishlist
    populateWishlist();

    // =====================
    // Popout product
    // =====================

});