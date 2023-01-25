let item1 = 20
let item2 = 20

let result1 = item1 > item2
let result2 = item1 == item2

console.log("result = ", result1)
console.log("result = ", result2)


if (item1 == item2){
    console.log("result IF1 = ", result1)
}

if (result1){
    console.log("result IF2 = ", result1)
}else{
    console.log("other result2 = ", result1)
}

if (result2){
    console.log("result IF3 = ", result2)
}else{
    console.log("other result3 = ", result2)
}
