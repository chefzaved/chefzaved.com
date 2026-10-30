export interface Dish {
  id: string;
  name: string;
  category: "Appetizers" | "Mains" | "Desserts" | "Signature Fusion Specials";
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
  // Appetizers
  {
    id: "app-1",
    name: "Pan-Seared Hokkaido Scallops",
    category: "Appetizers",
    description:
      "Wild-caught scallops seared to golden perfection over a silky saffron-infused cauliflower purée, topped with Oscietra caviar and micro sea fennel.",
    ingredients: ["Hokkaido Scallops", "Imperial Saffron", "Oscietra Caviar", "Cauliflower Velouté", "Micro Sea Fennel"],
    dietary: ["Gluten-Free", "Pescatarian", "Halal"],
    winePairing: "Dom Pérignon Vintage Champagne 2013",
    badge: "Chef's Signature",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "app-2",
    name: "Heirloom Beetroot & Truffled Goat Cheese Tart",
    category: "Appetizers",
    description:
      "Slow-roasted salt-baked heirloom beets, whipped French chèvre, shaved black Périgord truffle, aged balsamic pearls, and crispy honeycomb wafer.",
    ingredients: ["Salt-Baked Heirloom Beets", "French Goat Chèvre", "Périgord Black Truffle", "Balsamic Pearls", "Wild Honeycomb"],
    dietary: ["Vegetarian"],
    winePairing: "Domaine Leflaive Puligny-Montrachet 2020",
    badge: "Artisanal",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "app-3",
    name: "Yellowfin Tuna Tartare with Yuzu Ponzu",
    category: "Appetizers",
    description:
      "Sashimi-grade yellowfin tuna hand-diced with Hass avocado mousse, compressed melon, crisp lotus root chips, and a gold-flecked yuzu ponzu reduction.",
    ingredients: ["Yellowfin Tuna", "Hass Avocado", "Yuzu Ponzu", "Lotus Root", "Edible 24K Gold Leaf"],
    dietary: ["Gluten-Free", "Pescatarian", "Halal"],
    winePairing: "Chablis Premier Cru 2021",
    badge: "Seasonal",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
  },

  // Mains
  {
    id: "main-1",
    name: "Miyazaki Wagyu A5 Striploin",
    category: "Mains",
    description:
      "Celebrated Japanese Wagyu with marble score 11+, binchotan charcoal-seared, accompanied by black garlic pomme mousseline, charred king oyster mushroom, and 48-hour bone marrow jus.",
    ingredients: ["Miyazaki Wagyu A5", "Black Garlic", "Yukon Gold Mousseline", "King Oyster Mushroom", "Bone Marrow Jus"],
    dietary: ["Halal Available", "Gluten-Free"],
    winePairing: "Château Margaux Premier Grand Cru Classé 2015",
    badge: "Ultra-Reserve",
    imageUrl: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "main-2",
    name: "Wild Brittany Turbot en Papillote",
    category: "Mains",
    description:
      "Delicate line-caught turbot gently steam-roasted with Meyer lemon, braised sea asparagus, baby chanterelles, and a velvety champagne beurre blanc sauce.",
    ingredients: ["Wild Turbot", "Sea Asparagus", "Baby Chanterelles", "Champagne Beurre Blanc", "Finger Lime"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Meursault Premier Cru Genevrières 2019",
    badge: "Coastal Fine Dining",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "main-3",
    name: "Slow-Braised Canterbury Lamb Shank",
    category: "Mains",
    description:
      "Free-range lamb shank slow-braised for 14 hours with pomegranate molasses, rosemary, and sweet spices, resting on saffron polenta and roasted baby heirloom carrots.",
    ingredients: ["Canterbury Lamb Shank", "Pomegranate Molasses", "Saffron Polenta", "Heritage Carrots", "Crispy Mint"],
    dietary: ["Halal", "Gluten-Free"],
    winePairing: "Tenuta San Guido Sassicaia 2018",
    badge: "Slow-Crafted",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },

  // Desserts
  {
    id: "des-1",
    name: "Deconstructed Valrhona Gold Dome",
    category: "Desserts",
    description:
      "70% Valrhona dark chocolate dome dusted with 24K edible gold leaf, filled with passionfruit ganache, hazelnut praline crisp, and melted tableside with hot spiced caramel.",
    ingredients: ["Valrhona 70% Guanaja", "24K Gold Leaf", "Passionfruit Coulis", "Piedmont Hazelnuts", "Smoked Fleur de Sel Caramel"],
    dietary: ["Vegetarian"],
    winePairing: "Château d'Yquem Sauternes 2011",
    badge: "Theatrical Plating",
    imageUrl: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "des-2",
    name: "Wild Tahitian Vanilla Mille-Feuille",
    category: "Desserts",
    description:
      "Caramelized crisp puff pastry layers interlayered with light-as-air Tahitian vanilla bean diplomate cream, wild mountain berries, and crystallized mint.",
    ingredients: ["Tahitian Vanilla Beans", "Caramelized Feuilletage", "Diplomate Cream", "Wild Alpine Raspberries", "Mint Crystal"],
    dietary: ["Vegetarian"],
    winePairing: "Royal Tokaji 5 Puttonyos Aszú 2017",
    badge: "Classic Elegance",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "des-3",
    name: "Saffron Pistachio Kulfi Delice",
    category: "Desserts",
    description:
      "Modern interpretation of royal Awadhi kulfi, infused with Kashmiri saffron, crushed Sicilian pistachios, edible rose petals, and spun sugar halo.",
    ingredients: ["Kashmiri Saffron", "Sicilian Pistachio", "Condensed Milk", "Organic Rose Water", "Spun Amber Sugar"],
    dietary: ["Vegetarian", "Gluten-Free", "Halal"],
    winePairing: "Klein Constantia Vin de Constance 2018",
    badge: "Heritage Fusion",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
  },

  // Signature Fusion Specials
  {
    id: "fus-1",
    name: "Smoked Duck Magret with Cardamom Cherry Glaze",
    category: "Signature Fusion Specials",
    description:
      "Duck breast smoked over applewood embers, spiced with green cardamom and Morello cherry reduction, served with celeriac fondant and parsnip crisps.",
    ingredients: ["French Duck Magret", "Applewood Smoke", "Green Cardamom", "Morello Cherries", "Celeriac Fondant"],
    dietary: ["Halal Available", "Gluten-Free"],
    winePairing: "Pinot Noir Domaine Dujac Morey-Saint-Denis 2019",
    badge: "Chef's Masterpiece",
    imageUrl: "https://images.unsplash.com/photo-1514944298352-fae0689b0d1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fus-2",
    name: "Truffle Saffron Risotto with Lobster Tail",
    category: "Signature Fusion Specials",
    description:
      "Acquerello carnaroli rice aged 7 years, slow-cooked in saffron lobster bisque, crowned with butter-poached Maine lobster tail and fresh black truffle shavings.",
    ingredients: ["Aged Carnaroli Rice", "Maine Lobster", "Iranian Saffron", "Black Truffle", "Aged Parmigiano Reggiano 36M"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Corton-Charlemagne Grand Cru 2020",
    badge: "Decadent",
    imageUrl: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fus-3",
    name: "Black Cod Glazed with Aged Mirin & Kashmiri Chili",
    category: "Signature Fusion Specials",
    description:
      "Silky Alaskan black cod marinated for 72 hours in a sweet mirin and mild Kashmiri chili glaze, caramelized under salamander, accompanied by ginger baby bok choy.",
    ingredients: ["Alaskan Black Cod", "Aged Mirin", "Kashmiri Chili", "Baby Bok Choy", "Pickled Daikon Flowers"],
    dietary: ["Pescatarian", "Gluten-Free", "Halal"],
    winePairing: "Junmai Daiginjo Dassai 23 Sake / Riesling Grand Cru",
    badge: "East Meets West",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
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
      "Chef Zaved did not merely cook for us; he orchestrated an unforgettable theatrical dining symphony. The Miyazaki Wagyu and tableside gold chocolate dome left our guests completely mesmerized. The service, decorum, and absolute precision were indistinguishable from a 3-star Michelin salon in Paris.",
    highlightDish: "Miyazaki Wagyu A5 Striploin",
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
      "In my 25 years hosting C-suite executives around the world, I have rarely seen culinary perfection delivered with such grace in a private residence. Every wine pairing hit the exact note. Chef Zaved is now our exclusive private chef for all high-stakes gatherings.",
    highlightDish: "Truffle Saffron Risotto with Lobster Tail",
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
      "For our 10th anniversary, we wanted something deeply personal. Chef Zaved crafted a bespoke menu recreating dishes from our travels across France and Japan. His warmth, storytelling, and spotless cleanup made the evening effortless and deeply romantic.",
    highlightDish: "Pan-Seared Hokkaido Scallops",
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
      "Chef Zaved represents the rare vanguard of private chefs who possess both academic technique and visceral culinary soul. His Black Cod and Kashmiri reduction was one of the most balanced fusion executions I have tasted this decade.",
    highlightDish: "Black Cod Glazed with Aged Mirin",
  },
];
