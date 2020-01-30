var noun = [];
var verb = [];
var adjective = [];

function madlibInput()
{
	for (i = 0; i < 2; i++)
	{
		noun[i] = prompt("Enter a noun: ");
		verb[i] = prompt("Enter a past tense verb: ");
		adjective[i] = prompt("Enter an adjective: ");
	}
	
	document.getElementById("mad-lib-button").innerText = "Generate New Mad-Lib";
	if (document.getElementById("story-buttons").className == "hide")
		document.getElementById("story-buttons").className = "show";
	
	document.getElementById("s1-noun1").innerHTML = noun[0];
	document.getElementById("s2-noun1").innerHTML = noun[0];
	document.getElementById("s1-noun2").innerHTML = noun[1];
	document.getElementById("s2-noun2").innerHTML = noun[1];
	document.getElementById("s1-verb1").innerHTML = verb[0];
	document.getElementById("s2-verb1").innerHTML = verb[0];
	document.getElementById("s1-verb2").innerHTML = verb[1];
	document.getElementById("s2-verb2").innerHTML = verb[1];
	document.getElementById("s1-adjective1").innerHTML = adjective[0];
	document.getElementById("s2-adjective1").innerHTML = adjective[0];
	document.getElementById("s1-adjective2").innerHTML = adjective[1];
	document.getElementById("s2-adjective2").innerHTML = adjective[1];
}

function displayStory1()
{
	if (document.getElementById("story1").className == "hide")
	{
		document.getElementById("story1").className = "show";
		document.getElementById("story2").className = "hide";
		document.getElementById("image").src = "img/halloween-1.jpg";
	}
	
	if (document.getElementById("image").className == "hide")
		document.getElementById("image").className = "show";
}

function displayStory2()
{
	if (document.getElementById("story2").className == "hide")
	{
		document.getElementById("story2").className = "show";
		document.getElementById("story1").className = "hide";
		document.getElementById("image").src = "img/halloween-2.jpg";
		
	}
	
	if (document.getElementById("image").className == "hide")
		document.getElementById("image").className = "show";
}