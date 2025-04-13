// =============================================
// Data Setup
// =============================================
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

const rooms = [
    { id: 'living-room', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'office', name: 'Office' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'lighting', name: 'lighting' },
    { id: 'accessories-decoration', name: 'Accessories & Decoration' },
];

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
    // =============================================
    // Theme Setup
    // =============================================
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

    const domElements = {
        productPopup: document.getElementById('productDetailPopup'),
        popupElements: {
            name: document.getElementById('popupProductName'),
            image: document.getElementById('popupMainImage'),
            salePrice: document.getElementById('popupPrice'),
            rating: document.getElementById('popupRating'),
            thumbnails: document.getElementById('popupThumbnails'),
            description: document.getElementById('popupDescription'),
            reviews: document.getElementById('popupReviews'),
            wishlistBtn: document.getElementById('popupWishlistBtn')
        }
    };

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
                                ${product.salePrice ? `
                                    <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                                ` : `$${product.originalPrice.toFixed(2)}`}
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

        const maxPrice = parseFloat(priceRange.value)+1;
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

        // Handle thumbnail click to change main image
        domElements.popupElements.thumbnails.addEventListener('click', function (e) {
            const thumbnail = e.target.closest('.thumbnail');
            if (!thumbnail) return;

            const newImage = thumbnail.dataset.mainImage;
            domElements.popupElements.image.src = newImage;
        });

        // Quantity selector
        document.querySelector('.quantity-plus').addEventListener('click', function () {
            const input = document.querySelector('.quantity-input');
            input.value = parseInt(input.value) + 1;
        });

        document.querySelector('.quantity-minus').addEventListener('click', function () {
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
        const product = getProductById(productId);

        if (!product) return;

        updatePopupContent(product);
        updateWishlistButton(productId);
        showPopup();
    }

    function updatePopupContent(product) {
        const { name, image, salePrice, originalPrice, rating, thumbnails, description, reviews } = product;

        domElements.popupElements.name.textContent = name;
        domElements.popupElements.image.src = image;
        domElements.popupElements.salePrice.innerHTML = originalPrice ?
            (product.salePrice ?
                `<span class="sale-price">$${salePrice.toFixed(2)}</span>
             <span class="original-price">$${originalPrice.toFixed(2)}</span>`
                :
                `$${product.originalPrice.toFixed(2)}`
            )
            : ''; // Fallback if originalPrice is falsy

        domElements.popupElements.rating.innerHTML = renderStars(rating || 4.5);

        domElements.popupElements.thumbnails.innerHTML = createThumbnailsHTML(thumbnails || [image]);
        domElements.popupElements.description.textContent = description || "No description available.";
        domElements.popupElements.reviews.innerHTML = createReviewsHTML(reviews || []);
    }

    function updateWishlistButton(productId) {
        const isInWishlist = userData.wishlist.includes(productId);
        const icon = domElements.popupElements.wishlistBtn.querySelector('i');

        if (isInWishlist) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            domElements.popupElements.wishlistBtn.classList.add('in-wishlist');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            domElements.popupElements.wishlistBtn.classList.remove('in-wishlist');
        }
    }

    function toggleWishlist(productId) {
        const index = userData.wishlist.indexOf(productId);

        if (index === -1) {
            // Add to wishlist
            userData.wishlist.push(productId);
            showToast('Product added to wishlist');
        } else {
            // Remove from wishlist
            userData.wishlist.splice(index, 1);
            showToast('Product removed from wishlist');
        }

        updateWishlistButton(productId);
        // Here you would typically also update the database via an API call
        updateUserWishlistOnServer();
    }

    // Simulate server update (replace with actual API call)
    function updateUserWishlistOnServer() {
        console.log('Updating wishlist on server:', userData.wishlist);
        // Example API call:
        // fetch('/api/update-wishlist', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ 
        //         userId: userData.id, 
        //         wishlist: userData.wishlist 
        //     })
        // });
    }

    // Helper function to show toast notifications
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
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

    // Initialize event listeners
    function initWishlistButton() {
        domElements.popupElements.wishlistBtn.addEventListener('click', () => {
            toggleWishlist(currentProductId);
        });
    }

    // Call this during your initial setup
    initWishlistButton();

    function closeProductPopup() {
        document.getElementById('productDetailPopup').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function getProductById(productId) {
        return products.find(p => p.id == productId);
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

    // Initialize the page
    initPage();
});