/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Alexis Campos
     Date: 03/09/2023

     Filename: js03.js
 */

//Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);
//Function to write weekday names into the calendar
function addWeekDays () {
	let i = 0; // initial counter value
	
	//reference the collection of heading cells 
	let headingCells = document.getElementsByTagName("th");
	
	//write each of the seven days into a heading cells
	while (i<7) {
		headingCells[i].innerHTML = weekDays[i];
	
	// increase the counter by 1
	i++;
	}
}

window.addEventListener("load", showGames);
//Function to write game information into the calander 
function showGames () {
	for (let i = 0; i < gameDates.length; i++) {
		let gameInfo = " ";
		
		//Open the paragraph
		switch (gameResults[i]) {
			case "W":
				gameInfo += "<p class='win'>";
				break;
			case "L":
				gameInfo += "<p class='lose'>";
			case "S":
				gameInfo += "<p class='suspend'>";
				break;
			case "P":
				gameInfo += "<p class='postponed'>";
				break;
		}
		
		//Include the opponent
		gameInfo += gameOpponents[i] + "<br>";
		
		//Include the result and Score 
		gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
		
		//Display innings played for suspended, shortened or extra-inging games 
		if (gameInnings[i] < 5) {
			gameInfo += " [" + gameInnings[i]+"]***";
		} else if (gameInnings[i] < 9) {
			gameInfo += " [" + gameInnings[i]+"]*";
		} else if (gameInnings[i] > 9) {
			gameInfo += " [" + gameInnings[i] + "]";
		}
		
		//Close Paragraph
		gameInfo += "</p>";
		
		//Write the Information into a table cell 
		let tableCell = document.getElementById(gameDates[i]);
		tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
	}
}
