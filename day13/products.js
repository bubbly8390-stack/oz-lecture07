// DAY 13 실습 02 — 상품 목록 다루기

// 1. 상품 하나는 객체, 상품 목록은 객체 배열
const products = [
  { id: 1, name: "에코백", price: 12000, stock: 5 },
  { id: 2, name: "텀블러", price: 18000, stock: 0 },
  { id: 3, name: "머그컵", price: 9000, stock: 12 },
];

// 2. 하나씩 꺼내 보기 — 점 표기법과 대괄호 표기법
console.log(products[0].name);
console.log(products[2]["price"]);

// 3. 전체 목록을 출력하고 재고 금액을 더합니다
let total = 0;
for (let i = 0; i < products.length; i++) {
  const item = products[i];
  console.log(`${item.id}. ${item.name} ${item.price}원 (재고 ${item.stock}개)`);
  total += item.price * item.stock;
}
console.log(`재고 금액 합계 ${total}원`);

// 4. 품절 상품의 이름만 모읍니다 — for + if + push
const soldOut = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].stock === 0) {
    soldOut.push(products[i].name);
  }
}
console.log("품절", soldOut);

// 5. 새 상품을 추가하고, 텀블러 가격을 바꿉니다
products.push({ id: 4, name: "키링", price: 5000, stock: 30 });
products[1].price = 16000;
console.log(`상품 ${products.length}개, 텀블러 ${products[1].price}원`);

// 6. 객체를 JSON 글로 바꾸고, 다시 객체로 되돌립니다
const json = JSON.stringify(products[3]);
console.log(json);
console.log(typeof json);
const item = JSON.parse(json);
console.log(item.name);