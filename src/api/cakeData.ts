import { Cake } from "../types";

export const CAKES: Cake[] = [
  {
    id: "1",
    name: "Rose Garden Elegance",
    price: 2500,
    description: "Exquisite vanilla cake with delicate rose petal decorations and cream filling",
    image: "dist/assets/rose-garden.jpg",
    category: "celebration",
    servings: ["6 servings", "12 servings", "18 servings"],
    flavors: ["Vanilla", "Chocolate", "Strawberry"],
    ingredients: ["Premium flour", "Fresh eggs", "Madagascar vanilla", "Fresh roses", "Whipped cream", "Rose water"],
  },
  {
    id: "2",
    name: "Lavender Dream",
    price: 2800,
    description: "Soft lavender sponge with lavender buttercream and fresh floral accents",
    image: "dist/assets/lavender-cake.png",
    category: "wedding",
    servings: ["8 servings", "14 servings", "20 servings"],
    flavors: ["Lavender", "Vanilla", "Lemon"],
    ingredients: ["All-purpose flour", "Organic eggs", "Lavender buds", "Butter", "Powdered sugar", "Lemon zest"],
  },
  {
    id: "3",
    name: "Peony Celebration",
    price: 2200,
    description: "Rich chocolate cake adorned with stunning peony blooms and gold accents",
    image: "dist/assets/Peony cake.jpg",
    category: "birthday",
    servings: ["6 servings", "12 servings"],
    flavors: ["Chocolate", "Chocolate Truffle", "Salted Caramel"],
    ingredients: ["Premium cocoa", "Dark chocolate", "Fresh peonies", "Mascarpone", "Gold leaf", "Hazelnut"],
  },
  {
    id: "4",
    name: "Wildflower Bliss",
    price: 2600,
    description: "Light coconut cake with mixed wildflower designs and tropical essence",
    image: "dist/assets/wildflower-cake.png",
    category: "celebration",
    servings: ["8 servings", "15 servings"],
    flavors: ["Coconut", "Pineapple", "Passion Fruit"],
    ingredients: ["Fresh coconut milk", "Shredded coconut", "Pineapple juice", "Tropical flowers", "Honey", "Macadamia"],
  },
  {
    id: "5",
    name: "Romantic White",
    price: 3000,
    description: "Premium white velvet cake with intricate lace-like floral patterns",
    image: "dist/assets/romantic-white.jpg",
    category: "wedding",
    servings: ["10 servings", "16 servings", "24 servings"],
    flavors: ["White Velvet", "Vanilla", "Champagne"],
    ingredients: ["White chocolate", "Premium butter", "Champagne", "Fresh cream", "Edible lace", "Ivory fondant"],
  },
  {
    id: "6",
    name: "Sunset Bloom",
    price: 2400,
    description: "Ombre gradient cake with sunset-inspired flowers and fresh berries",
    image: "dist/assets/sunset-bloom.jpg",
    category: "celebration",
    servings: ["6 servings", "12 servings"],
    flavors: ["Raspberry", "Mango", "Passion Fruit"],
    ingredients: ["Fresh raspberries", "Mango puree", "Passion fruit", "Mascarpone cream", "Edible flowers", "Berries"],
  },
];

export const FLORAL_COLORS = [
  { name: "Rose Pink", hex: "#E8A8C8" },
  { name: "Lavender Purple", hex: "#C8A8E8" },
  { name: "Peony Red", hex: "#DC5959" },
  { name: "Blush", hex: "#F5D5D0" },
  { name: "Sage Green", hex: "#9CAF88" },
  { name: "Gold", hex: "#D4AF37" },
  { name: "Ivory", hex: "#F5F5DC" },
];

export const CAKE_SIZES = [
  { label: "6 inches (4-6 servings)", value: "small" },
  { label: "8 inches (8-10 servings)", value: "medium" },
  { label: "10 inches (12-16 servings)", value: "large" },
  { label: "12 inches (18-24 servings)", value: "extra-large" },
];

export const CUSTOM_CAKE_FLAVORS = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Lavender",
  "Lemon",
  "Chocolate Truffle",
  "Salted Caramel",
  "Coconut",
  "Pineapple",
  "Passion Fruit",
  "White Velvet",
  "Champagne",
  "Raspberry",
  "Mango",
];

export const BLOG_POSTS = [
  {
    id: "1",
    title: "The Benefits of Fresh Ingredients in Cake Baking",
    excerpt: "Discover why using premium, fresh ingredients makes all the difference in creating the perfect cake.",
    content: `Using fresh ingredients is crucial to creating delicious, high-quality cakes. Fresh eggs provide better structure and moisture, while premium butter creates a richer, more luxurious taste. Fresh vanilla and real ingredients ensure your cake has authentic flavors that simply can't be replicated with artificial alternatives.

Our cakes at Fleur de Gâteau are made with ingredients sourced from trusted local suppliers in Cebu. We believe in quality over shortcuts, which is why every cake that leaves our kitchen is a masterpiece.`,
    author: "Chef Marie",
    date: "November 1, 2025",
    category: "Baking Tips",
  },
  {
    id: "2",
    title: "How to Store Your Cake to Keep It Fresh",
    excerpt: "Learn the best practices for storing your handcrafted cake to maintain its freshness and flavor.",
    content: `Proper storage is essential for preserving the quality of your cake. Here are our expert tips:

1. **Room Temperature**: Store unfrosted cakes at room temperature in an airtight container for up to 2 days.
2. **Refrigerator**: Frosted cakes should be refrigerated and can last up to 5 days when covered.
3. **Freezer**: You can freeze cakes for up to 3 months. Thaw at room temperature before serving.
4. **Humidity**: Avoid exposing your cake to humidity, which can affect the frosting and texture.

Always keep your cake in an airtight container to prevent it from drying out.`,
    author: "Chef Marie",
    date: "October 25, 2025",
    category: "Storage Guide",
  },
  {
    id: "3",
    title: "The Art of Floral Cake Decoration",
    excerpt: "Explore the techniques behind creating beautiful floral designs that make our cakes truly special.",
    content: `Floral decorations transform a simple cake into a work of art. At Fleur de Gâteau, our pastry chefs use a combination of techniques:

- **Edible Flowers**: We source beautiful, food-safe flowers that are both stunning and delicious.
- **Sugar Flowers**: Hand-crafted flowers made from sugar and fondant for intricate designs.
- **Piping Techniques**: Using specialized piping bags and tips to create realistic floral patterns.
- **Color Theory**: Understanding how colors work together to create harmonious, elegant designs.

Each cake is a unique expression of artistry and love for the craft.`,
    author: "Chef Marie",
    date: "October 18, 2025",
    category: "Design Tips",
  },
  {
    id: "4",
    title: "Choosing the Perfect Cake Flavor for Your Event",
    excerpt: "Find out how to select the ideal cake flavor that matches your celebration and personal taste.",
    content: `Different occasions call for different flavors! Here's our guide to selecting the perfect cake:

- **Birthdays**: Classic vanilla or chocolate cakes are always crowd-pleasers.
- **Weddings**: Elegant flavors like champagne, lavender, or white velvet create a sophisticated atmosphere.
- **Corporate Events**: Try our signature flavors like salted caramel or passion fruit.
- **Casual Celebrations**: Bold flavors like chocolate truffle or raspberry burst work wonderfully.

Our expert team can help you find the perfect flavor combination for your special day.`,
    author: "Chef Marie",
    date: "October 10, 2025",
    category: "Flavor Guide",
  },
  {
    id: "5",
    title: "Understanding Cake Pricing: What Goes Into Your Handmade Cake",
    excerpt: "Learn why handcrafted cakes are priced the way they are and what makes them worth the investment.",
    content: `When you order a cake from Fleur de Gâteau, you're investing in:

1. **Premium Ingredients**: Only the finest, freshest ingredients from trusted suppliers.
2. **Expert Craftsmanship**: Hours of skilled labor by trained pastry chefs.
3. **Artistry**: Custom designs tailored specifically to your vision and celebration.
4. **Quality Assurance**: Each cake is inspected for perfection before delivery.
5. **Reliable Delivery**: Timely, safe delivery to your Cebu location.

Our pricing reflects the value of a truly handcrafted, premium experience.`,
    author: "Chef Marie",
    date: "October 2, 2025",
    category: "About Cakes",
  },
];
