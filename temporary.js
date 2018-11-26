/* This is a starter with examples.  Remove the examples once you have made your own versions. */

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
 }