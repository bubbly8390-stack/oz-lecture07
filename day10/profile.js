// DAY 10 실습 02 - 사용자 정보 출력하기

// 상수 선언
const userName = "최혜연";
const email = "bubbly8390@gamil.com";

//변수 선언
let age = 28;

// + 연산자 : 문자열 연결
console.log("안녕하세요. 저는 " userName + "입니다.");

// 템플릿 문자열 : 백틱 안에 ${}
// 맥북은 영문타자일 때에 숫자 1 왼쪽 '₩' 키를 눌러야 백틱이 입력된다. ``
console.log(`안녕하세요. 저는 ${userName}입니다.`);

let isMember = true;

// 일부러 비운값(null), 아직 넣지 않은 값(undefined)
let photo = null;
let nickname;

// 하나씩 출력
console.log("이름 :", userName);
console.log("이메일 :", email);
console.log("나이 :", age);
console.log("회원 여부 :", isMember);
console.log("사진 :", photo);
console.log("별명 :", nickname);

// 템플릿 문자열로 소개 한줄
console.log(
  `안녕하세요. 저는 ${userName}입니다. 
나이는 ${age}살이고, 이메일은 ${email}입니다. 
회원 여부는 ${isMember}입니다.`,
);

// 자료형 확인
console.log("userName의 자료형 :", typeof userName);
console.log("age의 자료형 :", typeof age);
console.log("isMember의 자료형 :", typeof isMember);
console.log("photo의 자료형 :", typeof photo);
console.log("nickname의 자료형 :", typeof nickname);

// 생일이 지났는지 확인하기
age = 29;
console.log(`생일이 지나 ${age}살이 되었습니다.`);