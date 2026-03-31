type Difficulty = "Easy" | "Medium" | "Advanced";
export interface CocktailDataProps {
  id: string;
  title: string;

  description: string;
  ingredients: string[];
  imageUrl: string;
  difficulty: Difficulty;
  category: string;
  base: string;
  method: string;
  garnish: string;
}

export const cocktailsData: CocktailDataProps[] = [
  {
    id: "1",
    title: "Himalyan Negroni",
    description:
      "A mountain twist on the classic Italian aperitivo, featuring Timbur-infused Hapusa Gin for a unique numbing sensation paired with the bitterness of Campari and Vermouth.",
    ingredients: [
      "30ml Hapusa Gin",
      "Timbur (Himalayan Sichuan Pepper) Infused",
      "15ml Vermouth",
      "15ml Campari",
    ],
    imageUrl: "/sula/featuredHapusa.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Hapusa",
    method: "Stir all ingredients with ice and strain into a chilled glass.",
    garnish: "Orange peel",
  },
  {
    id: "2",
    title: "Apricot Smash",
    description:
      "A fruity and refreshing concoction enhancing Hapusa Gin with the sweetness of apricot jam and fresh apple juice, balanced by a zesty lime kick.",
    ingredients: [
      "50ml Hapusa Gin",
      "2 Bar Spoons Apricot Jam",
      "30ml Apple Juice",
      "15ml Lime Juice",
      "5-7 pcs Mint",
    ],
    imageUrl: "/cocktails/apricot-smash.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Hapusa",
    method: "Shake",
    garnish: "Dry Apricot, Mint Sprig",
  },
  {
    id: "3",
    title: "Himalyan Gimlet",
    description:
      "A crisp and citrusy classic reinvented with Himalayan Gin, offering a perfect balance of sweet and sour notes.",
    ingredients: ["60ml Hapusa Gin", "20ml Sugar syrup", "20ml Lime juice"],
    imageUrl: "/cocktails/gimlet.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Hapusa",
    method: "Shake, fine strain ",
    garnish: "Lime wheel (Peel)",
  },
  {
    id: "4",
    title: "NY Sour",
    description:
      "A sophisticated whiskey sour variation using Hapusa Gin as the base, topped with a red wine float for a stunning visual and complex flavor profile.",
    ingredients: ["50ml Hapusa Gin", "20ml Simple syrup", "20ml Lemon Juice"],
    imageUrl: "/cocktails/nysour.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Hapusa",
    method: "Shake",
    garnish: "",
  },
  {
    id: "5",
    title: "Southside",
    description:
      "A refreshing gin-based cocktail often described as a mojito for gin lovers, featuring fresh mint and lime.",
    ingredients: [
      "50ml Greater Than Gin",
      "20ml Lime Juice",
      "15ml Simple syrup",
      "6-8 Mint leaves",
    ],
    imageUrl: "/cocktails/southside.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Greater Than",
    method: "Shake and fine strain",
    garnish: "Mint Leaf",
  },
  {
    id: "6",
    title: "Greater Martini",
    description:
      "The quintessential gin cocktail, clean and elegant, highlighting the botanicals of Greater Than Gin with a touch of dry vermouth.",
    ingredients: ["60ml Greater Than", "10ml Dry vermouth"],
    imageUrl: "/cocktails/greatermartini.png",
    difficulty: "Easy",
    category: "Classic",
    base: "Greater Than",
    method: "Stir",
    garnish: "Lemon Peel",
  },
  {
    id: "7",
    title: "Greater Gin Basil Smash",
    description:
      "A modern classic that's vibrant and herbal, muddling fresh basil to release a peppery aroma that complements the gin perfectly.",
    ingredients: [
      "60ml Greater Than Gin",
      "15ml Fresh Lime juice",
      "15ml Simple syrup",
      "8-10 Basil leaves",
    ],
    imageUrl: "/cocktails/ginbasil.png",
    difficulty: "Easy",
    category: "Classic",
    base: "Greater Than",
    method: "Build",
    garnish: "Basil sprig",
  },
  {
    id: "8",
    title: "Greater Salty Dog",
    description:
      "A tangy and savory delight combining gin and grapefruit juice with a hint of hibiscus, served in a salt-rimmed glass.",
    ingredients: [
      "45ml Greater Than Gin",
      "90ml Grapefruit Super Juice",
      "20ml Hibiscus syrup",
    ],
    imageUrl: "/cocktails/saltydog.png",
    difficulty: "Easy",
    category: "Classic",
    base: "Greater Than",
    method: "Shake",
    garnish: "Grapefruit",
  },
  {
    id: "9",
    title: "Hemingway Special",
    description:
      "A daiquiri variation created for Ernest Hemingway, featuring maraschino liqueur and grapefruit juice for a tart, complex finish without sugar.",
    ingredients: [
      "60ml.- 2oz. White Rhum",
      "30ml.- 1oz. Fresh pink grapefruit juice",
      "15ml.- ½oz. Luxardo Maraschino Originale",
      "15ml.- ½oz. Fresh Lime Juice",
      "7.5ml.- ¼oz. Sugarsyrup",
    ],
    imageUrl: "/cocktails/hemingway.png",
    difficulty: "Easy",
    category: "Classic",
    base: "Maraschino Originale",
    method: "Shake & Double strain",
    garnish: "Lime Zest",
  },
  {
    id: "10",
    title: "Maratonic",
    description:
      "A simple yet unique highball refreshing the palate with the nutty, cherry notes of Maraschino liqueur and tonic water.",
    ingredients: [
      "45ml.- 1½oz. Luxardo Maraschino Originale",
      "7.5ml.- ¼oz. Fresh Lemon Juice",
      "Top with tonic water",
      "Spray of Luzardo Absinthe",
    ],
    imageUrl: "/cocktails/maratonic.jpg ",
    difficulty: "Easy",
    category: "Classic",
    base: "Maraschino Originale",
    method: "Build",
    garnish: "Rosemary srping & cucumber slice",
  },
  {
    id: "11",
    title: "Aviation",
    description:
      "A pre-prohibition classic with a lovely pale sky-blue hue, offering floral and citrus notes from the gin, maraschino, and lemon.",
    ingredients: [
      "45ml.- 1.5 oz Greater Than London Dry Gin",
      "30ml.- 1 oz. Luxardo Maraschino Originale Liqueur",
      "15ml.- ½oz Fresh lemon juice",
    ],
    imageUrl: "/cocktails/aviation.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Maraschino Originale",
    method: "Shake & Double strain",
    garnish: "Lemon zest & Luxardo Original Maraschino Cherry",
  },
  {
    id: "12",
    title: "Morlacco Fizz",
    description:
      "A lively fizz showcasing the rich, blood-red cherry flavors of Sangue Morlacco, brightened with lemon and cherry juice.",
    ingredients: [
      "45 ml. – 1 ½ oz. Greater Than London Dry Gin",
      "20 ml. – ⅔ oz. Fresh lemon juice",
      "20 ml. – ⅔ oz. Luxardo Original Maraschino Cherry Juice",
      "15 ml. – ½ oz. Luxardo Cherry Liqueur “Sangue Morlacco”",
    ],
    imageUrl: "/cocktails/morlaccofizz.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Cherry Liqueur",
    method: "Stir all ingredients with ice and strain into a chilled glass.",
    garnish: "Luxardo Original Maraschino Cherry",
  },
  {
    id: "13",
    title: "Cherry Negoni",
    description:
      "A rich twist on the Negroni, swapping Campari for the deep, intense cherry flavor of Sangue Morlacco liqueur.",
    ingredients: [
      "45 ml. – 1 ½ oz. Luxardo London Dry Gin",
      "25 ml. – ¾ oz. Luxardo Cherry Liqueur “Sangue Morlacco”",
      "25 ml. – ¾ oz. Sweet Vermouth",
    ],
    imageUrl: "/cocktails/cherrynegroni.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Cherry Liqueur",
    method: "Stir",
    garnish: "Lemon zest & Luxardo Original Maraschino Cherry",
  },
  {
    id: "14",
    title: "Luxi Style",
    description:
      "A breezy highball combining gin and cherry liqueur, lengthened with soda for an easy-drinking, refreshing serve.",
    ingredients: [
      "45 ml. – 1 ½ oz. Luxardo London Dry Gin",
      "15 ml. – ½ oz. Luxardo Cherry Liqueur “Sangue Morlacco”",
      "Top with soda",
    ],
    imageUrl: "/sula/featuredHapusa.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Cherry Liqueur",
    method: "Build",
    garnish: "Rosemary & lemon zest",
  },
  {
    id: "15",
    title: "Vacanza",
    description:
      "A holiday in a glass, blending bitter Aperitivo warmth with zest red grapefruit and triple sec.",
    ingredients: [
      "40 ml. – 1 ¼ oz. Luxardo Aperitivo",
      "40 ml. – 1 ¼ oz. Fresh pink grapefruit juice",
      "20 ml. – ⅔ oz. Luxardo Triplum – Triple Sec",
    ],
    imageUrl: "/cocktails/vacanza.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Triple Sec",
    method: "Shake & Strain",
    garnish: "Grapefruit Zest",
  },
  {
    id: "16",
    title: "Whitelady",
    description:
      "A silky, sour classic combining the botanical punch of gin with the sweet orange notes of Triple Sec and fresh lemon.",
    ingredients: [
      "60 ml. – 2 oz. Luxardo London Dry Gin",
      "30 ml. – 1 oz. Luxardo Triplum Triple Sec",
      "10 ml. – ⅓ oz. Fresh lemon juice",
    ],
    imageUrl: "/cocktails/whitelady.png",
    difficulty: "Easy",
    category: "Classic",
    base: "Triple Sec",
    method: "Shake & Strain",
    garnish: "Lemon Zest",
  },
  {
    id: "17",
    title: "Margarita",
    description:
      "The world's most popular tequila cocktail, balancing earth agave notes with bright lime and sweet orange liqueur.",
    ingredients: [
      "60 ml. – 2 oz. Tequila Blanco",
      "10 ml. – ⅓ oz. Luxardo Triplum Triple Sec",
      "10 ml. – ⅓ oz. Fresh lime juice",
    ],
    imageUrl: "/cocktails/margarita.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Triple Sec",
    method: "Shake & Double strain",
    garnish: "Lime zest & rim of salt",
  },
  {
    id: "18",
    title: "Negroni",
    description:
      "The iconic Italian aperitif. Equal parts gin, vermouth, and bitters create a perfectly balanced, bittersweet masterpiece.",
    ingredients: [
      "40 ml. – 1 ⅓ oz. Luxardo Bitter",
      "40 ml. – 1 ⅓ oz. Greater Than London Dry Gin",
      "40 ml. – 1 ⅓ oz. Sweet Vermouth",
      "2 dash – 2 gocce Angostura Bitters",
    ],
    imageUrl: "/cocktails/negroni.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Bitter",
    method: "Build",
    garnish: "Lemon Zest",
  },
  {
    id: "19",
    title: "Bitter Shakerato",
    description:
      "A simple Italian favorite, shaking Luxardo Bitter vigorously with ice to create a cold, frothy, and intensely herbal drink.",
    ingredients: ["60 ml. – 2 oz. Luxardo Bitter"],
    imageUrl: "/cocktails/shakerato.png",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Bitter",
    method: "Shake & double strain",
    garnish: "Lemon zest",
  },
  {
    id: "20",
    title: "Boulevardier",
    description:
      "The Negroni's autumnal cousin, substituting gin for the rich, spicy warmth of Rye Whisky.",
    ingredients: [
      "45 ml. – 1 ½ oz. Rye Whisky",
      "30 ml. – 1 oz. Luxardo Bitter",
      "30 ml. – 1 oz. Sweet Vermouth",
    ],
    imageUrl: "/cocktails/Boulevadier.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Bitter",
    method: "Build",
    garnish: "Lemon Zest",
  },
  {
    id: "21",
    title: "Sorrentino",
    description:
      "A refreshing spritz-style drink marrying the zest of Limoncello with the depth of bitter and vermouth.",
    ingredients: [
      "30 ml. – 1 oz. Luxardo Limoncello",
      "30 ml. – 1 oz. Luxardo Bitter",
      "30 ml. – 1 oz. Sweet Vermouth",
      "Top with soda water",
    ],
    imageUrl: "/cocktails/Sorrentino.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Bitter",
    method: "Stir all ingredients with ice and strain into a chilled glass.",
    garnish: "Orange peel",
  },
  {
    id: "22",
    title: "Jungle Samba",
    description:
      "A tropical explosion of flavors featuring rum, pineapple, and lime, with a kick of Sambuca and bitter.",
    ingredients: [
      "35 ml. – 1 ⅙ oz Rhum",
      "15 ml. – ½ oz. Luxardo Bitter",
      "10 ml. – ⅓ oz. Luxardo Sambuca dei Cesari",
      "45 ml. – 1 ½ oz. Fresh pineapple juice",
      "15 ml. – ½ oz. Fresh lime juice",
      "1 bar spoon demerara sugar",
    ],
    imageUrl: "/cocktails/junglesamba.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Bitter Bitter",
    method: "Stir all ingredients with ice and strain into a chilled glass.",
    garnish: "Orange peel",
  },
  {
    id: "23",
    title: "Aperitivo Spritz",
    description:
      "The quintessential sunset drink. Light, bubbly, and bittersweet, featuring Luxardo Aperitivo and Prosecco.",
    ingredients: [
      "60 ml. – 2 oz. Luxardo Aperitivo",
      "50 ml. – 1 ⅔ oz. Prosecco",
      "Top with soda",
    ],
    imageUrl: "/cocktails/apertivo.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Aperitivo",
    method: "Build",
    garnish: "Orange Zest",
  },
  {
    id: "24",
    title: "Bicicletta",
    description:
      "A drier, more bitter alternative to the Spritz, named after the wobbly bike rides home after a few of these.",
    ingredients: [
      "50 ml. – 1 ⅔ oz. Luxardo Aperitivo",
      "Top with Aranciata Amara / Fresh orange juice",
    ],
    imageUrl: "/cocktails/bicicletta.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Aperitivo",
    method: "Build",
    garnish: "Orange Zest",
  },
  {
    id: "25",
    title: "Il Santo",
    description:
      "A complex and herbal cocktail layering gin, aperitivo, and maraschino with a touch of citrus.",
    ingredients: [
      "45 ml. – 1 ½ oz. Luxardo London Dry Gin",
      "15 ml. – ½ oz. Luxardo Aperitivo",
      "15 ml. – ½ oz. Lime juice",
      "10 ml. – ⅓ oz. Luxardo Liquore Sant’Antonio",
      "10 ml. – ⅓ oz. Luxardo Maraschino Originale",
    ],
    imageUrl: "/sula/featuredHapusa.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Aperitivo",
    method: "Shake & Strain",
    garnish: "Orange Zest",
  },
  {
    id: "26",
    title: "Angioletto & Lime",
    description:
      "A simple and sweet hazelnut-herb liqueur served with fresh lime for a balanced, digestible sip.",
    ingredients: [
      "60 ml. – 2 oz. Luxardo Angioletto",
      "15 ml. – ½ oz. Fresh lime juice",
    ],
    imageUrl: "/sula/featuredHapusa.jpg",
    difficulty: "Easy",
    category: "Classic",
    base: "Luxardo Angioletto",
    method: "Stir",
    garnish: "4 Lime Wedges",
  },
];
