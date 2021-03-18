console.log('실행 후 3초 뒤, 일일 첫 배치 수행');
console.log('이후 1초 당 매출 배치, 10초당 에누리 배치 수행');
setTimeout(function() {

  console.log('일일 통합 첫 배치');

  const settl = setInterval(() => { console.log('매출 배치'); }, 1000);
  const enuri = setInterval(() => { console.log('에누리 배치'); }, 10000);

}, 3000);
