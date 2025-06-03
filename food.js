//home page product Api
import image1 from "./assets/food-items/image1.avif";
import image2 from "./assets/food-items/image2.avif";
import image3 from "./assets/food-items/image3.avif";
import image4 from "./assets/food-items/image4.avif";
import image5 from "./assets/food-items/image5.avif";
import image6 from "./assets/food-items/image6.webp";
import image7 from "./assets/food-items/image7.webp";
import image8 from "./assets/food-items/image8.webp";
import image9 from "./assets/food-items/image9.webp";
import image10 from "./assets/food-items/image10.avif";
import image11 from "./assets/food-items/image11.avif";
import image12 from "./assets/food-items/image12.avif";
import image13 from "./assets/food-items/image13.webp";
import image14 from "./assets/food-items/image14.webp";
import image15 from "./assets/food-items/image15.avif";
import image16 from "./assets/food-items/image16.webp";
import image17 from "./assets/food-items/image17.avif";
import image18 from "./assets/food-items/image18.webp";
import image19 from "./assets/food-items/image19.webp";
import image20 from "./assets/food-items/image20.webp";
import image21 from "./assets/food-items/image21.webp";
import image22 from "./assets/food-items/image22.webp";
import image23 from "./assets/food-items/image23.webp";
import image24 from "./assets/food-items/image24.webp";
import image25 from "./assets/food-items/image25.webp";
import image26 from "./assets/food-items/image26.webp";
import image27 from "./assets/food-items/image27.webp";
import image28 from "./assets/food-items/image28.webp";
import image29 from "./assets/food-items/oil1.webp";
import image30 from "./assets/food-items/oil2.webp";
import image31 from "./assets/food-items/oil3.webp";
import image32 from "./assets/food-items/oil4.webp";
import image33 from "./assets/food-items/oil5.webp";
import image34 from "./assets/food-items/oil6.webp";
import image35 from "./assets/food-items/oil7.webp";
import image36 from "./assets/food-items/oil8.webp";
import image37 from "./assets/food-items/oil9.webp";
import image38 from "./assets/food-items/oil10.webp";
import image39 from "./assets/food-items/oil11.webp";
import image40 from "./assets/food-items/oil12.webp";
import image41 from "./assets/food-items/oil13.webp";
import image42 from "./assets/food-items/oil14.webp";





//catagory image API
import imageA from "./assets/catagory/image1.avif";
import imageB from "./assets/catagory/image2.avif";
import imageC from "./assets/catagory/image3.avif";
import imageD from "./assets/catagory/image4.avif";
import imageE from "./assets/catagory/image5.avif";
import imageF from "./assets/catagory/image6.avif";
import imageG from "./assets/catagory/image7.avif";
import imageH from "./assets/catagory/image8.avif";
import imageI from "./assets/catagory/image9.avif";
import imageJ from "./assets/catagory/image10.avif";
import imageK from "./assets/catagory/image11.avif";
import imageL from "./assets/catagory/image12.avif";
import imageM from "./assets/catagory/all.webp";



//catagory items
export const catagory_items = [
    
    {"id": 1, "food_name": "All Items","food_image": imageM,"name": "All"},
    {"id": 2, "food_name": "Fresh Vegetables","food_image": imageL,"name": "Vegetables"},
    {"id": 3, "food_name": "Fresh Fruits ","food_image": imageG,"name": "Fruits"},
    {"id": 4, "food_name": "Dairy,Bread and Eggs ","food_image": imageE,"name": "Bread"},
    {"id": 5, "food_name": "Oil and Ghee ","food_image": imageJ,"name": "Oil"},
    {"id": 6, "food_name": "Masalas ","food_image": imageH,"name": "Masalas"},
    {"id": 7, "food_name": "Cereals and Breakfast ","food_image": imageD,"name": "Breakfast"},
    {"id": 8, "food_name": "Atta,Rice and Dal ","food_image": imageA,"name": "Atta"},
    {"id": 9, "food_name": "Bakery ","food_image": imageB,"name": "Bakery"},
    {"id": 10, "food_name": "Biscuits and Cakes ","food_image": imageC,"name": "Biscuits"},
    {"id": 11, "food_name": "Tea,Coffee and More ","food_image": imageK,"name": "Tea,Coffee"},
    {"id": 12, "food_name": "Dry Fruits and Seeds Mix ","food_image": imageF,"name": "DryFruits"},
    // {"id": 13, "food_name": "Meat and Seafoods ","food_image": imageI,"name": "Meat"}

];



// home page food items
export const food_items = [
    {"id": 1, "food_name": "Pragati Curd (dahi)", "food_category": "Bread", "food_quantity": "500gm", "food_image": image1, "price": 30},
    {"id": 2, "food_name": "Omfed Curd(dahi)", "food_category": "Bread", "food_quantity": "500gm", "food_image": image2, "price": 35},
    {"id": 3, "food_name": "Milkmaid", "food_category": "Bread", "food_quantity": "250gm", "food_image": image3, "price": 70},
    {"id": 4, "food_name": "Amul Gold Milk", "food_category": "Bread", "food_quantity": "250gm", "food_image": image4, "price": 50},
    {"id": 5, "food_name": "Egg (30pic)", "food_category": "Bread", "food_quantity": "30pic", "food_image": image5, "price": 180},
    {"id": 6, "food_name": "Brinjal", "food_category": "Vegetables", "food_quantity": "1kg", "food_image": image6, "price": 60},
    {"id": 7, "food_name": "Cabbage", "food_category": "Vegetables", "food_quantity": "500gm", "food_image": image7, "price": 45},
    {"id": 8, "food_name": "Cauliflower", "food_category": "Vegetables", "food_quantity": "500gm", "food_image": image8, "price": 60},
    {"id": 9, "food_name": "Green Cucumber", "food_category": "Vegetables", "food_quantity": "250gm", "food_image": image9, "price": 20},
    {"id": 10, "food_name": "Amul Butter", "food_category": "Bread", "food_quantity": "100gm", "food_image": image10, "price": 30},
    {"id": 11, "food_name": "Omfed Milk", "food_category": "Bread", "food_quantity": "500gm", "food_image": image11, "price": 28},
    {"id": 12, "food_name": "Milky Moo", "food_category": "Bread", "food_quantity": "500gm", "food_image": image12, "price": 29},
    {"id": 13, "food_name": "Onion", "food_category": "Vegetables", "food_quantity": "500gm", "food_image": image13, "price": 20},
    {"id": 14, "food_name": "Potato", "food_category": "Vegetables", "food_quantity": "1kg", "food_image": image14, "price": 30},
    {"id": 15, "food_name": "Amulspray", "food_category": "Bread", "food_quantity": "25gm", "food_image": image15, "price": 10},
    {"id": 16, "food_name": "Indian Tomato", "food_category": "Vegetables", "food_quantity": "250gm", "food_image": image16, "price": 15},
    {"id": 17, "food_name": "Brown Bread", "food_category": "Bread", "food_quantity": "1pc", "food_image": image17, "price": 30},
    {"id": 18, "food_name": "Lemon", "food_category": "Fruits", "food_quantity": "500gm", "food_image": image18, "price": 60},
    {"id": 19, "food_name": "Pineapple", "food_category": "Fruits", "food_quantity": "1pic (300gm)", "food_image": image19, "price": 80},
    {"id": 20, "food_name": "Pomegranate (Dalimba)", "food_category": "Fruits", "food_quantity": "500gm", "food_image": image20, "price": 80},
    {"id": 21, "food_name": "Watermeleon", "food_category": "Fruits", "food_quantity": "1pic (1.2kg)", "food_image": image21, "price": 60},
    {"id": 22, "food_name": "Mango", "food_category": "Fruits", "food_quantity": "1kg", "food_image": image22, "price": 100},
    {"id": 23, "food_name": "Banana", "food_category": "Fruits", "food_quantity": "12pic", "food_image": image23, "price": 55},
    {"id": 24, "food_name": "Dragon Fruit", "food_category": "Fruits", "food_quantity": "1pic (350gm)", "food_image": image24, "price": 60},
    {"id": 25, "food_name": "Grepes", "food_category": "Fruits", "food_quantity": "250gm", "food_image": image25, "price": 40},
    {"id": 26, "food_name": "Green Banana", "food_category": "Vegetables", "food_quantity": "250gm", "food_image": image26, "price": 35},
    {"id": 27, "food_name": "Bottle Gourd", "food_category": "Vegetables", "food_quantity": "250gm", "food_image": image27, "price": 25},
    {"id": 28, "food_name": "Lady Finger", "food_category": "Vegetables", "food_quantity": "250gm", "food_image": image28, "price": 27},


    {"id": 29, "food_name": "Freedom-Kachi-Ghani-Mustard-Oil-Bottle", "food_category": "Oil", "food_quantity": "1Ltr", "food_image": image29, "price": 150},
    {"id": 30, "food_name": "Freedom-Refined-Sunflower-Oil", "food_category": "Oil", "food_quantity": "1Ltr", "food_image": image30, "price": 140},
    {"id": 31, "food_name": "Fortune-Xpert-Edible-Oil", "food_category": "Oil", "food_quantity": "1Ltr", "food_image": image31, "price": 145},
    {"id": 32, "food_name": "Fortune-Conscious", "food_category": "Oil", "food_quantity": "2.5Ltr", "food_image": image32, "price": 350},
    {"id": 33, "food_name": "Saffola-Edible-Oil-Jar", "food_category": "Oil", "food_quantity": "2.5Ltr", "food_image": image33, "price": 450},
    {"id": 34, "food_name": "Parachute-Pure-Coconut-Oil", "food_category": "Oil", "food_quantity": "250gm", "food_image": image34, "price": 99},
    {"id": 35, "food_name": "Parachute-Coconut-Oil-Jar", "food_category": "Oil", "food_quantity": "500gm", "food_image": image35, "price": 199},
    {"id": 36, "food_name": "Parachute-Jasmine-Coconut-Hair-Oil", "food_category": "Oil", "food_quantity": "150gm", "food_image": image36, "price": 60},
    {"id": 37, "food_name": "Bilona-Desi-Cow-Ghee-Glass-Jar", "food_category": "Oil", "food_quantity": "250gm", "food_image": image37, "price": 300},
    {"id": 38, "food_name": "Barosi-Desi-Cow-Ghee", "food_category": "Oil", "food_quantity": "250gm", "food_image": image38, "price": 299},
    {"id": 39, "food_name": "Jivika-Buffalo-Ghee(1)", "food_category": "Oil", "food_quantity": "250gm", "food_image": image39, "price": 200},
    {"id": 40, "food_name": "Patanjali-Coconut-Oil-Jar", "food_category": "Oil", "food_quantity": "250gm", "food_image": image40, "price": 99},
    {"id": 41, "food_name": "Jivika-Buffalo-Ghee(2)", "food_category": "Oil", "food_quantity": "250gm", "food_image": image41, "price": 199},
    {"id": 42, "food_name": "Freedom-Refined-Sunflower-Oil-Bottle", "food_category": "Oil", "food_quantity": "1Ltr", "food_image": image42, "price": 149},

];

