let a = 10
let b = 15

let c1 = a > b
let c2 = a < b
let c3 = a == b
let c4 = a != b

let count = 10
for (let i = 0; i <= count; i++) {

    console.log("I ==", i)
}


let codes = [100,200,300,400,500]
console.log("Array ==", codes)

for (let i in codes){
    console.log("I ==", i)
}


for (let i in codes){
    console.log("I ==", codes[i])
    
    if (codes[i] == 300){
        codes[i] = 700
    }
}
console.log("New Array ==", codes) 