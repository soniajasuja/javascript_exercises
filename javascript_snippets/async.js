/**
 * 
 * The word async before a function means one simple thing: a function always returns a promise.
 * So, async ensures that the function returns a promise, and wraps non-promises in it.
 * 
 */

async function hello() {
    momsSavings = 20000;
    priceOfPhone = 60000;
    if (momsSavings < priceOfPhone) {
      return ({
        brand: "iphone",
        model: "6s"
      });
    } else {
      return new Error("We donot have enough savings. Let us save some more money.");
    }
}

console.log('I will get executed before the Promise gets completed');



hello().then(function(value){
    console.log('Value: ', value);
}).catch(function(error){
    console.log('Error: ', error);
})