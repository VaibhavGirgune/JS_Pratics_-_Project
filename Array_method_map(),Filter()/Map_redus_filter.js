//creating new array from one array without Map()

let a = [33, 4, 5, 6, 7, 2, 3, 4]
let b = []

for (let i = 0; i < a.length; i++) {
    b.push(a[i])

}
console.log(b)

//Map() = Creating New array from orignal array .. 
//or
//Creating new array by perfromeing some opretion each array element

let c = [3, 4, 5, 6, 7, 0]

let e = c.map((r) => {
    return r;
})
console.log(e)

//Filter () -> Filtering tha array by useing Certain Condition and create new array
let v = c.filter((r) => {
    return r > 4;
})

console.log(v)

//reduce Methos -> is use to reduce array into singal value

let y = [3, 4, 5, 6, 7, 0]

let j = y.reduce((a, b) => {
    return a + b
})
console.log(j)