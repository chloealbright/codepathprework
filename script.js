// global constants
//Keeps track of clue's play duration, pause, and playback
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables to keep track of 
//the state of the game
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];//pattern: keep track of button presses
var progress = 0; //progress: how far along the player is; used as index for the pattern array
var gamePlaying = false; //gPlaying: bool true when users presses start

var guessCounter = 0; //Keeps track of where user is in the clue sequence
//Keeps track on whether a sound is playing
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
    //swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  
  //swap Stop and Start buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");//built in function
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

// Sound Synthesis Functions
const freqMap = {//higher num= higher pitches
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 529.6
}

//plays tone for amount in milliseconds specified 
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
//breaks up playing the tone, Step 1: startTone
//continues playing until stop tone() is called
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
//breaks up playing the tone, Step 2: stopTone
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  //context.resume() part of original code
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

//Keeps track of checking each guess 
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){//if game isn't active return from function
    return;
  }
  if(btn == pattern[guessCounter]){//case1 if correct
    if(guessCounter<progress){//if turn isn't up
      guessCounter++;
    }
    else if(progress<pattern.length-1){//if turn is up but game isn't over
      progress++;
      playClueSequence();
    }
    else{
      winGame();
    }
    
  }
  else{//case2 if false
    loseGame();
  }

}