function f2(name, message) {

    // if (message === undefined){
    //     message = "Welcome"
    // }

    // можно заменить 3 - 5 стр. на 9

    message = message || "Welcome"

    return message + ' ' + name


}
// console.log(f2("Anna", "Hello"))
// если убрать Hello, будет Welcome
console.log(f2("Anna"))



function f3(name, message = "HI") {

    return message + ' ' + name
}
console.log(f3("Anna", "<Merhaba"))



function f4(p1, p2) {

    if (p1 > p2) {
        return p1 - p2
    } else if (p1 < p2) {
        return p1 + p2
    } else {
        return "P1 == P2"
    }

}

console.log(f4(10, 4))