export interface MenuItem {
  id: number;
  name: string;
  nameKannada?: string;
  description?: string;
  price: number;
  popular?: boolean;
  category: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "rice-special",
    title: "Rice Special",
    icon: "🍚",
    items: [
      { id: 1, name: "Dal Kichadi", price: 130, category: "rice-special" },
      { id: 2, name: "Gobi 65", price: 150, category: "rice-special" },
      { id: 3, name: "Baby Corn 65", price: 140, category: "rice-special" }
    ]
  },
  {
    id: "paneer-special",
    title: "Paneer Special Items",
    icon: "🧀",
    items: [
      { id: 4, name: "Paneer Ghee Roast", price: 180, category: "paneer-special", popular: true },
      { id: 5, name: "ಪನ್ನೀರ್ ಟಿಕ್ಕಾ", nameKannada: "ಪನ್ನೀರ್ ಟಿಕ್ಕಾ", price: 180, category: "paneer-special" },
      { id: 6, name: "Special Paneer Manchurian", price: 190, category: "paneer-special", popular: true },
      { id: 7, name: "ಪನ್ನೀರ್ ಪುದೀನ", nameKannada: "ಪನ್ನೀರ್ ಪುದೀನ", price: 180, category: "paneer-special" }
    ]
  },
  {
    id: "meals",
    title: "Meals",
    icon: "🍽️",
    items: [
      { id: 8, name: "Mini Meals Parcel", price: 60, category: "meals" }
    ]
  },
  {
    id: "north-indian-curry",
    title: "North Indian Curry",
    icon: "🍛",
    items: [
      { id: 9, name: "Dal Palak", price: 140, category: "north-indian-curry" },
      { id: 10, name: "ದಾಲ್ ಧಡಕ", nameKannada: "ದಾಲ್ ಧಡಕ", price: 150, category: "north-indian-curry" },
      { id: 11, name: "ಚನ್ನ ಮಸಾಲ", nameKannada: "ಚನ್ನ ಮಸಾಲ", price: 140, category: "north-indian-curry" },
      { id: 12, name: "ಆಲೂ ಚನ್ನ ಮಸಾಲ", nameKannada: "ಆಲೂ ಚನ್ನ ಮಸಾಲ", price: 140, category: "north-indian-curry" },
      { id: 13, name: "ಪಾಲಕ್ ಪನೀರ್", nameKannada: "ಪಾಲಕ್ ಪನೀರ್", price: 160, category: "north-indian-curry", popular: true },
      { id: 14, name: "Peas Palak", price: 140, category: "north-indian-curry" },
      { id: 15, name: "Mix. Veg. Curry", price: 150, category: "north-indian-curry" },
      { id: 16, name: "Veg. Kolhapuri", price: 150, category: "north-indian-curry" },
      { id: 17, name: "Veg. Hyderabadi", price: 150, category: "north-indian-curry" },
      { id: 18, name: "Veg. Kadai", price: 150, category: "north-indian-curry" },
      { id: 19, name: "Mushroom Masala", price: 150, category: "north-indian-curry" },
      { id: 20, name: "Mushroom Kadai", price: 160, category: "north-indian-curry" },
      { id: 21, name: "Capsicum Masala", price: 130, category: "north-indian-curry" },
      { id: 22, name: "Tomato Curry", price: 130, category: "north-indian-curry" },
      { id: 23, name: "ಪನ್ನೀರ್ ಕಡಾಯಿ", nameKannada: "ಪನ್ನೀರ್ ಕಡಾಯಿ", price: 180, category: "north-indian-curry" },
      { id: 24, name: "Veg. Makhanwala", price: 140, category: "north-indian-curry" },
      { id: 25, name: "Kaju Masala", price: 180, category: "north-indian-curry" },
      { id: 26, name: "Kaju Mutter", price: 170, category: "north-indian-curry" },
      { id: 27, name: "Baby Corn Masala", price: 150, category: "north-indian-curry" }
    ]
  },
  {
    id: "tandoori-items",
    title: "Tandoori Items",
    icon: "🔥",
    items: [
      { id: 28, name: "Roti", price: 25, category: "tandoori-items" },
      { id: 29, name: "Kulcha", price: 30, category: "tandoori-items" },
      { id: 30, name: "Butter Kulcha", price: 40, category: "tandoori-items" },
      { id: 31, name: "ಬಟರ್ ನಾನ್", nameKannada: "ಬಟರ್ ನಾನ್", price: 45, category: "tandoori-items" },
      { id: 32, name: "Methi Roti", price: 40, category: "tandoori-items" }
    ]
  },
  {
    id: "roti-curry",
    title: "Roti With Curry",
    icon: "🥖",
    items: [
      { id: 33, name: "Roti Curry", price: 70, category: "roti-curry" },
      { id: 34, name: "Naan Curry", price: 70, category: "roti-curry" },
      { id: 35, name: "ಆಲೂ ಪರೋಟ", nameKannada: "ಆಲೂ ಪರೋಟ", price: 75, category: "roti-curry" },
      { id: 36, name: "Channa Batura", price: 100, category: "roti-curry" }
    ]
  },
  {
    id: "north-indian-biriyani",
    title: "North Indian Biriyani",
    icon: "🍚",
    items: [
      { id: 37, name: "Peace Biriyani", price: 135, category: "north-indian-biriyani" },
      { id: 38, name: "Mugulai Biriyani", price: 180, category: "north-indian-biriyani" },
      { id: 39, name: "Paneer Biriyani", price: 170, category: "north-indian-biriyani", popular: true },
      { id: 40, name: "Kashmiri Biriyani", price: 180, category: "north-indian-biriyani" },
      { id: 41, name: "Paneer Tikka Biriyani", price: 180, category: "north-indian-biriyani" }
    ]
  },
  {
    id: "south-indian-dishes",
    title: "South Indian Dishes",
    icon: "🥘",
    items: [
      { id: 42, name: "Bajji/Pakoda", price: 40, category: "south-indian-dishes" },
      { id: 43, name: "Curd Rice", price: 60, category: "south-indian-dishes" },
      { id: 44, name: "Curd Avalakki", price: 50, category: "south-indian-dishes" },
      { id: 45, name: "Idly", price: 35, category: "south-indian-dishes" },
      { id: 46, name: "Vada", price: 35, category: "south-indian-dishes" },
      { id: 47, name: "Battan Idli", price: 50, category: "south-indian-dishes" },
      { id: 48, name: "Mangalore Buns", price: 50, category: "south-indian-dishes" },
      { id: 49, name: "Kesri Bath", price: 30, category: "south-indian-dishes" },
      { id: 50, name: "Khara Bath", price: 30, category: "south-indian-dishes" },
      { id: 51, name: "Chow Chow Bath", price: 60, category: "south-indian-dishes" },
      { id: 52, name: "Rice Bath", price: 55, category: "south-indian-dishes" },
      { id: 53, name: "Poori Sagu", price: 65, category: "south-indian-dishes" },
      { id: 54, name: "Plain Dosa", price: 50, category: "south-indian-dishes" },
      { id: 55, name: "Masala Dosa", price: 65, category: "south-indian-dishes", popular: true },
      { id: 56, name: "Set Dosa", price: 60, category: "south-indian-dishes" },
      { id: 57, name: "Kali Dosa", price: 60, category: "south-indian-dishes" },
      { id: 58, name: "ಪೇಪರ್ ಮಸಾಲ ದೋಸೆ", nameKannada: "ಪೇಪರ್ ಮಸಾಲ ದೋಸೆ", price: 80, category: "south-indian-dishes" },
      { id: 59, name: "Paper Plain Dosa", price: 70, category: "south-indian-dishes" },
      { id: 60, name: "ನೀರ್ ದೋಸೆ", nameKannada: "ನೀರ್ ದೋಸೆ", price: 50, category: "south-indian-dishes" },
      { id: 61, name: "Open Dosa", price: 60, category: "south-indian-dishes" },
      { id: 62, name: "Butter Masala Dosa", price: 90, category: "south-indian-dishes", popular: true }
    ]
  },
  {
    id: "manchurian-gravy",
    title: "Manchurian Gravy",
    icon: "🥢",
    items: [
      { id: 63, name: "ಗೋಬಿ ಮಂಚೂರಿಯನ್ ಗ್ರೇವಿ", nameKannada: "ಗೋಬಿ ಮಂಚೂರಿಯನ್ ಗ್ರೇವಿ", price: 130, category: "manchurian-gravy" }
    ]
  },
  {
    id: "north-indian-palav",
    title: "North Indian Palav",
    icon: "🍚",
    items: [
      { id: 64, name: "Paneer Palav", price: 150, category: "north-indian-palav" },
      { id: 65, name: "Kashmiri Palav", price: 170, category: "north-indian-palav" }
    ]
  },
  {
    id: "fresh-fruit-juice",
    title: "Fresh Fruit Juice",
    icon: "🍹",
    items: [
      { id: 66, name: "Moosambi", price: 40, category: "fresh-fruit-juice" },
      { id: 67, name: "Orange", price: 40, category: "fresh-fruit-juice" },
      { id: 68, name: "Pineapple", price: 40, category: "fresh-fruit-juice" },
      { id: 69, name: "Grapes", price: 40, category: "fresh-fruit-juice" },
      { id: 70, name: "Watermelon", price: 40, category: "fresh-fruit-juice" },
      { id: 71, name: "Muskmelon", price: 40, category: "fresh-fruit-juice" },
      { id: 72, name: "Lime", price: 30, category: "fresh-fruit-juice" },
      { id: 73, name: "Mint Lime Soda", price: 50, category: "fresh-fruit-juice" },
      { id: 74, name: "Blue Lime Soda", price: 50, category: "fresh-fruit-juice" }
    ]
  },
  {
    id: "dry-fruit-milk-shake",
    title: "Dry Fruit Milk Shake",
    icon: "🥛",
    items: [
      { id: 75, name: "Mixed Dry Fruits", price: 75, category: "dry-fruit-milk-shake" },
      { id: 76, name: "Dates", price: 70, category: "dry-fruit-milk-shake" },
      { id: 77, name: "Anjur", price: 70, category: "dry-fruit-milk-shake" },
      { id: 78, name: "Badam", price: 60, category: "dry-fruit-milk-shake" }
    ]
  },
  {
    id: "fresh-fruit-milk-shake",
    title: "Fresh Fruit Milk Shake",
    icon: "🥤",
    items: [
      { id: 79, name: "Butter Fruit", price: 70, category: "fresh-fruit-milk-shake" },
      { id: 80, name: "Anar", price: 70, category: "fresh-fruit-milk-shake" },
      { id: 81, name: "Apple", price: 70, category: "fresh-fruit-milk-shake" },
      { id: 82, name: "Banana", price: 60, category: "fresh-fruit-milk-shake" },
      { id: 83, name: "Papaya", price: 50, category: "fresh-fruit-milk-shake" },
      { id: 84, name: "Sapota", price: 60, category: "fresh-fruit-milk-shake" },
      { id: 85, name: "Mango", price: 65, category: "fresh-fruit-milk-shake" },
      { id: 86, name: "Muskmelon", price: 60, category: "fresh-fruit-milk-shake" }
    ]
  },
  {
    id: "special-milk-shake",
    title: "Special Milk Shake",
    icon: "🍫",
    items: [
      { id: 87, name: "Litchi", price: 80, category: "special-milk-shake" },
      { id: 88, name: "Kitkat Shake", price: 60, category: "special-milk-shake" },
      { id: 89, name: "Falooda", price: 70, category: "special-milk-shake" },
      { id: 90, name: "Snickers Shake", price: 60, category: "special-milk-shake" },
      { id: 91, name: "Oreo", price: 60, category: "special-milk-shake" },
      { id: 92, name: "Chocolate Shake", price: 60, category: "special-milk-shake" },
      { id: 93, name: "Cole Coffee", price: 60, category: "special-milk-shake" }
    ]
  },
  {
    id: "ragi-milk-shake",
    title: "Ragi Milk Shake",
    icon: "🌾",
    items: [
      { id: 94, name: "Ragi Milk Shake", price: 60, category: "ragi-milk-shake" },
      { id: 95, name: "Ragi Vanilla Milk Shake", price: 60, category: "ragi-milk-shake" },
      { id: 96, name: "Ragi Badam Milk Shake", price: 65, category: "ragi-milk-shake" },
      { id: 97, name: "Ragi Dry Fruit Milk Shake", price: 70, category: "ragi-milk-shake" },
      { id: 98, name: "Ragi Chocolate Milk Shake", price: 60, category: "ragi-milk-shake" }
    ]
  },
  {
    id: "others",
    title: "Others",
    icon: "🍽️",
    items: [
      { id: 99, name: "Butter Milk", price: 40, category: "others" },
      { id: 100, name: "Boost", price: 50, category: "others" },
      { id: 101, name: "ಕಾಫೀ", nameKannada: "ಕಾಫೀ", price: 30, category: "others" },
      { id: 102, name: "ಬಾದಾಮಿ ಹಾಲು", nameKannada: "ಬಾದಾಮಿ ಹಾಲು", price: 60, category: "others" },
      { id: 103, name: "Peace Palav", price: 110, category: "others" },
      { id: 104, name: "Hande Palav", price: 110, category: "others" },
      { id: 105, name: "ಇಡ್ಲಿ ವಡ", nameKannada: "ಇಡ್ಲಿ ವಡ", price: 60, category: "others" },
      { id: 106, name: "ಕೇಸರಿ ಬಾತ್", nameKannada: "ಕೇಸರಿ ಬಾತ್", price: 30, category: "others" },
      { id: 107, name: "ರವ ಇಡ್ಲಿ", nameKannada: "ರವ ಇಡ್ಲಿ", price: 50, category: "others" },
      { id: 108, name: "ಮೊಸರು ವಡ", nameKannada: "ಮೊಸರು ವಡ", price: 40, category: "others" },
      { id: 109, name: "ರೈಸ್ ಬಾತ್", nameKannada: "ರೈಸ್ ಬಾತ್", price: 55, category: "others" },
      { id: 110, name: "ಬಜ್ಜಿ / ಪಕೋಡ", nameKannada: "ಬಜ್ಜಿ / ಪಕೋಡ", price: 40, category: "others" },
      { id: 111, name: "ಮೊಸರನ್ನ", nameKannada: "ಮೊಸರನ್ನ", price: 60, category: "others" },
      { id: 112, name: "ಈರುಳ್ಳಿ ದೋಸೆ", nameKannada: "ಈರುಳ್ಳಿ ದೋಸೆ", price: 60, category: "others" },
      { id: 113, name: "ರವ ದೋಸೆ", nameKannada: "ರವ ದೋಸೆ", price: 60, category: "others" }
    ]
  }
];

// Helper function to format price
export const formatPrice = (price: number): string => {
  return `₹${price.toFixed(2)}`;
};

// Helper function to get all menu items
export const getAllMenuItems = (): MenuItem[] => {
  return menuCategories.flatMap(category => category.items);
};

// Helper function to get items by category
export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  const category = menuCategories.find(cat => cat.id === categoryId);
  return category ? category.items : [];
};
