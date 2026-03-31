export interface Bottle {
  id: number;
  slug: string;
  name: string;
  description: string;
  img: string;
  volume?: string;
  grapeVarietal?: string;
  category?: string;
  country?: string;
  flavors?: string;
  pairings?: string[];
  highlights?: string[];
  alcoholPercentage?: string;
  background?: string;
}
export const FeaturedProduct = [
  {
    id: 1,
    name: "Hapusa Himalayan Dry Gin",
    img: "/sula/featuredHapusa.jpg",
    slug: "hapusa-himalayan-dry-gin",
    category: "gin",
    description:
      "Hapusa is a premium Himalayan dry gin, distilled with foraged botanicals from the region, creating a bold and aromatic spirit. Juniper, known as Hapusa in Sanskrit, is what gives their gin its name as well as its wild smell and scent.  This scarce juniper berry, which grows close to the Himalayan snow line, offers a lovely framework around which the other botanicals are thoughtfully placed. To create a true voyage in a glass, these botanicals are imported from all around the nation, combining its many flavours, cuisines, and civilisations.  Your taste sensations go through the monsoon forests of Tamil Nadu, the banks of the Hooghly River, the pine forests of the Himalayas, and the verdant spice plantations of Goa.",

    background: "/backgrounds/Hapusa-Gin-lifestyle.jpeg",
  },
  {
    id: 2,
    name: "Greater Than London Dry Gin",
    img: "/sula/greaterThanFeatured.jpg",
    slug: "greater-than-london-dry-gin",
    category: "gin",
    description:
      "Greater Than is India’s first craft gin, featuring juniper-forward flavors with hints of citrus and spice, perfect for refreshing cocktails.",
  },
  {
    id: 21,
    name: "The Whistler Irish Whiskey",
    img: "/home/whsitler.jpg",
    slug: "the-whistler-irish-whiskey",
    category: "whiskey",
    description:
      "The Whistler Irish Whiskey is a premium triple-distilled blend, aged in bourbon barrels for a smooth, rich character with notes of honey, vanilla, and salted caramel.",
  },
  {
    id: 3,
    name: "Luxardo Maraschino Orginale",
    img: "/sula/featuredLux.png",
    slug: "luxardo-maraschino-originale",
    category: "liquer",
    description:
      "Chenin Blanc is a refreshing white wine known for its bright acidity and tropical fruit flavors. Perfect for warm summer days.",
  },
  {
    id: 4,
    name: "Luxardo Bitter Rosse",
    img: "/sula/featuredBitter.png",
    slug: "luxardo-bitter-rosse",
    category: "liquer",
    description:
      "Shiraz Cabernet is a bold red wine with deep berry flavors, balanced tannins, and a rich, full-bodied texture.",
  },
  {
    id: 5,
    name: "Sula Tropical Rose",
    img: "/sula/tropicalFeature.jpg",
    slug: "sula-tropical-rose",
    category: "wines",
    description: "A refreshing and fruity rosé wine, perfect for summer days.",
  },
];

export const Bottles = [
  {
    id: 1,
    name: "Hapusa Himalayan Dry Gin",
    img: "/home/hapusa.png",
    slug: "hapusa-himalayan-dry-gin",
    description:
      "Hapusa is a premium Himalayan dry gin, distilled with foraged botanicals from the region, creating a bold and aromatic spirit. Juniper, known as Hapusa in Sanskrit, is what gives their gin its name as well as its wild smell and scent.  This scarce juniper berry, which grows close to the Himalayan snow line, offers a lovely framework around which the other botanicals are thoughtfully placed. To create a true voyage in a glass, these botanicals are imported from all around the nation, combining its many flavours, cuisines, and civilisations.  Your taste sensations go through the monsoon forests of Tamil Nadu, the banks of the Hooghly River, the pine forests of the Himalayas, and the verdant spice plantations of Goa.",

    background: "/backgrounds/Hapusa-Gin-lifestyle.jpeg",
    category: "gin",
    country: "India",
    flavors:
      "Hapusa is a sipping Gin best appreciated straight from the freezer. Expect pine forests and wildflowers on the nose with a bold earthiness on the palate and a long, delicately spiced, finish",
    pairings: [],
    highlights: [
      "made with Juniper form the Himalayas",
      "Along with Coriander Seeds, Tumeric, Ginger, Gondhoraj, Mango",
      "And Almonds",
    ],
    volume: "750ml",
    alcoholPercentage: "70CL 43% ABV",
  },
  {
    id: 2,
    name: "Greater Than London Dry Gin",
    img: "/home/greaterthan.png",
    slug: "greater-than-london-dry-gin",
    description:
      "GIN, BUT GREATER! The first-ever London Dry Gin made in India. Copper pot distilled with botanicals sourced from India and around the world. This gin has clean juniper and fresh lemon peel on the nose and a zing of ginger on the finish. Distilled in Goa with nine unique botanicals: Juniper berries, Coriander seeds, Almond, Angelica root, Fennel, Lemongrass, Orange peel, Chamomile & Ginger.",
    category: "gin",
    country: "India",
    flavors:
      "Clean Juniper with Fresh Lemon Peel on the nose and a zing of ginger on the finish",
    pairings: [],
    highlights: ["India's first London Dry Gin"],
    volume: "750ml",
    alcoholPercentage: "70cl 40% abv",
  },
  {
    id: 21,
    name: "The Whistler Irish Whiskey",
    img: "/sula/whistlerbottle.png",
    slug: "the-whistler-irish-whiskey",
    category: "whiskey",
    description:
      "The Whistler Irish Whiskey is a premium triple-distilled blend, aged in bourbon barrels for a smooth, rich character with notes of honey, vanilla, and salted caramel.",
    background: "/home/vodka-bg.jpeg",
    country: "Ireland",
    flavors: "Sweet honey, vanilla, salted caramel, with a smooth oak finish.",
    pairings: ["Dark chocolate", "Smoked salmon", "Hard cheeses"],
    highlights: ["Triple Distilled", "Aged in Bourbon Barrels"],
    volume: "750ml",
    alcoholPercentage: "40% alc. by vol",
  },
  {
    id: 3,
    name: "Sula Chenin Blanc",
    img: "/sula/cheninBlanc.png",
    slug: "sula-chenin-blanc",
    description:
      "A refreshing and easy-drinking white wine, with some residual sugar, which gives it a slight sweetness, smartly balanced by its delightful acidity. A beautiful Chenin Blanc.This Chenin Blanc wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of Nashik Valley. ",
    category: "wines",
    country: "India",
    flavors: "Ripe Tropical Fruit and Hints of Honey",
    pairings: ["Salad, Gujarati Thali", "Vegetable Quiche, Rawa Fried Fish"],
    highlights: [
      "India's Best Selling White Wine",
      "An easy drinking off-dry white wine",
      "Great to offer to first time wine drinkers",
    ],
    volume: "750ml",
    grapeVarietal: "100% Chenin Blanc",
  },
  {
    id: 4,
    name: "Sula Late Harvest",
    img: "/sula/lateharvest.png",
    slug: "sula-late-harvest",
    category: "wines",
    description:
      "Bask in Sula’s Late Harvest Chenin Blanc, the first Indian wine to win Silver at the Paris Wine Cup and Decanter World Wine Awards. Sweet and rich, with notes of honey, this wine is a true delight for the palate. This dessert wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of Nashik Valley.",
    country: "India",
    flavors: "Rich aromas of apricot, mango, raisins with luscious acidity.",
    pairings: [
      "Cheese cake, panna cotta",
      "gubani-ka-meetha",
      "gulab jamun, blue cheese",
    ],
    highlights: [
      "India’s most loved dessert wine",
      "Very aromatic and the first ever Late Harvest Chenin Blanc of India",
    ],
    volume: "750ml",
    grapeVarietal: "85% Chenin Blanc, 15% Muscat",
  },
  {
    id: 5,
    name: "Sula Shiraz Cabernet",
    img: "/sula/shirazCabernet.png",
    slug: "sula-shiraz-cabernet",
    category: "wines",
    description:
      "Silky and earthy, this Shiraz Cabernet is packed with dark cherries, pepper and mocha notes. A super food-friendly wine. This India’s favorite red wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of the Nashik Valley.",
    country: "India",
    flavors:
      "Blackberry, black plum, ripe cherry, olives, pepper, mocha with hints of spices.",
    pairings: [
      "Barbecued meats, medium spicy curries like chicken tikka masala",
      "rajma masala, mutton roganjosh",
    ],
    highlights: ["India’s best-selling red wine!"],
    volume: "750ml",
    grapeVarietal: "85% Shiraz, 15% Cabernet Sauvignon.",
  },
  {
    id: 6,
    name: "Sula Tropical Rose",
    img: "/sula/Tropical.png",
    slug: "sula-tropical-rose",
    category: "wines",
    description:
      "Experience Sula’s Tropicale Rosé, India’s first and only Gold winner at the International Wine Challenge. A refreshing burst of tropical fruit and berry flavours, perfect for any celebration. This sparkling wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of Nashik Valley.",
    country: "India",
    flavors:
      "Aromas of peach and passion fruit with hints of guava at the finish.",
    pairings: [
      "Aperitif, salads",
      "fried seafood appetizers, anda masala, white sauce pasta",
    ],
    highlights: ["Special edition sparkling rosé."],
    volume: "750ml",
    grapeVarietal: "70% Chenin Blanc, 30% Riesling and Syrah",
  },
  {
    id: 7,
    name: "Sula Brut",
    img: "/sula/brute.png",
    slug: "sula-brut",
    category: "wines",
    description:
      "Celebrate with Sula Brut, a lively sparkling wine and medalist at the Paris Wine Cup and Decanter Awards. Crisp, refreshing, with citrus and green apple notes—pure joy in every sip. This sparkling white wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of the Nashik Valley.",
    country: "India",
    flavors: "Aromas of apples & pears.",
    pairings: [
      "Salad, French fries",
      "Smoked salmon, fried chicken",
      "Indian pakoras",
      "Hara bhara kebab",
    ],
    highlights: [
      " Light Sparkling Fruity Wine",
      "Versatile wine perfect for everyday",
    ],
    volume: "750ml",
    grapeVarietal: "",
  },
  {
    id: 8,
    name: "Sula Seco",
    img: "/sula/seco.png",
    slug: "sula-seco",
    category: "wines",
    description:
      "Citrusy, delicious and versatile; this is what you can expect from Seco, an endearing sparkling wine, made from Chenin Blanc. This sparkling wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of Nashik Valley.",
    country: "India",
    flavors:
      "Hints of ripe fruit, melon & passion fruit on the palate and a citrusy, lingering finish.",
    pairings: [
      "Aperitifs, frittata",
      "South Asian curries (yellow curry)",
      "Indian pakoras",
    ],
    highlights: [
      "Light sparkling fruity wine",
      "Ideal for sparkling wine cocktails",
      "Perfect for everyday celebrations",
    ],
    volume: "750ml",
    grapeVarietal: "100% Chenin Blanc",
  },
  {
    id: 9,
    name: "Sula Sparkling Shiraz",
    img: "/sula/Sprakling.png",
    slug: "sula-sparkling-shiraz",
    category: "wines",
    description:
      "Uncork Sula’s Sparkling Shiraz, India’s first and only sparkling red wine and a Gold Medal winner at the India Wine Awards. Bold and bursting with rich berry flavours—you won’t want to miss it. This Indian sparkling red wine has been made with the most ultimate respect for the environment, following strict sustainable practices Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of the Nashik Valley.",
    country: "India",
    flavors: "Pomegranate, dark berries, spices, smoke.",
    pairings: ["Dark chocolate dessert, chili chicken", "dabeli, mutton rahra"],
    highlights: ["Prosecco method for a fruit-forward wine!"],
    volume: "750ml",
    grapeVarietal: "100% Shiraz",
  },
  {
    id: 10,
    name: "Sula Zinfandel Rosé",
    img: "/sula/Rose.png",
    slug: "sula-zinfandel-rose",
    category: "wines",
    description:
      "Citrus, cranberries and ripe fruits notes; this rosé wine has so much to offer. Beautifully made from Zinfandel, its residual sugar is nicely balanced by its refreshing acidity, and offers great freshness. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of the Nashik Valley.",
    country: "India",
    flavors: "Intense notes of citrus, cranberry & ripe fruit.",
    pairings: [
      "Salad, Chinese appetizers",
      "Indian pakoras, chicken/ paneer chilli",
    ],
    highlights: [
      "India’s first ever Zinfandel Rosé",
      "Light, resfreshing wine with a great mouthfeel",
      "Perfect for Indian Summers",
      "Value for money",
    ],
    volume: "750ml",
    grapeVarietal: "100% Zinfandel.",
  },
  {
    id: 11,
    name: "Sula Zinfandel Red",
    img: "/sula/Zinfadel.png",
    slug: "sula-zinfandel-red",
    category: "wines",
    description:
      "Generous, fruit-forward and playful, this Zinfandel is a structured and balanced red wine, supported by its delightful plum and dark berries notes. This Zinfandel wine has been made with the most ultimate respect for the environment, following strict sustainable practices. Come discover our beautiful vineyard, our Tasting Room and our gorgeous boutique hotel The Source, in the rolling hills of Nashik Valley.",
    flavors: "Aromas of red berries, blackberries, plums & hints of cinnamon",
    country: "India",
    pairings: ["Curries, cold cuts", "spicy noodles", "teriyaki."],
    highlights: ["India’s first Zinfandel.", "Not aged in barrels."],
    volume: "750ml",
    grapeVarietal: "100% Zinfandel.",
  },
  {
    id: 13,
    name: "Luxardo Maraschino Cherries",
    img: "/sula/Maraschino-Cherries-2.jpg",
    slug: "luxardo-maraschino-cherriese",
    category: "liqueur",
    description:
      "These are candied cherries soaked in Luxardo marasca cherry syrup. The percentage of marasca cherries in jars and tins is about 50% and so is the percentage of syrup. No thickening agents of any type and no preservatives are used and the dark red color is all natural. Their unique taste comes from the marasca cherry syrup which is made starting from the same juice used to prepare the infusion for the Cherry Liqueur “Sangue Morlacco”. A cutting edge system of pasteurization guarantees the maximum level of preservation and safety. Luxardo Original Maraschino Cherries accurate candying process confers to the fruit a crispiness which is rare to find amongst competing brands. Today, like in the golden age of cocktails, Luxardo Original Maraschino Cherries are used in the worlds’ best bars and by the most famous mixologists as a garnish in their creations. The syrup itself may be used in many cocktails as a flavored sugar. They are also ideal over ice cream.",
    background: "/backgrounds/Maraschino-1.jpg",
    country: "Italy",
  },
  {
    id: 12,
    name: "Luxardo Maraschino Originale",
    img: "/sula/luxardo_maraschino_originale.png",
    slug: "luxardo-maraschino-originale",
    category: "liqueur",
    description:
      "When Luxardo marasca cherries are harvested at the beginning of every summer, they are put in alcoholic infusion in larch-wood vats together with some leaves and branches of the same trees for up to three years. When ready, both the liquid and the solid parts are distilled in traditional copper pot stills, separating the heart from heads and tails. Only the heart of the distillate is then allowed to mature in ash-wood vats. The last process consists in transforming the distillate in liqueur by adding a simple syrup of water and sugar lowering the ABV to 32%. Crystal clear in colour, the aroma is typical of marasca cherry distillate with strong alcohol spirit and roasted nuttiness, while the taste results smooth but sharp at the same time with hints of dark chocolate, vanilla and orange marmalade. The tall green bottle with its red cap is still hand-plaited in straw within the company, and resembles the Maraschino bottles produced in Zara in the early days, where the straw was placed in order to prevent damage during transportation. Luxardo Maraschino Originale can be enjoyed in many classic cocktails or neat as an after dinner drink. It is also ideal over fruits such as strawberries, pineapples, oranges etc. or as a flavor in confectionary and ice creams.",
    background: "/backgrounds/Maraschino-1.jpg",
    country: "Italy",
    flavors:
      "Spiritious sweet cherry with hints of dark chocolate, vinalla and a touch of orange marmalade",
    pairings: [],
    highlights: ["GMO Free", "Kosher Certified", "Vegan friendly"],
    volume: "750ml",
    alcoholPercentage: "32% alc.by vol.",
  },
  {
    id: 13,
    name: "Luxardo Sambuca",
    img: "/sula/luxardo_sambuca-1.png",
    slug: "luxardo-sambuca",
    category: "liqueur",
    description: `A traditional Italian liqueur is Luxardo Sambuca dei Cesari.
The main components that set Luxardo Sambuca dei Cesari apart are star ani, sugar, alcohol, herbs and spices, and pure volcanic water from Luxardo's own springs. Luxardo Sambuca dei Cesari is a premium product because it is still made using the original family recipe, uses premium raw materials, and uses state-of-the-art production techniques to ensure the finest quality possible. The anise plant, which originated in China, was already well-known and valued for its medicinal qualities in antiquity. Over the ages, it moved throughout Mediterranean countries, where it was used extensively to make common foods and desserts. `,
    background: "/backgrounds/sambucabg.jpg",
    country: "Italy",
    flavors:
      "syrupy mouth feel, very sweet, clean rich aniseed and liquorice with subtle coriander",
    pairings: [],
    highlights: [
      "Star anise, herbs and spices, alcohol, sugar",
      "and pure volcanic water from Luxardo own springs",
      "are the key ingredients",
    ],
    volume: "750ml",
    alcoholPercentage: "38% alc.by vol.",
  },
  {
    id: 14,
    name: "Luxardo Bitter Rosso",
    img: "/sula/luxardo_bitter.png",
    slug: "luxardo-bitter-rosso",
    category: "liqueur",
    description: `Luxardo Bitter is made by separately infusing citrus fruits, bitter herbs, and fragrant plants with alcohol and water After being combined in accordance with a recipe created by the Luxardo Family, these infusions are filtered and put into bottles. Luxardo Bitter is distinguished by its bright red colour, unique gentian and wormwood flavours, and herbal and citrussy scents. Enjoy it neat or over ice as an aperitivo, and it's perfect for many traditional cocktails like the Americano or Negroni. You will have the ideal "Shakerato" if you try it forcefully shaken and double strained in a coupette.`,
    background: "/backgrounds/bitterbg.jpg",
    country: "Italy",
    flavors:
      "herbaceous quinine bitterness balanced with syrupy sweetness flavoured with blood orange zest. Gently bitter and persistent",
    pairings: [],
    highlights: [],
    volume: "750ml",
    alcoholPercentage: "25% alc.by vol.",
  },
  {
    id: 15,
    name: "Luxardo Aperitivo",
    img: "/sula/luxardo_aperitivo.png",
    slug: "luxardo-aperitivo",
    category: "liqueur",
    description:
      "The outcome of a well balanced infusion of different citrus fruits, herbs, and roots is Luxardo Aperitivo. It is the best product to prepare low ABV beverages that are appropriate for aperitivo events because of its modest alcoholic content. For the ideal Spritz, combine it with soda and Prosecco.",
    background: "/backgrounds/aperitivobg.jpg",
    country: "Italy",
    flavors:
      "slightly bitter, with flavours of zesty orange marmalade and pink grapefruit. Rhubarb and gentian notes.",
    pairings: [],
    highlights: [],
    volume: "750ml",
    alcoholPercentage: "11% or 15% alc. by vol.",
  },
  {
    id: 16,
    name: "Luxardo Cherry Liqueur",
    img: "/sula/luxardo-cherry.png",
    slug: "luxardo-cherry-liqueur",
    category: "liqueur",
    description: `Produced since 1821, Luxardo's second speciality after Maraschino Originale
A portion of the juice from Luxardo marasca cherries is separated and allowed to age until natural fermentation takes place when they are picked at the start of each summer. To prevent further fermentation, neutral alcohol is added to the juice whenever a specific alcohol by volume is reached. The juice is then left to age in oak vats. The perfume of freshly squeezed cherry juice was strong, and the colour was clear and deep red.  `,
    background: "/backgrounds/chreey-bg.jpg",
    country: "Italy",
    flavors:
      "intense, thick and syrupy with sweetness partially offset by fruit tartness. Very strong flavored – concentrated cherry juice and cherry jam with black pepper spice.",
    pairings: [],
    highlights: [],
    alcoholPercentage: "30% alc. by vol.",
    volume: "750ml",
  },
  {
    id: 17,
    name: "Luxardo Triple Sec",
    img: "/sula/luxardotriple.jpg",
    slug: "luxardo-triple-sec",
    category: "liqueur",
    description: `Luxardo has been producing Triplum, a traditional "triple sec," according to the original production parameters since the first half of the 1800s. In that century's custom, the term "triple sec" denoted a liqueur made from the dried and distilled peels of three different citrus fruits: mostly curaçao, a bitter orange from the Dutch Antilles, from the island with the same name, along with sweet oranges and mandarins. The three citrus fruit varieties listed above are distilled, with the "heads" and "tails" separated, to produce Luxardo Triplum. The only portion that is transferred to a second distillation is the "heart," or the best and centre portion. The Luxardo recipe calls for additional ingredients such vervain, pennyroyal, and dried orange flowers (zagara). All of this contributes to the distillate's distinct, sophisticated scent. The distillate undergoes sugaring, diluting, and filtering. It is among the few liqueurs that may be made through distillation.`,
    background: "/backgrounds/triple-sec.jpg",
    country: "Italy",
    flavors:
      "Smooth enveloping flavour of citrus fruits a very well rounded and mature taste.",
    pairings: [],
    highlights: [],
    volume: "750ml",
    alcoholPercentage: "39% alc. by vol",
  },
  {
    id: 18,
    name: "Luxardo Hazelnut Liqueur",
    img: "/sula/angioletto.png",
    slug: "luxardo-hazelnut-liqueur",
    category: "liqueur",
    description:
      "Luxardo Angioletto Hazelnut Liqueur is obtained from a blending process of real hazelnut infusion with a number of natural extracts, including cocoa and vanilla. Enjoy Luxardo Angioletto Hazelnut Liqueur either straight up and chilled, or on the rocks.",
    background: "/home/vodka-bg.jpeg",
    country: "Italy",
    flavors:
      " Lightly syrupy. Rich toasted hazelnut with biscuit, walnut, almond and hints of mocha coffee, citrus, vanilla and cocoa powder.",
    pairings: [],
    highlights: [],
    volume: "750ml",
    alcoholPercentage: "24% alc. by vol",
  },
  {
    id: 19,
    name: "Luxardo Absinthe Fata Verde",
    img: "/sula/absinthe.jpg",
    slug: "luxardo-absinthe-fata-verde",
    category: "liqueur",
    description: "A classic absinthe with a strong anise and herbal profile.",
    background: "/home/vodka-bg.jpeg",
    country: "",
    flavors: "",
    pairings: [],
    highlights: [],
    volume: "750ml",
    alcoholPercentage: "",
  },
  {
    id: 20,
    name: "Luxardo Rhubarb Bitter",
    img: "/sula/rhubarb.jpg",
    slug: "luxardo-rhubarb-bitter",
    category: "bitter",
    description: "A bittersweet rhubarb-based bitter for unique cocktails.",
    background: "/home/vodka-bg.jpeg",
    country: "",
    flavors: "",
    pairings: [],
    highlights: [],
    volume: "750ml",
  },
  {
    id: 20,
    name: "Luxardo Chamomile Bitter",
    img: "/sula/chamolie.jpg",
    slug: "luxardo-chamomile-bitter",
    category: "bitter",
    description: "A bittersweet rhubarb-based bitter for unique cocktails.",
    background: "/home/vodka-bg.jpeg",
    country: "",
    flavors: "",
    pairings: [],
    highlights: [],
    volume: "750ml",
  },
  {
    id: 20,
    name: "Luxardo Orange Bitter",
    img: "/sula/orange.jpg",
    slug: "luxardo-orange-bitter",
    category: "bitter",
    description: "A bittersweet rhubarb-based bitter for unique cocktails.",
    background: "/home/vodka-bg.jpeg",
    country: "",
    flavors: "",
    pairings: [],
    highlights: [],
    volume: "750ml",
  },
  {
    id: 20,
    name: "Luxardo Coffee Bitter",
    img: "/sula/coffee.jpg",
    slug: "luxardo-coffee-bitter",
    category: "bitter",
    description: "A bittersweet rhubarb-based bitter for unique cocktails.",
    background: "/home/vodka-bg.jpeg",
    country: "",
    flavors: "",
    pairings: [],
    highlights: [],
    volume: "750ml",
  },
];
