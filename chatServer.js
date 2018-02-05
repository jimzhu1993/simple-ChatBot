/*
chatServer.js
Author: David Goedicke (da.goedicke@gmail.com)
Closley based on work from Nikolas Martelaro (nmartelaro@gmail.com) as well as Captain Anonymous (https://codepen.io/anon/pen/PEVYXz) who forked of an original work by Ian Tairea (https://codepen.io/mrtairea/pen/yJapwv)
*/

var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;


//---------------------- WEBAPP SERVER SETUP ---------------------------------//
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});
//----------------------------------------------------------------------------//


//---------------------- WEBSOCKET COMMUNICATION -----------------------------//
// this is the websocket event handler and say if someone connects
// as long as someone is connected, listen for messages
io.on('connect', function(socket) {
  console.log('a new user connected');
  var questionNum = 0; // keep count of question, used for IF condition.
  socket.on('loaded', function(){// we wait until the client has loaded and contacted us that it is ready to go.

  socket.emit('answer',"Hey, Hello I am Root, a simple chat bot to mess up your mind."); //We start with the introduction;
  setTimeout(timedQuestion, 2500, socket,"What is your Name?"); // Wait a moment and respond with a question.

});
  socket.on('message', (data)=>{ // If we get a new message from the client we process it;
        console.log(data);
        questionNum= bot(data,socket,questionNum);	// run the bot function with the new message
      });
  socket.on('disconnect', function() { // This function  gets called when the browser window gets closed
    console.log('user disconnected');
  });
});
//--------------------------CHAT BOT FUNCTION-------------------------------//
function bot(data,socket,questionNum) {
  var input = data; // This is generally really terrible from a security point of view ToDo avoid code injection
  var answer;
  var question;
  var waitTime;

/// These are the main statments that make up the conversation.
  if (questionNum == 0) {
    socket.emit('changeFont','white');
    answer= 'Hello ' + input + '! Let\'s play a puzzle game. All answers are consists of numbers and uppercase letters';// output response
    waitTime =4000;
    question = 'Let\'s say the answer to the first tricky question is \'1\', then you type \'1\' as your result, so what is the answer to the first question?';			    	// load next question
  }
  else if (questionNum == 1) {
    if (input == '1') {
        answer= 'Correct, is this question too easy for you.';// output response
        waitTime = 2000;
        question = 'Should we make it a little more tricky?';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got 0 question right.';// output response
        waitTime = 2000;
        question = 'Let\'s say the answer to the first tricky question is \'1\', then you type \'1\' as your result, so what is the answer to the first question?';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  }
  else if (questionNum == 2) {
    if (input == '2'){
      answer= 'Correct, you are getting better.';// output response
      waitTime = 2000;
      question = 'Now, this question is twice difficult as the combination of the previous two';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got only 1 question right';// output response
        waitTime = 2000;
        question = 'Should we make it a little more tricky?';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  }
  else if (questionNum == 3) {
    if (input == '6'){
      answer= 'Correct, I guess you are good at math.';// output response
      waitTime = 2000;
      question = 'LOL, do you really think I have questions all like this? TYU, BNM';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got 2 questions right';// output response
        waitTime = 2000;
        question = 'Now, this question is twice difficult as the combination of the previous two';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  }
  else if (questionNum == 4) {
    if (input == 'GHJ'){
      answer= 'Correct, you are indeed really smart.';// output response
      waitTime = 2000;
      question = 'Now things are getiing more elusive. U KICW TIY';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got 3 questions right';// output response
        waitTime = 2000;
        qquestion = 'LOL, do you really think I have questions all like this? TYU, BNM';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  // load next question
  }
  else if (questionNum == 5) {
    if (input == 'ILOVEYOU'){
      answer= 'Correct, you are geneius.';// output response
      waitTime = 2000;
      question = 'Board\nDrug Dealer\nFFFFFF';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got 4 questions right';// output response
        waitTime = 2000;
        question = 'Now things are getiing more elusive. U KICW TIY';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  // load next question
  }
  else if (questionNum == 6) {
    if (input == 'WHITE'){
      answer= 'Correct, let\'s keep rolling.';// output response
      waitTime = 2000;
      question = 'while(1)';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got 5 questions right';// output response
        waitTime = 2000;
        question = 'Board, Drug Dealer, FFFFFF';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  // load next question
  }
  else if (questionNum == 7) {
    if (input == 'FOREVER'){
      answer= 'Correct, I promiss you this will not go forever.';// output response
      waitTime = 2000;
      question = '44277999';			    	// load next question
    }else{
        answer= 'Ops, wrong answer, You got 6 questions right';// output response
        waitTime = 2000;
        question = 'while(1)';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  // load next question
  }
  else if (questionNum == 8) {
    if (input == 'HAPPY'){
      answer= 'Congraduation! You are the ultimate winner';// output response
      waitTime = 2000;
      answer = 'Thank you for paticipating!'
    }else{
        answer= 'Ops, wrong answer, You got 7 questions right';// output response
        waitTime = 2000;
        question = '44277999';			    	// load next question
        waitTime = 2000;
        questionNum--;
    }
  // load next question
  }
  else{
    answer= 'Thank you for paticipating!';// output response
  }


/// We take the changed data and distribute it across the required objects.
  socket.emit('answer',answer);
  setTimeout(timedQuestion, waitTime,socket,question);
  return (questionNum+1);
}

function timedQuestion(socket,question) {
  if(question!=''){
  socket.emit('question',question);
}
  else{
    //console.log('No Question send!');
  }

}
//----------------------------------------------------------------------------//
