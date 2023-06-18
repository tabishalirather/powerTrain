// console.log("connected")
// // function readNumber() {
// // 	// var number = prompt("Enter a number:");
// // 	var numberInput = document.getElementById("numberInput");
// // 	var number = numberInput.value;
// // 	var digitsArray = [];

// // 	if (number.length > 1) {
// // 		for (var i = 0; i < number.length; i++) {
// // 			var digit = parseInt(number.charAt(i));
// // 			digitsArray.push(digit);
// // 		}
// // 		console.log("Array of digits in readNumber:", digitsArray);
// // 	} else {
// // 		console.log("Single digit number");
// // 	}

// // 	return digitsArray;
// // }

// function raiseToPower() {
// 	console.log("I am beign called")
// 	// var number =
// 	var numberInput = document.getElementById("numberInput");
// 	var number = numberInput.value;
// 	console.log("Number:", number);
// 	var j = 0;

// 	var outputDiv = document.getElementById("outputDiv");
// 	outputDiv.innerHTML = "";

// 	while (parseInt(number) / 9 > 1) {
// 		j += 1;
// 		var digitsArray = Array.from(String(number), Number);
// 		console.log("Array of digits:", digitsArray);
// 		var result = 1;
// 		var tempArray = [];

// 		if (digitsArray.length % 2 === 0) {
// 			for (var i = 0; i < digitsArray.length; i += 2) {
// 				var value = Math.pow(digitsArray[i], digitsArray[i + 1]);
// 				console.log("Step " + j + ": " + digitsArray[i] + " ^ " + digitsArray[i + 1] + " = " + value);
// 				tempArray.push(value);
// 				result *= tempArray[tempArray.length - 1];
// 			}

// 			var newNum = result;
// 			console.log("newNum", newNum);
// 			number = newNum;
// 		} else {
// 			console.log("OddNumber");
// 			digitsArray.push(1);
// 			console.log("Array of digits:", digitsArray);

// 			for (var i = 0; i < digitsArray.length - 1; i += 2) {
// 				var value = Math.pow(digitsArray[i], digitsArray[i + 1]);
// 				console.log("Step " + j + ": " + digitsArray[i] + " ^ " + digitsArray[i + 1] + " = " + value);
// 				tempArray.push(value);
// 				result *= tempArray[tempArray.length - 1];
// 			}

// 			var newNum = result;
// 			console.log("newNum", newNum);
// 			number = result;
// 		}
// 	}

// 	console.log("weight", j);
// 	numberInput.value = "";

// }

// function main() {
// 	raiseToPower();
// }

// main();

function raiseToPower() {
	var numberInput = document.getElementById("numberInput");
	var number = numberInput.value;
	var originalNumber = number;
	var j = 0;

	var outputDiv = document.getElementById("outputDiv");
	outputDiv.innerHTML = ""; // Clear previous output

	while (parseInt(number) / 9 > 1) {
		j += 1;
		var digitsArray = Array.from(String(number), Number);
		var result = 1;
		var tempArray = [];

		if (digitsArray.length % 2 === 0) {
			outputDiv.innerHTML += "Array of digits:" + "[" + digitsArray + "]" + "<br>";
			for (var i = 0; i < digitsArray.length; i += 2) {
				var value = Math.pow(digitsArray[i], digitsArray[i + 1]);
				var stepOutput = "Step " + j + ": " + digitsArray[i] + " ^ " + digitsArray[i + 1] + " = " + value;
				outputDiv.innerHTML += stepOutput + "<br>";
				// console.log(tempArray[i] + "*" + tempArray[i + 1])
				tempArray.push(value);
				result *= tempArray[tempArray.length - 1];
			}

			var newNum = result;
			outputDiv.innerHTML += "---------------" + "<br>";

			outputDiv.innerHTML += "Obtained number is: " + newNum + "<br>";
			number = newNum;
		} else {
			// console.log("OddNumber");
			digitsArray.push(1);
			console.log("Array of digits:", digitsArray);
			outputDiv.innerHTML += "Array of digits:" + "[" + digitsArray + "]" + "<br>";

			for (var i = 0; i < digitsArray.length - 1; i += 2) {
				var value = Math.pow(digitsArray[i], digitsArray[i + 1]);
				var stepOutput = "Step " + j + ": " + digitsArray[i] + " ^ " + digitsArray[i + 1] + " = " + value;
				outputDiv.innerHTML += stepOutput + "<br>";
				tempArray.push(value);
				result *= tempArray[tempArray.length - 1];
			}

			var newNum = result;
			outputDiv.innerHTML += "---------------" + "<br>";
			outputDiv.innerHTML += "newNum: " + newNum + "<br>";
			number = result;
		}
	}
	outputDiv.innerHTML += "---------------" + "<br>";
	outputDiv.innerHTML += originalNumber + " reduced to " + newNum + " in " + j + " steps " + "<br>";
	// outputDiv.innerHTML += "weight: " + j + "<br>";
	numberInput.value = "";
}

function main() {
	raiseToPower();
}

main();
