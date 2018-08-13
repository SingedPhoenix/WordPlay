$(document).ready(function() {
  $("form#sentenceInput").submit(function(event) {

  var response = $("input#actualSentence").val();

  var words = response.split([" "]);

  var newAnswers = [];
  words.forEach(function(word) {
    if (words.length >= 3) {
      newAnswers.push(word);
    }
  });

  newAnswers = newAnswers.reverse();
  newAnswers = newAnswers.join(" ");

  alert(newAnswers);

  event.preventDefault();
  });

});
