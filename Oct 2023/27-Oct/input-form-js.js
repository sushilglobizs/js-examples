function formSubmit() {
    const stuName = document.getElementById('stu-name').value;
    const stuRollNo = document.getElementById('stu-roll-no').value;
    const gender = document.querySelector('[name="gender"]:checked').value;
    const agree = document.querySelector('[name="agree"]:checked');

    // const form = document.getElementById('student-form');
    // const formData = new FormData(form);
    // for (const data of formData) {
    //     console.log(data[1]);
    // }

    document.getElementById('stuname-value').innerHTML = 'Student name: ' + stuName;
    document.getElementById('sturoll-value').innerHTML = 'Student roll no.: ' + stuRollNo;
    document.getElementById('stugender-value').innerHTML = 'Student gender: ' + gender;
    document.getElementById('stuchecked-value').innerHTML = 'I agree: ' + (agree ? 'CHECKED' : 'UNCHECKED');
}
