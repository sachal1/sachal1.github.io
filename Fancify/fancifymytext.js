function makeTextBigger() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24pt";
}
  
  function handleRadioChange() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");
  
    if (fancyRadio.checked) {
      textInput.style.fontWeight = "bold";
      textInput.style.color = "blue";
      textInput.style.textDecoration = "underline";
    } else {
      textInput.style.fontWeight = "normal";
      textInput.style.color = "black";
      textInput.style.textDecoration = "none";
    }
}
  
  function mooText() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
  
    text = text.toUpperCase();
  
    // Add "-Moo" suffix 
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      words[words.length - 1] += "-MOO";
      sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");
  
    textInput.value = text;
}
  