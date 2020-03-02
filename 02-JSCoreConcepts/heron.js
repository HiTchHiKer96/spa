// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let p = (a,b,c) => (a+b+c)/2;

function pole(a, b, c) {
    let x = p(a,b,c);
    return x*Math.sqrt((x-a)*(x-b)*(x-c));
}

console.log( p(a,b,c) );
console.log(pole(a,b,c));