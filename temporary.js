/* This is a starter with examples.  Remove the examples once you have made your own versions. */
window.onload = start;

function start() {
    setup();
    // town();
    wakeUp();
}
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;

// story function variables
var name = null;
var spin = 0;

function checkAnswers(answer) {  // Function names match story scenes. Replace with your functions
    if (answer == "fall back asleep") {
       goBackToSleep();
    } 
    else if (answer == "get ready to go") {
        startYourDay();
    }
	else if (answer == "follow ticking") {
        followTicking();
    }
	else if (answer == "run away") {
        runAway();
    }
	else if (answer == "dust off") {
        dustOff();
    }
	else if (answer == "go to police") {
        goToPolice();
    }
		else if (answer == "wait") {
        Wait();
    }
}

function wakeUp(){  // FIRST STORY SCENE - WELCOMES PLAYER
   var name = prompt("what is your name?");
   story("You wake up, nothing so far seems unusual");
   choices = ["fall back asleep", "get ready to go", "  "];
   answer = setOptions(choices);
 }
   
function goBackToSleep() {  // HOW TO SET A SCENE
    story("Well...ok…..i guess, um not sure how this is gonna go but we’ll see, but, you just woke up so, why you falling back asleep?");
    choices = ["wake up"];
    answer = setOptions(choices);   
 }
function startYourDay() {  // HOW TO SET A SCENE
    story("You get ready to head out for the day, some reason or another you hear a ticking sound, is it just a clock? Wait a second, is there even a clock around here?");
    choices = ["follow ticking","run away"];
    answer = setOptions(choices);   
 }
function followTicking() {  // HOW TO SET A SCENE
    story("Well, this has bad news written all over it I mean why would you follow a ticking noise? What are you stupid? Your house explodes, times up your dead, how’d that plan turn out for ya dummy!? ending");
	choices = ["dummy you're dead no choice for you!"];
	answer = setOptions(choices)
 }
 
 function runAway() {  // HOW TO SET A SCENE
    story("Well, at least you know not to tempt oh i don't know, being blown up! Your house explodes and you survived");
	choices = ["dust off"];
	answer = setOptions(choices);
 }
  function dustOff() {  // HOW TO SET A SCENE
    story("You dust yourself off and after taking a few seconds to realize what just happened you try to figure out what just happened, yet it’s kind of hard to figure who or what just blew your house up cause, oh I don’t know, it blew up and nothing is left!");
	choices = ["go to police"];
	answer = setOptions(choices);
 }
 function goToPolice() {  // HOW TO SET A SCENE
    story("You go to the police to report what happened, and in typical movie police fashion, they’re all out of the office eating doughnuts, well that’s a fine how do ya do ain’t it?");
	choices = ["wait"];
	answer = setOptions(choices);
 }
  function Wait() {  // HOW TO SET A SCENE
   story("You wait for the police to show up for half an hour with no luck, instead three morons show up, you tell them what happened which only ends up resulting in a chorus of slaps, hits and jabs, well that went well, not!");
	choices = ["give up", "wait more"];
	answer = setOptions(choices);
 }
 