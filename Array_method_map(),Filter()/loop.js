let a = [1, 93, 5, 6, 88]
//forEach:- The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array.
a.forEach((value, index) => {
    console.log(value, index)

});

//for in loop :
// in JavaScript for…in is use to geting Key from the object
let obj =
{
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (let key in obj) {
    console.log(key, obj[key])
}

//for of :
//for of loop is use to get values from the arrat
let b = [1, 93, 5, 6, 88]

for (const values of b) {
    console.log(values)

}