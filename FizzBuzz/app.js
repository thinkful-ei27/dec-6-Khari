'use strict';
function fizzbuzz(num){
  if(num % 15 ===0) return 'fizzbuzz';
  if(num % 5 ===0) return 'buzz';
  if(num % 3 ===0) return 'fizz';
  return num;
}

function makeFizzBuzzArray(n){
  const arr = [];
  for (let i=1; i<=n; i++){
    arr.push(fizzbuzz(i));
  }
  return arr;
}

function fizzBuzzItemToHTML(){
  return `<div class="Fizz-buzz-item">${item}</div>`;
}

function fizzBuzzArrayToHTML(arr){
  const html = arr.map(fizzBuzzArrayToHTML);
  return html;
}

function fizzBuzzHTMLToDOM(){
  const results = $('.js-results');
  results.html('<h1>Woohoo</h1>');
}

function main(){
  $('#number-chooser').submit(function(e){
    e.preventDefault();
    const input = $('#number-choice');
    const number = input.val();

    const fizzBuzzArray = makeFizzBuzzArray(number);

    const html = fizzBuzzArrayToHTML(fizzBuzzArray);

    fizzBuzzItemToHTML(html);
  });


  const fizzBuzzArray = makeFizzBuzzArray(100);

  const html = fizzBuzzArrayToHTML(fizzBuzzArray);

  fizzBuzzHTMLToDOM(html);
}