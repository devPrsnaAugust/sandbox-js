const prmsFx = new Promise((resolve, reject) => {
    const a = 'pass'
    const b = 'fail'
    console.log('3초 뒤 resolve or reject');

    if(a == 'pass'){
      setTimeout(function(){
        resolve (a); // 성공
      }, 3000);

    }else{
      setTimeout(function(){
        reject (b);
      }, 3000);

    }
});
prmsFx
    .then((sucess) => {
      console.log('기다렸다가 수행 될 출력');
      console.log('success');
      action();
      console.log('action 수행 직후 출력. 즉 바로 출력');
    })
    .catch((fail) => {
      console.log('기다렸다가 수행 될 출력');
      console.log('fail');
      action();
    })
//--------이하 async,await

function innerFx() {
  let promise = new Promise((resolve, reject) => {
  console.log('innerFx');
  setTimeout(() => resolve("완료!"), 1000)
  });
}

async function action() {
    let auth = await innerFx();
    console.log('last');
}
