/**
 * Sets are used to store the unique values of any type.
 * i.e, no duplicate values are displayed
 * Also, sets are iterable objects
 */
var sets = new Set();
sets.add(10);
sets.add(20);
sets.add(30);

for (let element of sets) {
    console.log(element);
}