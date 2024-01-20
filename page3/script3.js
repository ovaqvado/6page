document.getElementById("textForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var inputText = document.getElementById("inputText").value;
    var fontSize = document.getElementById("fontSize").value + "px";
    var textColor = document.getElementById("textColor").value;
    var fontFamily = document.getElementById("fontFamily").value;

    var styledText = document.getElementById("styledText");
    styledText.innerHTML = inputText;
    styledText.style.fontSize = fontSize;
    styledText.style.color = textColor;
    styledText.style.fontFamily = fontFamily;
});