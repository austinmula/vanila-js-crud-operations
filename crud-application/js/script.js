"use strict";

class Student {
    constructor(student_id, student_name, student_email, student_dob) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.student_email = student_email;
        this.student_dob = student_dob;
    }
}


const array = [];
const tHead = document.querySelector("thead");
const tBody = document.querySelector("tbody");
const table = document.querySelector("table");
const form = document.querySelector("form");
let rowIndex;

const getStudents = () => {
    const storage = JSON.parse(localStorage.getItem("student-data"));
    if (storage && storage.length >= 1) {
        console.log(storage);
        generateTable(storage);
    } else {
        return;
    }
};

const generateTable = (data) => {
    let table_headings;
    data.forEach((element) => {
        table_headings = Object.keys(element);
    });
    createTableHeader(table_headings);
    createTableBody(data);
};

const createTableHeader = (table_headings) => {
    let row = document.createElement("tr");

    for (let i of table_headings) {
        let h_data = document.createElement("th");
        h_data.innerText = i;
        row.appendChild(h_data);
    }
    tHead.appendChild(row);
};

const createTableBody = (data) => {
    tBody.innerHTML = ``;
    data.forEach((item, index) => {
        let row = document.createElement("tr");
        console.log(1);
        console.log(item);
        for (let i in item) {
            let h_data = document.createElement("td");
            h_data.innerText = item[i];
            row.appendChild(h_data);
        }

        tBody.appendChild(row);
    });
};

const createStudent = document
    .getElementById("create-student")
    .addEventListener("click", (e) => {
        const student_name = document.getElementById("student_name").value;
        const student_id = document.getElementById("student_id").value;
        const student_email = document.getElementById("student_email").value;
        const student_dob = document.getElementById("student_dob").value;

        const student = new Student(student_id, student_name, student_email, student_dob)

        if (student_name && student_id && student_email && student_dob) {
            array.push(student);
            saveToLocalStorage(array, student);
            form.reset()
        }
    });

const saveToLocalStorage = (arr, new_Item) => {
    try {
        if (localStorage.getItem("student-data") === null) {
            // create a new local storage obj
            localStorage.setItem("student-data", JSON.stringify(arr));
            generateTable(arr);
        } else {
            // update local storage
            const storage = JSON.parse(localStorage.getItem("student-data"));
            storage.push(new_Item);
            createTableBody(storage);
            localStorage.setItem("student-data", JSON.stringify(storage));
        }
    } catch (error) {
        alert(error.message);
    }
};


// EDIT FUNCTIONALITY
table.onclick = () => {
    let row = table.rows;
    console.log(row[3])

    for (let i = 0; i < row.length; i++) {
        row[i].addEventListener("click", activateItem);
    }
};

function activateItem() {
    rowIndex = this.rowIndex;

    let student_id = document.querySelector("#student_id");
    let student_name = document.querySelector("#student_name");
    let student_email = document.querySelector("#student_email");
    let student_dob = document.querySelector("#student_dob");

    student_id.value = this.cells[0].innerText;
    student_name.value = this.cells[1].innerText;
    student_email.value = this.cells[2].innerText;
    student_dob.value = this.cells[3].innerText;
    console.log(rowIndex)
};

const deleteStudent = () => {
    const storage = JSON.parse(localStorage.getItem("student-data"))
    let tableIndx = rowIndex - 1;

    if (tableIndx) {
        tableIndx && storage.splice(tableIndx, 1)
        localStorage.setItem("student-data", JSON.stringify(storage));
        createTableBody(storage)
        form.reset()
    }
}

const updateStudent = () => {
    console.log('hii')
    const storage = JSON.parse(localStorage.getItem("student-data"))

    let student_id = document.querySelector("#student_id").value;
    let student_name = document.querySelector("#student_name").value;
    let student_email = document.querySelector("#student_email").value;
    let student_dob = document.querySelector("#student_dob").value;

    const student = new Student(student_id, student_name, student_email, student_dob)

    let tableIndx = rowIndex - 1;
    if (tableIndx) {
        tableIndx && storage.splice(tableIndx, 1, student)
        localStorage.setItem("student-data", JSON.stringify(storage));
        createTableBody(storage)
        form.reset()
    }

}