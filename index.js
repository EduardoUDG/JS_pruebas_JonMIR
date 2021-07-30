console.clear();
console.log('====== Break ======');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i <10; i++) {
    if( i === 5) {
        break;
    }
    console.log( numbers[i] );
}

console.log('====== continue ======');
for(let j=0; j <10; j++) {
    if( j === 5) {
        continue;
    }
    console.log( numbers[j] );
}