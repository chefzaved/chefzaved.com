export type DishCategory =
  | "Authentic Bengali Heritage"
  | "Modern European & Grills"
  | "Artisanal Canapés & Amuse-Bouche"
  | "Bespoke Grazing & Desserts";

export interface Dish {
  id: string;
  name: string;
  category: DishCategory;
  description: string;
  ingredients: string[];
  dietary: string[];
  winePairing: string;
  imageUrl: string;
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge?: string;
  iconName: string;
  idealFor: string;
  inclusions: string[];
  sampleMenuLink?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientLocation: string;
  avatarUrl: string;
  rating: number;
  eventType: string;
  date: string;
  quote: string;
  highlightDish: string;
}

export interface BackgroundSlide {
  id: number;
  imageUrl: string;
  name: string;
}

export const BACKGROUND_SLIDES: BackgroundSlide[] = [
  {
    id: 1,
    imageUrl: "/images/background/1.jpeg",
    name: "Traditional Gondhoraj Bhetki Paturi",
  },
  {
    id: 2,
    imageUrl: "/images/background/2.jpeg",
    name: "Artisanal Tomato & Herb Canapés",
  },
  {
    id: 3,
    imageUrl: "/images/background/3.jpeg",
    name: "Handcrafted Truffle & Sesame Fusion Sushi",
  },
  {
    id: 4,
    imageUrl: "/images/background/4.jpeg",
    name: "Grand Bespoke Banqueting & Sushi Spread",
  },
  {
    id: 5,
    imageUrl: "/images/background/5.jpeg",
    name: "Golden Caviar & Sesame Fusion Maki",
  },
  {
    id: 6,
    imageUrl: "/images/background/6.jpeg",
    name: "Artisanal Beetroot & Avocado Fusion Rolls",
  },
];

export const CHEF_INFO = {
  name: "Chef Zaved",
  title: "Master of Modern Gastronomy & Private Dining",
  tagline: "Crafting Culinary Masterpieces, One Plate at a Time",
  subtext:
    "Experience fine dining in the comfort of your home with exclusive private chef services, bespoke menus, and masterclasses.",
  photoUrl: "/images/chef-1.jpeg",
  logoUrl: "/images/logo.png",
  signatureUrl: "/images/signature.png",
  experienceYears: 18,
  privateDinnersCount: "650+",
  satisfactionRate: "99.8%",
  countriesServed: 18,
  bioParagraph1:
    "Chef Zaved is an accomplished culinary professional with over 18 years of experience across luxury hospitality, fine dining, and international cruise operations. His professional journey includes prestigious hospitality brands such as Taj Group of Hotels, Araiya Hotels & Resorts, Polo Towers, Uniworld Boutique River Cruise Collection, Edelweiss, Avalon Waterways, Barak, Al Barandah, Vedic Village Spa Resort, Fortune Hospitality, and Peerless Inn.",
  bioParagraph2:
    "His culinary vision centres on exclusive supper club experiences, bringing Indian and international cuisines together through chef-curated seasonal menus, modern gastronomy, and creative flavour pairings. Specialising in intimate sit-down dinners, bespoke dining experiences, and contemporary grazing concepts, Chef Zaved transforms seasonal ingredients and culinary traditions into distinctive gastronomic journeys, where every menu tells a story and every dining experience feels personal, innovative, and memorable.",
  philosophyQuote:
    "Where every menu tells a story and every dining experience feels personal, innovative, and memorable.",
  credentials: [
    {
      title: "Luxury Hospitality & Taj Alum",
      desc: "Prestigious pedigree across Taj Group of Hotels, Araiya Hotels & Resorts, and luxury boutique properties.",
    },
    {
      title: "Global Cruise Operations",
      desc: "International fine dining with Uniworld Boutique River Cruise Collection, Edelweiss & Avalon Waterways.",
    },
    {
      title: "Exclusive Supper Clubs",
      desc: "Specialising in intimate sit-down dinners, bespoke gastronomy, and contemporary grazing concepts.",
    },
    {
      title: "Indian & Global Modern Fusion",
      desc: "Harmonizing Indian culinary traditions with modern international techniques and seasonal flavour pairings.",
    },
  ],
  contact: {
    email: "enquire@chefzaved.com",
    phone: "+91 84200 08483",
    directMobile: "+91 84200 08483",
    locations: "Newtown, Salt Lake Sec V, Kolkata, West Bengal, India",
    notice: "Private dining bookings require a minimum of 72 hours advance notice.",
  },
  socials: [
    { name: "Instagram", url: "https://instagram.com/chefzaved", handle: "@chefzaved" },
    { name: "Facebook", url: "https://facebook.com/chefzaved", handle: "Chef Zaved Official" },
    { name: "YouTube", url: "https://youtube.com/@chefzaved", handle: "Chef Zaved Gastronomy" },
    { name: "LinkedIn", url: "https://linkedin.com/in/chefzaved", handle: "Chef Zaved" },
  ],
};

export const SERVICES_DATA: Service[] = [
  {
    id: "private-dining",
    title: "Private In-Home Dining",
    tagline: "Intimate dinners & family celebrations transformed into Michelin-standard experiences.",
    badge: "Most Requested",
    iconName: "UtensilsCrossed",
    idealFor: "Intimate anniversaries, VIP client entertaining, luxury family gatherings (2 to 16 guests)",
    description:
      "Transform your dining room into an exclusive private restaurant. Chef Zaved arrives equipped with custom artisanal ingredients, prepares an exquisite multi-course degustation on-site, presents each dish with its culinary backstory, and leaves your kitchen spotless.",
    inclusions: [
      "Custom bespoke multi-course degustation menu",
      "Table styling guidance and custom printed menu cards",
      "Full ingredient procurement from artisanal purveyors",
      "Interactive dish presentation by Chef Zaved",
      "Complete post-event kitchen sanitization and cleanup",
      "Optional sommelier wine pairing flight",
    ],
  },
  {
    id: "luxury-catering",
    title: "Luxury Event Catering",
    tagline: "Opulent culinary choreography for milestone weddings, galas, and corporate high-teas.",
    badge: "Galas & Receptions",
    iconName: "Sparkles",
    idealFor: "Luxury weddings, brand launches, corporate retreats, yacht receptions (20 to 150 guests)",
    description:
      "For grand occasions demanding culinary excellence, Chef Zaved and his white-glove brigade curate synchronized silver service, dramatic live chef carving stations, and artfully sculpted hors d'oeuvres that leave an indelible impression on your guests.",
    inclusions: [
      "Synchronized multi-course banquet or interactive chef stations",
      "Dedicated culinary brigade and silver-service waitstaff",
      "Signature cocktail and mocktail mixology pairings",
      "Dietary customizations for every individual guest",
      "Luxury tableware, linen, and glassware coordination",
      "Pre-event private tasting session for the host",
    ],
  },
  {
    id: "masterclasses",
    title: "Masterclasses & Cooking Workshops",
    tagline: "Hands-on, immersive masterclasses in the art of haute cuisine and knife mastery.",
    badge: "Interactive Experience",
    iconName: "GraduationCap",
    idealFor: "Gourmet enthusiasts, couples' dates, corporate team bonding, food lovers",
    description:
      "Step into the culinary atelier with Chef Zaved. Learn professional knife skills, the secret alchemy of French mother sauces, sous-vide precision, and artistic plating techniques in an engaging, lively, and delicious interactive workshop.",
    inclusions: [
      "3-hour interactive hands-on cooking atelier",
      "All professional prep tools, custom chef aprons & knives provided",
      "Learn 3 signature restaurant-quality dishes from scratch",
      "Communal celebratory tasting paired with fine wines",
      "Exclusive bound recipe dossier & certificate of completion",
      "Personal Q&A and insider culinary tips from Chef Zaved",
    ],
  },
  {
    id: "menu-consulting",
    title: "Menu Consulting & Culinary Strategy",
    tagline: "Elevating boutique hotels, luxury restaurants, and high-end culinary startups.",
    badge: "B2B Excellence",
    iconName: "Compass",
    idealFor: "Fine dining restaurants, boutique hotel groups, luxury private clubs, food concepts",
    description:
      "Leverage Chef Zaved's sixteen years of culinary operational mastery. From conceptualizing award-winning seasonal menus and optimizing food cost margins to training kitchen brigades on contemporary plating and sous-vide execution.",
    inclusions: [
      "Comprehensive culinary identity and menu engineering",
      "Recipe development, standard operating sheets & costing matrices",
      "Brigade training on contemporary plating and high-speed execution",
      "Supplier network introductions for rare and organic ingredients",
      "Kitchen layout workflow optimization and equipment consulting",
      "Post-launch quality audits and guest feedback analysis",
    ],
  },
];

export const DISHES_DATA: Dish[] = [

  // ==========================================
  // MODERN EUROPEAN & GRILLS
  // ==========================================
  {
    id: "euro-1",
    name: "Pistachio-Crusted Herb Rack of Lamb",
    category: "Modern European & Grills",
    description:
      "Prime New Zealand French-trimmed rack of lamb encrusted in Sicilian pistachio crumb and fresh herbs, roasted pink and served alongside provencal ratatouille and a 48-hour rosemary-infused jus.",
    ingredients: ["Prime Rack of Lamb", "Sicilian Pistachio", "Dijon Mustard", "Fresh Rosemary & Thyme", "Bone Marrow Jus", "Ratatouille"],
    dietary: ["Halal Available"],
    winePairing: "Château Margaux Premier Grand Cru Classé 2015",
    badge: "Chef's Signature Cut",
    imageUrl: "/images/dishes/rack-of-lamb.jpg",
  },
  {
    id: "euro-2",
    name: "Sous-Vide Chicken Roulade on Slate",
    category: "Modern European & Grills",
    description:
      "Tender chicken breast roulade stuffed with wild mushroom duxelles and herbs, cooked sous-vide to silky succulence, sliced on natural slate with creamy parsnip velouté and carrot quenelle.",
    ingredients: ["Corn-Fed Chicken Breast", "Wild Forest Mushrooms", "Parsnip Velouté", "Glazed Baby Carrots", "Fresh Chives"],
    dietary: ["Halal"],
    winePairing: "Domaine Drouhin Dundee Hills Chardonnay 2020",
    badge: "Precision Gastronomy",
    imageUrl: "/images/dishes/chicken-roulade.jpg",
  },
  {
    id: "euro-3",
    name: "Pan-Seared Duck Breast with Cherry Reduction",
    category: "Modern European & Grills",
    description:
      "Crispy-skin French duck breast roasted to medium rare, plated with dehydrated black olive soil, microgreens, and a spiced Morello cherry and ruby port reduction.",
    ingredients: ["French Duck Breast", "Morello Cherries", "Ruby Port Reduction", "Dehydrated Olive Soil", "Baby Microgreens"],
    dietary: ["Halal Available", "Gluten-Free"],
    winePairing: "Pinot Noir Domaine Dujac Morey-Saint-Denis 2019",
    badge: "Haute Cuisine",
    imageUrl: "/images/dishes/duck-breast.jpg",
  },
  {
    id: "euro-4",
    name: "Pan-Seared Seabass on Crispy Potato Rosti",
    category: "Modern European & Grills",
    description:
      "Crispy skin wild Chilean seabass resting on a golden-brown shredded potato rosti cake, surrounded by Meyer lemon caper herb butter sauce and pea tendrils.",
    ingredients: ["Wild Chilean Seabass", "Yukon Potato Rosti", "Meyer Lemon Beurre Blanc", "Caper Berries", "Micro Greens"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Chablis Premier Cru 2021",
    badge: "Coastal Masterpiece",
    imageUrl: "/images/dishes/seabass-rosti.jpg",
  },
  {
    id: "euro-5",
    name: "Scottish Salmon with Asparagus & Baby Potatoes",
    category: "Modern European & Grills",
    description:
      "Crisp pan-roasted Scottish salmon fillet served over charred English asparagus spears, herb-roasted marble baby potatoes, blistered vine tomatoes, and green herb emulsion.",
    ingredients: ["Scottish Salmon", "Charred Asparagus", "Baby Marble Potatoes", "Cherry Tomatoes", "Dill Herb Emulsion"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Sancerre Domaine Vacheron 2021",
    badge: "Fresh & Balanced",
    imageUrl: "/images/dishes/salmon-asparagus.jpg",
  },
  {
    id: "euro-6",
    name: "Saffron Poached Tiger Prawn in Velouté",
    category: "Modern European & Grills",
    description:
      "Colossal Bay of Bengal tiger prawn poached in saffron-scented court-bouillon, served on velvety shellfish bisque purée with micro sea herbs and herb oil droplets.",
    ingredients: ["Colossal Tiger Prawn", "Kashmiri Saffron", "Shellfish Velouté", "Tarragon Oil", "Micro Herbs"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Dom Pérignon Vintage Champagne 2013",
    badge: "Plated Luxury",
    imageUrl: "/images/dishes/saffron-prawn-veloute.jpg",
  },
  {
    id: "euro-7",
    name: "Handcrafted Truffle Tagliolini",
    category: "Modern European & Grills",
    description:
      "Freshly extruded egg tagliolini pasta tossed in Normandy butter, 36-month aged Parmigiano Reggiano, and finished tableside with shaved Umbrian black winter truffles.",
    ingredients: ["Handmade Egg Pasta", "Normandy Cultured Butter", "Aged Parmigiano Reggiano", "Black Winter Truffle", "Cold-Pressed Olive Oil"],
    dietary: ["Vegetarian"],
    winePairing: "Barolo Pio Cesare 2017",
    badge: "Artisan Pasta",
    imageUrl: "/images/dishes/truffle-tagliolini.jpg",
  },
  {
    id: "euro-8",
    name: "Charred Herb-Crusted Tenderloin",
    category: "Modern European & Grills",
    description:
      "Prime grain-fed tenderloin medallion crusted with garden herbs and black peppercorns, served with potato mousseline, baby vegetables, and a rich truffled bordelaise glaze.",
    ingredients: ["Prime Beef Tenderloin", "Fresh Herbs", "Potato Mousseline", "Baby Carrots", "Bordelaise Truffle Jus"],
    dietary: ["Halal Available", "Gluten-Free"],
    winePairing: "Brunello di Montalcino Biondi-Santi 2016",
    badge: "Charcoal Seared",
    imageUrl: "/images/dishes/charred-tenderloin.jpg",
  },
  {
    id: "euro-9",
    name: "Charred Mediterranean Octopus & Jumbo Prawn",
    category: "Modern European & Grills",
    description:
      "Spanish octopus tentacle braised tender and crisped over open fire, alongside grilled wild tiger prawn, drizzled with smoked paprika emulsion, squid ink crisps, and sea salt.",
    ingredients: ["Spanish Octopus", "Jumbo Tiger Prawn", "Smoked Paprika Oil", "Squid Ink Crisp", "Fleur de Sel"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Albariño Rías Baixas 2021",
    badge: "Seafood Haute Grill",
    imageUrl: "/images/dishes/grilled-octopus-prawn.jpg",
  },
  {
    id: "euro-10",
    name: "Charred Baby Asparagus with Truffle Risotto",
    category: "Modern European & Grills",
    description:
      "Acquerello carnaroli risotto cooked in aromatic vegetable velouté with goat cheese snow, crowned with wood-fired baby asparagus spears and white truffle oil drops.",
    ingredients: ["Carnaroli Rice", "Tender Green Asparagus", "French Chèvre", "White Truffle Essence", "Micro Cress"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Gavi di Gavi La Scolca 2020",
    badge: "Seasonal Elegance",
    imageUrl: "/images/dishes/charred-asparagus-risotto.jpg",
  },

  // ==========================================
  // ARTISANAL CANAPÉS & AMUSE-BOUCHE
  // ==========================================
  {
    id: "can-1",
    name: "Artisanal Truffle & Sesame Uramaki Roll",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Inside-out sushi rolls rolled in toasted white sesame seeds, filled with fresh avocado, cucumber, and asparagus, drizzled with truffle glaze and edible gold shimmer.",
    ingredients: ["Sushi Rice", "Hass Avocado", "English Cucumber", "Toasted Sesame", "Black Truffle Glaze", "Nori"],
    dietary: ["Vegetarian", "Vegan Available", "Gluten-Free", "Halal"],
    winePairing: "Junmai Daiginjo Dassai 23 Sake",
    badge: "Signature Fusion",
    imageUrl: "/images/dishes/fusion-sushi.jpg",
  },
  {
    id: "can-2",
    name: "Beetroot-Infused Pink Dragon Sushi",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Vibrant beetroot-tinted sushi rice roll packed with tempura crunch, avocado, and pickled daikon, garnished with pink tobiko pearls and micro chervil.",
    ingredients: ["Beetroot Infused Rice", "Crispy Tempura Flakes", "Avocado", "Pickled Radish", "Tobiko Caviar"],
    dietary: ["Pescatarian", "Halal"],
    winePairing: "Ruinart Rosé Champagne NV",
    badge: "Visual Showstopper",
    imageUrl: "/images/dishes/dragon-sushi.jpg",
  },
  {
    id: "can-3",
    name: "Steamed Beetroot & Edamame Crystal Dim Sum",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Hand-pleated translucent crystal dumplings tinged with ruby beetroot juice, filled with crushed edamame, water chestnuts, and ginger, steamed on fresh banana leaf.",
    ingredients: ["Translucent Wheat Starch", "Ruby Beetroot", "Edamame Beans", "Water Chestnuts", "Sesame-Ginger Dip"],
    dietary: ["Vegetarian", "Vegan", "Halal"],
    winePairing: "Sparkling Franciacorta Brut 2018",
    badge: "Artisan Dim Sum",
    imageUrl: "/images/dishes/dimsum-beetroot.jpg",
  },
  {
    id: "can-4",
    name: "Sesame-Crusted Ahi Tuna Tataki",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Sashimi-grade yellowfin tuna quickly seared in black and white sesame seeds, sliced thin with Asian microgreens, lime wedge, cherry tomatoes, and citrus ponzu dressing.",
    ingredients: ["Yellowfin Tuna", "Sesame Seed Crust", "Micro Mustard Greens", "Cherry Tomatoes", "Ponzu Reduction"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Chablis Grand Cru Les Clos 2019",
    badge: "Sashimi Excellence",
    imageUrl: "/images/dishes/tuna-tataki.jpg",
  },
  {
    id: "can-5",
    name: "Stuffed Zucchini Blossom with Saffron Jus",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Delicate organic zucchini flower filled with whipped ricotta and herbs, gently poached and served in an aromatic saffron jus with pink peppercorns.",
    ingredients: ["Zucchini Blossom", "Artisanal Ricotta", "Kashmiri Saffron Emulsion", "Pink Peppercorns", "Fresh Basil"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Pinot Bianco Alto Adige 2021",
    badge: "Bespoke Plating",
    imageUrl: "/images/dishes/stuffed-zucchini-flower.jpg",
  },
  {
    id: "can-6",
    name: "Compressed Watermelon, Feta & Mint Skewers",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Vacuum-compressed sweet watermelon cubes layered with Greek barrel-aged feta cheese, fresh garden mint, and a drop of 12-year Modena balsamic glaze.",
    ingredients: ["Compressed Watermelon", "Aged Greek Feta", "Garden Mint", "Modena Balsamic Pearls", "Cold-Pressed Olive Oil"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Côtes de Provence Rosé Whispering Angel 2021",
    badge: "Refreshing Amuse",
    imageUrl: "/images/dishes/watermelon-feta.jpg",
  },
  {
    id: "can-7",
    name: "Wild Mushroom & Truffle Mini Quiches",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Flaky shortcrust tartlets baked with sautéed wild forest chanterelles, shiitake mushrooms, Gruyère cheese custard, and white truffle essence.",
    ingredients: ["All-Butter Tart Crust", "Wild Forest Mushrooms", "Cave-Aged Gruyère", "Heavy Cream Custard", "Truffle Essence"],
    dietary: ["Vegetarian"],
    winePairing: "Meursault Premier Cru 2020",
    badge: "Cocktail Favourite",
    imageUrl: "/images/dishes/mushroom-quiche.jpg",
  },
  {
    id: "can-8",
    name: "Baked Spinach & Brie Tartlets",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Golden pastry shells filled with creamed baby spinach, roasted garlic, and melted double-cream French Brie, topped with micro parsley.",
    ingredients: ["Flaky Pastry Tart", "Baby English Spinach", "Double Cream French Brie", "Roasted Garlic", "Nutmeg"],
    dietary: ["Vegetarian"],
    winePairing: "Crémant de Bourgogne Brut",
    badge: "Warm Canapé",
    imageUrl: "/images/dishes/spinach-brie-tartlet.jpg",
  },
  {
    id: "can-9",
    name: "Artisanal Avocado & Pomegranate Spoons",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Crisp papad-style canapé spoons filled with lime-cured Hass avocado mousse, ruby pomegranate pearls, micro cress, and black salt dust.",
    ingredients: ["Crisp Papad Spoons", "Hass Avocado", "Ruby Pomegranate", "Kala Namak", "Cilantro Oil"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Halal"],
    winePairing: "Cava Reserva Brut Nature 2019",
    badge: "Zesty & Crisp",
    imageUrl: "/images/dishes/avocado-crisp-tartlet.jpg",
  },
  {
    id: "can-10",
    name: "Coastal Shellfish in Roasted Coconut Shells",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Mini halved roasted coconut shells filled with fiery Malabar spiced baby prawns, curry leaf crisps, and toasted grated coconut.",
    ingredients: ["Baby Bay Prawns", "Roasted Coconut Shells", "Curry Leaves", "Mustard Seeds", "Cold-Pressed Coconut Oil"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Dry Gewürztraminer 2020",
    badge: "Rustic Showpiece",
    imageUrl: "/images/dishes/roasted-coconut-canapes.jpg",
  },
  {
    id: "can-11",
    name: "Garlic Herb Stuffed Portobello Caps",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Bite-sized baby portobello mushroom caps stuffed with a savoury filling of garlic herb breadcrumbs, creamed cheese, and parsley butter.",
    ingredients: ["Baby Portobello Caps", "Garlic Butter", "Fresh Thyme & Parsley", "Panko Herb Crumb", "Aged Parmesan"],
    dietary: ["Vegetarian"],
    winePairing: "Chianti Classico Riserva 2018",
    badge: "Savoury Bite",
    imageUrl: "/images/dishes/stuffed-mushrooms.jpg",
  },
  {
    id: "can-12",
    name: "Crispy Spiced Beetroot & Chhena Croquettes",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Ruby beetroot and house-churned cottage cheese croquettes spiced with ginger and green chillies, crumbed golden and served on bamboo cocktail picks.",
    ingredients: ["Roasted Beetroot", "Fresh Chhena", "Roasted Peanuts", "Garam Masala", "Mint Kasundi Emulsion"],
    dietary: ["Vegetarian"],
    winePairing: "Pinot Noir Rosé 2021",
    badge: "Kolkata High-Tea",
    imageUrl: "/images/dishes/beetroot-croquette.jpg",
  },
  {
    id: "can-13",
    name: "Spiced Coastal Crab Cake Canapés",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Delicate lump blue swimmer crab meat folded with ginger, scallions, and lime zest, seared golden and topped with spicy remoulade.",
    ingredients: ["Blue Swimmer Crab", "Lime Zest", "Dijon Mustard", "Green Scallions", "Spiced Remoulade"],
    dietary: ["Pescatarian", "Halal"],
    winePairing: "Pouilly-Fumé 2021",
    badge: "Luxury Seafood",
    imageUrl: "/images/dishes/crab-cakes.jpg",
  },
  {
    id: "can-14",
    name: "Chilled Cucumber Cups with Guacamole",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Carved crisp cucumber rounds filled with citrus guacamole, pico de gallo, and micro mint, offering an intensely fresh palate reviver.",
    ingredients: ["English Cucumber Cups", "Hass Avocado", "Lime Juice", "Cilantro", "Jalapeño"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Halal"],
    winePairing: "Sauvignon Blanc Touraine 2021",
    badge: "Healthy & Clean",
    imageUrl: "/images/dishes/cucumber-guacamole.jpg",
  },
  {
    id: "can-15",
    name: "Truffled Egg & Mozzarella Crostini",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Artisan sourdough baguette crisp crowned with whipped fresh mozzarella, herb egg salad, and shaved summer truffles.",
    ingredients: ["Sourdough Baguette", "Fresh Mozzarella", "Organic Eggs", "Black Truffle Oil", "Chives"],
    dietary: ["Vegetarian"],
    winePairing: "Prosecco Valdobbiadene Superiore DOCG",
    badge: "Brunch Classic",
    imageUrl: "/images/dishes/egg-mozzarella-crostini.jpg",
  },
  {
    id: "can-16",
    name: "Baked Seafood & Herb Gratin Tartlets",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Artisanal natural sea shells filled with tender seafood morsels, gratinated under salamander with Gruyère cheese and fragrant herbs.",
    ingredients: ["Mixed Shellfish", "Gruyère Gratin", "Chives & Tarragon", "Crème Fraîche"],
    dietary: ["Pescatarian", "Halal"],
    winePairing: "Vouvray Demi-Sec 2018",
    badge: "Baked Luxury",
    imageUrl: "/images/dishes/crab-gratin-canapes.jpg",
  },
  {
    id: "can-17",
    name: "Coconut Husk Smoked Seafood Canapés",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Seafood canapés infused with natural coconut husk smoke, presented in rustic earthen displays with aromatic spice drizzles.",
    ingredients: ["Smoked Bay Prawns", "Coconut Husk Smoke", "Curry Leaf Infusion", "Ginger Glaze"],
    dietary: ["Pescatarian", "Halal"],
    winePairing: "Champagne Blanc de Blancs",
    badge: "Smoked Presentation",
    imageUrl: "/images/dishes/smoked-coconut-canapes.jpg",
  },
  {
    id: "can-18",
    name: "Seafood Carpaccio with Edible Flowers",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Wafer-thin slices of ocean scallop and white fish laid in concentric rosettes, decorated with violas, borage blossoms, micro amaranth, and finger lime caviar.",
    ingredients: ["Hokkaido Scallops", "White Fish", "Edible Flowers", "Finger Lime", "Cold-Pressed EVOO"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Riesling Grand Cru Alsace 2019",
    badge: "Botanical Plating",
    imageUrl: "/images/dishes/seafood-carpaccio-flowers.jpg",
  },
  {
    id: "can-19",
    name: "Botanical Microgreen Garden Carpaccio",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "An edible tapestry of live baby cress, golden mango brunoise, edible marigold petals, and pomegranate droplets tossed in a light elderflower vinaigrette.",
    ingredients: ["Garden Microgreens", "Golden Alfonso Mango", "Edible Marigolds", "Pomegranate Jus", "Elderflower Dressing"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Halal"],
    winePairing: "Moscato d'Asti 2021",
    badge: "Garden to Plate",
    imageUrl: "/images/dishes/microgreen-edible-carpaccio.jpg",
  },
  {
    id: "can-20",
    name: "Pan-Seared Sea Scallops on Sweet Pea Purée",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Jumbo diver scallops seared golden, served in handcrafted ceramic bowls on mint-infused English sweet pea purée with crispy pancetta crumb.",
    ingredients: ["Diver Scallops", "Sweet Garden Peas", "Fresh Mint", "Pancetta / Crispy Shallots", "Lemon Oil"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal Available"],
    winePairing: "Chardonnay Napa Valley 2020",
    badge: "Bespoke Amuse",
    imageUrl: "/images/dishes/seafood-scallop-bowl.jpg",
  },
  {
    id: "can-21",
    name: "Rolled Sesame Maki Canapés",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "Handcrafted bite-sized maki cylinders coated with roasted golden sesame seeds, filled with marinated cucumber and avocado, topped with wasabi mayo.",
    ingredients: ["Sushi Rice", "Cucumber", "Avocado", "Golden Sesame Seeds", "Wasabi Emulsion"],
    dietary: ["Vegetarian", "Gluten-Free", "Halal"],
    winePairing: "Kirin Ichiban Reserve / Dry Cider",
    badge: "Cocktail Roll",
    imageUrl: "/images/dishes/sesame-maki-canapes.jpg",
  },
  {
    id: "can-22",
    name: "California Roll Fusion Platter",
    category: "Artisanal Canapés & Amuse-Bouche",
    description:
      "A lavish presentation platter of freshly rolled California fusion uramaki rolls with cucumber, avocado, crab meat, and flying fish roe.",
    ingredients: ["Crab Meat", "Hass Avocado", "Cucumber", "Tobiko Caviar", "Sushi Rice"],
    dietary: ["Pescatarian", "Halal"],
    winePairing: "Sparkling Prosecco Superiore",
    badge: "Platter Selection",
    imageUrl: "/images/dishes/california-roll-fusion.jpg",
  },

  // ==========================================
  // BESPOKE GRAZING & DESSERTS
  // ==========================================
  {
    id: "graz-1",
    name: "Grand Artisanal Mezze & Bread Grazing Table",
    category: "Bespoke Grazing & Desserts",
    description:
      "An abundant interactive grazing spread featuring freshly baked rustic sourdough loaves, sesame grissini, crispy lavash, house-whipped smoked paprika hummus, baba ganoush, marinated kalamata olives, and roasted nuts.",
    ingredients: ["Artisan Sourdough", "Sesame Grissini", "Smoked Hummus", "Baba Ganoush", "Kalamata Olives", "Feta"],
    dietary: ["Vegetarian", "Vegan Options"],
    winePairing: "Assyrtiko Santorini 2021",
    badge: "Signature Grazing Installation",
    imageUrl: "/images/dishes/grazing-mezze-station.jpg",
  },
  {
    id: "graz-2",
    name: "Mediterranean Antipasti & Artisan Cheese Board",
    category: "Bespoke Grazing & Desserts",
    description:
      "A curated wooden plinth presenting aged Manchego, French Brie, gorgonzola, grilled artichoke hearts, sundried tomatoes, sweet dried figs, and honeycomb drizzle.",
    ingredients: ["Artisan Cheeses", "Grilled Artichokes", "Sundried Tomatoes", "Dried Figs", "Honeycomb", "Gourmet Crackers"],
    dietary: ["Vegetarian", "Gluten-Free Crackers Available"],
    winePairing: "Rioja Gran Reserva 2014",
    badge: "Artisanal Fromagerie",
    imageUrl: "/images/dishes/mediterranean-antipasti.jpg",
  },
  {
    id: "graz-3",
    name: "Grand Multi-Tier Event Grazing Table",
    category: "Bespoke Grazing & Desserts",
    description:
      "A multi-tiered architectural food display designed for luxury private receptions and galas, integrating hot chafing stations, artisanal cold canapés, sushi platters, and floral styling.",
    ingredients: ["Hot Hors d'Oeuvres", "Chilled Canapés", "Artisanal Salads", "Charcuterie & Cheese", "Fresh Botanicals"],
    dietary: ["Customizable for All Diets"],
    winePairing: "Selection of Sommelier Curated Cellar Wines",
    badge: "Grand Banquet Display",
    imageUrl: "/images/dishes/luxury-grazing-buffet.jpg",
  },
  {
    id: "graz-4",
    name: "Artisanal Canapé & Hors d'Oeuvre Station",
    category: "Bespoke Grazing & Desserts",
    description:
      "Synchronized cocktail reception station featuring tiers of warm savouries, crisp tarts, dim sum steamers, and signature canapés crafted live by the culinary brigade.",
    ingredients: ["Gourmet Canapés", "Bite-Sized Dim Sum", "Petite Quiches", "Artisanal Dips"],
    dietary: ["Customizable for All Diets"],
    winePairing: "Vintage Champagne & Signature Cocktails",
    badge: "Event Highlight",
    imageUrl: "/images/dishes/canape-spread-station.jpg",
  },
  {
    id: "graz-5",
    name: "Live Banquet Gourmet Action Counter",
    category: "Bespoke Grazing & Desserts",
    description:
      "Interactive chef cooking counter where Chef Zaved and his brigade sear, plate, and finish dishes live in front of your guests with theatrical flair.",
    ingredients: ["Charcoal Grill Cuts", "Live Pasta & Risotto", "Fresh Micro Herb Garnishes"],
    dietary: ["Customizable for All Diets"],
    winePairing: "Flight of Fine European Wines",
    badge: "Interactive Theatre",
    imageUrl: "/images/dishes/live-banquet-counter.jpg",
  },
  {
    id: "graz-6",
    name: "Kolkata Mishti & Rosogolla Degustation",
    category: "Bespoke Grazing & Desserts",
    description:
      "Authentic Bengali sweet celebration featuring spongy Kolkata Chennar Rosogolla steeped in warm cardamom syrup, golden Pantua, and delicate artisanal Sandesh infused with nolen gur.",
    ingredients: ["Pure Chhena", "Cardamom Infused Sugar Syrup", "Khoya Kheer", "Nolen Gur (Date Palm Jaggery)", "Pistachios"],
    dietary: ["Vegetarian"],
    winePairing: "Royal Tokaji 5 Puttonyos Aszú 2017",
    badge: "Bengali Sweet Icon",
    imageUrl: "/images/dishes/rosogolla-pantua.jpg",
  },
  {
    id: "graz-7",
    name: "Handcrafted Steamed Dumpling & Coconut Modak",
    category: "Bespoke Grazing & Desserts",
    description:
      "Steamed rice-flour dumplings filled with grated fresh coconut, roasted cardamom, and golden jaggery, presented traditionally in eco-friendly sal leaf donas.",
    ingredients: ["Rice Flour Shell", "Fresh Grated Coconut", "Nolen Gur Jaggery", "Cardamom Powder", "Nutmeg"],
    dietary: ["Vegetarian", "Gluten-Free", "Vegan Available"],
    winePairing: "Sauternes Château Suduiraut 2015",
    badge: "Handcrafted Heritage",
    imageUrl: "/images/dishes/steamed-modak-dessert.jpg",
  },
  {
    id: "graz-8",
    name: "Grand Luxury Banquet Dessert Presentation",
    category: "Bespoke Grazing & Desserts",
    description:
      "A lavish banquet dessert buffet featuring decadent pastries, fruit tartlets, verrines, chocolate mousses, and heritage Indian sweets, styled with warm ambient illumination.",
    ingredients: ["Artisan Pastries", "Valrhona Chocolate Verrines", "Seasonal Fruit Tarts", "Bengali Mishti"],
    dietary: ["Vegetarian Options"],
    winePairing: "Château d'Yquem 2011 / Late Harvest Riesling",
    badge: "Decadent Finale",
    imageUrl: "/images/dishes/luxury-dessert-buffet.jpg",
  },

  // ==========================================
  // AUTHENTIC BENGALI HERITAGE REPERTOIRE
  // ==========================================
  {
    id: "beng-1",
    name: "Grand Royal Bengali Bhoj",
    category: "Authentic Bengali Heritage",
    description:
      "An imperial Rajbari Mahabhoj celebration presented on traditional bell-metal kasha thali and banana leaves. A symphonic banquet featuring fragrant Gobindobhog rice, ghee, crispy artisanal bhajas, Shukto, Shorshe Ilish, Gold Chingri Malai Curry, Kosha Mangsho, and authentic sweet chutneys.",
    ingredients: ["Gobindobhog Rice", "Jharna Ghee", "Padma River Ilish", "Gold Tiger Prawns", "Bengal Tender Mutton", "Kacha Lanka"],
    dietary: ["Halal Available", "Gluten-Free Available"],
    winePairing: "Sula Dindori Reserve Viognier / Chablis Grand Cru",
    badge: "Imperial Rajbari Feast",
    imageUrl: "/images/dishes/bengali-bhoj.jpg",
  },
  {
    id: "beng-2",
    name: "Classic Shorshe Ilish in Clay Handi",
    category: "Authentic Bengali Heritage",
    description:
      "Prestigious Padma River Hilsa cutlets gently poached in freshly ground yellow and black mustard paste, virgin cold-pressed kachi ghani mustard oil, slit fiery green chillies, and nigella seeds, served piping hot in an earthen handi.",
    ingredients: ["Fresh Padma Ilish", "Stone-ground Shorshe Paste", "Cold-Pressed Mustard Oil", "Kacha Lanka", "Kalo Jeere"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Domaine Leflaive Puligny-Montrachet 2020",
    badge: "Signature Royal Heritage",
    imageUrl: "/images/dishes/shorshe-ilish.jpg",
  },
  {
    id: "beng-3",
    name: "Gold Daab Chingri Malai Curry",
    category: "Authentic Bengali Heritage",
    description:
      "Succulent Bay of Bengal jumbo freshwater tiger prawns simmered gently in rich tender coconut malai, fresh green coconut water, green cardamom, and aromatic Bengali whole spices.",
    ingredients: ["Bay of Bengal Jumbo Prawns", "Tender Coconut Cream", "Green Cardamom", "Cinnamon", "Ghee", "Tender Coconut Flesh"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Meursault Premier Cru Genevrières 2019",
    badge: "Chef's Masterpiece",
    imageUrl: "/images/dishes/chingri-malai-curry.jpg",
  },
  {
    id: "beng-4",
    name: "Kolkata Mutton Kosha",
    category: "Authentic Bengali Heritage",
    description:
      "Prime tender goat meat slow-braised for four hours over charcoal embers in mustard oil, caramelized onions, dark roasted spices, ginger-garlic paste, and crushed green chillies until rich, velvety, and deeply aromatic.",
    ingredients: ["Tender Free-Range Goat", "Cold-Pressed Mustard Oil", "Caramelized Onions", "Shahi Garam Masala", "Mustard Curd Marinade"],
    dietary: ["Halal", "Gluten-Free"],
    winePairing: "Tenuta San Guido Sassicaia 2018 / Châteauneuf-du-Pape",
    badge: "Slow-Cooked Icon",
    imageUrl: "/images/dishes/kosha-mangsho.jpg",
  },
  {
    id: "beng-5",
    name: "Traditional Bhetki Macher Kalia",
    category: "Authentic Bengali Heritage",
    description:
      "Thick Kolkata Bhetki fillets simmered in a regal onion, ginger, and hung curd gravy perfumed with whole garam masala, bay leaf, and raisin paste, finished with dollops of pure cow ghee.",
    ingredients: ["Fresh Kolkata Bhetki", "Onion-Ginger Gravy", "Hung Curd", "Kishmish Paste", "Shahi Garam Masala", "Jharna Ghee"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Pouilly-Fuissé Premier Cru 2021",
    badge: "Kolkata Classic",
    imageUrl: "/images/dishes/bhetki-macher-kalia.jpg",
  },
  {
    id: "beng-6",
    name: "Gourmet Potoler Dolma",
    category: "Authentic Bengali Heritage",
    description:
      "Tender pointed gourds (potol) carefully deseeded and stuffed with a rich filling of spiced chenna, cashew nuts, and golden raisins, simmered in a silky tomato-cashew satin jus.",
    ingredients: ["Farm Pointed Gourds", "Fresh Chhena Dumpling", "Cashew Nuts", "Golden Raisins", "Cardamom-Cinnamon Jus"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Gewürztraminer Grand Cru Alsace 2019",
    badge: "Aristocratic Vegetarian",
    imageUrl: "/images/dishes/potoler-dolma.jpg",
  },
  {
    id: "beng-7",
    name: "Handcrafted Chhanar Dalna",
    category: "Authentic Bengali Heritage",
    description:
      "Pristine artisanal cottage cheese pillows delicately infused with green chillies and roasted cumin, fried golden and simmered in a traditional hing-ginger-tomato cumin broth with Yukon gold potatoes.",
    ingredients: ["Fresh Artisanal Chhana", "Jeera-Ginger Paste", "Asafoetida (Hing)", "Yukon Gold Potatoes", "Ghee"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Pinot Gris Réserve Alsace 2020",
    badge: "Traditional Classic",
    imageUrl: "/images/dishes/chhanar-dalna.jpg",
  },
  {
    id: "beng-8",
    name: "Rajbari Echorer Dalna",
    category: "Authentic Bengali Heritage",
    description:
      "Tender baby green jackfruit ('Gachh Patha') slow-simmered in rich spices, aromatic ghee, and caramelized onions, achieving the sublime melt-in-mouth texture of royal Awadhi braises.",
    ingredients: ["Baby Green Jackfruit (Echor)", "Yukon Gold Potatoes", "Mustard Oil", "Coriander-Cumin Paste", "Garam Masala"],
    dietary: ["Vegetarian", "Gluten-Free", "Vegan Available"],
    winePairing: "Côtes du Rhône Rouge 2020",
    badge: "Heritage Vegetarian",
    imageUrl: "/images/dishes/echorer-dalna.jpg",
  },
  {
    id: "beng-9",
    name: "Traditional Dudh Shukto",
    category: "Authentic Bengali Heritage",
    description:
      "The quintessential bittersweet ceremonial palate opener. Tender bitter gourd, raw green bananas, sweet potatoes, drumsticks, and crunchy bori simmered in ginger and milk gravy with wild celery seed (radhuni).",
    ingredients: ["Bitter Gourd (Korola)", "Raw Plantain", "Drumsticks", "Crunchy Bori", "Radhuni", "Whole Cow Milk"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Dry Riesling Mosel 2021",
    badge: "Ceremonial Starter",
    imageUrl: "/images/dishes/dudh-shukto.jpg",
  },
  {
    id: "beng-10",
    name: "Crisp Posto Bora & Dal Fritters",
    category: "Authentic Bengali Heritage",
    description:
      "Golden-crusted patties of freshly crushed poppy seeds (khashkhash), green chillies, and mustard oil, alongside crisp yellow moong dal fritters. The holy grail of traditional Bengali comfort.",
    ingredients: ["White Poppy Seeds (Posto)", "Yellow Moong Dal", "Fiery Green Chillies", "Mustard Oil", "Cold-Pressed Ghee"],
    dietary: ["Vegetarian", "Gluten-Free", "Vegan Available"],
    winePairing: "Sauvignon Blanc Marlborough 2022",
    badge: "Delicacy",
    imageUrl: "/images/dishes/posto-bora.jpg",
  },
  {
    id: "beng-11",
    name: "Royal Bengali Bhaja & Chutney Thali",
    category: "Authentic Bengali Heritage",
    description:
      "Crispy Begun Bhaja (sliced eggplant), Potol Bhaja, and Jhurjhure Aloo Bhaja paired with sweet and tangy tomato-khejur-aamsotto chutney and crispy fried papad.",
    ingredients: ["Round Purple Eggplant", "Pointed Gourd", "Crispy Shoestring Potatoes", "Aamsotto", "Dates (Khejur)", "Mustard Oil"],
    dietary: ["Vegetarian", "Gluten-Free", "Vegan"],
    winePairing: "Grüner Veltliner Kamptal 2021",
    badge: "Traditional Accompaniment",
    imageUrl: "/images/dishes/bengali-bhaja-platter.jpg",
  },
  {
    id: "beng-12",
    name: "Gobindobhog Bhat with Pure Ghee",
    category: "Authentic Bengali Heritage",
    description:
      "Fragrant short-grain Gobindobhog heirloom rice gently steamed to tender perfection, crowned with fragrant warm cow ghee, sliced Gondhoraj lime, and garden-fresh green chillies.",
    ingredients: ["Heirloom Gobindobhog Rice", "Pure Jharna Cow Ghee", "Gondhoraj Lebu", "Fresh Green Chillies"],
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Floral Torrontés 2021",
    badge: "Fragrant Heirloom Rice",
    imageUrl: "/images/dishes/gobindobhog-bhat.jpg",
  },
  {
    id: "beng-13",
    name: "Steamed Gobindobhog Rice & Kacha Lanka",
    category: "Authentic Bengali Heritage",
    description:
      "The classical foundation of the Bengali feast: fluffy aromatic steamed rice presented with fresh sliced lime and spicy green chillies, designed to harmonize with aromatic dals and shukto.",
    ingredients: ["Aromatic White Rice", "Fresh Lime", "Green Chillies", "Sea Salt"],
    dietary: ["Vegetarian", "Gluten-Free", "Vegan"],
    winePairing: "Pinot Grigio Alto Adige 2022",
    badge: "Purity of Rice",
    imageUrl: "/images/dishes/steamed-rice-ghee.jpg",
  },
  {
    id: "beng-14",
    name: "Heritage Panchmishali Labra",
    category: "Authentic Bengali Heritage",
    description:
      "Five-vegetable slow-cooked medley of pumpkin, ridge gourd, eggplant, radish, and potatoes tempered with panch phoron (Bengali five-spice blend) and fresh coriander.",
    ingredients: ["Seasonal Vegetables", "Panch Phoron", "Mustard Oil", "Ginger Paste", "Coriander"],
    dietary: ["Vegetarian", "Gluten-Free", "Vegan"],
    winePairing: "Beaujolais-Villages 2020",
    badge: "Rustic Classic",
    imageUrl: "/images/dishes/panchmishali-labra.jpg",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "rev-1",
    clientName: "Lady Victoria Kensington",
    clientRole: "Art Patron & Private Collector",
    clientLocation: "Mayfair, London",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    eventType: "Private 50th Birthday Gala (14 Guests)",
    date: "September 2026",
    quote:
      "Chef Zaved did not merely cook for us; he orchestrated an unforgettable culinary symphony. His Pistachio-Crusted Rack of Lamb and the authentic Shorshe Ilish left our international guests completely mesmerized. The service, decorum, and absolute precision were indistinguishable from a 3-star Michelin salon.",
    highlightDish: "Pistachio-Crusted Herb Rack of Lamb",
  },
  {
    id: "rev-2",
    clientName: "Marcus Sterling",
    clientRole: "Managing Director, Global Equity Partners",
    clientLocation: "Manhattan, New York",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    eventType: "Executive Board Dinner (10 Guests)",
    date: "October 2026",
    quote:
      "In my 25 years hosting C-suite executives around the world, I have rarely seen culinary perfection delivered with such grace in a private residence. The Gold Daab Chingri Malai Curry and seabass rosti were sheer perfection. Chef Zaved is now our exclusive private chef for all high-stakes gatherings.",
    highlightDish: "Gold Daab Chingri Malai Curry",
  },
  {
    id: "rev-3",
    clientName: "Elena & David Rostova",
    clientRole: "Architect & Interior Designer",
    clientLocation: "Palm Jumeirah, Dubai",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    eventType: "Intimate Anniversary Dinner (2 Guests)",
    date: "August 2026",
    quote:
      "For our 10th anniversary, we wanted something deeply personal. Chef Zaved crafted a bespoke menu recreating dishes from our travels. His Pan-Seared Seabass on Potato Rosti and Kolkata Mutton Kosha were masterworks. His warmth, storytelling, and spotless cleanup made the evening effortless and deeply romantic.",
    highlightDish: "Pan-Seared Seabass on Crispy Potato Rosti",
  },
  {
    id: "rev-4",
    clientName: "Julian Vance",
    clientRole: "Culinary Editor & Food Critic",
    clientLocation: "Beverly Hills, California",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    eventType: "Private Food & Wine Salon",
    date: "July 2026",
    quote:
      "Chef Zaved represents the rare vanguard of private chefs who possess both academic technique and visceral culinary soul. His Grand Royal Bengali Bhoj and Dim Sum were some of the most balanced gastronomic executions I have tasted this decade.",
    highlightDish: "Grand Royal Bengali Bhoj",
  },
];
