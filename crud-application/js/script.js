const array = [];
const tHead = document.querySelector("thead")
const tBody = document.querySelector("tbody")
const table = document.querySelector("table")


const getStudents = () => {
    console.log("Hii")
    const storage = JSON.parse(localStorage.getItem("student-data"));
    if (storage && storage.length >= 1) {
        console.log(storage)
        generateTable(storage);
    } else {
        return
    }
}

const generateTable = (data) => {
    let table_headings;
    data.forEach(element => {
        table_headings = Object.keys(element);
    });
    createTableHeader(table_headings)
    createTableBody(data)
}

const createTableHeader = (table_headings) => {
    let row = document.createElement('tr')

    for (let i of table_headings) {
        let h_data = document.createElement('th')
        h_data.innerText = i
        row.appendChild(h_data)
    }
    tHead.appendChild(row)
}

const createTableBody = (data) => {
    tBody.innerHTML = ``;
    data.forEach((item, index) => {
        let row = document.createElement('tr');
        console.log(1)
        console.log(item)
        for (let i in item) {

            let h_data = document.createElement('td')
            h_data.innerText = item[i]
            row.appendChild(h_data)
        }

        tBody.appendChild(row)
    })
}

const createStudent = document
    .getElementById("create-student")
    .addEventListener("click", (e) => {
        const stud_name = document.getElementById("student_name").value;
        const stud_id = document.getElementById("student_id").value;
        const email = document.getElementById("student_email").value;
        const dob = document.getElementById("student_dob").value;

        if (stud_name && stud_id && email && dob) {
            const formData = {
                stud_id,
                stud_name,
                email,
                dob,
            };
            array.push(formData);
            console.log(array);
            // save to local storage
            saveToLocalStorage(array, formData)
        }
        // add error class to form input
    });

const saveToLocalStorage = (arr, new_Item) => {
    try {
        if (localStorage.getItem("student-data") === null) {
            // create a new local storage obj
            localStorage.setItem("student-data", JSON.stringify(arr))
            generateTable(arr)
        } else {
            // update local storage
            const storage = JSON.parse(localStorage.getItem("student-data"));
            storage.push(new_Item)
            createTableBody(storage)
            localStorage.setItem('student-data', JSON.stringify(storage))
        }
    } catch (error) {
        alert(error.message)
    }
}

// EDIT FUNCTIONALITY
table.onclick = () => {
    let = table.rows;

}

