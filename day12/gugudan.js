// DAY 12 실습 01 — 구구단 출력하기

// 1. 3단 — i가 1부터 9까지 하나씩 커지며 아홉 번 반복합니다
for (let i = 1; i <= 9; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}

// 2. 2단부터 9단까지 — 바깥 for는 단, 안쪽 for는 곱하는 수
for (let dan = 2; dan <= 9; dan++) {
  let line = `${dan}단 :`;
  for (let i = 1; i <= 9; i++) {
    line += ` ${dan * i}`;
  }
  console.log(line);
}

// 3. 홀수 단만 — 짝수 단은 continue로 건너뜁니다
for (let dan = 2; dan <= 9; dan++) {
  if (dan % 2 === 0) {
    continue;
  }
  console.log(`${dan}단은 홀수 단입니다`);
}

// 4. 7단에서 처음으로 50을 넘는 곱 — 찾으면 break로 멈춥니다
for (let i = 1; i <= 9; i++) {
  if (7 * i > 50) {
    console.log(`7 * ${i} = ${7 * i} 에서 처음으로 50을 넘었습니다`);
    break;
  }
}