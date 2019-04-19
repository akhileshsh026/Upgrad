/* Problem Statement 

Description
There are two classes – class A and class B. Class A consists of 4 students – Alice, Bob, Catherine, and Dan. Class B consists of 4 students – George, Jane, Katy, Luis. Note that the names of the students in both the classes are stored in individual arrays in the alphabetical order. On a particular day, both the classes are combined and two new students are admitted to the class – Emily and Frank.
 
You are required to merge both the arrays representing the two classes and merge the two new students into a single array, which maintains the alphabetical order of storing students’ names. At the end, print this merged array on to the console.
 
Thus, the output will be:
(10) ["Alice", "Bob", "Catherine", "Dan", "Emily", "Frank", "George", "Jane", "Katy", "Luis"]

*/

const mergeStudents = (classA, classB) => {
  /* TODO 1: Create a variable with identifier mergedClass
  Variable mergedClass must contain the classA's students, then two students "Emily" and "Frank", and then class B's students 
  */
  let mergedClass = []; 
  mergedClass = [...classA,...classB];
  mergedClass.push("Emily","Frank");
  mergedClass.sort();
  

    
  // TODO 2: Print the variable mergedClass on the console
  console.log("("+mergedClass.length+")"+JSON.stringify(mergedClass));
  
}

// arrays containing names of students in two classes
const classA = ["Alice", "Bob", "Catherine", "Dan"];
const classB = ["George", "Jane", "Katy", "Luis"];

mergeStudents(classA, classB);