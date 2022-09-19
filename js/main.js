$(document).ready(function(){

  let $btns=$('.projects-area .button-group button');

  $btns.click(function(e){

    $('.projects-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.projects-area .grid').isotope({
      filter:selector
    });
    return false;
  })

});
