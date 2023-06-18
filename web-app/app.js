function raiseToPower() {
	var numberInput = document.getElementById("numberInput");
	// var numberInput = 1
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

// function handleKeyPress(event) {
// 	if (event.keyCode === "Enter") {
// 		raiseToPower();
// 		event.preventDefault();
// 	}
// }

function main() {
	// raiseToPower();
	// var numberInput = document.getElementById("numberInput");
	// numberInput.addEventListener("keypress", handleKeyPress);
	raiseToPower()
}

main();
