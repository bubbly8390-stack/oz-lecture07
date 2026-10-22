// DAY 14 · JavaScript 배열메서드 데이터처리

const a = `이번에 새롭게 기획되어 추진 중에 있는 신규 프로젝트의 성공적인 완수를 도모하기 위하여, 
각 부서 간의 긴밀한 협력 체계의 구축을 진행하는 것이 무엇보다도 시급한 과제라고 판단되어집니다.`;

const b = `새 프로젝트를 성공시키려면 부서 간 협력 체계를 서둘러 구축해야 합니다`;

// foreach 값을 하나씩 꺼내 함수에 넣기
const fruites = ["사과", "바나나", "오렌지"];
fruites.forEach((fruit) => {
  console.log(fruit);
});
fruites.forEach((fruit, i) => {
  console.log(`${i}. ${fruit}`);
});
fruites.forEach((item, index) => {
  // 매개변수의 순서가 중요
  console.log(`${item}. ${index}`);
});

// foreach는 반환값 없음
const scores = [80, 95, 70, 55];
let total = 0;
scores.forEach((score) => {
  total += score;
});
console.log(total);
const result = scores.forEach((score) => score * 2);
console.log(result);

// map 하나하나 바꾼 새 배열을 반환
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(numbers);
console.log(doubled);

const users = [
  { name: "김오즈", age: 25 },
  { name: "이코딩", age: 30 },
  { name: "박자바", age: 20 },
];
console.log(users.map((user) => user.name));
const prices = [12000, 18000, 9000];
console.log(prices.map((price) => price * 0.9));

// filter 조건이 true인 값만 새 배열에 반환
const numbersF = [1, 2, 3, 4, 5];
const even = numbersF.filter((num) => num % 2 === 0);
console.log(numbersF);
console.log(even);
const tenOver = numbersF.filter((num) => num > 10);
console.log(tenOver);

const todos = [
  { title: "장보기", done: true },
  { title: "운동하기", done: false },
  { title: "과제제출", done: true },
];
const doneTodos = todos.filter((todo) => todo.done);
console.log(todos);
console.log(doneTodos);
console.log(doneTodos.length);
console.log((doneTodos.length / todos.length) * 100);

const leftTodos = todos.filter((todo) => !todo.done);
console.log(leftTodos);

// filter + map 고른 다음에 바꾸기
const products = [
  {
    id: 1,
    pdctName: "에코백",
    price: 12000,
    stock: 5,
  },
  {
    id: 2,
    pdctName: "텀블러",
    price: 18000,
    stock: 0,
  },
  {
    id: 3,
    pdctName: "머그컵",
    price: 9000,
    stock: 12,
  },
];
const pdctFiltered = products.filter((p) => p.stock > 0);
const names = pdctFiltered.map((p) => p.pdctName);
console.log(pdctFiltered);
console.log(names);

const namesOnce = products.filter((p) => p.stock > 0).map((p) => p.pdctName);
console.log(namesOnce);

// redduce 전체 배열을 순회하여 하나의 값 만들기
const numbersR = [1, 2, 3, 4];
const sum = numbersR.reduce((acc, num) => acc + num, 0);
console.log(sum);

const cart = [
  { name: "책", price: 10000 },
  { name: "펜", price: 2000 },
];
const totalCart = cart.reduce((acc, item) => acc + item.price, 0);
console.log(totalCart);

// find 조건에 맞는 첫 값 하나 반환
const found = products.find((p) => p.id === 2);
console.log(products);
console.log(found);

const foundN = products.find((p) => p.id === 9);
console.log(foundN);

// some 하나라도 맞는가, every 모두 맞는가
const isSome = oriducts.some((p) => p,stock === 0);
console.lot("품절이 있나?", isSome);

const isExistStockall = products.every((p) => p.stock > 0);
console.log("가격이 정상적으로 책정되었는가?", isRightPrices);

const isExistStockAll = products.every((p) => p.stock > 0);
console.log("모든 상품이 재고가 존재하는가?", isExistStockAll);

const emptyArrEvery = [].every((n) => n > 0);
console.log(emptyArrEvery);

// map으로 새객체 배열 반환하기
console.log(products);
const productsSales = products.map((p) => {
  return {
    id: p.id,
    pdctName: p.pdctName,
    price: p.price * 0.9,
    stock: p.stock,
    originPrice: p.price,
  };
});
console.log(productsSales);

const productsSales2 = products.map((p) => {
  return {
    ...p,
    price: p.price * 0.9,
    originPrice: p.price,
  };
});
console.log(productsSales2);