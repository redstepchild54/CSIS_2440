// JavaScript
// Handle input from user
function getUserInput()
{
	var input = document.getElementById("input").value
	if (input != "" && input <= 8 && input >= 1) setRandomNumbers(input);
}
// Random Number Generation
function setRandomNumbers(num)
{
	var output = "";
	var lotto = [];
	for (i = 0; i < num; i++) lotto[i] = Math.ceil(Math.random() * 99);
	for (i = 0; i < num - 1; i++) output += lotto[i] + "-";
	output += lotto[lotto.length - 1];
	document.getElementById("output").innerHTML = output;
}