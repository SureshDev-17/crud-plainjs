const cardsContainer = document.getElementById("cardsContainer");

var employeeLists = [
    {
        "firstName": "Suresh",
        "lastName": "SD",
        "salary": 20000,
        "rating": 4.5,
        "profilePicture": "images/bg4.jpg",
    },
    {
        "firstName": "Karthi",
        "lastName": "Keyan",
        "salary": 20000,
        "rating": 4.5,
        "profilePicture": "images/bg3.jpg",
    },
    {
        "firstName": "Vignesh",
        "lastName": "Waran",
        "salary": 20000,
        "rating": 4.5,
        "profilePicture": "images/bg2.jpg",
    }
];

let selectedEmployeeIndex = null;

function generateHtml(employee, index) {
    return `
        <div class="card">
            <img src="${employee.profilePicture}" alt="Profile Picture" />
            <p>First Name: ${employee.firstName}</p>
            <p>Last Name: ${employee.lastName}</p>
            <p>Salary: ${employee.salary}</p>
            <p>Rating: ${employee.rating}</p>
            <button class="edit-btn" onclick="editEmployeeAction(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
        </div>
    `;
}


function displayEmployees() {
    let htmlString = "";
    employeeLists.forEach((employee, index) => {
        htmlString += generateHtml(employee, index);
    });
    cardsContainer.innerHTML = htmlString;
}

function formDataAction() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const salary = document.getElementById("salary").value;
    const rating = document.getElementById("rating").value;
    const profilePicture = document.getElementById("profilePicture").value;

    let employeeObj = { firstName, lastName, salary, rating, profilePicture };

    employeeLists.push(employeeObj);
    clearForm();
    displayEmployees();
}

function editEmployeeAction(index) {
    selectedEmployeeIndex = index;
    const employee = employeeLists[index];

    document.getElementById("firstName").value = employee.firstName;
    document.getElementById("lastName").value = employee.lastName;
    document.getElementById("salary").value = employee.salary;
    document.getElementById("rating").value = employee.rating;
    document.getElementById("profilePicture").value = employee.profilePicture;
}

function updateFormDataAction() {
    if (selectedEmployeeIndex !== null) {
        employeeLists[selectedEmployeeIndex] = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            salary: document.getElementById("salary").value,
            rating: document.getElementById("rating").value,
            profilePicture: document.getElementById("profilePicture").value,
        };
        displayEmployees();

        const updatedCard = document.querySelectorAll(".card")[selectedEmployeeIndex];
        if (updatedCard) {
            updatedCard.classList.add("glow");
            setTimeout(() => {
                updatedCard.classList.remove("glow");
            }, 1000);
        }

        selectedEmployeeIndex = null;
        clearForm();
    }
}

function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeLists.splice(index, 1);
        displayEmployees();
    }
}


function clearForm() {
    document.getElementById("employeeForm").reset();
}

// Initial display
displayEmployees();
