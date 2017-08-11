(function() {
  'use strict';
  // YOUR CODE HERE

  console.log('hello');
// STOP
let stopButton = document.getElementById('stopButton')
// console.log('stopButton: ', stopButton);
let stopLight = document.getElementById('stopLight')

let stop= stopButton.addEventListener('click', function(){
  console.log('on');
  stopLight.classList.toggle('stop')
})

// SLOW
let slowButton = document.getElementById('slowButton')
let slowLight = document.getElementById('slowLight')

let slow = slowButton.addEventListener('click', function(){
  // console.log('on');
  slowLight.classList.toggle('slow')
})

// GO
let goButton = document.getElementById('goButton')
let goLight = document.getElementById('goLight')

let go = goButton.addEventListener('click', function(){
  // console.log('on');
  goLight.classList.toggle('go')
})



})();
