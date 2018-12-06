'use strict';
function CatCarosel(){
  $('.thumbnail').click(function(event){
    const imgSrc = $(this).find('img').attr('src');
    const imgAlt = $(this).find('img').attr('src');
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  });
}

$(CatCarosel);