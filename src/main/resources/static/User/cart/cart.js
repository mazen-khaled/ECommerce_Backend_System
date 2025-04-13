const userData = {
    id: "USR-78945",
    name: "Mazen Khaled",
    email: "mazen.khaled@example.com",
    phone: "+20 120 584 3080",
    address: "123 Nile Corniche Cairo 11511 Egypt",
    wishlist: [
        'PRD-LVR-SF-001',
        'PRD-LIT-TL-001',
        'PRD-ACC-CK-002'
    ],
    cart: [
        {
            product_id: 'PRD-LVR-SF-001',
            product_quantity: 2,
        },
        {
            product_id: 'PRD-ACC-CK-002',
            product_quantity: 5,
        }
    ],
    orders: [
        {
            order_id: "ORD-2025-101",
            date: "2025-02-15",
            user_id: this.id,
            items: [
                { product_id: 'PRD-OFC-DK-001', quantity: 1, price: 2200 },
                { product_id: 'PRD-OFC-CH-002', quantity: 2, price: 850 }
            ],
            subtotal: 3900,
            shipping: 199,
            tax: 585,
            discount: 0,
            total: 4684,
            payment_method: "Visa •••• 4567",
            status: 'delivered',
            delivery_date: "2025-02-20",
            tracking_number: "EGYPTPOST-CC20250220045",
            canReview: true,
            canReturn: false,
            canCancel: false,
            reason: ""
        },
        {
            order_id: "ORD-2025-107",
            date: "2025-03-10",
            user_id: this.id,
            items: [
                { product_id: 'PRD-KIT-FZ-001', quantity: 1, price: 2799 },
                { product_id: 'PRD-KIT-KS-002', quantity: 1, price: 10999 }
            ],
            subtotal: 13798,
            shipping: 0, // Free shipping for large orders
            tax: 2069.70,
            discount: 500, // Promo code discount
            total: 15367.70,
            payment_method: "PayPal (mazen.khaled@example.com)",
            status: 'delivered',
            delivery_date: "2025-03-18",
            tracking_number: "DHL-EG3456789012",
            canReview: true,
            canReturn: true,
            canCancel: false,
            reason: ""
        },
        {
            order_id: "ORD-2025-102",
            date: "2025-04-05",
            user_id: this.id,
            items: [
                { product_id: 'PRD-KIT-MW-003', quantity: 1, price: 449 }
            ],
            subtotal: 449,
            shipping: 49,
            tax: 67.35,
            discount: 0,
            total: 565.35,
            payment_method: "Visa •••• 4567",
            status: 'processing',
            tracking_number: "ARAMEX-EG7890123456",
            estimated_delivery: "2025-04-12",
            canReview: false,
            canReturn: false,
            canCancel: false,
            reason: ""
        },
        {
            order_id: "ORD-2025-103",
            date: "2025-03-28",
            user_id: this.id,
            items: [
                { product_id: 'PRD-ENT-TV-001', quantity: 1, price: 1599 }
            ],
            subtotal: 1599,
            shipping: 99,
            tax: 239.85,
            discount: 0,
            total: 1937.85,
            payment_method: "Visa •••• 4567",
            status: 'cancelled',
            cancellation_date: "2025-03-29",
            canReview: false,
            canReturn: false,
            canCancel: false,
            reason: "Changed my mind about the purchase"
        }
    ],
    joinDate: "2025-01-15",
    loyaltyPoints: 1250,
    lastLogin: "2025-04-10T14:30:22Z"
};


const products = [
    {
        id: 'PRD-LVR-SF-001',
        name: "Luxury Chesterfield Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 2499,
        salePrice: 1899.99,
        image: "../database-images/livingroom/sofa-2.jpg",
        thumbnails: [
            "../database-images/livingroom/sofa-1.jpg",
            "../database-images/livingroom/sofa-2.jpg",
            "../database-images/livingroom/sofa-3.jpg"
        ],
        description: "Premium full-grain leather Chesterfield sofa with hand-tufted detailing and solid mahogany frame. Includes premium memory foam cushions.",
        rating: 4.8,
        reviews: [
            {
                name: "Alex Johnson",
                date: "2025-04-01",
                rating: 5,
                text: "Exquisite craftsmanship! The leather quality is exceptional."
            },
            {
                name: "Nora Williams",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful statement piece. Very comfortable after breaking in."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 24,
    },
    {
        id: 'PRD-LVR-ST-002',
        name: "Modular Wall Storage System",
        room: "living-room",
        category: "Storage",
        originalPrice: 3200,
        salePrice: 0,
        image: "../database-images/livingroom/storage-2.jpg",
        thumbnails: [
            "../database-images/livingroom/storage-1.jpg",
            "../database-images/livingroom/storage-2.jpg",
            "../database-images/livingroom/storage-3.jpg"
        ],
        description: "Customizable Scandinavian-inspired wall unit with open shelving, glass cabinets, and hidden storage compartments. Made from sustainable oak.",
        rating: 4.7,
        reviews: [
            {
                name: "James Wilson",
                date: "2025-03-15",
                rating: 5,
                text: "Transformed our living room! Endless configuration options."
            },
            {
                name: "Sarah Kim",
                date: "2025-02-28",
                rating: 4,
                text: "Excellent build quality. Assembly took some time but worth it."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LVR-TB-003',
        name: "Marble & Brass Coffee Table",
        room: "living-room",
        category: "Tables",
        originalPrice: 1800,
        salePrice: 0,
        image: "../database-images/livingroom/table-2.jpg",
        thumbnails: [
            "../database-images/livingroom/table-1.jpg",
            "../database-images/livingroom/table-2.jpg"
        ],
        description: "Artisan-crafted Carrara marble top with hand-polished brass legs. Includes built-in magazine rack and tempered glass protection.",
        rating: 4.9,
        reviews: [
            {
                name: "Olivia Martinez",
                date: "2025-04-05",
                rating: 5,
                text: "Stunning centerpiece that gets constant compliments!"
            },
            {
                name: "David Chen",
                date: "2025-03-22",
                rating: 4.8,
                text: "Perfect size for our sectional. The marble is sealed beautifully."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LIT-TL-001',
        name: "Art Deco Crystal Table Lamp",
        room: "lighting",
        category: "Table Lamps",
        originalPrice: 450,
        salePrice: 315,
        image: "../database-images/lighting/table-lamp-2.jpg",
        thumbnails: [
            "../database-images/lighting/table-lamp-1.jpg",
            "../database-images/lighting/table-lamp-2.jpg",
            "../database-images/lighting/table-lamp-3.jpg"
        ],
        description: "Vintage-inspired lamp with hand-cut crystal base and gold leaf detailing. Includes dimmable LED bulb with 3 color temperatures.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophia Rodriguez",
                date: "2025-04-10",
                rating: 5,
                text: "The crystal refracts light beautifully at night. So elegant!"
            },
            {
                name: "Michael Brown",
                date: "2025-03-25",
                rating: 4.8,
                text: "Excellent craftsmanship. Much heavier than expected (in a good way)."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 30,
    },
    {
        id: 'PRD-LIT-CL-002',
        name: "Modern Chandelier",
        room: "lighting",
        category: "Ceiling Lights",
        originalPrice: 1200,
        salePrice: 0,
        image: "../database-images/lighting/ceiling-lamp-1.jpg",
        thumbnails: [
            "../database-images/lighting/ceiling-lamp-1.jpg",
            "../database-images/lighting/ceiling-lamp-2.jpg",
            "../database-images/lighting/ceiling-lamp-3.jpg"
        ],
        description: "Minimalist geometric chandelier with 24K gold plating and hand-blown glass shades. Professional installation recommended.",
        rating: 2.5,
        reviews: [
            {
                name: "Robert Taylor",
                date: "2025-04-01",
                rating: 1,
                text: "Difficult to install and one glass shade arrived cracked."
            },
            {
                name: "Emma Wilson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful when lit but the instructions were unclear."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-DK-001',
        name: "Executive Standing Desk",
        room: "office",
        category: "Desks",
        originalPrice: 2200,
        salePrice: 0,
        image: "../database-images/office/desk-1.jpg",
        thumbnails: [
            "../database-images/office/desk-1.jpg",
            "../database-images/office/desk-2.jpg",
            "../database-images/office/desk-3.jpg"
        ],
        description: "Smart height-adjustable desk with built-in wireless charging, cable management, and eco-certified walnut veneer. Supports up to 350 lbs.",
        rating: 3.6,
        reviews: [
            {
                name: "Daniel Lee",
                date: "2025-04-01",
                rating: 4,
                text: "Great for my home office. The motor is very quiet."
            },
            {
                name: "Jennifer Park",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the wireless charger could be more powerful."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-CH-002',
        name: "Ergonomic Mesh Chair",
        room: "office",
        category: "Chairs",
        originalPrice: 850,
        salePrice: 0,
        image: "../database-images/office/chair-1.jpg",
        thumbnails: [
            "../database-images/office/chair-1.jpg",
            "../database-images/office/chair-2.jpg",
            "../database-images/office/chair-3.jpg"
        ],
        description: "Breathable mesh back with adjustable lumbar support, 4D armrests, and synchronized tilt mechanism. Certified for 24/7 use.",
        rating: 4.2,
        reviews: [
            {
                name: "Thomas Clark",
                date: "2025-04-05",
                rating: 5,
                text: "Saved my back during long work sessions. Worth every penny."
            },
            {
                name: "Lisa Wong",
                date: "2025-03-15",
                rating: 3,
                text: "Comfortable but assembly took over an hour."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-KIT-FZ-001',
        name: "French Door Smart Refrigerator",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 3200,
        salePrice: 2799,
        image: "../database-images/kitchen/freezer-1.jpg",
        thumbnails: [
            "../database-images/kitchen/freezer-1.jpg",
            "../database-images/kitchen/freezer-2.jpg",
        ],
        description: "Energy Star rated 28 cu. ft. smart fridge with dual cooling systems, touch screen controls, and craft ice maker. WiFi enabled.",
        rating: 4.5,
        reviews: [
            {
                name: "William Garcia",
                date: "2025-04-01",
                rating: 5,
                text: "The external water dispenser is a game changer. Super quiet operation."
            },
            {
                name: "Amanda Scott",
                date: "2025-03-20",
                rating: 4,
                text: "Love the app connectivity but fingerprint resistant coating could be better."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12.5,
    },
    {
        id: 'PRD-KIT-KS-002',
        name: "Professional Kitchen Package",
        room: "kitchen",
        category: "Kitchen Systems",
        originalPrice: 12500,
        salePrice: 10999,
        image: "../database-images/kitchen/kitchen-1.jpg",
        thumbnails: [
            "../database-images/kitchen/kitchen-1.jpg",
            "../database-images/kitchen/kitchen-2.jpg",
            "../database-images/kitchen/kitchen-3.jpg"
        ],
        description: "Complete chef's kitchen including 36 gas range, vent hood, dishwasher, and custom cabinetry with soft-close drawers. 10 color options available.",
        rating: 4.7,
        reviews: [
            {
                name: "Chef Marco",
                date: "2025-04-01",
                rating: 5,
                text: "Restaurant-quality performance in a home kitchen. The range is phenomenal."
            },
            {
                name: "Rachel Adams",
                date: "2025-03-20",
                rating: 4,
                text: "Installation team was professional but took longer than estimated."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-KIT-MW-003',
        name: "Convection Microwave Oven",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 550,
        salePrice: 449,
        image: "../database-images/kitchen/microwave-1.jpg",
        thumbnails: [
            "../database-images/kitchen/microwave-1.jpg",
            "../database-images/kitchen/microwave-2.jpg",
        ],
        description: "1.7 cu. ft. smart microwave with inverter technology, 10 power levels, and sensor cooking. Includes air fry and dehydrate functions.",
        rating: 4.3,
        reviews: [
            {
                name: "Kevin Harris",
                date: "2025-04-01",
                rating: 5,
                text: "Replaced my toaster oven and air fryer. Does everything perfectly."
            },
            {
                name: "Nancy White",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the touch controls can be sensitive."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 18.4,
    },
    {
        id: 'PRD-ENT-TV-001',
        name: "Media Console with Fireplace",
        room: "entertainment",
        category: "TV Furniture",
        originalPrice: 1900,
        salePrice: 1599,
        image: "../database-images/entertainment/tv-bench-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-bench-1.jpg",
            "../database-images/entertainment/tv-bench-2.jpg",
        ],
        description: "84 modern media center with integrated electric fireplace, tempered glass doors, and built-in cable management. Holds up to 85 TVs.",
        rating: 4.6,
        reviews: [
            {
                name: "Jason Miller",
                date: "2025-04-01",
                rating: 5,
                text: "The fireplace adds amazing ambiance. Assembly was straightforward."
            },
            {
                name: "Patricia Lewis",
                date: "2025-03-20",
                rating: 4,
                text: "Sturdy construction but the fireplace remote could be better designed."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 15.8,
    },
    {
        id: 'PRD-ENT-ST-002',
        name: "Entertainment Storage System",
        room: "entertainment",
        category: "Storage",
        originalPrice: 2500,
        salePrice: 2199,
        image: "../database-images/entertainment/tv-storage-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-storage-1.jpg",
            "../database-images/entertainment/tv-storage-2.jpg",
            "../database-images/entertainment/tv-storage-3.jpg",
            "../database-images/entertainment/tv-storage-4.jpg",
        ],
        description: "Modular wall unit with adjustable shelves, LED lighting, and ventilated compartments for AV equipment. Customizable configuration.",
        rating: 4.4,
        reviews: [
            {
                name: "Brian Wilson",
                date: "2025-04-01",
                rating: 5,
                text: "Finally a solution that hides all my gaming consoles and looks great!"
            },
            {
                name: "Susan Baker",
                date: "2025-03-20",
                rating: 3,
                text: "Took some time to assemble but worth it for the storage space."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-BED-BD-001',
        name: "King Canopy Bed",
        room: "bedroom",
        category: "Beds",
        originalPrice: 3500,
        salePrice: 2999,
        image: "../database-images/bedroom/bed-1.jpg",
        thumbnails: [
            "../database-images/bedroom/bed-1.jpg",
            "../database-images/bedroom/bed-2.jpg",
            "../database-images/bedroom/bed-3.jpg"
        ],
        description: "Handcrafted four-poster bed from reclaimed teak with upholstered headboard and integrated USB charging ports. Includes underbed lighting.",
        rating: 4.9,
        reviews: [
            {
                name: "Christopher Allen",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely stunning centerpiece for our master bedroom. Excellent craftsmanship."
            },
            {
                name: "Melissa Young",
                date: "2025-03-20",
                rating: 4,
                text: "Took 3 people to assemble but so worth it. Very sturdy."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 14.3,
    },
    {
        id: 'PRD-BED-WD-002',
        name: "Walk-In Wardrobe System",
        room: "bedroom",
        category: "Storage",
        originalPrice: 4200,
        salePrice: 3699,
        image: "../database-images/bedroom/wardrop-1.jpg",
        thumbnails: [
            "../database-images/bedroom/wardrop-1.jpg",
            "../database-images/bedroom/wardrop-2.jpg",
            "../database-images/bedroom/wardrop-3.jpg"
        ],
        description: "Customizable closet system with hanging space, shoe racks, jewelry drawers, and full-length mirror. Includes motion-activated lighting.",
        rating: 4.7,
        reviews: [
            {
                name: "Jessica Turner",
                date: "2025-04-01",
                rating: 5,
                text: "Finally organized my entire wardrobe! The quality is exceptional."
            },
            {
                name: "Richard King",
                date: "2025-03-20",
                rating: 4,
                text: "Professional installation recommended. Took a full day to complete."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 11.9,
    },
    {
        id: 'PRD-BTH-SH-001',
        name: "Rainfall Shower System",
        room: "bathroom",
        category: "Fixtures",
        originalPrice: 1800,
        salePrice: 1499,
        image: "../database-images/bathroom/shawer-1.jpg",
        thumbnails: [
            "../database-images/bathroom/shawer-1.jpg",
            "../database-images/bathroom/shawer-2.jpg",
            "../database-images/bathroom/shawer-3.jpg"
        ],
        description: "Luxury shower system with 12 rainfall head, 6 body jets, and thermostatic control. Includes handheld wand and digital temperature display.",
        rating: 4.8,
        reviews: [
            {
                name: "Daniel Carter",
                date: "2025-04-01",
                rating: 5,
                text: "Feels like a spa every morning. Installation was professional and quick."
            },
            {
                name: "Emily Phillips",
                date: "2025-03-20",
                rating: 4,
                text: "Water pressure is amazing but make sure your plumbing can handle it."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 16.7,
    },
    {
        id: 'PRD-BTH-VN-002',
        name: "Floating Vanity Set",
        room: "bathroom",
        category: "Bathroom Furniture",
        originalPrice: 2200,
        salePrice: 1899,
        image: "../database-images/bathroom/Wash-stnd-1.jpg",
        thumbnails: [
            "../database-images/bathroom/Wash-stnd-1.jpg",
            "../database-images/bathroom/Wash-stnd-2.jpg"
        ],
        description: "Modern floating vanity with quartz countertop, integrated sink, and soft-close drawers. Includes LED mirror with anti-fog and Bluetooth.",
        rating: 4.5,
        reviews: [
            {
                name: "Matthew Green",
                date: "2025-04-01",
                rating: 5,
                text: "Transformed our small bathroom. The storage is deceptively spacious."
            },
            {
                name: "Laura Hall",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful design but the mirror installation required professional help."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 13.7,
    },
    {
        id: 'PRD-ACC-CD-001',
        name: "Handmade Crystal Candlesticks",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 350,
        salePrice: 279,
        image: "../database-images/accessories&decoration/candel-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/candel-1.jpg",
            "../database-images/accessories&decoration/candel-2.jpg"
        ],
        description: "Set of 3 lead crystal candlesticks with 24K gold accents. Each piece is hand-cut by master artisans. Includes velvet storage bags.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophie Martin",
                date: "2025-04-01",
                rating: 5,
                text: "Heirloom quality pieces that catch the light beautifully."
            },
            {
                name: "Andrew Nelson",
                date: "2025-03-20",
                rating: 4,
                text: "More substantial in person than photos show. Excellent craftsmanship."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.3,
    },
    {
        id: 'PRD-ACC-CK-002',
        name: "Designer Wall Clock",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 450,
        salePrice: 359,
        image: "../database-images/accessories&decoration/clock-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/clock-1.jpg",
            "../database-images/accessories&decoration/clock-2.jpg"
        ],
        description: "Oversized 36 minimalist clock with silent sweep movement and solid walnut frame. Includes built-in level for perfect hanging.",
        rating: 4.7,
        reviews: [
            {
                name: "Ryan Cooper",
                date: "2025-04-01",
                rating: 5,
                text: "Statement piece that ties our living room together. Completely silent."
            },
            {
                name: "Hannah Ward",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship but the hanging hardware could be sturdier."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.2,
    },
    {
        id: 'PRD-ACC-FR-003',
        name: "Gallery Picture Frame Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 280,
        salePrice: 199,
        image: "../database-images/accessories&decoration/frame-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/frame-1.jpg",
            "../database-images/accessories&decoration/frame-2.jpg"
        ],
        description: "Set of 5 museum-quality frames with UV-protective acrylic and acid-free mats. Includes multiple layout templates for perfect gallery walls.",
        rating: 4.6,
        reviews: [
            {
                name: "Ethan Rivera",
                date: "2025-04-01",
                rating: 5,
                text: "Finally frames worthy of our wedding photos. The quality is exceptional."
            },
            {
                name: "Zoe Peterson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful frames but the hanging system takes some getting used to."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 28.9,
    },
    {
        id: 'PRD-ACC-PP-004',
        name: "Designer Ceramic Planter Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 320,
        salePrice: 249,
        image: "../database-images/accessories&decoration/potted-plant-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/potted-plant-1.jpg",
            "../database-images/accessories&decoration/potted-plant-2.jpg"
        ],
        description: "Hand-glazed ceramic planters with drainage systems and matching saucers. Set of 3 in varying sizes. Includes care guide for indoor plants.",
        rating: 4.8,
        reviews: [
            {
                name: "Lucas Brooks",
                date: "2025-04-01",
                rating: 5,
                text: "Stunning colors that complement our mid-century decor perfectly."
            },
            {
                name: "Chloe Bennett",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship. The drainage system works perfectly."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 22.2,
    },
    {
        id: 'PRD-LVR-SF-001',
        name: "Luxury Chesterfield Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 2499,
        salePrice: 1899.99,
        image: "../database-images/livingroom/sofa-2.jpg",
        thumbnails: [
            "../database-images/livingroom/sofa-1.jpg",
            "../database-images/livingroom/sofa-2.jpg",
            "../database-images/livingroom/sofa-3.jpg"
        ],
        description: "Premium full-grain leather Chesterfield sofa with hand-tufted detailing and solid mahogany frame. Includes premium memory foam cushions.",
        rating: 4.8,
        reviews: [
            {
                name: "Alex Johnson",
                date: "2025-04-01",
                rating: 5,
                text: "Exquisite craftsmanship! The leather quality is exceptional."
            },
            {
                name: "Nora Williams",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful statement piece. Very comfortable after breaking in."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 24,
    },
    {
        id: 'PRD-LVR-ST-002',
        name: "Modular Wall Storage System",
        room: "living-room",
        category: "Storage",
        originalPrice: 3200,
        salePrice: 0,
        image: "../database-images/livingroom/storage-2.jpg",
        thumbnails: [
            "../database-images/livingroom/storage-1.jpg",
            "../database-images/livingroom/storage-2.jpg",
            "../database-images/livingroom/storage-3.jpg"
        ],
        description: "Customizable Scandinavian-inspired wall unit with open shelving, glass cabinets, and hidden storage compartments. Made from sustainable oak.",
        rating: 4.7,
        reviews: [
            {
                name: "James Wilson",
                date: "2025-03-15",
                rating: 5,
                text: "Transformed our living room! Endless configuration options."
            },
            {
                name: "Sarah Kim",
                date: "2025-02-28",
                rating: 4,
                text: "Excellent build quality. Assembly took some time but worth it."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LVR-TB-003',
        name: "Marble & Brass Coffee Table",
        room: "living-room",
        category: "Tables",
        originalPrice: 1800,
        salePrice: 0,
        image: "../database-images/livingroom/table-2.jpg",
        thumbnails: [
            "../database-images/livingroom/table-1.jpg",
            "../database-images/livingroom/table-2.jpg"
        ],
        description: "Artisan-crafted Carrara marble top with hand-polished brass legs. Includes built-in magazine rack and tempered glass protection.",
        rating: 4.9,
        reviews: [
            {
                name: "Olivia Martinez",
                date: "2025-04-05",
                rating: 5,
                text: "Stunning centerpiece that gets constant compliments!"
            },
            {
                name: "David Chen",
                date: "2025-03-22",
                rating: 4.8,
                text: "Perfect size for our sectional. The marble is sealed beautifully."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LIT-TL-001',
        name: "Art Deco Crystal Table Lamp",
        room: "lighting",
        category: "Table Lamps",
        originalPrice: 450,
        salePrice: 315,
        image: "../database-images/lighting/table-lamp-2.jpg",
        thumbnails: [
            "../database-images/lighting/table-lamp-1.jpg",
            "../database-images/lighting/table-lamp-2.jpg",
            "../database-images/lighting/table-lamp-3.jpg"
        ],
        description: "Vintage-inspired lamp with hand-cut crystal base and gold leaf detailing. Includes dimmable LED bulb with 3 color temperatures.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophia Rodriguez",
                date: "2025-04-10",
                rating: 5,
                text: "The crystal refracts light beautifully at night. So elegant!"
            },
            {
                name: "Michael Brown",
                date: "2025-03-25",
                rating: 4.8,
                text: "Excellent craftsmanship. Much heavier than expected (in a good way)."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 30,
    },
    {
        id: 'PRD-LIT-CL-002',
        name: "Modern Chandelier",
        room: "lighting",
        category: "Ceiling Lights",
        originalPrice: 1200,
        salePrice: 0,
        image: "../database-images/lighting/ceiling-lamp-1.jpg",
        thumbnails: [
            "../database-images/lighting/ceiling-lamp-1.jpg",
            "../database-images/lighting/ceiling-lamp-2.jpg",
            "../database-images/lighting/ceiling-lamp-3.jpg"
        ],
        description: "Minimalist geometric chandelier with 24K gold plating and hand-blown glass shades. Professional installation recommended.",
        rating: 2.5,
        reviews: [
            {
                name: "Robert Taylor",
                date: "2025-04-01",
                rating: 1,
                text: "Difficult to install and one glass shade arrived cracked."
            },
            {
                name: "Emma Wilson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful when lit but the instructions were unclear."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-DK-001',
        name: "Executive Standing Desk",
        room: "office",
        category: "Desks",
        originalPrice: 2200,
        salePrice: 0,
        image: "../database-images/office/desk-1.jpg",
        thumbnails: [
            "../database-images/office/desk-1.jpg",
            "../database-images/office/desk-2.jpg",
            "../database-images/office/desk-3.jpg"
        ],
        description: "Smart height-adjustable desk with built-in wireless charging, cable management, and eco-certified walnut veneer. Supports up to 350 lbs.",
        rating: 3.6,
        reviews: [
            {
                name: "Daniel Lee",
                date: "2025-04-01",
                rating: 4,
                text: "Great for my home office. The motor is very quiet."
            },
            {
                name: "Jennifer Park",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the wireless charger could be more powerful."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-CH-002',
        name: "Ergonomic Mesh Chair",
        room: "office",
        category: "Chairs",
        originalPrice: 850,
        salePrice: 0,
        image: "../database-images/office/chair-1.jpg",
        thumbnails: [
            "../database-images/office/chair-1.jpg",
            "../database-images/office/chair-2.jpg",
            "../database-images/office/chair-3.jpg"
        ],
        description: "Breathable mesh back with adjustable lumbar support, 4D armrests, and synchronized tilt mechanism. Certified for 24/7 use.",
        rating: 4.2,
        reviews: [
            {
                name: "Thomas Clark",
                date: "2025-04-05",
                rating: 5,
                text: "Saved my back during long work sessions. Worth every penny."
            },
            {
                name: "Lisa Wong",
                date: "2025-03-15",
                rating: 3,
                text: "Comfortable but assembly took over an hour."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-KIT-FZ-001',
        name: "French Door Smart Refrigerator",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 3200,
        salePrice: 2799,
        image: "../database-images/kitchen/freezer-1.jpg",
        thumbnails: [
            "../database-images/kitchen/freezer-1.jpg",
            "../database-images/kitchen/freezer-2.jpg",
        ],
        description: "Energy Star rated 28 cu. ft. smart fridge with dual cooling systems, touch screen controls, and craft ice maker. WiFi enabled.",
        rating: 4.5,
        reviews: [
            {
                name: "William Garcia",
                date: "2025-04-01",
                rating: 5,
                text: "The external water dispenser is a game changer. Super quiet operation."
            },
            {
                name: "Amanda Scott",
                date: "2025-03-20",
                rating: 4,
                text: "Love the app connectivity but fingerprint resistant coating could be better."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12.5,
    },
    {
        id: 'PRD-KIT-KS-002',
        name: "Professional Kitchen Package",
        room: "kitchen",
        category: "Kitchen Systems",
        originalPrice: 12500,
        salePrice: 10999,
        image: "../database-images/kitchen/kitchen-1.jpg",
        thumbnails: [
            "../database-images/kitchen/kitchen-1.jpg",
            "../database-images/kitchen/kitchen-2.jpg",
            "../database-images/kitchen/kitchen-3.jpg"
        ],
        description: "Complete chef's kitchen including 36 gas range, vent hood, dishwasher, and custom cabinetry with soft-close drawers. 10 color options available.",
        rating: 4.7,
        reviews: [
            {
                name: "Chef Marco",
                date: "2025-04-01",
                rating: 5,
                text: "Restaurant-quality performance in a home kitchen. The range is phenomenal."
            },
            {
                name: "Rachel Adams",
                date: "2025-03-20",
                rating: 4,
                text: "Installation team was professional but took longer than estimated."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-KIT-MW-003',
        name: "Convection Microwave Oven",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 550,
        salePrice: 449,
        image: "../database-images/kitchen/microwave-1.jpg",
        thumbnails: [
            "../database-images/kitchen/microwave-1.jpg",
            "../database-images/kitchen/microwave-2.jpg",
        ],
        description: "1.7 cu. ft. smart microwave with inverter technology, 10 power levels, and sensor cooking. Includes air fry and dehydrate functions.",
        rating: 4.3,
        reviews: [
            {
                name: "Kevin Harris",
                date: "2025-04-01",
                rating: 5,
                text: "Replaced my toaster oven and air fryer. Does everything perfectly."
            },
            {
                name: "Nancy White",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the touch controls can be sensitive."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 18.4,
    },
    {
        id: 'PRD-ENT-TV-001',
        name: "Media Console with Fireplace",
        room: "entertainment",
        category: "TV Furniture",
        originalPrice: 1900,
        salePrice: 1599,
        image: "../database-images/entertainment/tv-bench-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-bench-1.jpg",
            "../database-images/entertainment/tv-bench-2.jpg",
        ],
        description: "84 modern media center with integrated electric fireplace, tempered glass doors, and built-in cable management. Holds up to 85 TVs.",
        rating: 4.6,
        reviews: [
            {
                name: "Jason Miller",
                date: "2025-04-01",
                rating: 5,
                text: "The fireplace adds amazing ambiance. Assembly was straightforward."
            },
            {
                name: "Patricia Lewis",
                date: "2025-03-20",
                rating: 4,
                text: "Sturdy construction but the fireplace remote could be better designed."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 15.8,
    },
    {
        id: 'PRD-ENT-ST-002',
        name: "Entertainment Storage System",
        room: "entertainment",
        category: "Storage",
        originalPrice: 2500,
        salePrice: 2199,
        image: "../database-images/entertainment/tv-storage-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-storage-1.jpg",
            "../database-images/entertainment/tv-storage-2.jpg",
            "../database-images/entertainment/tv-storage-3.jpg",
            "../database-images/entertainment/tv-storage-4.jpg",
        ],
        description: "Modular wall unit with adjustable shelves, LED lighting, and ventilated compartments for AV equipment. Customizable configuration.",
        rating: 4.4,
        reviews: [
            {
                name: "Brian Wilson",
                date: "2025-04-01",
                rating: 5,
                text: "Finally a solution that hides all my gaming consoles and looks great!"
            },
            {
                name: "Susan Baker",
                date: "2025-03-20",
                rating: 3,
                text: "Took some time to assemble but worth it for the storage space."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-BED-BD-001',
        name: "King Canopy Bed",
        room: "bedroom",
        category: "Beds",
        originalPrice: 3500,
        salePrice: 2999,
        image: "../database-images/bedroom/bed-1.jpg",
        thumbnails: [
            "../database-images/bedroom/bed-1.jpg",
            "../database-images/bedroom/bed-2.jpg",
            "../database-images/bedroom/bed-3.jpg"
        ],
        description: "Handcrafted four-poster bed from reclaimed teak with upholstered headboard and integrated USB charging ports. Includes underbed lighting.",
        rating: 4.9,
        reviews: [
            {
                name: "Christopher Allen",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely stunning centerpiece for our master bedroom. Excellent craftsmanship."
            },
            {
                name: "Melissa Young",
                date: "2025-03-20",
                rating: 4,
                text: "Took 3 people to assemble but so worth it. Very sturdy."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 14.3,
    },
    {
        id: 'PRD-BED-WD-002',
        name: "Walk-In Wardrobe System",
        room: "bedroom",
        category: "Storage",
        originalPrice: 4200,
        salePrice: 3699,
        image: "../database-images/bedroom/wardrop-1.jpg",
        thumbnails: [
            "../database-images/bedroom/wardrop-1.jpg",
            "../database-images/bedroom/wardrop-2.jpg",
            "../database-images/bedroom/wardrop-3.jpg"
        ],
        description: "Customizable closet system with hanging space, shoe racks, jewelry drawers, and full-length mirror. Includes motion-activated lighting.",
        rating: 4.7,
        reviews: [
            {
                name: "Jessica Turner",
                date: "2025-04-01",
                rating: 5,
                text: "Finally organized my entire wardrobe! The quality is exceptional."
            },
            {
                name: "Richard King",
                date: "2025-03-20",
                rating: 4,
                text: "Professional installation recommended. Took a full day to complete."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 11.9,
    },
    {
        id: 'PRD-BTH-SH-001',
        name: "Rainfall Shower System",
        room: "bathroom",
        category: "Fixtures",
        originalPrice: 1800,
        salePrice: 1499,
        image: "../database-images/bathroom/shawer-1.jpg",
        thumbnails: [
            "../database-images/bathroom/shawer-1.jpg",
            "../database-images/bathroom/shawer-2.jpg",
            "../database-images/bathroom/shawer-3.jpg"
        ],
        description: "Luxury shower system with 12 rainfall head, 6 body jets, and thermostatic control. Includes handheld wand and digital temperature display.",
        rating: 4.8,
        reviews: [
            {
                name: "Daniel Carter",
                date: "2025-04-01",
                rating: 5,
                text: "Feels like a spa every morning. Installation was professional and quick."
            },
            {
                name: "Emily Phillips",
                date: "2025-03-20",
                rating: 4,
                text: "Water pressure is amazing but make sure your plumbing can handle it."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 16.7,
    },
    {
        id: 'PRD-BTH-VN-002',
        name: "Floating Vanity Set",
        room: "bathroom",
        category: "Bathroom Furniture",
        originalPrice: 2200,
        salePrice: 1899,
        image: "../database-images/bathroom/Wash-stnd-1.jpg",
        thumbnails: [
            "../database-images/bathroom/Wash-stnd-1.jpg",
            "../database-images/bathroom/Wash-stnd-2.jpg"
        ],
        description: "Modern floating vanity with quartz countertop, integrated sink, and soft-close drawers. Includes LED mirror with anti-fog and Bluetooth.",
        rating: 4.5,
        reviews: [
            {
                name: "Matthew Green",
                date: "2025-04-01",
                rating: 5,
                text: "Transformed our small bathroom. The storage is deceptively spacious."
            },
            {
                name: "Laura Hall",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful design but the mirror installation required professional help."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 13.7,
    },
    {
        id: 'PRD-ACC-CD-001',
        name: "Handmade Crystal Candlesticks",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 350,
        salePrice: 279,
        image: "../database-images/accessories&decoration/candel-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/candel-1.jpg",
            "../database-images/accessories&decoration/candel-2.jpg"
        ],
        description: "Set of 3 lead crystal candlesticks with 24K gold accents. Each piece is hand-cut by master artisans. Includes velvet storage bags.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophie Martin",
                date: "2025-04-01",
                rating: 5,
                text: "Heirloom quality pieces that catch the light beautifully."
            },
            {
                name: "Andrew Nelson",
                date: "2025-03-20",
                rating: 4,
                text: "More substantial in person than photos show. Excellent craftsmanship."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.3,
    },
    {
        id: 'PRD-ACC-CK-002',
        name: "Designer Wall Clock",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 450,
        salePrice: 359,
        image: "../database-images/accessories&decoration/clock-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/clock-1.jpg",
            "../database-images/accessories&decoration/clock-2.jpg"
        ],
        description: "Oversized 36 minimalist clock with silent sweep movement and solid walnut frame. Includes built-in level for perfect hanging.",
        rating: 4.7,
        reviews: [
            {
                name: "Ryan Cooper",
                date: "2025-04-01",
                rating: 5,
                text: "Statement piece that ties our living room together. Completely silent."
            },
            {
                name: "Hannah Ward",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship but the hanging hardware could be sturdier."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.2,
    },
    {
        id: 'PRD-ACC-FR-003',
        name: "Gallery Picture Frame Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 280,
        salePrice: 199,
        image: "../database-images/accessories&decoration/frame-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/frame-1.jpg",
            "../database-images/accessories&decoration/frame-2.jpg"
        ],
        description: "Set of 5 museum-quality frames with UV-protective acrylic and acid-free mats. Includes multiple layout templates for perfect gallery walls.",
        rating: 4.6,
        reviews: [
            {
                name: "Ethan Rivera",
                date: "2025-04-01",
                rating: 5,
                text: "Finally frames worthy of our wedding photos. The quality is exceptional."
            },
            {
                name: "Zoe Peterson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful frames but the hanging system takes some getting used to."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 28.9,
    },
    {
        id: 'PRD-ACC-PP-004',
        name: "Designer Ceramic Planter Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 320,
        salePrice: 249,
        image: "../database-images/accessories&decoration/potted-plant-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/potted-plant-1.jpg",
            "../database-images/accessories&decoration/potted-plant-2.jpg"
        ],
        description: "Hand-glazed ceramic planters with drainage systems and matching saucers. Set of 3 in varying sizes. Includes care guide for indoor plants.",
        rating: 4.8,
        reviews: [
            {
                name: "Lucas Brooks",
                date: "2025-04-01",
                rating: 5,
                text: "Stunning colors that complement our mid-century decor perfectly."
            },
            {
                name: "Chloe Bennett",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship. The drainage system works perfectly."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 22.2,
    },
    {
        id: 'PRD-LVR-SF-001',
        name: "Luxury Chesterfield Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 2499,
        salePrice: 1899.99,
        image: "../database-images/livingroom/sofa-2.jpg",
        thumbnails: [
            "../database-images/livingroom/sofa-1.jpg",
            "../database-images/livingroom/sofa-2.jpg",
            "../database-images/livingroom/sofa-3.jpg"
        ],
        description: "Premium full-grain leather Chesterfield sofa with hand-tufted detailing and solid mahogany frame. Includes premium memory foam cushions.",
        rating: 4.8,
        reviews: [
            {
                name: "Alex Johnson",
                date: "2025-04-01",
                rating: 5,
                text: "Exquisite craftsmanship! The leather quality is exceptional."
            },
            {
                name: "Nora Williams",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful statement piece. Very comfortable after breaking in."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 24,
    },
    {
        id: 'PRD-LVR-ST-002',
        name: "Modular Wall Storage System",
        room: "living-room",
        category: "Storage",
        originalPrice: 3200,
        salePrice: 0,
        image: "../database-images/livingroom/storage-2.jpg",
        thumbnails: [
            "../database-images/livingroom/storage-1.jpg",
            "../database-images/livingroom/storage-2.jpg",
            "../database-images/livingroom/storage-3.jpg"
        ],
        description: "Customizable Scandinavian-inspired wall unit with open shelving, glass cabinets, and hidden storage compartments. Made from sustainable oak.",
        rating: 4.7,
        reviews: [
            {
                name: "James Wilson",
                date: "2025-03-15",
                rating: 5,
                text: "Transformed our living room! Endless configuration options."
            },
            {
                name: "Sarah Kim",
                date: "2025-02-28",
                rating: 4,
                text: "Excellent build quality. Assembly took some time but worth it."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LVR-TB-003',
        name: "Marble & Brass Coffee Table",
        room: "living-room",
        category: "Tables",
        originalPrice: 1800,
        salePrice: 0,
        image: "../database-images/livingroom/table-2.jpg",
        thumbnails: [
            "../database-images/livingroom/table-1.jpg",
            "../database-images/livingroom/table-2.jpg"
        ],
        description: "Artisan-crafted Carrara marble top with hand-polished brass legs. Includes built-in magazine rack and tempered glass protection.",
        rating: 4.9,
        reviews: [
            {
                name: "Olivia Martinez",
                date: "2025-04-05",
                rating: 5,
                text: "Stunning centerpiece that gets constant compliments!"
            },
            {
                name: "David Chen",
                date: "2025-03-22",
                rating: 4.8,
                text: "Perfect size for our sectional. The marble is sealed beautifully."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LIT-TL-001',
        name: "Art Deco Crystal Table Lamp",
        room: "lighting",
        category: "Table Lamps",
        originalPrice: 450,
        salePrice: 315,
        image: "../database-images/lighting/table-lamp-2.jpg",
        thumbnails: [
            "../database-images/lighting/table-lamp-1.jpg",
            "../database-images/lighting/table-lamp-2.jpg",
            "../database-images/lighting/table-lamp-3.jpg"
        ],
        description: "Vintage-inspired lamp with hand-cut crystal base and gold leaf detailing. Includes dimmable LED bulb with 3 color temperatures.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophia Rodriguez",
                date: "2025-04-10",
                rating: 5,
                text: "The crystal refracts light beautifully at night. So elegant!"
            },
            {
                name: "Michael Brown",
                date: "2025-03-25",
                rating: 4.8,
                text: "Excellent craftsmanship. Much heavier than expected (in a good way)."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 30,
    },
    {
        id: 'PRD-LIT-CL-002',
        name: "Modern Chandelier",
        room: "lighting",
        category: "Ceiling Lights",
        originalPrice: 1200,
        salePrice: 0,
        image: "../database-images/lighting/ceiling-lamp-1.jpg",
        thumbnails: [
            "../database-images/lighting/ceiling-lamp-1.jpg",
            "../database-images/lighting/ceiling-lamp-2.jpg",
            "../database-images/lighting/ceiling-lamp-3.jpg"
        ],
        description: "Minimalist geometric chandelier with 24K gold plating and hand-blown glass shades. Professional installation recommended.",
        rating: 2.5,
        reviews: [
            {
                name: "Robert Taylor",
                date: "2025-04-01",
                rating: 1,
                text: "Difficult to install and one glass shade arrived cracked."
            },
            {
                name: "Emma Wilson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful when lit but the instructions were unclear."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-DK-001',
        name: "Executive Standing Desk",
        room: "office",
        category: "Desks",
        originalPrice: 2200,
        salePrice: 0,
        image: "../database-images/office/desk-1.jpg",
        thumbnails: [
            "../database-images/office/desk-1.jpg",
            "../database-images/office/desk-2.jpg",
            "../database-images/office/desk-3.jpg"
        ],
        description: "Smart height-adjustable desk with built-in wireless charging, cable management, and eco-certified walnut veneer. Supports up to 350 lbs.",
        rating: 3.6,
        reviews: [
            {
                name: "Daniel Lee",
                date: "2025-04-01",
                rating: 4,
                text: "Great for my home office. The motor is very quiet."
            },
            {
                name: "Jennifer Park",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the wireless charger could be more powerful."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-CH-002',
        name: "Ergonomic Mesh Chair",
        room: "office",
        category: "Chairs",
        originalPrice: 850,
        salePrice: 0,
        image: "../database-images/office/chair-1.jpg",
        thumbnails: [
            "../database-images/office/chair-1.jpg",
            "../database-images/office/chair-2.jpg",
            "../database-images/office/chair-3.jpg"
        ],
        description: "Breathable mesh back with adjustable lumbar support, 4D armrests, and synchronized tilt mechanism. Certified for 24/7 use.",
        rating: 4.2,
        reviews: [
            {
                name: "Thomas Clark",
                date: "2025-04-05",
                rating: 5,
                text: "Saved my back during long work sessions. Worth every penny."
            },
            {
                name: "Lisa Wong",
                date: "2025-03-15",
                rating: 3,
                text: "Comfortable but assembly took over an hour."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-KIT-FZ-001',
        name: "French Door Smart Refrigerator",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 3200,
        salePrice: 2799,
        image: "../database-images/kitchen/freezer-1.jpg",
        thumbnails: [
            "../database-images/kitchen/freezer-1.jpg",
            "../database-images/kitchen/freezer-2.jpg",
        ],
        description: "Energy Star rated 28 cu. ft. smart fridge with dual cooling systems, touch screen controls, and craft ice maker. WiFi enabled.",
        rating: 4.5,
        reviews: [
            {
                name: "William Garcia",
                date: "2025-04-01",
                rating: 5,
                text: "The external water dispenser is a game changer. Super quiet operation."
            },
            {
                name: "Amanda Scott",
                date: "2025-03-20",
                rating: 4,
                text: "Love the app connectivity but fingerprint resistant coating could be better."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12.5,
    },
    {
        id: 'PRD-KIT-KS-002',
        name: "Professional Kitchen Package",
        room: "kitchen",
        category: "Kitchen Systems",
        originalPrice: 12500,
        salePrice: 10999,
        image: "../database-images/kitchen/kitchen-1.jpg",
        thumbnails: [
            "../database-images/kitchen/kitchen-1.jpg",
            "../database-images/kitchen/kitchen-2.jpg",
            "../database-images/kitchen/kitchen-3.jpg"
        ],
        description: "Complete chef's kitchen including 36 gas range, vent hood, dishwasher, and custom cabinetry with soft-close drawers. 10 color options available.",
        rating: 4.7,
        reviews: [
            {
                name: "Chef Marco",
                date: "2025-04-01",
                rating: 5,
                text: "Restaurant-quality performance in a home kitchen. The range is phenomenal."
            },
            {
                name: "Rachel Adams",
                date: "2025-03-20",
                rating: 4,
                text: "Installation team was professional but took longer than estimated."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-KIT-MW-003',
        name: "Convection Microwave Oven",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 550,
        salePrice: 449,
        image: "../database-images/kitchen/microwave-1.jpg",
        thumbnails: [
            "../database-images/kitchen/microwave-1.jpg",
            "../database-images/kitchen/microwave-2.jpg",
        ],
        description: "1.7 cu. ft. smart microwave with inverter technology, 10 power levels, and sensor cooking. Includes air fry and dehydrate functions.",
        rating: 4.3,
        reviews: [
            {
                name: "Kevin Harris",
                date: "2025-04-01",
                rating: 5,
                text: "Replaced my toaster oven and air fryer. Does everything perfectly."
            },
            {
                name: "Nancy White",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the touch controls can be sensitive."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 18.4,
    },
    {
        id: 'PRD-ENT-TV-001',
        name: "Media Console with Fireplace",
        room: "entertainment",
        category: "TV Furniture",
        originalPrice: 1900,
        salePrice: 1599,
        image: "../database-images/entertainment/tv-bench-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-bench-1.jpg",
            "../database-images/entertainment/tv-bench-2.jpg",
        ],
        description: "84 modern media center with integrated electric fireplace, tempered glass doors, and built-in cable management. Holds up to 85 TVs.",
        rating: 4.6,
        reviews: [
            {
                name: "Jason Miller",
                date: "2025-04-01",
                rating: 5,
                text: "The fireplace adds amazing ambiance. Assembly was straightforward."
            },
            {
                name: "Patricia Lewis",
                date: "2025-03-20",
                rating: 4,
                text: "Sturdy construction but the fireplace remote could be better designed."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 15.8,
    },
    {
        id: 'PRD-ENT-ST-002',
        name: "Entertainment Storage System",
        room: "entertainment",
        category: "Storage",
        originalPrice: 2500,
        salePrice: 2199,
        image: "../database-images/entertainment/tv-storage-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-storage-1.jpg",
            "../database-images/entertainment/tv-storage-2.jpg",
            "../database-images/entertainment/tv-storage-3.jpg",
            "../database-images/entertainment/tv-storage-4.jpg",
        ],
        description: "Modular wall unit with adjustable shelves, LED lighting, and ventilated compartments for AV equipment. Customizable configuration.",
        rating: 4.4,
        reviews: [
            {
                name: "Brian Wilson",
                date: "2025-04-01",
                rating: 5,
                text: "Finally a solution that hides all my gaming consoles and looks great!"
            },
            {
                name: "Susan Baker",
                date: "2025-03-20",
                rating: 3,
                text: "Took some time to assemble but worth it for the storage space."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-BED-BD-001',
        name: "King Canopy Bed",
        room: "bedroom",
        category: "Beds",
        originalPrice: 3500,
        salePrice: 2999,
        image: "../database-images/bedroom/bed-1.jpg",
        thumbnails: [
            "../database-images/bedroom/bed-1.jpg",
            "../database-images/bedroom/bed-2.jpg",
            "../database-images/bedroom/bed-3.jpg"
        ],
        description: "Handcrafted four-poster bed from reclaimed teak with upholstered headboard and integrated USB charging ports. Includes underbed lighting.",
        rating: 4.9,
        reviews: [
            {
                name: "Christopher Allen",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely stunning centerpiece for our master bedroom. Excellent craftsmanship."
            },
            {
                name: "Melissa Young",
                date: "2025-03-20",
                rating: 4,
                text: "Took 3 people to assemble but so worth it. Very sturdy."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 14.3,
    },
    {
        id: 'PRD-BED-WD-002',
        name: "Walk-In Wardrobe System",
        room: "bedroom",
        category: "Storage",
        originalPrice: 4200,
        salePrice: 3699,
        image: "../database-images/bedroom/wardrop-1.jpg",
        thumbnails: [
            "../database-images/bedroom/wardrop-1.jpg",
            "../database-images/bedroom/wardrop-2.jpg",
            "../database-images/bedroom/wardrop-3.jpg"
        ],
        description: "Customizable closet system with hanging space, shoe racks, jewelry drawers, and full-length mirror. Includes motion-activated lighting.",
        rating: 4.7,
        reviews: [
            {
                name: "Jessica Turner",
                date: "2025-04-01",
                rating: 5,
                text: "Finally organized my entire wardrobe! The quality is exceptional."
            },
            {
                name: "Richard King",
                date: "2025-03-20",
                rating: 4,
                text: "Professional installation recommended. Took a full day to complete."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 11.9,
    },
    {
        id: 'PRD-BTH-SH-001',
        name: "Rainfall Shower System",
        room: "bathroom",
        category: "Fixtures",
        originalPrice: 1800,
        salePrice: 1499,
        image: "../database-images/bathroom/shawer-1.jpg",
        thumbnails: [
            "../database-images/bathroom/shawer-1.jpg",
            "../database-images/bathroom/shawer-2.jpg",
            "../database-images/bathroom/shawer-3.jpg"
        ],
        description: "Luxury shower system with 12 rainfall head, 6 body jets, and thermostatic control. Includes handheld wand and digital temperature display.",
        rating: 4.8,
        reviews: [
            {
                name: "Daniel Carter",
                date: "2025-04-01",
                rating: 5,
                text: "Feels like a spa every morning. Installation was professional and quick."
            },
            {
                name: "Emily Phillips",
                date: "2025-03-20",
                rating: 4,
                text: "Water pressure is amazing but make sure your plumbing can handle it."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 16.7,
    },
    {
        id: 'PRD-BTH-VN-002',
        name: "Floating Vanity Set",
        room: "bathroom",
        category: "Bathroom Furniture",
        originalPrice: 2200,
        salePrice: 1899,
        image: "../database-images/bathroom/Wash-stnd-1.jpg",
        thumbnails: [
            "../database-images/bathroom/Wash-stnd-1.jpg",
            "../database-images/bathroom/Wash-stnd-2.jpg"
        ],
        description: "Modern floating vanity with quartz countertop, integrated sink, and soft-close drawers. Includes LED mirror with anti-fog and Bluetooth.",
        rating: 4.5,
        reviews: [
            {
                name: "Matthew Green",
                date: "2025-04-01",
                rating: 5,
                text: "Transformed our small bathroom. The storage is deceptively spacious."
            },
            {
                name: "Laura Hall",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful design but the mirror installation required professional help."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 13.7,
    },
    {
        id: 'PRD-ACC-CD-001',
        name: "Handmade Crystal Candlesticks",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 350,
        salePrice: 279,
        image: "../database-images/accessories&decoration/candel-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/candel-1.jpg",
            "../database-images/accessories&decoration/candel-2.jpg"
        ],
        description: "Set of 3 lead crystal candlesticks with 24K gold accents. Each piece is hand-cut by master artisans. Includes velvet storage bags.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophie Martin",
                date: "2025-04-01",
                rating: 5,
                text: "Heirloom quality pieces that catch the light beautifully."
            },
            {
                name: "Andrew Nelson",
                date: "2025-03-20",
                rating: 4,
                text: "More substantial in person than photos show. Excellent craftsmanship."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.3,
    },
    {
        id: 'PRD-ACC-CK-002',
        name: "Designer Wall Clock",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 450,
        salePrice: 359,
        image: "../database-images/accessories&decoration/clock-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/clock-1.jpg",
            "../database-images/accessories&decoration/clock-2.jpg"
        ],
        description: "Oversized 36 minimalist clock with silent sweep movement and solid walnut frame. Includes built-in level for perfect hanging.",
        rating: 4.7,
        reviews: [
            {
                name: "Ryan Cooper",
                date: "2025-04-01",
                rating: 5,
                text: "Statement piece that ties our living room together. Completely silent."
            },
            {
                name: "Hannah Ward",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship but the hanging hardware could be sturdier."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.2,
    },
    {
        id: 'PRD-ACC-FR-003',
        name: "Gallery Picture Frame Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 280,
        salePrice: 199,
        image: "../database-images/accessories&decoration/frame-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/frame-1.jpg",
            "../database-images/accessories&decoration/frame-2.jpg"
        ],
        description: "Set of 5 museum-quality frames with UV-protective acrylic and acid-free mats. Includes multiple layout templates for perfect gallery walls.",
        rating: 4.6,
        reviews: [
            {
                name: "Ethan Rivera",
                date: "2025-04-01",
                rating: 5,
                text: "Finally frames worthy of our wedding photos. The quality is exceptional."
            },
            {
                name: "Zoe Peterson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful frames but the hanging system takes some getting used to."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 28.9,
    },
    {
        id: 'PRD-ACC-PP-004',
        name: "Designer Ceramic Planter Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 320,
        salePrice: 249,
        image: "../database-images/accessories&decoration/potted-plant-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/potted-plant-1.jpg",
            "../database-images/accessories&decoration/potted-plant-2.jpg"
        ],
        description: "Hand-glazed ceramic planters with drainage systems and matching saucers. Set of 3 in varying sizes. Includes care guide for indoor plants.",
        rating: 4.8,
        reviews: [
            {
                name: "Lucas Brooks",
                date: "2025-04-01",
                rating: 5,
                text: "Stunning colors that complement our mid-century decor perfectly."
            },
            {
                name: "Chloe Bennett",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship. The drainage system works perfectly."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 22.2,
    },
    {
        id: 'PRD-LVR-SF-001',
        name: "Luxury Chesterfield Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 2499,
        salePrice: 1899.99,
        image: "../database-images/livingroom/sofa-2.jpg",
        thumbnails: [
            "../database-images/livingroom/sofa-1.jpg",
            "../database-images/livingroom/sofa-2.jpg",
            "../database-images/livingroom/sofa-3.jpg"
        ],
        description: "Premium full-grain leather Chesterfield sofa with hand-tufted detailing and solid mahogany frame. Includes premium memory foam cushions.",
        rating: 4.8,
        reviews: [
            {
                name: "Alex Johnson",
                date: "2025-04-01",
                rating: 5,
                text: "Exquisite craftsmanship! The leather quality is exceptional."
            },
            {
                name: "Nora Williams",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful statement piece. Very comfortable after breaking in."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 24,
    },
    {
        id: 'PRD-LVR-ST-002',
        name: "Modular Wall Storage System",
        room: "living-room",
        category: "Storage",
        originalPrice: 3200,
        salePrice: 0,
        image: "../database-images/livingroom/storage-2.jpg",
        thumbnails: [
            "../database-images/livingroom/storage-1.jpg",
            "../database-images/livingroom/storage-2.jpg",
            "../database-images/livingroom/storage-3.jpg"
        ],
        description: "Customizable Scandinavian-inspired wall unit with open shelving, glass cabinets, and hidden storage compartments. Made from sustainable oak.",
        rating: 4.7,
        reviews: [
            {
                name: "James Wilson",
                date: "2025-03-15",
                rating: 5,
                text: "Transformed our living room! Endless configuration options."
            },
            {
                name: "Sarah Kim",
                date: "2025-02-28",
                rating: 4,
                text: "Excellent build quality. Assembly took some time but worth it."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LVR-TB-003',
        name: "Marble & Brass Coffee Table",
        room: "living-room",
        category: "Tables",
        originalPrice: 1800,
        salePrice: 0,
        image: "../database-images/livingroom/table-2.jpg",
        thumbnails: [
            "../database-images/livingroom/table-1.jpg",
            "../database-images/livingroom/table-2.jpg"
        ],
        description: "Artisan-crafted Carrara marble top with hand-polished brass legs. Includes built-in magazine rack and tempered glass protection.",
        rating: 4.9,
        reviews: [
            {
                name: "Olivia Martinez",
                date: "2025-04-05",
                rating: 5,
                text: "Stunning centerpiece that gets constant compliments!"
            },
            {
                name: "David Chen",
                date: "2025-03-22",
                rating: 4.8,
                text: "Perfect size for our sectional. The marble is sealed beautifully."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LIT-TL-001',
        name: "Art Deco Crystal Table Lamp",
        room: "lighting",
        category: "Table Lamps",
        originalPrice: 450,
        salePrice: 315,
        image: "../database-images/lighting/table-lamp-2.jpg",
        thumbnails: [
            "../database-images/lighting/table-lamp-1.jpg",
            "../database-images/lighting/table-lamp-2.jpg",
            "../database-images/lighting/table-lamp-3.jpg"
        ],
        description: "Vintage-inspired lamp with hand-cut crystal base and gold leaf detailing. Includes dimmable LED bulb with 3 color temperatures.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophia Rodriguez",
                date: "2025-04-10",
                rating: 5,
                text: "The crystal refracts light beautifully at night. So elegant!"
            },
            {
                name: "Michael Brown",
                date: "2025-03-25",
                rating: 4.8,
                text: "Excellent craftsmanship. Much heavier than expected (in a good way)."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 30,
    },
    {
        id: 'PRD-LIT-CL-002',
        name: "Modern Chandelier",
        room: "lighting",
        category: "Ceiling Lights",
        originalPrice: 1200,
        salePrice: 0,
        image: "../database-images/lighting/ceiling-lamp-1.jpg",
        thumbnails: [
            "../database-images/lighting/ceiling-lamp-1.jpg",
            "../database-images/lighting/ceiling-lamp-2.jpg",
            "../database-images/lighting/ceiling-lamp-3.jpg"
        ],
        description: "Minimalist geometric chandelier with 24K gold plating and hand-blown glass shades. Professional installation recommended.",
        rating: 2.5,
        reviews: [
            {
                name: "Robert Taylor",
                date: "2025-04-01",
                rating: 1,
                text: "Difficult to install and one glass shade arrived cracked."
            },
            {
                name: "Emma Wilson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful when lit but the instructions were unclear."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-DK-001',
        name: "Executive Standing Desk",
        room: "office",
        category: "Desks",
        originalPrice: 2200,
        salePrice: 0,
        image: "../database-images/office/desk-1.jpg",
        thumbnails: [
            "../database-images/office/desk-1.jpg",
            "../database-images/office/desk-2.jpg",
            "../database-images/office/desk-3.jpg"
        ],
        description: "Smart height-adjustable desk with built-in wireless charging, cable management, and eco-certified walnut veneer. Supports up to 350 lbs.",
        rating: 3.6,
        reviews: [
            {
                name: "Daniel Lee",
                date: "2025-04-01",
                rating: 4,
                text: "Great for my home office. The motor is very quiet."
            },
            {
                name: "Jennifer Park",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the wireless charger could be more powerful."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-CH-002',
        name: "Ergonomic Mesh Chair",
        room: "office",
        category: "Chairs",
        originalPrice: 850,
        salePrice: 0,
        image: "../database-images/office/chair-1.jpg",
        thumbnails: [
            "../database-images/office/chair-1.jpg",
            "../database-images/office/chair-2.jpg",
            "../database-images/office/chair-3.jpg"
        ],
        description: "Breathable mesh back with adjustable lumbar support, 4D armrests, and synchronized tilt mechanism. Certified for 24/7 use.",
        rating: 4.2,
        reviews: [
            {
                name: "Thomas Clark",
                date: "2025-04-05",
                rating: 5,
                text: "Saved my back during long work sessions. Worth every penny."
            },
            {
                name: "Lisa Wong",
                date: "2025-03-15",
                rating: 3,
                text: "Comfortable but assembly took over an hour."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-KIT-FZ-001',
        name: "French Door Smart Refrigerator",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 3200,
        salePrice: 2799,
        image: "../database-images/kitchen/freezer-1.jpg",
        thumbnails: [
            "../database-images/kitchen/freezer-1.jpg",
            "../database-images/kitchen/freezer-2.jpg",
        ],
        description: "Energy Star rated 28 cu. ft. smart fridge with dual cooling systems, touch screen controls, and craft ice maker. WiFi enabled.",
        rating: 4.5,
        reviews: [
            {
                name: "William Garcia",
                date: "2025-04-01",
                rating: 5,
                text: "The external water dispenser is a game changer. Super quiet operation."
            },
            {
                name: "Amanda Scott",
                date: "2025-03-20",
                rating: 4,
                text: "Love the app connectivity but fingerprint resistant coating could be better."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12.5,
    },
    {
        id: 'PRD-KIT-KS-002',
        name: "Professional Kitchen Package",
        room: "kitchen",
        category: "Kitchen Systems",
        originalPrice: 12500,
        salePrice: 10999,
        image: "../database-images/kitchen/kitchen-1.jpg",
        thumbnails: [
            "../database-images/kitchen/kitchen-1.jpg",
            "../database-images/kitchen/kitchen-2.jpg",
            "../database-images/kitchen/kitchen-3.jpg"
        ],
        description: "Complete chef's kitchen including 36 gas range, vent hood, dishwasher, and custom cabinetry with soft-close drawers. 10 color options available.",
        rating: 4.7,
        reviews: [
            {
                name: "Chef Marco",
                date: "2025-04-01",
                rating: 5,
                text: "Restaurant-quality performance in a home kitchen. The range is phenomenal."
            },
            {
                name: "Rachel Adams",
                date: "2025-03-20",
                rating: 4,
                text: "Installation team was professional but took longer than estimated."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-KIT-MW-003',
        name: "Convection Microwave Oven",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 550,
        salePrice: 449,
        image: "../database-images/kitchen/microwave-1.jpg",
        thumbnails: [
            "../database-images/kitchen/microwave-1.jpg",
            "../database-images/kitchen/microwave-2.jpg",
        ],
        description: "1.7 cu. ft. smart microwave with inverter technology, 10 power levels, and sensor cooking. Includes air fry and dehydrate functions.",
        rating: 4.3,
        reviews: [
            {
                name: "Kevin Harris",
                date: "2025-04-01",
                rating: 5,
                text: "Replaced my toaster oven and air fryer. Does everything perfectly."
            },
            {
                name: "Nancy White",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the touch controls can be sensitive."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 18.4,
    },
    {
        id: 'PRD-ENT-TV-001',
        name: "Media Console with Fireplace",
        room: "entertainment",
        category: "TV Furniture",
        originalPrice: 1900,
        salePrice: 1599,
        image: "../database-images/entertainment/tv-bench-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-bench-1.jpg",
            "../database-images/entertainment/tv-bench-2.jpg",
        ],
        description: "84 modern media center with integrated electric fireplace, tempered glass doors, and built-in cable management. Holds up to 85 TVs.",
        rating: 4.6,
        reviews: [
            {
                name: "Jason Miller",
                date: "2025-04-01",
                rating: 5,
                text: "The fireplace adds amazing ambiance. Assembly was straightforward."
            },
            {
                name: "Patricia Lewis",
                date: "2025-03-20",
                rating: 4,
                text: "Sturdy construction but the fireplace remote could be better designed."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 15.8,
    },
    {
        id: 'PRD-ENT-ST-002',
        name: "Entertainment Storage System",
        room: "entertainment",
        category: "Storage",
        originalPrice: 2500,
        salePrice: 2199,
        image: "../database-images/entertainment/tv-storage-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-storage-1.jpg",
            "../database-images/entertainment/tv-storage-2.jpg",
            "../database-images/entertainment/tv-storage-3.jpg",
            "../database-images/entertainment/tv-storage-4.jpg",
        ],
        description: "Modular wall unit with adjustable shelves, LED lighting, and ventilated compartments for AV equipment. Customizable configuration.",
        rating: 4.4,
        reviews: [
            {
                name: "Brian Wilson",
                date: "2025-04-01",
                rating: 5,
                text: "Finally a solution that hides all my gaming consoles and looks great!"
            },
            {
                name: "Susan Baker",
                date: "2025-03-20",
                rating: 3,
                text: "Took some time to assemble but worth it for the storage space."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-BED-BD-001',
        name: "King Canopy Bed",
        room: "bedroom",
        category: "Beds",
        originalPrice: 3500,
        salePrice: 2999,
        image: "../database-images/bedroom/bed-1.jpg",
        thumbnails: [
            "../database-images/bedroom/bed-1.jpg",
            "../database-images/bedroom/bed-2.jpg",
            "../database-images/bedroom/bed-3.jpg"
        ],
        description: "Handcrafted four-poster bed from reclaimed teak with upholstered headboard and integrated USB charging ports. Includes underbed lighting.",
        rating: 4.9,
        reviews: [
            {
                name: "Christopher Allen",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely stunning centerpiece for our master bedroom. Excellent craftsmanship."
            },
            {
                name: "Melissa Young",
                date: "2025-03-20",
                rating: 4,
                text: "Took 3 people to assemble but so worth it. Very sturdy."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 14.3,
    },
    {
        id: 'PRD-BED-WD-002',
        name: "Walk-In Wardrobe System",
        room: "bedroom",
        category: "Storage",
        originalPrice: 4200,
        salePrice: 3699,
        image: "../database-images/bedroom/wardrop-1.jpg",
        thumbnails: [
            "../database-images/bedroom/wardrop-1.jpg",
            "../database-images/bedroom/wardrop-2.jpg",
            "../database-images/bedroom/wardrop-3.jpg"
        ],
        description: "Customizable closet system with hanging space, shoe racks, jewelry drawers, and full-length mirror. Includes motion-activated lighting.",
        rating: 4.7,
        reviews: [
            {
                name: "Jessica Turner",
                date: "2025-04-01",
                rating: 5,
                text: "Finally organized my entire wardrobe! The quality is exceptional."
            },
            {
                name: "Richard King",
                date: "2025-03-20",
                rating: 4,
                text: "Professional installation recommended. Took a full day to complete."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 11.9,
    },
    {
        id: 'PRD-BTH-SH-001',
        name: "Rainfall Shower System",
        room: "bathroom",
        category: "Fixtures",
        originalPrice: 1800,
        salePrice: 1499,
        image: "../database-images/bathroom/shawer-1.jpg",
        thumbnails: [
            "../database-images/bathroom/shawer-1.jpg",
            "../database-images/bathroom/shawer-2.jpg",
            "../database-images/bathroom/shawer-3.jpg"
        ],
        description: "Luxury shower system with 12 rainfall head, 6 body jets, and thermostatic control. Includes handheld wand and digital temperature display.",
        rating: 4.8,
        reviews: [
            {
                name: "Daniel Carter",
                date: "2025-04-01",
                rating: 5,
                text: "Feels like a spa every morning. Installation was professional and quick."
            },
            {
                name: "Emily Phillips",
                date: "2025-03-20",
                rating: 4,
                text: "Water pressure is amazing but make sure your plumbing can handle it."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 16.7,
    },
    {
        id: 'PRD-BTH-VN-002',
        name: "Floating Vanity Set",
        room: "bathroom",
        category: "Bathroom Furniture",
        originalPrice: 2200,
        salePrice: 1899,
        image: "../database-images/bathroom/Wash-stnd-1.jpg",
        thumbnails: [
            "../database-images/bathroom/Wash-stnd-1.jpg",
            "../database-images/bathroom/Wash-stnd-2.jpg"
        ],
        description: "Modern floating vanity with quartz countertop, integrated sink, and soft-close drawers. Includes LED mirror with anti-fog and Bluetooth.",
        rating: 4.5,
        reviews: [
            {
                name: "Matthew Green",
                date: "2025-04-01",
                rating: 5,
                text: "Transformed our small bathroom. The storage is deceptively spacious."
            },
            {
                name: "Laura Hall",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful design but the mirror installation required professional help."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 13.7,
    },
    {
        id: 'PRD-ACC-CD-001',
        name: "Handmade Crystal Candlesticks",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 350,
        salePrice: 279,
        image: "../database-images/accessories&decoration/candel-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/candel-1.jpg",
            "../database-images/accessories&decoration/candel-2.jpg"
        ],
        description: "Set of 3 lead crystal candlesticks with 24K gold accents. Each piece is hand-cut by master artisans. Includes velvet storage bags.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophie Martin",
                date: "2025-04-01",
                rating: 5,
                text: "Heirloom quality pieces that catch the light beautifully."
            },
            {
                name: "Andrew Nelson",
                date: "2025-03-20",
                rating: 4,
                text: "More substantial in person than photos show. Excellent craftsmanship."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.3,
    },
    {
        id: 'PRD-ACC-CK-002',
        name: "Designer Wall Clock",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 450,
        salePrice: 359,
        image: "../database-images/accessories&decoration/clock-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/clock-1.jpg",
            "../database-images/accessories&decoration/clock-2.jpg"
        ],
        description: "Oversized 36 minimalist clock with silent sweep movement and solid walnut frame. Includes built-in level for perfect hanging.",
        rating: 4.7,
        reviews: [
            {
                name: "Ryan Cooper",
                date: "2025-04-01",
                rating: 5,
                text: "Statement piece that ties our living room together. Completely silent."
            },
            {
                name: "Hannah Ward",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship but the hanging hardware could be sturdier."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.2,
    },
    {
        id: 'PRD-ACC-FR-003',
        name: "Gallery Picture Frame Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 280,
        salePrice: 199,
        image: "../database-images/accessories&decoration/frame-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/frame-1.jpg",
            "../database-images/accessories&decoration/frame-2.jpg"
        ],
        description: "Set of 5 museum-quality frames with UV-protective acrylic and acid-free mats. Includes multiple layout templates for perfect gallery walls.",
        rating: 4.6,
        reviews: [
            {
                name: "Ethan Rivera",
                date: "2025-04-01",
                rating: 5,
                text: "Finally frames worthy of our wedding photos. The quality is exceptional."
            },
            {
                name: "Zoe Peterson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful frames but the hanging system takes some getting used to."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 28.9,
    },
    {
        id: 'PRD-ACC-PP-004',
        name: "Designer Ceramic Planter Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 320,
        salePrice: 249,
        image: "../database-images/accessories&decoration/potted-plant-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/potted-plant-1.jpg",
            "../database-images/accessories&decoration/potted-plant-2.jpg"
        ],
        description: "Hand-glazed ceramic planters with drainage systems and matching saucers. Set of 3 in varying sizes. Includes care guide for indoor plants.",
        rating: 4.8,
        reviews: [
            {
                name: "Lucas Brooks",
                date: "2025-04-01",
                rating: 5,
                text: "Stunning colors that complement our mid-century decor perfectly."
            },
            {
                name: "Chloe Bennett",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship. The drainage system works perfectly."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 22.2,
    },
    {
        id: 'PRD-LVR-SF-001',
        name: "Luxury Chesterfield Sofa",
        room: "living-room",
        category: "Sofas",
        originalPrice: 2499,
        salePrice: 1899.99,
        image: "../database-images/livingroom/sofa-2.jpg",
        thumbnails: [
            "../database-images/livingroom/sofa-1.jpg",
            "../database-images/livingroom/sofa-2.jpg",
            "../database-images/livingroom/sofa-3.jpg"
        ],
        description: "Premium full-grain leather Chesterfield sofa with hand-tufted detailing and solid mahogany frame. Includes premium memory foam cushions.",
        rating: 4.8,
        reviews: [
            {
                name: "Alex Johnson",
                date: "2025-04-01",
                rating: 5,
                text: "Exquisite craftsmanship! The leather quality is exceptional."
            },
            {
                name: "Nora Williams",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful statement piece. Very comfortable after breaking in."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: true,
        discountPercentage: 24,
    },
    {
        id: 'PRD-LVR-ST-002',
        name: "Modular Wall Storage System",
        room: "living-room",
        category: "Storage",
        originalPrice: 3200,
        salePrice: 0,
        image: "../database-images/livingroom/storage-2.jpg",
        thumbnails: [
            "../database-images/livingroom/storage-1.jpg",
            "../database-images/livingroom/storage-2.jpg",
            "../database-images/livingroom/storage-3.jpg"
        ],
        description: "Customizable Scandinavian-inspired wall unit with open shelving, glass cabinets, and hidden storage compartments. Made from sustainable oak.",
        rating: 4.7,
        reviews: [
            {
                name: "James Wilson",
                date: "2025-03-15",
                rating: 5,
                text: "Transformed our living room! Endless configuration options."
            },
            {
                name: "Sarah Kim",
                date: "2025-02-28",
                rating: 4,
                text: "Excellent build quality. Assembly took some time but worth it."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LVR-TB-003',
        name: "Marble & Brass Coffee Table",
        room: "living-room",
        category: "Tables",
        originalPrice: 1800,
        salePrice: 0,
        image: "../database-images/livingroom/table-2.jpg",
        thumbnails: [
            "../database-images/livingroom/table-1.jpg",
            "../database-images/livingroom/table-2.jpg"
        ],
        description: "Artisan-crafted Carrara marble top with hand-polished brass legs. Includes built-in magazine rack and tempered glass protection.",
        rating: 4.9,
        reviews: [
            {
                name: "Olivia Martinez",
                date: "2025-04-05",
                rating: 5,
                text: "Stunning centerpiece that gets constant compliments!"
            },
            {
                name: "David Chen",
                date: "2025-03-22",
                rating: 4.8,
                text: "Perfect size for our sectional. The marble is sealed beautifully."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-LIT-TL-001',
        name: "Art Deco Crystal Table Lamp",
        room: "lighting",
        category: "Table Lamps",
        originalPrice: 450,
        salePrice: 315,
        image: "../database-images/lighting/table-lamp-2.jpg",
        thumbnails: [
            "../database-images/lighting/table-lamp-1.jpg",
            "../database-images/lighting/table-lamp-2.jpg",
            "../database-images/lighting/table-lamp-3.jpg"
        ],
        description: "Vintage-inspired lamp with hand-cut crystal base and gold leaf detailing. Includes dimmable LED bulb with 3 color temperatures.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophia Rodriguez",
                date: "2025-04-10",
                rating: 5,
                text: "The crystal refracts light beautifully at night. So elegant!"
            },
            {
                name: "Michael Brown",
                date: "2025-03-25",
                rating: 4.8,
                text: "Excellent craftsmanship. Much heavier than expected (in a good way)."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 30,
    },
    {
        id: 'PRD-LIT-CL-002',
        name: "Modern Chandelier",
        room: "lighting",
        category: "Ceiling Lights",
        originalPrice: 1200,
        salePrice: 0,
        image: "../database-images/lighting/ceiling-lamp-1.jpg",
        thumbnails: [
            "../database-images/lighting/ceiling-lamp-1.jpg",
            "../database-images/lighting/ceiling-lamp-2.jpg",
            "../database-images/lighting/ceiling-lamp-3.jpg"
        ],
        description: "Minimalist geometric chandelier with 24K gold plating and hand-blown glass shades. Professional installation recommended.",
        rating: 2.5,
        reviews: [
            {
                name: "Robert Taylor",
                date: "2025-04-01",
                rating: 1,
                text: "Difficult to install and one glass shade arrived cracked."
            },
            {
                name: "Emma Wilson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful when lit but the instructions were unclear."
            }
        ],
        isNew: false,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-DK-001',
        name: "Executive Standing Desk",
        room: "office",
        category: "Desks",
        originalPrice: 2200,
        salePrice: 0,
        image: "../database-images/office/desk-1.jpg",
        thumbnails: [
            "../database-images/office/desk-1.jpg",
            "../database-images/office/desk-2.jpg",
            "../database-images/office/desk-3.jpg"
        ],
        description: "Smart height-adjustable desk with built-in wireless charging, cable management, and eco-certified walnut veneer. Supports up to 350 lbs.",
        rating: 3.6,
        reviews: [
            {
                name: "Daniel Lee",
                date: "2025-04-01",
                rating: 4,
                text: "Great for my home office. The motor is very quiet."
            },
            {
                name: "Jennifer Park",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the wireless charger could be more powerful."
            }
        ],
        isNew: false,
        isBestSeller: true,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-OFC-CH-002',
        name: "Ergonomic Mesh Chair",
        room: "office",
        category: "Chairs",
        originalPrice: 850,
        salePrice: 0,
        image: "../database-images/office/chair-1.jpg",
        thumbnails: [
            "../database-images/office/chair-1.jpg",
            "../database-images/office/chair-2.jpg",
            "../database-images/office/chair-3.jpg"
        ],
        description: "Breathable mesh back with adjustable lumbar support, 4D armrests, and synchronized tilt mechanism. Certified for 24/7 use.",
        rating: 4.2,
        reviews: [
            {
                name: "Thomas Clark",
                date: "2025-04-05",
                rating: 5,
                text: "Saved my back during long work sessions. Worth every penny."
            },
            {
                name: "Lisa Wong",
                date: "2025-03-15",
                rating: 3,
                text: "Comfortable but assembly took over an hour."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: false,
        discountPercentage: 0,
    },
    {
        id: 'PRD-KIT-FZ-001',
        name: "French Door Smart Refrigerator",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 3200,
        salePrice: 2799,
        image: "../database-images/kitchen/freezer-1.jpg",
        thumbnails: [
            "../database-images/kitchen/freezer-1.jpg",
            "../database-images/kitchen/freezer-2.jpg",
        ],
        description: "Energy Star rated 28 cu. ft. smart fridge with dual cooling systems, touch screen controls, and craft ice maker. WiFi enabled.",
        rating: 4.5,
        reviews: [
            {
                name: "William Garcia",
                date: "2025-04-01",
                rating: 5,
                text: "The external water dispenser is a game changer. Super quiet operation."
            },
            {
                name: "Amanda Scott",
                date: "2025-03-20",
                rating: 4,
                text: "Love the app connectivity but fingerprint resistant coating could be better."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12.5,
    },
    {
        id: 'PRD-KIT-KS-002',
        name: "Professional Kitchen Package",
        room: "kitchen",
        category: "Kitchen Systems",
        originalPrice: 12500,
        salePrice: 10999,
        image: "../database-images/kitchen/kitchen-1.jpg",
        thumbnails: [
            "../database-images/kitchen/kitchen-1.jpg",
            "../database-images/kitchen/kitchen-2.jpg",
            "../database-images/kitchen/kitchen-3.jpg"
        ],
        description: "Complete chef's kitchen including 36 gas range, vent hood, dishwasher, and custom cabinetry with soft-close drawers. 10 color options available.",
        rating: 4.7,
        reviews: [
            {
                name: "Chef Marco",
                date: "2025-04-01",
                rating: 5,
                text: "Restaurant-quality performance in a home kitchen. The range is phenomenal."
            },
            {
                name: "Rachel Adams",
                date: "2025-03-20",
                rating: 4,
                text: "Installation team was professional but took longer than estimated."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-KIT-MW-003',
        name: "Convection Microwave Oven",
        room: "kitchen",
        category: "Appliances",
        originalPrice: 550,
        salePrice: 449,
        image: "../database-images/kitchen/microwave-1.jpg",
        thumbnails: [
            "../database-images/kitchen/microwave-1.jpg",
            "../database-images/kitchen/microwave-2.jpg",
        ],
        description: "1.7 cu. ft. smart microwave with inverter technology, 10 power levels, and sensor cooking. Includes air fry and dehydrate functions.",
        rating: 4.3,
        reviews: [
            {
                name: "Kevin Harris",
                date: "2025-04-01",
                rating: 5,
                text: "Replaced my toaster oven and air fryer. Does everything perfectly."
            },
            {
                name: "Nancy White",
                date: "2025-03-20",
                rating: 3,
                text: "Works well but the touch controls can be sensitive."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 18.4,
    },
    {
        id: 'PRD-ENT-TV-001',
        name: "Media Console with Fireplace",
        room: "entertainment",
        category: "TV Furniture",
        originalPrice: 1900,
        salePrice: 1599,
        image: "../database-images/entertainment/tv-bench-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-bench-1.jpg",
            "../database-images/entertainment/tv-bench-2.jpg",
        ],
        description: "84 modern media center with integrated electric fireplace, tempered glass doors, and built-in cable management. Holds up to 85 TVs.",
        rating: 4.6,
        reviews: [
            {
                name: "Jason Miller",
                date: "2025-04-01",
                rating: 5,
                text: "The fireplace adds amazing ambiance. Assembly was straightforward."
            },
            {
                name: "Patricia Lewis",
                date: "2025-03-20",
                rating: 4,
                text: "Sturdy construction but the fireplace remote could be better designed."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 15.8,
    },
    {
        id: 'PRD-ENT-ST-002',
        name: "Entertainment Storage System",
        room: "entertainment",
        category: "Storage",
        originalPrice: 2500,
        salePrice: 2199,
        image: "../database-images/entertainment/tv-storage-1.jpg",
        thumbnails: [
            "../database-images/entertainment/tv-storage-1.jpg",
            "../database-images/entertainment/tv-storage-2.jpg",
            "../database-images/entertainment/tv-storage-3.jpg",
            "../database-images/entertainment/tv-storage-4.jpg",
        ],
        description: "Modular wall unit with adjustable shelves, LED lighting, and ventilated compartments for AV equipment. Customizable configuration.",
        rating: 4.4,
        reviews: [
            {
                name: "Brian Wilson",
                date: "2025-04-01",
                rating: 5,
                text: "Finally a solution that hides all my gaming consoles and looks great!"
            },
            {
                name: "Susan Baker",
                date: "2025-03-20",
                rating: 3,
                text: "Took some time to assemble but worth it for the storage space."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 12,
    },
    {
        id: 'PRD-BED-BD-001',
        name: "King Canopy Bed",
        room: "bedroom",
        category: "Beds",
        originalPrice: 3500,
        salePrice: 2999,
        image: "../database-images/bedroom/bed-1.jpg",
        thumbnails: [
            "../database-images/bedroom/bed-1.jpg",
            "../database-images/bedroom/bed-2.jpg",
            "../database-images/bedroom/bed-3.jpg"
        ],
        description: "Handcrafted four-poster bed from reclaimed teak with upholstered headboard and integrated USB charging ports. Includes underbed lighting.",
        rating: 4.9,
        reviews: [
            {
                name: "Christopher Allen",
                date: "2025-04-01",
                rating: 5,
                text: "Absolutely stunning centerpiece for our master bedroom. Excellent craftsmanship."
            },
            {
                name: "Melissa Young",
                date: "2025-03-20",
                rating: 4,
                text: "Took 3 people to assemble but so worth it. Very sturdy."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 14.3,
    },
    {
        id: 'PRD-BED-WD-002',
        name: "Walk-In Wardrobe System",
        room: "bedroom",
        category: "Storage",
        originalPrice: 4200,
        salePrice: 3699,
        image: "../database-images/bedroom/wardrop-1.jpg",
        thumbnails: [
            "../database-images/bedroom/wardrop-1.jpg",
            "../database-images/bedroom/wardrop-2.jpg",
            "../database-images/bedroom/wardrop-3.jpg"
        ],
        description: "Customizable closet system with hanging space, shoe racks, jewelry drawers, and full-length mirror. Includes motion-activated lighting.",
        rating: 4.7,
        reviews: [
            {
                name: "Jessica Turner",
                date: "2025-04-01",
                rating: 5,
                text: "Finally organized my entire wardrobe! The quality is exceptional."
            },
            {
                name: "Richard King",
                date: "2025-03-20",
                rating: 4,
                text: "Professional installation recommended. Took a full day to complete."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 11.9,
    },
    {
        id: 'PRD-BTH-SH-001',
        name: "Rainfall Shower System",
        room: "bathroom",
        category: "Fixtures",
        originalPrice: 1800,
        salePrice: 1499,
        image: "../database-images/bathroom/shawer-1.jpg",
        thumbnails: [
            "../database-images/bathroom/shawer-1.jpg",
            "../database-images/bathroom/shawer-2.jpg",
            "../database-images/bathroom/shawer-3.jpg"
        ],
        description: "Luxury shower system with 12 rainfall head, 6 body jets, and thermostatic control. Includes handheld wand and digital temperature display.",
        rating: 4.8,
        reviews: [
            {
                name: "Daniel Carter",
                date: "2025-04-01",
                rating: 5,
                text: "Feels like a spa every morning. Installation was professional and quick."
            },
            {
                name: "Emily Phillips",
                date: "2025-03-20",
                rating: 4,
                text: "Water pressure is amazing but make sure your plumbing can handle it."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 16.7,
    },
    {
        id: 'PRD-BTH-VN-002',
        name: "Floating Vanity Set",
        room: "bathroom",
        category: "Bathroom Furniture",
        originalPrice: 2200,
        salePrice: 1899,
        image: "../database-images/bathroom/Wash-stnd-1.jpg",
        thumbnails: [
            "../database-images/bathroom/Wash-stnd-1.jpg",
            "../database-images/bathroom/Wash-stnd-2.jpg"
        ],
        description: "Modern floating vanity with quartz countertop, integrated sink, and soft-close drawers. Includes LED mirror with anti-fog and Bluetooth.",
        rating: 4.5,
        reviews: [
            {
                name: "Matthew Green",
                date: "2025-04-01",
                rating: 5,
                text: "Transformed our small bathroom. The storage is deceptively spacious."
            },
            {
                name: "Laura Hall",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful design but the mirror installation required professional help."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 13.7,
    },
    {
        id: 'PRD-ACC-CD-001',
        name: "Handmade Crystal Candlesticks",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 350,
        salePrice: 279,
        image: "../database-images/accessories&decoration/candel-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/candel-1.jpg",
            "../database-images/accessories&decoration/candel-2.jpg"
        ],
        description: "Set of 3 lead crystal candlesticks with 24K gold accents. Each piece is hand-cut by master artisans. Includes velvet storage bags.",
        rating: 4.9,
        reviews: [
            {
                name: "Sophie Martin",
                date: "2025-04-01",
                rating: 5,
                text: "Heirloom quality pieces that catch the light beautifully."
            },
            {
                name: "Andrew Nelson",
                date: "2025-03-20",
                rating: 4,
                text: "More substantial in person than photos show. Excellent craftsmanship."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.3,
    },
    {
        id: 'PRD-ACC-CK-002',
        name: "Designer Wall Clock",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 450,
        salePrice: 359,
        image: "../database-images/accessories&decoration/clock-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/clock-1.jpg",
            "../database-images/accessories&decoration/clock-2.jpg"
        ],
        description: "Oversized 36 minimalist clock with silent sweep movement and solid walnut frame. Includes built-in level for perfect hanging.",
        rating: 4.7,
        reviews: [
            {
                name: "Ryan Cooper",
                date: "2025-04-01",
                rating: 5,
                text: "Statement piece that ties our living room together. Completely silent."
            },
            {
                name: "Hannah Ward",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship but the hanging hardware could be sturdier."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 20.2,
    },
    {
        id: 'PRD-ACC-FR-003',
        name: "Gallery Picture Frame Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 280,
        salePrice: 199,
        image: "../database-images/accessories&decoration/frame-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/frame-1.jpg",
            "../database-images/accessories&decoration/frame-2.jpg"
        ],
        description: "Set of 5 museum-quality frames with UV-protective acrylic and acid-free mats. Includes multiple layout templates for perfect gallery walls.",
        rating: 4.6,
        reviews: [
            {
                name: "Ethan Rivera",
                date: "2025-04-01",
                rating: 5,
                text: "Finally frames worthy of our wedding photos. The quality is exceptional."
            },
            {
                name: "Zoe Peterson",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful frames but the hanging system takes some getting used to."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 28.9,
    },
    {
        id: 'PRD-ACC-PP-004',
        name: "Designer Ceramic Planter Set",
        room: "accessories-decoration",
        category: "Decor",
        originalPrice: 320,
        salePrice: 249,
        image: "../database-images/accessories&decoration/potted-plant-1.jpg",
        thumbnails: [
            "../database-images/accessories&decoration/potted-plant-1.jpg",
            "../database-images/accessories&decoration/potted-plant-2.jpg"
        ],
        description: "Hand-glazed ceramic planters with drainage systems and matching saucers. Set of 3 in varying sizes. Includes care guide for indoor plants.",
        rating: 4.8,
        reviews: [
            {
                name: "Lucas Brooks",
                date: "2025-04-01",
                rating: 5,
                text: "Stunning colors that complement our mid-century decor perfectly."
            },
            {
                name: "Chloe Bennett",
                date: "2025-03-20",
                rating: 4,
                text: "Beautiful craftsmanship. The drainage system works perfectly."
            }
        ],
        isNew: true,
        isBestSeller: false,
        isOnSale: true,
        discountPercentage: 22.2,
    }
];

// Cart functionality
// Cart functionality
document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo');
    const footerLogo = document.querySelector('.class="logo-my-footer');

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

    // Initialize cart from userData
    let cartData = [...userData.cart]; // Create a copy to avoid modifying original data

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
        return products.find(product => product.id === productId);
    }

    // Render cart items
    function renderCartItems() {
        cartItemsList.innerHTML = '';

        if (cartData.length === 0) {
            emptyCartMessage.style.display = 'block';
            document.querySelector('.cart-items').style.display = 'none';
            document.querySelector('.cart-summary-section').style.display = 'none';
            return;
        } else {
            emptyCartMessage.style.display = 'none';
            document.querySelector('.cart-items').style.display = 'block';
            document.querySelector('.cart-summary-section').style.display = 'block';
        }

        cartData.forEach(item => {
            const product = findProductById(item.product_id);

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
                            <input type="number" class="quantity-input" value="${item.product_quantity}" min="1" data-id="${product.id}">
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

        cartData.forEach(item => {
            const product = findProductById(item.product_id);
            if (product) {
                const price = product.isOnSale ? product.salePrice : product.originalPrice;
                subtotal += price * item.product_quantity;
                totalItems += item.product_quantity;
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
        const totalItems = cartData.reduce((sum, item) => sum + item.product_quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    // Save cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cartData', JSON.stringify(cartData));
    }

    // Handle quantity change
    function handleQuantityChange(e) {
        const productId = e.target.dataset.id;
        const cartItem = cartData.find(item => item.product_id === productId);

        if (!cartItem) return;

        const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);

        if (e.target.classList.contains('plus')) {
            cartItem.product_quantity += 1;
            input.value = cartItem.product_quantity;
        } else if (e.target.classList.contains('minus')) {
            if (cartItem.product_quantity > 1) {
                cartItem.product_quantity -= 1;
                input.value = cartItem.product_quantity;
            }
        }

        updateCart();
    }

    // Handle direct quantity input change
    function handleQuantityInputChange(e) {
        const productId = e.target.dataset.id;
        const cartItem = cartData.find(item => item.product_id === productId);

        if (!cartItem) return;

        let value = parseInt(e.target.value);

        if (isNaN(value) || value < 1) {
            value = 1;
            e.target.value = 1;
        }

        cartItem.product_quantity = value;
        updateCart();
    }

    // Remove item from cart
    function removeItem(e) {
        const productId = e.target.dataset.id;
        cartData = cartData.filter(item => item.product_id !== productId);
        updateCart();
    }

    // Clear cart
    clearCartBtn.addEventListener('click', function () {
        cartData = [];
        updateCart();
    });

    // Initialize orders array (load from localStorage if available)
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Checkout button - now saves order data
    checkoutBtn.addEventListener('click', function () {
        if (cartData.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const order = {
            order_id: generateOrderId(),
            date: new Date().toISOString().split('T')[0],
            user_id: userData.id,
            items: [],
            subtotal: 0,
            tax: 0,
            total: 0,
            status: 'processing'
        };

        cartData.forEach(cartItem => {
            const product = findProductById(cartItem.product_id);
            if (product) {
                const price = product.isOnSale ? product.salePrice : product.originalPrice;
                const itemTotal = price * cartItem.product_quantity;

                order.items.push({
                    product_id: product.id,
                    quantity: cartItem.product_quantity,
                    price: price
                });

                order.subtotal += itemTotal;
            }
        });

        order.tax = order.subtotal * 0.1;
        order.total = order.subtotal + order.tax;

        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Update user's orders
        if (!userData.orders) {
            userData.orders = [];
        }
        userData.orders.push(order);

        cartData = [];
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