// var keepsHisWord;
// keepsHisWord = true;

// promise1 = new Promise(function(resolve, reject) {
//   if (keepsHisWord === true) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesnt want to keep his word");
//   }
// });
// console.log(promise1);




// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve({
//         message: "The man likes to keep his word",
//         code: "aManKeepsHisWord"
//       });
//     }, 10 * 1000);
//   });
//   console.log('Promise State: ', promise2);
//   console.log('I will get executed befor the Promise gets completed');

// promise2.then(function(value){
//     console.log('I will get executed after the Promise gets completed');
// })





// keepsHisWord = false;
// promise3 = new Promise(function(resolve, reject) {
//   if (keepsHisWord) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesn't want to keep his word");
//   }
// });
// console.log(promise3);





var momsPromise = new Promise(function(resolve, reject) {
    momsSavings = 20000;
    priceOfPhone = 60000;
    if (momsSavings > priceOfPhone) {
      resolve({
        brand: "iphone",
        model: "6s"
      });
    } else {
      reject("We donot have enough savings. Let us save some more money.");
    }
  });

  momsPromise.then(function(promiseValue){
      console.log('promiseValue', promiseValue)
  }).catch(function(errorReason){
      console.log('errorReason', errorReason)
  })


