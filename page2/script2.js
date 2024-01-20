document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var score = 0;

    var q1Answer = document.querySelector('inputname="q1":checked').value;
    var q2Answer = document.querySelector('inputname="q2":checked').value;
    var q3Answer = document.querySelector('inputname="q3":checked').value;

    if (q1Answer === "correct") {
        score++;
    }
    if (q2Answer === "correct") {
        score++;
    }
    if (q3Answer === "correct") {
        score++;
    }

    document.getElementById("result").innerHTML = "Правильных ответов:" + score;
});