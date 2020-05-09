const Rectangle = require('./class')

 // Creating an instance of the Rectangle Class
 const rectangle = new Rectangle(10, 20);
  
 // Accessing the methods of Rectangle Class through its instance
 console.log(rectangle.calcArea()); // 200
 console.log(rectangle.addDimensions()); // 30

 // Accessing static method directly through the Class
 console.log(Rectangle.calcHalfArea(20, 30));



