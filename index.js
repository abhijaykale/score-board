let number = document.getElementById("score")
let number1 = document.getElementById("score1")
let count = 0;
let count1 = 0;
console.log(number)

function plusone() {
	count += 1;
	number.textContent = count

}


function plustwo() {
	count += 2;
	number.textContent = count
}

function plusthree() {
	count += 3;
	number.textContent = count
}



// GUEST
function plusone1() {
	count1 += 1;
	number1.textContent = count1

}


function plustwo1() {
	count1 += 2;
	number1.textContent = count1
}

function plusthree1() {
	count1 += 3;
	number1.textContent = count1
}