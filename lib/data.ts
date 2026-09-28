export type Category={id:string;name:string;icon:string;accent:string;note:string};
export type Product={id:string;slug:string;name:string;category:string;price:number;oldPrice?:number;rating:number;reviews:number;description:string;ingredients:string[];image:string;badge?:string;calories:number;spicy?:boolean;popular?:boolean;accent?:string};
export const site={
  "id": "gulberg-garden",
  "name": "Gulberg Garden Kitchen",
  "short": "GG",
  "tag": "Fresh plates. Lahore energy.",
  "email": "ahmedbilalakhan56@gulgarden.com",
  "phone": "+92 300 7654321",
  "location": "Gulberg III, Lahore",
  "map": "Gulberg III Lahore Pakistan",
  "accent": "#285943",
  "accent2": "#d4a72c",
  "bg": "#f4f1e8",
  "ink": "#1d2920",
  "variant": "editorial"
};
export const runtime = 'edge';
export const categories=[
  {
    "id": "garden-bowls",
    "name": "Garden Bowls",
    "icon": "✦",
    "accent": "#d4a72c",
    "note": "Freshly prepared"
  },
  {
    "id": "pasta",
    "name": "Pasta",
    "icon": "◈",
    "accent": "#d4a72c",
    "note": "Freshly prepared"
  },
  {
    "id": "grill",
    "name": "Grill",
    "icon": "◆",
    "accent": "#d4a72c",
    "note": "Freshly prepared"
  },
  {
    "id": "brunch",
    "name": "Brunch",
    "icon": "●",
    "accent": "#d4a72c",
    "note": "Freshly prepared"
  },
  {
    "id": "coolers",
    "name": "Coolers",
    "icon": "☼",
    "accent": "#d4a72c",
    "note": "Freshly prepared"
  },
  {
    "id": "bakery",
    "name": "Bakery",
    "icon": "◇",
    "accent": "#d4a72c",
    "note": "Freshly prepared"
  }
];
export const products=[
  {
    "id": "green-harvest-bowl",
    "slug": "green-harvest-bowl",
    "name": "Green Harvest Bowl",
    "category": "bowls",
    "price": 1099,
    "rating": 4.9,
    "reviews": 110,
    "description": "Roasted vegetables, herbed rice, avocado, feta and lemon tahini dressing.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=88",
    "badge": "FRESH PICK",
    "calories": 350,
    "popular": true,
    "accent": "#285943"
  },
  {
    "id": "truffle-mushroom-pasta",
    "slug": "truffle-mushroom-pasta",
    "name": "Truffle Mushroom Pasta",
    "category": "pasta",
    "price": 1399,
    "rating": 4.8,
    "reviews": 147,
    "description": "Silky cream sauce, roasted mushrooms, parmesan and a subtle truffle finish.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=88",
    "badge": "CHEF PICK",
    "calories": 440,
    "popular": true,
    "accent": "#285943"
  },
  {
    "id": "herb-grilled-chicken",
    "slug": "herb-grilled-chicken",
    "name": "Herb Grilled Chicken",
    "category": "grill",
    "price": 1499,
    "rating": 4.8,
    "reviews": 184,
    "description": "Juicy herb-marinated chicken breast with greens, roasted potatoes and jus.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=88",
    "badge": null,
    "calories": 530,
    "popular": true,
    "accent": "#285943"
  },
  {
    "id": "garden-brunch-board",
    "slug": "garden-brunch-board",
    "name": "Garden Brunch Board",
    "category": "brunch",
    "price": 1699,
    "rating": 4.9,
    "reviews": 221,
    "description": "Sourdough, eggs, fruit, labneh, granola and seasonal bakery bites.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=88",
    "badge": "WEEKEND",
    "calories": 620,
    "popular": true,
    "accent": "#285943"
  },
  {
    "id": "lemon-mint-cooler",
    "slug": "lemon-mint-cooler",
    "name": "Lemon Mint Cooler",
    "category": "coolers",
    "price": 449,
    "rating": 4.8,
    "reviews": 258,
    "description": "Fresh lemon, mint and sparkling water served over plenty of ice.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1523371683702-9c9d2d9f6f12?auto=format&fit=crop&w=1200&q=88",
    "badge": "COOL",
    "calories": 710,
    "popular": false,
    "accent": "#285943"
  },
  {
    "id": "butter-croissant",
    "slug": "butter-croissant",
    "name": "Butter Croissant",
    "category": "bakery",
    "price": 299,
    "rating": 4.7,
    "reviews": 295,
    "description": "Flaky French-style croissant baked fresh each morning.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=88",
    "badge": "BAKED",
    "calories": 800,
    "popular": false,
    "accent": "#285943"
  },
  {
    "id": "berry-cheesecake",
    "slug": "berry-cheesecake",
    "name": "Berry Cheesecake",
    "category": "bakery",
    "price": 599,
    "rating": 4.9,
    "reviews": 332,
    "description": "Creamy cheesecake topped with bright seasonal berry compote.",
    "ingredients": [
      "Fresh ingredients",
      "House seasoning",
      "Chef preparation"
    ],
    "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=88",
    "badge": "SWEET",
    "calories": 890,
    "popular": false,
    "accent": "#285943"
  }
];
export const offers=[
  {
    "code": "GARDEN10",
    "title": "10% OFF",
    "sub": "Lunch bowls Monday to Thursday",
    "label": "TODAY"
  },
  {
    "code": "BRUNCH2",
    "title": "BRUNCH FOR TWO",
    "sub": "Board + two coolers at Rs. 2,199",
    "label": "TODAY"
  },
  {
    "code": "BAKEBOX",
    "title": "FREE PASTRY",
    "sub": "With breakfast orders above Rs. 1,500",
    "label": "TODAY"
  }
];
export function findProduct(slug:string){return products.find(p=>p.slug===slug)}
