// map
const arr = [1,2,3,4];
const mapped = arr.map((value)=>{
    return value*2;
})

console.log(mapped);
// concat 

const conc = arr.concat([1,2,3]);
console.log(conc);

// ..rest
const [first,second, third, ...rest] = arr;
console.log(rest);

// objects

///function calls 
const square = (p) => { return p*p};
console.log(square(20)); 
