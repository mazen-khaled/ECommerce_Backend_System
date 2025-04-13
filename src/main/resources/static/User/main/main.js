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
        image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productCount: 32
    },
    {
        id: 3,
        name: "Bathroom",
        image: "https://images.unsplash.com/photo-1505409952192-17ec9705e731?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productCount: 32
    },
    {
        id: 4,
        name: "Kitchen",
        image: "https://www.tomhowley.co.uk/wp-content/uploads/TH076_Foxton_20_feature.jpg",
        productCount: 28
    },
    {
        id: 5,
        name: "Office",
        image: "https://hips.hearstapps.com/hmg-prod/images/alan-design-edit2-1505749166.jpg?crop=1xw:1xh;center,top&resize=980:*",
        productCount: 19
    },
    {
        id: 6,
        name: "Entertainment",
        image: "https://abideinteriors.com.au/wp-content/uploads/2022/04/Iluka-Ent-6Door-RND-6-1.jpg",
        productCount: 19
    },
    {
        id: 7,
        name: "Lighting",
        image: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productCount: 19
    },
    {
        id: 8,
        name: "Accessories & Decore",
        image: "https://images.unsplash.com/photo-1722078139260-2cc7804eabca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productCount: 19
    },
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
    }
];

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
            reviews: document.getElementById('popupReviews'),
            wishlistBtn: document.getElementById('popupWishlistBtn')
        }
    };

    // =============================================
    // Core Initialization
    // =============================================
    function initializeStore() {
        // Check if we're on a category page
        if (window.location.pathname.includes('special-category.html')) {
            initCategoryPage();
        } else {
            renderAllSections();
        }

        setupEventListeners();
        initWishlistButton();
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
                    ${product.salePrice ? `
                        <span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    ` : `$${product.originalPrice.toFixed(2)}`}
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
        const productGrids = document.querySelectorAll('.products-grid');
        if (productGrids.length) {
            productGrids.forEach(grid => {
                grid.addEventListener('click', handleProductInteraction);
            });
        }
    }

    function handleProductInteraction(e) {
        const productCard = e.target.closest('.product-card');
        if (!productCard) return;
    
        if (e.target.classList.contains('quick-add-btn') || 
            e.target.closest('.quick-add-btn')) {
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
        const product = products.find(p => p.id == productId);
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
        updateWishlistButton(productId);
        showPopup();
    }

    function getProductById(productId) {
        return products.find(p => p.id == productId);
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

    // Filter products
    const onSaleProducts = products.filter(product => product.isOnSale);
    const bestSellers = products.filter(product => product.isBestSeller);

    // =============================================
    // Initialize Application
    // =============================================
    initializeStore();
    // Call this during your initial setup

});