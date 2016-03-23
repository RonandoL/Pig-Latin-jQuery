// Business Logic
var vowelCheck = function(userInput) {
  var vowels = 'aeiou';
  var phrase = userInput.split(' ');  // array ['an apple']
  var addAy = 'ay';
  var newPhrase = ''

  for (var i = 0; i < phrase.length; i++) { // ['ant, 'man']
    if (vowels.indexOf(phrase[i][0]) > -1) {  // string.indexOf(searchvalue,start)
      newPhrase += phrase[i] + addAy;
    } else {
      newPhrase += phrase[i];
    }
    alert(newPhrase);
    return newPhrase;
  }

}

// Not done, can't get fucker to print up 2 words with appended 'ay'





// User Interface Logic -------------------
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    $('#results').empty();
    var userInput = $('.sentence').val();  // get value as string
    var result = vowelCheck(userInput);  // plug string value in vowelCheck function


      $('#results').append('<h4>' + userInput + '</h4>');  // if 1st is vowel, add ay to end


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
