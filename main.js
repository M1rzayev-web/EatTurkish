const section2List = [
  {
    id: 1,
    img: "./images/rasm1-2.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "shashlik",
  },
  {
    id: 2,
    img: "./images/pitsa.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "pitsa",
  },
  {
    id: 3,
    img: "./images/burger.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "burger",
  },
  {
    id: 4,
    img: "./images/freeK.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "freecombo",
  },
];

const maxsulot = document.querySelector(".maxsulot");

window.addEventListener("DOMContentLoaded", function () {
  let displeySection2 = section2List.map(function (item) {
    return `<article class="popular">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>

              </article>`;
  });
  displeySection2 = displeySection2.join("");
  maxsulot.innerHTML = displeySection2;
});

const section3List = [
  {
    id: 1,
    img: "./images/shashlik.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "shashlik",
  },
  {
    id: 2,
    img: "./images/freeK.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "freecombo",
  },
  {
    id: 3,
    img: "./images/lavash.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "lavash",
  },
  {
    id: 4,
    img: "./images/freeK-2.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "freecombo",
  },
  {
    id: 5,
    img: "./images/pitsa.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "pitsa",
  },
  {
    id: 6,
    img: "./images/senvich.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "senvich",
  },
  {
    id: 7,
    img: "./images/burger-non.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "burger",
  },
  {
    id: 8,
    img: "./images/burger.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "burger",
  },
  {
    id: 9,
    img: "./images/burger-2.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "burger",
  },
  {
    id: 10,
    img: "./images/shashlik-2.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "shashlik",
  },
  {
    id: 11,
    img: "./images/freeK.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "freecombo",
  },
  {
    id: 12,
    img: "./images/freeK-2.png",
    name: "Barbecue Shish kebab Shashlik Skewer",
    price: 12.0,
    category: "freecombo",
  },
];

const maxsulotlar = document.querySelector(".maxsulotlar");

window.addEventListener("DOMContentLoaded", function () {
  let displeySection3 = section3List.map(function (item) {
    return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button onclick="korzinkaPush()" class="btnAdd">+</button>
              </article>`;
  });
  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

// korzinka push

// const maxsulotlar = document.querySelector(".maxsulotlar");
const korzinka__item = document.querySelector(".korzinka__item");
const korzinkaArry = [];

// Maxsulotlar sahifaga chiqariladi
function chiqarMaxsulotlar(maxsulotlarList) {
  let displeySection3 = maxsulotlarList.map(function (item) {
    return `<article class="menu">
      <img src="${item.img}" alt="images">
      <p>${item.name}</p>
      <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
      <h4>$${item.price}</h4>
      <button onclick="korzinkaQosh(${item.id})" class="btnAdd">+</button>
    </article>`;
  });
  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
}

// Maxsulotlar sahifaga chiqariladi
window.addEventListener("DOMContentLoaded", function () {
  chiqarMaxsulotlar(section3List);
});

// Maxsulotni korzinkaga qo'shish
function korzinkaQosh(id) {
  const maxsulot = section3List.find((item) => item.id === id);
  korzinkaArry.push(maxsulot);
  chiqarKorzinka();
}

// Korzinkani sahifaga chiqarish
function chiqarKorzinka() {
  let korzinkaItems = "";
  korzinkaArry.forEach(function (item) {
    korzinkaItems += `<article class="menu">
      <img src="${item.img}" alt="images">
      <p>${item.name}</p>
      <span><i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      </span>
      <h4>$${item.price}</h4>
    </article>`;
  });
  korzinka__item.innerHTML = korzinkaItems;
}

// input orqali izlash

const input = document.getElementById("qiymat");

const search = document.getElementById("search");

search.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (input.value === item.category) {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });
  displeySection3 = displeySection3.join("");

  maxsulotlar.innerHTML = displeySection3;
});

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");

btn1.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
  });
  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn2.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "lavash") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn3.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "shashlik") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn4.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "burger") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn5.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "shashlik") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn6.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "shashlik") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn7.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "pitsa") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

btn8.addEventListener("click", function () {
  let displeySection3 = section3List.map(function (item) {
    if (item.category === "freecombo") {
      return `<article class="menu">
                <img src="${item.img}" alt="images">
                <p>${item.name}</p>
                <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                <h4>$${item.price}</h4>
                <button class="btnAdd">+</button>
              </article>`;
    }
  });

  displeySection3 = displeySection3.join("");
  maxsulotlar.innerHTML = displeySection3;
});

// korzinka ochish joyi

const btnKorzinka = document.getElementById("btnKorzinka");
const korzinka = document.querySelector(".korzinka");
const korzinkaItem = [];
const closeKor = document.getElementById("closeKor");
function addclass() {
  korzinka.classList.toggle("modalkorzinka");
}
function noneKor() {
  korzinka.style.display = "none";
}

// reklama uchun
const ad = document.getElementById("ad");
const closeAdBtn = document.getElementById("close-ad");

// reklama divini paydo qilish
setTimeout(function () {
  ad.style.display = "block";
}, 5000);

// reklama divini yashirish funksiyasi
function hideAd() {
  ad.style.display = "none";
}

// reklamani yopuvchi tugma
closeAdBtn.addEventListener("click", hideAd);
setInterval(function () {
  ad.style.display = "none";
}, 20000);
