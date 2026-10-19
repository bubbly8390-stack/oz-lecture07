// DAY 11 실습 01 — 로그인 상태에 따라 인사하기

// 1. 지금 상태 — 이 세 줄의 값을 바꿔 가며 확인합니다
const isLoggedIn = true;
const userName = "김오즈";
const role = "admin"; // "admin" 또는 "member"

// 2. 이름이 비어 있으면 "회원"으로 — || 는 앞의 값이 falsy면 뒤의 값을 돌려줍니다
const displayName = userName || "회원";

// 3. 상태에 따라 다른 인사 — 위에서부터 검사하고 처음 맞는 하나만 실행합니다
if (!isLoggedIn) {
  console.log("로그인이 필요합니다.");
} else if (role === "admin") {
  console.log(`관리자 ${displayName}님, 환영합니다.`);
} else {
  console.log(`${displayName}님, 환영합니다.`);
}

// 4. 관리자 메뉴는 로그인한 관리자에게만 — && 는 둘 다 참일 때만 참
const canSeeAdminMenu = isLoggedIn && role === "admin";
console.log("관리자 메뉴 보기 :", canSeeAdminMenu);