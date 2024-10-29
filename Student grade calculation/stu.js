document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateGrade();
});

function calculateGrade() {
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);
    const tamil = parseFloat(document.getElementById('tamil').value);
    const social = parseFloat(document.getElementById('social').value);

    const total = math + science + english + tamil + social;
    const average = total / 5;

    let grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Your average score is ${average.toFixed(2)} and your grade is ${grade}.`;
}
