// 실습 02 — 상품 카드 목록 만들기
const products = [
  { id: 1, name: "에코백", price: 12000, stock: 5 },
  { id: 2, name: "텀블러", price: 18000, stock: 0 },
  { id: 3, name: "머그컵", price: 9000, stock: 12 },
  { id: 4, name: "키링", price: 5000, stock: 30 },
];

const listEl = document.querySelector("#card-list");
const countEl = document.querySelector("#count");
const hideBtn = document.querySelector("#hide-btn");

// 1. 상품 하나로 카드 하나 만들기
function createCard(product) {
  const cardEl = document.createElement("article");
  cardEl.classList.add("card");

  const nameEl = document.createElement("h3");
  nameEl.textContent = product.name;
  const priceEl = document.createElement("p");
  priceEl.textContent = `${product.price}원`;

  cardEl.appendChild(nameEl);
  cardEl.appendChild(priceEl);

  // 2. 재고가 0이면 품절 표시
  if (product.stock === 0) {
    cardEl.classList.add("sold-out");
    const badgeEl = document.createElement("span");
    badgeEl.classList.add("badge");
    badgeEl.textContent = "품절";
    cardEl.appendChild(badgeEl);
  }
  return cardEl;
}

// 3. 배열을 돌며 목록에 붙이기
products.forEach((product) => {
  listEl.appendChild(createCard(product));
});

// 4. 카드 개수 쓰기
countEl.textContent = `상품 ${document.querySelectorAll(".card").length}개`;

// 5. 품절 카드 빼기
function hideSoldOut() {
  const soldOutEls = document.querySelectorAll(".sold-out");
  soldOutEls.forEach((cardEl) => {
    listEl.removeChild(cardEl);
  });
  countEl.textContent = `상품 ${document.querySelectorAll(".card").length}개`;
}

// 6. 버튼을 누르면 hideSoldOut 부르기 (미리 보기 — 자세한 것은 DAY 16)
hideBtn.addEventListener("click", hideSoldOut);

