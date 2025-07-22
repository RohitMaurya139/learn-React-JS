// 🔍 Select DOM elements for both baskets and arrow buttons
const firstBasket = document.querySelector(".basket-1 span"); // Basket on the left
const secondBasket = document.querySelector(".basket-2 span"); // Basket on the right
const leftArrow = document.querySelector(".left-arrow"); // ⬅️ Arrow button to move apples left
const rightArrow = document.querySelector(".right-arrow"); // ➡️ Arrow button to move apples right

// 🍎 Initialize total apples and their distribution between baskets
const totalApple = 100;
let appleInSecondBasket = 0;
let appleInFirstBasket = totalApple - appleInSecondBasket;

// 🔄 Initialize basket counts in the UI
firstBasket.innerText = appleInFirstBasket;
secondBasket.innerText = appleInSecondBasket;

// ➡️ Move apple from First Basket → Second Basket when right arrow is clicked
rightArrow.addEventListener("click", () => {
  if (appleInFirstBasket > 0) {
    appleInFirstBasket--; // Decrease from first basket
    appleInSecondBasket++; // Increase in second basket
    firstBasket.innerText = appleInFirstBasket; // Update first basket UI
    secondBasket.innerText = appleInSecondBasket; // Update second basket UI
  }
});

// ⬅️ Move apple from Second Basket → First Basket when left arrow is clicked
leftArrow.addEventListener("click", () => {
  if (appleInSecondBasket > 0) {
    appleInFirstBasket++; // Increase in first basket
    appleInSecondBasket--; // Decrease from second basket
    firstBasket.innerText = appleInFirstBasket; // Update first basket UI
    secondBasket.innerText = appleInSecondBasket; // Update second basket UI
  }
});
