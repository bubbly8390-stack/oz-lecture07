// 서버에서 받았다고 생각하는 JSON 글 (따옴표 안 전체가 문자열입니다)
const response = '{"cafe":"오즈 카페","menu":[{"name":"아메리카노","price":3000},{"name":"라떼","price":3500},{"name":"녹차","price":3200}]}';

// 1. JSON 글을 객체로 바꿉니다
const data = JSON.parse(response);

// 2. 가게 이름과 메뉴 개수
console.log(`${data.cafe} 메뉴 ${data.menu.length}개`);

// 3. 첫 번째 메뉴의 이름 — 인덱스는 0부터
console.log(`첫 메뉴 ${data.menu[0].name}`);

// 4. 새 메뉴를 맨 뒤에 추가합니다
data.menu.push({ name: "유자차", price: 3800 });

// 5. 두 번째 메뉴(라떼)를 뺍니다 — 1번 자리에서 1개
data.menu.splice(1, 1);

// 6. 남은 메뉴를 「이름 가격원」으로 출력합니다 — 대괄호 표기법
for (let i = 0; i < data.menu.length; i++) {
  const item = data.menu[i];
  console.log(`${item.name} ${item["price"]}원`);
}