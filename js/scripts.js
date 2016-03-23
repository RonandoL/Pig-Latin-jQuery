// Business Logic
var vowelCheck = function(userInput) {
  var vowels = 'aeiou';
  var word = userInput;  // string

  if (vowels.indexOf(word[0]) > -1) {  // string.indexOf(searchvalue,start)
    // if letter is equal to vowel
    return true;  // 1st letter is a vowel, then true 'hello'
  } else {
    return false;  // 1st letter is a vowel, then false 'ant'
  }


}







// User Interface Logic -------------------
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    $('#results').empty();
    var addAy = 'ay';
    var userInput = $('.sentence').val();  // get value as string
    var result = vowelCheck(userInput);  // plug string value in vowelCheck function

    if (result === true) {
      $('#results').append('<h4>' + userInput + addAy + '</h4>');  // if 1st is vowel, add ay to end
    } else {
      $('#results').append('<h4>' + userInput + '</h4>');
    }

  });





  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
