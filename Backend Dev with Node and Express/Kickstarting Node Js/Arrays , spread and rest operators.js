// 2. Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(arr.map(a => {   // array.map- array k har element ko ek ek krke uthaya, uske baad vo ek ek value "a" me gya
    if(a == " "){
        return "empty string"
    }
    else{
        return a;
    }
}))
console.log(arr)

// Ques 3 - How is hobbies const and it still doesnt error out when we add new elements to the array 
// Ans 3 - In JavaScript, when you declare an array using the const keyword, it means that the reference to the array is constant, not the contents of the array. This means you can still modify the array by adding, removing, or modifying elements.


// Ques - 4 What according to you is spread opertor. Does spread operator create a new object or point to the same old object?
/* Ans 4 - The spread operator (`...`) in JavaScript is used to spread the elements of an iterable (like an array or string) into places where multiple elements or arguments are expected. When used with arrays or objects, the spread operator creates a shallow copy of the original array or object.

The spread operator creates a new array or object, and it performs a shallow copy. This means that if the array or object contains nested arrays or objects, those nested arrays or objects are still references to the same objects as in the original. So, modifications to nested elements will be reflected in both the original and the spread copy.

In short, the spread operator creates a new object or array with the same values as the original, but it doesn't create deep copies for nested elements. */

// Ques 5 - What is rest operator.
/*Ans 5 - In JavaScript, the rest parameter syntax (often referred to as the rest operator) is represented by three dots (`...`). It allows a function to accept any number of arguments as an array, making it more flexible and versatile.

In short, the rest operator collects the remaining arguments passed to a function into an array. */




// What will be the output of this

/* 1) 
const obj1 = {'key1': 1}
const obj2 = { ...obj1}
if(obj2 === obj1){
    console.log('same objects')
}

else{
    console.log('different objects')
} */

//output - different objects


/* 2) 
const obj1 = {'key1': 1 , 'key2' : 2}
const obj2 = { ...obj1, key1: 1000}
console.log(obj1)
console.log(obj2) */

/* output - (obj1)
{ 'key1': 1, 'key2': 2 }

(obj2) 
{ 'key1': 1000, 'key2': 2 } */
