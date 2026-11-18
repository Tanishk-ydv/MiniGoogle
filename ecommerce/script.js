/**
 * LUXE — Premium E-Commerce Website JavaScript
 * Complete Vanilla JS (ES6+) Implementation
 * 
 * Features:
 *  - Comprehensive Product & Category Catalogs
 *  - Dynamic Rendering (Products, Categories, Testimonials)
 *  - Responsive Sticky Nav & Mobile Menu with Scroll Highlighting
 *  - Live Predictive Search Dropdown with Filter Matching
 *  - Full Shopping Cart Drawer with LocalStorage Persistence
 *  - Wishlist Management with Badge Count & LocalStorage
 *  - Interactive Quick View Modal with Size, Color & Quantity Selectors
 *  - Stacking Toast Notification System (Success, Error, Info)
 *  - Dismissible Animated Announcement Bar
 *  - Auto-Rotating Testimonial Carousel with Touch & Dot Controls
 *  - Real-Time 3-Day Countdown Sale Timer
 *  - Newsletter Subscription with Regex Validation
 *  - Smooth Back to Top Scroll Button
 *  - IntersectionObserver Viewport Animations
 *  - Category Filter Tabs for Trending & Bestseller Collections
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CATALOG DATA (PRODUCTS, CATEGORIES, TESTIMONIALS)
     ========================================================================== */

  const products = [
    {
      id: 1,
      name: "Heritage Italian Leather Jacket",
      brand: "LUXE Studio",
      category: "clothing",
      price: 349.99,
      originalPrice: 499.99,
      discount: 30,
      rating: 4.9,
      reviews: 248,
      image: "https://picsum.photos/seed/luxe-jacket-1/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-jacket-1h/600/600",
      badge: "Sale",
      description: "Crafted from hand-selected full-grain Tuscan calfskin leather, treated with organic vegetable tannins. Features brushed gunmetal hardware, asymmetric zipper closure, and quilted cupro lining for supreme luxury and insulation.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [
        { name: "Obsidian Black", hex: "#111111" },
        { name: "Saddle Cognac", hex: "#8B4513" },
        { name: "Espresso Brown", hex: "#3B2219" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: true
    },
    {
      id: 2,
      name: "Pure Mongolian Cashmere Overcoat",
      brand: "LUXE Atelier",
      category: "clothing",
      price: 489.00,
      originalPrice: 599.00,
      discount: 18,
      rating: 4.9,
      reviews: 142,
      image: "https://picsum.photos/seed/luxe-coat-2/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-coat-2h/600/600",
      badge: "Bestseller",
      description: "Spun from Grade-A Mongolian cashmere fibers for featherlight warmth with a plush, cloud-soft drape. Features peak lapels, horn button closures, horn-tail vent, and interior ticket pockets.",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Camel", hex: "#C19A6B" },
        { name: "Midnight Navy", hex: "#121B2D" },
        { name: "Charcoal Grey", hex: "#374151" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: false
    },
    {
      id: 3,
      name: "Silk Satin Column Evening Gown",
      brand: "LUXE Maison",
      category: "clothing",
      price: 320.00,
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 86,
      image: "https://picsum.photos/seed/luxe-dress-3/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-dress-3h/600/600",
      badge: "New",
      description: "Sculpted from 100% 22-momme Mulberry silk with a subtle liquid sheen. Features an asymmetrical neckline, elegant floor-sweeping silhouette, and concealed side-zip closure for black-tie galas and soirees.",
      sizes: ["XS", "S", "M", "L"],
      colors: [
        { name: "Emerald Green", hex: "#064E3B" },
        { name: "Champagne Gold", hex: "#F3E5AB" },
        { name: "Midnight Noir", hex: "#0A0A0A" }
      ],
      inStock: true,
      isNew: true,
      isBestseller: false,
      isTrending: true
    },
    {
      id: 4,
      name: "Merino Wool Ribbed Mockneck Sweater",
      brand: "LUXE Studio",
      category: "clothing",
      price: 165.00,
      originalPrice: 210.00,
      discount: 21,
      rating: 4.7,
      reviews: 119,
      image: "https://picsum.photos/seed/luxe-knit-4/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-knit-4h/600/600",
      badge: "Hot",
      description: "Knit from extra-fine 19.5-micron Australian merino wool with a dense English rib knit. Designed with raglan sleeves and ribbed cuffs that retain their tailored shape wash after wash.",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Oatmeal Heather", hex: "#D6C7B2" },
        { name: "Forest Pine", hex: "#1B3B2B" },
        { name: "Slate Blue", hex: "#4A5D6E" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isTrending: true
    },
    {
      id: 5,
      name: "Japanese Selvedge Denim Chore Jacket",
      brand: "LUXE Atelier",
      category: "clothing",
      price: 245.00,
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 94,
      image: "https://picsum.photos/seed/luxe-denim-5/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-denim-5h/600/600",
      badge: null,
      description: "Woven on vintage Toyoda shuttle looms in Okayama using 14oz indigo-dyed cotton. Finished with solid brass rivets, selvedge detail on the interior placket, and patch pockets.",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Deep Raw Indigo", hex: "#1A2A3A" },
        { name: "Washed Stonewash", hex: "#5C768D" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: false
    },
    {
      id: 6,
      name: "Monaco Suede Handcrafted Penny Loafers",
      brand: "LUXE Footwear",
      category: "shoes",
      price: 265.00,
      originalPrice: 340.00,
      discount: 22,
      rating: 4.9,
      reviews: 215,
      image: "https://picsum.photos/seed/luxe-loafers-6/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-loafers-6h/600/600",
      badge: "Bestseller",
      description: "Hand-stitched in Naples from velvety water-resistant suede with Blake welt construction. Features a cushioned cork footbed and flexible leather sole with rubber heel inserts for unmatched stride comfort.",
      sizes: ["40", "41", "42", "43", "44", "45"],
      colors: [
        { name: "Warm Chestnut", hex: "#6E3821" },
        { name: "Sand Taupe", hex: "#B8A58D" },
        { name: "Navy Suede", hex: "#1C2738" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: true
    },
    {
      id: 7,
      name: "Aero-Stride Carbon Performance Runners",
      brand: "LUXE Sport",
      category: "shoes",
      price: 185.00,
      originalPrice: 230.00,
      discount: 20,
      rating: 4.7,
      reviews: 328,
      image: "https://picsum.photos/seed/luxe-runner-7/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-runner-7h/600/600",
      badge: "Hot",
      description: "Engineered with a responsive carbon-fiber propulsion plate and dual-density supercritical nitrogen foam. Features breathable micro-mesh uppers that adapt seamlessly to your foot's natural ergonomics.",
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      colors: [
        { name: "Triple Stealth", hex: "#18181B" },
        { name: "Glacier White", hex: "#F3F4F6" },
        { name: "Cobalt Velocity", hex: "#2563EB" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: true
    },
    {
      id: 8,
      name: "Burnished Calfskin Chelsea Boots",
      brand: "LUXE Footwear",
      category: "shoes",
      price: 320.00,
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 164,
      image: "https://picsum.photos/seed/luxe-boots-8/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-boots-8h/600/600",
      badge: "New",
      description: "Artisanally burnished Italian calf leather with Goodyear welted Dainite rubber soles. Clean almond toe profile, reinforced elastic side gussets, and woven pull tabs for effortless entry.",
      sizes: ["40", "41", "42", "43", "44"],
      colors: [
        { name: "Vintage Bourbon", hex: "#78350F" },
        { name: "Polished Noir", hex: "#0F172A" }
      ],
      inStock: true,
      isNew: true,
      isBestseller: false,
      isTrending: false
    },
    {
      id: 9,
      name: "Vanguard Minimal Leather Court Sneakers",
      brand: "LUXE Footwear",
      category: "shoes",
      price: 195.00,
      originalPrice: 245.00,
      discount: 20,
      rating: 4.8,
      reviews: 430,
      image: "https://picsum.photos/seed/luxe-sneakers-9/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-sneakers-9h/600/600",
      badge: "Bestseller",
      description: "The quintessential minimalist low-top sneaker made from buttery Nappa leather with Margom rubber cup soles. Fully calfskin lined with gold foil serial numbers stamped at the outer heel.",
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      colors: [
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Chalk & Olive", hex: "#E2E8F0" },
        { name: "Monochrome Black", hex: "#111827" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: true
    },
    {
      id: 10,
      name: "Chrono Elite Automatic Swiss Watch",
      brand: "LUXE Timepieces",
      category: "accessories",
      price: 650.00,
      originalPrice: 850.00,
      discount: 24,
      rating: 5.0,
      reviews: 98,
      image: "https://picsum.photos/seed/luxe-watch-10/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-watch-10h/600/600",
      badge: "Sale",
      description: "Equipped with a Swiss-engineered 26-jewel automatic movement boasting a 42-hour power reserve. Features a double-domed anti-reflective sapphire crystal, 316L stainless steel case, and sunburst guilloché dial.",
      sizes: ["40mm", "42mm"],
      colors: [
        { name: "Silver & Sunburst Blue", hex: "#1E3A8A" },
        { name: "Rose Gold & Onyx", hex: "#B76E79" },
        { name: "Stealth DLC Black", hex: "#18181B" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: true
    },
    {
      id: 11,
      name: "Aerospace Titanium Polarized Aviators",
      brand: "LUXE Atelier",
      category: "accessories",
      price: 185.00,
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 112,
      image: "https://picsum.photos/seed/luxe-glasses-11/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-glasses-11h/600/600",
      badge: "Hot",
      description: "Constructed with ultra-lightweight Japanese Grade-5 titanium frames weighing only 18 grams. Equipped with 9-layer polarized mineral glass lenses offering 100% UVA/UVB blockage with anti-scratch coating.",
      sizes: ["Standard Fit"],
      colors: [
        { name: "Brushed 18K Gold", hex: "#D4AF37" },
        { name: "Gunmetal Smoke", hex: "#4B5563" },
        { name: "Matte Platinum", hex: "#9CA3AF" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isTrending: true
    },
    {
      id: 12,
      name: "Riviera Grain Leather Weekender Duffle",
      brand: "LUXE Maison",
      category: "accessories",
      price: 430.00,
      originalPrice: 540.00,
      discount: 20,
      rating: 4.9,
      reviews: 147,
      image: "https://picsum.photos/seed/luxe-bag-12/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-bag-12h/600/600",
      badge: "Bestseller",
      description: "Handcrafted from durable pebbled French calfskin with reinforced base studs and solid brass lockable zippers. Includes a dedicated padded laptop sleeve and a separate ventilated shoe compartment.",
      sizes: ["48L Weekender"],
      colors: [
        { name: "Vintage Whiskey", hex: "#92400E" },
        { name: "Noir Pebble", hex: "#0F172A" },
        { name: "Bordeaux Burgundy", hex: "#581C87" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: false
    },
    {
      id: 13,
      name: "Reversible Monogram Calfskin Belt",
      brand: "LUXE Atelier",
      category: "accessories",
      price: 135.00,
      originalPrice: null,
      discount: null,
      rating: 4.7,
      reviews: 82,
      image: "https://picsum.photos/seed/luxe-belt-13/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-belt-13h/600/600",
      badge: null,
      description: "Reversible dual-sided leather strap offering sleek black calfskin on one side and warm British tan on the reverse. Fitted with a rotating solid brass buckle with satin palladium finish.",
      sizes: ["85cm", "90cm", "95cm", "100cm", "105cm"],
      colors: [
        { name: "Black / Tan Dual", hex: "#1F2937" },
        { name: "Dark Brown / Navy", hex: "#3E2723" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isTrending: false
    },
    {
      id: 14,
      name: "Aura Pro Wireless ANC Studio Headphones",
      brand: "LUXE Tech",
      category: "electronics",
      price: 369.00,
      originalPrice: 450.00,
      discount: 18,
      rating: 4.9,
      reviews: 580,
      image: "https://picsum.photos/seed/luxe-headphones-14/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-headphones-14h/600/600",
      badge: "Hot",
      description: "Custom 40mm bio-cellulose drivers tuned for audiophile sound staging. Adaptive active noise cancellation with 4 beamforming microphones, memory foam lambskin earcups, and up to 45 hours of high-resolution playback.",
      sizes: ["Over-Ear Studio"],
      colors: [
        { name: "Matte Slate", hex: "#1E293B" },
        { name: "Silver Pearl", hex: "#E2E8F0" },
        { name: "Warm Champagne", hex: "#D4AF37" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: true
    },
    {
      id: 15,
      name: "Apex Horizon Smart Watch Ultra",
      brand: "LUXE Tech",
      category: "electronics",
      price: 499.00,
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 295,
      image: "https://picsum.photos/seed/luxe-smartwatch-15/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-smartwatch-15h/600/600",
      badge: "New",
      description: "Milled from aerospace Grade 2 titanium with edge-to-edge sapphire crystal AMOLED display. Features ECG, dual-frequency GPS, blood oxygen tracking, 100m water resistance, and 7-day battery endurance.",
      sizes: ["45mm Titanium", "49mm Ultra"],
      colors: [
        { name: "Raw Titanium", hex: "#94A3B8" },
        { name: "Space Grey DLC", hex: "#334155" },
        { name: "Oceanic Blue", hex: "#1E40AF" }
      ],
      inStock: true,
      isNew: true,
      isBestseller: false,
      isTrending: true
    },
    {
      id: 16,
      name: "SonicSound Hi-Fi True Wireless Earbuds",
      brand: "LUXE Tech",
      category: "electronics",
      price: 189.99,
      originalPrice: 249.99,
      discount: 24,
      rating: 4.7,
      reviews: 412,
      image: "https://picsum.photos/seed/luxe-earbuds-16/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-earbuds-16h/600/600",
      badge: "Bestseller",
      description: "Dual balanced armature and dynamic drivers for breathtaking low frequencies and crystalline highs. Features spatial audio with dynamic head tracking, IPX7 water resistance, and wireless fast charging.",
      sizes: ["Ergonomic Fit"],
      colors: [
        { name: "Obsidian Black", hex: "#09090B" },
        { name: "Alabaster White", hex: "#F8FAFC" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: true,
      isTrending: false
    },
    {
      id: 17,
      name: "Lumina 360 Spatial Acoustic Speaker",
      brand: "LUXE Tech",
      category: "electronics",
      price: 299.00,
      originalPrice: 380.00,
      discount: 21,
      rating: 4.9,
      reviews: 184,
      image: "https://picsum.photos/seed/luxe-speaker-17/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-speaker-17h/600/600",
      badge: "Sale",
      description: "Crafted with Scandinavian Kvadrat wool fabric and CNC-machined anodized aluminum. Boasts room-adapting 360-degree acoustic projection, AirPlay 2, Spotify Connect, and 20 hours of wireless portability.",
      sizes: ["Standard Tabletop"],
      colors: [
        { name: "Anodized Silver", hex: "#CBD5E1" },
        { name: "Walnut Charcoal", hex: "#334155" },
        { name: "Nordic Sage", hex: "#4D7C0F" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isTrending: true
    },
    {
      id: 18,
      name: "Fine Mongolian Cashmere Fringed Scarf",
      brand: "LUXE Maison",
      category: "accessories",
      price: 110.00,
      originalPrice: 145.00,
      discount: 24,
      rating: 4.8,
      reviews: 120,
      image: "https://picsum.photos/seed/luxe-scarf-18/600/600",
      hoverImage: "https://picsum.photos/seed/luxe-scarf-18h/600/600",
      badge: "Sale",
      description: "Woven from 100% pure Himalayan mountain cashmere using a traditional ripple-finish wash for unmatched silkiness. Measures 200cm x 70cm with delicate hand-twisted fringe hems.",
      sizes: ["One Size"],
      colors: [
        { name: "Soft Charcoal", hex: "#4B5563" },
        { name: "Classic Camel", hex: "#C19A6B" },
        { name: "Winter Ivory", hex: "#FDFBF7" }
      ],
      inStock: true,
      isNew: false,
      isBestseller: false,
      isTrending: true
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Men's Fashion",
      category: "clothing",
      itemCount: "48+ Items",
      image: "https://picsum.photos/seed/luxe-cat-men/600/800",
      description: "Sartorial craftsmanship & modern tailored silhouettes."
    },
    {
      id: 2,
      name: "Women's Fashion",
      category: "clothing",
      itemCount: "64+ Items",
      image: "https://picsum.photos/seed/luxe-cat-women/600/800",
      description: "Effortless luxury in pure silks, fine wool, & cashmere."
    },
    {
      id: 3,
      name: "Footwear",
      category: "shoes",
      itemCount: "36+ Items",
      image: "https://picsum.photos/seed/luxe-cat-shoes/600/800",
      description: "Italian handcrafted leather shoes & carbon runners."
    },
    {
      id: 4,
      name: "Accessories",
      category: "accessories",
      itemCount: "52+ Items",
      image: "https://picsum.photos/seed/luxe-cat-acc/600/800",
      description: "Swiss automatic chronometers & full-grain travel gear."
    },
    {
      id: 5,
      name: "Electronics",
      category: "electronics",
      itemCount: "28+ Items",
      image: "https://picsum.photos/seed/luxe-cat-tech/600/800",
      description: "Audiophile studio sound & aerospace titanium wearables."
    },
    {
      id: 6,
      name: "New Arrivals",
      category: "new",
      itemCount: "32+ Items",
      image: "https://picsum.photos/seed/luxe-cat-new/600/800",
      description: "The latest curated drops from our global ateliers."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Elena Rostova",
      role: "Fashion Editor, Milan",
      rating: 5,
      quote: "LUXE has completely transformed my wardrobe standards. The cashmere overcoat and silk column dress are museum-grade works of art—the drape and handfeel rival bespoke Savile Row tailoring.",
      avatar: "https://picsum.photos/seed/elena-avatar/150/150"
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Architectural Designer, New York",
      rating: 5,
      quote: "The Chrono Elite Automatic timepiece and Riviera Duffle have become my everyday signatures. Exceptional craftsmanship, prompt discreet delivery, and customer care that genuinely cares.",
      avatar: "https://picsum.photos/seed/marcus-avatar/150/150"
    },
    {
      id: 3,
      name: "Sophie Chen",
      role: "Creative Director, London",
      rating: 5,
      quote: "Finding audio gear that pairs studio-grade precision acoustics with stunning modern minimalist aesthetics is rare. The Aura Pro headphones are simply magnificent in every dimension.",
      avatar: "https://picsum.photos/seed/sophie-avatar/150/150"
    },
    {
      id: 4,
      name: "Alexander Wright",
      role: "Private Equity, Paris",
      rating: 5,
      quote: "The Monaco Suede Loafers required zero break-in period and fit like a second skin. LUXE represents what true modern luxury should be: understated, peerless quality, and impeccable design.",
      avatar: "https://picsum.photos/seed/alex-avatar/150/150"
    },
    {
      id: 5,
      name: "Isabella Gomez",
      role: "Interior Stylist, Barcelona",
      rating: 5,
      quote: "Every unboxing feels like a personal gift from a private Parisian salon. From the heavy textured packaging to the hand-finished seams, every single nuance is celebrated.",
      avatar: "https://picsum.photos/seed/isabella-avatar/150/150"
    },
    {
      id: 6,
      name: "David Lindqvist",
      role: "Product Technologist, Stockholm",
      rating: 5,
      quote: "The Apex Horizon Smart Watch seamlessly balances aerospace titanium durability with haute horlogerie elegance. Battery life is extraordinary and the interface is frictionless.",
      avatar: "https://picsum.photos/seed/david-avatar/150/150"
    }
  ];

  /* ==========================================================================
     2. APP STATE & LOCALSTORAGE PERSISTENCE
     ========================================================================== */

  let cart = [];
  let wishlist = [];
  let testimonialInterval = null;
  let activeTestimonialIndex = 0;
  let searchDebounceTimeout = null;
  let countdownInterval = null;

  function loadSavedState() {
    try {
      const savedCart = localStorage.getItem('luxe_cart');
      if (savedCart) {
        cart = JSON.parse(savedCart);
      }
    } catch (e) {
      console.warn('Unable to load cart from localStorage:', e);
      cart = [];
    }

    try {
      const savedWishlist = localStorage.getItem('luxe_wishlist');
      if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
      }
    } catch (e) {
      console.warn('Unable to load wishlist from localStorage:', e);
      wishlist = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem('luxe_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Unable to save cart to localStorage:', e);
    }
  }

  function saveWishlist() {
    try {
      localStorage.setItem('luxe_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Unable to save wishlist to localStorage:', e);
    }
  }

  /* ==========================================================================
     3. ICON HELPERS (CRISP INLINE SVGS)
     ========================================================================== */

  const ICONS = {
    heartOutline: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    heartFilled: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    eye: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    bag: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    trash: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    close: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    success: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    error: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    info: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    quote: `<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.2"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>`
  };

  function renderStarRating(rating, reviews) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating % 1) >= 0.4;
    let starsHtml = '';

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHtml += '<span class="star star-filled" aria-hidden="true">★</span>';
      } else if (i === fullStars + 1 && hasHalfStar) {
        starsHtml += '<span class="star star-half" aria-hidden="true">★</span>';
      } else {
        starsHtml += '<span class="star star-empty" aria-hidden="true">☆</span>';
      }
    }

    return `
      <div class="product-rating" aria-label="Rated ${rating} out of 5 stars">
        <span class="stars">${starsHtml}</span>
        <span class="rating-value">${rating.toFixed(1)}</span>
        <span class="reviews-count">(${reviews})</span>
      </div>
    `;
  }

  /* ==========================================================================
     4. DYNAMIC CONTENT RENDERING
     ========================================================================== */

  /**
   * Render Category Cards into #categories-grid
   */
  function renderCategories() {
    const container = document.getElementById('categories-grid') || document.querySelector('.categories-grid');
    if (!container) return;

    container.innerHTML = categories.map(cat => `
      <div class="category-card" data-category="${cat.category}" data-animate="fade-up">
        <div class="category-image-wrap">
          <img src="${cat.image}" alt="${cat.name}" class="category-image" loading="lazy" />
          <div class="category-overlay"></div>
        </div>
        <div class="category-content">
          <span class="category-count">${cat.itemCount}</span>
          <h3 class="category-title">${cat.name}</h3>
          <p class="category-description">${cat.description}</p>
          <a href="#trending" class="category-link" data-filter="${cat.category}">
            <span>Explore Collection</span>
            ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    `).join('');
  }

  /**
   * Helper to generate a single product card HTML
   */
  function createProductCardHTML(product) {
    const isWishlisted = wishlist.includes(product.id);
    const badgeHTML = product.badge
      ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>`
      : '';

    const originalPriceHTML = product.originalPrice
      ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>`
      : '';

    const discountHTML = product.discount
      ? `<span class="discount-badge">-${product.discount}%</span>`
      : '';

    return `
      <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-animate="fade-up">
        <div class="product-image-wrap">
          <a href="#quick-view" class="product-img-link" data-action="quick-view" data-id="${product.id}" aria-label="Quick view for ${product.name}">
            <img src="${product.image}" alt="${product.name}" class="product-img product-img-main" loading="lazy" />
            <img src="${product.hoverImage}" alt="${product.name} alternate view" class="product-img product-img-hover" loading="lazy" />
          </a>
          ${badgeHTML}
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" data-action="wishlist" data-id="${product.id}" aria-label="Toggle wishlist for ${product.name}" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            ${isWishlisted ? ICONS.heartFilled : ICONS.heartOutline}
          </button>
          <button class="btn-quick-view" data-action="quick-view" data-id="${product.id}" aria-label="Quick view ${product.name}">
            ${ICONS.eye}
            <span>Quick View</span>
          </button>
        </div>
        <div class="product-info">
          <div class="product-brand">${product.brand}</div>
          <h3 class="product-title">
            <a href="#quick-view" data-action="quick-view" data-id="${product.id}">${product.name}</a>
          </h3>
          ${renderStarRating(product.rating, product.reviews)}
          <div class="product-pricing">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${originalPriceHTML}
            ${discountHTML}
          </div>
          <button class="btn-add-cart" data-action="add-cart" data-id="${product.id}" aria-label="Add ${product.name} to cart">
            ${ICONS.bag}
            <span>Add to Cart</span>
          </button>
        </div>
      </article>
    `;
  }

  /**
   * Render Product Cards into specified container
   * @param {Array} productsList 
   * @param {string|HTMLElement} containerId 
   */
  function renderProducts(productsList, containerId) {
    let container = containerId;
    if (typeof containerId === 'string') {
      const cleanId = containerId.replace(/^[#.]/, '');
      container = document.getElementById(cleanId) || document.getElementById(containerId) || document.querySelector(containerId);
    }

    if (!container) return;

    if (!productsList || productsList.length === 0) {
      container.innerHTML = `
        <div class="no-products-message">
          <p>No products available matching the current selection.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = productsList.map(p => createProductCardHTML(p)).join('');
    observeAnimatedElements(container);
  }

  /**
   * Render Testimonial Carousel into #testimonial-carousel or .testimonial-track
   */
  function renderTestimonials() {
    const track = document.getElementById('testimonial-track') ||
                  document.querySelector('.testimonial-track') ||
                  document.getElementById('testimonial-carousel') ||
                  document.querySelector('.testimonial-carousel');

    if (!track) return;

    track.innerHTML = testimonials.map((t, idx) => `
      <div class="testimonial-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="testimonial-card">
          <div class="testimonial-quote-icon">${ICONS.quote}</div>
          <div class="testimonial-rating">
            ${renderStarRating(t.rating, 1)}
          </div>
          <blockquote class="testimonial-text">"${t.quote}"</blockquote>
          <div class="testimonial-author">
            <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" />
            <div class="author-info">
              <h4 class="author-name">${t.name}</h4>
              <p class="author-role">${t.role}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    renderTestimonialDots();
  }

  function renderTestimonialDots() {
    const dotsContainer = document.getElementById('testimonial-dots') || document.querySelector('.testimonial-dots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = testimonials.map((_, idx) => `
      <button class="testimonial-dot ${idx === activeTestimonialIndex ? 'active' : ''}" data-slide="${idx}" aria-label="Go to testimonial slide ${idx + 1}"></button>
    `).join('');
  }

  /* ==========================================================================
     5. NAVIGATION (STICKY, MOBILE MENU, SCROLL HIGHLIGHTING)
     ========================================================================== */

  function setupNavigation() {
    const header = document.querySelector('header') || document.querySelector('.site-header') || document.querySelector('nav');
    const mobileBtn = document.getElementById('mobile-menu-btn') || document.querySelector('.mobile-menu-btn') || document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav') || document.querySelector('nav');

    // 1. Sticky Navigation on Scroll past 100px
    window.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 100;
      if (header) {
        header.classList.toggle('nav-scrolled', isScrolled);
      }
      highlightActiveNavLink();
    }, { passive: true });

    // 2. Mobile Menu Toggle
    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileNav.classList.toggle('mobile-menu-open');
        if (header) header.classList.toggle('mobile-menu-open', isOpen);
        mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close mobile menu on clicking any nav link
      const navLinks = mobileNav.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('mobile-menu-open');
          if (header) header.classList.remove('mobile-menu-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !mobileBtn.contains(e.target)) {
          mobileNav.classList.remove('mobile-menu-open');
          if (header) header.classList.remove('mobile-menu-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // 3. Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (mobileNav) mobileNav.classList.remove('mobile-menu-open');
        if (header) header.classList.remove('mobile-menu-open');
      }
    });
  }

  function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id], div[id].page-section');
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(`header a[href="#${id}"], nav a[href="#${id}"]`).forEach(link => {
          document.querySelectorAll('header a, nav a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        });
      }
    });
  }

  /* ==========================================================================
     6. SEARCH FUNCTIONALITY
     ========================================================================== */

  function setupSearch() {
    const searchToggles = document.querySelectorAll('#search-btn, .search-toggle, [data-action="toggle-search"]');
    const searchModal = document.getElementById('search-modal') || document.getElementById('search-bar') || document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input') || document.querySelector('.search-input');
    const searchResults = document.getElementById('search-results') || document.querySelector('.search-results');
    const searchClose = document.getElementById('search-close') || document.querySelector('.search-close');

    if (!searchModal) return;

    function toggleSearch(open) {
      const isVisible = open !== undefined ? open : !searchModal.classList.contains('active');
      searchModal.classList.toggle('active', isVisible);
      if (isVisible) {
        setTimeout(() => {
          if (searchInput) searchInput.focus();
        }, 100);
      } else {
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
      }
    }

    searchToggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSearch();
      });
    });

    if (searchClose) {
      searchClose.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSearch(false);
      });
    }

    // Close when clicking outside of search modal inner content
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        toggleSearch(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        toggleSearch(false);
      }
    });

    if (searchInput && searchResults) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        clearTimeout(searchDebounceTimeout);

        searchDebounceTimeout = setTimeout(() => {
          if (!query) {
            searchResults.innerHTML = '';
            searchResults.classList.remove('has-results');
            return;
          }

          const matched = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
          );

          if (matched.length === 0) {
            searchResults.innerHTML = `
              <div class="search-empty">
                <p>No luxury pieces found for "<strong>${escapeHTML(query)}</strong>"</p>
                <span class="search-hint">Try searching for leather jackets, cashmere, shoes, or watches.</span>
              </div>
            `;
            searchResults.classList.add('has-results');
            return;
          }

          searchResults.innerHTML = `
            <div class="search-results-header">
              <span>Found ${matched.length} ${matched.length === 1 ? 'result' : 'results'}</span>
            </div>
            <div class="search-results-list">
              ${matched.map(p => `
                <div class="search-result-item" data-id="${p.id}">
                  <img src="${p.image}" alt="${p.name}" class="search-result-thumb" />
                  <div class="search-result-info">
                    <span class="search-result-brand">${p.brand}</span>
                    <h4 class="search-result-name">${p.name}</h4>
                    <div class="search-result-price">
                      <span class="price-val">$${p.price.toFixed(2)}</span>
                      ${p.originalPrice ? `<span class="orig-val">$${p.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                  </div>
                  <button class="search-result-btn" data-action="quick-view" data-id="${p.id}" title="Quick View">
                    ${ICONS.eye}
                  </button>
                </div>
              `).join('')}
            </div>
          `;
          searchResults.classList.add('has-results');
        }, 200);
      });
    }
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* ==========================================================================
     7. SHOPPING CART (DRAWER & PERSISTENCE)
     ========================================================================== */

  function ensureCartDrawerElements() {
    let overlay = document.getElementById('cart-overlay') || document.querySelector('.cart-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'cart-overlay';
      overlay.className = 'cart-overlay';
      document.body.appendChild(overlay);
    }

    let drawer = document.getElementById('cart-drawer') || document.querySelector('.cart-drawer');
    if (!drawer) {
      drawer = document.createElement('aside');
      drawer.id = 'cart-drawer';
      drawer.className = 'cart-drawer';
      drawer.setAttribute('aria-label', 'Shopping Cart Drawer');
      drawer.innerHTML = `
        <div class="cart-drawer-header">
          <div class="cart-title-wrap">
            <h3>Your Shopping Cart</h3>
            <span class="cart-count-badge" id="cart-drawer-count">(0)</span>
          </div>
          <button class="cart-close-btn" id="cart-close-btn" aria-label="Close cart drawer">
            ${ICONS.close}
          </button>
        </div>
        <div class="cart-drawer-body" id="cart-items"></div>
        <div class="cart-drawer-footer" id="cart-footer">
          <div class="cart-summary">
            <div class="summary-line">
              <span>Subtotal</span>
              <span id="cart-subtotal">$0.00</span>
            </div>
            <div class="summary-line">
              <span>Estimated Shipping</span>
              <span class="free-shipping">Complimentary</span>
            </div>
            <div class="summary-line total-line">
              <span>Total</span>
              <span id="cart-total">$0.00</span>
            </div>
          </div>
          <button class="btn-checkout" id="cart-checkout-btn">
            <span>Proceed to Checkout</span>
            ${ICONS.arrowRight}
          </button>
          <div class="cart-security-badge">
            <span>🔒 Guaranteed 256-Bit Encrypted Secure Checkout</span>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);
    }
  }

  function updateCartBadgeCounts() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count, #cart-badge, [data-cart-count], #cart-drawer-count');
    badges.forEach(badge => {
      badge.textContent = badge.id === 'cart-drawer-count' ? `(${totalCount})` : totalCount;
      if (totalCount > 0) {
        badge.classList.add('has-items');
      } else {
        badge.classList.remove('has-items');
      }
    });
  }

  function renderCart() {
    ensureCartDrawerElements();
    const container = document.getElementById('cart-items') || document.querySelector('.cart-drawer-body');
    const footer = document.getElementById('cart-footer') || document.querySelector('.cart-drawer-footer');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon">${ICONS.bag}</div>
          <h4>Your Cart is Empty</h4>
          <p>Explore our curated collections of luxury apparel, footwear, and accessories.</p>
          <button class="btn-continue-shopping" id="btn-continue-shopping">Explore Collection</button>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      updateCartBadgeCounts();
      return;
    }

    if (footer) footer.style.display = 'block';

    let subtotal = 0;

    container.innerHTML = cart.map((item, index) => {
      const itemTotal = item.product.price * item.quantity;
      subtotal += itemTotal;

      return `
        <div class="cart-item" data-index="${index}" data-id="${item.product.id}">
          <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <div class="cart-item-header">
              <span class="cart-item-brand">${item.product.brand}</span>
              <button class="btn-cart-remove" data-action="cart-remove" data-index="${index}" data-id="${item.product.id}" aria-label="Remove ${item.product.name} from cart">
                ${ICONS.trash}
              </button>
            </div>
            <h4 class="cart-item-name">${item.product.name}</h4>
            <div class="cart-item-specs">
              ${item.size ? `<span class="cart-spec">Size: ${item.size}</span>` : ''}
              ${item.color ? `<span class="cart-spec">Color: ${item.color}</span>` : ''}
            </div>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button class="qty-btn" data-action="cart-qty" data-delta="-1" data-index="${index}" aria-label="Decrease quantity">−</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" data-action="cart-qty" data-delta="1" data-index="${index}" aria-label="Increase quantity">+</button>
              </div>
              <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;

    updateCartBadgeCounts();
  }

  function toggleCart(forceState) {
    ensureCartDrawerElements();
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;

    const isOpen = forceState !== undefined ? forceState : !drawer.classList.contains('cart-open');
    drawer.classList.toggle('cart-open', isOpen);
    if (overlay) overlay.classList.toggle('active', isOpen);
    document.body.classList.toggle('drawer-open', isOpen);
  }

  function addToCart(productId, quantity = 1, size = null, color = null) {
    const id = Number(productId);
    const product = products.find(p => p.id === id);
    if (!product) {
      showToast('Product could not be found.', 'error');
      return;
    }

    const selectedSize = size || (product.sizes && product.sizes.length ? product.sizes[0] : null);
    const selectedColor = color || (product.colors && product.colors.length ? product.colors[0].name : null);

    const existingIndex = cart.findIndex(item =>
      item.product.id === id &&
      item.size === selectedSize &&
      item.color === selectedColor
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        product,
        quantity,
        size: selectedSize,
        color: selectedColor
      });
    }

    saveCart();
    renderCart();
    showToast(`Added "${product.name}" to your cart.`, 'success');
    toggleCart(true);
  }

  function removeFromCart(indexOrId) {
    let index = -1;
    if (typeof indexOrId === 'number' && indexOrId < cart.length && indexOrId >= 0) {
      index = indexOrId;
    } else {
      index = cart.findIndex(i => i.product.id === Number(indexOrId));
    }

    if (index > -1) {
      const removed = cart.splice(index, 1)[0];
      saveCart();
      renderCart();
      showToast(`Removed "${removed.product.name}" from cart.`, 'info');
    }
  }

  function updateQuantity(indexOrId, delta) {
    let index = -1;
    if (typeof indexOrId === 'number' && indexOrId < cart.length && indexOrId >= 0) {
      index = indexOrId;
    } else {
      index = cart.findIndex(i => i.product.id === Number(indexOrId));
    }

    if (index > -1) {
      const newQty = cart[index].quantity + delta;
      if (newQty <= 0) {
        removeFromCart(index);
      } else {
        cart[index].quantity = newQty;
        saveCart();
        renderCart();
      }
    }
  }

  function setupCartEvents() {
    ensureCartDrawerElements();

    const cartTriggers = document.querySelectorAll('#cart-btn, .cart-toggle, [data-action="toggle-cart"]');
    cartTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCart();
      });
    });

    const overlay = document.getElementById('cart-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => toggleCart(false));
    }

    document.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('#cart-close-btn');
      if (closeBtn) {
        e.preventDefault();
        toggleCart(false);
      }

      const continueBtn = e.target.closest('#btn-continue-shopping');
      if (continueBtn) {
        e.preventDefault();
        toggleCart(false);
        const productsSec = document.getElementById('trending') || document.getElementById('featured') || document.getElementById('categories');
        if (productsSec) {
          productsSec.scrollIntoView({ behavior: 'smooth' });
        }
      }

      const checkoutBtn = e.target.closest('#cart-checkout-btn');
      if (checkoutBtn) {
        e.preventDefault();
        if (cart.length === 0) {
          showToast('Your cart is empty. Add items before checking out.', 'error');
          return;
        }
        showToast('Initiating 256-bit secure checkout...', 'success');
      }
    });
  }

  /* ==========================================================================
     8. WISHLIST MANAGEMENT
     ========================================================================== */

  function updateWishlistBadgeCounts() {
    const totalCount = wishlist.length;
    const badges = document.querySelectorAll('.wishlist-count, #wishlist-badge, [data-wishlist-count]');
    badges.forEach(badge => {
      badge.textContent = totalCount;
      if (totalCount > 0) {
        badge.classList.add('has-items');
      } else {
        badge.classList.remove('has-items');
      }
    });

    // Update all heart buttons across the page
    document.querySelectorAll('.btn-wishlist, [data-action="wishlist"]').forEach(btn => {
      const id = Number(btn.getAttribute('data-id'));
      const active = wishlist.includes(id);
      btn.classList.toggle('active', active);
      btn.setAttribute('title', active ? 'Remove from Wishlist' : 'Add to Wishlist');
      btn.innerHTML = active ? ICONS.heartFilled : ICONS.heartOutline;
    });
  }

  function toggleWishlist(productId) {
    const id = Number(productId);
    const product = products.find(p => p.id === id);
    const index = wishlist.indexOf(id);

    if (index > -1) {
      wishlist.splice(index, 1);
      showToast(`Removed "${product ? product.name : 'Item'}" from wishlist.`, 'info');
    } else {
      wishlist.push(id);
      showToast(`Added "${product ? product.name : 'Item'}" to your wishlist.`, 'success');
    }

    saveWishlist();
    updateWishlistBadgeCounts();
  }

  /* ==========================================================================
     9. QUICK VIEW MODAL
     ========================================================================== */

  function ensureQuickViewModal() {
    let modal = document.getElementById('quick-view-modal') || document.querySelector('.quick-view-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quick-view-modal';
      modal.className = 'quick-view-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="modal-backdrop" id="quick-view-backdrop"></div>
        <div class="modal-dialog">
          <button class="modal-close" id="quick-view-close" aria-label="Close quick view modal">
            ${ICONS.close}
          </button>
          <div class="modal-content" id="quick-view-content"></div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }

  function openQuickView(productId) {
    ensureQuickViewModal();
    const id = Number(productId);
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');
    if (!modal || !content) return;

    const isWishlisted = wishlist.includes(product.id);
    const defaultSize = product.sizes && product.sizes.length ? product.sizes[0] : '';
    const defaultColor = product.colors && product.colors.length ? product.colors[0].name : '';

    content.innerHTML = `
      <div class="qv-grid">
        <div class="qv-gallery">
          <div class="qv-main-image-wrap">
            <img src="${product.image}" alt="${product.name}" id="qv-main-img" class="qv-main-img" />
            ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
          </div>
          <div class="qv-thumbnails">
            <button class="qv-thumb-btn active" data-img="${product.image}">
              <img src="${product.image}" alt="Primary view" />
            </button>
            <button class="qv-thumb-btn" data-img="${product.hoverImage}">
              <img src="${product.hoverImage}" alt="Secondary view" />
            </button>
          </div>
        </div>
        <div class="qv-details">
          <div class="qv-brand">${product.brand}</div>
          <h2 class="qv-title">${product.name}</h2>
          ${renderStarRating(product.rating, product.reviews)}
          <div class="qv-pricing">
            <span class="qv-current-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="qv-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
            ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
          </div>
          <p class="qv-description">${product.description}</p>
          
          ${product.sizes && product.sizes.length ? `
            <div class="qv-option-group">
              <label class="qv-option-label">Select Size: <strong id="qv-selected-size">${defaultSize}</strong></label>
              <div class="qv-size-options" id="qv-size-options">
                ${product.sizes.map((s, idx) => `
                  <button type="button" class="qv-size-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${product.colors && product.colors.length ? `
            <div class="qv-option-group">
              <label class="qv-option-label">Select Color: <strong id="qv-selected-color">${defaultColor}</strong></label>
              <div class="qv-color-options" id="qv-color-options">
                ${product.colors.map((c, idx) => `
                  <button type="button" class="qv-color-btn ${idx === 0 ? 'active' : ''}" data-color="${c.name}" title="${c.name}" style="background-color: ${c.hex};"></button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="qv-actions-row">
            <div class="qv-qty-picker">
              <button type="button" class="qv-qty-btn" id="qv-qty-minus" aria-label="Decrease quantity">−</button>
              <input type="number" id="qv-qty-input" class="qv-qty-input" value="1" min="1" max="99" readonly />
              <button type="button" class="qv-qty-btn" id="qv-qty-plus" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn-qv-add-cart" id="qv-add-cart-btn" data-id="${product.id}">
              ${ICONS.bag}
              <span>Add to Cart</span>
            </button>
            <button class="btn-qv-wishlist ${isWishlisted ? 'active' : ''}" id="qv-wishlist-btn" data-id="${product.id}" aria-label="Add to wishlist" title="Add to Wishlist">
              ${isWishlisted ? ICONS.heartFilled : ICONS.heartOutline}
            </button>
          </div>

          <div class="qv-perks">
            <div class="qv-perk"><span>🚚</span> Free worldwide express delivery over $200</div>
            <div class="qv-perk"><span>✨</span> 30-day complimentary return guarantee</div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function setupQuickViewEvents() {
    ensureQuickViewModal();
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
      if (e.target.id === 'quick-view-backdrop' || e.target.closest('#quick-view-close')) {
        closeQuickView();
        return;
      }

      // Thumbnail switch
      const thumbBtn = e.target.closest('.qv-thumb-btn');
      if (thumbBtn) {
        const newImg = thumbBtn.getAttribute('data-img');
        const mainImg = document.getElementById('qv-main-img');
        if (mainImg && newImg) {
          mainImg.src = newImg;
          modal.querySelectorAll('.qv-thumb-btn').forEach(btn => btn.classList.remove('active'));
          thumbBtn.classList.add('active');
        }
        return;
      }

      // Size Selection
      const sizeBtn = e.target.closest('.qv-size-btn');
      if (sizeBtn) {
        modal.querySelectorAll('.qv-size-btn').forEach(btn => btn.classList.remove('active'));
        sizeBtn.classList.add('active');
        const label = document.getElementById('qv-selected-size');
        if (label) label.textContent = sizeBtn.getAttribute('data-size');
        return;
      }

      // Color Selection
      const colorBtn = e.target.closest('.qv-color-btn');
      if (colorBtn) {
        modal.querySelectorAll('.qv-color-btn').forEach(btn => btn.classList.remove('active'));
        colorBtn.classList.add('active');
        const label = document.getElementById('qv-selected-color');
        if (label) label.textContent = colorBtn.getAttribute('data-color');
        return;
      }

      // Qty Buttons
      const minusBtn = e.target.closest('#qv-qty-minus');
      const plusBtn = e.target.closest('#qv-qty-plus');
      const qtyInput = document.getElementById('qv-qty-input');
      if (minusBtn && qtyInput) {
        const current = parseInt(qtyInput.value, 10) || 1;
        if (current > 1) qtyInput.value = current - 1;
        return;
      }
      if (plusBtn && qtyInput) {
        const current = parseInt(qtyInput.value, 10) || 1;
        qtyInput.value = current + 1;
        return;
      }

      // Add to Cart from Quick View
      const addCartBtn = e.target.closest('#qv-add-cart-btn');
      if (addCartBtn) {
        const id = Number(addCartBtn.getAttribute('data-id'));
        const qty = parseInt(document.getElementById('qv-qty-input')?.value, 10) || 1;
        const activeSize = modal.querySelector('.qv-size-btn.active')?.getAttribute('data-size') || null;
        const activeColor = modal.querySelector('.qv-color-btn.active')?.getAttribute('data-color') || null;

        addToCart(id, qty, activeSize, activeColor);
        closeQuickView();
        return;
      }

      // Wishlist toggle from Quick View
      const wishlistBtn = e.target.closest('#qv-wishlist-btn');
      if (wishlistBtn) {
        const id = Number(wishlistBtn.getAttribute('data-id'));
        toggleWishlist(id);
        const isWishlisted = wishlist.includes(id);
        wishlistBtn.classList.toggle('active', isWishlisted);
        wishlistBtn.innerHTML = isWishlisted ? ICONS.heartFilled : ICONS.heartOutline;
        return;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeQuickView();
      }
    });
  }

  /* ==========================================================================
     10. TOAST NOTIFICATIONS (STACKING & AUTO-DISMISS)
     ========================================================================== */

  function ensureToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(container);
    }
    return container;
  }

  function showToast(message, type = 'success') {
    const container = ensureToastContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSVG = ICONS.success;
    if (type === 'error') iconSVG = ICONS.error;
    if (type === 'info') iconSVG = ICONS.info;

    toast.innerHTML = `
      <div class="toast-icon">${iconSVG}</div>
      <div class="toast-message">${escapeHTML(message)}</div>
      <button class="toast-close-btn" aria-label="Dismiss notification">${ICONS.close}</button>
      <div class="toast-progress"></div>
    `;

    container.appendChild(toast);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      toast.classList.add('toast-visible');
    });

    const dismissTimeout = setTimeout(() => {
      dismissToast(toast);
    }, 3200);

    const closeBtn = toast.querySelector('.toast-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        clearTimeout(dismissTimeout);
        dismissToast(toast);
      });
    }
  }

  function dismissToast(toast) {
    if (!toast || toast.classList.contains('toast-hiding')) return;
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-hiding');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 350);
  }

  /* ==========================================================================
     11. ANNOUNCEMENT BAR
     ========================================================================== */

  function setupAnnouncementBar() {
    const bar = document.getElementById('announcement-bar') || document.querySelector('.announcement-bar');
    const closeBtn = document.getElementById('announcement-close') || document.querySelector('.announcement-close') || document.querySelector('[data-close-announcement]');

    if (!bar) return;

    if (sessionStorage.getItem('luxe_announcement_dismissed') === 'true') {
      bar.style.display = 'none';
      return;
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        bar.style.transition = 'max-height 0.4s ease, opacity 0.3s ease, padding 0.4s ease';
        bar.style.maxHeight = '0px';
        bar.style.opacity = '0';
        bar.style.padding = '0';
        bar.style.overflow = 'hidden';
        setTimeout(() => {
          bar.style.display = 'none';
          sessionStorage.setItem('luxe_announcement_dismissed', 'true');
        }, 400);
      });
    }
  }

  /* ==========================================================================
     12. TESTIMONIAL CAROUSEL (AUTO-SLIDE, DOTS, PREV/NEXT)
     ========================================================================== */

  function goToTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (!slides.length) return;

    activeTestimonialIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === activeTestimonialIndex);
      slide.style.transform = `translateX(-${activeTestimonialIndex * 100}%)`;
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeTestimonialIndex);
    });
  }

  function nextTestimonial() {
    goToTestimonial(activeTestimonialIndex + 1);
  }

  function prevTestimonial() {
    goToTestimonial(activeTestimonialIndex - 1);
  }

  function startTestimonialCarousel() {
    stopTestimonialCarousel();
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function stopTestimonialCarousel() {
    if (testimonialInterval) {
      clearInterval(testimonialInterval);
      testimonialInterval = null;
    }
  }

  function setupTestimonials() {
    renderTestimonials();

    const carousel = document.getElementById('testimonial-carousel') || document.querySelector('.testimonial-carousel') || document.querySelector('.testimonials-slider');
    const prevBtn = document.getElementById('testimonial-prev') || document.querySelector('.testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next') || document.querySelector('.testimonial-next');
    const dotsContainer = document.getElementById('testimonial-dots') || document.querySelector('.testimonial-dots');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevTestimonial();
        startTestimonialCarousel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextTestimonial();
        startTestimonialCarousel();
      });
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.testimonial-dot');
        if (dot) {
          const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
          goToTestimonial(slideIdx);
          startTestimonialCarousel();
        }
      });
    }

    if (carousel) {
      carousel.addEventListener('mouseenter', stopTestimonialCarousel);
      carousel.addEventListener('mouseleave', startTestimonialCarousel);

      // Touch Swipe Support
      let touchStartX = 0;
      let touchEndX = 0;

      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          nextTestimonial();
          startTestimonialCarousel();
        } else if (touchEndX - touchStartX > 50) {
          prevTestimonial();
          startTestimonialCarousel();
        }
      }, { passive: true });
    }

    startTestimonialCarousel();
  }

  /* ==========================================================================
     13. COUNTDOWN TIMER (3 DAYS FROM NOW)
     ========================================================================== */

  function setupCountdownTimer() {
    const daysEl = document.getElementById('countdown-days') || document.querySelector('.countdown-days');
    const hoursEl = document.getElementById('countdown-hours') || document.querySelector('.countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes') || document.querySelector('.countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds') || document.querySelector('.countdown-seconds');

    if (!daysEl && !hoursEl && !minutesEl && !secondsEl) return;

    let targetTime = localStorage.getItem('luxe_sale_target');
    const now = Date.now();

    if (!targetTime || parseInt(targetTime, 10) <= now) {
      // Set to exactly 3 days from now
      targetTime = now + (3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('luxe_sale_target', targetTime);
    } else {
      targetTime = parseInt(targetTime, 10);
    }

    function update() {
      const remaining = Math.max(0, targetTime - Date.now());

      const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((remaining % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');

      if (remaining <= 0 && countdownInterval) {
        clearInterval(countdownInterval);
      }
    }

    update();
    countdownInterval = setInterval(update, 1000);
  }

  /* ==========================================================================
     14. NEWSLETTER FORM (VALIDATION & SUBMISSION)
     ========================================================================== */

  function setupNewsletter() {
    const forms = document.querySelectorAll('#newsletter-form, .newsletter-form, form[data-action="newsletter"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"], #newsletter-email');
        if (!input) return;

        const email = input.value.trim();
        if (!email) {
          showToast('Please enter your email address.', 'error');
          input.focus();
          return;
        }

        if (!emailRegex.test(email)) {
          showToast('Please provide a valid email format (e.g., name@domain.com).', 'error');
          input.focus();
          return;
        }

        // Success
        input.value = '';
        showToast('Thank you for subscribing! Check your inbox for your 15% VIP welcome code.', 'success');
      });
    });
  }

  /* ==========================================================================
     15. BACK TO TOP BUTTON
     ========================================================================== */

  function setupBackToTop() {
    const btn = document.getElementById('back-to-top') || document.querySelector('.back-to-top') || document.querySelector('[data-action="back-to-top"]');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      const pastThreshold = window.scrollY > 500;
      btn.classList.toggle('visible', pastThreshold);
    }, { passive: true });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     16. INTERSECTION OBSERVER SCROLL ANIMATIONS
     ========================================================================== */

  let scrollObserver = null;

  function observeAnimatedElements(scope = document) {
    if (!('IntersectionObserver' in window)) {
      scope.querySelectorAll('[data-animate]').forEach(el => el.classList.add('animate-in'));
      return;
    }

    if (!scrollObserver) {
      scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
      });
    }

    scope.querySelectorAll('[data-animate]:not(.animate-in)').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  /* ==========================================================================
     17. PRODUCT FILTERING (TABS FOR TRENDING & BESTSELLERS)
     ========================================================================== */

  function setupProductFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab, [data-filter-tab], .tab-btn');

    filterTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const category = tab.getAttribute('data-filter') || tab.textContent.trim().toLowerCase();
        const parentContainer = tab.closest('.filter-tabs-wrapper') || tab.parentElement;
        const targetContainerId = tab.getAttribute('data-target') || 'trending-products';

        // Toggle active tab style in current group
        if (parentContainer) {
          parentContainer.querySelectorAll('.filter-tab, [data-filter-tab], .tab-btn').forEach(btn => btn.classList.remove('active'));
        }
        tab.classList.add('active');

        // Filter products
        let filtered = products;
        const cleanCat = category.toLowerCase().replace(/['s]/g, '').trim();

        if (cleanCat !== 'all' && cleanCat !== '') {
          filtered = products.filter(p => {
            const pCat = p.category.toLowerCase();
            return pCat === cleanCat || (cleanCat === 'new' && p.isNew);
          });
        }

        // Animate container re-render
        const container = document.getElementById(targetContainerId) || document.querySelector(`#${targetContainerId}`) || document.getElementById('products-grid');
        if (container) {
          container.style.opacity = '0';
          container.style.transform = 'translateY(8px)';
          container.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

          setTimeout(() => {
            renderProducts(filtered, container);
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
          }, 200);
        }
      });
    });

    // Handle Category Card clicks that link to filters
    document.addEventListener('click', (e) => {
      const catLink = e.target.closest('.category-link, [data-filter]');
      if (catLink && !catLink.classList.contains('filter-tab')) {
        const filterVal = catLink.getAttribute('data-filter');
        if (filterVal) {
          const matchingTab = document.querySelector(`.filter-tab[data-filter="${filterVal}"]`);
          if (matchingTab) {
            matchingTab.click();
          }
        }
      }
    });
  }

  /* ==========================================================================
     18. GLOBAL EVENT DELEGATION
     ========================================================================== */

  function setupGlobalDelegation() {
    document.addEventListener('click', (e) => {
      // 1. Add to Cart button click
      const addCartBtn = e.target.closest('[data-action="add-cart"]');
      if (addCartBtn) {
        e.preventDefault();
        const id = Number(addCartBtn.getAttribute('data-id'));
        if (id) addToCart(id);
        return;
      }

      // 2. Wishlist toggle click
      const wishlistBtn = e.target.closest('[data-action="wishlist"]');
      if (wishlistBtn) {
        e.preventDefault();
        const id = Number(wishlistBtn.getAttribute('data-id'));
        if (id) toggleWishlist(id);
        return;
      }

      // 3. Quick View trigger click
      const quickViewBtn = e.target.closest('[data-action="quick-view"]');
      if (quickViewBtn) {
        e.preventDefault();
        const id = Number(quickViewBtn.getAttribute('data-id'));
        if (id) openQuickView(id);
        return;
      }

      // 4. Cart Stepper Minus/Plus
      const qtyBtn = e.target.closest('[data-action="cart-qty"]');
      if (qtyBtn) {
        e.preventDefault();
        const delta = parseInt(qtyBtn.getAttribute('data-delta'), 10) || 0;
        const index = parseInt(qtyBtn.getAttribute('data-index'), 10);
        updateQuantity(index, delta);
        return;
      }

      // 5. Cart Item Remove
      const removeBtn = e.target.closest('[data-action="cart-remove"]');
      if (removeBtn) {
        e.preventDefault();
        const index = parseInt(removeBtn.getAttribute('data-index'), 10);
        removeFromCart(index);
        return;
      }
    });
  }

  /* ==========================================================================
     19. INITIALIZATION
     ========================================================================== */

  function initApp() {
    loadSavedState();

    // Render Dynamic Content
    renderCategories();

    // Render Product Sections (Trending, Bestsellers, Featured, General Grid)
    renderProducts(products.filter(p => p.isTrending), 'trending-products');
    renderProducts(products.filter(p => p.isBestseller), 'bestseller-products');
    renderProducts(products.slice(0, 8), 'featured-products');
    renderProducts(products, 'products-grid');

    // Cart and Wishlist setup
    renderCart();
    updateCartBadgeCounts();
    updateWishlistBadgeCounts();

    // UI Features
    setupNavigation();
    setupSearch();
    setupCartEvents();
    setupQuickViewEvents();
    setupAnnouncementBar();
    setupTestimonials();
    setupCountdownTimer();
    setupNewsletter();
    setupBackToTop();
    setupProductFilters();
    setupGlobalDelegation();
    observeAnimatedElements();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  /* ==========================================================================
     20. PUBLIC API EXPOSURE (WINDOW.LUXE)
     ========================================================================== */

  window.LUXE = {
    products,
    categories,
    testimonials,
    cart,
    wishlist,
    renderCategories,
    renderProducts,
    renderTestimonials,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    renderCart,
    toggleWishlist,
    openQuickView,
    closeQuickView,
    showToast,
    goToTestimonial,
    nextTestimonial,
    prevTestimonial
  };

})();
