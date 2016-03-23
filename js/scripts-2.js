// Business Logic
var vowelCheck = function(word) {
  var vowels = 'aeiou';
  var wordArray = word.split()  // array ["hello"]
debugger;
  // for (var i = 0; i < wordArray.length; i++) {
    if (vowels.indexOf(wordArray[0]) > -1) {  // if letter isn't equal to vowel
      return false;  // if letter not a vowel, then false
    } else {
      return true;
    }
  // }

}







// User Interface Logic -------------------
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

  var addAy = 'ay';
  var word = $('.sentence').val();  // get value as string
  var result = vowelCheck(word);  // plug string value in vowelCheck function

  if (vowelCheck === true) {
    $('#results').append(word + addAy);  // if 1st is vowel, add ay to end
  } else {
    $('#results').append(word);
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
