// const btn = document.getElementById("menu-btn");
// const nav = document.getElementById("menu");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("open");
//   nav.classList.toggle("flex");
//   nav.classList.toggle("hidden");
// });
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 1500); // 5000ms = 5 seconds
});




card_content = {
  0: {
    heading: "Private Jet Charter",
    para: "Trade crowded airports and wasted time for the ease, comfort, and convenience of travel by private jet.",
  },
  1: {
    heading: "Business Jet Charter",
    para: "Trade crowded airports and wasted time for the ease, comfort, and convenience of travel by private jet.",
  },
  2: {
    heading: "Private Helicopter",
    para: "Trade crowded airports and wasted time for the ease, comfort, and convenience of travel by private jet.",
  },
  3: {
    heading: "Air Ambulance",
    para: "Trade crowded airports and wasted time for the ease, comfort, and convenience of travel by private jet.",
  },
};

bg_images = [
  "url('assets/aircraft(1).jpeg')",
  "url('assets/aircraft(2).jpeg')",
  "url('assets/aircraft(3).jpeg')",
  "url('assets/aircraft(4).jpeg')",
];

let list_items = document.querySelectorAll(".list-item");
let firstCard = document.querySelector("#first-card");

let arrow = "<i class='bx bx-left-arrow-alt text-golden'></i> ";

document.addEventListener("DOMContentLoaded", function () {
  list_items.forEach(function (item, index) {
    item.addEventListener("click", function () {
      // Removing arrow from all the list items
      list_items.forEach(function (item) {
        item.innerHTML = item.textContent.trim();
      });

      // Adding arrow to the clicked item
      item.innerHTML = arrow + item.innerHTML;
      firstCard.style.backgroundImage = bg_images[index];
      firstCard.style.backgroundSize = "cover";
      firstCard.style.backgroundPosition = "center center";

      document.querySelector("#heading").textContent =
        card_content[index].heading;
      document.querySelector("#para").textContent = card_content[index].para;
      // console.log(index, "list item clicked");
    });
  });
});

// setTimeout(function () {
//   odometer.innerHTML = 456;
// }, 1000);

let valuseDisplays = document.querySelectorAll(".num");
const interval = 5000;

valuseDisplays.forEach((valuseDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valuseDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valuseDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
