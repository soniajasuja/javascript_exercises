/**
 * 
 * import modules by using the require keyword
 * 
 */

// import a function
const calculate = require('./arrow_function')
console.log(calculate.arrowAdd(5, 10));
console.log(calculate.regularAdd(10, 20));


//******************************************************************* */

// import a class
const Rectangle = require('./class')

 // Creating an instance of the Rectangle Class
 const rectangle = new Rectangle(10, 20);
  
 // Accessing the methods of Rectangle Class through its instance
 console.log(rectangle.calcArea()); // 200
 console.log(rectangle.addDimensions()); // 30

 // Accessing static method directly through the Class
 console.log(Rectangle.calcHalfArea(20, 30));



