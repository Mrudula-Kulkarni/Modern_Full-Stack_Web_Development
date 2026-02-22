// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM 
let form = document.getElementById('addForm');
let table = document.getElementById('employees');
let employeeCountOutput = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// Initial employee data (at least 5 employees)
let initialEmployees = [
    { id: 12341234, name: "Mrudula Kulkarni", extension: 1234, email: "mrudula.kulkarni@sdsu.edu", department: "Engineering" },
    { id: 11223344, name: "Jane Smith", extension: 5678, email: "jane.smith@sdsu.com", department: "Executive" },
    { id: 33221144, name: "Robert Johnson", extension: 9101, email: "robert.johnson@gmail.com", department: "Marketing" },
    { id: 66557744, name: "Emily Davis", extension: 1122, email: "emily.davis@outlook.com", department: "Sales" },
    { id: 23412389, name: "Michael Brown", extension: 3344, email: "michael.brown@ok.com", department: "Sales" }
];

// Retrieve employees from localStorage or use initialEmployees if not found
function loadEmployeesFromStorage() {
    let employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    employeeCount = employees.length;
    employeeCountOutput.value = employeeCount;

    // Populate the table with employees
    employees.forEach(employee => {
        let row = table.insertRow();

        // Insert cells for each employee data
        let cellID = row.insertCell();
        let cellName = row.insertCell();
        let cellExt = row.insertCell();
        let cellEmail = row.insertCell();
        let cellDept = row.insertCell();
        let cellDelete = row.insertCell();

        // Add employee data to the row
        cellID.appendChild(document.createTextNode(employee.id));
        cellName.appendChild(document.createTextNode(employee.name));
        cellExt.appendChild(document.createTextNode(employee.extension));
        cellEmail.appendChild(document.createTextNode(employee.email));
        cellDept.appendChild(document.createTextNode(employee.department));

        // Create the delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        cellDelete.appendChild(deleteButton);

        // Delete employee on button click
        deleteButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to delete this employee?')) {
                table.deleteRow(row.rowIndex);
                employeeCount--; // Decrement employee count
                employeeCountOutput.value = employeeCount;
                // Remove the employee from localStorage
                removeEmployeeFromStorage(employee.id);
            }
        });
    });
}

// Function to save employee data to localStorage
function saveEmployeesToStorage(employees) {
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Function to remove employee from localStorage
function removeEmployeeFromStorage(empId) {
    let employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    employees = employees.filter(employee => employee.id !== empId);
    saveEmployeesToStorage(employees);
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = Number(document.getElementById('id').value);
    let name = document.getElementById('name').value;
    let extension = Number(document.getElementById('extension').value);
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // Log to make sure values are being captured correctly
    console.log(empId, name, extension, email, department);

    // Check if the values are captured correctly
    if (!empId || !name || !extension || !email || !department) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new employee object
    let newEmployee = {
        id: empId,
        name: name,
        extension: extension,
        email: email,
        department: department
    };

    // Add the new employee to the table and localStorage
    let row = table.insertRow();

    // Insert cells for each employee data
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    // Add employee data to the row
    cellID.appendChild(document.createTextNode(empId));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // Create the delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger');
    cellDelete.appendChild(deleteButton);

    // Delete employee on button click
    deleteButton.addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this employee?')) {
            table.deleteRow(row.rowIndex);
            employeeCount--; // Decrement employee count
            employeeCountOutput.value = employeeCount;
            // Remove the employee from localStorage
            removeEmployeeFromStorage(empId);
        }
    });

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    employeeCountOutput.value = employeeCount;

    // Save the updated employee data to localStorage
    let employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    employees.push(newEmployee);
    saveEmployeesToStorage(employees);
});

// Load employees from localStorage or initial data when the page loads
window.onload = function () {
    loadEmployeesFromStorage();
};