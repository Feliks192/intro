// let fs11 = () => console.log("OK!")
// fs11()

// let fs22 = (p1, p2) => console.log("Ok", p1, p2)
// fs22(30, 40)



// let n1 = 100
// let n2 = 200

// let fs33 = (n1 > n2) ?
//     (p1, p2) => console.log("1_Ok", p1 - p2) :
//     (p1, p2) => console.log("2_Ok", p1 + p2);

// fs33(n1, n2)


function n2(title, fn1) {
    console.log(title, "N2")
    fn1("Code 200 Ok !!!")
}

n2("Test code 200", function (pp1) {
    // console.log("Test run!")
    console.log(pp1)
})