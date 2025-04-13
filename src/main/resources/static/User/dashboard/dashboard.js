let currentProductId;

// Mock Data - Replace with API calls later
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
            product_id: 'PRDLVR00001',
            product_quantity: 2,
        },
        {
            product_id: 'PRDLVR00002',
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
        // Filter orders based on type
        const filteredOrders = userData.orders.filter(order => {
            if (type === 'past') return order.status === 'delivered';
            if (type === 'processing') return order.status === 'processing';
            if (type === 'cancelled') return order.status === 'cancelled';
            return false;
        });

        ordersList.innerHTML = "";

        filteredOrders.forEach(order => {
            // Handle both array of strings and array of objects for order.items
            const itemIds = Array.isArray(order.items) && order.items.length > 0
                ? typeof order.items[0] === 'string'
                    ? order.items
                    : order.items.map(item => item.product_id || item.id)
                : [];

            const orderProducts = itemIds
                .map(id => products.find(p => p.id === id))
                .filter(p => p !== undefined); // Filter out undefined products

            if (orderProducts.length === 0) return; // Skip if no valid products found

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
                                <div>Price: $${(product.salePrice || product.originalPrice).toFixed(2)}</div>
                            </div>
                        </div>
                    `).join("")}
                </div>
                <div class="order-total">Total: $${(order.total || 0).toFixed(2)}</div>
                <div class="order-actions">
                    ${order.canReview ? '<button class="action-btn feedback-btn">Give Feedback</button>' : ""}
                    ${order.status !== "processing" ? '<button class="action-btn reorder-btn">Reorder</button>' : ""}
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
            const order = userData.orders.find(o => o.order_id === orderId);

            if (order) {
                createProductSelectionModal(order);
            }
        }
    });

    function createProductSelectionModal(order) {
        const modal = document.createElement('div');
        modal.className = 'modal';

        // Handle both array of strings and array of objects for order.items
        const itemIds = Array.isArray(order.items)
            ? order.items.map(item =>
                typeof item === 'string' ? item : (item.product_id || item.id)
            )
            : [];

        const orderProducts = itemIds
            .map(id => products.find(p => p.id === id))
            .filter(p => p !== undefined); // Explicit undefined check

        // Return early if no valid products found
        if (orderProducts.length === 0) {
            console.warn('No valid products found for order', order.order_id);
            return;
        }

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Select a product to review</h3>
                <div class="product-selection">
                    ${orderProducts.map(product => `
                        <div class="product-option" data-product-id="${product.id}">
                            <img src="${product.image}" alt="${product.name}" loading="lazy">
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
        const closeModal = () => {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') closeModal();
        };

        modal.querySelector('.close-modal').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => e.target === modal && closeModal());
        document.addEventListener('keydown', handleEscape);

        // Product selection handler
        modal.querySelectorAll('.product-option').forEach(option => {
            option.addEventListener('click', function () {
                const productId = this.dataset.productId;
                const product = orderProducts.find(p => p.id === productId);
                if (product) {
                    closeModal();
                    createReviewForm(productId, order.order_id);
                }
            });
        });

        return modal;
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
            const order = userData.orders.find(o => o.order_id === orderId);
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

        userData.wishlist.forEach(productId => {
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
        const index = userData.wishlist.findIndex(id => id === itemId);
        if (index !== -1) {
            userData.wishlist.splice(index, 1);
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