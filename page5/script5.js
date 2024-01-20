let attendance = {
    lesson1: { topic: "Тема занятия 1", students: [] },
    lesson2: { topic: "Тема занятия 2", students: [] },
    lesson3: { topic: "Тема занятия 3", students: [] }
};

function markAttendance() {
    let lessonNumber = document.getElementById("lessonNumber").value;
    let studentCheckboxes = document.getElementsByName("student");
    let presentStudents = [];

    for (var i = 0; i < studentCheckboxes.length; i++) {
        if (studentCheckboxes[i].checked) {
            presentStudents.push(studentCheckboxes[i].value);
        }
    }

    attendance["lesson" + lessonNumber].students = presentStudents;
}

function showAttendance() {
    let selectedLesson = document.getElementById("markedLessons").value;
    let attendanceList = document.getElementById("attendanceList");

    let listHtml = "<p>" + attendance[selectedLesson].topic + "</p><ul>";
    for (var i = 0; i < attendance[selectedLesson].students.length; i++) {
        listHtml += "<li>" + attendance[selectedLesson].students[i] + "</li>";
    }
    listHtml += "</ul>";

    attendanceList.innerHTML = listHtml;
} 