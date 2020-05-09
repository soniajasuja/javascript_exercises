/**
 * Use the keyword class to create a class
 * The constructor method is a special method for creating and initializing an object created within a class.
 * The constructor method is called each time the class object is initialized.
 * static methods can be accessed directly through the Class i.e they don't need an instance of the Class
 */

class Rectangle {
    constructor(height, width) {
      this.height = height; // 10
      this.width = width; //20
    }

    // Method
    calcArea() {
      return this.height * this.width;
    }
    
    // Method
    addDimensions() {
        return this.height + this.width;
    }


    // static Method
    static calcHalfArea(height, width) {
        return (height * width)/2;
    }

  }


  
 

  module.exports = Rectangle;