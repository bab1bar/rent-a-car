
// // 💬 Message text
// const message =
// "Welcome to Achar App! Explore 100+ delicious pickles. ایسے ویب ایپ بنانے کے لیے یا ایسی کوڈنگ سیکھنے کے لیے رابطہ کریں۔ 03425910639";

// 🌐 language state (global inside app)
let urdu = false;

// 🚀 Popup on load
document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.getElementById("overlay");
  const msgText = document.getElementById("msgText");

  if (overlay && msgText) {
    msgText.textContent = message;
    overlay.style.display = "flex";
  }

  // ❌ close modal
  window.closeModal = function () {
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.style.display = "none";
  };
    // 👉 KEEP YOUR HUGE JSON HERE (NO CHANGES)
const data = [
  // 🍚 RICE
  {
    name: "Basmati Rice",
    urdu: "باسمتی چاول",
    time: "8-10 min",
    pressure: "3-4 min",
    ratio: 1.8,
    cat: "rice",

    recipe: "Wash rice first",
    benefits: "Good energy food",
    tips: "Do not overcook",
    video: "https://youtube.com"
  },

  {
    name: "Sella Rice",
    urdu: "سیلہ چاول",
    time: "11-12 min",
    pressure: "5-6 min",
    ratio: 2.2,
    cat: "rice",

    recipe: "Soak before cooking",
    benefits: "Filling and fluffy",
    tips: "Needs more water",
    video: "https://youtube.com"
  },
  { name: "Pulao Rice", urdu: "پلاؤ چاول", time: "10 min", pressure: "4 min", ratio: 1.75, cat: "rice" },
  { name: "Boiled Rice", urdu: "ابلے چاول", time: "10 min", pressure: "3 min", ratio: 2, cat: "rice" },
  { name: "Fried Rice", urdu: "فرائیڈ رائس", time: "12 min", pressure: "-", ratio: 1.5, cat: "rice" },

  // 🥣 DAAL
  { name: "Dal Masoor", urdu: "مسور دال", time: "20 min", pressure: "6-8 min", ratio: 2, cat: "dal" },
  { name: "Dal Moong", urdu: "مونگ دال", time: "20 min", pressure: "5-7 min", ratio: 2, cat: "dal" },
  { name: "Dal Chana", urdu: "چنا دال", time: "35 min", pressure: "8-10 min", ratio: 3, cat: "dal" },
  { name: "Dal Mash", urdu: "ماش دال", time: "30 min", pressure: "10-12 min", ratio: 2.5, cat: "dal" },

  // 🍗 MEAT
  { name: "Chicken", urdu: "چکن", time: "15 min", pressure: "4-6 min", ratio: 1, cat: "meat" },
  { name: "Mutton", urdu: "مٹن", time: "25 min", pressure: "10-12 min", ratio: 1, cat: "meat" },
  { name: "Beef", urdu: "گائے کا گوشت", time: "40 min", pressure: "30-40 min", ratio: 1.2, cat: "meat" },
  { name: "Beef Nihari", urdu: "نہاری", time: "90 min", pressure: "40 min", ratio: 2, cat: "meat" },

  // 🥬 VEG
  { name: "Potato", urdu: "آلو", time: "20 min", pressure: "5-7 min", ratio: 1, cat: "veg" },
  { name: "Spinach", urdu: "پالک", time: "10 min", pressure: "2-3 min", ratio: 0.5, cat: "veg" },
  { name: "Carrot", urdu: "گاجر", time: "15 min", pressure: "6 min", ratio: 0.7, cat: "veg" },
  { name: "Cauliflower", urdu: "پھول گوبھی", time: "15 min", pressure: "5 min", ratio: 0.6, cat: "veg" },
  { name: "Peas", urdu: "مٹر", time: "10 min", pressure: "3 min", ratio: 0.5, cat: "veg" },
  { name: "Okra", urdu: "بھنڈی", time: "12 min", pressure: "-", ratio: 0.4, cat: "veg" },

  // 🍛 OTHER
  { name: "Egg", urdu: "انڈا", time: "8 min", pressure: "3 min", ratio: 0, cat: "other" },
  { name: "Tea", urdu: "چائے", time: "5 min", pressure: "-", ratio: 1, cat: "other" },
  { name: "Milk", urdu: "دودھ", time: "5 min", pressure: "-", ratio: 1, cat: "other" },
  { name: "Noodles", urdu: "نوڈلز", time: "5 min", pressure: "-", ratio: 2, cat: "other" },
  { name: "Dough", urdu: "آٹا", time: "-", pressure: "-", ratio: 0.5, cat: "other" },

  // 🍟 SNACKS
  { name: "Samosa", urdu: "سموسہ", time: "25 min", pressure: "-", ratio: 1.5, cat: "snack" },
  { name: "Pakora", urdu: "پکوڑے", time: "15 min", pressure: "-", ratio: 1.2, cat: "snack" },
  { name: "Fries", urdu: "فرنچ فرائز", time: "15 min", pressure: "-", ratio: 1, cat: "snack" },
  { name: "Nuggets", urdu: "چکن نگٹس", time: "20 min", pressure: "-", ratio: 1, cat: "snack" },
  { name: "Sandwich", urdu: "سینڈوچ", time: "10 min", pressure: "-", ratio: 0.8, cat: "snack" },
  { name: "Chaat", urdu: "چاٹ", time: "15 min", pressure: "-", ratio: 1.2, cat: "snack" },
  { name: "Spring Rolls", urdu: "اسپرنگ رولز", time: "20 min", pressure: "-", ratio: 1.5, cat: "snack" },
  { name: "Dahi Bhalla", urdu: "دہی بھلے", time: "20 min", pressure: "-", ratio: 1.5, cat: "snack" },

  // 🥤 DRINKS
  { name: "Tea", urdu: "چائے", time: "5 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Coffee", urdu: "کافی", time: "10 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Lassi", urdu: "لسی", time: "10 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Milkshake", urdu: "ملک شیک", time: "10 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Lemonade", urdu: "لیمونیڈ", time: "5 min", pressure: "-", ratio: 1, cat: "drink" },
  { name: "Green Tea", urdu: "سبز چائے", time: "5 min", pressure: "-", ratio: 1, cat: "drink" },

  // 🍰 DESSERTS
  { name: "Kheer", urdu: "کھیر", time: "35 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Custard", urdu: "کسٹرڈ", time: "20 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Gulab Jamun", urdu: "گلاب جامن", time: "30 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Jalebi", urdu: "جلیبی", time: "25 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Barfi", urdu: "برفی", time: "35 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Halwa", urdu: "حلوہ", time: "20 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Cake", urdu: "کیک", time: "40 min", pressure: "-", ratio: 1, cat: "dessert" },
  { name: "Donuts", urdu: "ڈونٹس", time: "35 min", pressure: "-", ratio: 1, cat: "dessert" },

  // 🍳 BREAKFAST
  { name: "Paratha", urdu: "پراٹھا", time: "15 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Omelette", urdu: "آملیٹ", time: "10 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Boiled Egg", urdu: "اُبلا انڈا", time: "8 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Halwa Puri", urdu: "حلوہ پوری", time: "25 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { name: "Cholay", urdu: "چنے", time: "30 min", pressure: "-", ratio: 1, cat: "breakfast" },
  { "name": "Basmati Rice", "urdu": "باسمتی چاول", "time": "8-10 min", "pressure": "3-4 min", "ratio": 1.8, "cat": "rice" },
  { "name": "Sella Rice", "urdu": "سیلہ چاول", "time": "11-12 min", "pressure": "5-6 min", "ratio": 2.2, "cat": "rice" },
  { "name": "Pulao Rice", "urdu": "پلاؤ چاول", "time": "10 min", "pressure": "4 min", "ratio": 1.75, "cat": "rice" },
  { "name": "Boiled Rice", "urdu": "ابلے چاول", "time": "10 min", "pressure": "3 min", "ratio": 2, "cat": "rice" },
  { "name": "Fried Rice", "urdu": "فرائیڈ رائس", "time": "12 min", "pressure": "-", "ratio": 1.5, "cat": "rice" },

  { "name": "Dal Masoor", "urdu": "مسور دال", "time": "20 min", "pressure": "6-8 min", "ratio": 2, "cat": "dal" },
  { "name": "Dal Moong", "urdu": "مونگ دال", "time": "20 min", "pressure": "5-7 min", "ratio": 2, "cat": "dal" },
  { "name": "Dal Chana", "urdu": "چنا دال", "time": "35 min", "pressure": "8-10 min", "ratio": 3, "cat": "dal" },

  { "name": "Chicken", "urdu": "چکن", "time": "15 min", "pressure": "4-6 min", "ratio": 1, "cat": "meat" },
  { "name": "Mutton", "urdu": "مٹن", "time": "25 min", "pressure": "10-12 min", "ratio": 1, "cat": "meat" },
  { "name": "Beef", "urdu": "گائے کا گوشت", "time": "40 min", "pressure": "30-40 min", "ratio": 1.2, "cat": "meat" },

  { "name": "Chana", "urdu": "چنے", "time": "60 min", "pressure": "12-15 min", "ratio": 3, "cat": "other" },
  { "name": "Lobia", "urdu": "لوبیا", "time": "50 min", "pressure": "18-20 min", "ratio": 3, "cat": "other" },

  { "name": "Potato", "urdu": "آلو", "time": "20 min", "pressure": "5-7 min", "ratio": 1, "cat": "veg" },
  { "name": "Spinach", "urdu": "پالک", "time": "10 min", "pressure": "2-3 min", "ratio": 0.5, "cat": "veg" },

  { "name": "Egg", "urdu": "انڈا", "time": "8 min", "pressure": "3 min", "ratio": 0, "cat": "other" },
  { "name": "Tea", "urdu": "چائے", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "other" },
  { "name": "Milk", "urdu": "دودھ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "other" },
{ "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },
{ "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
{ "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Brownie", "urdu": "چاکلیٹ براونی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Ladoo", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Basmati Rice", "urdu": "باسمتی چاول", "time": "8-10 min", "pressure": "3-4 min", "ratio": 1.8, "cat": "rice" },
{ "name": "Sella Rice", "urdu": "سیلہ چاول", "time": "11-12 min", "pressure": "5-6 min", "ratio": 2.2, "cat": "rice" },
{ "name": "Pulao Rice", "urdu": "پلاؤ چاول", "time": "10 min", "pressure": "4 min", "ratio": 1.75, "cat": "rice" },
{ "name": "Boiled Rice", "urdu": "ابلے چاول", "time": "10 min", "pressure": "3 min", "ratio": 2, "cat": "rice" },
{ "name": "Fried Rice", "urdu": "فرائیڈ رائس", "time": "12 min", "pressure": "-", "ratio": 1.5, "cat": "rice" },

{ "name": "Dal Masoor", "urdu": "مسور دال", "time": "20 min", "pressure": "6-8 min", "ratio": 2, "cat": "dal" },
{ "name": "Dal Moong", "urdu": "مونگ دال", "time": "20 min", "pressure": "5-7 min", "ratio": 2, "cat": "dal" },
{ "name": "Dal Chana", "urdu": "چنا دال", "time": "35 min", "pressure": "8-10 min", "ratio": 3, "cat": "dal" },
{ "name": "Dal Mash", "urdu": "ماش دال", "time": "30 min", "pressure": "10-12 min", "ratio": 2.5, "cat": "dal" },
{ "name": "Mixed Dal", "urdu": "مکس دال", "time": "25 min", "pressure": "8 min", "ratio": 2.5, "cat": "dal" },

{ "name": "Chicken", "urdu": "چکن", "time": "15 min", "pressure": "4-6 min", "ratio": 1, "cat": "meat" },
{ "name": "Chicken Qeema", "urdu": "چکن قیمہ", "time": "10 min", "pressure": "3-5 min", "ratio": 0.5, "cat": "meat" },
{ "name": "Chicken Karahi", "urdu": "چکن کڑاہی", "time": "25 min", "pressure": "8 min", "ratio": 0.8, "cat": "meat" },
{ "name": "Mutton", "urdu": "بکرا گوشت", "time": "25 min", "pressure": "10-12 min", "ratio": 1, "cat": "meat" },
{ "name": "Mutton Karahi", "urdu": "مٹن کڑاہی", "time": "35 min", "pressure": "12 min", "ratio": 0.8, "cat": "meat" },
{ "name": "Beef", "urdu": "گائے کا گوشت", "time": "40 min", "pressure": "30-40 min", "ratio": 1.2, "cat": "meat" },
{ "name": "Beef Nihari", "urdu": "نہاری", "time": "90 min", "pressure": "40 min", "ratio": 2, "cat": "meat" },
{ "name": "Beef Paya", "urdu": "پائے", "time": "120 min", "pressure": "50 min", "ratio": 2, "cat": "meat" },

{ "name": "Chana", "urdu": "چنے", "time": "60 min", "pressure": "12-15 min", "ratio": 3, "cat": "other" },
{ "name": "Lobia", "urdu": "لوبیا", "time": "50 min", "pressure": "18-20 min", "ratio": 3, "cat": "other" },
{ "name": "Rajma", "urdu": "راجما", "time": "55 min", "pressure": "20 min", "ratio": 3, "cat": "other" },
{ "name": "White Chana", "urdu": "سفید چنے", "time": "60 min", "pressure": "15 min", "ratio": 3, "cat": "other" },
{ "name": "Black Chana", "urdu": "کالے چنے", "time": "65 min", "pressure": "15 min", "ratio": 3, "cat": "other" },

{ "name": "Potato", "urdu": "آلو", "time": "20 min", "pressure": "5-7 min", "ratio": 1, "cat": "veg" },
{ "name": "Spinach", "urdu": "پالک", "time": "10 min", "pressure": "2-3 min", "ratio": 0.5, "cat": "veg" },
{ "name": "Brinjal", "urdu": "بینگن", "time": "15 min", "pressure": "5 min", "ratio": 0.7, "cat": "veg" },
{ "name": "Carrot", "urdu": "گاجر", "time": "15 min", "pressure": "6 min", "ratio": 0.7, "cat": "veg" },
{ "name": "Turnip", "urdu": "شلجم", "time": "18 min", "pressure": "8 min", "ratio": 0.8, "cat": "veg" },
{ "name": "Peas", "urdu": "مٹر", "time": "10 min", "pressure": "3 min", "ratio": 0.5, "cat": "veg" },
{ "name": "Cabbage", "urdu": "بند گوبھی", "time": "12 min", "pressure": "4 min", "ratio": 0.5, "cat": "veg" },
{ "name": "Cauliflower", "urdu": "پھول گوبھی", "time": "15 min", "pressure": "5 min", "ratio": 0.6, "cat": "veg" },
{ "name": "Okra", "urdu": "بھنڈی", "time": "12 min", "pressure": "-", "ratio": 0.4, "cat": "veg" },

{ "name": "Egg", "urdu": "انڈا", "time": "8 min", "pressure": "3 min", "ratio": 0, "cat": "other" },
{ "name": "Half Fry Egg", "urdu": "ہاف فرائی", "time": "3 min", "pressure": "-", "ratio": 0, "cat": "other" },

{ "name": "Noodles", "urdu": "نوڈلز", "time": "5 min", "pressure": "-", "ratio": 2, "cat": "other" },
{ "name": "Maggi", "urdu": "میگی", "time": "2 min", "pressure": "-", "ratio": 1.5, "cat": "other" },
{ "name": "Soup Chicken", "urdu": "چکن سوپ", "time": "20 min", "pressure": "6 min", "ratio": 3, "cat": "other" },
{ "name": "Soup Veg", "urdu": "ویج سوپ", "time": "15 min", "pressure": "5 min", "ratio": 3, "cat": "other" },
{ "name": "Dough", "urdu": "آٹا", "time": "-", "pressure": "-", "ratio": 0.5, "cat": "other" },

{ "name": "Paratha", "urdu": "پراٹھا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Aloo Paratha", "urdu": "آلو پراٹھا", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Anda Paratha", "urdu": "انڈا پراٹھا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Methi Paratha", "urdu": "میتھی پراٹھا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Lacha Paratha", "urdu": "لاچھا پراٹھا", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Roti", "urdu": "روٹی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Butter Roti", "urdu": "مکھن روٹی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Puri", "urdu": "پوری", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Chana Puri", "urdu": "چنا پوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Naan", "urdu": "نان", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Sheermal", "urdu": "شیرمال", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Kulcha", "urdu": "کلچہ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Chana Kulcha", "urdu": "چنا کلچہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Tandoori Roti", "urdu": "تندوری روٹی", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Fried Egg", "urdu": "فرائی انڈا", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Boiled Egg", "urdu": "ابلہ انڈا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Omelette", "urdu": "آملیٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Masala Omelette", "urdu": "مسالہ آملیٹ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Cheese Omelette", "urdu": "چیز آملیٹ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "French Toast", "urdu": "فرنچ ٹوسٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Bread Butter", "urdu": "بریڈ مکھن", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Bread Jam", "urdu": "بریڈ جام", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Toast", "urdu": "ٹوسٹ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },
{ "name": "Milk Bread", "urdu": "ملک بریڈ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "breakfast" },

{ "name": "Nihari", "urdu": "نہاری", "time": "60 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Paya", "urdu": "پائے", "time": "90 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Haleem", "urdu": "حلیم", "time": "60 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Keema", "urdu": "قیمہ", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Anda Keema", "urdu": "انڈا قیمہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "main" },

{ "name": "Chana Masala", "urdu": "چنا مسالہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Daal Chana", "urdu": "دال چنا", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Daal Mash", "urdu": "دال ماش", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Daal Fry", "urdu": "دال فرائی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "main" },
{ "name": "Lobia", "urdu": "لوبیا", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "main" },

{ "name": "Suji Halwa", "urdu": "سوجی کا حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Gajar Halwa", "urdu": "گاجر کا حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Besan Halwa", "urdu": "بیسن حلوہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Kheer", "urdu": "کھیر", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Firni", "urdu": "فرنی", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Lassi Sweet", "urdu": "میٹھی لسی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Lassi Salted", "urdu": "نمکین لسی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Milk", "urdu": "دودھ", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Tea", "urdu": "چائے", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Karak Chai", "urdu": "کڑک چائے", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Green Tea", "urdu": "سبز چائے", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Coffee", "urdu": "کافی", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "drink" },
{ "name": "Doodh Patti", "urdu": "دودھ پتی", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "drink" },


{ "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },
{ "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "evening" },
{ "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
{ "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Brownie", "urdu": "چاکلیٹ براونی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "spicy" },
{ "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "tangy" },
{ "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Ladoo", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },

{ "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "sweet" },

{ "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
{ "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "sweet" },

{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "sweet" },
{ "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "sweet" },

{ "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Chocolate Brownie", "urdu": "چاکلیٹ براونی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },

{ "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },

{ "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

{ "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
{ "name": "Lado", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Biryani", "urdu": "بریانی", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dinner" },

  { "name": "Pakoray", "urdu": "پکوڑے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Aloo Pakora", "urdu": "آلو پکوڑا", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Pakora", "urdu": "چکن پکوڑا", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Puri", "urdu": "پوری", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Halwa Puri", "urdu": "حلوہ پوری", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Kachori", "urdu": "کچوری", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Daal Kachori", "urdu": "دال کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Kachori", "urdu": "چکن کچوری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Samosa", "urdu": "سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Aloo Samosa", "urdu": "آلو سموسہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Vegetable Samosa", "urdu": "سبزی سموسہ", "time": "22 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Spring Rolls", "urdu": "اسپرنگ رول", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Spring Rolls", "urdu": "چکن اسپرنگ رول", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Vegetable Rolls", "urdu": "ویجیٹیبل رول", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "French Fries", "urdu": "فرنچ فرائز", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Loaded Fries", "urdu": "لوڈڈ فرائز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Masala Fries", "urdu": "مسالہ فرائز", "time": "18 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Chicken Nuggets", "urdu": "چکن نگٹس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Wings", "urdu": "چکن ونگز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Shami Kabab", "urdu": "شامی کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chapli Kabab", "urdu": "چپلی کباب", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Seekh Kabab", "urdu": "سیخ کباب", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Bun Kabab", "urdu": "بن کباب", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Anda Bun", "urdu": "انڈا بن", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Club Sandwich", "urdu": "کلب سینڈوچ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Sandwich", "urdu": "چکن سینڈوچ", "time": "12 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Vegetable Sandwich", "urdu": "ویجیٹیبل سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "8 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Egg Sandwich", "urdu": "انڈا سینڈوچ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Cake", "urdu": "کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Chocolate Cake", "urdu": "چاکلیٹ کیک", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Vanilla Cake", "urdu": "وینیلا کیک", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Cupcakes", "urdu": "کپ کیکس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Cake Rusk", "urdu": "کیک رسک", "time": "5 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Plain Rusk", "urdu": "سادہ رسک", "time": "3 min", "pressure": "-", "ratio": 1, "cat": "light" },
  { "name": "Biscuits", "urdu": "بسکٹ", "time": "2 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Chocolate Cookies", "urdu": "چاکلیٹ کوکیز", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Donuts", "urdu": "ڈونٹس", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Glazed Donut", "urdu": "گلیزڈ ڈونٹ", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Brownies", "urdu": "براونیز", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Chocolate Brownie", "urdu": "چاکلیٹ براؤنی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Pancakes", "urdu": "پین کیکس", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Waffles", "urdu": "وافلز", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Custard", "urdu": "کسٹرڈ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Fruit Chaat", "urdu": "فروٹ چاٹ", "time": "10 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Chana Chaat", "urdu": "چنا چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Dahi Bhalla", "urdu": "دہی بھلے", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Gol Gappa", "urdu": "گول گپے", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Papri Chaat", "urdu": "پاپڑی چاٹ", "time": "15 min", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Namak Para", "urdu": "نمک پارے", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "salty" },
  { "name": "Mathri", "urdu": "مٹھری", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "salty" },

  { "name": "Suji Halwa", "urdu": "سوجی حلوہ", "time": "20 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Gajar Halwa", "urdu": "گاجر حلوہ", "time": "40 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Jalebi", "urdu": "جلیبی", "time": "25 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Gulab Jamun", "urdu": "گلاب جامن", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },

  { "name": "Barfi", "urdu": "برفی", "time": "35 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Ladoo", "urdu": "لڈو", "time": "30 min", "pressure": "-", "ratio": 1, "cat": "dessert" },
  { "name": "Baingan Bharta", "urdu": "بینگن کا بھرتا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Bhujia", "urdu": "آلو کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Masala", "urdu": "بھنڈی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Fry", "urdu": "کریلا فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Shaljam Bhujia", "urdu": "شلجم کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Gobhi", "urdu": "آلو گوبھی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tori Fry", "urdu": "توری کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Lauki Sabzi", "urdu": "لوکی کی سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mix Vegetable Curry", "urdu": "مکس سبزی سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Aloo", "urdu": "پالک آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Palak Paneer", "urdu": "پالک پنیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Methi Aloo", "urdu": "میتھی آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Matar Aloo", "urdu": "مٹر آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Chana Dal Lauki", "urdu": "چنے کی دال لوکی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Kadoo Sabzi", "urdu": "کدو کی سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Tamatar", "urdu": "آلو ٹماٹر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Fry", "urdu": "بھنڈی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Masala", "urdu": "کریلا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tinda Masala", "urdu": "ٹنڈا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Arvi Fry", "urdu": "اروی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Arvi Masala", "urdu": "اروی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Sabzi", "urdu": "پالک سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Sarson Ka Saag", "urdu": "سرسوں کا ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bathua Saag", "urdu": "بتھوا ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Kaddu Chana", "urdu": "کدو چنا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Chana Masala", "urdu": "چنا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Rajma Curry", "urdu": "راجما سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Daal Tadka", "urdu": "دال تڑکا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Masoor Dal", "urdu": "مسور کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Moong Dal", "urdu": "مونگ کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Chana Dal", "urdu": "چنے کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mix Dal", "urdu": "مکس دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Methi", "urdu": "آلو میتھی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gobhi Masala", "urdu": "گوبھی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gobhi Fry", "urdu": "گوبھی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Capsicum Aloo", "urdu": "شملہ مرچ آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Capsicum Masala", "urdu": "شملہ مرچ مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Baingan Aloo", "urdu": "بینگن آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Baingan Curry", "urdu": "بینگن سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tori Aloo", "urdu": "توری آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Lauki Kofta", "urdu": "لوکی کوفتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Kofta", "urdu": "سبزی کوفتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Paneer Butter Masala", "urdu": "پنیر بٹر مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Shahi Paneer", "urdu": "شاہی پنیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Paneer Bhurji", "urdu": "پنیر بھرجی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Karahi", "urdu": "سبزی کڑاہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Jalfrezi", "urdu": "سبزی جلفریزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Baingan Karahi", "urdu": "آلو بینگن کڑاہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Do Pyaza", "urdu": "بھنڈی دو پیازہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Pyaz", "urdu": "کریلا پیاز", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },






{ "name": "Cucumber Raita", "urdu": "کھیرا رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Onion Raita", "urdu": "پیاز رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Carrot Raita", "urdu": "گاجر رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Beetroot Raita", "urdu": "چقندر رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Tomato Raita", "urdu": "ٹماٹر رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Spinach Raita", "urdu": "پالک رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Radish Raita", "urdu": "مولی رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Capsicum Raita", "urdu": "شملہ مرچ رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Cabbage Raita", "urdu": "بند گوبھی رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Corn Raita", "urdu": "مکئی رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },

{ "name": "Apple Raita", "urdu": "سیب رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Banana Raita", "urdu": "کیلا رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Mango Raita", "urdu": "آم رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Pomegranate Raita", "urdu": "انار رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Grapes Raita", "urdu": "انگور رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Pineapple Raita", "urdu": "انناس رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Strawberry Raita", "urdu": "اسٹرابیری رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Papaya Raita", "urdu": "پپیتا رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Watermelon Raita", "urdu": "تربوز رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },
{ "name": "Dates Raita", "urdu": "کھجور رائتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "raita" },


{ "name": "Rusk", "urdu": "رسک", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Cake Rusk", "urdu": "کیک رسک", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Marie Biscuit", "urdu": "ماری بسکٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Digestive Biscuit", "urdu": "ڈائجسٹو بسکٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Khari", "urdu": "خاری", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Mathri", "urdu": "مٹھری", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Namak Pare", "urdu": "نمک پارے", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Shakar Pare", "urdu": "شکر پارے", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Tea Cake", "urdu": "ٹی کیک", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Fruit Cake", "urdu": "فروٹ کیک", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Muffin", "urdu": "مفن", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Scones", "urdu": "اسکون", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Croissant", "urdu": "کروسان", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Cream Roll", "urdu": "کریم رول", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Chicken Patties", "urdu": "چکن پیٹیز", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Vegetable Patties", "urdu": "ویج پیٹیز", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Finger Sandwich", "urdu": "فنگر سینڈوچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
{ "name": "Samosa", "urdu": "سموسہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },


  { "name": "Rusk", "urdu": "رسک", "time": "-", "pressure": "-", "ratio": 1, "cat": "tea_snack" },
  { "name": "Cake Rusk", "urdu": "کیک رسک", "time": "-", "pressure": "-", "ratio": 1, "cat": "tea_snack" },
  { "name": "Marie Biscuit", "urdu": "ماری بسکٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "tea_snack" },
  { "name": "Digestive Biscuit", "urdu": "ڈائجسٹو بسکٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "tea_snack" },
  { "name": "Butter Cookies", "urdu": "بٹر کوکیز", "time": "-", "pressure": "-", "ratio": 1, "cat": "tea_snack" },
  { "name": "Khari", "urdu": "خاری", "time": "-", "pressure": "-", "ratio": 1, "cat": "bakery" },
  { "name": "Mathri", "urdu": "مٹھری", "time": "-", "pressure": "-", "ratio": 1, "cat": "traditional_snack" },
  { "name": "Namak Pare", "urdu": "نمک پارے", "time": "-", "pressure": "-", "ratio": 1, "cat": "traditional_snack" },
  { "name": "Shakar Pare", "urdu": "شکر پارے", "time": "-", "pressure": "-", "ratio": 1, "cat": "sweet_snack" },
  { "name": "Tea Cake", "urdu": "ٹی کیک", "time": "-", "pressure": "-", "ratio": 1, "cat": "cake" },

  { "name": "Fruit Cake", "urdu": "فروٹ کیک", "time": "-", "pressure": "-", "ratio": 1, "cat": "cake" },
  { "name": "Muffin", "urdu": "مفن", "time": "-", "pressure": "-", "ratio": 1, "cat": "cake" },
  { "name": "Croissant", "urdu": "کروسان", "time": "-", "pressure": "-", "ratio": 1, "cat": "bakery" },
  { "name": "Cream Roll", "urdu": "کریم رول", "time": "-", "pressure": "-", "ratio": 1, "cat": "bakery" },
  { "name": "Cupcake", "urdu": "کپ کیک", "time": "-", "pressure": "-", "ratio": 1, "cat": "cake" },

  { "name": "Vegetable Patties", "urdu": "ویج پیٹیز", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Patties", "urdu": "چکن پیٹیز", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Finger Sandwich", "urdu": "فنگر سینڈوچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Cheese Sandwich", "urdu": "چیز سینڈوچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Egg Sandwich", "urdu": "ایگ سینڈوچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Samosa", "urdu": "سموسہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Chicken Samosa", "urdu": "چکن سموسہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Pakora", "urdu": "پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Bread Pakora", "urdu": "بریڈ پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Shami Kebab", "urdu": "شامی کباب", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Aloo Tikki", "urdu": "آلو ٹکی", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Spring Roll", "urdu": "اسپرنگ رول", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },

  { "name": "Paratha", "urdu": "پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },
  { "name": "Bun Maska", "urdu": "بن مکھن", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },
  { "name": "Masala Toast", "urdu": "مسالہ ٹوسٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },

  { "name": "Nimco", "urdu": "نمکو", "time": "-", "pressure": "-", "ratio": 1, "cat": "snack" },
  { "name": "Roasted Chana", "urdu": "بھنے چنے", "time": "-", "pressure": "-", "ratio": 1, "cat": "healthy" },
  { "name": "Masala Peanuts", "urdu": "مسالہ مونگ پھلی", "time": "-", "pressure": "-", "ratio": 1, "cat": "healthy" },

  { "name": "Naan Khatai", "urdu": "نان ختائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "cookie" },
  { "name": "Jeera Biscuit", "urdu": "زیرہ بسکٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "cookie" },







  { "name": "Mango Pickle", "urdu": "آم کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Lemon Pickle", "urdu": "لیموں کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Green Chili Pickle", "urdu": "ہری مرچ کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Mixed Pickle", "urdu": "مکس اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Garlic Pickle", "urdu": "لہسن کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Carrot Pickle", "urdu": "گاجر کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Cauliflower Pickle", "urdu": "گوبھی کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Cucumber Pickle", "urdu": "کھیرا کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Radish Pickle", "urdu": "مولی کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Green Mango Pickle", "urdu": "کچے آم کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Apple Pickle", "urdu": "سیب کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Peach Pickle", "urdu": "آڑو کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Plum Pickle", "urdu": "آلو بخارا کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Grape Pickle", "urdu": "انگور کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pineapple Pickle", "urdu": "انناس کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Banana Flower Pickle", "urdu": "کیلے کے پھول کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Beetroot Pickle", "urdu": "چقندر کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Okra Pickle", "urdu": "بھنڈی کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Eggplant Pickle", "urdu": "بینگن کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Green Beans Pickle", "urdu": "لوبیا کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Turnip Pickle", "urdu": "شلجم کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Ginger Pickle", "urdu": "ادرک کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Amla Pickle", "urdu": "آملہ کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Ker Pickle", "urdu": "کیر کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Lasora Pickle", "urdu": "لیسوڑے کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Tinda Pickle", "urdu": "ٹنڈے کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Bitter Gourd Pickle", "urdu": "کریلے کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Olive Pickle", "urdu": "زیتون کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Black Olive Pickle", "urdu": "کالے زیتون کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Green Olive Pickle", "urdu": "سبز زیتون کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Dill Cucumber Pickle", "urdu": "سویا کھیرا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Jalapeno", "urdu": "جالاپینو اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Onion", "urdu": "پیاز کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Cabbage", "urdu": "بند گوبھی کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Kimchi", "urdu": "کمچی (کوریائی اچار بند گوبھی)", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Sauerkraut", "urdu": "ساورکراوٹ (کھٹی بند گوبھی)", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Giardiniera", "urdu": "اٹالین سبزیوں کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Cornichons", "urdu": "فرانسیسی چھوٹے اچار کھیرا", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Pickled Beet Sticks", "urdu": "چقندر اسٹکس اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Carrot Sticks", "urdu": "گاجر اسٹکس اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Radish Slices", "urdu": "مولی سلائس اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Garlic Cloves", "urdu": "لہسن کے جوئے اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Spicy Mango Pickle", "urdu": "تیز آم کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Sweet Mango Pickle", "urdu": "میٹھا آم کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Dry Mango Pickle", "urdu": "خشک آم کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Chili Garlic Pickle", "urdu": "مرچ لہسن اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Mustard Oil Pickle Mix", "urdu": "سرسوں کے تیل والا مکس اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Pickled Cherry", "urdu": "چیری کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Pear", "urdu": "ناشپاتی کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Pickled Pineapple Rings", "urdu": "انناس رنگ اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },

{ "name": "Mixed Vegetable Pickle", "urdu": "مخلوط سبزیوں کا اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },
{ "name": "Street Style Pickle", "urdu": "اسٹریٹ اسٹائل اچار", "time": "-", "pressure": "-", "ratio": 1, "cat": "pickle" },




  { "name": "Baingan Bharta", "urdu": "بینگن کا بھرتا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Bhujia", "urdu": "آلو کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Masala", "urdu": "بھنڈی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Fry", "urdu": "کریلا فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Shaljam Bhujia", "urdu": "شلجم کی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Aloo Gobhi", "urdu": "آلو گوبھی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tori Fry", "urdu": "توری فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Lauki Sabzi", "urdu": "لوکی کی سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mix Vegetable Curry", "urdu": "مکس سبزی سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Aloo", "urdu": "پالک آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Palak Paneer", "urdu": "پالک پنیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Methi Aloo", "urdu": "میتھی آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Matar Aloo", "urdu": "مٹر آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Chana Dal Lauki", "urdu": "چنے کی دال لوکی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Kaddu Sabzi", "urdu": "کدو کی سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Aloo Tamatar", "urdu": "آلو ٹماٹر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Fry", "urdu": "بھنڈی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Masala", "urdu": "کریلا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tinda Masala", "urdu": "ٹنڈا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Arvi Fry", "urdu": "اروی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Arvi Masala", "urdu": "اروی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Sabzi", "urdu": "پالک سبزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Sarson Ka Saag", "urdu": "سرسوں کا ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bathua Saag", "urdu": "بتھوا ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Kaddu Chana", "urdu": "کدو چنا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Chana Masala", "urdu": "چنا مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Rajma Curry", "urdu": "راجما سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Daal Tadka", "urdu": "دال تڑکا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Masoor Dal", "urdu": "مسور دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Moong Dal", "urdu": "مونگ دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Chana Dal", "urdu": "چنے کی دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mix Dal", "urdu": "مکس دال", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Methi", "urdu": "آلو میتھی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gobhi Masala", "urdu": "گوبھی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gobhi Fry", "urdu": "گوبھی فرائی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Capsicum Aloo", "urdu": "شملہ مرچ آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Capsicum Masala", "urdu": "شملہ مرچ مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Baingan Aloo", "urdu": "بینگن آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Baingan Curry", "urdu": "بینگن سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tori Aloo", "urdu": "توری آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Lauki Kofta", "urdu": "لوکی کوفتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Kofta", "urdu": "سبزی کوفتہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Paneer Butter Masala", "urdu": "پنیر بٹر مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Shahi Paneer", "urdu": "شاہی پنیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Paneer Bhurji", "urdu": "پنیر بھرجی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Vegetable Karahi", "urdu": "سبزی کڑاہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Jalfrezi", "urdu": "سبزی جلفریزی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Baingan Karahi", "urdu": "آلو بینگن کڑاہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Bhindi Do Pyaza", "urdu": "بھنڈی دو پیازہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Karela Pyaz", "urdu": "کریلا پیاز", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Tinda Aloo", "urdu": "ٹنڈا آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Gawar Phali", "urdu": "گوار پھلی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Sem Phali", "urdu": "سیم پھلی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mixed Saag", "urdu": "مکس ساگ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Spinach Corn", "urdu": "پالک مکئی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Corn Masala", "urdu": "مکئی مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Aloo Corn", "urdu": "آلو مکئی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Pulao", "urdu": "سبزی پلاؤ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Biryani", "urdu": "سبزی بریانی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Khichdi", "urdu": "کھچڑی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Masala Khichdi", "urdu": "مصالحہ کھچڑی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Fried Rice", "urdu": "سبزی فرائیڈ رائس", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Soup", "urdu": "سبزی سوپ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Tomato Soup", "urdu": "ٹماٹر سوپ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Palak Soup", "urdu": "پالک سوپ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Pumpkin Soup", "urdu": "کدو سوپ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Carrot Peas", "urdu": "گاجر مٹر", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Beans Masala", "urdu": "بینز مصالحہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Beans Aloo", "urdu": "بینز آلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Turnip Curry", "urdu": "شلجم سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Radish Bhujia", "urdu": "مولی بھجیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Lobia Curry", "urdu": "لوبیا سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Black Chana Curry", "urdu": "کالا چنا سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "White Beans Curry", "urdu": "سفید لوبیا سالن", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Handi", "urdu": "سبزی ہانڈی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Vegetable Qorma", "urdu": "سبزی قورمہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Stuffed Karela", "urdu": "بھرا ہوا کریلا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Stuffed Bhindi", "urdu": "بھری بھنڈی", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Stuffed Capsicum", "urdu": "بھری شملہ مرچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Vegetable Cutlets", "urdu": "سبزی کٹلٹس", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },

  { "name": "Vegetable Pakora", "urdu": "سبزی پکوڑے", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Onion Pakora", "urdu": "پیاز پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Spinach Pakora", "urdu": "پالک پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Potato Pakora", "urdu": "آلو پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },
  { "name": "Mixed Pakora", "urdu": "مکس پکوڑا", "time": "-", "pressure": "-", "ratio": 1, "cat": "vegetable" },


{ "name": "Chapati", "urdu": "چپاتی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Tandoori Roti", "urdu": "تندوری روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Khamiri Roti", "urdu": "خمیری روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Makki Roti", "urdu": "مکئی روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Bajra Roti", "urdu": "باجرہ روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Missi Roti", "urdu": "مسی روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Besan Roti", "urdu": "بیسن روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Patiri Roti", "urdu": "پٹیری روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Roomali Roti", "urdu": "رومالی روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Sheermal", "urdu": "شیرمال", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },

{ "name": "Taftan", "urdu": "تافتان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Plain Naan", "urdu": "سادہ نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Butter Naan", "urdu": "بٹر نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Garlic Naan", "urdu": "لہسن نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Roghni Naan", "urdu": "روغنی نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Kulcha", "urdu": "کلچہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Qeema Naan", "urdu": "قیمہ نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Chicken Naan", "urdu": "چکن نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Cheese Naan", "urdu": "چیز نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Aloo Naan", "urdu": "آلو نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },

{ "name": "Plain Paratha", "urdu": "سادہ پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Aloo Paratha", "urdu": "آلو پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Gobi Paratha", "urdu": "گوبھی پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Mooli Paratha", "urdu": "مولی پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Keema Paratha", "urdu": "قیمہ پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Anda Paratha", "urdu": "انڈا پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Lacha Paratha", "urdu": "لاچھا پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Methi Paratha", "urdu": "میتھی پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Palak Paratha", "urdu": "پالک پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },
{ "name": "Malai Paratha", "urdu": "ملائی پراٹھا", "time": "-", "pressure": "-", "ratio": 1, "cat": "paratha" },

{ "name": "Puri", "urdu": "پوری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fried_bread" },
{ "name": "Bhatura", "urdu": "بھٹورا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fried_bread" },
{ "name": "Luchi", "urdu": "لوچی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fried_bread" },
{ "name": "Bakarkhani", "urdu": "باقرخانی", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },
{ "name": "Afghani Naan", "urdu": "افغانی نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Peshawari Naan", "urdu": "پشاوری نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Dry Fruit Naan", "urdu": "خشک میوہ نان", "time": "-", "pressure": "-", "ratio": 1, "cat": "naan" },
{ "name": "Butter Chapati", "urdu": "مکھن چپاتی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Sweet Roti", "urdu": "میٹھی روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Jowar Roti", "urdu": "جواری روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },

{ "name": "Rice Flour Roti", "urdu": "چاول آٹے کی روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Garlic Butter Roti", "urdu": "گارلک بٹر روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Masala Roti", "urdu": "مسالہ روٹی", "time": "-", "pressure": "-", "ratio": 1, "cat": "roti" },
{ "name": "Tortilla", "urdu": "ٹورٹیلا", "time": "-", "pressure": "-", "ratio": 1, "cat": "flatbread" },
{ "name": "Pita Bread", "urdu": "پیٹا بریڈ", "time": "-", "pressure": "-", "ratio": 1, "cat": "flatbread" },
{ "name": "Lavash", "urdu": "لاواش", "time": "-", "pressure": "-", "ratio": 1, "cat": "flatbread" },
{ "name": "Focaccia", "urdu": "فوکاچیا", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },
{ "name": "Garlic Bread", "urdu": "گارلک بریڈ", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },
{ "name": "Milk Bread", "urdu": "ملک بریڈ", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },
{ "name": "Brown Bread", "urdu": "براؤن بریڈ", "time": "-", "pressure": "-", "ratio": 1, "cat": "bread" },


{ "name": "Apple", "urdu": "سیب", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Banana", "urdu": "کیلا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Mango", "urdu": "آم", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Orange", "urdu": "مالٹا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Grapes", "urdu": "انگور", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Strawberry", "urdu": "اسٹرابیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Watermelon", "urdu": "تربوز", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Melon", "urdu": "خربوزہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Pineapple", "urdu": "انناس", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Pomegranate", "urdu": "انار", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Guava", "urdu": "امرود", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Papaya", "urdu": "پپیتا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Peach", "urdu": "آڑو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Plum", "urdu": "آلو بخارا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Cherry", "urdu": "چیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Kiwi", "urdu": "کیوی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Lemon", "urdu": "لیموں", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Lime", "urdu": "نیمبو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Apricot", "urdu": "خوبانی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Fig", "urdu": "انجیر", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Date", "urdu": "کھجور", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Coconut", "urdu": "ناریل", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Avocado", "urdu": "ایووکاڈو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Blueberry", "urdu": "بلو بیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Blackberry", "urdu": "بلیک بیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Raspberry", "urdu": "رسبیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Cranberry", "urdu": "کرین بیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Dragon fruit", "urdu": "ڈریگن فروٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Passion fruit", "urdu": "پیشن فروٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Jackfruit", "urdu": "کٹہل", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Lychee", "urdu": "لیچی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Persimmon", "urdu": "جاپانی پھل", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Star fruit", "urdu": "کرمبولا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Mulberry", "urdu": "شہتوت", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Soursop", "urdu": "گریویولا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Custard apple", "urdu": "شریفا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Gooseberry", "urdu": "آملہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Tamarind", "urdu": "املی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Grapefruit", "urdu": "چکوترا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Muskmelon", "urdu": "سردا خربوزہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Honeydew melon", "urdu": "ہنی ڈیو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Sapodilla", "urdu": "چیکو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Longan", "urdu": "لانگان", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Rambutan", "urdu": "ریمبوٹان", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Durian", "urdu": "ڈوریان", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Pomelo", "urdu": "پومیلو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Quince", "urdu": "بہی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Breadfruit", "urdu": "بریڈ فروٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Cactus pear", "urdu": "انجیر ہندی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Loquat", "urdu": "لوکاٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Noni", "urdu": "نونی", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Olive", "urdu": "زیتون", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Tomato", "urdu": "ٹماٹر", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Cucumber", "urdu": "کھیرا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Pumpkin", "urdu": "کدو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Bitter melon", "urdu": "کریلا", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Bell pepper", "urdu": "شملہ مرچ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Bael", "urdu": "بیل", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Rose apple", "urdu": "جامرول", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Mangosteen", "urdu": "مینگوسٹین", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Feijoa", "urdu": "فیجوآ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Yuzu", "urdu": "یوزو", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Karonda", "urdu": "کروندہ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Blackcurrant", "urdu": "بلیک کرنٹ", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" },
{ "name": "Açaí", "urdu": "آسائی بیری", "time": "-", "pressure": "-", "ratio": 1, "cat": "fruit" }




  ];

  const list = document.getElementById("list");

  // 🧾 RENDER FUNCTION
  function show() {
    if (!list) return;

    list.innerHTML = "";

    const search = document.getElementById("search");
    const filter = document.getElementById("filter");

    let s = search ? search.value.toLowerCase() : "";
    let f = filter ? filter.value : "all";

    data.forEach(i => {

      let name = urdu ? i.urdu : i.name;

      if (
        name.toLowerCase().includes(s) &&
        (f === "all" || i.cat === f)
      ) {
        list.innerHTML += `
          <div class="card">
            <h3>${name}</h3>
            ⏱ ${urdu ? "وقت" : "Time"}: ${i.time}<br>
            ⚡ ${urdu ? "پریشر" : "Pressure"}: ${i.pressure}<br>
            💧 Ratio: ${i.ratio}
          </div>
        `;
      }
    });
  }

  // 📡 LIVE SEARCH
  const searchInput = document.getElementById("search");
  const filterInput = document.getElementById("filter");

  if (searchInput) searchInput.addEventListener("input", show);
  if (filterInput) filterInput.addEventListener("change", show);

  // ▶ first render
  show();

});







const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.style.left = "0";
});

function closeMenu() {
  sideMenu.style.left = "-260px";
}

















// const list = document.getElementById("list");

// function show() {
//   list.innerHTML = "";

//   let s = document.getElementById("search").value.toLowerCase();
//   let f = document.getElementById("filter").value;

//   data.forEach(i => {
//     let name = urdu ? i.urdu : i.name;

//     if (name.toLowerCase().includes(s) && (f === "all" || i.cat === f)) {
//       list.innerHTML += `
//         <div class="card">
//           <h3>${name}</h3>
//           ⏱ ${urdu ? "وقت" : "Time"}: ${i.time}<br>
//           ⚡ ${urdu ? "پریشر" : "Pressure"}: ${i.pressure}<br>
//           💧 Ratio: ${i.ratio}
//         </div>
//       `;
//     }
//   });
// }

// function calc() {
//   let t = document.getElementById("item").value;
//   let a = document.getElementById("amount").value;

//   if (!a) return;

//   let r = 1;
//   if (t === "rice") r = 1.8;
//   if (t === "dal") r = 2;
//   if (t === "meat") r = 1;
//   if (t === "chana") r = 3;
//   if (t === "dough") r = 0.5;

//   let res = a * r;

//   document.getElementById("result").innerHTML =
//     (urdu ? "پانی: " : "Water: ") + res.toFixed(2);
// }

// function toggleLang() {
//   urdu = !urdu;

//   document.getElementById("title").innerText =
//     urdu ? "🍳 کچن ماسٹر" : "🍳 Kitchen Master";

//   document.getElementById("calcTitle").innerText =
//     urdu ? "🧮 پانی کیلکولیٹر" : "🧮 Water Calculator";

//   show();
// }

// window.onload = function () {
//   document.getElementById("search").addEventListener("input", show);
//   document.getElementById("filter").addEventListener("change", show);
//   show();
// };
