// 실습 01 — 가게 소개 페이지 바꾸기

// 1. id로 가게 이름을 찾아 바꾸기
const nameEl = document.getElementById("store-name");
nameEl.textContent = "오즈 베이커리";

// 2. 영업 상태를 바꾸고 class 붙이기
const statusEl = document.querySelector(".status");
statusEl.textContent = "영업 중";
statusEl.classList.add("open");

// 3. 공지는 굵은 글씨를 섞어 innerHTML로
const noticeEl = document.querySelector("#notice");
noticeEl.innerHTML = "오늘은 <strong>소금빵</strong>이 오후 2시에 나옵니다";

// 4. 메뉴를 모두 골라 번호 붙이기
const menuEls = document.querySelectorAll(".menu li");
menuEls.forEach((menuEl, i) => {
  menuEl.textContent = `${i + 1}. ${menuEl.textContent}`;
});

// 5. 다 팔린 메뉴(바게트)에 class 붙이기
menuEls[2].classList.add("sold-out");

// 6. 메뉴 개수를 Console에 찍기
console.log(`메뉴 ${menuEls.length}개`);
