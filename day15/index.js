console.log("index.js를 읽어왔습니다");

// getElementById id로 요소 찾기
const titleEl = document.getElementById("title");
console.log(titleEl);
console.log(titleEl.textContent);
console.log(document.getElementById("logo")); // 없으면 null

// querySelector CSS 선택자로 첫 번째 하나 찾기
const titleQ = document.querySelector("#title");
console.log(titleQ);
console.log(titleQ.textContent);
const descQ = document.querySelector(".desc");
console.log(descQ);
const newQ = document.querySelector(".new");
console.log(newQ);

// querySelectorAll 맞는 요소 모두 찾기
const menuEls = document.querySelectorAll(".menu li");
console.log(menuEls);
const newEls = document.querySelectorAll(".new");
console.log(newEls);

// textContent 글자
const statusEl = document.querySelector(".status");
console.log(statusEl.textContent);
statusEl.textContent = "영업 중";
console.log(statusEl.textContent);

// innerHTML HTML
const message = "<strong>소금빵</strong>이 나왔습니다";
document.querySelector("#text-msg").textContent = message;
document.querySelector("#html-msg").innerHTML = message;

// style CSS속성을 하나씩 바꾸기
const titleStyleEl = document.querySelector("#title");
titleStyleEl.style.color = "#ffffff";
titleStyleEl.style.backgroundColor = "blue";
titleStyleEl.style.padding = "8px 16px";

// classList 미리 만든 class 붙이기 때기
const statusEl2 = document.querySelector(".status");
statusEl2.classList.add("open");
console.log(statusEl2.classList.contains("open")); // 포함하고 있나?
console.log(statusEl2.classList.toggle("open")); // 있으면 삭제, 없으면 추가
console.log(statusEl2.classList.toggle("open"));

// getAttribute, setAttribute 속성 읽기, 속성 수정
const signEl = document.querySelector("#sign");
console.log(signEl.getAttribute("src"));
signEl.setAttribute("src", "open.svg");
signEl.setAttribute("alt", "영업 중");
console.log(signEl.getAttribute("src"));

// createElement, appendChild 요소 생성, 자식으로 붙이기
const menuEl = document.querySelector(".menu");
console.log(document.querySelectorAll(".menu li").length);

const newEl = document.createElement("li"); // 1. 만들기
newEl.textContent = "단팥빵"; // 2. 채우기
console.log(newEl);
menuEl.appendChild(newEl); // 3. 붙이기

console.log(document.querySelectorAll(".menu li").length);

// JS로 화면 채우기
const breads = ["소금빵", "크루아상", "바게뜨", "단팥빵"];
const breadListEl = document.querySelector(".bread-list");

breads.forEach((b) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = b;
  breadListEl.appendChild(itemEl);
});

// const product = {
//   id: 1,
//   name: "에코백",
//   price: 12000,
//   stock: 5,
// };
// const listEl = document.querySelector("#card-list");

// const cardEl = document.createElement("article");
// cardEl.classList.add("card");
// const nameEl = document.createElement("h3");
// nameEl.textContent = product.name;
// const priceEl = document.createElement("p");
// priceEl.textContent = `${product.price}원`;

// cardEl.appendChild(nameEl);
// cardEl.appendChild(priceEl);
// listEl.appendChild(cardEl);

const products = [
  { id: 1, name: "에코백", price: 12000, stock: 5 },
  { id: 2, name: "텀블러", price: 18000, stock: 0 },
  { id: 3, name: "머그컵", price: 9000, stock: 12 },
  { id: 4, name: "키링", price: 5000, stock: 30 },
];

const listEl = document.querySelector("#card-list");
products.forEach((product) => {
  const cardEl = document.createElement("article");
  cardEl.classList.add("card");
  const nameEl = document.createElement("h3");
  nameEl.textContent = product.name;
  const priceEl = document.createElement("p");
  priceEl.textContent = `${product.price}원`;

  cardEl.appendChild(nameEl);
  cardEl.appendChild(priceEl);
  listEl.appendChild(cardEl);
});

// removeChild 요소 삭제
const menuElForRemove = document.querySelector(".menu");
const soldOutEl = document.querySelector(".menu .sold-out");
const removed = menuElForRemove.removeChild(soldOutEl);
console.log(removed);

// addEventListener 버튼에 이벤트 등록하기 (클릭)
const menuElForAdd = document.querySelector(".menu");
const addBtn = document.querySelector("#add-btn");

let count = 0;
addBtn.addEventListener("click", () => {
  count += 1;
  const itemEl = document.createElement("li");
  itemEl.textContent = `새 메뉴 ${count}`;
  menuElForAdd.appendChild(itemEl);
});