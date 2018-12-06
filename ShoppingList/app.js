'use strict';
function createItem(item){
  return `<div class="listed-item">${item}
    <input type="button" value="Check" onclick="console.log('${item} check');">
    <input type="button" value="Delete" onclick="console.log('${item} delete');">
    </div>`;
}

function main(){
  $('button').click(function(e){
    console.log('You pushed the button to add an item');
  });
}