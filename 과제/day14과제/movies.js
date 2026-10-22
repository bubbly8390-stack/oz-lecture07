// 이번 달에 본 영화 기록
const movies = [
  { title: "고양이 탐정", minutes: 128, rating: 5 },
  { title: "우주 택배", minutes: 95, rating: 3 },
  { title: "여름 기차", minutes: 112, rating: 4 },
  { title: "달빛 수영장", minutes: 151, rating: 5 },
];

// 1. 영화 제목만 모은 새 배열
const titles = movies.map((movie) => movie.title);
console.log(titles);

// 2. 별점이 4 이상인 영화만 고른 새 배열
const goodMovies = movies.filter((movie) => movie.rating >= 4);
console.log(`별점 4 이상 ${goodMovies.length}편`);

// 3. 전체 관람 시간 — 초기값부터 더합니다
const totalMinutes = movies.reduce((sum, movie) => sum + movie.minutes, 0);
console.log(`모두 ${totalMinutes}분`);

// 4. 처음으로 150분이 넘는 영화 하나
const longMovie = movies.find((movie) => movie.minutes > 150);
console.log(`150분이 넘는 영화 ${longMovie.title}`);

// 5. 별점 5인 영화가 하나라도 있는가
console.log(movies.some((movie) => movie.rating === 5));

// 6. 모든 영화가 100분 이상인가
console.log(movies.every((movie) => movie.minutes >= 100));