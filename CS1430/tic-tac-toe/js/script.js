var markers = ["X", "O"]; //
var players = [];
var playerTotal = [];
var winTotal = [];
var whoseTurn;
var gameOver;
var samePlayers = false;

// Initialize all variables and game board when starting a game.
// If the same players are playing, start the game.
function setUpGame()
{
	playerTotal = [0,0];
	whoseTurn = 0;
	buildBoard();
	if (samePlayers) startGame();
	else
	{
		showElement("player-form");
		hideElement("game-display");
		document.getElementById("player-form").reset();
		winTotal = [0,0,0];
	}
}

function startGame()
{
	gameOver = false;
	players[0] = document.getElementById("player-name-1").value
	players[1] = document.getElementById("player-name-2").value
	scoreMessage();
	hideElement("player-form");
	showElement("game-display");
	hideElement("button-container");
	turnMessage();
}

// Function to build the game board.
function buildBoard()
{
	var board = "";
	for (i = 1; i <= 3; i++)
	{
		board += '<div id=row-' + i + '>';
		for  (j = 1; j <= 3; j++)
			board += '<div onclick="playGame(this,' + Math.pow(2, (i-1) * 3 + j - 1) + ');"></div>'
		board += '</div>';
	}
	setInnerHTML("game-board", board);
}

// When a player clicks on a board tile play a turn.
function playGame(clickedDiv, num)
{
	if (!gameOver)
	{
		playerTotal[whoseTurn] += num;
		clickedDiv.innerText = markers[whoseTurn];
		clickedDiv.attributes["0"].nodeValue = "";
		if (isWin())
		{
			setInnerHTML("game-message", players[whoseTurn] + " Wins!");
		}
		else if (gameOver)
			setInnerHTML("game-message", "Nobody Wins!");
		else
		{
			whoseTurn++;
			whoseTurn %= 2;
			turnMessage();
		}
		
		if (gameOver)
		{
			showElement("button-container");
			scoreMessage();
		}
	}
}

// Determines whether or not the current player has won after plicking a square.
function isWin()
{
	var winValues = [7,56,73,84,146,273,292,448];
	for (i = 0; i < winValues.length; i++)
		if ((playerTotal[whoseTurn] & winValues[i]) == winValues[i])
		{
			gameOver = true;
			winTotal[whoseTurn]++;
			return true;
		}
	if (playerTotal[0] + playerTotal[1] == 511)
	{
		winTotal[2]++;
		gameOver = true;
	}
	return false;
}

// Tells the game whether the players will be the same and starts a new game.
function newGame(same) {samePlayers = same;	setUpGame();}

// Helper functions to show/hide elements.
function hideElement(elementId) {document.getElementById(elementId).className = "hide";}
function showElement(elementId) {document.getElementById(elementId).className = "show";}
function setInnerHTML(elementId, text) {document.getElementById(elementId).innerHTML = text;}
function turnMessage() {setInnerHTML("game-message", "It's " + players[whoseTurn] + "'s Turn");}
function scoreMessage() {
	setInnerHTML("game-score", players[0] + ": " + winTotal[0] + "  " + 
								  players[1] + ": " + winTotal[1] + "  " +
								  "Ties: " + winTotal[2]);
}