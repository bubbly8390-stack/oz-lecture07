// 바뀌지 않는 값
const title = "처음 만나는 JavaScript";
const author = "김코딩";
const price = 18000;

// 바뀌는 값
let stock = 3;
let isSoldOut = false;

// 일부러 비워 둔 값
let coupon = null;

// 한 권이 팔렸습니다
stock = 2;

console.log(`${title} · ${author}`);
console.log(`가격 ${price}원 · 재고 ${stock}권`);
console.log("품절 :", isSoldOut);
console.log("쿠폰 :", coupon);

console.log("title :", typeof title);
console.log("price :", typeof price);
console.log("isSoldOut :", typeof isSoldOut);
console.log("coupon :", typeof coupon);

console.warn("재고가 2권 남았습니다");