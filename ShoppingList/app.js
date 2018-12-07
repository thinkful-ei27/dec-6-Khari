'use strict';

var shoppingList = [];

function createItem(item){
  return `<div class="listed-item">${item}
    <input type="button" value="Check" onclick="console.log('${item} check');">
    <input type="button" value="Delete" onclick="console.log('${item} delete');">
    </div>`;
}

function main(){
  $('#add-item').click(function(e){
    console.log('You pushed the button to add an item');
  });

  $('#add-item').submit(function(e){
    e.preventDefault();
    const input = $('#shop-item');
    const item = input.val();

    
  });
}