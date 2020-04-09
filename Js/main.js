var NumberButton = document.getElementsByClassName("button")
var CodeDivision = document.getElementById("code");
var ClickCounter = 0;
var IntervalTimerGreenBlock = 0;

function  getNumber(ClickedButton) {
    
    CodeDivision.innerHTML += ClickedButton.value;
    ClickCounter++;
    console.log(ClickCounter);

    // Add values to the buttons
    if(ClickCounter == 1) {
		NumberOne = ClickedButton.value;
		clearInterval(BlinkGreenBlock)
        
    } else if(ClickCounter == 2) {
        NumberTwo = ClickedButton.value;
    }
    else {
        NumberThree = ClickedButton.value;

        //Check if code is correct
        if(NumberOne == 3 && NumberTwo == 1 && NumberThree == 1) {
			console.log("Cracked");
			BlinkGreenBlock();
			DisableButtons();
			play_sound();
		}
        else {
			console.log("Try Again");
			DisableButtons();
			play_soundBruh();
			BlinkPurple();
		}
    }

}

//get all elements (div) with the classname "buttonNumber"
var NumberButtons = document.getElementsByClassName('code');


function DisableButtons() {

	//used to loop through all buttons and disable them with attribute disable
	//so that it isn't possible to click more than three times

	for(i=0; i < NumberButton.length; i++) {
		NumberButton[i].setAttribute('disabled', 'disabled');
	}
	
}

function EnableButtons() {

	//used to loop through all buttons and enable them again, remove attribute disabled
	for(i=0; i < NumberButton.length; i++) {
		NumberButton[i].removeAttribute('disabled');
	}
	ClickCounter = 0;
	CodeDivision.innerHTML = ""

}

function play_sound() {
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'sound/Victory sound effect.mp3');
	audioElement.setAttribute('autoplay', 'autoplay');
	audioElement.load();
	audioElement.play();
}

function play_soundBruh() {
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'sound/Roblox Death Sound - OOF   Sound Effect.mp3');
	audioElement.setAttribute('autoplay', 'autoplay');
	audioElement.load();
	audioElement.play();
}

var PurpleBlock = document.getElementById("PurpleBlock");

//counter start at zero
function BlinkPurple() {
var IntervalTimer = 0;

var BlinkPurple = setInterval(function() {
	
	//add +1 every time the setinterval function runs		
	IntervalTimer++;

	//method to show div on and off
	//change the css of the GreenBlock and red box to create a blinking effect
	if (PurpleBlock.style.visibility == 'hidden') {
		PurpleBlock.style.visibility = 'visible';
	}else {
		PurpleBlock.style.visibility = 'hidden';
	}

	//check if the interval has runned ten times
	if(IntervalTimer == 10) {

		//ClearInterval function stops the interval after 10 times
		clearInterval(BlinkPurple);
	
		EnableButtons();
	}

}, 500);
IntervalTimerPurple = 0;
CodeDivision.innerHTML = ""
}

var GreenBlock = document.getElementById("GreenBlock");

//counter start at zero
function BlinkGreenBlock(){
var IntervalTimerGreenBlock = 0;

var BlinkGreenBlock = setInterval(function() {
	
	//add +1 every time the setinterval function runs		
	IntervalTimerGreenBlock++;

	//method to show div on and off
	//change the css of the GreenBlock and red box to create a blinking effect
	if (GreenBlock.style.visibility == 'hidden') {
		GreenBlock.style.visibility = 'visible';
	}else {
		GreenBlock.style.visibility = 'hidden';
	}

	//check if the interval has runned ten times
	if(IntervalTimerGreenBlock == 10) {

		//ClearInterval function stops the interval after 10 times
		clearInterval(BlinkGreenBlock);
		EnableButtons();
	}

}, 500);
IntervalTimerGreenBlock = 0;
}