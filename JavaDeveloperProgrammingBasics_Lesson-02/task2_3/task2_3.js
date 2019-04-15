let a = 1, b = 2;
let result;

if (a + b < 4) {
	result = "Few";
} else {
	result = "Many";
}

console.log(result);

// с использованием тернарного оператора ?

result = (a + b < 4) ? "Few" : "Many";

console.log(result);