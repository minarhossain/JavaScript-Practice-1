const listOne = ['principal', 'ap', 'lecturer', 'slecturer'];
const listTwo = ['teacher', 'assistant teacher', 'moulovi'];

const three = [...listOne, ...listTwo];
// console.log(three)
// console.log(combained);
console.log('connected')



const number = [2, 3, 4, [4, 5, 6], 8, 9, [10, 11, [14, 15, 16], 17, 18], 19];
const newNumber = number.flat(Infinity);
// console.log(newNumber)

const marvel = ["thor", "Iron man", "Batman"];
const dc = ["captain", "Proceed", "Harry Poter"];
// const allHeros = marvel.concat(dc);
const allHeros = [...marvel, ...dc];
// console.log(allHeros);
console.log(Array.isArray("Minar")); // true or false
console.log(Array.from("Minar"));
console.log(Array.from({ name: "Hossain" })); // [] interesting

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;

console.log(Array.of(scoreOne, scoreTwo, scoreThree)); // [100,200,300]