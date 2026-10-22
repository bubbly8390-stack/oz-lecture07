// 실습 02 — 장바구니 계산하기
const cart = [
  { id: 1, name: "에코백", price: 12000, qty: 1, checked: true },
  { id: 2, name: "머그컵", price: 9000, qty: 2, checked: true },
  { id: 3, name: "텀블러", price: 18000, qty: 1, checked: false },
  { id: 4, name: "키링", price: 5000, qty: 3, checked: true },
];

// 1. forEach로 담은 상품 출력
cart.forEach((item) => {
  console.log(`${item.name} ${item.price}원 × ${item.qty}`);
});

// 2. filter로 선택한 상품만
const selected = cart.filter((item) => item.checked);
console.log(`선택 ${selected.length}개`);

// 3. map으로 10% 할인한 새 객체 만들기 — cart는 그대로
const sale = selected.map((item) => {
  return { name: item.name, price: item.price * 0.9, qty: item.qty };
});
console.log(`할인가 ${sale[0].price}원, 원래 ${cart[0].price}원`);

// 4. reduce로 할인 전 · 후 총액
const total = selected.reduce((sum, item) => sum + item.price * item.qty, 0);
const saleTotal = sale.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(`총액 ${total}원 → 할인 후 ${saleTotal}원`);
console.log(saleTotal >= 30000 ? "무료 배송" : "배송비 3000원");

// 5. find로 id가 2인 상품 찾기
const found = cart.find((item) => item.id === 2);
console.log(`찾은 상품 ${found.name}`);

// 6. some · every로 확인하기
console.log(cart.some((item) => item.qty >= 3));
console.log(selected.every((item) => item.price < 15000));