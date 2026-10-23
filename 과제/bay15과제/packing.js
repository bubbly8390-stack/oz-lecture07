// 여행 준비물 — packed가 true면 이미 챙긴 것
const items = [
  { name: "여권", packed: true },
  { name: "충전기", packed: false },
  { name: "우산", packed: true },
  { name: "선크림", packed: false },
];

// 1. id로 제목을 찾아 글자 바꾸기
const titleEl = document.getElementById("list-title");
titleEl.textContent = "제주 여행 준비물";

// 2. 준비물마다 li를 만들어 목록에 붙이기
const listEl = document.querySelector("#item-list");
items.forEach((item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item.name;
  if (item.packed) {
    itemEl.classList.add("packed");
  }
  listEl.appendChild(itemEl);
});

// 3. 챙긴 준비물 개수 쓰기
const packedEls = document.querySelectorAll(".packed");
const summaryEl = document.querySelector("#summary");
summaryEl.textContent = `챙긴 준비물 ${packedEls.length}개 / 전체 ${items.length}개`;
console.log(summaryEl.textContent);