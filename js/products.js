// Products data and rendering based on the Figma design images

// Product database
const products = [
  {
    id: 1,
    name: "Women Textured Handheld Bag",
    brand: "Allen Solly",
    category: "Bags",
    price: 80.0,
    originalPrice: 100.0,
    rating: 4.5,
    stock: 15,
    image:
      "https://cdn.pixabay.com/photo/2017/08/20/11/39/handbag-2661412_960_720.jpg",
    description:
      "Beautiful textured handheld bag for women. Perfect for parties and casual outings.",
    colors: ["#8B4513", "#000000", "#A52A2A"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Polo Collar T-Shirt",
    brand: "Louis Philippe Sport",
    category: "Men",
    price: 50.0,
    originalPrice: 55.0,
    rating: 4.2,
    stock: 20,
    image:
      "https://i.pinimg.com/originals/6c/3d/dd/6c3ddd4f609acc5e3fff3e13255cfc15.jpg",
    description:
      "Premium quality polo collar t-shirt for men. Comfortable and stylish.",
    colors: ["#0000FF", "#FF0000", "#000000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Men adi-dash Running Shoes",
    brand: "Adidas",
    category: "Shoes",
    price: 60.0,
    originalPrice: 75.0,
    rating: 4.7,
    stock: 12,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.xiLk6II7SS7bLC-CXwSykwHaE8?pid=Api&h=220&P=0",
    description:
      "High-performance running shoes for men. Lightweight and durable.",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 4,
    name: "sHIRT",
    brand: "Roadstar",
    category: "Men",
    price: 38.0,
    originalPrice: 40.0,
    rating: 4.0,
    stock: 25,
    image:
      "https://feature.com/cdn/shop/files/NH.-S-S-Tee-15---Black-252PCNH-ST15-BLK-12-14-25-Feature-JA-4.jpg?v=1766007352&width=3072",
    description: "Comfortable printed cotton t-shirt for casual wear.",
    colors: ["#FF0000", "#0000FF", "#008000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Tailored Cotton Casual Shirt",
    brand: "US Polo",
    category: "Men",
    price: 40.0,
    originalPrice: 50.0,
    rating: 4.3,
    stock: 18,
    image:
      "https://feature.com/cdn/shop/files/Check-Shirt---Blue-HM27SH004-BLU---03-20-24---Feature--DV.jpg?v=1711500253&width=3072",
    description: "Stylish tailored cotton casual shirt for men.",
    colors: ["#0000FF", "#FFFFFF", "#000000"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Women Sandals",
    brand: "Zyla",
    category: "Shoes",
    price: 35.0,
    originalPrice: 40.0,
    rating: 4.1,
    stock: 22,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.v97F1Cae0VMOWvNBVvSVpQHaHa?pid=Api&h=220&P=0",
    description: "Elegant and comfortable sandals for women.",
    colors: ["#FFC0CB", "#000000", "#8B4513"],
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: 7,
    name: "Girls Pink Moana Printed Dress",
    brand: "YK Disney",
    category: "Kids",
    price: 80.0,
    originalPrice: 100.0,
    rating: 4.8,
    stock: 10,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.UbAl7VWMEvIqRgZPniEuegHaHa?pid=Api&h=220&P=0",
    description: "Beautiful Moana printed dress for girls.",
    colors: ["#FF69B4", "#FFFFFF"],
    sizes: ["2T", "3T", "4T", "5T"],
  },
  {
    id: 8,
    name: "Casual Blue Jeans",
    brand: "Arrow",
    category: "Men",
    price: 50.0,
    originalPrice: 60.0,
    rating: 4.4,
    stock: 30,
    image:
      "https://sp.yimg.com/ib/th?id=OPHS.dXFBO2aaG8ih9Q474C474&o=5&pid=21.1",
    description: "Comfortable casual blue jeans for men.",
    colors: ["#0000FF", "#000000"],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 9,
    name: "Floral Embroidered Maxi Dress",
    brand: "Trendyol",
    category: "Women",
    price: 35.0,
    originalPrice: 45.0,
    rating: 4.6,
    stock: 15,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.pDhJUqKHauj7qhNa6sLiQAHaLH?pid=Api&h=220&P=0",
    description: "Beautiful floral embroidered maxi dress for women.",
    colors: ["#FF69B4", "#800080"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 10,
    name: "Brown Leather Jacket",
    brand: "Allen Solly",
    category: "Men",
    price: 60.0,
    originalPrice: 70.0,
    rating: 4.5,
    stock: 8,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.TUL-v7cdH0wOvqkMQdVZ2wHaHa?pid=Api&h=220&P=0",
    description: "Premium brown leather jacket for men.",
    colors: ["#8B4513", "#000000"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 11,
    name: "Casual Shoe for Men",
    brand: "US Polo",
    category: "Shoes",
    price: 40.0,
    originalPrice: 50.0,
    rating: 4.2,
    stock: 20,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Dz-g55rDJAAQ3IiWIybZdQHaHa?pid=Api&h=220&P=0",
    description: "Stylish casual shoes for men.",
    colors: ["#FFFFFF", "#000000", "#8B4513"],
    sizes: ["8", "9", "10", "11"],
  },
  {
    id: 12,
    name: "Leather Hand Purse",
    brand: "Gucci",
    category: "Bags",
    price: 40.0,
    originalPrice: 60.0,
    rating: 4.7,
    stock: 5,
    image:
      "https://dimg.dillards.com/is/image/DillardsZoom/mainProduct/brahmin-melbourne-collection-katie-cross-body-bag/00000001_zi_pecan05479172.jpg",
    description: "Luxury leather hand purse for women.",
    colors: ["#000000", "#8B4513"],
    sizes: ["S", "M"],
  },
  {
    id: 13,
    name: "Red Printed T-Shirt",
    brand: "YK Disney",
    category: "Kids",
    price: 30.0,
    originalPrice: 35.0,
    rating: 4.3,
    stock: 25,
    image:
      "https://sp.yimg.com/ib/th?id=OPHS.67lPFtGjiVAPhg474C474&o=5&pid=21.1&w=174&h=174",
    description: "Fun red printed t-shirt for kids.",
    colors: ["#FF0000", "#0000FF"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 14,
    name: "Printed Blazer for Men",
    brand: "Roadstar",
    category: "Men",
    price: 60.0,
    originalPrice: 70.0,
    rating: 4.4,
    stock: 10,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.G-NYFek7iciZbHn5LL_Z8AHaHa?pid=Api&h=220&P=0",
    description: "Stylish printed blazer for formal occasions.",
    colors: ["#000000", "#0000FF"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 15,
    name: "Leather Hand Purse",
    brand: "Flora",
    category: "Bags",
    price: 35.0,
    originalPrice: 45.0,
    rating: 4.1,
    stock: 12,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.M0HKWAAiiyLnWHZXTwb8IAHaHa?pid=Api&h=220&P=0",
    description: "Elegant leather hand purse for daily use.",
    colors: ["#8B4513", "#000000", "#FF0000"],
    sizes: ["S", "M"],
  },
  {
    id: 16,
    name: "Women Textured Handheld Bag",
    brand: "Allen Solly",
    category: "Bags",
    price: 80.0,
    originalPrice: 100.0,
    rating: 4.5,
    stock: 7,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.kk6-GyaSse4EZjZhIA4CNAHaJ4?pid=Api&h=220&P=0",
    description: "Another variant of our popular textured handheld bag.",
    colors: ["#000000", "#8B4513"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 16,
    name: "Women Textured Handheld Bag",
    brand: "Allen Solly",
    category: "Bags",
    price: 700.0,
    originalPrice: 100.0,
    rating: 4.5,
    stock: 7,
    image:
      "https://sp.yimg.com/ib/th/id/OIP.3LxbZl_YA9PvwOV7zTTwPgHaJ0?pid=Api&w=148&h=148&c=7&rs=1",
    description: "Another variant of our popular textured handheld bag.",
    colors: ["#000000", "#8B4513"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 9,
    name: "Floral Embroidered Maxi Dress",
    brand: "Trendyol",
    category: "Women",
    price: 70.0,
    originalPrice: 45.0,
    rating: 4.6,
    stock: 15,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.1gyuITxSroERpV2o_yjluAHaKO?pid=Api&h=220&P=0",
    description: "Beautiful floral embroidered maxi dress for women.",
    colors: ["#FF69B4", "#800080"],
    sizes: ["S", "M", "L"],
  },
];

// Get unique categories
function getCategories() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  return categories;
}

// Render products grid
function renderProducts(productsToRender) {
  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid) return;

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = '<p class="no-products">No products found</p>';
    return;
  }

  let html = "";
  for (let i = 0; i < productsToRender.length; i++) {
    const product = productsToRender[i];
    const discount = product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0;

    html += `
            <div class="product-card" data-id="${product.id}" onclick="goToDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400?text=No+Image'">
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">
                        ${product.name}
                    </div>
                    <div class="product-category">${product.category}</div>
                    <div class="product-price">
                        $${product.price.toFixed(2)}
                        <span style="text-decoration: line-through; color: #999;"></span>
                    </div>
                    <div class="product-rating">
                        ${generateRating(product.rating)} (${product.rating})
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="add-to-wishlist-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})">
                            ♡
                        </button>
                    </div>
                </div>
            </div>
        `;
  }

  productsGrid.innerHTML = html;
}

// Make sure generateRating function is available
if (typeof generateRating === "undefined") {
  window.generateRating = function (rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) starsHTML += "★";
    if (halfStar) starsHTML += "½";
    for (let i = 0; i < emptyStars; i++) starsHTML += "☆";
    return starsHTML;
  };
}

// helper for card clicks
function goToDetail(id) {
  window.location.href = `product-detail.html?id=${id}`;
}

// Export products for use in other files
window.products = products;
window.getCategories = getCategories;
window.renderProducts = renderProducts;
window.goToDetail = goToDetail;
